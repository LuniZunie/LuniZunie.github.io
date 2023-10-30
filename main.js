const colors = [
  '#4D8066','#FF4D4D','#999966','#B33300','#B3B31A','#809980','#4D80CC','#CCFF1A','#FF99E6','#80B300','#00B3E6','#1AFF33','#99E6E6','#CC9999','#33FFCC','#FFB399','#6666FF','#66991A','#00E680','#E6B333','#E666B3','#E6331A','#E64D66','#B366CC','#4D8000','#B34D4D','#E6B3B3','#999933','#4DB380','#33991A','#809900','#66664D','#FF33FF','#4DB3FF','#E666FF','#66E64D','#6680B3','#CCCC00','#FF3380','#CC80CC','#FFFF99','#991AFF','#FF6633','#66994D','#E6FF80','#FF1A66','#3366E6','#1AB399','#99FF99','#9900B3'
];

const colorizeColors = {
  Normal_Series: {
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
  },
  Simple_Series: {
    'nonmetal': [ 128, 0, 0 ],
    'gas': [ 128, 128, 0 ],
    'metal': [ 0, 128, 0 ],
    'earth metal': [ 0, 128, 128 ],
    'metalloid': [ 0, 0, 128 ],
    'lanthanide': [ 64, 0, 128 ],
    'actinide': [ 128, 0, 64 ],
  },
  Advanced_Series: {
    'nonmetal': [ 128, 0, 0 ],
    'noble gas': [ 128, 128, 0 ],
    'alkali metal': [ 0, 128, 0 ],
    'alkaline earth metal': [ 0, 128, 128 ],
    'metalloid': [ 0, 0, 128 ],
    'poor metal': [ 128, 64, 0 ],
    'transition metal': [ 0, 128, 64 ],
    'lanthanide': [ 64, 0, 128 ],
    'actinide': [ 128, 0, 64 ],
    'chalcogen': [ 128, 0, 128 ],
    'halogen': [ 0, 64, 128 ],
  },
  Electron_Block: {
    's': [ 128, 0, 0 ],
    'p': [ 0, 128, 0 ],
    'd': [ 0, 0, 128 ],
    'f': [ 128, 128, 0 ],
  },
  Hide_Inter: {
    'nonmetal': [ null, null, null, null ],
    'noble gas': [ null, null, null, null ],
    'alkali metal': [ null, null, null, null ],
    'alkaline earth metal': [ null, null, null, null ],
    'metalloid': [ null, null, null, null ],
    'poor metal': [ null, null, null, null ],
    'transition metal': [ -1, -1, -1, -1 ],
    'lanthanide': [ -1, -1, -1, -1 ],
    'actinide': [ -1, -1, -1, -1 ],
    'chalcogen': [ null, null, null, null ],
    'halogen': [ null, null, null, null ],
  },
  Phase: {
    'solid': [ 128, 0, 0 ],
    'liquid': [ 0, 0, 128 ],
    'gas': [ 0, 128, 0 ],
  },
  Advanced_Phase: {
    'solid': [ 128, 0, 0 ],
    'liquid': [ 0, 0, 128 ],
    'gas monoatomic': [ 0, 128, 128 ],
    'gas diatomic': [ 128, 128, 0 ],
    '': [ null, null, null, null ],
  },
  Electrical_Type: {
    'conductor': [ 128, 0, 0 ],
    'semiconductor': [ 128, 64, 0 ],
    'insulator': [ 0, 0, 128 ],
  },
  Magnetic_Type: {
    'diamagnetic': [ 128, 128, 0 ],
    'paramagnetic': [ 128, 0, 0 ],
    'antiferromagnetic': [ 0, 128, 0 ],
    'ferromagnetic': [ 0, 0, 128 ],
  },
  Decay_Mode: {
    'beta decay': [ 128, 0, 0 ],
    'beta plus decay': [ 128, 128, 0 ],
    'electron capture': [ 0, 128, 0 ],
    'alpha emission': [ 0, 0, 128 ],
  },
  Physical_Color: {
    'colorless': [ null, null, null, 0.3 ],
    'silver': [ 192, 192, 192 ],
    'slategray': [ 44, 50, 56 ],
    'black': [ 0, 0, 0 ],
    'gray': [ 128, 128, 128 ],
    'yellow': [ 240, 230, 120 ],
    'copper': [ 72, 45, 20 ],
    'red': [ 128, 0, 0 ],
    'gold': [ 218, 165, 32 ],
  },
  Mohs_Hardness: {
    "2": [
      205,
      0,
      50
    ],
    "3": [
      177,
      0,
      78
    ],
    "4": [
      149,
      0,
      106
    ],
    "5": [
      120,
      0,
      135
    ],
    "6": [
      92,
      0,
      163
    ],
    "7": [
      64,
      0,
      191
    ],
    "0.2": [
      255,
      0,
      0
    ],
    "0.3": [
      252,
      0,
      3
    ],
    "0.4": [
      249,
      0,
      6
    ],
    "0.5": [
      247,
      0,
      8
    ],
    "0.6": [
      244,
      0,
      11
    ],
    "1.2": [
      227,
      0,
      28
    ],
    "1.23": [
      226,
      0,
      29
    ],
    "1.25": [
      226,
      0,
      29
    ],
    "1.41": [
      221,
      0,
      34
    ],
    "1.44": [
      220,
      0,
      35
    ],
    "1.5": [
      219,
      0,
      36
    ],
    "1.65": [
      214,
      0,
      41
    ],
    "1.75": [
      212,
      0,
      43
    ],
    "1.77": [
      211,
      0,
      44
    ],
    "1.8": [
      210,
      0,
      45
    ],
    "1.97": [
      205,
      0,
      50
    ],
    "2.25": [
      198,
      0,
      57
    ],
    "2.33": [
      195,
      0,
      60
    ],
    "2.5": [
      191,
      0,
      64
    ],
    "2.6": [
      188,
      0,
      67
    ],
    "2.75": [
      184,
      0,
      71
    ],
    "3.07": [
      175,
      0,
      80
    ],
    "3.5": [
      163,
      0,
      92
    ],
    "4.75": [
      128,
      0,
      127
    ],
    "5.13": [
      117,
      0,
      138
    ],
    "5.5": [
      106,
      0,
      149
    ],
    "6.5": [
      78,
      0,
      177
    ],
    "7.5": [
      50,
      0,
      205
    ],
    "8.5": [
      22,
      0,
      233
    ],
    "9.3": [
      0,
      0,
      255
    ]
  },
  Refractive_Index: {
    "1.000035": [
      255,
      0,
      0
    ],
    "1.000067": [
      242,
      0,
      13
    ],
    "1.000132": [
      228,
      0,
      27
    ],
    "1.000195": [
      215,
      0,
      40
    ],
    "1.000271": [
      201,
      0,
      54
    ],
    "1.000281": [
      188,
      0,
      67
    ],
    "1.000298": [
      174,
      0,
      81
    ],
    "1.000427": [
      161,
      0,
      94
    ],
    "1.000702": [
      148,
      0,
      107
    ],
    "1.000773": [
      134,
      0,
      121
    ],
    "1.000895": [
      121,
      0,
      134
    ],
    "1.000933": [
      107,
      0,
      148
    ],
    "1.000991": [
      94,
      0,
      161
    ],
    "1.001111": [
      81,
      0,
      174
    ],
    "1.001132": [
      67,
      0,
      188
    ],
    "1.001212": [
      54,
      0,
      201
    ],
    "1.001552": [
      40,
      0,
      215
    ],
    "1.00205": [
      27,
      0,
      228
    ],
    "2.417": [
      13,
      0,
      242
    ]
  },
  Poisson_Ratio: {
    "0.032": [
      255,
      0,
      0
    ],
    "0.15": [
      183,
      72,
      0
    ],
    "0.21": [
      146,
      109,
      0
    ],
    "0.23": [
      134,
      121,
      0
    ],
    "0.24": [
      128,
      127,
      0
    ],
    "0.25": [
      122,
      133,
      0
    ],
    "0.26": [
      116,
      139,
      0
    ],
    "0.27": [
      110,
      145,
      0
    ],
    "0.28": [
      104,
      151,
      0
    ],
    "0.29": [
      98,
      157,
      0
    ],
    "0.3": [
      92,
      163,
      0
    ],
    "0.31": [
      85,
      170,
      0
    ],
    "0.32": [
      79,
      176,
      0
    ],
    "0.33": [
      73,
      182,
      0
    ],
    "0.34": [
      67,
      188,
      0
    ],
    "0.35": [
      61,
      194,
      0
    ],
    "0.36": [
      55,
      200,
      0
    ],
    "0.37": [
      49,
      206,
      0
    ],
    "0.38": [
      43,
      212,
      0
    ],
    "0.39": [
      37,
      218,
      0
    ],
    "0.4": [
      31,
      224,
      0
    ],
    "0.44": [
      6,
      249,
      0
    ],
    "0.45": [
      0,
      255,
      0
    ]
  },
  Space_Group: {
    "2": [
      0,
      134,
      121
    ],
    "11": [
      0,
      255,
      0
    ],
    "12": [
      0,
      242,
      13
    ],
    "14": [
      0,
      215,
      40
    ],
    "15": [
      0,
      188,
      67
    ],
    "62": [
      0,
      54,
      201
    ],
    "63": [
      0,
      40,
      215
    ],
    "64": [
      0,
      27,
      228
    ],
    "70": [
      0,
      13,
      242
    ],
    "139": [
      0,
      228,
      27
    ],
    "141": [
      0,
      201,
      54
    ],
    "152": [
      0,
      174,
      81
    ],
    "166": [
      0,
      161,
      94
    ],
    "194": [
      0,
      148,
      107
    ],
    "217": [
      0,
      121,
      134
    ],
    "221": [
      0,
      107,
      148
    ],
    "225": [
      0,
      94,
      161
    ],
    "227": [
      0,
      81,
      174
    ],
    "229": [
      0,
      67,
      188
    ]
  },
  Adiabatic_Index: {
    '7/5': [ 128, 0, 0 ],
    '5/3': [ 0, 128, 0 ],
  },
  DOT_Hazard_Class: {
    '2.1': [ 128, 0, 0 ],
    '2.2': [ 0, 128, 0 ],
    '2.3': [ 0, 0, 128 ],
    '4.1': [ 128, 128, 0 ],
    '4.2': [ 0, 128, 128 ],
    '4.3': [ 128, 128, 0 ],
    '6.1': [ 128, 64, 0 ],
    '7': [ 0, 128, 64 ],
    '8': [ 64, 0, 128 ],
  },
  /* Simple_Series: {
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
  } */
};

/*
Object.fromEntries([].sort().map((value, index, array) => [ value, [ 255-255 * ((index) / (array.length)), 0, 255 * ((index) / (array.length)) ].map(value => Math.round(value)) ]))

Object.fromEntries([].sort().map((value, index, array) => [ value, [ 255-255 * ((value - Math.min(...array)) / (Math.max(...array) - Math.min(...array))), 0, 255 * ((value - Math.min(...array)) / (Math.max(...array) - Math.min(...array))) ].map(value => Math.round(value)) ]))
*/

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
    ([ _, value ]) => !(logarithmic && values === 0)
  ).map(
    ([ key, value ]) => [ key, Number.isFinite(value) ? (((logarithmic ? Math.log10(value - trueMin) : value) - min) / (max - min)) * 0.9 + 0.1 : value ]
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
Element.prototype.vChild = function(className) {
  let child = this.getElementsByClassName(className)[0];
  if (child)
    child = child.getElementsByClassName('value')[0] ?? child;

  return child;
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
    DrawAbundanceChart(Wolfram.elements[loadedElement]);
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

window.onclick = function(e) {
  if (nSidebar.dataset.hidden === 'true') {
    let element = e.target;
    let result = element.classList.contains('trends_menu') || element.id === 'top_nav' || element.classList.contains('isotope') || element.classList.contains('no_close') || (element.classList.contains('searchable') && element.dataset.search == 'true') || element === credits || element === decayChainElement || element === nSidebar ? -1 : (element === document.body ? 1 : 0);
    while (element.parentElement && !result) {
      element = element.parentElement;
      result = element.classList.contains('trends_menu') || element.id === 'top_nav' || element.classList.contains('isotope') || element.classList.contains('no_close') || (element.classList.contains('searchable') && element.dataset.search == 'true') || element === credits || element === decayChainElement || element === nSidebar || element === sidebar || element.classList.contains('element') || element.id === 'top_buttons' ? -1 : (element === document.body ? 1 : 0);
    }

    if (result !== 1)
      return;

    sidebar.dataset.hidden = true;
  } else {
    let element = e.target;
    let result = element.classList.contains('trends_menu') || element.id === 'top_nav' || element.classList.contains('isotope') || element.classList.contains('no_close') || (element.classList.contains('searchable') && element.dataset.search == 'true') || element === credits || element === decayChainElement || element === nSidebar ? -1 : (element === document.body ? 1 : 0);
    while (element.parentElement && !result) {
      element = element.parentElement;
      result = element.classList.contains('trends_menu') || element.id === 'top_nav' || element.classList.contains('isotope') || element.classList.contains('no_close') || (element.classList.contains('searchable') && element.dataset.search == 'true') || element === credits || element === decayChainElement || element === nSidebar || element.id === 'top_buttons' ? -1 : (element === document.body ? 1 : 0);
    }

    if (result !== 1)
      return;

    nSidebar.dataset.stuckOpen = null;
    [...sidebar.child('content').child('isotopes').getElementsByClassName('isotope')].forEach(
      element => element.classList.remove('selected')
    );

    nSidebar.dataset.hidden = true;
  }
};

const creditsButton = document.getElementById('credits_button');
creditsButton.onmouseup = function(e) {
  credits.dataset.hidden = false;
};

const loadedElementTrends = {};
const loadedElementColors = {};
const loadedElementExtras = {};

const evalMathEquation = angle => {
  return Function(`'use strict'; return (${angle.toString().replace(/(?<=\d)\s/g, '*').replace(/&pi;/g, Math.PI)})`)();
};

const elementalTrends = {
  'group:divider:Pinned': 4,
  'pin:Covalent:radius': 'Atomic_Radius',
  'pin:Electronegativity:reactivity:electrons': 'Electronnegativity',
  'pin:Electron_Affinity:reactivity:electrons': 'Electron_Affinity',
  'pin:Average:ionization_energies': 'Ionization_Energies',
  'group:side:More': 82,
  'group:divider::1': 40,
  'group:side:Identifiers': 7,
  'group:divider::identifiers:1': 2,
  'Group:identifiers': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.identifiers.group.value ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'Period:identifiers': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.identifiers.period.value ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'group:divider::identifiers:2': 1,
  'Name_Length:identifiers': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.identifiers.name.value?.length ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'group:divider::identifiers:3': 4,
  'group:side:Alternate_Names': 2,
  '#_Alternate_Names:identifiers': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.identifiers.alternate_names.value?.length ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'Combined_Alternate_Name_Lengths:identifiers': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.identifiers.alternate_names.value && element.identifiers.alternate_names.value.reduce(
        (sum, name) => sum + name?.length, 0
      ) ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'group:side:Allotropes': 2,
  '#_Allotropes:allotropes': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.allotropes.value?.length ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'Combined_Allotrope_Name_Lengths:electrons': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.allotropes.value && element.allotropes.value.reduce(
        (sum, name) => sum + name?.length, 0
      ) ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'group:side:Atomic_Structure': 15,
  'group:divider::atomic_structure:1': 4,
  'Atomic_Mass:atomic_structure': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.atomic_structure.atomic_mass.value ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'group:side:Protons_&_Neutrons': 3,
  '#_Protons:atomic_structure': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.identifiers.atomic_number.value ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  '#_Neutrons:atomic_structure': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.atomic_structure.neutrons.value ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'Neutrons_per_Proton:atomic_structure': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, (element.atomic_structure.neutrons.value ?? element.identifiers.atomic_number.value) === undefined ? undefined : element.atomic_structure.neutrons.value / element.identifiers.atomic_number.value ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'group:divider::atomic_structure:2': 3,
  'group:side:Radius': 3,
  'Calculated:radius': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.atomic_structure.radius.atomic.value ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'Covalent:radius': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.atomic_structure.radius.covalent.value ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'van_der_Waals:radius': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.atomic_structure.radius.van_der_waals.value ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'group:divider::atomic_structure:3': 8,
  'group:side:Lattice_Angles:lattice': 4,
  'group:divider::atomic_structure:lattice:angles:1': 1,
  '#_Lattice_Angles:lattice:angles': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.atomic_structure.lattice.angles.value?.length ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'group:divider::atomic_structure:lattice:angles:2': 3,
  'Minimum:lattice:angles': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.atomic_structure.lattice.angles.value && Math.min(...element.atomic_structure.lattice.angles.value.map(
        value => evalMathEquation(value)
      )) ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'Average:lattice:angles': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.atomic_structure.lattice.angles.value && element.atomic_structure.lattice.angles.value.map(
        value => evalMathEquation(value)
      ).avg() ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'Maximum:lattice:angles': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.atomic_structure.lattice.angles.value && Math.max(...element.atomic_structure.lattice.angles.value.map(
        value => evalMathEquation(value)
      )) ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'group:side:Lattice_Constants:lattice': 4,
  'group:divider::atomic_structure:lattice:constants:1': 1,
  '#_Lattice_Constants:lattice:constants': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.atomic_structure.lattice.constants.value?.length ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'group:divider::atomic_structure:lattice:constants:2': 3,
  'Minimum:lattice:constants': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.atomic_structure.lattice.constants.value && Math.min(...element.atomic_structure.lattice.constants.value) ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'Average:lattice:constants': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.atomic_structure.lattice.constants.value && element.atomic_structure.lattice.constants.value.avg() ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'Maximum:lattice:constants': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.atomic_structure.lattice.constants.value && Math.max(...element.atomic_structure.lattice.constants.value) ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'group:side:Electron': 12,
  'group:side:Amounts': 3,
  'group:divider::electron:number:1': 2,
  '#_Electrons:electrons': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.electron.shells.value && element.electron.shells.value.sum() ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  '#_Valence:electrons': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.electron.valence.value ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'group:divider::electron:number:2': 1,
  '#_Electron_Shells:electrons': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.electron.shells.value?.length ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'group:divider::electron:1': 6,
  'Electronegativity:reactivity:electrons': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.electron.reactivity.electronegativity.value ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'Electron_Affinity:reactivity:electrons': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.electron.reactivity.electron_affinity.value ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'group:side:Ionization_Energies': 4,
  'group:divider::electron:ionization_energies:1': 1,
  '#_Ionization_Energies:ionization_energies': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.electron.reactivity.ionization_energies.value?.length ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'group:divider::electron:ionization_energies:2': 3,
  'Minimum:ionization_energies': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.electron.reactivity.ionization_energies.value && Math.min(...element.electron.reactivity.ionization_energies.value) ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'Average:ionization_energies': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.electron.reactivity.ionization_energies.value && element.electron.reactivity.ionization_energies.value.avg() ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'Maximum:ionization_energies': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.electron.reactivity.ionization_energies.value && Math.max(...element.electron.reactivity.ionization_energies.value) ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'group:divider::electron:2': 3,
  'group:side:Length_of_Configuration': 2,
  'Standard:length_of_configuration': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.electron.configuration.value?.length ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'Semantic:length_of_configuration': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.electron.semantic_configuration.value?.length ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  '#_Oxidation_States': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.electron.oxidation_states.value?.length ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'group:side:Abundance': 6,
  'The_Universe:abundance': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.abundance.universe.value ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'Meteorites:abundance': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.abundance.meteorites.value ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'The_Sun:abundance': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.abundance.sun.value ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  "Earth's_crust:abundance": function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.abundance.earth_crust.value ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'Oceans:abundance': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.abundance.oceans.value ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'Humans:abundance': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.abundance.humans.value ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'group:divider:Properties': 42,
  'group:side:Nuclear': 12,
  'group:divider::nuclear:1': 4,
  'group:side:Half_Life:decay:nuclear': 2,
  'Exclude_Stable:half_life:decay:nuclear': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, [ undefined, 'Stable' ].includes(element.properties.nuclear.half_life.value) ? undefined : TimeToSeconds(element.properties.nuclear.half_life.value, element.properties.nuclear.half_life.tags?.unit) ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'Include_Stable:half_life:decay:nuclear': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.properties.nuclear.half_life.value === undefined ? undefined : (element.properties.nuclear.half_life.value === 'Stable' ? Infinity : TimeToSeconds(element.properties.nuclear.half_life.value, element.properties.nuclear.half_life.tags?.unit)) ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'group:side:Lifetime:decay:nuclear': 2,
  'Exclude_Stable:lifetime:nuclear:decay': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, [ undefined, 'Stable' ].includes(element.properties.nuclear.lifetime.value) ? undefined : TimeToSeconds(element.properties.nuclear.lifetime.value, element.properties.nuclear.lifetime.tags?.unit) ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'Include_Stable:lifetime:decay:nuclear': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.properties.nuclear.lifetime.value === undefined ? undefined : (element.properties.nuclear.lifetime.value === 'Stable' ? Infinity : TimeToSeconds(element.properties.nuclear.lifetime.value, element.properties.nuclear.lifetime.tags?.unit)) ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'group:divider::nuclear:2': 2,
  'Neutron_Cross_Section:neutron:nuclear:decay': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.properties.nuclear.neutron.cross_section.value ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'Neutron_Mass_Absorption:neutron:decay:nuclear': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.properties.nuclear.neutron.mass_absorption.value ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'group:side:Isotopes_&_Isomers:nuclear': 6,
  'group:side:#_Known:isotopes_&_isomers:nuclear': 2,
  'Isotopes:#_known:isotopes_&_isomers:nuclear': function(log) {
    const elements = Object.fromEntries(Object.keys(Wolfram.elements).map(
      symbol => [ symbol, Object.values(Nubase2020.nuclides[symbol])?.length ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'Isomers:#_known:isotopes_&_isomers:nuclear': function(log) {
    const elements = Object.fromEntries(Object.keys(Wolfram.elements).map(
      symbol => [ symbol, (Object.values(Nubase2020.nuclides[symbol]) ?? []).map(
        isotope => isotope.isomers
      ).flat(Infinity).filter(
        value => value !== undefined
      )?.length ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'group:side:#_Natural:isotopes_&_isomers:nuclear': 2,
  'Isotopes:#_natural:isotopes_&_isomers:nuclear': function(log) {
    const elements = Object.fromEntries(Object.keys(Wolfram.elements).map(
      symbol => [ symbol, (Object.values(Nubase2020.nuclides[symbol]) ?? []).filter(
        isotope => isotope.abundance !== undefined
      )?.length ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'Isomers:#_natural:isotopes_&_isomers:nuclear': function(log) {
    const elements = Object.fromEntries(Object.keys(Wolfram.elements).map(
      symbol => [ symbol, (Object.values(Nubase2020.nuclides[symbol]) ?? []).map(
        isotope => isotope.isomers && isotope.isomers.map(
          isomer => isomer.abundance
        )
      ).flat(Infinity).filter(
        abundance => abundance !== undefined
      )?.length ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'group:side:#_Stable:isotopes_&_isomers:nuclear': 2,
  'Isotopes:#_stable:isotopes_&_isomers:nuclear': function(log) {
    const elements = Object.fromEntries(Object.keys(Wolfram.elements).map(
      symbol => [ symbol, (Object.values(Nubase2020.nuclides[symbol]) ?? []).filter(
        isotope => isotope.half_life?.value?.value === 'Stable'
      )?.length ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'Isomers:#_stable:isotopes_&_isomers:nuclear': function(log) {
    const elements = Object.fromEntries(Object.keys(Wolfram.elements).map(
      symbol => [ symbol, (Object.values(Nubase2020.nuclides[symbol]) ?? []).map(
        isotope => isotope.isomers && isotope.isomers.map(
          isomer => isomer.half_life
        )
      ).flat(Infinity).filter(
        half_life => half_life?.value?.value === 'Stable'
      )?.length ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'group:side:Physical': 12,
  'group:divider::physical:1': 3,
  'group:side:Density:density:physical:1': 2,
  'Standard:density:density:physical': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.properties.physical.density.standard.value ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'Liquid:density:density:physical': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.properties.physical.density.liquid.value ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'Molar_Volume:density:physical': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.properties.physical.molar_volume.value ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'group:divider::physical:2': 7,
  'group:side:Hardness:strength:physical:1': 3,
  'Brinell:hardness:strength:physical': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.properties.physical.hardness.brinell.value ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'Mohs:hardness:strength:physical': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.properties.physical.hardness.mohs.value ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'Vickers:hardness:strength:physical': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.properties.physical.hardness.vickers.value ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'group:side:Modulus:strength:physical:1': 3,
  'Bulk:modulus:strength:physical': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.properties.physical.modulus.bulk.value ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'Shear:modulus:strength:physical': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.properties.physical.modulus.shear.value ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'Young:modulus:strength:physical': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.properties.physical.modulus.young.value ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'Poisson_Ratio:strength:physical': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.properties.physical.poisson_ratio.value ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'group:divider::physical:3': 2,
  'Speed_of_Sound:misc:physical': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.properties.physical.speed_of_sound.value ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'Refractive_Index:density:misc:physical': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.properties.physical.refractive_index.value ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'group:side:Thermal': 11,
  'group:divider::thermal:1': 2,
  'Conductivity:expansion:thermal': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.properties.thermal.conductivity.value ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'Expansion:expansion:thermal': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.properties.thermal.expansion.value ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'group:divider::thermal:2': 5,
  'group:side:Temperature_Points:temperatures:thermal:1': 3,
  'Melting_point:temperature_points:temperatures:thermal': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.properties.thermal.melting_point.value ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'Boiling_point:temperature_points:temperatures:thermal': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.properties.thermal.boiling_point.value ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'Neel_point:temperature_points:temperatures:thermal': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.properties.thermal.neel_point.value ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'group:side:Critical_Points:thermal:1': 2,
  'Pressure:critical_points:thermal': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.properties.thermal.critical.pressure.value ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'Temperature:critical_points:thermal': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.properties.thermal.critical.temperature.value ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'group:divider::thermal:3': 4,
  'group:side:Heat:heat:thermal:1': 3,
  'Specific_Heat:heat:heat:thermal': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.properties.thermal.heat.specific.value ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'Heat_of_Fusion:heat:heat:thermal': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.properties.thermal.heat.fusion.value ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'Heat_of_Vaporization:heat:heat:thermal': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.properties.thermal.heat.vaporization.value ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'Adiabatic_Index:heat:thermal': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.properties.thermal.adiabatic_index.value && evalMathEquation(element.properties.thermal.adiabatic_index.value) ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'group:side:Electrical': 3,
  'group:divider::electrical:1': 2,
  'Conductivity:conduction:electrical': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.properties.electrical.conductivity.value ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'Resistivity:conduction:electrical': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.properties.electrical.resistivity.value ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'group:divider::electrical:2': 1,
  'Superconducting_Point:superconducting:electrical': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.properties.electrical.superconducting_point.value ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'group:side:Magnetic': 4,
  'group:side:Magnetic_Susceptibility:magnetic:1': 3,
  'Mass:susceptibility:magnetic': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.properties.magnetic.susceptibility.mass.value ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'Molar:susceptibility:magnetic': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.properties.magnetic.susceptibility.molar.value ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'Volume:susceptibility:magnetic': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.properties.magnetic.susceptibility.volume.value ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
  'Curie_Point:magnetic': function(log) {
    const elements = Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.properties.magnetic.curie_point.value ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));

    return Object.range(elements, log);
  },
};

const isotopicTrends = {
  'group:divider::1': 4,
  'group:side:Isotopes_&_Isomers': 4,
  'group:side:#_Isotopes': 2,
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
  'group:side:#_Isomers': 2,
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
  'group:side:Standard:mass_excess': 3,
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
  'group:side:Base:mass_excess': 3,
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
  'group:side:Standard:half_life': 3,
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
  'group:side:Base:half_life': 3,
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
  'group:side:Standard:excitation_energy': 3,
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
  'group:side:Base:excitation_energy': 3,
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

const colorizeFunctions = {
  'group:divider::1': 3,
  'group:side:Series:1': 3,
  'Normal:series': [ 'Normal_Series', function() {
    return Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.classifications.traditional_series.value ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));
  } ],
  'Simple:series': [ 'Simple_Series', function() {
    return Object.fromEntries(Object.entries(Wolfram.elements).map(([ symbol, element ]) => {
      const series = element.classifications.traditional_series.value;
      if (!series)
        return [ symbol, series ];

      return [ symbol, series.includes(' ') ? element.classifications.traditional_series.value.split(' ').slice(1).join(' ') : element.classifications.traditional_series.value ]
    }).filter(
      ([ _, value ]) => value !== undefined
    ));
  } ],
  'Advanced:series': [ 'Advanced_Series', function() {
    return Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.classifications.series.value ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));
  } ],
  'group:divider::2': 2,
  'Phase:phase': [ 'Phase', function() {
    return Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.classifications.phase.value ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));
  } ],
  'Advanced_Phase:phase': [ 'Advanced_Phase', function() {
    return Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, `${element.classifications.phase.value} ${element.classifications.gas_phase.value}`.replace(/\s?undefined/g, '') ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));
  } ],
  'group:divider::3': 1,
  'Electron_Block:other': [ 'Electron_Block', function() {
    return Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.electron.block.value ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));
  } ],
  'group:divider::4': 2,
  'Physical_Color:other': [ 'Physical_Color', function() {
    return Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.properties.physical.color.value ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));
  } ],
  'Mohs_Hardness:other': [ 'Mohs_Hardness', function() {
    return Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.properties.physical.hardness.mohs.value ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));
  } ],
  'group:divider::5': 2,
  'Electrical_Type:other': [ 'Electrical_Type', function() {
    return Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.properties.electrical.type.value ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));
  } ],
  'Magnetic_Type:other': [ 'Magnetic_Type', function() {
    return Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.properties.magnetic.type.value ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));
  } ],
  'group:divider::6': 1,
  'Decay_Mode:other': [ 'Decay_Mode', function() {
    return Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.properties.nuclear.decay_mode.name.value ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));
  } ],
  'group:divider::7': 3,
  'Refractive_Index:other': [ 'Refractive_Index', function() {
    return Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.properties.physical.refractive_index.value ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));
  } ],
  'Adiabatic_Index:other': [ 'Adiabatic_Index', function() {
    return Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.properties.thermal.adiabatic_index.value ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));
  } ],
  'Poisson_Ratio:other': [ 'Poisson_Ratio', function() {
    return Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.properties.physical.poisson_ratio.value ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));
  } ],
  'group:divider::8': 3,
  'Space_Group:other': [ 'Space_Group', function() {
    return Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.atomic_structure.space_group.number.value ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));
  } ],
  'DOT_Hazard_Class:other': [ 'DOT_Hazard_Class', function() {
    return Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.classifications.DOT_hazard_class.value ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));
  } ],
  'CPK_Hex:other': [ 'CPK_Hex', function() {
    return Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.cpk_hex.value.match(/.{1,2}/g).map(
        value => parseInt(value, 16)
      ) ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));
  } ],
  'group:divider::9': 3,
  'Hide_Inter': [ 'Hide_Inter', function() {
    return Object.fromEntries(Object.entries(Wolfram.elements).map(
      ([ symbol, element ]) => [ symbol, element.classifications.series.value ]
    ).filter(
      ([ _, value ]) => value !== undefined
    ));
  } ],
  'Colored_Gradient': [ 'Colored_Gradient', true ],
  'Colored_&_Brightness_Gradient': [ 'Colored_&_Brightness_Gradient', true ],
};

const computeTrends = function([ trend, thisFunction ], _, array) {
  const index = groupSize.reduce(
    (currentIndex, size, index) => !size ? index : currentIndex,
  undefined);

  if (index !== undefined) {
    for (let a = 0;a <= index;a++) {
      if (groupSize[0])
        console.error('ended early!', groupSize);

      groupSize.shift();
      groupElement.shift();
    }
  }

  groupSize = groupSize.map(
    size => --size
  );

  let [ command, commandDat, key, ...extra ] = trend.split(':');
  if (command === 'pin') {
    command = thisFunction;
    thisFunction = Object.fromEntries(array)[[ commandDat, key, ...extra ].filter(
      value => value !== undefined
    ).join(':')];
  }

  if (command === 'group') {
    const group = currentMenu.child('group template').cloneNode(true);
    group.classList.remove('template');
    group.classList.add(commandDat);

    if (key?.length) {
      group.classList.add(key);
      group.child('title').innerHTML = '<sup></sup>' + key.replace(/_/g, ' ').trim();
      group.child('title').style.minWidth = `${key.replace(/_/g, ' ').trim().length + 7}ch`;
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
  trendElement.innerHTML = '<sup></sup>' + command.replace(/_/g, ' ').trim() + (thisFunction instanceof Array ? '' : '<span class="log" data-selected=false>log</span>');
  trendElement.onclick = function(event) {
    if (event.target.classList.contains('log'))
      return;

    if (this.dataset.selected === 'true') {
      this.dataset.selected = false;

      if (typeof thisFunction[1] === 'boolean')
        delete loadedElementExtras[trend];
      else if (thisFunction instanceof Array)
        delete loadedElementColors[trend];
      else
        delete loadedElementTrends[trend];
    } else {
      this.dataset.selected = true;

      if (thisFunction instanceof Array) {
        if (typeof thisFunction[1] === 'boolean')
          loadedElementExtras[trend] = thisFunction[1];
        else {
          const colors = Object.fromEntries(Object.entries(thisFunction[1]()).map(
            ([ key, value ]) => [ key, value instanceof Array ? value : colorizeColors[thisFunction[0]][value.toString().toLowerCase()] ]
          ));

          let badValue = [];
          let badIndex = [];
          Object.entries(colors).forEach(([ key, value ]) => {
            if (!value) {
              const realValue = thisFunction[1]()[key];
              if (!badValue.includes(realValue))
                badValue.push(realValue);

              badIndex .push({
                element: key,
                value: realValue,
                color: value
              });
            }
          });

          if (badValue.length || badIndex.length)
            console.error( { object_name: thisFunction[0], object: colorizeColors[thisFunction[0]] }, badValue, badIndex);

          loadedElementColors[trend] = colors;
        }
      } else
        loadedElementTrends[trend] = thisFunction(this.child('log').dataset.selected === 'true');
    }
  };

  groupElement[0].dataset.width ??= 0;
  const width = command.trim().length;
  if (+groupElement[0].dataset.width < width) {
    groupElement[0].dataset.width = width;
    groupElement[0].style.minWidth = `${width + 2}ch`;
  }

  groupElement[0].appendChild(trendElement);
  if (trendElement.child('log'))
    trendElement.child('log').onclick = function(event) {
      this.dataset.selected = this.dataset.selected === 'true' ? false : true;

      if (this.parentElement.dataset.selected === 'true')
        loadedElementTrends[trend] = thisFunction(this.dataset.selected === 'true');
    };
};

const isotopicTrendsMenu = document.getElementById('isotopic_trends_menu');
const elementalTrendsMenu = document.getElementById('elemental_trends_menu');
const colorizeMenu = document.getElementById('colorize_menu');

let currentMenu, groupSize, groupElement;
[ [ isotopicTrendsMenu, isotopicTrends ], [ elementalTrendsMenu, elementalTrends ], [ colorizeMenu, colorizeFunctions ] ].forEach(([ menu, trends ]) => {
  currentMenu = menu;
  groupSize = [ Infinity ];
  groupElement = [ currentMenu ];

  Object.entries(trends).forEach(computeTrends);

  if (groupSize.filter(
    value => value !== 0
  )[0] !== Infinity)
    console.error('ended late!', groupSize);
});

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
const toPerFahrenheit = kelvin => {
  let roundFactor = kelvin.toString().split('.');
  roundFactor = 10 ** Math.max((roundFactor[1] ?? '').length + 1, 1);

  return Math.round(kelvin * 1.8 * roundFactor) / roundFactor;
};

[ ...sidebar.getElementsByClassName('temperature') ].forEach(element => {
  if (element.child('kelvin'))
    element.child('kelvin').onclick = function() {
      element.dataset.selected = 'k';
      element.child('value').innerHTML = element.dataset.kelvin;
    };

  if (element.child('celsius'))
    element.child('celsius').onclick = function() {
      element.dataset.selected = 'c';
      element.child('value').innerHTML = element.classList.contains('per_temperature') ? element.dataset.kelvin : toCelcius(+element.dataset.kelvin);
    };

  if (element.child('fahrenheit'))
    element.child('fahrenheit').onclick = function() {
      element.dataset.selected = 'f';
      element.child('value').innerHTML = element.classList.contains('per_temperature') ? toPerFahrenheit(element.dataset.kelvin) : toFahrenheit(+element.dataset.kelvin);
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

[ ...document.getElementsByClassName('fake_element') ].forEach(element => {
  const { parentElement: parent } = element;
  element.classList.add(`element_${parent.id}`);
});

Object.entries(Wolfram.elements).forEach(([ symbol, element ]) => {
  const html = document.getElementById(element.identifiers.name.value.toLowerCase());
  if (html) {
    const { parentElement: parent } = html;
    html.dataset.tableRow = parent.id;
    html.dataset.symbol = symbol;

    html.classList.add(`element_${parent.id}`);
    html.innerHTML = `<p class='atomic_number'>${element.identifiers.atomic_number.value}</p><p class='atomic_mass'>${(element.atomic_structure.atomic_mass.value ?? 0).toDecimals(2)}</p><p class='symbol'>${symbol}</p><div class='hoverable'></div>`;

    html.onmouseover = function() {
      if (!html.classList.contains('fallen'))
        return;

      zoomedElement.dataset.symbol = symbol;
      zoomedElement.style.background = html.style.background;

      zoomedElement.innerHTML = html.innerHTML;
      zoomedElement.innerHTML += `<p class='name'>${element.identifiers.name.value}</p>`

      zoomedElement.child('atomic_mass').innerHTML = element.atomic_structure.atomic_mass.value.toDecimals(4);

      zoomedElement.hidden = false;
    };

    html.onmouseout = function() {
      if (zoomedElement.dataset.symbol == symbol)
        zoomedElement.hidden = true;
    };

    html.onclick = function() {
      LoadElement.call(element);
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

  DPIUpdate();
  TrendsUpdate();
  UpdateTrendsContent(elementalTrendsMenu);
  UpdateTrendsContent(isotopicTrendsMenu);
  UpdateTrendsContent(colorizeMenu);
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

function TrendsUpdate() {
  [...document.getElementsByClassName('element')].forEach(element => {
    if (element.classList.contains('fake_element'))
      return;

    if (loadedElementExtras.Colored_Gradient || loadedElementExtras['Colored_&_Brightness_Gradient']) {
      const color = Object.values(loadedElementTrends ?? {}).length ? ((Object.values(loadedElementTrends).map(
        trend => trend[element.dataset.symbol]
      ).filter(
	trend => trend !== undefined
      ) ?? []).avg() * 255) : undefined;

      loadedElementColors.Colored_Gradient ??= {};
      if (color === undefined || Number.isNaN(color))
        loadedElementColors.Colored_Gradient[element.dataset.symbol] = undefined;
      else
        loadedElementColors.Colored_Gradient[element.dataset.symbol] = [ 255 - color, 0, color ];
    }

    if (!loadedElementExtras.Colored_Gradient || loadedElementExtras['Colored_&_Brightness_Gradient'])
      element.style.filter = `brightness(${Object.values(loadedElementTrends ?? {}).length ? Object.values(loadedElementTrends).reduce(
        (avg, trend, _, array) => avg + (trend[element.dataset.symbol] ?? 0) / (array.length || 1), 0
      ) * 100 : 100}%)`;
    else
      element.style.filter = null;

    const [ r, g, b, a ] = (Object.values(loadedElementColors ?? {}).length ? (Object.values(loadedElementColors).reduce((avg, color) => {
      const thisColor = color[element.dataset.symbol];
      if (thisColor === undefined)
        return avg;

      if (thisColor.length === 3)
        thisColor.push(1);

      if (avg === null)
        return thisColor.map(
          value => value === -1 ? -1 : [ value ]
        );
      else
        return avg.map(
          (value, index) => value === -1 || thisColor[index] === -1 ? -1 : [ ...value, thisColor[index] ]
        );
    }, [ [], [], [], [] ]) ?? [ [], [], [], [] ]).map(
      value => value === -1 ? 0 : value.filter(
        value => value !== null
      ).avg()
    ) : [ null, null, null, null ]).map(
      value => Number.isNaN(value) ? null : value
    );

    const rgb = r === null || g === null || b === null ? null : `rgb(${[ r, g, b ].join(', ')})`;
    const shadowRgb = r === null || g === null || b === null ? null : `rgb(${[ r, g, b ].map(
      value => value / 1.25
    ).join(', ')})`;

    delete loadedElementColors.Colored_Gradient;

    element.style.background = rgb;
    if (shadowRgb) {
      element.style.boxShadow = `1px 1px ${shadowRgb}, 2px 2px ${shadowRgb}, 3px 3px ${shadowRgb}, 4px 4px ${shadowRgb}, 5px 5px ${shadowRgb}, 6px 6px ${shadowRgb}, 7px 7px ${shadowRgb}, 8px 8px ${shadowRgb}, 9px 9px ${shadowRgb}, 10px 10px ${shadowRgb}`;
      element.dataset.saturated = true;
    } else {
      element.style.boxShadow = '';
      element.dataset.saturated = false;
    }

    element.style.opacity = a;

    if (a == 0)
      element.classList.add('hidden_element');
    else
      element.classList.remove('hidden_element');
  });
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

const topNav = document.getElementById('top_nav');
function UpdateTrendsContent(menu) {
  const topNavButton = topNav.getElementsByClassName(`button ${menu.id.replace('_menu', '')}`)[0];
  const buttonPosition = topNavButton.getBoundingClientRect();

  menu.style.top = `${buttonPosition.bottom}px`;
  menu.style.left = `${buttonPosition.left}px`;
  menu.style.width = `${buttonPosition.width - 2}px`;

  const { top: menuTop } = menu.getBoundingClientRect();

  [ ...menu.getElementsByClassName('content') ].forEach(element => {
    const cs = getComputedStyle(element);
    if (cs.getPropertyValue('display') === 'none')
      return;

    const { parentElement } = element;
    if (!parentElement.classList.contains('side'))
      return;

    const { top: grandParentTop, height: grandParentHeight } = element.parentElement.getBoundingClientRect();
    const maxHeight = grandParentTop + grandParentHeight;

    element.style.position = 'fixed';

    const { width: thisWidth, height: thisHeight } = element.getBoundingClientRect();
    const { left: parentLeft, top: parentTop, width: parentWidth, height: parentHeight } = parentElement.getBoundingClientRect();

    element.style.left = `calc(${parentLeft + parentWidth}px)`;

    let top = Math.max(parentTop, menuTop);
    if (top + thisHeight > innerHeight)
      top = maxHeight - thisHeight > 0 ? maxHeight - thisHeight : innerHeight - thisHeight;

    element.style.top = `${top}px`;
  });
}

function FollowIsotopes(element) {
  const computedStyle = getComputedStyle(element);

  const isotopes = sidebar.child('isotopes');

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

        if (!element.classList.contains('fake_element'))
          element.classList.add('fallen');

        setTimeout(
          () => element.style.transition = null,
        1);
      });

      if (particles.every(
        particle => !(particle instanceof Particle)
      )) {
        document.body.particle(particleInfo.count, Math.random() * 1 + 1);

        [ ...document.getElementsByClassName('fake_element') ].forEach(
          element => element.style.opacity = 1
        );

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
      const element = document.getElementById(Object.values(Wolfram.elements)[trigger.index].identifiers.name.value.toLowerCase());
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

          if (!element.classList.contains('fallen') && !element.classList.contains('fake_element')) {
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
      let offset = document.getElementById(Object.values(Wolfram.elements)[animation.lastElement].identifiers.name.value.toLowerCase()).getBoundingClientRect();

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
            const opacity = i / 1000;

            bg.style.opacity = opacity;
            periodicText.style.opacity = opacity;

            [ ...document.getElementsByClassName('fake_element') ].forEach(
              element => element.style.opacity = opacity
            );

            await sleep(1);
          }
        }, 500);
    }
  } else {
    if (animation.direction && animation.canScroll)
      animation.time = (animation.time - animation.speed * -animation.direction).clamp(0, animation.maxTime);

    animation.triggers.forEach(trigger => {
      const element = document.getElementById(Object.values(Wolfram.elements)[trigger.index].identifiers.name.value.toLowerCase());
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

          if (!element.classList.contains('fallen') && !element.classList.contains('fake_element')) {
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

async function LoadElement() {
  const fixRounding = num => +(num).toFixed(13);

  [ ...sidebar.getElementsByClassName('hidden') ].forEach(
    element => element.classList.remove('hidden')
  );

  [ ...sidebar.getElementsByClassName('temperature') ].forEach(
    element => element.dataset.selected = 'k'
  );

  [ ...sidebar.getElementsByClassName('collapsible') ].forEach(element => {
    element.dataset.expanded = false;
    if (!element.child('title').child('collapse_button')) {
      const button = document.createElement('img');
      button.classList.add('collapse_button');
      button.src = 'data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjNzc4IiBkPSJNMTEuNjUgMTQuNjVxLjE1LjE1LjM1LjE1dC4zNS0uMTVsMi44LTIuOHEuMjUtLjI1LjEyNS0uNTVUMTQuOCAxMUg5LjJxLS4zNSAwLS40NzUuM3QuMTI1LjU1bDIuOCAyLjhaTTEyIDIycS0yLjA3NSAwLTMuOS0uNzg4dC0zLjE3NS0yLjEzN3EtMS4zNS0xLjM1LTIuMTM3LTMuMTc1VDIgMTJxMC0yLjA3NS43ODgtMy45dDIuMTM3LTMuMTc1cTEuMzUtMS4zNSAzLjE3NS0yLjEzN1QxMiAycTIuMDc1IDAgMy45Ljc4OHQzLjE3NSAyLjEzN3ExLjM1IDEuMzUgMi4xMzggMy4xNzVUMjIgMTJxMCAyLjA3NS0uNzg4IDMuOXQtMi4xMzcgMy4xNzVxLTEuMzUgMS4zNS0zLjE3NSAyLjEzOFQxMiAyMlptMC0ycTMuMzUgMCA1LjY3NS0yLjMyNVQyMCAxMnEwLTMuMzUtMi4zMjUtNS42NzVUMTIgNFE4LjY1IDQgNi4zMjUgNi4zMjVUNCAxMnEwIDMuMzUgMi4zMjUgNS42NzVUMTIgMjBabTAtOFoiLz48L3N2Zz4=';

      element.child('title').appendChild(button);
    }

    element.child('title').child('collapse_button').onclick = function() {
      this.classList.add('animate');
      element.dataset.expanded = {
        true: 'false',
        false: 'true',
      }[element.dataset.expanded];
    };
  });

  sidebar.dataset.hidden = false;
  loadedElement = this.identifiers.symbol.value;

  sidebar.dataset.atomic_number = this.identifiers.atomic_number.value;
  sidebar.dataset.symbol = this.identifiers.symbol.value;
  sidebar.dataset.name = this.identifiers.name.value;

  sidebar.child('top').scrollIntoView();
  sidebar.vChild('atomic_mass').innerHTML = this.atomic_structure.atomic_mass.value;

  {
    const content = sidebar.child('content');

    {
      const overview = content.child('overview');

      overview.child('protons').innerHTML = `${this.identifiers.atomic_number.value} p<sup>+</sup>`;
      overview.child('neutrons').innerHTML = `${this.atomic_structure.neutrons.value} n<sup>0</sup>`;
      overview.child('electrons').innerHTML = `${(this.electron.shells.value ?? []).sum() || undefined} e<sup>-</sup>`;

      overview.vChild('block').innerHTML = this.electron.block.value;

      overview.vChild('group').innerHTML = this.identifiers.group.value;
      overview.vChild('group').dataset.searchQuery = `periodic table group ${this.identifiers.group.value}`;

      overview.vChild('period').innerHTML = this.identifiers.period.value;
      overview.vChild('period').dataset.searchQuery = `periodic table period ${this.identifiers.period.value}`;

      overview.vChild('phase').innerHTML = this.classifications.phase.value;
      overview.vChild('phase').dataset.searchQuery = `periodic table ${this.classifications.phase.value} phase`;

      overview.vChild('gas_phase').innerHTML = this.classifications.gas_phase.value;
      overview.vChild('gas_phase').dataset.searchQuery = `periodic table ${this.classifications.gas_phase.value} gas phase`;

      overview.child('series').child('traditional').innerHTML = this.classifications.traditional_series.value;
      overview.child('series').child('traditional').dataset.searchQuery = `periodic table ${this.classifications.traditional_series.value} series`;

      if ((this.classifications.series.value && this.classifications.series.value.toLowerCase()) !== (this.classifications.traditional_series.value && this.classifications.traditional_series.value.toLowerCase())) {
        overview.child('series').child('advanced').innerHTML = this.classifications.series.value;
        overview.child('series').child('advanced').dataset.searchQuery = `periodic table ${this.classifications.series.value} series`;
      } else
        overview.child('series').child('advanced').innerHTML = undefined;

      overview.vChild('valence_electrons').innerHTML = this.electron.valence.value;

      overview.vChild('configuration').innerHTML = this.electron.configuration.value;
      overview.vChild('semantic_configuration').innerHTML = this.electron.semantic_configuration.value;

      {
        const shells = overview.child('electrons_per_shell').child('wrap_array');
        [ ...shells.getElementsByClassName('subshell data_point') ].forEach(
          element => element.remove()
        );

        (this.electron.shells.value ?? []).reverse().forEach(subshell => {
          const element = shells.child('subshell template').template();
          element.classList.add('data_point');
          element.innerHTML = subshell;
        });
      }

      overview.vChild('electronegativity').innerHTML = this.electron.reactivity.electronegativity.value;
      overview.vChild('electronegativity').dataset.unit = this.electron.reactivity.electronegativity.tags.unit;
      overview.vChild('electron_affinity').innerHTML = this.electron.reactivity.electron_affinity.value;
      overview.vChild('electron_affinity').dataset.unit = this.electron.reactivity.electron_affinity.tags.unit;

      overview.child('ionization_energies').parentElement.child('title').innerHTML = 'Ionization Energies';
      overview.child('ionization_energies').parentElement.child('title').dataset.unit = `(${this.electron.reactivity.ionization_energies.tags.unit})`;
      const ionizationEnergies = overview.child('ionization_energies').child('wrap_array');
      [ ...ionizationEnergies.getElementsByClassName('ionization_energy data_point') ].forEach(
        element => element.remove()
      );
      (this.electron.reactivity.ionization_energies.value ?? []).sort((a, b) => b - a).forEach(energy => {
        const element = ionizationEnergies.child('ionization_energy template').template();
        element.classList.add('data_point');
        element.innerHTML = energy;
      });
    }

    {
      const element = content.child('elementText');
      element.child('atomic_number').innerHTML = this.identifiers.atomic_number.value;
      element.child('symbol').innerHTML = this.identifiers.symbol.value;
    }

    {
      const name = content.child('name');
      name.child('name').innerHTML = this.identifiers.name.value;
      name.child('alternate_names').child('names').innerHTML = this.identifiers.alternate_names.value ? this.identifiers.alternate_names.value.join(', ') : this.identifiers.alternate_names.value;
    }

    {
      const discovery = content.child('discovery');
      discovery.child('date').innerHTML = this.discovery.date.value;
      discovery.child('by').innerHTML = this.discovery.by.value;

      [ ...discovery.getElementsByClassName('location data_point') ].forEach(
        element => element.remove()
      );

      (this.discovery.location.value ?? []).sort((a, b) => b.localeCompare(a)).forEach(location => {
        const element = discovery.child('location template').template();
        element.classList.add('data_point');
        element.innerHTML = location;
      });
    }

    {
      const allotropes = content.child('allotropes');
      [ ...allotropes.getElementsByClassName('allotrope data_point') ].forEach(
        element => element.remove()
      );

      (this.allotropes.value ?? []).sort((a, b) => b.localeCompare(a)).forEach(allotrope => {
        const element = allotropes.child('allotrope template').template();
        element.classList.add('data_point');
        element.dataset.searchQuery = allotrope.replace(/\;-/g, ' ').replace(/(&|\;)/g, '').toLowerCase();
        element.innerHTML = allotrope;
      });
    }

    {
      const abundance = content.child('abundance section');
      [ ...abundance.getElementsByClassName('type') ].forEach(
        element => element.child('value').innerHTML = this.abundance[element.classList.item(0)].value && (fixRounding(this.abundance[element.classList.item(0)].value * 100) || undefined)
      )
    }

    {
      const classifications = content.child('classifications section');
      classifications.vChild('group').innerHTML = this.identifiers.group.value;
      classifications.vChild('group').dataset.searchQuery = `periodic table group ${this.identifiers.group.value}`;

      classifications.vChild('period').innerHTML = this.identifiers.period.value;
      classifications.vChild('period').dataset.searchQuery = `periodic table period ${this.identifiers.period.value}`;

      classifications.child('series').child('traditional').innerHTML = this.classifications.traditional_series.value;
      classifications.child('series').child('traditional').dataset.searchQuery = `periodic table ${this.classifications.traditional_series.value} series`;

      if ((this.classifications.series.value && this.classifications.series.value.toLowerCase()) !== (this.classifications.traditional_series.value && this.classifications.traditional_series.value.toLowerCase())) {
        classifications.child('series').child('advanced').innerHTML = this.classifications.series.value;
        classifications.child('series').child('advanced').dataset.searchQuery = `periodic table ${this.classifications.series.value} series`;
      } else
        classifications.child('series').child('advanced').innerHTML = undefined;

      classifications.vChild('phase').innerHTML = this.classifications.phase.value;
      classifications.vChild('phase').dataset.searchQuery = `periodic table ${this.classifications.phase.value} phase`;

      classifications.vChild('gas_phase').innerHTML = this.classifications.gas_phase.value;
      classifications.vChild('gas_phase').dataset.searchQuery = `periodic table ${this.classifications.gas_phase.value} gas phase`;

      {
        const advanced = classifications.child('advanced section');

        advanced.vChild('cpk_hex').innerHTML = this.cpk_hex.value;

        advanced.child('cpk_hex').child('box').style.background = `#${this.cpk_hex.value}`;
        advanced.child('cpk_hex').child('box').dataset.searchQuery = `%23${this.cpk_hex.value}`;

        advanced.vChild('CAS_number').innerHTML = this.classifications.CAS_number.value;
        advanced.vChild('CID_number').innerHTML = this.classifications.CID_number.value;
        advanced.vChild('RTECS_number').innerHTML = this.classifications.RTECS_number.value;

        const dotNumbers = advanced.child('DOT_numbers').child('array');
        [ ...dotNumbers.getElementsByClassName('dot_number data_point') ].forEach(
          element => element.remove()
        );

        (this.classifications.DOT_numbers.value ?? []).sort((a, b) => b - a).forEach(dotNumber => {
          const element = dotNumbers.child('dot_number template').template();
          element.classList.add('data_point');
          element.dataset.searchQuery = `DOT-${dotNumber}`;
          element.innerHTML = dotNumber;
        });

        advanced.vChild('DOT_hazard_class').innerHTML = this.classifications.DOT_hazard_class.value;
        advanced.vChild('DOT_hazard_class').dataset.searchQuery = `DOT hazard class ${this.classifications.DOT_hazard_class.value}`;
      }
    }

    {
      const atomicStructure = content.child('atomic_structure');

      atomicStructure.vChild('atomic_mass').innerHTML = this.atomic_structure.atomic_mass.value;
      atomicStructure.vChild('atomic_mass').dataset.unit = 'amu';

      atomicStructure.vChild('crystal_structure').innerHTML = this.atomic_structure.crystal_structure.value;
      atomicStructure.vChild('crystal_structure').dataset.searchQuery = `${this.atomic_structure.crystal_structure.value} crystal structure`;

      atomicStructure.vChild('atomic_radius').innerHTML = this.atomic_structure.radius.atomic.value;
      atomicStructure.vChild('atomic_radius').dataset.unit = this.atomic_structure.radius.atomic.tags.unit;
      atomicStructure.vChild('covalent_radius').innerHTML = this.atomic_structure.radius.covalent.value;
      atomicStructure.vChild('covalent_radius').dataset.unit = this.atomic_structure.radius.covalent.tags.unit;
      atomicStructure.vChild('van_der_waals_radius').innerHTML = this.atomic_structure.radius.van_der_waals.value;
      atomicStructure.vChild('van_der_waals_radius').dataset.unit = this.atomic_structure.radius.van_der_waals.tags.unit;

      const latticeAngles = atomicStructure.child('lattice_angles').child('array');
      [ ...latticeAngles.getElementsByClassName('lattice_angle data_point') ].forEach(
        element => element.remove()
      );

      (this.atomic_structure.lattice.angles.value ?? []).sort((a, b) => b.toString().localeCompare(a.toString())).forEach(angle => {
        const element = latticeAngles.child('lattice_angle template').template();
        element.classList.add('data_point');
        element.innerHTML = angle;
      });

      const latticeConstansts = atomicStructure.child('lattice_constants').child('array');
      [ ...latticeConstansts.getElementsByClassName('lattice_constant data_point') ].forEach(
        element => element.remove()
      );

      (this.atomic_structure.lattice.constants.value ?? []).sort((a, b) => b - a).forEach(constant => {
        const element = latticeConstansts.child('lattice_constant template').template();
        element.classList.add('data_point');
        element.innerHTML = constant;
      });

      atomicStructure.vChild('space_groups_name').innerHTML = this.atomic_structure.space_group.name.value;
      atomicStructure.vChild('space_groups_name').dataset.searchQuery = this.atomic_structure.space_group.name.value && `space group ${this.atomic_structure.space_group.name.value.replace(/(<sub>|<sup>)/g, '(').replace(/(<\/sub>|<\/sup>)/g, ')')}`;

      atomicStructure.vChild('space_groups_number').innerHTML = this.atomic_structure.space_group.number.value;
      atomicStructure.vChild('space_groups_number').dataset.searchQuery = `space group number ${this.atomic_structure.space_group.number.value}`;

      /* fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyAjFMo4C16t5mNrd3YoSf7ksGC6ZIhmJlA&cx=4544a8b3b42864c9a&q=space%20group%20number%20${this.atomic_structure.space_group.number}%20"site:img.chem.ucl.ac.uk"`).then(
        response => response.json()
      ).then(data => {
        const index = (data?.items ?? []).reduce(
          (returnIndex, item, index) => item?.link && item.link.includes(`/${this.atomic_structure.space_group.number}`) && item.link.includes(`1.htm`) ? index : returnIndex, -1
        );

        if (index > -1) {
          advanced.vChild('space_groups_number').dataset.search = true;
          advanced.vChild('space_groups_number').dataset.link = data.items[index].link;
        }
      }); */
    }

    {
      const electron = content.child('electron section');

      electron.vChild('number').innerHTML = (this.electron.shells.value ?? []).sum() || undefined;
      electron.vChild('valence').innerHTML = this.electron.valence.value;

      electron.vChild('block').innerHTML = this.electron.block.value;
      electron.vChild('configuration').innerHTML = this.electron.configuration.value;
      electron.vChild('semantic_configuration').innerHTML = this.electron.semantic_configuration.value;

      electron.vChild('quantum_numbers').innerHTML = this.electron.quantum_numbers.value;

      {
        const shells = electron.child('electrons_per_shell').child('wrap_array');
        [ ...shells.getElementsByClassName('subshell data_point') ].forEach(
          element => element.remove()
        );

        (this.electron.shells.value ?? []).reverse().forEach(subshell => {
          const element = shells.child('subshell template').template();
          element.classList.add('data_point');
          element.innerHTML = subshell;
        });
      }

      {
        const reactivity = electron.child('reactivity section');

        reactivity.vChild('electronegativity').innerHTML = this.electron.reactivity.electronegativity.value;
        reactivity.vChild('electronegativity').dataset.unit = this.electron.reactivity.electronegativity.tags.unit;
        reactivity.vChild('electron_affinity').innerHTML = this.electron.reactivity.electron_affinity.value;
        reactivity.vChild('electron_affinity').dataset.unit = this.electron.reactivity.electron_affinity.tags.unit;

        reactivity.child('ionization_energies').parentElement.child('title').innerHTML = 'Ionization Energies';
        reactivity.child('ionization_energies').parentElement.child('title').dataset.unit = `(${this.electron.reactivity.ionization_energies.tags.unit})`;
        const ionizationEnergies = reactivity.child('ionization_energies').child('wrap_array');
        [ ...ionizationEnergies.getElementsByClassName('ionization_energy data_point') ].forEach(
          element => element.remove()
        );

        (this.electron.reactivity.ionization_energies.value ?? []).sort((a, b) => b - a).forEach(energy => {
          const element = ionizationEnergies.child('ionization_energy template').template();
          element.classList.add('data_point');
          element.innerHTML = energy;
        });
      }

      const oxidationStates = electron.child('oxidation_states').child('wrap_array');
      [ ...oxidationStates.getElementsByClassName('oxidation_state data_point') ].forEach(
        element => element.remove()
      );

      (this.electron.oxidation_states.value ?? []).sort((a, b) => b - a).forEach(state => {
        const element = oxidationStates.child('oxidation_state template').template();
        element.classList.add('data_point');
        element.innerHTML = state;
      });
    }

    DrawAbundanceChart(this);

    {
      const properties = content.child('properties section');

      {
        const nuclear = properties.child('nuclear section');

        nuclear.vChild('half_life').innerHTML = this.properties.nuclear.half_life.value;
        nuclear.vChild('half_life').dataset.unit = this.properties.nuclear.half_life.tags.unit;

        nuclear.vChild('lifetime').innerHTML = this.properties.nuclear.lifetime.value;
        nuclear.vChild('lifetime').dataset.unit = this.properties.nuclear.lifetime.tags.unit;

        {
          const decayMode = nuclear.vChild('decay_mode');

          decayMode.innerHTML = this.properties.nuclear.decay_mode.symbol.value;
          decayMode.dataset.searchQuery = `${this.properties.nuclear.decay_mode.name.value} decay mode`;

          decayMode.onmouseenter = () => {
            const { left, bottom, top, width } = decayMode.getBoundingClientRect();
            const y = bottom + 0.04 * Math.min(innerWidth, innerHeight) + 21 < innerHeight ? { position: bottom + 5, anchor: 'top' } : { position: top - 5, anchor: 'bottom' };
            new Tooltip('text', this.properties.nuclear.decay_mode.name.value, left + width / 2, y.position, 'center', y.anchor, 250, { leave: decayMode, time: { min: 100 } }, null, 'decay_type_tooltip').create(content);
          };
        }

        nuclear.vChild('neutron_cross_section').innerHTML = this.properties.nuclear.neutron.cross_section.value;
        nuclear.vChild('neutron_cross_section').dataset.unit = this.properties.nuclear.neutron.cross_section.tags.unit;
        nuclear.vChild('neutron_mass_absorption').innerHTML = this.properties.nuclear.neutron.mass_absorption.value;
        nuclear.vChild('neutron_mass_absorption').dataset.unit = this.properties.nuclear.neutron.mass_absorption.tags.unit ?? 'Da';
      }

      {
        const physical = properties.child('physical section');

        physical.vChild('color').innerHTML = this.properties.physical.color.value;
        physical.vChild('appearance').innerHTML = this.properties.physical.appearance.value && this.properties.physical.appearance.value.split('').map(
          (char, index) => index ? char : char.toUpperCase()
        ).join('');

        physical.vChild('refractive_index').innerHTML = this.properties.physical.refractive_index.value;
        physical.vChild('refractive_index').dataset.unit = this.properties.physical.refractive_index.tags.unit;
        physical.vChild('speed_of_sound').innerHTML = this.properties.physical.speed_of_sound.value;
        physical.vChild('speed_of_sound').dataset.unit = this.properties.physical.speed_of_sound.tags.unit;

        physical.vChild('standard_density').innerHTML = this.properties.physical.density.standard.value;
        physical.vChild('standard_density').dataset.unit = this.properties.physical.density.standard.tags.unit;
        physical.vChild('liquid_density').innerHTML = this.properties.physical.density.liquid.value;
        physical.vChild('liquid_density').dataset.unit = this.properties.physical.density.liquid.tags.unit;
        physical.vChild('molar_volume').innerHTML = this.properties.physical.molar_volume.value;
        physical.vChild('molar_volume').dataset.unit = this.properties.physical.molar_volume.tags.unit;

        physical.vChild('mohs_hardness').innerHTML = this.properties.physical.hardness.mohs.value;
        physical.vChild('mohs_hardness').dataset.unit = this.properties.physical.hardness.mohs.tags.unit;
        physical.vChild('brinell_hardness').innerHTML = this.properties.physical.hardness.brinell.value;
        physical.vChild('brinell_hardness').dataset.unit = this.properties.physical.hardness.brinell.tags.unit;
        physical.vChild('vickers_hardness').innerHTML = this.properties.physical.hardness.vickers.value;
        physical.vChild('vickers_hardness').dataset.unit = this.properties.physical.hardness.vickers.tags.unit;

        physical.vChild('poisson_ratio').innerHTML = this.properties.physical.poisson_ratio.value;
        physical.vChild('poisson_ratio').dataset.unit = this.properties.physical.poisson_ratio.tags.unit;
        physical.vChild('bulk_modulus').innerHTML = this.properties.physical.modulus.bulk.value;
        physical.vChild('bulk_modulus').dataset.unit = this.properties.physical.modulus.bulk.tags.unit;
        physical.vChild('shear_modulus').innerHTML = this.properties.physical.modulus.shear.value;
        physical.vChild('shear_modulus').dataset.unit = this.properties.physical.modulus.shear.tags.unit;
        physical.vChild('yound_modulus').innerHTML = this.properties.physical.modulus.young.value;
        physical.vChild('yound_modulus').dataset.unit = this.properties.physical.modulus.young.tags.unit;
      }

      {
        const thermal = properties.child('thermal section');

        thermal.vChild('conductivity').innerHTML = this.properties.thermal.conductivity.value;
        thermal.vChild('conductivity').dataset.unit = this.properties.thermal.conductivity.tags.unit;

        Object.entries({
          melting_point: this.properties.thermal.melting_point,
          boiling_point: this.properties.thermal.boiling_point,
          neel_point: this.properties.thermal.neel_point,
          thermal_expansion: this.properties.thermal.expansion,
          critical_temperature: this.properties.thermal.critical.temperature,
        }).forEach(([ name, data ]) => {
          const element = thermal.child(name);
          element.dataset.kelvin = data.value;

          element.child('value').innerHTML = data.value;
          if (data.value !== undefined)
            element.child('value').style.width = `${element.classList.contains('per_temperature') ? Math.max(data.value.toString().length, toPerFahrenheit(data.value).toString().length) : Math.max(data.value.toString().length, toCelcius(data.value).toString().length, toFahrenheit(data.value).toString().length)}ch`;
        });

        thermal.vChild('critical_pressure').innerHTML = this.properties.thermal.critical.pressure.value;
        thermal.vChild('critical_pressure').dataset.unit = this.properties.thermal.critical.pressure.tags.unit;
        thermal.vChild('critical_temperature').innerHTML = this.properties.thermal.critical.temperature.value;

        thermal.vChild('specific_heat').innerHTML = this.properties.thermal.heat.specific.value;
        thermal.vChild('specific_heat').dataset.unit = this.properties.thermal.heat.specific.tags.unit;
        thermal.vChild('fusion_heat').innerHTML = this.properties.thermal.heat.fusion.value;
        thermal.vChild('fusion_heat').dataset.unit = this.properties.thermal.heat.fusion.tags.unit;
        thermal.vChild('vaporization_heat').innerHTML = this.properties.thermal.heat.vaporization.value;
        thermal.vChild('vaporization_heat').dataset.unit = this.properties.thermal.heat.vaporization.tags.unit;
        thermal.vChild('adiabatic_index').innerHTML = this.properties.thermal.adiabatic_index.value;
        thermal.vChild('adiabatic_index').dataset.unit = this.properties.thermal.adiabatic_index.tags.unit;
      }

      {
        const electrical = properties.child('electrical section');

        electrical.vChild('type').innerHTML = this.properties.electrical.type.value;
        electrical.vChild('type').dataset.searchQuery = `periodic table ${this.properties.electrical.type.value}s`;

        electrical.vChild('conductivity').innerHTML = this.properties.electrical.conductivity.value;
        electrical.vChild('conductivity').dataset.unit = this.properties.electrical.conductivity.tags.unit;
        electrical.vChild('resistivity').innerHTML = this.properties.electrical.resistivity.value;
        electrical.vChild('resistivity').dataset.unit = this.properties.electrical.resistivity.tags.unit;

        electrical.vChild('superconducting_point').innerHTML = this.properties.electrical.superconducting_point.value;
        electrical.vChild('superconducting_point').dataset.unit = this.properties.electrical.superconducting_point.tags.unit;
      }

      {
        const magnetic = properties.child('magnetic section');

        magnetic.vChild('type').innerHTML = this.properties.magnetic.type.value;
        magnetic.vChild('type').dataset.searchQuery = `periodic table ${this.properties.magnetic.type.value} magnets`;

        Object.entries({
          curie_point: this.properties.magnetic.curie_point,
        }).forEach(([ name, data ]) => {
          const element = magnetic.child(name);
          element.dataset.kelvin = data.value;

          element.child('value').innerHTML = data.value;
          if (data.value !== undefined)
            element.child('value').style.width = `${element.classList.contains('per_temperature') ? Math.max(data.value.toString().length, toPerFahrenheit(data.value).toString().length) : Math.max(data.value.toString().length, toCelcius(data.value).toString().length, toFahrenheit(data.value).toString().length)}ch`;
        });

        {
          const susceptibility = magnetic.child('susceptibility');

          susceptibility.vChild('mass').innerHTML = this.properties.magnetic.susceptibility.mass.value;
          susceptibility.vChild('mass').dataset.unit = this.properties.magnetic.susceptibility.mass.tags.unit;
          susceptibility.vChild('molar').innerHTML = this.properties.magnetic.susceptibility.molar.value;
          susceptibility.vChild('molar').dataset.unit = this.properties.magnetic.susceptibility.molar.tags.unit;
          susceptibility.vChild('volume').innerHTML = this.properties.magnetic.susceptibility.volume.value;
          susceptibility.vChild('volume').dataset.unit = this.properties.magnetic.susceptibility.volume.tags.unit ?? '&chi;v';
        }
      }

      {
        const summary = content.child('summary');

        summary.child('text').innerHTML = this.summary.text.value;
        summary.child('citation').child('source').innerHTML = this.summary.source.value;
        summary.child('citation').child('source').href = this.summary.source.value;
      }
    }

    /* .vChild('').innerHTML = this.properties.;
    .vChild('').dataset.searchQuery = `${this.properties.}`; */
  }

  [ ...sidebar.getElementsByTagName('*') ].forEach(element => {
    if (element.dataset.unit !== undefined && element.dataset.unit !== 'undefined')
      element.innerHTML += ` ${element.dataset.unit}`;

    delete element.dataset.unit;
  });

  [ ...sidebar.getElementsByClassName('data_point') ].forEach(dataPoint => {
    if (dataPoint.innerHTML === 'undefined') {
      dataPoint.style.display = 'none';
      dataPoint.innerHTML = '';
    } else
      dataPoint.style.display = '';
  });

  [ ...sidebar.getElementsByClassName('parent_data_point') ].forEach(parent => {
    const dataPoints = [ ...parent.getElementsByClassName('data_point') ];

    parent.style.display = dataPoints.some(
      dataPoint => dataPoint.innerHTML?.length > 0
    ) ? null : 'none';
  });

  LoadSearchableElments();
}

/* setTimeout(() => LoadElement.call(Wolfram.elements.C), 50); */

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

  sidebar.child('content').child('isotopes').child('title').child('text').innerHTML = `Isotopes of ${element.identifiers.name.value}`;

  sidebar.child('content').child('isotopes').child('title').child('text').onmouseenter = async function() {
    const tooltip = new Tooltip('text', `<h2 class='title'></h2><br><p class='text'></p><br><div class='citation'>Source: <a target='_blank' class='source'>Wikipedia</a></div>`, 0, innerHeight, 'left', 'bottom', 250, { leave: this, time: { min: 100 } }, null, 'isotopes_of').create();

    await fetch(`https://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&prop=extracts&exintro=&explaintext=&titles=${this.innerHTML.replace(/ /g, '_').toLowerCase()}`).then(
      response => response.json()
    ).then(data => {
      const page = Object.values(data.query.pages)[0];
      sidebar.child('content').child('isotopes').child('title').child('text').dataset.link = `https://en.wikipedia.org/?curid=${page.pageid}`;

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

      lastLine.text = lastLine.text.split(' ');
      text.innerHTML = `${lastLine.text.slice(0, lastLine.text.length - 1).join(' ')}&mldr;</span>`;
    });
  };

  [...sidebar.child('content').child('isotopes').getElementsByClassName('temporary')].forEach(
    element => element.remove()
  );

	const isotopes = Nubase2020.nuclides[element.identifiers.symbol.value];
  if (isotopes) {
    abundanceCanvasKey.style.display = 'block';

    const stable = Object.fromEntries(Object.entries(Nubase2020.nuclides[element.identifiers.symbol.value]).filter(
      ([ _, value ]) => value.half_life?.value.value === 'Stable'
    ) ?? []);

    const abundances = Object.fromEntries(Object.entries(Nubase2020.nuclides[element.identifiers.symbol.value]).map(
      ([ key, value ]) => [ key, value.abundance?.value.value ]
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
      isotopeElement.classList.add('temporary', 'isotope', 'data_point', 'searchable', 'no_event_update');
      isotopeElement.style.background = isotope.half_life?.color;

      isotopeElement.innerHTML = isotope.formatted_symbol;

      isotopeElement.addEventListener('click', function() {
        if (nSidebar.dataset.stuckOpen === isotope.symbol) {
          nSidebar.dataset.stuckOpen = null;
          [...sidebar.child('content').child('isotopes').getElementsByClassName('isotope')].forEach(
            element => element.classList.remove('selected')
          );

          nSidebar.dataset.hidden = true;
        } else {
          nSidebar.dataset.stuckOpen = isotope.symbol;
          [...sidebar.child('content').child('isotopes').getElementsByClassName('isotope')].forEach(
            element => isotopeElement === element ? element.classList.add('selected') : element.classList.remove('selected')
          );

          LoadIsotope.call(isotope);
        }
      });

      if (stable[isotope.symbol])
        isotopeElement.classList.add('stable');
      else if (isotope.half_life?.value.value === 'Particle Unstable')
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
          Object.entries(abundances).forEach(([ drawIsotope, abundance ], index) => {
            const color = colors[Object.keys(Nubase2020.nuclides[element.identifiers.symbol.value]).indexOf(drawIsotope)];
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

      sidebar.child('content').child('isotopes').appendChild(isotopeElement);

      const wbr = document.createElement('wbr');
      wbr.classList.add('temporary');
      sidebar.child('content').child('isotopes').appendChild(wbr);
    });
  } else {
    abundanceCanvasKey.style.display = 'none';

    const error = document.createElement('span');
    error.classList.add('no_known_isotopes', 'temporary');
    error.innerHTML = 'No known isotopes';

    sidebar.child('content').child('isotopes').appendChild(error);
    Array.from({ length: 2 }, () => {
      const br = document.createElement('br');
      br.classList.add('temporary');
      sidebar.child('content').child('isotopes').appendChild(br);
    });

    NoNaturalIsotopes();
  }
}

function LoadIso(iso) {
  {
    const title = iso.child('title');
    title.dataset.searchQuery = this.search_query.split('-').map(
      (value, index) => index ? value : (Wolfram.elements[this.element].identifiers.name.value ?? value)
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
        if (this[key].value.value) {
          const innerValue = value.child('value');

          innerValue.innerHTML = `${(this[key]?.symbol ?? '').replace('=', '')}${this[key].value.value}`;
          innerValue.dataset.estimated = this[key].value?.estimated;
          if (this[key].value?.estimated)
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

function LoadIsotope() {
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

  LoadIso.call(this, nuclide);

  (this.isomers ?? []).forEach(isomerObject => {
    const isomer = nuclide.child('isomers').child('template').template();

    LoadIso.call(isomerObject, isomer);
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

/*let index = 0;
setTimeout(async function() {
  for (const [ symbol, element ] of Object.entries(Nubase2020.nuclides)) {
    if (symbol === 'n')
      continue;

    for (const isotope of Object.values(element)) {
      console.log(++index);
      LoadIsotope.call(isotope);
      await new Promise((resolve, reject) => {
        setTimeout(resolve, 0);
      });

      for (const isomer of isotope.isomers ?? []) {
        console.log(++index);
        LoadIsotope.call(isotope);
        await new Promise((resolve, reject) => {
          setTimeout(resolve, 0);
        });
      }
    }
  }
}, 100);*/

/*let index = 0;
setTimeout(async function() {
  for (const [ symbol, element ] of Object.entries(Wolfram.elements)) {
    console.log(++index);
    LoadElement.call(element);
    await new Promise((resolve, reject) => {
      setTimeout(resolve, 0);
    });
  }
}, 100);*/

function CalculateDecayChain(compact = false) {
  decayChainElement.onclick = null;
  decayChainElement.classList.add('loading');

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
    else {
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

      decayChainElement.classList.remove('loading');
    }

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

        decayChainElement.classList.remove('loading');

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
      else if (iso.symbol === base_isomer?.symbol || iso.excitation_energy.value?.value > base_isomer?.excitation_energy?.value?.value)
        return false;
    }

    return true;
  });
}

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

              LoadElement.call(Wolfram.elements[iso.element]);
              nSidebar.dataset.stuckOpen = iso.symbol;
              [ ...sidebar.child('content').child('isotopes').getElementsByClassName('isotope') ].forEach(
                element => iso.formatted_symbol === element.innerHTML ? element.classList.add('selected') : element.classList.remove('selected')
              );

              LoadIsotope.call(iso);
              break;
            };
            case 'isomer': {
              const [ massNumber, isomerCharacter, element ] = path.split('.');
              const iso = Nubase2020.nuclides[element][`${massNumber}${element}`]

              LoadElement.call(Wolfram.elements[iso.element]);
              nSidebar.dataset.stuckOpen = iso.symbol;
              [ ...sidebar.child('content').child('isotopes').getElementsByClassName('isotope') ].forEach(
                element => iso.formatted_symbol === element.innerHTML ? element.classList.add('selected') : element.classList.remove('selected')
              );

              LoadIsotope.call(iso.isomers.reduce(
                (match, iso) => iso?.isomer_id?.character === isomerCharacter ? iso : match
              ));
              break;
            };
          }
        } else if (searchable.dataset.link) {
          window.open(searchable.dataset.link, '_blank');
        } else if (searchable.dataset.searchQuery)
          window.open(`https://www.google.com/search?q=${searchable.dataset.searchQuery}`, '_blank');
        else if (searchable.classList.contains('title') && searchable.parentElement === nSidebar) {
          const symbol = searchable.child('atomic_symbol').innerHTML;
          window.open(`https://www.google.com/search?q=${Wolfram.elements[symbol].identifiers.name.value}+isotope+${searchable.child('mass_number').innerHTML}`, '_blank');
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
  let result = element.classList.contains('trends_menu') || element.id === 'top_nav' || element.classList.contains('isotope') || element === credits || element === decayChainElement || element === nSidebar ? -1 : (element === document.body ? 1 : 0);
  while (element.parentElement && !result) {
    element = element.parentElement;
    result = element.classList.contains('trends_menu') || element.id === 'top_nav' || element === sidebar || element === credits || element === decayChainElement || element === nSidebar || element === abundanceChart ? -1 : (element === document.body ? 1 : 0);
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

function TimeToSeconds(time, unit) {
  time = +time.toString().replace(/[^\d\.\-\+e]/g, '');

  switch (unit) {
    case 'qs':
      return +`${time}e-30`;
    case 'rs':
      return +`${time}e-27`;
    case 'ys':
      return +`${time}e-24`;
    case 'zs':
      return +`${time}e-21`;
    case 'as':
      return +`${time}e-18`;
    case 'fs':
      return +`${time}e-15`;
    case 'ps':
      return +`${time}e-12`;
    case 'ns':
      return +`${time}e-9`;
    case '&mu;s':
      return +`${time}e-6`;
    case 'ms':
      return +`${time}e-3`;
    case 'cs':
      return +`${time}e-2`;
    case 'ds':
      return +`${time}e-1`;
    case 's':
      return time;
    case 'das':
      return +`${time}3+1`;
    case 'm':
      return Math.floor(time * 60 * 10 ** getDecimals(time)) / 10 ** getDecimals(time);
    case 'hs':
      return +`${time}e+2`;
    case 'ks':
      return +`${time}e+3`;
    case 'h':
    case 'hr':
      return Math.floor(time * 3600 * 10 ** getDecimals(time)) / 10 ** getDecimals(time);
    case 'Qy':
      return Math.floor(time * 3.15576e+37 * 10 ** getDecimals(time)) / 10 ** getDecimals(time);
    case 'Ry':
      return Math.floor(time * 3.15576e+34 * 10 ** getDecimals(time)) / 10 ** getDecimals(time);
    case 'Yy':
      return Math.floor(time * 3.15576e+31 * 10 ** getDecimals(time)) / 10 ** getDecimals(time);
    case 'Zy':
      return Math.floor(time * 3.15576e+28 * 10 ** getDecimals(time)) / 10 ** getDecimals(time);
    case 'Ey':
      return Math.floor(time * 3.15576e+25 * 10 ** getDecimals(time)) / 10 ** getDecimals(time);
    case 'Py':
      return Math.floor(time * 3.15576e+22 * 10 ** getDecimals(time)) / 10 ** getDecimals(time);
    case 'Ty':
      return Math.floor(time * 3.15576e+19 * 10 ** getDecimals(time)) / 10 ** getDecimals(time);
    case 'Gy':
      return Math.floor(time * 3.15576e+16 * 10 ** getDecimals(time)) / 10 ** getDecimals(time);
    case 'My':
      return Math.floor(time * 3.15576e+13 * 10 ** getDecimals(time)) / 10 ** getDecimals(time);
    case 'ky':
      return Math.floor(time * 3.15576e+10 * 10 ** getDecimals(time)) / 10 ** getDecimals(time);
    case 'y':
      return Math.floor(time * 31557600 * 10 ** getDecimals(time)) / 10 ** getDecimals(time);
    case 'd':
      return Math.floor(time * 86400 * 10 ** getDecimals(time)) / 10 ** getDecimals(time);
    case 'Ms':
      return +`${time}e+6`;
    case 'Gs':
      return +`${time}e+9`;
    case 'Ts':
      return +`${time}e+12`;
    case 'Ps':
      return +`${time}e+15`;
    case 'Es':
      return +`${time}e+18`;
    case 'Zs':
      return +`${time}e+21`;
    case 'Ys':
      return +`${time}e+24`;
    case 'Rs':
      return +`${time}e+27`;
    case 'Qs':
      return +`${time}e+30`;
    default:
      return time;
  }
}
