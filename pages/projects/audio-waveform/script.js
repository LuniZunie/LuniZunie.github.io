let lastMove = Date.now();

let rainbow;
let colors = /* [ 'red', 'orange', 'orange', 'yellow', 'yellow', 'green', 'green', 'blue', 'blue', 'purple', 'purple' ] */ [ 'blue', 'red', 'orange', 'green' ];
// colors = colors.concat(colors.reverse());

let colorScore = 0;
let lastColorScore = 0;
let lastDColorScore = 0;

let oldColors = [];
async function CreateGradient(soundCode) {
  const $paper = body.appendChild('canvas');
  $paper.width = 1001;
  $paper.height = 1;

  const pen = $paper.getContext('2d', { willReadFrequently: true });

  const gradient = pen.createLinearGradient(0, 0, $paper.width, 0);

  const primaryColors = [
    'rgb(0, 0, 255)',
    'rgb(256, 0, 128)',
    'rgb(128, 0, 256)',
    'rgb(255, 0, 255)',
    'rgb(255, 0, 0)',
    'rgb(0, 255, 0)'
  ];
  const secondaryColors = [
    'rgb(255, 128, 0)',
    'rgb(0, 255, 128)',
    'rgb(128, 0, 255)',
    'rgb(255, 0, 128)',
    'rgb(0, 128, 255)',
    'rgb(128, 255, 0)',
    'rgb(255, 0, 0)',
    'rgb(255, 255, 0)',
    'rgb(0, 255, 0)',
    'rgb(0, 255, 255)',
    'rgb(0, 0, 255)',
    'rgb(255, 0, 255)'
  ];

  const possibleColors = [
    [ 'rgb(0, 0, 0)' ],
    primaryColors,
    secondaryColors,
    secondaryColors,
    secondaryColors,
  ].map(function(colors, i) {
    const remove = oldColors[i];
    if (!remove)
      return colors;

    return colors.length > 1 ? colors.filter(
      color => color != remove
    ) : colors;
  });

  let randomIndex = 0;
  let theseColors = [ ...new Set(possibleColors.map(
    colors => colors[pRandom(soundCode, randomIndex++, colors.length)]
  )) ];
  while (theseColors.length != possibleColors.length)
    theseColors = [ ...new Set(possibleColors.map(
      colors => colors[pRandom(soundCode, randomIndex++, colors.length)]
    )) ];

  oldColors = theseColors;
  theseColors.forEach(
    (color, i) => gradient.addColorStop(i / possibleColors.length, color)
  );

  pen.fillStyle = gradient;
  pen.fillRect(0, 0, $paper.width, $paper.height);

  delete colors;

  rainbow = function(percent) {
    const color = pen.getImageData(percent / 100 * $paper.width, 0, 1, 1).data;

    if (percent / (100 / possibleColors.length) >>> 0)
      colorScore++;

    return `rgba(${color[0]}, ${color[1]}, ${color[2]}, 1)`;
  };

  $paper.remove();

  delete $paper;
  delete pen;

  body.style.background = `rgba(${rainbow(0).replace(/(rgba\(|1\)|\s)/g, '').split(',').map(
    (number, i) => i == 3 ? 1 : +number / 16
  ).join(', ')})`;
}

window.onclick = async function() {
  window.onclick = null;
  CreateGradient('0');

  const audio = new (window.AudioContext || window.webkitAudioContext)();
  const stream = audio.createMediaStreamSource(await navigator.mediaDevices.getUserMedia({ audio: true }));
  const analyzer = audio.createAnalyser();

  analyzer.fftSize = 2048;
  stream.connect(analyzer);

  const auidoData = new Float32Array(analyzer.fttSize);
  const freqData = new Float32Array(analyzer.frequencyBinCount);

  const freqRange = [ 20, 15000 ];
  const minDB = 108;
  const maxDB = 64;
  const trueMaxDB = minDB / (minDB / maxDB) ** 0.125;

  let HzMult;
  let freqInRange;

  let rows, columns;
  let rowsCenter, columnsCenter;

  let mapper;

  let lastAvg = 0;

  let frame = 0;

  let soundCode = '';
  LooseUpdate(async function() {
    frame++;

    body.style.cursor = lastMove + 1000 < Date.now() ? 'none' : 'default';

    analyzer.getFloatTimeDomainData(auidoData);
    analyzer.getFloatFrequencyData(freqData);

    if (!HzMult) {
      HzMult = audio.sampleRate / 2 / freqData.length;
      body.style.setProperty('--hz-mult', `${HzMult / freqRange[1] * 100}vw`);

      freqInRange = ((freqRange[1] - freqRange[0]) / HzMult >>> 0) + 1;
      while ((freqInRange ** 0.5) % 2 != 1) {
        freqRange[1]++;
        freqInRange = ((freqRange[1] - freqRange[0]) / HzMult >>> 0) + 1;
      }

      columns = rows = freqInRange ** 0.5;
      rowsCenter = columnsCenter = rows / 2;

      body.style.setProperty('--rows', rows);
      body.style.setProperty('--columns', columns);

      mapper = Array.from({ length: rows * columns }, function(_, i) {
        const row = i / columns >>> 0;
        const column = i % columns;

        return [ column, row ];
      }).sort(
        (a, b) => ((a[0] - columnsCenter) ** 2 + (a[1] - rowsCenter) ** 2) ** 0.5 - ((b[0] - columnsCenter) ** 2 + (b[1] - rowsCenter) ** 2) ** 0.5
      );
    }

    let j = -1;
    let avgDB = [];

    colorScore = 0;
    freqData.forEach(async function(dB, i) {
      Hz = (i - freqRange[0]) * HzMult;
      if (Hz < 0 || Hz > freqRange[1] - freqRange[0])
        return;

      soundCode += Number.isFinite(dB) ? (-dB).toString(16).toLength(2, '0') : '00';
      j++;

      dB = (dB.clamp(-minDB, 0) + minDB) / (minDB / maxDB) ** 0.125;

      const [ column, row ] = mapper[j];

      const scale = dB / maxDB;

      let $point = body.qs(`#point_${j}.point`);
      if (!$point) {
        $point = body.appendChild('div');
        $point.id = `point_${j}`;
        $point.classList.add('point');
        $point.style.zIndex = freqData.length - i;
      }

      $point.style.left = `${(column + 1) / (columns + 1) * 120 - (100 / columns * scale) + 35}vw`;
      $point.style.top = `${(row + 1) / (rows + 1) * 120 - (100 / rows * scale) + 35}vh`;

      $point.style.setProperty('--true-scale', scale + 0.9);
      $point.style.setProperty('--scale', `${scale * 50}vmin`);
      $point.style.setProperty('--height', `${scale * 20}vh`);

      let color = rainbow(scale * 50).replace('1)', `${(scale * 0.75 + 0.25) ** 1.5})`);

      $point.style.setProperty('--color', color);
      $point.style.background = color;

      $point.dataset.frame = frame;

      /* body.qsa(`.point:not([data-frame='${frame}'])`).forEach(
        point => point.remove()
      ); */

      avgDB.push(dB);
    });
    colorScore = colorScore / j * 100;
    let dColorScore = colorScore - lastColorScore;
    console.log(dColorScore);

    avgDB = avgDB.avg();

    body.style.opacity = (avgDB / trueMaxDB) ** 0.3;

    const scale = (avgDB / trueMaxDB) + 0.9;
    body.style.scale = scale;

    avgDB = avgDB / 10 >>> 0;
    if (dColorScore > 2.5)
      CreateGradient(soundCode.hashCode());

    lastAvg = avgDB;
    lastDColorScore = dColorScore;
    lastColorScore = colorScore;

    soundCode = '';
  });
};

function pRandom(seed, index, limit) {
  const random = (((seed * 0x10003) % 0xFFFFFF2F + (index * 0x10001) % 0xFFFFFA7F) << index % 4.7) % limit;
  const randomSign = random >> 31;

  return (random ^ randomSign) - randomSign;
}

window.onmousemove = async function() {
  lastMove = Date.now();
};