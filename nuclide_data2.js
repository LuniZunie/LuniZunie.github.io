function Measurment(value, fullUnit, unitAbbreviation, deviation, estimated) {
  return {
    value: value,
    unit: {
      full: fullUnit,
      abreviation: unitAbbreviation,
    },
    deviation: deviation,
    estimated: estimated,
  }
}

const nuclideData = {
  '1H': {
    element: 'H',
    search_name: 'Hydrogen isotope 1',
    alternate_names: [
      'Protium',
    ],
    z: 1,
    n: 0,
    isotopic_mass: Measurment(1.007825031898, 'dalton', 'Da', 14, false),
    observed: true,
    variations: [
      {
        name: '1H',
        observed: true,
        excitation_energy: Measurement(0, 'electronvolt', 'eV', 0, false),
        half_life: 'Stable',
        resonance_width: null,
        radioactive_decay: null,
        spin_parity: [
          {
            spin: {
              value: '1/2',
              potentially_wrong: false,
              estimated: false,
            },
            parity: {
              value: '+',
              potentially_wrong: false,
              estimated: false,
            },
          },
        ],
        abundance: {
          normal: {
            value: 0.999885,
            deviation: 0,
          },
          min: 0.00001,
          max: 0.00028,
        },
      },
    ],
  },
  '2H': {
    element: 'H',
    search_name: 'Hydrogen isotope 2',
    alternate_names: [
      'Deuterium',
    ],
    z: 1,
    n: 1,
    isotopic_mass: Measurment(2.014101777844, 'dalton', 'Da', 15, false),
    observed: true,
    variations: [
      {
        name: '2H',
        observed: true,
        excitation_energy: Measurement(0, 'electronvolt', 'eV', 0, false),
        half_life: 'Stable',
        resonance_width: null,
        radioactive_decay: null,
        spin_parity: [
          {
            spin: {
              value: '1',
              potentially_wrong: false,
              estimated: false,
            },
            parity: {
              value: '+',
              potentially_wrong: false,
              estimated: false,
            },
          },
        ],

        abundance: {
          normal: {
            value: 0.000115,
            deviation: 0,
          },
          min: 0.00001,
          max: 0.00028,
        },
      },
    ],
  },
  '3H': {
    element: 'H',
    search_name: 'Hydrogen isotope 3',
    alternate_names: [
      'Tritium',
    ],
    z: 1,
    n: 2,
    isotopic_mass: Measurment(3.016049281320, 'dalton', 'Da', 81, false),
    observed: true,
    variations: [
      {
        name: '3H',
        observed: true,
        excitation_energy: Measurement(0, 'electronvolt', 'eV', 0, false),
        half_life: Measurment(12.32, 'year', 'y', 2, false),
        resonance_width: null,
        radioactive_decay: [
          {
            decay: {
              mode: '&beta;&#8315;',
              observed: true,
            },
            weight: {
              value: 1,
              deviation: 0,
            },
            daughter_isotope: {
              name: '3He',
              observed: true,
            },
          },
        ],
        spin_parity: [
          {
            spin: {
              value: '1/2',
              potentially_wrong: false,
              estimated: false,
            },
            parity: {
              value: '+',
              potentially_wrong: false,
              estimated: false,
            },
          },
        ],
        abundance: 'Trace',
      },
    ],
  },
  '4H': {
    element: 'H',
    search_name: 'Hydrogen isotope 4',
    alternate_names: null,
    z: 1,
    n: 3,
    isotopic_mass: Measurment(4.02643, 'dalton', 'Da', 11, false),
    observed: true,
    variations: [
      {
        name: '4H',
        observed: true,
        excitation_energy: Measurement(0, 'electronvolt', 'eV', 0, false),
        half_life: Measurment(139, 'yoctosecond', 'ys', 10, false),
        resonance_width: null,
        radioactive_decay: [
          {
            decay: {
              mode: 'n',
              observed: true,
            },
            weight: {
              value: 1,
              deviation: 0,
            },
            daughter_isotope: {
              name: '3H',
              observed: true,
            },
          },
        ],
        spin_parity: [
          {
            spin: {
              value: '2',
              potentially_wrong: false,
              estimated: false,
            },
            parity: {
              value: '-',
              potentially_wrong: false,
              estimated: false,
            },
          },
        ],
        abundance: null,
      },
    ],
  },
  '5H': {
    element: 'H',
    search_name: 'Hydrogen isotope 5',
    alternate_names: null,
    z: 1,
    n: 4,
    isotopic_mass: Measurment(5.03531, 'dalton', 'Da', 10, false),
    observed: true,
    variations: [
      {
        name: '5H',
        observed: true,
        excitation_energy: Measurement(0, 'electronvolt', 'eV', 0, false),
        half_life: Measurment(86, 'yoctosecond', 'ys', 6, false),
        resonance_width: null,
        radioactive_decay: [
          {
            observed: true,
            decay_mode: '2n',
            weight: {
              value: 1,
              deviation: 0,
            },
            daughter_isotope: '3H',
          },
        ],
        spin_parity: [
          {
            spin: {
              value: '1/2',
              potentially_wrong: true,
              estimated: false,
            },
            parity: {
              value: '+',
              potentially_wrong: true,
              estimated: false,
            },
          },
        ],
        abundance: null,
      },
    ],
  },
  '6H': {
    element: 'H',
    search_name: 'Hydrogen isotope 6',
    alternate_names: null,
    z: 1,
    n: 5,
    isotopic_mass: Measurment(6.04496, 'dalton', 'Da', 27, false),
    observed: true,
    variations: [
      {
        name: '6H',
        observed: true,
        excitation_energy: Measurement(0, 'electronvolt', 'eV', 0, false),
        half_life: Measurment(294, 'yectosecond', 'ys', 67, false),
        resonance_width: null,
        radioactive_decay: [
          {
            observed: false,
            decay_mode: 'n',
            weight: null,
            daughter_isotope: '5H',
          },
          {
            observed: false,
            decay_mode: '3n',
            weight: null,
            daughter_isotope: '3H',
          },
        ],
        spin_parity: [
          {
            spin: {
              value: '2',
              potentially_wrong: false,
              estimated: true,
            },
            parity: {
              value: '-',
              potentially_wrong: false,
              estimated: true,
            },
          },
        ],
        abundance: null,
      },
    ],
  },
  '7H': {
    element: 'H',
    search_name: 'Hydrogen isotope 7',
    alternate_names: null,
    z: 1,
    n: 6,
    isotopic_mass: Measurment(7.052750, 'dalton', 'Da', 108, true),
    observed: true,
    variations: [
      {
        name: '7H',
        observed: true,
        excitation_energy: Measurement(0, 'electronvolt', 'eV', 0, false),
        half_life: Measurment(652, 'yectosecond', 'ys', 558, false),
        resonance_width: null,
        radioactive_decay: [
          {
            observed: false,
            decay_mode: '2n',
            weight: null,
            daughter_isotope: '5H',
          },
        ],
        spin_parity: [
          {
            spin: {
              value: '1/2',
              potentially_wrong: false,
              estimated: true,
            },
            parity: {
              value: '+',
              potentially_wrong: false,
              estimated: true,
            },
          },
        ],
        abundance: null,
      },
    ],
  },
  '2He': {
    element: 'He',
    search_name: 'Helium isotope 2',
    alternate_names: null,
    z: 2,
    n: 0,
    isotopic_mass: Measurment(2.015894, 'dalton', 'Da', 2, false),
    observed: true,
    variations: [
      {
        name: '2He',
        observed: true,
        excitation_energy: Measurement(0, 'electronvolt', 'eV', 0, false),
        half_life: Measurment(1, 'nanosecond', 'ns', '<', false),
        resonance_width: null,
        radioactive_decay: [
          {
            observed: true,
            decay_mode: 'p',
            weight: {
              value: 0.9999,
              deviation: '>',
            },
            daughter_isotope: '1H',
          },
          {
            observed: true,
            decay_mode: '&beta;&#8314;',
            weight: {
              value: 0.0001,
              deviation: '<',
            },
            daughter_isotope: '2H',
          },
        ],
        spin_parity: [
          {
            spin: {
              value: '0',
              potentially_wrong: false,
              estimated: true,
            },
            parity: {
              value: '+',
              potentially_wrong: false,
              estimated: true,
            },
          },
        ],
        abundance: null,
      },
    ],
  },
  '3He': {
    element: 'He',
    search_name: 'Helium isotope 3',
    alternate_names: null,
    z: 2,
    n: 1,
    isotopic_mass: Measurment(3.016029321967, 'dalton', 'Da', 60, false),
    observed: true,
    variations: [
      {
        name: '3He',
        observed: true,
        excitation_energy: Measurement(0, 'electronvolt', 'eV', 0, false),
        half_life: 'Stable',
        resonance_width: null,
        radioactive_decay: null,
        spin_parity: [
          {
            spin: {
              value: '1/2',
              potentially_wrong: false,
              estimated: false,
            },
            parity: {
              value: '+',
              potentially_wrong: false,
              estimated: false,
            },
          },
        ],
        abundance: {
          normal: {
            value: 0.000002,
            deviation: 2,
          },
          min: 4.6e-10,
          max: 0.000041,
        },
      },
    ],
  },
  '4He': {
    element: 'He',
    search_name: 'Helium isotope 4',
    alternate_names: null,
    z: 2,
    n: 2,
    isotopic_mass: Measurment(4.002603254130, 'dalton', 'Da', 158, false),
    observed: true,
    variations: [
      {
        name: '4He',
        observed: true,
        excitation_energy: Measurement(0, 'electronvolt', 'eV', 0, false),
        half_life: 'Stable',
        resonance_width: null,
        radioactive_decay: null,
        spin_parity: [
          {
            spin: {
              value: '0',
              potentially_wrong: false,
              estimated: false,
            },
            parity: {
              value: '+',
              potentially_wrong: false,
              estimated: false,
            },
          },
        ],
        abundance: {
          normal: {
            value: 0.999998,
            deviation: 2,
          },
          min: 0.999959,
          max: 0.99999999954,
        },
      },
    ],
  },
  '5He': {
    element: 'He',
    search_name: 'Helium isotope 5',
    alternate_names: null,
    z: 2,
    n: 3,
    isotopic_mass: Measurment(5.012057, 'dalton', 'Da', 21, false),
    observed: true,
    variations: [
      {
        name: '5He',
        observed: true,
        excitation_energy: Measurement(0, 'electronvolt', 'eV', 0, false),
        half_life: Measurment(602, 'yectosecond', 'ys', 22, false),
        resonance_width: Measurment(758, 'kiloelectronvolt', 'keV', 28, false),
        radioactive_decay: [
          {
            observed: true,
            decay_mode: 'n',
            weight: {
              value: 1,
              deviation: 0,
            },
            daughter_isotope: '4He',
          },
        ],
        spin_parity: [
          {
            spin: {
              value: '3/2',
              potentially_wrong: false,
              estimated: false,
            },
            parity: {
              value: '-',
              potentially_wrong: false,
              estimated: false,
            },
          },
        ],
        abundance: null,
      },
    ],
  },
  '6He': {
    element: 'He',
    search_name: 'Helium isotope 6',
    alternate_names: null,
    z: 2,
    n: 4,
    isotopic_mass: Measurment(6.01888589, 'dalton', 'Da', 6, false),
    observed: true,
    variations: [
      {
        name: '6He',
        observed: true,
        excitation_energy: Measurement(0, 'electronvolt', 'eV', 0, false),
        half_life: Measurment(806.92, 'millisecond', 'ms', 24, false),
        resonance_width: null,
        radioactive_decay: [
          {
            observed: true,
            decay_mode: '&beta;&#8315;',
            weight: {
              value: 0.99999722,
              deviation: 18,
            },
            daughter_isotope: '6Li',
          },
          {
            observed: true,
            decay_mode: '&beta;&#8315;d',
            weight: {
              value: 0.00000278,
              deviation: 18,
            },
            daughter_isotope: '4He',
          },
        ],
        spin_parity: [
          {
            spin: {
              value: '0',
              potentially_wrong: false,
              estimated: false,
            },
            parity: {
              value: '+',
              potentially_wrong: false,
              estimated: false,
            },
          },
        ],
        abundance: null,
      },
    ],
  },
  '7He': {
    element: 'He',
    search_name: 'Helium isotope 7',
    alternate_names: null,
    z: 2,
    n: 5,
    isotopic_mass: Measurment(7.027991, 'dalton', 'Da', 8, false),
    observed: true,
    variations: [
      {
        name: '7He',
        observed: true,
        excitation_energy: Measurement(0, 'electronvolt', 'eV', 0, false),
        half_life: Measurment(2.51, 'zeptosecond', 'zs', 7, false),
        resonance_width: Measurment(182, 'kiloelectronvolt', 'keV', 5, false),
        radioactive_decay: [
          {
            observed: true,
            decay_mode: 'n',
            weight: {
              value: 1,
              deviation: 0,
            },
            daughter_isotope: '6He',
          },
        ],
        spin_parity: [
          {
            spin: {
              value: '3/2',
              potentially_wrong: true,
              estimated: false,
            },
            parity: {
              value: '-',
              potentially_wrong: false,
              estimated: false,
            },
          },
        ],
        abundance: null,
      },
    ],
  },
  '8He': {
    element: 'He',
    search_name: 'Helium isotope 8',
    alternate_names: null,
    z: 2,
    n: 6,
    isotopic_mass: Measurment(8.03393439, 'dalton', 'Da', 10, false),
    observed: true,
    variations: [
      {
        name: '8He',
        observed: true,
        excitation_energy: Measurement(0, 'electronvolt', 'eV', 0, false),
        half_life: Measurment(119.5, 'millisecond', 'ms', 1.5, false),
        resonance_width: null,
        radioactive_decay: [
          {
            observed: true,
            decay_mode: '&beta;&#8315;',
            weight: {
              value: 0.831,
              deviation: 1,
            },
            daughter_isotope: '8Li',
          },
          {
            observed: true,
            decay_mode: '&beta;&#8315;n',
            weight: {
              value: 0.16,
              deviation: 1,
            },
            daughter_isotope: '7Li',
          },
          {
            observed: true,
            decay_mode: '&beta;&#8315;t',
            weight: {
              value: 0.009,
              deviation: 1,
            },
            daughter_isotope: '5He',
          },
        ],
        spin_parity: [
          {
            spin: {
              value: '0',
              potentially_wrong: false,
              estimated: false,
            },
            parity: {
              value: '+',
              potentially_wrong: false,
              estimated: false,
            },
          },
        ],
        abundance: null,
      },
    ],
  },
  '9He': {
    element: 'He',
    search_name: 'Helium isotope 9',
    alternate_names: null,
    z: 2,
    n: 7,
    isotopic_mass: Measurment(9.043950, 'dalton', 'Da', 50, false),
    observed: true,
    variations: [
      {
        name: '9He',
        observed: true,
        excitation_energy: Measurement(0, 'electronvolt', 'eV', 0, false),
        half_life: Measurment(2.5, 'zeptosecond', 'zs', 2.3, false),
        resonance_width: null,
        radioactive_decay: [
          {
            observed: true,
            decay_mode: 'n',
            weight: {
              value: 1,
              deviation: 0,
            },
            daughter_isotope: '8He',
          },
        ],
        spin_parity: [
          {
            spin: {
              value: '1/2',
              potentially_wrong: false,
              estimated: false,
            },
            parity: {
              value: '+',
              potentially_wrong: true,
              estimated: false,
            },
          },
        ],
        abundance: null,
      },
    ],
  },
  '10He': {
    element: 'He',
    search_name: 'Helium isotope 10',
    alternate_names: null,
    z: 2,
    n: 8,
    isotopic_mass: Measurment(10.05282, 'dalton', 'Da', 10, false),
    observed: true,
    variations: [
      {
        name: '10He',
        observed: true,
        excitation_energy: Measurement(0, 'electronvolt', 'eV', 0, false),
        half_life: Measurment(260, 'yectosecond', 'ys', 40, false),
        resonance_width: Measurment(1.76, 'megaelectronvolt', 'MeV', 27, false),
        radioactive_decay: [
          {
            observed: true,
            decay_mode: '2n',
            weight: {
              value: 1,
              deviation: 0,
            },
            daughter_isotope: '8He',
          },
        ],
        spin_parity: [
          {
            spin: {
              value: '0',
              potentially_wrong: false,
              estimated: false,
            },
            parity: {
              value: '+',
              potentially_wrong: false,
              estimated: false,
            },
          },
        ],
        abundance: null,
      },
    ],
  },
  '3Li': {
    element: 'Li',
    search_name: 'Lithium isotope 3',
    alternate_names: null,
    z: 3,
    n: 0,
    isotopic_mass: Measurment(3.03078, 'dalton', 'Da', 215, true),
    observed: false,
    variations: [
      {
        name: '3Li',
        observed: false,
        excitation_energy: Measurement(0, 'electronvolt', 'eV', 0, false),
        half_life: null,
        resonance_width: null,
        radioactive_decay: [
          {
            observed: false,
            decay_mode: 'p',
            weight: null,
            daughter_isotope: '2He',
          },
        ],
        spin_parity: [
          {
            spin: {
              value: '3/2',
              potentially_wrong: false,
              estimated: true,
            },
            parity: {
              value: '-',
              potentially_wrong: false,
              estimated: true,
            },
          },
        ],
        abundance: null,
      },
    ],
  },
  '4Li': {
    element: 'Li',
    search_name: 'Lithium isotope 4',
    alternate_names: null,
    z: 3,
    n: 1,
    isotopic_mass: Measurment(4.02719, 'dalton', 'Da', 23, false),
    observed: true,
    variations: [
      {
        name: '',
        observed: true,
        excitation_energy: Measurement(0, 'electronvolt', 'eV', 0, false),
        half_life: Measurment(91, 'yectosecond', 'ys', 9, false),
        resonance_width: Measurment(5.06, 'megaelectronvolt', 'MeV', 52, false),
        radioactive_decay: [
          {
            observed: true,
            decay_mode: 'p',
            weight: {
              value: 1,
              deviation: 0,
            },
            daughter_isotope: '3He',
          },
        ],
        spin_parity: [
          {
            spin: {
              value: '2',
              potentially_wrong: false,
              estimated: false,
            },
            parity: {
              value: '-',
              potentially_wrong: false,
              estimated: false,
            },
          },
        ],
        abundance: null,
      },
    ],
  },
  '5Li': {
    element: 'Li',
    search_name: 'Lithium isotope 5',
    alternate_names: null,
    z: 3,
    n: 2,
    isotopic_mass: Measurment(5.012540, 'dalton', 'Da', 50, false),
    observed: true,
    variations: [
      {
        name: '',
        observed: true,
        excitation_energy: Measurement(0, 'electronvolt', 'eV', 0, false),
        half_life: Measurment(370, 'yectosecond', 'ys', 30, false),
        resonance_width: Measurment(1.24, 'megaelectronvolt', 'MeV', 10, false),
        radioactive_decay: [
          {
            observed: true,
            decay_mode: 'p',
            weight: {
              value: 1,
              deviation: 0,
            },
            daughter_isotope: '4He',
          },
        ],
        spin_parity: [
          {
            spin: {
              value: '3/2',
              potentially_wrong: false,
              estimated: false,
            },
            parity: {
              value: '-',
              potentially_wrong: false,
              estimated: false,
            },
          },
        ],
        abundance: null,
      },
    ],
  },
  '6Li': {
    element: 'Li',
    search_name: 'Lithium isotope 6',
    alternate_names: null,
    z: 3,
    n: 3,
    isotopic_mass: Measurment(6.0151228874, 'dalton', 'Da', 15, false),
    observed: true,
    variations: [
      {
        name: '6Li',
        observed: true,
        excitation_energy: Measurement(0, 'electronvolt', 'eV', 0, false),
        half_life: 'Stable',
        resonance_width: null,
        radioactive_decay: null,
        spin_parity: [
          {
            spin: {
              value: '1',
              potentially_wrong: false,
              estimated: false,
            },
            parity: {
              value: '+',
              potentially_wrong: false,
              estimated: false,
            },
          },
        ],
        abundance: {
          normal: {
            value: 0.0759,
            deviation: 0,
          },
          min: 0.00019,
          max: 0.00078,
        },
      },
      {
        name: '6mLi',
        observed: true,
        excitation_energy: Measurment(3.56288, 'megaelectronvolt', 'MeV', 10, false),
        half_life: Measurment(56, 'attosecond', 'as', 14, false),
        resonance_width: null,
        radioactive_decay: [
          {
            observed: true,
            decay_mode: 'IT',
            weight: {
              value: 1,
              deviation: 0,
            },
            daughter_isotope: '6Li',
          },
        ],
        spin_parity: [
          {
            spin: {
              value: '0',
              potentially_wrong: false,
              estimated: false,
            },
            parity: {
              value: '+',
              potentially_wrong: false,
              estimated: false,
            },
          },
        ],
        abundance: null,
      },
    ],
  },
  '7Li': {
    element: 'Li',
    search_name: 'Lithium isotope 7',
    alternate_names: null,
    z: 3,
    n: 4,
    isotopic_mass: Measurment(7.016003434, 'dalton', 'Da', 4, false),
    observed: true,
    variations: [
      {
        name: '7Li',
        observed: true,
        excitation_energy: Measurement(0, 'electronvolt', 'eV', 0, false),
        half_life: 'Stable',
        resonance_width: null,
        radioactive_decay: null,
        spin_parity: [
          {
            spin: {
              value: '3/2',
              potentially_wrong: false,
              estimated: false,
            },
            parity: {
              value: '-',
              potentially_wrong: false,
              estimated: false,
            },
          },
        ],
        abundance: {
          normal: {
            value: 0.9241,
            deviation: 0,
          },
          min: 0.922,
          max: 0.981,
        },
      },
    ],
  },
  '8Li': {
    element: 'Li',
    search_name: 'Lithium isotope 8',
    alternate_names: null,
    z: 3,
    n: 5,
    isotopic_mass: Measurment(8.02248624, 'dalton', 'Da', 5, false),
    observed: true,
    variations: [
      {
        name: '8Li',
        observed: true,
        excitation_energy: Measurement(0, 'electronvolt', 'eV', 0, false),
        half_life: Measurment(838.7, 'millisecond', 'ms', 3, false),
        resonance_width: null,
        radioactive_decay: [
          {
            observed: true,
            decay_mode: '&beta;&#8315;',
            weight: {
              value: 1,
              deviation: 0,
            },
            daughter_isotope: '8Be',
          },
        ],
        spin_parity: [
          {
            spin: {
              value: '2',
              potentially_wrong: false,
              estimated: false,
            },
            parity: {
              value: '+',
              potentially_wrong: false,
              estimated: false,
            },
          },
        ],
        abundance: null,
      },
    ],
  },
  '9Li': {
    element: 'Li',
    search_name: 'Lithium isotope 9',
    alternate_names: null,
    z: 3,
    n: 6,
    isotopic_mass: Measurment(6.02679019, 'dalton', 'Da', 20, false),
    observed: true,
    variations: [
      {
        name: '9Li',
        observed: true,
        excitation_energy: Measurement(0, 'electronvolt', 'eV', 0, false),
        half_life: Measurment(178.2, 'millisecond', 'ms', 4, false),
        resonance_width: null,
        radioactive_decay: [
          {
            observed: true,
            decay_mode: '&beta;&#8315;n',
            weight: {
              value: 0.505,
              deviation: 1,
            },
            daughter_isotope: '8Be',
          },
          {
            observed: true,
            decay_mode: '&beta;&#8315;',
            weight: {
              value: 0.495,
              deviation: 1,
            },
            daughter_isotope: '9Be',
          },
        ],
        spin_parity: [
          {
            spin: {
              value: '3/2',
              potentially_wrong: false,
              estimated: false,
            },
            parity: {
              value: '-',
              potentially_wrong: false,
              estimated: false,
            },
          },
        ],
        abundance: normal,
      },
    ],
  },
  '10Li': {
    element: 'Li',
    search_name: 'Lithium isotope 10',
    alternate_names: null,
    z: 3,
    n: 7,
    isotopic_mass: Measurment(10.035483, 'dalton', 'Da', 14, false),
    observed: true,
    variations: [
      {
        name: '10Li',
        observed: true,
        excitation_energy: Measurement(0, 'electronvolt', 'eV', 0, false),
        half_life: Measurment(2, 'zeptosecond', 'zs', 5, false),
        resonance_width: Measurment(200, 'kiloelectronvolt', 'keV', 1.2, false),
        radioactive_decay: [
          {
            observed: true,
            decay_mode: 'n',
            weight: {
              value: 1,
              deviation: 0,
            },
            daughter_isotope: '9Li',
          },
        ],
        spin_parity: [
          {
            spin: {
              value: '1',
              potentially_wrong: true,
              estimated: false,
            },
            parity: {
              value: '-',
              potentially_wrong: false,
              estimated: false,
            },
          },
          {
            spin: {
              value: '2',
              potentially_wrong: true,
              estimated: false,
            },
            parity: {
              value: '-',
              potentially_wrong: false,
              estimated: false,
            },
          },
        ],
        abundance: null,
      },
      {
        name: '10m1Li',
        observed: true,
        excitation_energy: Measurment(200, 'kiloelectronvolt', 'keV', 40, false),
        half_life: Measurment(3.7, 'zeptosecond', 'zs', 1.5, false),
        resonance_width: null,
        radioactive_decay: [
          {
            observed: true,
            decay_mode: 'IT',
            weight: {
              value: 1,
              deviation: 0,
            },
            daughter_isotope: '10Li',
          },
        ],
        spin_parity: [
          {
            spin: {
              value: '1',
              potentially_wrong: false,
              estimated: false,
            },
            parity: {
              value: '+',
              potentially_wrong: false,
              estimated: false,
            },
          },
        ],
        abundance: null,
      },
      {
        name: '10m2Li',
        observed: true,
        excitation_energy: Measurment(480, 'kiloelectronvolt', 'keV', 40, false),
        half_life: Measurment(1.35, 'zeptosecond', 'zs', 24, false),
        resonance_width: Measurment(350, 'kiloelectronvolt', 'keV', 70, false),
        radioactive_decay: [
          {
            observed: true,
            decay_mode: 'IT',
            weight: {
              value: 1,
              deviation: 0,
            },
            daughter_isotope: '10m1Li',
          },
        ],
        spin_parity: [
          {
            spin: {
              value: '2',
              potentially_wrong: false,
              estimated: false,
            },
            parity: {
              value: '+',
              potentially_wrong: false,
              estimated: false,
            },
          },
        ],
        abundance: null,
      },
    ],
  },
  '11Li': {
    element: 'Li',
    search_name: 'Lithium isotope 11',
    alternate_names: null,
    z: 3,
    n: 8,
    isotopic_mass: Measurment(11.0437236, 'dalton', 'Da', 7, false),
    observed: true,
    variations: [
      {
        name: '11Li',
        observed: true,
        excitation_energy: Measurement(0, 'electronvolt', 'eV', 0, false),
        half_life: Measurment(8.75, 'millisecond', 'ms', 6, false),
        resonance_width: null,
        radioactive_decay: [
          {
            observed: true,
            decay_mode: '&beta;&#8315;n',
            weight: {
              value: 0.863,
              deviation: 9,
            },
            daughter_isotope: '10Be',
          },
          {
            observed: true,
            decay_mode: '&beta;&#8315;',
            weight: {
              value: 0.06,
              deviation: 1.0,
            },
            daughter_isotope: '11Be',
          },
          {
            observed: true,
            decay_mode: '&beta;&#8315;2n',
            weight: {
              value: 0.041,
              deviation: 4,
            },
            daughter_isotope: '9Be',
          },
          {
            observed: true,
            decay_mode: '&beta;&#8315;3n',
            weight: {
              value: 0.019,
              deviation: 2,
            },
            daughter_isotope: '8Be',
          },
          {
            observed: true,
            decay_mode: '&beta;&#8315;&alpha;',
            weight: {
              value: 0.017,
              deviation: 3,
            },
            daughter_isotope: '7He',
          },
          {
            observed: true,
            decay_mode: '&beta;&#8315;d',
            weight: {
              value: 0.000130,
              deviation: 13,
            },
            daughter_isotope: '9Li',
          },
          {
            observed: true,
            decay_mode: '&beta;&#8315;t',
            weight: {
              value: 0.000093,
              deviation: 8,
            },
            daughter_isotope: '8Li',
          },
        ],
        spin_parity: [
          {
            spin: {
              value: '3/2',
              potentially_wrong: false,
              estimated: false,
            },
            parity: {
              value: '-',
              potentially_wrong: false,
              estimated: false,
            },
          },
        ],
        abundance: null,
      },
    ],
  },
  '12Li': {
    element: '12Li',
    search_name: ' isotope #',
    alternate_names: null,
    z: 3,
    n: 9,
    isotopic_mass: Measurment(12.05378, 'dalton', 'Da', 107, true),
    observed: true,
    variations: [
      {
        name: '12Li',
        observed: true,
        excitation_energy: Measurement(0, 'electronvolt', 'eV', 0, false),
        half_life: Measurment(10, 'nanosecond', 'ns', '<', false),
        resonance_width: null,
        radioactive_decay: [
          {
            observed: false,
            decay_mode: 'n',
            weight: null,
            daughter_isotope: '11Li',
          },
        ],
        spin_parity: [
          {
            spin: {
              value: '1',
              potentially_wrong: true,
              estimated: false,
            },
            parity: {
              value: '-',
              potentially_wrong: false,
              estimated: false,
            },
          },
          {
            spin: {
              value: '2',
              potentially_wrong: true,
              estimated: false,
            },
            parity: {
              value: '-',
              potentially_wrong: false,
              estimated: false,
            },
          },
        ],
        abundance: null,
      },
    ],
  },
  '13Li': {
    element: 'Li',
    search_name: 'Lithium isotope 13',
    alternate_names: null,
    z: 3,
    n: 10,
    isotopic_mass: Measurment(13.061170, 'dalton', 'Da', 80, false),
    observed: true,
    variations: [
      {
        name: '13Li',
        observed: true,
        excitation_energy: Measurement(0, 'electronvolt', 'eV', 0, false),
        half_life: Measurment(value, 'fullUnit', 'unitAbbreviation', deviation, false),
        resonance_width: Measurment(value, 'electronvolt', 'eV', deviation, false),
        radioactive_decay: [
          {
            observed: true,
            decay_mode: '2n',
            weight: {
              value: 1,
              deviation: 0,
            },
            daughter_isotope: '11Li',
          },
        ],
        spin_parity: [
          {
            spin: {
              value: '3/2',
              potentially_wrong: false,
              estimated: true,
            },
            parity: {
              value: '-',
              potentially_wrong: false,
              estimated: true,
            },
          },
        ],
        abundance: null,
      },
    ],
  },
  '5Be': {
    element: 'Be',
    search_name: 'Beryllium isotope 5',
    alternate_names: null,
    z: 4,
    n: 1,
    isotopic_mass: Measurment(5.03987, 'dalton', 'Da', 215, true),
    observed: false,
    variations: [
      {
        name: '5Be',
        observed: false,
        excitation_energy: Measurment(0, 'electronvolt', 'eV', 0, false),
        half_life: null,
        resonance_width: null,
        radioactive_decay: [
          {
            observed: false,
            decay_mode: 'p',
            weight: null,
            daughter_isotope: '4Li',
          },
        ],
        spin_parity: [
          {
            spin: {
              value: '1/2',
              potentially_wrong: true,
              estimated: true,
            },
            parity: {
              value: '+',
              potentially_wrong: true,
              estimated: true,
            },
          },
        ],
        abundance: null,
      },
    ],
  },
  '6Be': {
    element: 'Be',
    search_name: 'Beryllium isotope 6',
    alternate_names: null,
    z: 4,
    n: 2,
    isotopic_mass: Measurment(6.019726, 'dalton', 'Da', 6, false),
    observed: true,
    variations: [
      {
        name: '6Be',
        observed: true,
        excitation_energy: Measurment(0, 'electronvolt', 'eV', 0, false),
        half_life: Measurment(5.0, 'zeptosecond', 'zs', 3, false),
        resonance_width: Measurment(91.6, 'kiloelectronvolt', 'keV', 5.6, false),
        radioactive_decay: [
          {
            observed: true,
            decay_mode: '2p',
            weight: {
              value: 1,
              deviation: 0,
            },
            daughter_isotope: '4He',
          },
        ],
        spin_parity: [
          {
            spin: {
              value: '0',
              potentially_wrong: false,
              estimated: false,
            },
            parity: {
              value: '+',
              potentially_wrong: false,
              estimated: false,
            },
          },
        ],
        abundance: null,
      },
    ],
  },
  '7Be': {
    element: 'Be',
    search_name: 'Beryllium isotope 7',
    alternate_names: null,
    z: 4,
    n: 3,
    isotopic_mass: Measurment(7.01692871, 'dalton', 'Da', 8, false),
    observed: true,
    variations: [
      {
        name: '7Be',
        observed: true,
        excitation_energy: Measurment(0, 'electronvolt', 'eV', 0, false),
        half_life: Measurment(53.22, 'day', 'd', 6, false),
        resonance_width: null,
        radioactive_decay: [
          {
            observed: true,
            decay_mode: '&epsilon;',
            weight: {
              value: 1,
              deviation: 0,
            },
            daughter_isotope: '7Li',
          },
        ],
        spin_parity: [
          {
            spin: {
              value: '0',
              potentially_wrong: false,
              estimated: false,
            },
            parity: {
              value: '+',
              potentially_wrong: false,
              estimated: false,
            },
          },
        ],
        abundance: 'Trace',
      },
    ],
  },
  '8Be': {
    element: 'Be',
    search_name: 'Beryllium isotope 8',
    alternate_names: null,
    z: 4,
    n: 4,
    isotopic_mass: Measurment(8.00530510, 'dalton', 'Da', 4, false),
    observed: true,
    variations: [
      {
        name: '8Be',
        observed: true,
        excitation_energy: Measurment(0, 'electronvolt', 'eV', 0, false),
        half_life: Measurment(81.9, 'attosecond', 'as', 3.7, false),
        resonance_width: Measurment(5.58, 'electronvolt', 'eV', 25, false),
        radioactive_decay: [
          {
            observed: true,
            decay_mode: '&alpha;',
            weight: {
              value: 1,
              deviation: 0,
            },
            daughter_isotope: '4He',
          },
        ],
        spin_parity: [
          {
            spin: {
              value: '0',
              potentially_wrong: false,
              estimated: false,
            },
            parity: {
              value: '+',
              potentially_wrong: false,
              estimated: false,
            },
          },
        ],
        abundance: null,
      },
      {
        name: '8m1Be',
        observed: false,
        excitation_energy: Measurment(2.9, 'megaelectronvolt', 'MeV', '~', true),
        half_life: Measurment(67, 'fs', 'femtosecond', '~', true),
        resonance_width: null,
        radioactive_decay: [
          {
            observed: false,
            decay_mode: 'IT',
            weight: null,
            daughter_isotope: '8Be',
          },
          {
            observed: false,
            decay_mode: '&alpha;',
            weight: null,
            daughter_isotope: '4He',
          },
        ],
        spin_parity: [
          {
            spin: {
              value: '1',
              potentially_wrong: true,
              estimated: true,
            },
            parity: {
              value: '+',
              potentially_wrong: true,
              estimated: true,
            },
          },
        ],
        abundance: null,
      },
      {
        name: '8m2Be',
        observed: false,
        excitation_energy: Measurment(16.626, 'megaelectronvolt', 'MeV', 3, true),
        half_life: Measurment(1, 'fs', 'femtosecond', '~', true),
        resonance_width: null,
        radioactive_decay: [
          {
            observed: false,
            decay_mode: 'IT',
            weight: null,
            daughter_isotope: '8m1Be',
          },
          {
            observed: false,
            decay_mode: '&alpha;',
            weight: null,
            daughter_isotope: '4He',
          },
        ],
        spin_parity: [
          {
            spin: {
              value: '2',
              potentially_wrong: true,
              estimated: true,
            },
            parity: {
              value: '+',
              potentially_wrong: true,
              estimated: true,
            },
          },
        ],
        abundance: null,
      },
    ],
  },
  '9Be': {
    element: 'Be',
    search_name: 'Beryllium isotope 9',
    alternate_names: null,
    z: 4,
    n: 5,
    isotopic_mass: Measurment(9.01218306, 'dalton', 'Da', 8, false),
    observed: true,
    variations: [
      {
        name: '9Be',
        observed: true,
        excitation_energy: Measurment(0, 'electronvolt', 'eV', 0, false),
        half_life: 'Stable',
        resonance_width: null,
        radioactive_decay: null,
        spin_parity: [
          {
            spin: {
              value: '3/2',
              potentially_wrong: false,
              estimated: false,
            },
            parity: {
              value: '-',
              potentially_wrong: false,
              estimated: false,
            },
          },
        ],
        abundance: {
          normal: {
            value: 1,
            deviation: 0,
          },
          min: 1,
          max: 1,
        },
      },
      {
        name: '9mBe',
        observed: true,
        excitation_energy: Measurment(14.3903, 'megaelectronvolt', 'MeV', 1.7, false),
        half_life: Measurment(1.25, 'attosecond', 'as', 10, false),
        resonance_width: Measurment(367, 'electronvolt', 'eV', 30, false),
        radioactive_decay: [
          {
            observed: true,
            decay_mode: 'IT',
            weight: {
              value: 1,
              deviation: 0,
            },
            daughter_isotope: '9Be',
          },
        ],
        spin_parity: [
          {
            spin: {
              value: '3/2',
              potentially_wrong: false,
              estimated: false,
            },
            parity: {
              value: '-',
              potentially_wrong: false,
              estimated: false,
            },
          },
        ],
        abundance: null,
      },
    ],
  },
  '10Be': {
    element: 'Be',
    search_name: 'Beryllium isotope 10',
    alternate_names: null,
    z: 4,
    n: 6,
    isotopic_mass: Measurment(10.01354369, 'dalton', 'Da', 9, false),
    observed: true,
    variations: [
      {
        name: '10Be',
        observed: true,
        excitation_energy: Measurment(0, 'electronvolt', 'eV', 0, false),
        half_life: Measurment(value, 'fullUnit', 'unitAbbreviation', deviation, false),
        resonance_width: Measurment(value, 'electronvolt', 'eV', deviation, false),
        radioactive_decay: [
          {
            observed: true,
            decay_mode: '&beta;&#8315;',
            weight: {
              value: 1,
              deviation: 0,
            },
            daughter_isotope: '10B',
          },
        ],
        spin_parity: [
          {
            spin: {
              value: '0',
              potentially_wrong: false,
              estimated: false,
            },
            parity: {
              value: '+',
              potentially_wrong: false,
              estimated: false,
            },
          },
        ],
        abundance: 'Trace',
      },
    ],
  },
};

/*
  'Be': {
    element: 'Be',
    search_name: 'Beryllium isotope ',
    alternate_names: null,
    z: 4,
    n: #,
    isotopic_mass: Measurment(value, 'dalton', 'Da', deviation, false),
    observed: true,
    variations: [
      {
        name: 'Be',
        observed: true,
        excitation_energy: Measurment(0, 'electronvolt', 'eV', 0, false),
        half_life: Measurment(value, 'fullUnit', 'unitAbbreviation', deviation, false),
        resonance_width: Measurment(value, 'electronvolt', 'eV', deviation, false),
        radioactive_decay: [
          {
            observed: true,
            decay_mode: '',
            weight: {
              value: 1,
              deviation: 0,
            },
            daughter_isotope: '',
          },
        ],
        spin_parity: [
          {
            spin: {
              value: '',
              potentially_wrong: false,
              estimated: false,
            },
            parity: {
              value: '+-',
              potentially_wrong: false,
              estimated: false,
            },
          },
        ],
        abundance: {
          normal: {
            value: 0.#,
            deviation: #,
          },
          min: 0.#,
          max: 0.#,
        },
      },
    ],
  },
*/