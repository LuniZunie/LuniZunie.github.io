const colors = [
  '#4D8066','#FF4D4D','#999966','#B33300','#B3B31A','#809980','#4D80CC','#CCFF1A','#FF99E6','#80B300','#00B3E6','#1AFF33','#99E6E6','#CC9999','#33FFCC','#FFB399','#6666FF','#66991A','#00E680','#E6B333','#E666B3','#E6331A','#E64D66','#B366CC','#4D8000','#B34D4D','#E6B3B3','#999933','#4DB380','#33991A','#809900','#66664D','#FF33FF','#4DB3FF','#E666FF','#66E64D','#6680B3','#CCCC00','#FF3380','#CC80CC','#FFFF99','#991AFF','#FF6633','#66994D','#E6FF80','#FF1A66','#3366E6','#1AB399','#99FF99','#9900B3'
];

const groupColors = {
  'diatomic nonmetal': [ 128, 0, 0 ],
  'noble gas': [ 128, 128, 0 ],
  'alkali metal': [ 0, 128, 0 ],
  'alkaline earth metal': [ 0, 128, 128 ],
  'metalloid': [ 0, 0, 128 ],
  'polyatomic nonmetal': [ 128, 0, 128 ],
  'post-transition metal': [ 128, 64, 0 ],
  'transition metal': [ 0, 128, 64 ],
  'lanthanide': [ 64, 0, 128 ],
  'actinide': [ 128, 0, 64 ],
};

const Mouse = {
  x: null,
  y: null
};

const DPI = {
  x: null,
  y: null,
};

let FPS;

addEventListener('mousemove', e => {
  Mouse.x = e.pageX;
  Mouse.y = e.pageY;
});

Math.absMax = function(...numbers) {
  return numbers.reduce(
    (max, number) => Math.abs(number) > Math.abs(max) ? max : number
  );
};
Math.absMin = function(...numbers) {
  return numbers.reduce(
    (min, number) => Math.abs(number) < Math.abs(min) ? min : number
  );
};

Number.prototype.clamp = function(min = -Infinity, max = Infinity) {
	return Math.max(Math.min(this, max), min);
};
Number.prototype.toDecimals = function(decimals = Infinity) {
  const getDecimals = function(value) {
    value = (+value).noExponents().toString();
    return (value.split('.')[1] ?? '').length;
  };

  if (decimals === Infinity)
		return this;
	else if (decimals === -Infinity)
		return 0;
	else if (!Number.isInteger(decimals))
    throw `(Number, prototype, toDecimals) Unexpected data passed to parameter_0 (decimals)!<br><br>Expected: Integer or Infinity or -Infinity<br>Passed: ${decimals}`;

	const modifier = 10 ** decimals;
	const number = Math.floor(this * modifier) / modifier;

  return `${number}${number.toString().includes('.') || !this.toString().includes('.') ? '' : '.'}${Array.from({ length: Math.min(getDecimals(this), 2) - getDecimals(number) },
    () => '0'
  ).join('')}`;
};
Number.prototype.noExponents = function() {
  let data = String(this).split(/[eE]/);
  if (data.length == 1) return data[0];

  let z = '',
    sign = this < 0 ? '-' : '',
    str = data[0].replace('.', ''),
    mag = Number(data[1]) + 1;

  if (mag < 0) {
    z = sign + '0.';
    while (mag++) z += '0';
    return z + str.replace(/^\-/, '');
  }
  mag -= str.length;
  while (mag--) z += '0';
  return str + z;
};

String.prototype.toUpperCaseWords = function() {
  return this.split(' ').map(
    word => word[0].toUpperCase() + word.slice(1, Infinity)
  ).join(' ');
};

Object.range = function(object, logarithmic) {
  let values = Object.values(Object.fromEntries(Object.entries(object).filter(
    ([ key, value ]) => key[0] !== key[0].toLowerCase() && Number.isFinite(value)
  )));

  const trueMin = Math.min(...values);
  if (logarithmic) {
    values = values.map(
      value => Math.log10(value - trueMin)
    ).filter(
      value => Number.isFinite(value)
    );
  }

  const min = Math.min(...values);
  const max = Math.max(...values);

  return Object.fromEntries(Object.entries(object).filter(
    ([ _, value ]) => Number.isFinite(value) && !(logarithmic && values === 0)
  ).map(
    ([ key, value ]) => [ key, ((logarithmic ? Math.log10(value - trueMin) : value) - min) / (max - min) ]
  ));
};

Array.prototype.random = function(remove) {
	if (remove) {
		const i = Math.floor(Math.random() * this.length);
		return (this.splice(i, 1))[0];
	} else
		return this[Math.floor(Math.random() * this.length)];
};
Array.prototype.min = function() {
  return Math.min(...this);
};
Array.prototype.max = function() {
  return Math.max(...this);
};
Array.prototype.sum = function() {
  return this.reduce(
    (sum, value) => sum + value,
  0);
};
Array.prototype.avg = function() {
  return this.reduce(
    (sum, value) => sum + value,
  0) / this.length;
};
Array.prototype.range = function() {
  const min = Math.min(...this);
  const max = Math.max(...this);

  return this.map(
    value => (value - min) / (max - min)
  );
};

Element.prototype.spark = function(particles, size, time) {
  const { x, y, width, height } = this.getBoundingClientRect();
  const { width: fgWidth, height: fgHeight } = fg.getBoundingClientRect();

  Array.from({ length: particles },
    () => new Spark((x + Math.random() * width) / fgWidth, (y + Math.random() * height) / fgHeight, (Math.random() - 0.5) * particleInfo.maxVelocity, (Math.random() - 0.5) * particleInfo.maxVelocity, Math.random() + 2, time)
  );
};
Element.prototype.particle = function(particles, size, time) {
  const { x, y, width, height } = this.getBoundingClientRect();
  requestIdleCallback(() => Array.from({ length: particles },
    () => new Particle((x + Math.random() * width) / innerWidth, (y + Math.random() * height) / innerHeight, (Math.random() - 0.5) * particleInfo.maxVelocity, (Math.random() - 0.5) * particleInfo.maxVelocity, Math.random() * 0.65 + 0.5)
  ), { timeout: 1 });
};
Element.prototype.child = function(className) {
  return this.getElementsByClassName(className)[0];
};
Element.prototype.template = function() {
  const newElement = this.cloneNode(true);
  newElement.classList.remove('template');

  if (this.nextElementSibling)
    this.parentElement.insertBefore(newElement, this.nextElementSibling);
  else
    this.parentElement.appendChild(newElement);

  return newElement;
};

const shownElements = 118;
const distance = (x, y) => (x ** 2 + y ** 2) ** 0.5;
const sleep = time => new Promise(
  resolve => setTimeout(resolve, time)
);

const fg = document.getElementById('foreground');
const fgPen = fg.getContext('2d');
fg.width = innerWidth;
fg.height = innerHeight;

const bg = document.getElementById('background');
const bgPen = bg.getContext('2d');
bg.width = innerWidth;
bg.height = innerHeight;

const stabilityBand = document.getElementById('stability_band');
const stabilityBandPen = stabilityBand.getContext('2d');

const abundanceChart = document.getElementById('abundance_chart');

const abundanceCanvas = abundanceChart.child('pie_chart');
const acPen = abundanceCanvas.getContext('2d');
abundanceCanvas.width = innerWidth / 4;
abundanceCanvas.height = innerWidth / 4;
acPen.save();
acPen.scale(innerWidth / 4, innerWidth / 4);

const abundanceCanvasKey = abundanceChart.child('pie_chart_key');
const ackPen = abundanceCanvasKey.getContext('2d');
abundanceCanvasKey.width = innerWidth;

const dpiElement = document.getElementById('DPI');

window.onresize = function() {
  acPen.restore();
  abundanceCanvas.width = innerWidth / 4;
  abundanceCanvas.height = innerWidth / 4;
  acPen.save();
  acPen.scale(innerWidth / 4, innerWidth / 4);

  abundanceCanvasKey.width = innerWidth;

  if (loadedElement !== undefined)
    DrawAbundanceChart(pTable[loadedElement]);
};

const sidebar = document.getElementById('sidebar');
sidebar.child('close').onclick = function() {
  sidebar.dataset.hidden = true;
};

const credits = document.getElementById('credits');
credits.onclick = function(e) {
  let element = e.target;
  let result = element.nodeName === 'A' ? -1 : (element === document.body || element === this ? 1 : 0);
  while (element.parentElement && !result) {
    element = element.parentElement;
    result = element.nodeName === 'A' ? -1 : (element === document.body || element === this ? 1 : 0);
  }

  if (result === 1)
    this.dataset.hidden = true;
};

const decayChainElement = document.getElementById('decay_chain');
decayChainElement.onclick = function(e) {
  let element = e.target;
  let result = element.nodeName === 'A' || element.classList.contains('no_close') ? -1 : (element === document.body || element === this ? 1 : 0);
  while (element.parentElement && !result) {
    element = element.parentElement;
    result = element.nodeName === 'A' || element.classList.contains('no_close') ? -1 : (element === document.body || element === this ? 1 : 0);
  }

  if (result === 1)
    this.dataset.hidden = true;
};

window.onclick = function(e) {
  if (nSidebar.dataset.hidden === 'true') {
    let element = e.target;
    let result = element.classList.contains('isotope') || element.classList.contains('no_close') || (element.classList.contains('searchable') && element.dataset.search == 'true') || element === credits || element === decayChainElement || element === nSidebar ? -1 : (element === document.body ? 1 : 0);
    while (element.parentElement && !result) {
      element = element.parentElement;
      result = element.classList.contains('isotope') || element.classList.contains('no_close') || (element.classList.contains('searchable') && element.dataset.search == 'true') || element === credits || element === decayChainElement || element === nSidebar || element === sidebar || element.classList.contains('element') || element.id === 'top_buttons' ? -1 : (element === document.body ? 1 : 0);
    }

    if (result !== 1)
      return;

    sidebar.dataset.hidden = true;
  } else {
    let element = e.target;
    let result = element.classList.contains('isotope') || element.classList.contains('no_close') || (element.classList.contains('searchable') && element.dataset.search == 'true') || element === credits || element === decayChainElement || element === nSidebar ? -1 : (element === document.body ? 1 : 0);
    while (element.parentElement && !result) {
      element = element.parentElement;
      result = element.classList.contains('isotope') || element.classList.contains('no_close') || (element.classList.contains('searchable') && element.dataset.search == 'true') || element === credits || element === decayChainElement || element === nSidebar || element.id === 'top_buttons' ? -1 : (element === document.body ? 1 : 0);
    }

    if (result !== 1)
      return;

    nSidebar.dataset.stuckOpen = null;
    [...sidebar.child('information').child('isotopes').getElementsByClassName('isotope')].forEach(
      element => element.classList.remove('selected')
    );

    nSidebar.dataset.hidden = true;
  }
};

const creditsButton = document.getElementById('credits_button');
creditsButton.onmouseup = function(e) {
  credits.dataset.hidden = false;
};

const colorButton = document.getElementById('color_button');
colorButton.onmouseup = function(e) {
  document.body.dataset.saturated = {
    true: 'false',
    false: 'true',
  }[document.body.dataset.saturated];

  if (document.body.dataset.saturated == 'true')
    pTable.forEach(element => {
      const html = document.getElementById(element.name.toLowerCase());
      if (html) {
        html.style.background = `rgb(${(groupColors[element.series] ?? [ 16, 16, 32 ]).join(', ')})`;
        const shadow = `rgb(${(groupColors[element.series] ?? [ 16, 16, 32 ]).map(
          value => value * 1.25
        ).join(', ')})`;
        html.style.boxShadow = `1px 1px ${shadow}, 2px 2px ${shadow}, 3px 3px ${shadow}, 4px 4px ${shadow}, 5px 5px ${shadow}, 6px 6px ${shadow}, 7px 7px ${shadow}, 8px 8px ${shadow}, 9px 9px ${shadow}, 10px 10px ${shadow}`;
      }
    });
  else
    pTable.forEach(element => {
      const html = document.getElementById(element.name.toLowerCase());
      if (html) {
        html.style.background = null;
        html.style.boxShadow = null;
      }
    });
};

const loadedElementColors = {};

const elementalTrends = {
  'group:divider::1': 7,
  'group:side:Electrons': 4,
  '#_Electrons:electrons': function(log) {
    const elements = Object.fromEntries(pTable.map(
      element => [ element.symbol, element.electrons_per_shell ? element.electrons_per_shell.sum() : undefined ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  '#_Electron_Shells:electrons': function(log) {
    const elements = Object.fromEntries(pTable.map(
      element => [ element.symbol, element.electrons_per_shell?.length ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'Electronegativity:electrons': function(log) {
    const elements = Object.fromEntries(pTable.map(
      element => [ element.symbol, element.electronegativity_pauling ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'Electron_Affinity:electrons': function(log) {
    const elements = Object.fromEntries(pTable.map(
      element => [ element.symbol, element.electron_affinity ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'group:side:Radius': 3,
  'Calculated:radius': function(log) {
    const elements = Object.fromEntries(pTable.map(
      element => [ element.symbol, element.radius?.calculated ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'Empirical:radius': function(log) {
    const elements = Object.fromEntries(pTable.map(
      element => [ element.symbol, element.radius?.empirical ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'Covalent:radius': function(log) {
    const elements = Object.fromEntries(pTable.map(
      element => [ element.symbol, element.radius?.covalent ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'group:divider::2': 8,
  'group:side:Tempature': 4,
  'Boiling:tempature': function(log) {
    const elements = Object.fromEntries(pTable.map(
      element => [ element.symbol, element.boiling_point ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'Critical:tempature': function(log) {
    const elements = Object.fromEntries(pTable.map(
      element => [ element.symbol, element.critical_temperature ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'Melting:tempature': function(log) {
    const elements = Object.fromEntries(pTable.map(
      element => [ element.symbol, element.melting_point ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'Superconducting:tempature': function(log) {
    const elements = Object.fromEntries(pTable.map(
      element => [ element.symbol, element.superconducting_point ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'group:side:Heat': 4,
  'Specific:heat': function(log) {
    const elements = Object.fromEntries(pTable.map(
      element => [ element.symbol, element.heat?.specific ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'Vaporization:heat': function(log) {
    const elements = Object.fromEntries(pTable.map(
      element => [ element.symbol, element.heat?.vaporization ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'Fusion:heat': function(log) {
    const elements = Object.fromEntries(pTable.map(
      element => [ element.symbol, element.heat?.fusion ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'Molar:heat': function(log) {
    const elements = Object.fromEntries(pTable.map(
      element => [ element.symbol, element.heat?.molar ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'group:divider::3': 5,
  'group:side:Conductivity': 2,
  'Thermal:conductivity': function(log) {
    const elements = Object.fromEntries(pTable.map(
      element => [ element.symbol, element.conductivity?.thermal ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'Electric:conductivity': function(log) {
    const elements = Object.fromEntries(pTable.map(
      element => [ element.symbol, element.conductivity?.electric ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'Magnetic_Susceptibility': function(log) {
    const elements = Object.fromEntries(pTable.map(
      element => [ element.symbol, element.magnetic_susceptibility?.mass ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
};

const isotopicTrends = {
  'group:divider::1': 4,
  'group:side:Isotopes_&_Isomers': 4,
  'group:divider:#_Isotopes': 2,
  'All:isotopes': function(log) {
    const amounts = Object.fromEntries(Object.entries(Nubase2020.nuclides).map(
      ([ key, element ]) => [ key, Object.values(element).length ]
    ));

    return Object.range(amounts, log);
  },
  'Stable:#_isotopes': function(log) {
    const amounts = Object.fromEntries(Object.entries(Nubase2020.nuclides).map(
      ([ key, element ]) => [ key, Object.values(element).filter(
        isotope => isotope.half_life?.value?.value === 'Stable'
      ).length ]
    ));

    return Object.range(amounts, log);
  },
  'group:divider:#_Isomers': 2,
  'All:isomers': function(log) {
    const amounts = Object.fromEntries(Object.entries(Nubase2020.nuclides).map(
      ([ key, element ]) => [ key, Object.values(element).map(
        isotope => Object.values(isotope.isomers ?? {}).length
      ).sum() ]
    ));

    return Object.range(amounts, log);
  },
  'Stable:isomers': function(log) {
    const amounts = Object.fromEntries(Object.entries(Nubase2020.nuclides).map(
      ([ key, element ]) => [ key, Object.values(element).map(
        isotope => Object.values(isotope.isomers ?? {}).filter(
          isomer => isomer.half_life?.value?.value === 'Stable'
        ).length
      ).sum() ]
    ));

    return Object.range(amounts, log);
  },
  'group:divider::2': 18,
  'group:side:Mass_Excess': 6,
  'group:divider:Standard:mass_excess': 3,
  'Minimum:isotope_mass_excess': function(log, include_extremes) {
    const massExcesses = Object.fromEntries(Object.entries(Nubase2020.nuclides).map(
      ([ key, element ]) => [ key, Object.values(element).reduce((min, isotope) => {
        const proportion = isotope.mass_excess?.proportion ?? -1;
        const clamped = proportion.clamp(0, 1);

        let isoArray = isotope.mass_excess?.proportion === undefined || !(include_extremes || proportion === clamped) ? [] : [ clamped ];
        isoArray = isoArray.concat((isotope.isomers ?? []).filter(isomer => {
          const proportion = isomer.mass_excess?.proportion ?? -1;
          return ![ null, undefined ].includes(isomer.mass_excess?.proportion) && (include_extremes || proportion === proportion.clamp(0, 1));
        }).map(
          isomer => (isomer.mass_excess?.proportion ?? 0).clamp(0, 1)
        ));

        return Math.min(min, ...isoArray);
      }, Infinity) ]
    ));

    return Object.range(massExcesses, log);
  },
  'Average:isotope_mass_excess': function(log, include_extremes) {
    const massExcesses = Object.fromEntries(Object.entries(Nubase2020.nuclides).map(
      ([ key, element ]) => [ key, Object.values(element).map(isotope => {
        const proportion = isotope.mass_excess?.proportion ?? -1;
        const clamped = proportion.clamp(0, 1);

        let isoArray = isotope.mass_excess?.proportion === undefined || !(include_extremes || proportion === clamped) ? [] : [ clamped ];
        isoArray = isoArray.concat((isotope.isomers ?? []).filter(isomer => {
          const proportion = isomer.mass_excess?.proportion ?? -1;
          return ![ null, undefined ].includes(isomer.mass_excess?.proportion) && (include_extremes || proportion === proportion.clamp(0, 1));
        }).map(
          isomer => (isomer.mass_excess?.proportion ?? 0).clamp(0, 1)
        ));

        return isoArray.length ? isoArray : null;
      }).filter(
        value => value !== null
      ).flat(Infinity).avg() || 0 ]
    ));

    return Object.range(massExcesses, log);
  },
  'Maximum:isotope_mass_excess': function(log, include_extremes) {
    const massExcesses = Object.fromEntries(Object.entries(Nubase2020.nuclides).map(
      ([ key, element ]) => [ key, Object.values(element).reduce((max, isotope) => {
        const proportion = isotope.mass_excess?.proportion ?? -1;
        const clamped = proportion.clamp(0, 1);

        let isoArray = isotope.mass_excess?.proportion === undefined || !(include_extremes || proportion === clamped) ? [] : [ clamped ];
        isoArray = isoArray.concat((isotope.isomers ?? []).filter(isomer => {
          const proportion = isomer.mass_excess?.proportion ?? -1;
          return ![ null, undefined ].includes(isomer.mass_excess?.proportion) && (include_extremes || proportion === proportion.clamp(0, 1));
        }).map(
          isomer => (isomer.mass_excess?.proportion ?? 0).clamp(0, 1)
        ));

        return Math.max(max, ...isoArray);
      }, -Infinity) ]
    ));

    return Object.range(massExcesses, log);
  },
  'group:divider:Base:mass_excess': 3,
  'Minimum:isotope_mass_excess_base': function(log, include_extremes) {
    const massExcesses = Object.fromEntries(Object.entries(Nubase2020.nuclides).map(
      ([ key, element ]) => [ key, Object.values(element).reduce((min, isotope) => {
        const proportion = isotope.mass_excess?.logarithmic_proportion ?? -1;
        const clamped = proportion.clamp(0, 1);

        let isoArray = isotope.mass_excess?.logarithmic_proportion === undefined || !(include_extremes || proportion === clamped) ? [] : [ clamped ];
        isoArray = isoArray.concat((isotope.isomers ?? []).filter(isomer => {
          const proportion = isomer.mass_excess?.logarithmic_proportion ?? -1;
          return ![ null, undefined ].includes(isomer.mass_excess?.logarithmic_proportion) && (include_extremes || proportion === proportion.clamp(0, 1));
        }).map(
          isomer => (isomer.mass_excess?.logarithmic_proportion ?? 0).clamp(0, 1)
        ));

        return Math.min(min, ...isoArray);
      }, Infinity) ]
    ));

    return Object.range(massExcesses, log);
  },
  'Average:isotope_mass_excess_base': function(log, include_extremes) {
    const massExcesses = Object.fromEntries(Object.entries(Nubase2020.nuclides).map(
      ([ key, element ]) => [ key, Object.values(element).map(isotope => {
        const proportion = isotope.mass_excess?.logarithmic_proportion ?? -1;
        const clamped = proportion.clamp(0, 1);

        let isoArray = isotope.mass_excess?.logarithmic_proportion === undefined || !(include_extremes || proportion === clamped) ? [] : [ clamped ];
        isoArray = isoArray.concat((isotope.isomers ?? []).filter(isomer => {
          const proportion = isomer.mass_excess?.logarithmic_proportion ?? -1;
          return ![ null, undefined ].includes(isomer.mass_excess?.logarithmic_proportion) && (include_extremes || proportion === proportion.clamp(0, 1));
        }).map(
          isomer => (isomer.mass_excess?.logarithmic_proportion ?? 0).clamp(0, 1)
        ));

        return isoArray.length ? isoArray : null;
      }).filter(
        value => value !== null
      ).flat(Infinity).avg() || 0 ]
    ));

    return Object.range(massExcesses, log);
  },
  'Maximum:isotope_mass_excess_base': function(log, include_extremes) {
    const massExcesses = Object.fromEntries(Object.entries(Nubase2020.nuclides).map(
      ([ key, element ]) => [ key, Object.values(element).reduce((max, isotope) => {
        const proportion = isotope.mass_excess?.logarithmic_proportion ?? -1;
        const clamped = proportion.clamp(0, 1);

        let isoArray = isotope.mass_excess?.logarithmic_proportion === undefined || !(include_extremes || proportion === clamped) ? [] : [ clamped ];
        isoArray = isoArray.concat((isotope.isomers ?? []).filter(isomer => {
          const proportion = isomer.mass_excess?.logarithmic_proportion ?? -1;
          return ![ null, undefined ].includes(isomer.mass_excess?.logarithmic_proportion) && (include_extremes || proportion === proportion.clamp(0, 1));
        }).map(
          isomer => (isomer.mass_excess?.logarithmic_proportion ?? 0).clamp(0, 1)
        ));

        return Math.max(max, ...isoArray);
      }, -Infinity) ]
    ));

    return Object.range(massExcesses, log);
  },
  'group:side:Half_Life': 6,
  'group:divider:Standard:half_life': 3,
  'Minimum:isotope_half_life': function(log, include_extremes) {
    const halfLives = Object.fromEntries(Object.entries(Nubase2020.nuclides).map(
      ([ key, element ]) => [ key, Object.values(element).reduce((min, isotope) => {
        const proportion = isotope.half_life?.proportion ?? -1;
        const clamped = proportion.clamp(0, 1);

        let isoArray = isotope.half_life?.proportion === undefined || !(include_extremes || proportion === clamped) ? [] : [ clamped ];
        isoArray = isoArray.concat((isotope.isomers ?? []).filter(isomer => {
          const proportion = isomer.half_life?.proportion ?? -1;
          return ![ null, undefined ].includes(isomer.half_life?.proportion) && (include_extremes || proportion === proportion.clamp(0, 1));
        }).map(
          isomer => (isomer.half_life?.proportion ?? 0).clamp(0, 1)
        ));

        return Math.min(min, ...isoArray);
      }, Infinity) ]
    ));

    return Object.range(halfLives, log);
  },
  'Average:isotope_half_life': function(log, include_extremes) {
    const halfLives = Object.fromEntries(Object.entries(Nubase2020.nuclides).map(
      ([ key, element ]) => [ key, Object.values(element).map(isotope => {
        const proportion = isotope.half_life?.proportion ?? -1;
        const clamped = proportion.clamp(0, 1);

        let isoArray = isotope.half_life?.proportion === undefined || !(include_extremes || proportion === clamped) ? [] : [ clamped ];
        isoArray = isoArray.concat((isotope.isomers ?? []).filter(isomer => {
          const proportion = isomer.half_life?.proportion ?? -1;
          return ![ null, undefined ].includes(isomer.half_life?.proportion) && (include_extremes || proportion === proportion.clamp(0, 1));
        }).map(
          isomer => (isomer.half_life?.proportion ?? 0).clamp(0, 1)
        ));

        return isoArray.length ? isoArray : null;
      }).filter(
        value => value !== null
      ).flat(Infinity).avg() || 0 ]
    ));

    return Object.range(halfLives, log);
  },
  'Maximum:isotope_half_life': function(log, include_extremes) {
    const halfLives = Object.fromEntries(Object.entries(Nubase2020.nuclides).map(
      ([ key, element ]) => [ key, Object.values(element).reduce((max, isotope) => {
        const proportion = isotope.half_life?.proportion ?? -1;
        const clamped = proportion.clamp(0, 1);

        let isoArray = isotope.half_life?.proportion === undefined || !(include_extremes || proportion === clamped) ? [] : [ clamped ];
        isoArray = isoArray.concat((isotope.isomers ?? []).filter(isomer => {
          const proportion = isomer.half_life?.proportion ?? -1;
          return ![ null, undefined ].includes(isomer.half_life?.proportion) && (include_extremes || proportion === proportion.clamp(0, 1));
        }).map(
          isomer => (isomer.half_life?.proportion ?? 0).clamp(0, 1)
        ));

        return Math.max(max, ...isoArray);
      }, -Infinity) ]
    ));

    return Object.range(halfLives, log);
  },
  'group:divider:Base:half_life': 3,
  'Minimum:isotope_half_life_base': function(log, include_extremes) {
    const halfLives = Object.fromEntries(Object.entries(Nubase2020.nuclides).map(
      ([ key, element ]) => [ key, Object.values(element).reduce((min, isotope) => {
        const proportion = isotope.half_life?.logarithmic_proportion ?? -1;
        const clamped = proportion.clamp(0, 1);

        let isoArray = isotope.half_life?.logarithmic_proportion === undefined || !(include_extremes || proportion === clamped) ? [] : [ clamped ];
        isoArray = isoArray.concat((isotope.isomers ?? []).filter(isomer => {
          const proportion = isomer.half_life?.logarithmic_proportion ?? -1;
          return ![ null, undefined ].includes(isomer.half_life?.logarithmic_proportion) && (include_extremes || proportion === proportion.clamp(0, 1));
        }).map(
          isomer => (isomer.half_life?.logarithmic_proportion ?? 0).clamp(0, 1)
        ));

        return Math.min(min, ...isoArray);
      }, Infinity) ]
    ));

    return Object.range(halfLives, log);
  },
  'Average:isotope_half_life_base': function(log, include_extremes) {
    const halfLives = Object.fromEntries(Object.entries(Nubase2020.nuclides).map(
      ([ key, element ]) => [ key, Object.values(element).map(isotope => {
        const proportion = isotope.half_life?.logarithmic_proportion ?? -1;
        const clamped = proportion.clamp(0, 1);

        let isoArray = isotope.half_life?.logarithmic_proportion === undefined || !(include_extremes || proportion === clamped) ? [] : [ clamped ];
        isoArray = isoArray.concat((isotope.isomers ?? []).filter(isomer => {
          const proportion = isomer.half_life?.logarithmic_proportion ?? -1;
          return ![ null, undefined ].includes(isomer.half_life?.logarithmic_proportion) && (include_extremes || proportion === proportion.clamp(0, 1));
        }).map(
          isomer => (isomer.half_life?.logarithmic_proportion ?? 0).clamp(0, 1)
        ));

        return isoArray.length ? isoArray : null;
      }).filter(
        value => value !== null
      ).flat(Infinity).avg() || 0 ]
    ));

    return Object.range(halfLives, log);
  },
  'Maximum:isotope_half_life_base': function(log, include_extremes) {
    const halfLives = Object.fromEntries(Object.entries(Nubase2020.nuclides).map(
      ([ key, element ]) => [ key, Object.values(element).reduce((max, isotope) => {
        const proportion = isotope.half_life?.logarithmic_proportion ?? -1;
        const clamped = proportion.clamp(0, 1);

        let isoArray = isotope.half_life?.logarithmic_proportion === undefined || !(include_extremes || proportion === clamped) ? [] : [ clamped ];
        isoArray = isoArray.concat((isotope.isomers ?? []).filter(isomer => {
          const proportion = isomer.half_life?.logarithmic_proportion ?? -1;
          return ![ null, undefined ].includes(isomer.half_life?.logarithmic_proportion) && (include_extremes || proportion === proportion.clamp(0, 1));
        }).map(
          isomer => (isomer.half_life?.logarithmic_proportion ?? 0).clamp(0, 1)
        ));

        return Math.max(max, ...isoArray);
      }, -Infinity) ]
    ));

    return Object.range(halfLives, log);
  },
  'group:side:Excitation_Energy': 6,
  'group:divider:Standard:excitation_energy': 3,
  'Minimum:isotope_excitation_energy': function(log, include_extremes) {
    const excitationEnergies = Object.fromEntries(Object.entries(Nubase2020.nuclides).map(
      ([ key, element ]) => [ key, Object.values(element).reduce((min, isotope) => {
        const proportion = isotope.excitation_energy?.proportion ?? -1;
        const clamped = proportion.clamp(0, 1);

        let isoArray = isotope.excitation_energy?.proportion === undefined || !(include_extremes || proportion === clamped) ? [] : [ clamped ];
        isoArray = isoArray.concat((isotope.isomers ?? []).filter(isomer => {
          const proportion = isomer.excitation_energy?.proportion ?? -1;
          return ![ null, undefined ].includes(isomer.excitation_energy?.proportion) && (include_extremes || proportion === proportion.clamp(0, 1));
        }).map(
          isomer => (isomer.excitation_energy?.proportion ?? 0).clamp(0, 1)
        ));

        return Math.min(min, ...isoArray);
      }, Infinity) ]
    ));

    return Object.range(excitationEnergies, log);
  },
  'Average:isotope_excitation_energy': function(log, include_extremes) {
    const excitationEnergies = Object.fromEntries(Object.entries(Nubase2020.nuclides).map(
      ([ key, element ]) => [ key, Object.values(element).map(isotope => {
        const proportion = isotope.excitation_energy?.proportion ?? -1;
        const clamped = proportion.clamp(0, 1);

        let isoArray = isotope.excitation_energy?.proportion === undefined || !(include_extremes || proportion === clamped) ? [] : [ clamped ];
        isoArray = isoArray.concat((isotope.isomers ?? []).filter(isomer => {
          const proportion = isomer.excitation_energy?.proportion ?? -1;
          return ![ null, undefined ].includes(isomer.excitation_energy?.proportion) && (include_extremes || proportion === proportion.clamp(0, 1));
        }).map(
          isomer => (isomer.excitation_energy?.proportion ?? 0).clamp(0, 1)
        ));

        return isoArray.length ? isoArray : null;
      }).filter(
        value => value !== null
      ).flat(Infinity).avg() || 0 ]
    ));

    return Object.range(excitationEnergies, log);
  },
  'Maximum:isotope_excitation_energy': function(log, include_extremes) {
    const excitationEnergies = Object.fromEntries(Object.entries(Nubase2020.nuclides).map(
      ([ key, element ]) => [ key, Object.values(element).reduce((max, isotope) => {
        const proportion = isotope.excitation_energy?.proportion ?? -1;
        const clamped = proportion.clamp(0, 1);

        let isoArray = isotope.excitation_energy?.proportion === undefined || !(include_extremes || proportion === clamped) ? [] : [ clamped ];
        isoArray = isoArray.concat((isotope.isomers ?? []).filter(isomer => {
          const proportion = isomer.excitation_energy?.proportion ?? -1;
          return ![ null, undefined ].includes(isomer.excitation_energy?.proportion) && (include_extremes || proportion === proportion.clamp(0, 1));
        }).map(
          isomer => (isomer.excitation_energy?.proportion ?? 0).clamp(0, 1)
        ));

        return Math.max(max, ...isoArray);
      }, -Infinity) ]
    ));

    return Object.range(excitationEnergies, log);
  },
  'group:divider:Base:excitation_energy': 3,
  'Minimum:isotope_excitation_energy_base': function(log, include_extremes) {
    const excitationEnergies = Object.fromEntries(Object.entries(Nubase2020.nuclides).map(
      ([ key, element ]) => [ key, Object.values(element).reduce((min, isotope) => {
        const proportion = isotope.excitation_energy?.logarithmic_proportion ?? -1;
        const clamped = proportion.clamp(0, 1);

        let isoArray = isotope.excitation_energy?.logarithmic_proportion === undefined || !(include_extremes || proportion === clamped) ? [] : [ clamped ];
        isoArray = isoArray.concat((isotope.isomers ?? []).filter(isomer => {
          const proportion = isomer.excitation_energy?.logarithmic_proportion ?? -1;
          return ![ null, undefined ].includes(isomer.excitation_energy?.logarithmic_proportion) && (include_extremes || proportion === proportion.clamp(0, 1));
        }).map(
          isomer => (isomer.excitation_energy?.logarithmic_proportion ?? 0).clamp(0, 1)
        ));

        return Math.min(min, ...isoArray);
      }, Infinity) ]
    ));

    return Object.range(excitationEnergies, log);
  },
  'Average:isotope_excitation_energy_base': function(log, include_extremes) {
    const excitationEnergies = Object.fromEntries(Object.entries(Nubase2020.nuclides).map(
      ([ key, element ]) => [ key, Object.values(element).map(isotope => {
        const proportion = isotope.excitation_energy?.logarithmic_proportion ?? -1;
        const clamped = proportion.clamp(0, 1);

        let isoArray = isotope.excitation_energy?.logarithmic_proportion === undefined || !(include_extremes || proportion === clamped) ? [] : [ clamped ];
        isoArray = isoArray.concat((isotope.isomers ?? []).filter(isomer => {
          const proportion = isomer.excitation_energy?.logarithmic_proportion ?? -1;
          return ![ null, undefined ].includes(isomer.excitation_energy?.logarithmic_proportion) && (include_extremes || proportion === proportion.clamp(0, 1));
        }).map(
          isomer => (isomer.excitation_energy?.logarithmic_proportion ?? 0).clamp(0, 1)
        ));

        return isoArray.length ? isoArray : null;
      }).filter(
        value => value !== null
      ).flat(Infinity).avg() || 0 ]
    ));

    return Object.range(excitationEnergies, log);
  },
  'Maximum:isotope_excitation_energy_base': function(log, include_extremes) {
    const excitationEnergies = Object.fromEntries(Object.entries(Nubase2020.nuclides).map(
      ([ key, element ]) => [ key, Object.values(element).reduce((max, isotope) => {
        const proportion = isotope.excitation_energy?.logarithmic_proportion ?? -1;
        const clamped = proportion.clamp(0, 1);

        let isoArray = isotope.excitation_energy?.logarithmic_proportion === undefined || !(include_extremes || proportion === clamped) ? [] : [ clamped ];
        isoArray = isoArray.concat((isotope.isomers ?? []).filter(isomer => {
          const proportion = isomer.excitation_energy?.logarithmic_proportion ?? -1;
          return ![ null, undefined ].includes(isomer.excitation_energy?.logarithmic_proportion) && (include_extremes || proportion === proportion.clamp(0, 1));
        }).map(
          isomer => (isomer.excitation_energy?.logarithmic_proportion ?? 0).clamp(0, 1)
        ));

        return Math.max(max, ...isoArray);
      }, -Infinity) ]
    ));

    return Object.range(excitationEnergies, log);
  },
  'group:divider::3': 3,
  '#_Protons': function(log) {
    const amounts = Object.fromEntries(Object.entries(Nubase2020.nuclides).map(
      ([ key, element ]) => [ key, Object.values(element)[0].protons ]
    ));

    return Object.range(amounts, log);
  },
  '#_Neutrons': function(log) {
    const amounts = Object.fromEntries(Object.entries(Nubase2020.nuclides).map(
      ([ key, element ]) => [ key, Object.values(element)[0].neutrons ]
    ));

    return Object.range(amounts, log);
  },
  'Neutrons_per_Proton': function(log) {
    const ratios = Object.fromEntries(Object.entries(Nubase2020.nuclides).map(
      ([ key, element ]) => [ key, Object.values(element)[0].neutrons / Object.values(element)[0].protons ]
    ));

    return Object.range(ratios);
  },
  'group:divider::4': 6,
  'group:side:#_Decay_Chains': 3,
  'Average:decay_chains': function(log) {
    const amounts = Object.fromEntries(Object.entries(Nubase2020.nuclides).map(
      ([ key, element ]) => [ key, Object.values(element).map(
        isotope => (Object.values(isotope.radioactive_decay ?? {}).length ?? 0) + Object.values(isotope.isomers ?? {}).map(
          isomer => Object.values(isomer.radioactive_decay ?? {}).length ?? 0
        ).sum()
      ).sum() ]
    ));

    return Object.range(amounts, log);
  },
  'Maximum:decay_chains': function(log) {
    const amounts = Object.fromEntries(Object.entries(Nubase2020.nuclides).map(
      ([ key, element ]) => [ key, Object.values(element).map(
        isotope => (Object.values(isotope.radioactive_decay ?? {}).length ?? 0) + (isotope.isomers ? Object.values(isotope.isomers).map(
          isomer => Object.values(isomer.radioactive_decay ?? {}).length ?? 0
        ).sum() : 0)
      ).max() ]
    ));

    return Object.range(amounts, log);
  },
  'Maximum_(Isomers_seperate):decay_chains': function(log) {
    const amounts = Object.fromEntries(Object.entries(Nubase2020.nuclides).map(
      ([ key, element ]) => [ key, Object.values(element).map(
        isotope => Math.max((Object.values(isotope.radioactive_decay ?? {}).length ?? 0), (isotope.isomers ? Object.values(isotope.isomers).map(
          isomer => Object.values(isomer.radioactive_decay ?? {}).length ?? 0
        ).max() : 0))
      ).max() ]
    ));

    return Object.range(amounts, log);
  },
  'group:side:#_Decay_Parents': 3,
  'Average:decay_parents': function(log) {
    const amounts = Object.fromEntries(Object.entries(Nubase2020.nuclides).map(
      ([ key, element ]) => [ key, Object.values(element).map(
        isotope => (isotope.parents?.length ?? 0) + Object.values(isotope.isomers ?? {}).map(
          isomer => isomer.parents?.length ?? 0
        ).sum()
      ).sum() ]
    ));

    return Object.range(amounts, log);
  },
  'Maximum:decay_parents': function(log) {
    const amounts = Object.fromEntries(Object.entries(Nubase2020.nuclides).map(
      ([ key, element ]) => [ key, Object.values(element).map(
        isotope => (isotope.parents?.length ?? 0) + (isotope.isomers ? Object.values(isotope.isomers).map(
          isomer => isomer.parents?.length ?? 0
        ).sum() : 0)
      ).max() ]
    ));

    return Object.range(amounts, log);
  },
  'Maximum_(Isomers_seperate):decay_parents': function(log) {
    const amounts = Object.fromEntries(Object.entries(Nubase2020.nuclides).map(
      ([ key, element ]) => [ key, Object.values(element).map(
        isotope => Math.max((isotope.parents?.length ?? 0), (isotope.isomers ? Object.values(isotope.isomers).map(
          isomer => isomer.parents?.length ?? 0
        ).max() : 0))
      ).max() ]
    ));

    return Object.range(amounts, log);
  },
  'group:divider::5': 6,
  'group:side:Discovered': 3,
  'Minimum:discovered': function(log) {
    const dates = Object.fromEntries(Object.entries(Nubase2020.nuclides).map(
      ([ key, element ]) => [ key, Object.values(element).reduce((min, isotope) => {
        let isoArray = isotope.discoverd === undefined ? [] : [ isotope.discoverd ];
        isoArray = isoArray.concat((isotope.isomers ?? []).map(
          isomer => isomer.discoverd
        )).filter(
          value => value !== undefined
        );

        return Math.min(min, ...isoArray);
      }, Infinity) ]
    ));

    return Object.range(dates, log);
  },
  'Average:discovered': function(log) {
    const dates = Object.fromEntries(Object.entries(Nubase2020.nuclides).map(
      ([ key, element ]) => [ key, Object.values(element).map(isotope => {
        let isoArray = isotope.discoverd === undefined ? [] : [ isotope.discoverd ];
        isoArray = isoArray.concat((isotope.isomers ?? []).map(
          isomer => isomer.discoverd
        )).filter(
          value => value !== undefined
        );

        return isoArray.length ? isoArray : null;
      }).filter(
        value => value !== null
      ).flat(Infinity).avg() || 0 ]
    ));

    return Object.range(dates, log);
  },
  'Maximum:discovered': function(log) {
    const dates = Object.fromEntries(Object.entries(Nubase2020.nuclides).map(
      ([ key, element ]) => [ key, Object.values(element).reduce((max, isotope) => {
        let isoArray = isotope.discoverd === undefined ? [] : [ isotope.discoverd ];
        isoArray = isoArray.concat((isotope.isomers ?? []).map(
          isomer => isomer.updated
        )).filter(
          value => value !== undefined
        );

        return Math.max(max, ...isoArray);
      }, 0) ]
    ));

    return Object.range(dates, log);
  },
  'group:side:Updated_(ENSDF)': 3,
  'Minimum:updated': function(log) {
    const dates = Object.fromEntries(Object.entries(Nubase2020.nuclides).map(
      ([ key, element ]) => [ key, Object.values(element).reduce((min, isotope) => {
        let isoArray = isotope.updated === undefined ? [] : [ isotope.updated ];
        isoArray = isoArray.concat((isotope.isomers ?? []).map(
          isomer => isomer.updated
        )).filter(
          value => value !== undefined
        );

        return Math.min(min, ...isoArray);
      }, Infinity) ]
    ));

    return Object.range(dates, log);
  },
  'Average:updated': function(log) {
    const dates = Object.fromEntries(Object.entries(Nubase2020.nuclides).map(
      ([ key, element ]) => [ key, Object.values(element).map(isotope => {
        let isoArray = isotope.updated === undefined ? [] : [ isotope.updated ];
        isoArray = isoArray.concat((isotope.isomers ?? []).map(
          isomer => isomer.updated
        )).filter(
          value => value !== undefined
        );

        return isoArray.length ? isoArray : null;
      }).filter(
        value => value !== null
      ).flat(Infinity).avg() || 0 ]
    ));

    return Object.range(dates, log);
  },
  'Maximum:updated': function(log) {
    const dates = Object.fromEntries(Object.entries(Nubase2020.nuclides).map(
      ([ key, element ]) => [ key, Object.values(element).reduce((max, isotope) => {
        let isoArray = isotope.updated === undefined ? [] : [ isotope.updated ];
        isoArray = isoArray.concat((isotope.isomers ?? []).map(
          isomer => isomer.updated
        )).filter(
          value => value !== undefined
        );

        return Math.max(max, ...isoArray);
      }, 0) ]
    ));

    return Object.range(dates, log);
  },
};

const computeTrends = function([ trend, thisFunction ]) {
  const index = groupSize.reduce(
    (currentIndex, size, index) => !size ? index : currentIndex,
  undefined);

  if (index !== undefined) {
    for (let a = 0;a <= index;a++) {
      groupSize.shift();
      groupElement.shift();
    }
  }

  groupSize = groupSize.map(
    size => --size
  );

  const [ command, commandDat, key ] = trend.split(':');
  if (command === 'group') {
    const group = currentMenu.child('group template').cloneNode(true);
    group.classList.remove('template');
    group.classList.add(commandDat);

    if (key?.length) {
      group.classList.add(key);
      group.child('title').innerHTML = '<sup></sup>' + key.replace(/_/g, ' ').trim();
    } else
      group.child('title').remove();

    groupElement[0].appendChild(group);

    groupSize = groupSize.map(
      size => ++size
    );

    groupSize.unshift(thisFunction);
    groupElement.unshift(group.child('content'));

    return;
  }

  const trendElement = currentMenu.child('trend template').cloneNode(true);
  trendElement.classList.remove('template');
  trendElement.classList.add(command);
  trendElement.innerHTML = '<sup></sup>' + command.replace(/_/g, ' ').trim() + '<span class="log" data-selected=false>log</span>';
  trendElement.onclick = function(event) {
    if (event.target.classList.contains('log'))
      return;

    if (this.dataset.selected === 'true') {
      this.dataset.selected = false;
      delete loadedElementColors[trend];
    } else {
      this.dataset.selected = true;
      loadedElementColors[trend] = thisFunction(this.child('log').dataset.selected === 'true');
    }
  };

  groupElement[0].appendChild(trendElement);
  trendElement.child('log').onclick = function(event) {
    this.dataset.selected = this.dataset.selected === 'true' ? false : true;

    if (this.parentElement.dataset.selected === 'true')
      loadedElementColors[trend] = thisFunction(this.dataset.selected === 'true');
  };
};

const isotopicTrendsMenu = document.getElementById('isotopic_trends_menu');
const elementalTrendsMenu = document.getElementById('elemental_trends_menu');

let currentMenu, groupSize, groupElement;
[ [ isotopicTrendsMenu, isotopicTrends ], [ elementalTrendsMenu, elementalTrends ] ].forEach(([ menu, trends ]) => {
  currentMenu = menu;
  groupSize = [ Infinity ];
  groupElement = [ currentMenu ];

  Object.entries(trends).forEach(computeTrends);
});

const trendsButton = document.getElementById('trends_button');
trendsButton.onmouseup = function(e) {
  document.body.dataset.trends = {
    true: 'false',
    false: 'true',
  }[document.body.dataset.trends];

  if (document.body.dataset.trends == 'true')
    pTable.forEach(element => {
      const html = document.getElementById(element.name.toLowerCase());
      if (html) {
        html.style.background = `rgb(${(groupColors[element.series] ?? [ 16, 16, 32 ]).join(', ')})`;
        const shadow = `rgb(${(groupColors[element.series] ?? [ 16, 16, 32 ]).map(
          value => value * 1.25
        ).join(', ')})`;
        html.style.boxShadow = `1px 1px ${shadow}, 2px 2px ${shadow}, 3px 3px ${shadow}, 4px 4px ${shadow}, 5px 5px ${shadow}, 6px 6px ${shadow}, 7px 7px ${shadow}, 8px 8px ${shadow}, 9px 9px ${shadow}, 10px 10px ${shadow}`;
      }
    });
  else
    pTable.forEach(element => {
      const html = document.getElementById(element.name.toLowerCase());
      if (html) {
        html.style.background = null;
        html.style.boxShadow = null;
      }
    });
};

const bottomText = document.getElementById('bottom_text');
const bottomInnerText = bottomText.child('text');

const toCelcius = kelvin => {
  let roundFactor = kelvin.toString().split('.');
  roundFactor = 10 ** Math.max((roundFactor[1] ?? '').length, 2);

  return Math.round((kelvin + 273.15) * roundFactor) / roundFactor;
};
const toFahrenheit = kelvin => {
  let roundFactor = kelvin.toString().split('.');
  roundFactor = 10 ** Math.max((roundFactor[1] ?? '').length + 1, 3);

  return Math.round(((kelvin - 273.15) * (9 / 5) + 32) * roundFactor) / roundFactor;
};

[...sidebar.getElementsByClassName('tempature')].forEach(element => {
  element.child('kelvin').onclick = function() {
    element.dataset.selected = 'k';
    element.child('data').innerHTML = element.dataset.kelvin;
  };

  element.child('celsius').onclick = function() {
    element.dataset.selected = 'c';
    element.child('data').innerHTML = toCelcius(+element.dataset.kelvin);
  };

  element.child('fahrenheit').onclick = function() {
    element.dataset.selected = 'f';
    element.child('data').innerHTML = toFahrenheit(+element.dataset.kelvin);
  };
});

const nSidebar = document.getElementById('nuclide_sidebar');

const zoomedElement = document.getElementById('zoomed_element');

const script = {
  particleChange: 0,
};

let particles = [];
let onlyParticles = 0;
const particleInfo = {
  divisions: 30,
  maxVelocity: 0.001,
  timer: {
    target: {
      threshold: 250,
      variance: 50,
    },
    section: {
      threshold: 75,
      variance: 10,
    },
    velocity: {
      threshold: 25,
      variance: 15,
    },
  },
  count: 1000,
  divisionSize: null,
  maxDistance: null,
};

particleInfo.sections = Array.from({ length: particleInfo.divisions },
  () => Array.from({ length: particleInfo.divisions },
    () => []
  )
);
particleInfo.lastSections = particleInfo.sections;

particleInfo.divisionSize = 1 / particleInfo.divisions;
particleInfo.maxDistance = particleInfo.divisionSize * 2 * 2 ** 0.5;;

const elementIndexes = Array.from({ length: shownElements },
  (_, index) => index
);

let loadedElement;
const animation = {
  playing: true,
  canScroll: false,
  skip: false,
  time: 0,
  maxTime: 0,
  speed: 0.01,
  scrollSpeed: 0.01,
  triggers: Array.from({ length: shownElements }, (_, index) => {
    return { time: GetAnimationTime(index), index: elementIndexes.random(true), start: { x: (Math.random()) * [ -1/2, 1/2 ].random(), y: (Math.random()) * [ -1/2, 1/2 ].random() } };
  }),
  lastElement: null,
  direction: 0,
};
animation.maxTime = GetAnimationTime(shownElements - 1) + 1;

/*Object.values(Nubase2020.nuclides).map(
  value => Object.values(value)
).flat(1).forEach(iso => {
  if (!iso?.half_life?.color || (iso?.isomer_id && !FindIsotopesWithAZ(iso.a, iso.z).length))
    return;

  stabilityBandPen.fillStyle = iso.half_life.color;
  stabilityBandPen.fillRect(iso.n * 2, stabilityBand.height - iso.z * 2, 2, -2);
});*/

pTable.forEach(element => {
  const html = document.getElementById(element.name.toLowerCase());
  if (html) {
    const { parentElement: parent } = html;
    html.dataset.tableRow = parent.id;
    html.dataset.symbol = element.symbol;

    html.style.top = `${parent.getBoundingClientRect().top}px`;

    if (document.body.dataset.saturated === true) {
      html.style.background = `rgb(${(groupColors[element.series] ?? [ 16, 16, 32 ]).join(', ')})`;
      const shadow = `rgb(${(groupColors[element.series] ?? [ 16, 16, 32 ]).map(
        value => value * 1.25
      ).join(', ')})`;
      html.style.boxShadow = `1px 1px ${shadow}, 2px 2px ${shadow}, 3px 3px ${shadow}, 4px 4px ${shadow}, 5px 5px ${shadow}, 6px 6px ${shadow}, 7px 7px ${shadow}, 8px 8px ${shadow}, 9px 9px ${shadow}, 10px 10px ${shadow}`;
    }

    html.innerHTML = `<p class='atomic_number'>${element.atomic_number}</p><p class='atomic_mass'>${element.atomic_mass.toDecimals(2)}</p><p class='symbol'>${element.symbol}</p><div class='hoverable'></div>`;

    html.onmouseover = function() {
      if (!html.classList.contains('fallen'))
        return;

      zoomedElement.dataset.atomic_number = element.atomic_number;
      zoomedElement.style.background = html.style.background;

      zoomedElement.innerHTML = html.innerHTML;
      zoomedElement.innerHTML += `<p class='name'>${element.name}</p>`

      zoomedElement.child('atomic_mass').innerHTML = element.atomic_mass.toDecimals(4);

      zoomedElement.hidden = false;
    };

    html.onmouseout = function() {
      if (zoomedElement.dataset.atomic_number == element.atomic_number)
        zoomedElement.hidden = true;
    };

    html.onclick = function() {
      LoadElement(element.atomic_number - 1);
    };

    document.body.appendChild(html);
  }
});

let lastUpdate;
let typicalUpdate;

let frames = 1;
let startTime;

function Update() {
  const typicalDelta = performance.now() - (typicalUpdate ?? performance.now());
  startTime ??= performance.now();

  if (typicalDelta >= 1000 && frames > 10)
    startTime += typicalDelta - 1000;

  FPS = (performance.now() - startTime) / ++frames;

  TestUpdate();
  DPIUpdate();
  UpdateTrendsContent();
  UpdateElementPositions();
  FollowIsotopes(nSidebar);
  FollowIsotopes(abundanceChart);
  UpdateCollapsibles();
  ParticleUpdate(1000 / (FPS || 1));
  requestIdleCallback(UpdateScale);

  const delta = performance.now() - (lastUpdate ?? performance.now());
  lastUpdate = performance.now();
  script.particleChange = Math.max(script.particleChange - Math.round(delta - (typicalDelta + 5)), 100 - onlyParticles).clamp(-100, 100);

  typicalUpdate = performance.now();
  requestAnimationFrame(Update);
}
requestAnimationFrame(Update);

function TestUpdate() {
  [...document.getElementsByClassName('element')].forEach(
    element => element.style.filter = `brightness(${Object.values(loadedElementColors ?? {}).length ? Object.values(loadedElementColors).reduce(
      (avg, trend, _, array) => avg + (trend[element.dataset.symbol] ?? 0) / (array.length || 1), 0
    ) * 100 : 100}%)`
  );
}

function DPIUpdate() {
  DPI.x = dpiElement.offsetWidth;
  DPI.y = dpiElement.offsetHeight;
}

let lastScale;
function UpdateScale() {
  const scale = `${innerWidth}:${innerHeight}`;
  if (scale === lastScale)
    return;

  lastScale = scale;

  const { width: fgWidth, height: fgHeight } = fg.getBoundingClientRect();
  fg.width = fgWidth;
  fg.height = fgHeight;

  bg.width = innerWidth;
  bg.height = innerHeight;
}

function UpdateTrendsContent() {
  [ ...isotopicTrendsMenu.getElementsByClassName('content') ].forEach(element => {
    const { parentElement } = element;
    if (!parentElement.classList.contains('side'))
      return;

    let { bottom, height } = element.getBoundingClientRect();
    bottom += +(element.dataset.vOffset ?? 0);

    const vOffset = (innerHeight - bottom).clamp(-height + element.previousElementSibling.getBoundingClientRect().height, 0);
    element.dataset.vOffset = -vOffset;
    element.style.transform = `translate(0px, ${vOffset}px)`;
  });
}

function UpdateElementPositions() {
  [...document.getElementsByClassName('element')].forEach(
    element => element.style.top = `${document.getElementById(element.dataset.tableRow)?.getBoundingClientRect().top}px`
  );
}

function FollowIsotopes(element) {
  const computedStyle = getComputedStyle(element);

  const isotopes = sidebar.child('information').child('isotopes');

  const { width: thisWidth, height: thisHeight } = element.getBoundingClientRect();
  const { left: sidebarLeft } = sidebar.getBoundingClientRect();
  const { top: isotopesTop, height: isotopesHeight } = isotopes.getBoundingClientRect();

  element.style.left = `calc(${sidebarLeft - thisWidth}px - ${computedStyle.getPropertyValue('margin-right')})`;

  let top = Math.max(isotopesTop - (thisHeight - isotopesHeight) / 2, 0);
  if (top + thisHeight > innerHeight)
    top = innerHeight - thisHeight;

  element.style.top = `${top}px`;
}

function UpdateCollapsibles() {
  [...nSidebar.getElementsByClassName('section')].concat([...nSidebar.getElementsByClassName('isomer')]).forEach(section => {
    const computedStyle = getComputedStyle(section);
    section.style.maxHeight = `${section.scrollHeight - section.offsetHeight + section.clientHeight - parseFloat(computedStyle.paddingTop) - parseFloat(computedStyle.paddingBottom)}px`;
  });
}

function ParticleUpdate(time) {
  fgPen.clearRect(0, 0, fg.width, fg.height);
  bgPen.clearRect(0, 0, bg.width, bg.height);

  particleInfo.lastSections = particleInfo.sections;
  particleInfo.sections = Array.from({ length: particleInfo.divisions },
    () => Array.from({ length: particleInfo.divisions },
      () => []
    )
  );

  onlyParticles = 0;
  particles = particles.filter(particle => {
    if (particle.dead)
      return false;

    if (particle instanceof Particle)
      onlyParticles++;

    return true;
  });

  particles.forEach(
    particle => particle.Update(60 / time)
  );
}

async function Animate() {
  requestAnimationFrame(Animate);

  if (animation.playing) {
    bottomText.dataset.hidden = false;
    bottomInnerText.innerHTML = `<div style='float: left;font-size: 2.5rem'>${Math.floor(animation.time / animation.maxTime * 100)}%</div><div style='text-align: left;margin-left: 1ch;float: right;'>Press <u>space</u> to skip<br>Press <u>shift</u> to speed up</div>`;
  } else if (!animation.playing && !(animation.time === 0 || animation.time === animation.maxTime)) {
    bottomText.dataset.hidden = false;
    bottomInnerText.innerHTML = `<div style='float: left;font-size: 2.5rem'>${Math.floor(animation.time / animation.maxTime * 100)}%</div><div style='text-align: left;margin-left: 1ch;float: right;'>Press <u>space</u> to play<br>Press <u>shift</u> to speed up</div>`;
  } else
    bottomText.dataset.hidden = true;

  if (animation.skip) {
    if (animation.playing) {
      animation.time = animation.maxTime;
      animation.playing = false;
      animation.canScroll = true;

      [...document.getElementsByClassName('element')].forEach(element => {
        element.style.marginLeft = null;
        element.style.marginTop = null;

        element.style.scale = null;
        element.style.zIndex = null;

        element.style.transition = 'all 0s';
        element.style.animation = 'none';
        element.classList.add('fallen');

        setTimeout(
          () => element.style.transition = null,
        1);
      });

      if (particles.every(
        particle => !(particle instanceof Particle)
      )) {
        document.body.particle(particleInfo.count, Math.random() * 1 + 1);

        bg.style.opacity = 1;

        const periodicText = document.getElementById('periodicText');
        periodicText.style.opacity = 1;
        periodicText.style.transition = 'all 0s';

        setTimeout(
          () => periodicText.style.transition = null,
        1);
      }
    } else if (animation.time < animation.maxTime) {
      animation.playing = true;
      animation.canScroll = false;
    }

    animation.skip = false;
  }

  if ((animation.time === 0 && animation.direction === -1) || (animation.time === animation.maxTime && animation.direction === 1) || animation.playing)
    animation.direction = 0;

  if (animation.playing) {
    animation.time = (animation.time + animation.speed).clamp(0, animation.maxTime);

    if (animation.triggers.reduce((done, trigger) => {
      const element = document.getElementById(pTable[trigger.index].name.toLowerCase());
      if (!element)
        return;

      const position = GetAnimationPosition(animation.time - trigger.time, trigger.start);
      if (position) {
        element.hidden = false;
        if (position.done) {
          element.style.marginLeft = null;
          element.style.marginTop = null;

          element.style.scale = null;
          element.style.zIndex = null;

          if (!element.classList.contains('fallen')) {
            element.spark(10, Math.random() * 2 + 2, 75);
            new Audio('block_fall.mp3').play().catch(
              error => {}
            );

            element.style.animation = null;
            element.classList.add('fallen');

            animation.lastElement = trigger.index;
          }

          return done;
        } else {
          element.style.marginLeft = `calc(var(--elementPadding) - ${position.x}px)`;
          element.style.marginTop = `${position.y}px`;

          element.style.scale = position.scale;
          element.style.zIndex = position.zIndex;

          element.classList.remove('fallen');
        }
      } else {
        element.hidden = true;

        element.classList.remove('fallen');
      }

      return false;
    }, true)) {
      animation.direction = 0;
      animation.playing = false;

      zoomedElement.style.display = null;

      let elements = [...document.getElementsByClassName('element')];
      let offset = document.getElementById(pTable[animation.lastElement].name.toLowerCase()).getBoundingClientRect();

      let threshold = 0;
      while (elements.length) {
        elements = elements.filter(element => {
          const { left, top } = element.getBoundingClientRect();
          if (distance(offset.left - left, offset.top - top) <= threshold) {
            element.classList.add('raise');
            setTimeout(function() {
              element.classList.remove('raise');
            }, 500);

            return false;
          } else
            return true;
        });

        threshold += 5;
        await sleep(1);
      }

      animation.canScroll = true;
      if (particles.every(
        particle => !(particle instanceof Particle)
      ))
        setTimeout(async function() {
          document.body.particle(particleInfo.count, Math.random() * 1 + 1);

          const periodicText = document.getElementById('periodicText');
          for (let i = 0;i < 1000;i++) {
            bg.style.opacity = i / 1000;
            periodicText.style.opacity = i / 1000;
            await sleep(1);
          }
        }, 500);
    }
  } else {
    if (animation.direction && animation.canScroll)
      animation.time = (animation.time - animation.speed * -animation.direction).clamp(0, animation.maxTime);

    animation.triggers.forEach(trigger => {
      const element = document.getElementById(pTable[trigger.index].name.toLowerCase());
      if (!element)
        return;

      const position = GetAnimationPosition(animation.time - trigger.time, trigger.start);
      if (position) {
        element.hidden = false;
        if (position.done) {
          element.style.marginLeft = null;
          element.style.marginTop = null;

          element.style.scale = null;
          element.style.zIndex = null;

          if (!element.classList.contains('fallen')) {
            element.spark(10, Math.random() * 2 + 2, 75);
            new Audio('block_fall.mp3').play().catch(
              error => {}
            );

            element.style.animation = null;
            element.classList.add('fallen');

            animation.lastElement = trigger.index;
          }
        } else {
          element.style.marginLeft = `calc(var(--elementPadding) - ${position.x}px)`;
          element.style.marginTop = `${position.y}px`;

          element.style.scale = position.scale;
          element.style.zIndex = position.zIndex;

          element.classList.remove('fallen');
        }
      } else {
        element.hidden = true;

        element.classList.remove('fallen');
      }
    });
  }
}
requestAnimationFrame(Animate);

function GetAnimationTime(index) {
  if (index >= shownElements - 1)
    return ((index - 1) * 2) ** 0.35 + 1;

  return (index * 2) ** 0.35;
}

function GetAnimationPosition(delta, start) {
  if (delta < 0)
    return 0;

  delta = 1 - delta.clamp(0, 1);
  const height = (4.9 * delta ** 2 + delta * 10) * 250;

  return { x: height * start.x, y: height * start.y, scale: (delta * 2) ** (2/3) + 1, zIndex: Math.round(delta * 1000 + 1), done: !delta };
}

function LoadElement(index) {
  sidebar.dataset.hidden = false;
  loadedElement = index;

  const element = pTable[index];
  sidebar.dataset.atomic_number = element.atomic_number;
  sidebar.dataset.symbol = element.symbol;
  sidebar.dataset.name = element.name;
  sidebar.child('atomic_number').innerHTML = element.atomic_number;
  sidebar.child('atomic_mass').innerHTML = element.atomic_mass;
  sidebar.child('symbol').innerHTML = element.symbol;
  sidebar.child('name').innerHTML = element.name + (element.alternate_names ? ` (${element.alternate_names})` : '');

  sidebar.child('discovery').child('by').innerHTML = element.discovered.by ?? 'Unknown';
  sidebar.child('discovery').child('by').dataset.search = element.discovered.by !== undefined;
  sidebar.child('discovery').child('date').innerHTML = (element.discovered.year < 0 ? `${-element.discovered.year} BCE` : `${element.discovered.year} CE`) ?? 'Unknown';
  sidebar.child('discovery').child('at').innerHTML = element.discovered.location ?? 'Unknown';
  sidebar.child('discovery').child('at').dataset.search = element.discovered.location !== undefined;

	sidebar.child('information').child('appearance').child('data').innerHTML = `<span class='searchable' data-search='false'>${element.appearance ? element.appearance.toUpperCaseWords() : 'Unknown'}</span>`;

  sidebar.child('information').child('phase').child('data').innerHTML = element.phase.toUpperCaseWords();
  sidebar.child('information').child('series').child('data').innerHTML = element.series.toUpperCaseWords();

  const tempaturePointLength = Math.max(...[ 'boiling_point', 'melting_point' ].map(
    key => element[key] === undefined ? 0 : Math.max(element[key].toString().length, toCelcius(element[key]).toString().length, toFahrenheit(element[key]).toString().length)
  )) + 0.5;

	if (element.boiling_point) {
		[...sidebar.child('information').child('boiling_point').getElementsByClassName('button')].forEach(
			element => element.hidden = false
		);

    sidebar.child('information').child('boiling_point').child('data').style.width = `${tempaturePointLength}ch`;
		sidebar.child('information').child('boiling_point').dataset.kelvin = element.boiling_point;
  	switch (sidebar.child('information').child('boiling_point').dataset.selected) {
    	case 'k':
    	default:
      	sidebar.child('information').child('boiling_point').child('data').innerHTML = element.boiling_point;
      	break;
    	case 'c':
      	sidebar.child('information').child('boiling_point').child('data').innerHTML = toCelcius(element.boiling_point);
      	break;
    	case 'f':
      	sidebar.child('information').child('boiling_point').child('data').innerHTML = toFahrenheit(element.boiling_point);
      	break;
  	}
	} else {
		[...sidebar.child('information').child('boiling_point').getElementsByClassName('button')].forEach(
			element => element.hidden = true
		);

		sidebar.child('information').child('boiling_point').child('data').innerHTML = 'Unknown';
	}

	if (element.melting_point) {
		[...sidebar.child('information').child('melting_point').getElementsByClassName('button')].forEach(
			element => element.hidden = false
		);

    sidebar.child('information').child('melting_point').child('data').style.width = `${tempaturePointLength}ch`;
		sidebar.child('information').child('melting_point').dataset.kelvin = element.melting_point;
  	switch (sidebar.child('information').child('melting_point').dataset.selected) {
    	case 'k':
    	default:
      	sidebar.child('information').child('melting_point').child('data').innerHTML = element.melting_point;
      	break;
    	case 'c':
      	sidebar.child('information').child('melting_point').child('data').innerHTML = toCelcius(element.melting_point);
      	break;
    	case 'f':
      	sidebar.child('information').child('melting_point').child('data').innerHTML = toFahrenheit(element.melting_point);
      	break;
  	}
	} else {
		[...sidebar.child('information').child('melting_point').getElementsByClassName('button')].forEach(
			element => element.hidden = true
		);

		sidebar.child('information').child('melting_point').child('data').innerHTML = 'Unknown';
	}

  DrawAbundanceChart(element);

  sidebar.child('information').child('summary').child('text').innerHTML = element.summary.replace(/<p>/g, '<p>&emsp;&emsp;');
  sidebar.child('information').child('summary').child('citation').child('source').innerHTML = element.source;
  sidebar.child('information').child('summary').child('citation').child('source').href = element.source;
  // sidebar.child('information').child('').innerHTML = element.;
  // sidebar.child('').innerHTML = element.;

	LoadSearchableElments();
}

function DrawAbundanceChart(element) {
  const NoNaturalIsotopes = function() {
    acPen.fillStyle = '#666';
    acPen.beginPath();
    acPen.arc(0.5, 0.5, 0.4, 0, Math.PI * 2);
    acPen.fill();

    acPen.restore();
    acPen.save();
    acPen.fillStyle = 'black';
    acPen.font = '1000px Verdana';
    acPen.textAlign = 'center';
    acPen.textBaseline = 'middle';

    const text = 'No naturally existing isotopes';
    const { width } = acPen.measureText(text);
    acPen.font = `${1000 * (innerWidth * 0.175 / width)}px Verdana`;

    acPen.fillText(text, innerWidth / 8, innerWidth / 8);
    acPen.scale(innerWidth / 4, innerWidth / 4);
  };

  acPen.clearRect(0, 0, 1, 1);
  ackPen.clearRect(0, 0, abundanceCanvasKey.width, abundanceCanvasKey.height);

  sidebar.child('information').child('isotopes').child('title').child('text').innerHTML = `Isotopes of ${element.name}`;

  sidebar.child('information').child('isotopes').child('title').child('text').onmouseenter = async function() {
    const tooltip = new Tooltip('text', `<h2 class='title'></h2><br><p class='text'></p><br><div class='citation'>Source: <a target='_blank' class='source'>Wikipedia</a></div>`, 0, innerHeight, 'left', 'bottom', 250, { leave: this, time: { min: 100 } }, null, 'isotopes_of').create();

    await fetch(`https://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&prop=extracts&exintro=&explaintext=&titles=${this.innerHTML.replace(/ /g, '_').toLowerCase()}`).then(
      response => response.json()
    ).then(data => {
      const page = Object.values(data.query.pages)[0];
      sidebar.child('information').child('isotopes').child('title').child('text').dataset.link = `https://en.wikipedia.org/?curid=${page.pageid}`;

      tooltip.child('title').innerHTML = page.title;
      tooltip.child('citation').child('source').href = `href='https://en.wikipedia.org/?curid=${page.pageid}'`;

      const text = tooltip.child('text');
      text.innerHTML = page.extract;

      const fullText = text.innerHTML.split('');
      text.innerHTML = '';

      let lastLine = { height: 0, text: '' };
      while (tooltip.scrollHeight <= tooltip.clientHeight && fullText.length) {
        if (tooltip.clientHeight !== lastLine.height)
          lastLine = { height: tooltip.clientHeight, text: text.innerHTML };

          text.innerHTML += fullText.shift();
      }
      text.innerHTML = `${lastLine.text.split(' ').slice(0, 0).join(' ')}&mldr;</span>`;
    });
  };

  [...sidebar.child('information').child('isotopes').getElementsByClassName('temporary')].forEach(
    element => element.remove()
  );

	const isotopes = Nubase2020.nuclides[element.symbol];
  if (isotopes) {
    abundanceCanvasKey.style.display = 'block';

    const stable = Object.fromEntries(Object.entries(Nubase2020.nuclides[element.symbol]).filter(
      ([ _, value ]) => value.half_life?.value?.value === 'Stable'
    ) ?? []);

    const abundances = Object.fromEntries(Object.entries(Nubase2020.nuclides[element.symbol]).map(
      ([ key, value ]) => [ key, value.abundance?.value?.value ]
    ).filter(
      ([ _, value ]) => value
    ) ?? []);

    if (!Object.keys(abundances).length)
      NoNaturalIsotopes();

    const padding = 0.015 * Math.min(innerWidth, innerHeight);
    const canvasKeyHeight = Object.keys(abundances).length * (16 + padding); //16 font size, 5 padding
    abundanceCanvasKey.height = canvasKeyHeight * 4;
    abundanceCanvasKey.style.height = `${canvasKeyHeight}px`;
    ackPen.restore();
    ackPen.save();
    ackPen.scale(4, 4);

    let startRadians = -Math.PI / 2;
    let abundanceKeyY = 0;
    Object.values(isotopes).forEach((isotope, index) => {
      const isotopeElement = document.createElement('span');
      isotopeElement.classList.add('temporary', 'isotope', 'searchable', 'no_event_update');
      isotopeElement.style.background = isotope.half_life?.color;

      isotopeElement.innerHTML = isotope.formatted_symbol;

      isotopeElement.addEventListener('click', function() {
        if (nSidebar.dataset.stuckOpen === isotope.symbol) {
          nSidebar.dataset.stuckOpen = null;
          [...sidebar.child('information').child('isotopes').getElementsByClassName('isotope')].forEach(
            element => element.classList.remove('selected')
          );

          nSidebar.dataset.hidden = true;
        } else {
          nSidebar.dataset.stuckOpen = isotope.symbol;
          [...sidebar.child('information').child('isotopes').getElementsByClassName('isotope')].forEach(
            element => isotopeElement === element ? element.classList.add('selected') : element.classList.remove('selected')
          );

          LoadIsotope.call(isotope, element);
        }
      });

      if (stable[isotope.symbol])
        isotopeElement.classList.add('stable');
      else if (isotope.half_life?.value?.value === 'Particle Unstable')
        isotopeElement.classList.add('unstable');
      else if (isotope.half_life?.color === undefined)
        isotopeElement.classList.add('unknown');

      if (abundances[isotope.symbol]) {
        isotopeElement.dataset.startRadians = startRadians;
        isotopeElement.classList.add('natural');

        isotopeElement.onmouseenter = async function() {
          isotopeElement.dataset.mouseOver = 'true';

          const { left, bottom, top, width } = this.getBoundingClientRect();
          const y = bottom + 0.04 * Math.min(innerWidth, innerHeight) + 21 < innerHeight ? { position: bottom + 5, anchor: 'top' } : { position: top - 5, anchor: 'bottom' };
          new Tooltip('text', `<div class='abundance'><span class='key'>Abundance: </span><span class='value searchable' data-search='false'>${abundances[isotope.symbol]}%</span></div>`, left + width / 2, y.position, 'center', y.anchor, 250, { leave: this, time: { min: 100 } }, null, 'isotope_tooltip').create(sidebar);

          const startRadians = +isotopeElement.dataset.startRadians;

          const color = colors[index];
          acPen.fillStyle = color;

          const radians = 2 * Math.PI * (+abundances[isotope.symbol] / 100) || 0;

          const intervals = 25;
          const time = 100;
          for (let i = 0;i < intervals;i++) {
            if (isotopeElement.dataset.mouseOver !== 'true')
              break;

            acPen.beginPath();
            acPen.moveTo(0.5, 0.5);
            acPen.arc(0.5, 0.5, 0.4 + 0.025 / intervals * i, startRadians - 0.01, startRadians + radians + 0.01);
            acPen.fill();

            await new Promise(r => setTimeout(r, time / intervals));
          }
        };

        isotopeElement.onmouseleave = function() {
          isotopeElement.dataset.mouseOver = 'false';

          acPen.clearRect(0, 0, 1, 1);
          let startRadians = -Math.PI / 2;
          Object.entries(abundances).forEach(([drawIsotope, abundance], index) => {
            const color = colors[Object.keys(Nubase2020.nuclides[element.symbol]).indexOf(drawIsotope)];
            acPen.fillStyle = color;

            const radians = 2 * Math.PI * (+abundance / 100) || 0;
            if (!radians)
              return;

            acPen.beginPath();
            acPen.moveTo(0.5, 0.5);
            acPen.arc(0.5, 0.5, 0.4, startRadians - 0.01, startRadians + radians + 0.01);
            acPen.fill();

            startRadians += radians;
          });
        };

        const color = colors[index];
        acPen.fillStyle = color;

        const radians = 2 * Math.PI * (+abundances[isotope.symbol] / 100) || 0;
        if (radians) {
          acPen.beginPath();
          acPen.moveTo(0.5, 0.5);
          acPen.arc(0.5, 0.5, 0.4, startRadians - 0.01, startRadians + radians + 0.01);
          acPen.fill();

          startRadians += radians;
        }

        ackPen.fillStyle = color;
        ackPen.fillRect(padding, abundanceKeyY, 16, 16);

        ackPen.fillStyle = 'white';
        ackPen.font = '16px Verdana';
        ackPen.textBaseline = 'top';

        const differentCode = {
          1: String.fromCharCode(185),
          2: String.fromCharCode(178),
          3: String.fromCharCode(179)
        };

        ackPen.fillText(` ${isotope.mass_number.toString().split('').map(
          char => differentCode[char] ?? String.fromCharCode(char.charCodeAt(0) + 8256)
        ).join('')}${isotope.element} - ${abundances[isotope.symbol]}%`, 16 + padding, abundanceKeyY);

        abundanceKeyY += 16 + padding;
      }

      sidebar.child('information').child('isotopes').appendChild(isotopeElement);

      const wbr = document.createElement('wbr');
      wbr.classList.add('temporary');
      sidebar.child('information').child('isotopes').appendChild(wbr);
    });
  } else {
    abundanceCanvasKey.style.display = 'none';

    const error = document.createElement('span');
    error.classList.add('no_known_isotopes', 'temporary');
    error.innerHTML = 'No known isotopes';

    sidebar.child('information').child('isotopes').appendChild(error);
    Array.from({ length: 2 }, () => {
      const br = document.createElement('br');
      br.classList.add('temporary');
      sidebar.child('information').child('isotopes').appendChild(br);
    });

    NoNaturalIsotopes();
  }
}

function LoadIso(parentThis, iso) {
  {
    const title = iso.child('title');
    title.dataset.searchQuery = this.search_query.split('-').map(
      (value, index) => index ? value : pTable.reduce(
        (foundElement, element) => element.symbol === value ? element.name : foundElement, value
      )
    ).join('-');

    title.child('symbol').innerHTML = this.formatted_symbol && `<u>${this.formatted_symbol}</u>`;
    title.child('alternate_names').innerHTML = this.alternate_names && `<u>${this.alternate_names}</u>`;
  };

  {
    const nucleons = iso.child('nucleons');

    nucleons.child('protons').child('value').innerHTML = this.protons;
    nucleons.child('neutrons').child('value').innerHTML = this.neutrons;
  };

  {
    const time = iso.child('time');

    time.child('discovery').child('value').innerHTML = this.discoverd;
    time.child('updated').child('value').innerHTML = this.updated;
  };

  {
    const information = iso.child('information');
    [ 'excitation_energy', 'mass_excess', 'half_life', 'abundance' ].forEach(key => {
      if (!this[key] || !information.getElementsByClassName(key).length)
        return;

      const container = information.child(key);
      {
        const value = container.child('value');
        if (this[key]?.value?.value) {
          const innerValue = value.child('value');

          innerValue.innerHTML = `${(this[key]?.symbol ?? '').replace('=', '')}${this[key]?.value?.value}`;
          innerValue.dataset.estimated = this[key]?.value?.estimated;
          if (this[key]?.value?.estimated)
            innerValue.onmouseenter = () => {
              const { left, bottom, top, width } = innerValue.getBoundingClientRect();
              const y = bottom + 0.04 * Math.min(innerWidth, innerHeight) + 21 < innerHeight ? { position: bottom + 5, anchor: 'top' } : { position: top - 5, anchor: 'bottom' };

              new Tooltip('text', 'estimation', left + width / 2, y.position, 'center', y.anchor, 250, { leave: innerValue, time: { min: 100 } }, null, 'value_estimation_tooltip').create(information);
            };
        };

        const deviationValue = this[key]?.deviation?.value;
        if (deviationValue) {
          const deviation = value.child('deviation');

          deviation.innerHTML = `(${deviationValue.includes('+') && deviationValue.includes('-') ? deviationValue.split('-').join(', -') : `&pm;${deviationValue}`} &sigma;)`;
          deviation.dataset.estimated = this[key]?.deviation?.estimated;
          if (this[key]?.deviation?.estimated)
            deviation.onmouseenter = () => {
              const { left, bottom, top, width } = deviation.getBoundingClientRect();
              const y = bottom + 0.04 * Math.min(innerWidth, innerHeight) + 21 < innerHeight ? { position: bottom + 5, anchor: 'top' } : { position: top - 5, anchor: 'bottom' };

              new Tooltip('text', 'estimation', left + width / 2, y.position, 'center', y.anchor, 250, { leave: deviation, time: { min: 100 } }, null, 'deviation_estimation_tooltip').create(information);
            };

          deviation.onmouseenter = () => {
            const { left, bottom, top, width } = deviation.getBoundingClientRect();
            const y = bottom + 0.04 * Math.min(innerWidth, innerHeight) + 21 < innerHeight ? { position: bottom + 5, anchor: 'top' } : { position: top - 5, anchor: 'bottom' };

            new Tooltip('text', 'standard deviation', left + width / 2, y.position, 'center', y.anchor, 250, { leave: deviation, time: { min: 100 } }, null, 'deviation_tooltip').create(information);
          };
        };
      };

      {
        const unit = container.child('unit');
        unit.innerHTML = key === 'abundance' ? '%' : this[key]?.unit;
        if (this[key]?.full_unit) {
          unit.onmouseenter = () => {
            const { left, bottom, top, width } = unit.getBoundingClientRect();
            const y = bottom + 0.04 * Math.min(innerWidth, innerHeight) + 21 < innerHeight ? { position: bottom + 5, anchor: 'top' } : { position: top - 5, anchor: 'bottom' };

            new Tooltip('text', `${this[key].full_unit.name}${this[key].full_unit.definition ? `: ${this[key].full_unit.definition}` : ''}`, left + width / 2, y.position, 'center', y.anchor, 250, { leave: unit, time: { min: 100 } }, null, 'full_unit_tooltip').create(information);
          };
        }
      }
    });

    {
      const spinParityIsospin = information.child('spin_parity_isospin');
      this.spin_parity?.forEach(({ spin, parity, uses_data: usesData, uses_trends: usesTrends, estimated }) => {
        const spinParity = spinParityIsospin.child('template').template();

        spinParity.child('spin').child('value').innerHTML = spin;
        spinParity.child('parity').child('value').innerHTML = parity;
      });

      spinParityIsospin.child('isospin').child('value').innerHTML = this.isospin;
    };
  };

  {
    const radioactiveDecay = iso.child('radioactive_decay');
    {
      const decays = radioactiveDecay.child('decays');
      Object.entries(this.radioactive_decay ?? {}).reverse().forEach(([ key, decayObject ]) => {
        const decay = decays.child('template').template();

        decay.child('type').innerHTML = decayObject.mode;
        if (decayObject.symbol === '?') {
          const chance = decay.child('chance');

          chance.innerHTML = 'Unknown Chance';
        } else {
          const chance = decay.child('chance');

          const percentValue = decayObject.value?.value;
          if (percentValue) {
            const percent = chance.child('percent');

            percent.innerHTML = `${(decayObject?.symbol ?? '').replace('=', '')}${decayObject.value?.value}`;
            percent.dataset.estimated = decayObject.value?.estimated;
          };

          const deviationValue = decayObject.deviation?.value;
          if (deviationValue) {
            const deviation = chance.child('deviation');

            deviation.innerHTML = `(${deviationValue.includes('+') && deviationValue.includes('-') ? deviationValue.split('-').join(', -') : `&pm;${deviationValue}`} &sigma;)`;
            deviation.dataset.estimated = decayObject.deviation?.estimated;
          };
        }

        (decayObject.results ?? []).reverse().forEach(resultObject => {
          const result = decay.child('template').template();

          let from = this.formatted_symbol;
          if (from) {
            if (!/<sup>.*<\/sup>/.test(from))
              from += '<sup></sup>';
            if (!/<sub>.*<\/sub>/.test(from))
              from += '<sub></sub>';

            result.child('from').innerHTML = from;
          }

          let toStrings;
          if (resultObject === 'variable')
            toStrings = [ [ 'Varies' ] ];
          else if (resultObject instanceof Array)
            toStrings = resultObject.map(
              isotope => [ isotope.formatted_symbol ?? (isotope instanceof Array ? isotope[0]?.formatted_symbol ?? isotope[0] : isotope), isotope instanceof Array ? isotope[0] : isotope ]
            );
          else
            toStrings = [ resultObject.formatted_symbol ?? resultObject, resultObject ];

          let lastIndex = toStrings.length - 1;
          toStrings.reverse().forEach(([ toString, iso ], index) => {
            const to = result.child('template').template();
            if (iso?.symbol) {
              to.dataset.search = true;
              to.dataset.openIso = iso.isomer_id !== undefined ? `isomer:${iso.mass_number}.${iso.isomer_id.character}.${iso.element}` : `isotope:${iso.mass_number}.${iso.element}`;
            }

            if (index < lastIndex)
              to.style.marginLeft = `calc(4ch + 2vmin + ${(this.mass_number.toString().length + (this.isomer_id?.character ?? '').toString().length) * 0.75 + this.element.length}ch + calc(2ch * 1.5) + 3ch)`;

            if (!/<sup>.*<\/sup>/.test(toString))
              toString += '<sup></sup>';
            if (!/<sub>.*<\/sub>/.test(toString))
              toString += '<sub></sub>';

            to.innerHTML = toString;

            result.insertBefore(document.createElement('br'), to);
          });
          result.style.height = `calc(calc(3ch + 3vmin) * ${result.getElementsByClassName('to').length - 1})`;

          decay.child('collapse_button').addEventListener('click', function() {
            this.classList.add('animate');
            result.dataset.expanded = {
              true: 'false',
              false: 'true',
            }[result.dataset.expanded];
          });
        });
      });
    };

    const decayChainButton = radioactiveDecay.child('title').child('decay_chain_button');
    decayChainButton.onclick = () => {
      CalculateDecayChain.call(this, true);
    };
  };

  {
    const parents = iso.child('parents');
    (this.parents ?? []).forEach(({ parent: parentObject, decay: decayObject }) => {
      const parentId = `parent:${parentObject.symbol.replace(/\s/g, '_')}`;
      const parent = parents.getElementsByClassName(parentId)[0] ?? parents.child('template').template();
      if (!parent.classList.contains(parentId)) {
        parent.classList.add(parentId);

        parent.child('from').innerHTML = parentObject.formatted_symbol;
        parent.child('from').dataset.openIso = iso.isomer_id !== undefined ? `isomer:${parentObject.mass_number}.${parentObject.isomer_id.character}.${parentObject.element}` : `isotope:${parentObject.mass_number}.${parentObject.element}`;

        parent.child('collapse_button').addEventListener('click', function() {
          this.classList.add('animate');
          parent.dataset.expanded = {
            true: 'false',
            false: 'true',
          }[parent.dataset.expanded];
        });
      }

      const decayId = `decay:${decayObject.key.replace(/\s/g, '_')}`;
      if (!parent.child(decayId)) {
        const decay = parent.child('template').template();
        decay.classList.add(decayId);
        decay.innerHTML = decayObject.mode;

        decay.style.marginLeft = `calc(9ch + 2vmin + ${(parentObject.mass_number.toString().length + (parentObject.isomer_id?.character ?? '').toString().length) * 0.75 + parentObject.element.length}ch + 3ch)`;

        parent.insertBefore(document.createElement('br'), decay);
      } else {
        const decay = parent.child(decayId);

        decay.dataset.amount ??= 1;
        decay.dataset.amount++;
      }

      [...parent.getElementsByClassName('searchable')].forEach(element => {
        if (!/<sup>.*<\/sup>/.test(element.innerHTML))
          element.innerHTML += '<sup></sup>';
        if (!/<sub>.*<\/sub>/.test(element.innerHTML))
          element.innerHTML += '<sub></sub>';
      });
    });

    [...parents.getElementsByClassName('parent')].forEach(parent => {
      if (!parent.classList.contains('template'))
        parent.style.height = `calc(calc(3ch + 3vmin) * ${parent.getElementsByClassName('decay').length - 1})`;
    });
  };
}

function LoadIsotope(element) {
  nSidebar.dataset.hidden = false;

	const getDecimals = function(value) {
    value = (+value).noExponents().toString();
    return (value.split('.')[1] ?? '').length;
  };

  [...nSidebar.getElementsByClassName('nuclide')].forEach(
    nuclide => nuclide.classList.contains('template') ? void(0) : nuclide.remove()
  );

  const nuclide = nSidebar.child('template').template();
  [...nuclide.getElementsByClassName('data_point')].forEach(
    dataPoint => dataPoint.innerHTML = ''
  );

  LoadIso.call(this, globalThis, nuclide);

  (this.isomers ?? []).forEach(isomerObject => {
    const isomer = nuclide.child('isomers').child('template').template();

    LoadIso.call(isomerObject, this, isomer);
  });

  [...nuclide.getElementsByClassName('collapse_button')].forEach(button => {
    const { parentElement: parent } = button;
    if (!button.classList.contains('custom_handler') && parent?.classList?.contains('title')) {
      const { parentElement: section } = parent;

      button.onclick = function() {
        button.classList.add('animate');
        if (section?.dataset)
          section.dataset.expanded = {
            true: 'false',
            false: 'true',
          }[section?.dataset?.expanded];
      };
    }
  });

  [...nuclide.getElementsByClassName('data_point')].forEach(
    dataPoint => dataPoint.innerHTML === 'undefined' ? dataPoint.innerHTML = '' : void(0)
  );

  [...nuclide.getElementsByClassName('parent_data_point')].forEach(parent => {
    const dataPoints = parent.getElementsByClassName('data_point');

    parent.style.display = !dataPoints.length || [...dataPoints].some(
      dataPoint => dataPoint.innerHTML?.length > 0
    ) ? null : 'none';
  });

  LoadSearchableElments();
}

function CalculateDecayChain(compact = false) {
  const maxChain = 1000;

  let depthSizes;
  let totalChains = 1;

  const additionalConnections = {};

  const allFound = {};

  let chain = [ { iso: this, depth: 1, depthIndex: 0, connection: { iso: this, depth: -1, depthIndex: -1 }, path: [ 0 ] }, [] ];
  const object = [ { iso: this, depth: 1, depthIndex: 0, connection: { iso: this, depth: -1, depthIndex: -1 }, path: [ 0 ] }, [] ];
  for (let fullIndex = 0;fullIndex < +compact + 1;fullIndex++) {
    depthSizes = { 1: 1 };

	  const toSearch = [ [ this, fullIndex || !compact ? chain : object, [] ] ];
	  for (let index = 0;index < toSearch.length;index++) {
	  	const [ iso, chain, path ] = toSearch[index];

	  	if (!iso?.radioactive_decay)
	  		continue;

	  	Object.values(iso.radioactive_decay).forEach(
	  		decay => (decay?.results ?? []).forEach(result => {
	  			if (result instanceof Array)
	  				result.forEach(innerResult => {
	  					if (innerResult instanceof Object && innerResult?.element) {
                if (!fullIndex)
                  totalChains++;

	  						const index = GetArray(chain, path)[1].length;
                let depth = path.length + 2;

                depthSizes[depth] ??= 0;
                depthSizes[depth]++;

                if (fullIndex) {
                  const theseFound = allFound[innerResult.formatted_symbol];

                  const lowest = theseFound[0] === true ? theseFound[1] : theseFound.reduce(
                    (lowest, thisIso) => thisIso.depth > lowest.depth ? thisIso : lowest,
                  { depth: -Infinity });

                  if (theseFound[0] === true || lowest.depth !== depth) {
                    depthSizes[depth]--;

                    additionalConnections[innerResult.formatted_symbol] ??= [];
                    additionalConnections[innerResult.formatted_symbol].push({ iso: innerResult, depth: depth - 1, depthIndex: depthSizes[depth - 1] - 1, connection: GetArray(chain, path)[0] ?? { iso: this, depth: 0, depthIndex: 0 }, path: path.concat(index) });

                    return;
                  } else
                    allFound[innerResult.formatted_symbol] = [ true, lowest ];
                } else {
                  allFound[innerResult.formatted_symbol] ??= [];
                  allFound[innerResult.formatted_symbol].push({ depth: depth, depthIndex: depthSizes[depth] - 1 });
                }

	  						GetArray(chain, path)[1].push([ { iso: innerResult, depth: depth, depthIndex: depthSizes[depth] - 1, connection: GetArray(chain, path)[0] ?? { iso: this, depth: 0, depthIndex: 0 }, path: path.concat(index) }, [] ]);
	  						toSearch.push([ innerResult, chain, path.concat(index) ]);
	  					}
	  				});
	  			else if (result instanceof Object && result?.element) {
            if (!fullIndex)
              totalChains++;

            const index = GetArray(chain, path)[1].length;
            let depth = path.length + 2;

            depthSizes[depth] ??= 0;
            depthSizes[depth]++;

            if (fullIndex) {
              const theseFound = allFound[result.formatted_symbol];

              const lowest = theseFound[0] === true ? theseFound[1] : result.reduce(
                (lowest, thisIso) => thisIso.depth > lowest.depth ? thisIso : lowest,
              { depth: -Infinity });

              if (theseFound[0] === true || lowest.depth !== depth) {
                depthSizes[depth]--;

                additionalConnections[result.formatted_symbol] ??= [];
                additionalConnections[result.formatted_symbol].push({ iso: result, depth: depth - 1, depthIndex: depthSizes[depth - 1] - 1, connection: GetArray(chain, path)[0] ?? { iso: this, depth: 0, depthIndex: 0 }, path: path.concat(index) });

                return;
              } else
                allFound[result.formatted_symbol] = [true, lowest];
            } else {
              allFound[result.formatted_symbol] ??= [];
              allFound[result.formatted_symbol].push({ depth: depth, depthIndex: depthSizes[depth] - 1 });
            }

            GetArray(chain, path)[1].push([ { iso: result, depth: depth, depthIndex: depthSizes[depth] - 1, connection: GetArray(chain, path)[0] ?? { iso: this, depth: 0, depthIndex: 0 }, path: path.concat(index) }, [] ]);
            toSearch.push([ result, chain, path.concat(index) ]);
          }
	  		})
	  	);
	  }
  }

  const scale = 7;
  const maxDepthSize = Math.max(...Object.values(depthSizes));

  let maxLeft = -1;
  let maxTop = -1;

  const content = decayChainElement.child('content');
  content.innerHTML = '<svg height="5em"></svg>';

  let decaySvg = `<svg width='thisWidth' height='thisHeight'>`;

  const chainLength = chain.flat(Infinity).length;
  if (chainLength > maxChain) {
    decayChainElement.child('collapse_button').hidden = true;
    if (!compact)
      CalculateDecayChain.call(this, true);

    return false;
  }

  chain = chain.flat(Infinity).filter(
  	({ iso }) => iso
  );

  const isoPositions = Object.fromEntries(chain.map(
    ({ iso, depth, depthIndex }) => [ iso.symbol, { x: depthIndex, y: depth } ]
  ));

  let chainIndex = 0;
  const noGreen = [];
  chain.map(({ iso, depth, depthIndex, connection: { iso: connectionIso, depth: connecitonDepth, depthIndex: connectionDepthIndex } }) => {
    const parentId = compact ? connectionIso.symbol : `${connectionDepthIndex}:${connecitonDepth}`;
    const parent = content.child(parentId);
    if (parent instanceof HTMLElement)
      parent.style.color = null;
    else
      noGreen.push(parentId);

    const connectionX = isoPositions[parentId]?.x ?? connectionDepthIndex;
    const connectionY = isoPositions[parentId]?.y ?? connecitonDepth;

    if (depthSizes[connecitonDepth]) {
      const line = `<line x1='${((connectionX + 0.5) / depthSizes[connectionY]) * 100}%' y1='${connectionY / Object.values(depthSizes).length * 100}%' x2='${((depthIndex + 0.5) / depthSizes[depth]) * 100}%' y2='${depth / Object.values(depthSizes).length * 100}%' style='stroke:white;' />`;

      decaySvg += line;
    }

    (additionalConnections[iso.formatted_symbol] ?? []).forEach(({ connection: { iso: connectionIso, depth: connecitonDepth, depthIndex: connectionDepthIndex } }) => {
      const parentId = compact ? connectionIso.symbol : `${connectionDepthIndex}:${connecitonDepth}`;
      const parent = content.child(parentId);
      if (parent instanceof HTMLElement)
        parent.style.color = null;
      else
        noGreen.push(parentId);

      const connectionX = isoPositions[parentId]?.x ?? connectionDepthIndex;
      const connectionY = isoPositions[parentId]?.y ?? connecitonDepth;

      if (depthSizes[connecitonDepth]) {
        const line = `<line x1='${((connectionX + 0.5) / depthSizes[connectionY]) * 100}%' y1='${connectionY / Object.values(depthSizes).length * 100}%' x2='${((depthIndex + 0.5) / depthSizes[depth]) * 100}%' y2='${depth / Object.values(depthSizes).length * 100}%' style='stroke:white;' />`;

        decaySvg += line;
      }
    });

    const left = scale * (maxDepthSize / depthSizes[depth] || 1) * (depthIndex + 0.5);
    const top = depth * 4;

    const span = document.createElement('span');
    span.dataset.search = true;
    span.dataset.openIso = iso.isomer_id !== undefined ? `isomer:${iso.mass_number}.${iso.isomer_id.character}.${iso.element}` : `isotope:${iso.mass_number}.${iso.element}`;
    span.classList.add('searchable', 'no_decoration');

    span.style.left = `${left}ch`;
    span.style.top = `${top}em`;

    const spanId = compact ? iso.symbol : `${depthIndex}:${depth}`;
    span.classList.add(spanId);

    if (!noGreen.includes(spanId))
      span.style.color = 'green';

    span.innerHTML = iso.formatted_symbol;

    requestIdleCallback(() => {
      content.appendChild(span);
      if (noGreen.includes(spanId))
        span.style.color = null;

      maxLeft = Math.max(left + span.offsetWidth * left / span.offsetLeft, maxLeft);
      maxTop = Math.max(top + span.offsetHeight * top / span.offsetTop, maxTop);

      if (++chainIndex === chainLength) {
        decayChainElement.innerHTML = decayChainElement.innerHTML.replace(/<svg.*em">/s, `${decaySvg.replace('thisWidth', `${maxLeft}ch`).replace('thisHeight', `${maxTop - 1.5}em`)}`);

        LoadSearchableElments();

        const collapseButton = decayChainElement.child('collapse_button');
        if ((Object.values(additionalConnections).length > 0 || !compact) && totalChains <= maxChain) {
          collapseButton.hidden = false;
          if (compact) {
            collapseButton.innerHTML = 'Expand';

            collapseButton.onclick = () => {
              collapseButton.onclick = null;
              CalculateDecayChain.call(this, false);
            };
          } else {
            collapseButton.innerHTML = 'Collapse';

            collapseButton.onclick = () => {
              collapseButton.onclick = null;
              CalculateDecayChain.call(this, true);
            };
          }
        } else
          collapseButton.hidden = true;
      }
    });
  });

  decayChainElement.child('element_count').innerHTML = `${chainLength} / ${totalChains}`;
  decayChainElement.dataset.hidden = false;
}

function GetArray(object, path) {
	if (!path?.length)
		return object;

	return path.reduce(
		(object, key, index) => index === path.length - 1 ? object[key] : object[key][1],
	object[1]);
}

function CalculateDecay(type) { /* a = mass #, z = protons */
  let isotopes = [];
  switch (type) {
    case 'A': {
      isotopes = FindIsotopesWithAZ(this.a - 4, this.z - 2).map(
        isotope => [ isotope, '&alpha;' ]
      );
      break;
    };
    case 'p': {
      isotopes = FindIsotopesWithAZ(this.a - 1, this.z - 1).map(
        isotope => [ isotope, 'p<sup>+</sup>' ]
      );
      break;
    };
    case '2p': {
      isotopes = FindIsotopesWithAZ(this.a - 2, this.z - 2).map(
        isotope => [ isotope, '2p<sup>+</sup>' ]
      );
      break;
    };
    case '3p': {
      isotopes = FindIsotopesWithAZ(this.a - 3, this.z - 3).map(
        isotope => [ isotope, '3p<sup>+</sup>' ]
      );
      break;
    };
    case 'n': {
      isotopes = FindIsotopesWithAZ(this.a - 1, this.z).map(
        isotope => [ isotope, 'n<sup>0</sup>' ]
      );
      break;
    };
    case '2n': {
      isotopes = FindIsotopesWithAZ(this.a - 2, this.z).map(
        isotope => [ isotope, '2n<sup>0</sup>' ]
      );
      break;
    };
    case '3n': {
      isotopes = FindIsotopesWithAZ(this.a - 3, this.z).map(
        isotope => [ isotope, '3n<sup>0</sup>' ]
      );
      break;
    };
    case 'd': {
      isotopes = FindIsotopesWithAZ(this.a - 2, this.z - 1).map(
        isotope => [ isotope, Nubase2020.nuclides.H['1H'] ]
      );
      break;
    };
    case 'EC': {
      isotopes = FindIsotopesWithAZ(this.a, this.z - 1).map(
        isotope => [ [ `${isotope.formatted_symbol} + e<sup>-</sup>`, isotope ], 'n<sup>0</sup> + &nu;<sub>e</sub>' ]
      );
      break;
    };
    case 'EC+B+': {
      isotopes = FindIsotopesWithAZ(this.a, this.z).map(
        isotope => [ [ `${isotope.formatted_symbol} + e<sup>-</sup>`, isotope ], 'n<sup>0</sup> + &nu;<sub>e</sub>', 'e<sup>+</sup>', '&nu;<sub>e</sub>' ]
      );;
      break;
    };
    case 'e+':
    case 'B+':
    case 'EC+e+':{
      isotopes = FindIsotopesWithAZ(this.a, this.z - 1).map(
        isotope => [ isotope, 'e<sup>+</sup>', '&nu;<sub>e</sub>' ]
      );
      break;
    };
    case 'EC+B+':{
      isotopes = FindIsotopesWithAZ(this.a, this.z - 2).map(
        isotope => [ isotope, 'e<sup>+</sup>', 'e<sup>+</sup>', '&nu;<sub>e</sub>', '&nu;<sub>e</sub>' ]
      );
      break;
    };
    case 'B-': {
      isotopes = FindIsotopesWithAZ(this.a, this.z + 1).map(
        isotope => [ isotope, 'e<sup>+</sup>', '<span style="text-decoration: overline">&nu;</span><sub>e</sub>' ]
      );
      break;
    };
    case 'B-B-':
    case '2B-': {
      isotopes = FindIsotopesWithAZ(this.a, this.z + 2).map(
        isotope => [ isotope, 'e<sup>+</sup>', 'e<sup>+</sup>', '<span style="text-decoration: overline">&nu;</span><sub>e</sub>', '<span style="text-decoration: overline">&nu;</span><sub>e</sub>' ]
      );
      break;
    };
    case 'B+B+':
    case '2B+': {
      isotopes = FindIsotopesWithAZ(this.a, this.z - 2).map(
        isotope => [ isotope, 'e<sup>+</sup>', 'e<sup>+</sup>', '&nu;<sub>e</sub>', '&nu;<sub>e</sub>' ]
      );
      break;
    };
    case 'B-n': {
      isotopes = FindIsotopesWithAZ(this.a - 1, this.z + 1).map(
        isotope => [ isotope, 'e<sup>+</sup>', '<span style="text-decoration: overline">&nu;</span><sub>e</sub>', 'n<sup>0</sup>' ]
      );
      break;
    };
    case 'B-2n': {
      isotopes = FindIsotopesWithAZ(this.a - 2, this.z + 1).map(
        isotope => [ isotope, 'e<sup>+</sup>', '<span style="text-decoration: overline">&nu;</span><sub>e</sub>', 'n<sup>0</sup>', 'n<sup>0</sup>' ]
      );
      break;
    };
    case 'B-3n': {
      isotopes = FindIsotopesWithAZ(this.a - 3, this.z + 1).map(
        isotope => [ isotope, 'e<sup>+</sup>', '<span style="text-decoration: overline">&nu;</span><sub>e</sub>', 'n<sup>0</sup>', 'n<sup>0</sup>', 'n<sup>0</sup>' ]
      );
      break;
    };
    case 'B-4n': {
      isotopes = FindIsotopesWithAZ(this.a - 4, this.z + 1).map(
        isotope => [ isotope, 'e<sup>+</sup>', '<span style="text-decoration: overline">&nu;</span><sub>e</sub>', 'n<sup>0</sup>', 'n<sup>0</sup>', 'n<sup>0</sup>', 'n<sup>0</sup>' ]
      );
      break;
    };
    case 'B-p': {
      isotopes = FindIsotopesWithAZ(this.a - 1, this.z - 1).map(
        isotope => [ isotope, 'e<sup>+</sup>', '<span style="text-decoration: overline">&nu;</span><sub>e</sub>', 'p<sup>+</sup>' ]
      );
      break;
    };
    case 'B+p': {
      isotopes = FindIsotopesWithAZ(this.a - 1, this.z - 2).map(
        isotope => [ isotope, 'e<sup>+</sup>', '&nu;<sub>e</sub>', 'p<sup>+</sup>' ]
      );
      break;
    };
    case 'B+2p': {
      isotopes = FindIsotopesWithAZ(this.a - 2, this.z - 3).map(
        isotope => [ isotope, 'e<sup>+</sup>', '&nu;<sub>e</sub>', 'p<sup>+</sup>', 'p<sup>+</sup>' ]
      );
      break;
    };
    case 'B+3p': {
      isotopes = FindIsotopesWithAZ(this.a - 3, this.z - 4).map(
        isotope => [ isotope, 'e<sup>+</sup>', '&nu;<sub>e</sub>', 'p<sup>+</sup>', 'p<sup>+</sup>', 'p<sup>+</sup>' ]
      );
      break;
    };
    case 'B+pA':{
      isotopes = FindIsotopesWithAZ(this.a - 5, this.z - 3).map(
        isotope => [ isotope, 'e<sup>+</sup>', '&nu;<sub>e</sub>', 'p<sup>+</sup>', '&alpha;'  ]
      );
      break;
    };
    case 'B-A': {
      isotopes = FindIsotopesWithAZ(this.a - 4, this.z - 1).map(
        isotope => [ isotope, 'e<sup>+</sup>', '<span style="text-decoration: overline">&nu;</span><sub>e</sub>', '&alpha;' ]
      );
      break;
    };
    case 'B+A': {
      isotopes = FindIsotopesWithAZ(this.a - 4, this.z + 3).map(
        isotope => [ isotope, 'e<sup>+</sup>', '&nu;<sub>e</sub>', '&alpha;' ]
      );
      break;
    };
    case 'B-d': {
      isotopes = FindIsotopesWithAZ(this.a - 2, this.z).map(
        isotope => [ isotope, 'e<sup>+</sup>', '<span style="text-decoration: overline">&nu;</span><sub>e</sub>', Nubase2020.nuclides.H['2H'] ]
      );
      break;
    };
    case 'B-t': {
      isotopes = FindIsotopesWithAZ(this.a - 3, this.z).map(
        isotope => [ isotope, 'e<sup>+</sup>', '<span style="text-decoration: overline">&nu;</span><sub>e</sub>', Nubase2020.nuclides.H['3H'] ]
      );
      break;
    };
    case 'IT': {
      isotopes = FindIsotopesWithAZ(this.a, this.z, true, this).reduce(
        (isotopes, isotope) => isotopes.concat([[ isotope, '&gamma;' ], [ isotope, 'e<sup>-</sup>' ]]), []
      );
      break;
    };
    case 'SF':
    case 'B+SF':
    case 'B-SF': {
      isotopes = [ 'variable' ];
      break;
    };
    default: {
      if (type?.includes('CD ')) {
        const clusterDecay = type.replace('CD ', '');
        const emittedIsotope = (Nubase2020.nuclides[clusterDecay.replace(/\d/g, '')] ?? [])[clusterDecay];
        if (!emittedIsotope)
          break;

        isotopes = FindIsotopesWithAZ(this.a - emittedIsotope.a, this.z - emittedIsotope.z).map(
          isotope => [ emittedIsotope, isotope ]
        );
      }
      break;
    };
  };

  return isotopes.filter(
    isotope => isotope?.symbol !== this.symbol
  );
}

function FindIsotopesWithAZ(a, z, include_isomers, base_isomer) {
  return ((Nubase2020.az_dictionary[a] ?? {})[z] ?? []).filter(iso => {
    const isomer = iso.isomer_id !== undefined;
    if (isomer) {
      if (!include_isomers)
        return false;
      else if (iso.symbol === base_isomer?.symbol || iso.excitation_energy?.value?.value > base_isomer?.excitation_energy?.value?.value)
        return false;
    }

    return true;
  });
}

/*function LoadIsotope2(element, isotope) {
  const getDecimals = function(value) {
    value = (+value).noExponents().toString();
    return (value.split('.')[1] ?? '').length;
  };

  const calcUncertainty = function(value, uncertainty) {
    const range = [];
    let uncertaintyRange = [];

    value = +value;
    if (uncertainty[0] === '+')
      uncertaintyRange = uncertainty.split('-').reverse();
    else if (uncertainty[0] === '-')
      uncertaintyRange = uncertainty.split('+');
    else
      uncertaintyRange = [ uncertainty, uncertainty ];

    uncertaintyRange = uncertaintyRange.map(
      value => +value
    );

    const roundFactor = 10 ** Math.max(getDecimals(value), ...uncertaintyRange.map(
      value => getDecimals(value)
    ));

    range[0] = Math.round((value - uncertaintyRange[0]) * roundFactor) / roundFactor;
    range[1] = Math.round((value + uncertaintyRange[1]) * roundFactor) / roundFactor;

    return range;
  };

  isotope = isotope.replace(/(<sup>|<\/sup>)/g, '').toLowerCase();

  let nuclide;
  if (!nuclide_data.some(thisNuclide => {
    if (thisNuclide.name.toLowerCase() === isotope) {
      nuclide = thisNuclide;
      return true;
    }
  }))
    return;

  nSidebar.dataset.hidden = false;

  nSidebar.child('title').child('mass_number').innerHTML = nuclide.a;
  nSidebar.child('title').child('atomic_symbol').innerHTML = element.symbol;
  nSidebar.child('title').child('alternate_names').innerHTML = nuclide.alternate_names ? `(${nuclide.alternate_names.join(', ')})` : '';

  nSidebar.child('nucleons').child('protons').child('value').innerHTML = nuclide.z;
  nSidebar.child('nucleons').child('neutrons').child('value').innerHTML = nuclide.n;

  [...nSidebar.child('energy_levels').getElementsByClassName('level')].forEach(
    level => level.remove()
  );

  nuclide.levels.forEach(level => {
    const levelDiv = document.createElement('div');
    levelDiv.classList.add('level');
    nSidebar.child('energy_levels').appendChild(levelDiv);

    {
      const title = document.createElement('h3');
      title.classList.add('title', 'energy');
      levelDiv.appendChild(title);

      const value = document.createElement('span');
      value.classList.add('value', 'searchable');
      value.innerHTML = level.energy?.value?.length ? `${level.energy.value} ${level.energy.unit}` : 'Unknown';
      title.appendChild(value);

      levelDiv.appendChild(document.createElement('br'));
    }

    if (level.spinAndParity) {
      const spinParity = document.createElement('span');
      spinParity.classList.add('spin_parity');
      spinParity.innerHTML = 'Spin and Parity: ';
      levelDiv.appendChild(spinParity);

      const value = document.createElement('span');
      value.classList.add('value', 'searchable');

      const [ spin, parity ] = level.spinAndParity.replace('(', '').replace(/\)$/, '').split(/[\/,]/);
      if (!parity) {
        spinParity.innerHTML = 'Spin: ';
        value.innerHTML = spin;
      } else
        value.innerHTML = `${spin} / ${parity}`;

      spinParity.appendChild(value);

      Array.from({ length: 3 }, () => levelDiv.appendChild(document.createElement('br')));
    }

    if (level.massExcess) {
      const massExcess = document.createElement('span');
      massExcess.classList.add('mass_excess');
      massExcess.innerHTML = 'Mass Excess: ';
      levelDiv.appendChild(massExcess);

      let index = 0;
      const values = [
        [ 'Raw', level.massExcess.value ],
        ...Object.entries(level.massExcess.formats ?? {}),
      ];

      const format = document.createElement('span');
      format.classList.add('format', 'searchable', 'no_event_update');
      format.innerHTML = values[0][0];
      format.onclick = function() {
        index = ++index % values.length;
        [ format.innerHTML, value.innerHTML ] = values[index];
      };
      massExcess.appendChild(format);

      const value = document.createElement('span');
      value.classList.add('value', 'searchable');
      value.innerHTML = values[0][1];
      massExcess.appendChild(value);

      const unit = document.createElement('span');
      unit.classList.add('unit', 'searchable');
      unit.innerHTML = level.massExcess.unit;
      massExcess.appendChild(unit);

      Array.from({ length: 2 }, () => levelDiv.appendChild(document.createElement('br')));
    }

    if (level.halflife) {
      const halfLife = document.createElement('div');
      halfLife.classList.add('half_life');
      halfLife.dataset.selected = 'o';
      halfLife.innerHTML = 'Half Life: ';
      levelDiv.appendChild(halfLife);

      if (Object.keys(level.halflife).toString() === 'value') {
        const value = document.createElement('span');
        value.classList.add('value', 'searchable');
        value.innerHTML = level.halflife.value.toLowerCase().toUpperCaseWords();
        halfLife.appendChild(value);
      } else {
        let index = 0;
        const values = [
          [ 'Raw', level.halflife.value ],
          ...Object.entries(level.halflife.formats ?? {}),
        ];

        const format = document.createElement('span');
        format.classList.add('format', 'searchable', 'no_event_update');
        format.innerHTML = values[0][0];
        format.onclick = function() {
          index = ++index % values.length;
          [ format.innerHTML, value.innerHTML ] = values[index];
        };
        halfLife.appendChild(format);

        const value = document.createElement('span');
        value.classList.add('value', 'searchable');
        value.innerHTML = values[0][1];
        halfLife.appendChild(value);

        Array.from({ length: 2 }, () => halfLife.appendChild(document.createElement('br')));

        const otherButton = document.createElement('span');
        otherButton.classList.add('other', 'button');
        otherButton.innerHTML = level.halflife.unit;
        otherButton.onclick = function() {
          halfLife.dataset.selected = 'o';

          format.hidden = false;
          value.innerHTML = values[index][1];
        };
        halfLife.appendChild(otherButton);

        if (level.halflife.unit !== 'S') {
          const secondButton = document.createElement('span');
          secondButton.classList.add('second', 'button');
          secondButton.innerHTML = 'S';
          secondButton.onclick = function() {
            halfLife.dataset.selected = 's';

            format.hidden = true;
            value.innerHTML = level.halflife.inSeconds.value;
          };
          halfLife.appendChild(secondButton);
        }
      }

      Array.from({ length: 0 }, () => levelDiv.appendChild(document.createElement('br')));
    }
  });

  LoadSearchableElments();
}*/

function LoadSearchableElments() {
  [...document.getElementsByClassName('searchable')].forEach(searchable => {
    if (!searchable.classList.contains('no_event_update'))
      searchable.onclick = searchable.dataset.search == 'true' ? function(e) {
        if (e.target.classList.contains('collapse_button'))
          return;

        if (searchable.dataset.openIso) {
          const [ key, path ] = searchable.dataset.openIso.split(':');
          switch (key) {
            case 'isotope': {
              const [ massNumber, element ] = path.split('.');
              const iso = Nubase2020.nuclides[element][`${massNumber}${element}`];

              LoadElement(iso.protons - 1);
              nSidebar.dataset.stuckOpen = iso.symbol;
              [...sidebar.child('information').child('isotopes').getElementsByClassName('isotope')].forEach(
                element => iso.formatted_symbol === element.innerHTML ? element.classList.add('selected') : element.classList.remove('selected')
              );

              LoadIsotope.call(iso, pTable[iso.protons - 1]);
              break;
            };
            case 'isomer': {
              const [ massNumber, isomerCharacter, element ] = path.split('.');
              const iso = Nubase2020.nuclides[element][`${massNumber}${element}`]

              LoadElement(iso.protons - 1);
              nSidebar.dataset.stuckOpen = iso.symbol;
              [...sidebar.child('information').child('isotopes').getElementsByClassName('isotope')].forEach(
                element => iso.formatted_symbol === element.innerHTML ? element.classList.add('selected') : element.classList.remove('selected')
              );

              LoadIsotope.call(iso.isomers.reduce(
                (match, iso) => iso?.isomer_id?.character === isomerCharacter ? iso : match
              ), pTable[iso.protons - 1]);
              break;
            };
          }
        } else if (searchable.dataset.searchQuery)
          window.open(`https://www.google.com/search?q=${searchable.dataset.searchQuery}`, '_blank');
        else if (searchable.classList.contains('title') && searchable.parentElement === nSidebar) {
          const symbol = searchable.child('atomic_symbol').innerHTML;
          window.open(`https://www.google.com/search?q=${pTable.reduce(
            (name, element) => element.symbol === symbol ? element.name : name, null
          )}+isotope+${searchable.child('mass_number').innerHTML}`, '_blank');
        } else if (searchable.parentElement?.classList.contains('title') && searchable.parentElement?.parentElement?.classList.contains('isotopes'))
          window.open(searchable.dataset.link ?? `https://en.wikipedia.org/wiki/${searchable.innerHTML.replace(/ /g, '_').toLocaleLowerCase()}`, '_blank');
        else
				  window.open(`https://www.google.com/search?q=${searchable.innerHTML}`, '_blank');
	  	} : null;
  });
}

window.addEventListener('keydown', function(event) {
  switch (event.key) {
    case 'ArrowUp':
      animation.direction = (animation.direction - animation.canScroll).clamp(-1, 1);
      break;
    case 'ArrowDown':
      animation.direction = (animation.direction + animation.canScroll).clamp(-1, 1);
      break;
    case 'Shift':
      animation.speed = 0.05;
      animation.scrollSpeed = 0.05;
      break;
    case ' ':
      animation.skip = true;
      break;
  }
});

window.addEventListener('keyup', function(event) {
  switch (event.key) {
    case 'ArrowUp':
      animation.arrowUp = false;
      break;
    case 'ArrowDown':
      animation.arrowDown = false;
      break;
    case 'Shift':
      animation.speed = 0.01;
      animation.scrollSpeed = 0.01;
      break;
    case 'h':
      document.body.dataset.hideEverything = {
        true: 'false',
        false: 'true',
      }[document.body.dataset.hideEverything];
      break;
  }
});

window.onwheel = function(event) {
  let element = event.target;
  let result = element.classList.contains('isotope') || element === credits || element === decayChainElement || element === nSidebar ? -1 : (element === document.body ? 1 : 0);
  while (element.parentElement && !result) {
    element = element.parentElement;
    result = element === sidebar || element === credits || element === decayChainElement || element === nSidebar || element === abundanceChart ? -1 : (element === document.body ? 1 : 0);
  }

  if (animation.canScroll && result === 1)
    animation.time = (animation.time - animation.scrollSpeed * -Math.sign(event.deltaY)).clamp(0, animation.maxTime);
};

class Particle {
  #x;
  #y;

  #vx;
  #vy;

  #vxChange = 0;
  #vyChange = 0;

  #scale;
  #color;

  #targetTimer;
  #targetThreshold;

  #lastSection;
  #sectionTimer;
  #sectionThreshold;

  #velocityTimer;
  #velocityThreshold;

  constructor(x, y, vx, vy, scale) {
    this.#x = x;
    this.#y = y;

    this.#vx = vx;
    this.#vy = vy;

    const angleChange = Math.atan2(Math.random(), Math.random());
    const quadrant = Math.floor(Math.random() * 4) + 1;

    const cos = Math.abs(Math.cos(angleChange ** 2 + 1));

    this.#vxChange = cos * ([ 1, 4 ].includes(quadrant) ? 1 : -1);
    this.#vyChange = (1 - cos) * ([ 1, 2 ].includes(quadrant) ? 1 : -1);

    this.#scale = scale;
    this.#color = `#99${Math.floor(9 - Math.random() * 9).toString(16)}`;

    this.#targetTimer = 0;
    this.#targetThreshold = particleInfo.timer.target.threshold + Math.floor(Math.random() * particleInfo.timer.target.variance * 2 - particleInfo.timer.target.variance);

    this.#sectionTimer = 0;
    this.#sectionThreshold = particleInfo.timer.section.threshold + Math.floor(Math.random() * particleInfo.timer.section.variance * 2 - particleInfo.timer.section.variance);

    this.#velocityTimer = 0;
    this.#velocityThreshold = particleInfo.timer.velocity.threshold + Math.floor(Math.random() * particleInfo.timer.velocity.variance * 2 - particleInfo.timer.velocity.variance);

    this.Update();

    particles.push(this);
  }
  Update(time = 1) {
    if (script.particleChange < 0 && onlyParticles > 100) {
      script.particleChange++;
      if (script.particleChange <= -0) {
        this.dead = true;

        onlyParticles--;
        return;
      }
    } else if (script.particleChange > 0) {
      script.particleChange--;
      if (script.particleChange >= 0) {
        script.particleChange += 0.8;
        document.body.particle(1, this.#scale);

        onlyParticles++;
        return;
      }
    }

    if (this.dead)
      return;

    this.#x += this.#vx * time;
    this.#y += this.#vy * time;

    this.#x %= 1;
    if (this.#x < 0)
      this.#x = 1 - this.#x;

    this.#y %= 1;
    if (this.#y < 0)
      this.#y = 1 - this.#y;

    this.target ??= [ Math.floor(Math.random() * 1000) / 1000, Math.floor(Math.random() * 1000) / 1000 ];

    const targetX = Math.floor(this.#x * 1000) / 1000;
    const targetY = Math.floor(this.#y * 1000) / 1000

    if ((targetX === this.target[0] && targetY === this.target[1]) || this.#targetTimer > this.#targetThreshold || this.#sectionTimer > this.#sectionThreshold) {
      this.target = [ Math.floor(Math.random() * 1000) / 1000, Math.floor(Math.random() * 1000) / 1000 ];

      this.#targetTimer = 0;
      this.#targetThreshold = particleInfo.timer.target.threshold + Math.floor(Math.random() * particleInfo.timer.target.variance * 2 - particleInfo.timer.target.variance);

      this.#sectionTimer = 0;
      this.#sectionThreshold = particleInfo.timer.section.threshold + Math.floor(Math.random() * particleInfo.timer.section.variance * 2 - particleInfo.timer.section.variance);
    } else
      this.#targetTimer += time;

    const sectionX = Math.floor(this.#x % 1 * particleInfo.divisions);
    const sectionY = Math.floor(this.#y % 1 * particleInfo.divisions);

    const section = `${sectionX}:${sectionY}`;
    if (section === this.#lastSection)
      this.#sectionTimer += time;
    else
      this.#sectionTimer = 0;

    this.#lastSection = section;

    particleInfo.sections[sectionX][sectionY].push({ x: this.x, sx: this.sx, vx: this.vx, y: this.y, sy: this.sy, vy: this.vy });

    let newVelocities = [];

    let targetDistanceX = (0.1 - Math.abs((this.target[0] - this.x).clamp(-0.1, 0.1))) * Math.sign(this.target[0] - this.x) || this.vx;
    let targetDistanceY = (0.1 - Math.abs((this.target[1] - this.y).clamp(-0.1, 0.1))) * Math.sign(this.target[1] - this.y) || this.vy;
    if (Math.abs(targetDistanceX) + Math.abs(targetDistanceY) < Math.abs(this.vx) + Math.abs(this.vy)) {
      targetDistanceX = this.vx;
      targetDistanceY = this.vy;
    }

    let amountOfParticles = 0;
    for (let x = -1;x < 2;x++) {
      let newSectionX = (sectionX + x) % particleInfo.divisions;
      if (newSectionX < 0)
        newSectionX = particleInfo.divisions + newSectionX;

      for (let y = -1;y < 2;y++) {
        let newSectionY = (sectionY + y) % particleInfo.divisions;
        if (newSectionY < 0)
          newSectionY = particleInfo.divisions + newSectionY;

        amountOfParticles -= (Math.abs(targetDistanceX) + Math.abs(targetDistanceY)).clamp(0, 0.05);
        newVelocities.push(particleInfo.lastSections[newSectionX][newSectionY].reduce((avg, particle) => {
          const distance = ((particle.sx - this.sx) ** 2 + (particle.sy - this.sy) ** 2) ** 0.5;
          const modifier = (particleInfo.maxDistance - distance) / (particleInfo.maxDistance / 3);

          amountOfParticles += modifier;

          return [ avg[0] + particle.vx * modifier, avg[1] + particle.vy * modifier ];
        }, [ targetDistanceX, targetDistanceY ]));
      }
    }

    [ this.#vx, this.#vy ] = newVelocities.reduce(
      (sum, velocity) => [ sum[0] + velocity[0], sum[1] + velocity[1] ]
    ).map(
      velocity => (velocity / amountOfParticles || 1).clamp(-particleInfo.maxVelocity, particleInfo.maxVelocity)
    );

    this.#vx += this.#vxChange / 2000;
    this.#vy += this.#vyChange / 2000;

    if (this.#velocityTimer > this.#velocityThreshold) {
      this.#velocityTimer = 0;
      this.#velocityThreshold = particleInfo.timer.velocity.threshold + Math.floor(Math.random() * particleInfo.timer.velocity.variance * 2 - particleInfo.timer.velocity.variance);

      const angleChange = Math.atan2(Math.random(), Math.random());
      const quadrant = Math.floor(Math.random() * 4) + 1;

      const cos = Math.abs(Math.cos(angleChange ** 2 + 1));

      this.#vxChange = cos * ([ 1, 4 ].includes(quadrant) ? 1 : -1);
      this.#vyChange = (1 - cos) * ([ 1, 2 ].includes(quadrant) ? 1 : -1);

      /* this.#vx = (this.#vx + (Math.random() - 0.5) / 100).clamp(-particleInfo.maxVelocity, particleInfo.maxVelocity);
      this.#vy = (this.#vy + (Math.random() - 0.5) / 100).clamp(-particleInfo.maxVelocity, particleInfo.maxVelocity); */
    } else
      this.#velocityTimer += time;

    const scale = {
      x: DPI.x / 63.5 * this.#scale,
      y: DPI.y / 63.5 * this.#scale,
    };

    bgPen.fillStyle = this.#color;
    bgPen.fillRect(this.#x * innerWidth - scale.x / 2, this.#y * innerHeight - scale.y / 2, scale.x, scale.y);
  }
  get x() {
    return this.#x;
  }
  get sx() {
    return Math.abs(this.#x - 0.5) * 2;
  }
  get vx() {
    return this.#vx;
  }
  get y() {
    return this.#y;
  }
  get sy() {
    return Math.abs(this.#y - 0.5) * 2;
  }
  get vy() {
    return this.#vy;
  }
}

class Spark {
  #x;
  #y;
  #vx;
  #vy;
  #startTime;
  #time;
  #scale;
  #color;
  constructor(x, y, vx, vy, scale, time) {
    this.#x = x;
    this.#y = y;
    this.#vx = vx;
    this.#vy = vy;
    this.#scale = scale;
    this.#startTime = time;
    this.#time = time;
    this.#color = `#f${Math.floor(Math.random() * 6 + 6).toString(16)}0`;

    this.Update();

    particles.push(this);
  }
  Update(time = 1) {
    if (this.dead)
      return;

    this.#x += this.#vx * time * 10;
    this.#y += this.#vy * time * 10;

    this.#vx = Math.max(Math.min((this.#vx + (Math.random() - 0.5) / 5000), 0.001), -0.001);
    this.#vy = Math.max(Math.min((this.#vy + (Math.random() - 0.5) / 5000), 0.001), -0.001);

    const deltaTime = this.#time / this.#startTime;

    const scale = {
      x: DPI.x / 63.5 * this.#scale * deltaTime,
      y: DPI.y / 63.5 * this.#scale * deltaTime,
    };

    fgPen.fillStyle = `${this.#color}${Math.round(deltaTime * 15).toString(16)}`;
    fgPen.fillRect(this.#x * innerWidth - scale.x / 2, this.#y * innerHeight - scale.y / 2, scale.x, scale.y);

    if (this.#time-- <= 0)
      this.dead = true;
  }
}

class Tooltip {
  constructor(type = 'text', text = 'tooltip', x, y, xAnchor = 'left', yAnchor = 'top', delay = 0, destroyFunctions = { time: { max: 1000 } }, id, classes) {
    this._created = false;
    this._type = type;

    const tooltip = document.createElement('TOOLTIP');
    if (id)
      tooltip.id = id;

    if (typeof classes === 'string')
      classes = [classes];
    if (classes instanceof Array)
      classes.forEach(thisClass => tooltip.classList.add(thisClass));

    tooltip.classList.add('tooltip');
    tooltip.innerHTML = this._text = text;

    this._tooltip = tooltip;

    this._x = x;
    this._y = y;

    this._xAnchor = xAnchor;
    this._yAnchor = yAnchor;

    this._delay = delay;
    tooltip.style.animation = `fadeIn 250ms linear ${delay}ms 1 normal forwards`;

    this._destroyFunctions = destroyFunctions;
  }
  get tooltip() {
    return this._tooltip;
  }
  set text(text) {
    this._tooltip.innerHTML = this._text = text;
  }
  get text() {
    return this._text;
  }
  set x(x) {
    this._x = x;
  }
  get x() {
    return this._x;
  }
  set y(x) {
    this._y = y;
  }
  get y() {
    return this._y;
  }
  set xAnchor(x) {
    this._xAnchor = xAnchor;
  }
  get xAnchor() {
    return this._xAnchor;
  }
  set yAnchor(y) {
    this._yAnchor = yAnchor;
  }
  get yAnchor() {
    return this._yAnchor;
  }
  set delay(delay) {
    this._delay = delay;
    if (!this._created)
      this._tooltip.style.animation = `fadeIn 250ms linear ${delay}ms 1 normal forwards`;
  }
  get delay() {
    return this._delay;
  }
  set destroyFunctions(destroyFunctions) {
    this._destroyFunctions = destroyFunctions;
  }
  get destroyFunctions() {
    return this._destroyFunctions;
  }
  set id(id) {
    if (id && this._tooltip)
      this._tooltip.id = id;
    else if (this._tooltip)
      delete this._tooltip.id;
  }
  get id() {
    return this._tooltip?.id;
  }
  set classes(classes) {
    const tooltip = this._tooltip;
    if (!tooltip || !tooltip.classList)
      return;

    tooltip.classList.forEach(thisClass => tooltip.classList.remove(thisClass));

    if (typeof classes === 'string')
      classes = [classes];
    if (classes instanceof Array)
      classes.forEach(thisClass => tooltip.classList.add(thisClass));
  }
  get classes() {
    return this._tooltip?.classList.values;
  }
  create(parent) {
    const tooltip = this._tooltip;
    if (!tooltip || (this._type === 'tip' && !_settings.tipsEnabled)) {
      this.destroy();
      return;
    }

    if (this._created)
      return;

    this._created = true;

    if (!(this._destroyFunctions instanceof Object))
      this._destroyFunctions = {};

    this._destroyFunctions.time ??= { min: 0 };
    const { leave, click, time } = this._destroyFunctions;

    let minTime = +time.min;
    minTime = Number.isFinite(minTime) ? minTime : 0;

    const thisClass = this;
    const startTime = Date.now();

    const controller = this._eventsController = new AbortController();

    if (leave instanceof HTMLElement) {
      leave.addEventListener('mouseleave', () => setTimeout(thisClass.destroy, minTime - (Date.now() - startTime)), { signal: controller.signal });
      window.addEventListener('wheel', () => setTimeout(thisClass.destroy, minTime - (Date.now() - startTime)), { signal: controller.signal });
    }
    if (click instanceof HTMLElement)
      click.addEventListener('click', () => setTimeout(thisClass.destroy, minTime - (Date.now() - startTime)), { signal: controller.signal });
    if (time.max)
      setTimeout(() => this.destroy(), Math.max(Number.isFinite(+time.max) ? +time.max : 0, minTime));

    (parent instanceof HTMLElement ? parent : document.body).appendChild(tooltip);

    const mouseMoveEvent = new Event('mousemove', { bubbles: true });
    addEventListener('mousemove', this.update, { capture: true, signal: controller.signal });
    dispatchEvent(mouseMoveEvent);

    this.update({ clientX: Mouse.x, clientY: Mouse.y });

    return tooltip;
  }
  destroy = () => {
    const tooltip = this._tooltip;
    if (!tooltip) {
      this._eventsController?.abort();
      return;
    }

    const currentOpacity = getComputedStyle(tooltip).getPropertyValue('opacity');

    tooltip.style.opacity = currentOpacity;

    if (currentOpacity === 1)
      tooltip.remove();

    tooltip.style.animation = `fadeOut 250ms linear ${-250 * (1 - currentOpacity) << 0}ms 1 normal forwards`;
    tooltip.onanimationend = tooltip.remove;

    this._eventsController?.abort();
  }
  update = e => {
    const tooltip = this._tooltip;
    if (!tooltip || (this._type === 'tip' && !_settings.tipsEnabled)) {
      this.destroy();
      return;
    }

    const { width, height } = tooltip.getBoundingClientRect();
    let x = this._x ?? e.clientX;
    let y = this._y ?? e.clientY;

    const xAnchor = this._xAnchor;
    const yAnchor = this._yAnchor;

    switch(xAnchor) {
      default:
      case 'left':
        break;
      case 'center':
        x -= width / 2;
        break;
      case 'right':
        x -= width;
        break;
    }

    switch(yAnchor) {
      case 'top':
        break;
      case 'center':
        y -= height / 2;
        break;
      default:
      case 'bottom':
        y -= height;
        break;
    }

    x = Math.max(Math.min(x, innerWidth - width), 0);
    y = Math.max(Math.min(y, innerHeight - height), 0);

    tooltip.style.left = `${x}px`;
    tooltip.style.top = `${y}px`;
  }
}

/**
 * Web Scraper
 */

/*
const objectFinal = [];
for (let i = 1;i <= 118;i++) {
  await fetch(`https://periodictable.com/Elements/${Array.from({ length: 3 - i.toString().length }, () => '0').join('') + i}/data.html`).then(
    response => response.text()
  ).then(data => {
    const div = document.createElement('div');
    div.innerHTML = data;

    document.body.appendChild(div);
    const object = Object.fromEntries([ ...div.getElementsByTagName('a') ].filter(
      ({ parentElement }) => parentElement.tagName === 'FONT'
    ).map(element => {
      let key = element.innerHTML.trim();
      let value = element.parentElement.parentElement.nextElementSibling.innerText.trim();

      value = value.replace(/\[note\]/g, '');
      if (value === 'N/A' || value === 'None' || key.includes('Isotop'))
        return [ key, undefined ];

      // critical temp, critical pressure, curie point

      let unit = [];
      switch (key) {
        case 'Absolute Melting Point':
        case 'Absolute Boiling Point':
          key = key.replace('Absolute ', '');
        case 'Critical Pressure':
        case 'Critical Temperature':
        case 'Density':
        case 'Heat of Fusion':
        case 'Heat of Vaporization':
        case 'Specific Heat':
        case 'Neel Point':
        case 'Thermal Conductivity':
        case 'Thermal Expansion':
        case 'Density':
        case 'Density (Liquid)':
        case 'Brinell Hardness':
        case 'Vickers Hardness':
        case 'Bulk Modulus':
        case 'Shear Modulus':
        case 'Speed of Sound':
        case 'Thermal Conductivity':
        case 'Thermal Expansion':
        case 'ElectronAffinity':
        case 'Electrical Conductivity':
        case 'Resistivity':
        case 'Curie Point':
        case 'Mass Magnetic Susceptibility':
        case 'Molar Magnetic Susceptibility':
        case 'Volume Magnetic Susceptibility':
        case 'Atomic Radius':
        case 'Covalent Radius':
        case 'Van der Waals Radius':
        case 'Half-life':
        case 'Lifetime':
          [ value, ...unit] = value.split(/\s/);
          break;
        case 'Lattice Angles':
          value = value.replace(', ', '').split(', ');
          break;
        case 'Ionization Energies':
          [ value, unit ] = [ value.replace(' kJ/mol', '').split(', '), { unit: 'kJ/mol' } ];
          break;
        case 'Latice Constants':
          [ value, unit ] = [ value.replace(' pm', '').split(', '), { unit: 'pm' } ];
          break;
        case 'Discovery':
          value = value.split(' in ');
          break;
        case 'Melting Point':
        case 'Boiling Point':
          return undefined;
      }

      if (key.includes('%'))
        [ value, unit ] = [ value.replace('%', ''), { unit: '%' } ];

      if (value instanceof Array) {
        value = value.map(thisValue => {
          if (!Number.isNaN(+thisValue))
            thisValue = +thisValue;
          else if (thisValue.includes('×')) {
            let [ number, exponent ] = thisValue.split('×');
            exponent = exponent.replace('10', '');

            thisValue = `${number}e${(exponent > 0 ? '+' : '') + exponent}`
          }

          return thisValue;
        });
      } else if (!Number.isNaN(+value))
        value = +value;
      else if (value.includes('×')) {
        let [ number, exponent ] = value.split('×');
        exponent = exponent.replace('10', '');

        value = `${number}e${(exponent > 0 ? '+' : '') + exponent}`
      }

      return [ key.replace(/(\s|-)/g, '_'), value, { unit: unit ? [ unit ].flat(Infinity).join(' ') : undefined } ];
    }).filter(
      value => value !== undefined
    ));

    objectFinal.push(object);

    div.remove();
  });
}
*/