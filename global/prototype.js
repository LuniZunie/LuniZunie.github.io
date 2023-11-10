/*
  Copyright 2023 LuniZunie

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

/**
 * PROTOTYPES
 */

/**
 * PROTOTYPES
 */

[ NodeList, HTMLCollection, DOMTokenList, Object ].forEach(object => {
  [
    'at',
    'concat',
    'copyWithin',
    'entries',
    'every',
    'fill',
    'filter',
    'find',
    'findIndex',
    'flat',
    'flatMap',
    'forEach',
    'from',
    'includes',
    'indexOf',
    'join',
    'keys',
    'lastIndexOf',
    'map',
    'pop',
    'push',
    'reduce',
    'reduceRight',
    'reverse',
    'shift',
    'some',
    'sort',
    'splice',
    'toString',
    'unshift',
    'valueOf',
    { prototype: 'array', type: 1 },
  ].forEach(prototype => {
    if (object === Object) {
      if (prototype?.type === 1) {
        Object.defineProperty(object.prototype, `_${prototype.prototype}`, {
          enumerable: false,
          value: function() {
            return Object.entries(this);
          }
        });

        Object.defineProperty(object.prototype, `k_${prototype}`, {
          enumerable: false,
          value: function() {
            return Object.keys(this);
          }
        });

        Object.defineProperty(object.prototype, `v_${prototype}`, {
          enumerable: false,
          value: function() {
            return Object.values(this);
          }
        });
      } else {
        Object.defineProperty(object.prototype, `_${prototype}`, {
          enumerable: false,
          value: function(...parameters) {
            return Object.entries(this)[prototype](...parameters);
          }
        });

        Object.defineProperty(object.prototype, `k_${prototype}`, {
          enumerable: false,
          value: function(...parameters) {
            return Object.keys(this)[prototype](...parameters);
          }
        });

        Object.defineProperty(object.prototype, `v_${prototype}`, {
          enumerable: false,
          value: function(...parameters) {
            return Object.values(this)[prototype](...parameters);
          }
        });

        Object.defineProperty(object.prototype, `_$${prototype}`, {
          enumerable: false,
          value: function(...parameters) {
            return Object.fromEntries(Object.entries(this)[prototype](...parameters));
          }
        });

        Object.defineProperty(object.prototype, `k_$${prototype}`, {
          enumerable: false,
          value: function(...parameters) {
            return Object.fromEntries(Object.keys(this)[prototype](...parameters));
          }
        });

        Object.defineProperty(object.prototype, `v_$${prototype}`, {
          enumerable: false,
          value: function(...parameters) {
            return Object.fromEntries(Object.values(this)[prototype](...parameters));
          }
        });
      }
    } else if (prototype?.type === 1)
      Object.defineProperty(object.prototype, prototype.prototype, {
        enumerable: false,
        value: function() {
          return [ ...this ];
        }
      });
    else
      Object.defineProperty(object.prototype, prototype, {
        enumerable: false,
        value: function(...parameters) {
          return [ ...this ][prototype](...parameters);
        }
      });
  });
});

Object.defineProperty(Object.prototype, '_length', {
  enumerable: false,
  value: function() {
    return Object.keys(this).length;
  }
});

Math.avg = function(...nums) {
	return nums.reduce(
		(sum, value) => +sum + +value
	) / nums.length;
};

Math.absMax = function(...numbers) {
  return numbers.reduce(
    (max, number) => Math.abs(number) > Math.abs(max) ? number : max
  );
};
Math.absMin = function(...numbers) {
  return numbers.reduce(
    (min, number) => Math.abs(number) < Math.abs(min) ? number : min
  );
};

Number.isFloat = function(num) {
	return Number.isFinite(num) && !Number.isInteger(num);
};

Object.defineProperty(Number.prototype, 'min', {
  enumerable: false,
  value: function(min) {
    return Math.min(this, min);
  }
});
Object.defineProperty(Number.prototype, 'max', {
  enumerable: false,
  value: function(max) {
    return Math.max(this, max);
  }
});
Object.defineProperty(Number.prototype, 'clamp', {
  enumerable: false,
  value: function(min = -Infinity, max = Infinity) {
    return Math.max(Math.min(this, max), min);
  }
});
Object.defineProperty(Number.prototype, 'toPercent', {
  enumerable: false,
  value: function(percentOf = 1, decimal = Infinity) {
    return (this / percentOf).toDecimals(decimal);
  }
});
Object.defineProperty(Number.prototype, 'toDecimals', {
  enumerable: false,
  value: function(decimals = Infinity) {
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
  }
});
Object.defineProperty(Number.prototype, 'noExponents', {
  enumerable: false,
  value: function() {
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
  }
});

Object.defineProperty(String.prototype, 'reverse', {
  enumerable: false,
  value: function() {
    return this.split('').reverse().join('');
  }
});
Object.defineProperty(String.prototype, 'toUpperCaseWords', {
  enumerable: false,
  value: function() {
    return this.split(' ').map(
      word => word[0].toUpperCase() + word.slice(1, Infinity)
    ).join(' ');
  }
});
Object.defineProperty(String.prototype, 'padLeft', {
  enumerable: false,
  value: function(char, number) {
    if (!Number.isInteger(number))
      throw `(String, prototype, padLeft) Unexpected data passed to parameter_1 (number)!<br><br>Expected: Integer<br>Passed: ${number}`;

    let string = this;
    for (let a = 0;a < number;a++)
      string = char + string;

    return string;
  }
});
Object.defineProperty(String.prototype, 'padRight', {
  enumerable: false,
  value: function(char, number) {
    let string = this;
    for (let a = 0;a < number;a++)
      string + char

    return string;
  }
});
Object.defineProperty(String.prototype, 'join', {
  enumerable: false,
  value: function(join) {
    if ([ null, undefined ].includes(join))
      return this;

    return this.split('').join(join.toString());
  }
});
Object.defineProperty(String.prototype, 'toNumber', {
  enumerable: false,
  value: function(base) { //base values above 36 use UNICODE values 0 -> base AND become case sensitive
    const maxBase = 0x200;

    if (!(Number.isInteger(base) || base === null || base === undefined) || base < 2 || base > maxBase)
      throw StandardBadDataError([ 'String', 'toNumber' ], 0, 'base', 'integer between [2, ${maxBase}]', base);

    if (base > 36 || !base) {
      const baseChars = Array.from({ length: base ?? maxBase }, (_, i) => String.fromCharCode(i));

      let trueBase = 0;
      const validBase = this.split('').every(char => {
        const index = baseChars.indexOf(char) + 1;
        trueBase = trueBase.max(index);

        return index;
      });
      base ??= trueBase;

      if (!validBase || base > maxBase)
        throw `(String, toNumber) cannot convert string to valid number!`;

      return this.split('').map(
        char => baseChars.indexOf(char)
      ).reduce(
        (sum, value, index, array) => sum + value * base ** (array.length - index - 1), 0
      );
    } else {
      const baseChars = Array.from({ length: base ?? 36 }, (_, i) => i < 10 ? i.toString() : String.fromCharCode(i + 87));

      let trueBase = 0;
      const validBase = this.toLowerCase().split('').every(char => {
        const index = baseChars.indexOf(char) + 1;
        trueBase = trueBase.max(index);

        return index;
      });

      if (!validBase)
        throw `(String, toNumber) cannot convert string to valid number!`;

      return parseInt(this, base ?? trueBase.max(2));
    }
  }
});
Object.defineProperty(String.prototype, 'toLength', {
  enumerable: false,
  value: function(targetLength, fill = ' ', fromLeft = true) {
    const length = this.length;
    if (length === targetLength)
      return this;
    else if (length > targetLength)
      return fromLeft ? this.slice(0, targetLength) : this.slice(~targetLength + 1);
    else {
      const newString = this.split('');
      Array.from({ length: targetLength - length }, () => {
        if (fromLeft)
          newString.unshift(fill);
        else
          newString.push(fill);
      });
      return newString.join('');
    }
  }
});

Object.defineProperty(Array.prototype, 'random', {
  enumerable: false,
  value: function(remove) {
    if (remove) {
      const i = Math.floor(Math.random() * this.length);
      return (this.splice(i, 1))[0];
    } else
      return this[Math.floor(Math.random() * this.length)];
  }
});
Object.defineProperty(Array.prototype, 'min', {
  enumerable: false,
  value: function() {
    return Math.min(...this);
  }
});
Object.defineProperty(Array.prototype, 'max', {
  enumerable: false,
  value: max = function() {
    return Math.max(...this);
  }
});
Object.defineProperty(Array.prototype, 'sum', {
  enumerable: false,
  value: function() {
    return this.reduce(
      (sum, value) => sum + value,
    0);
  }
});
Object.defineProperty(Array.prototype, 'avg', {
  enumerable: false,
  value: function() {
    return this.reduce(
      (sum, value) => sum + value,
    0) / this.length;
  }
});
Object.defineProperty(Array.prototype, 'clamp', {
  enumerable: false,
  value: function() {
    const min = Math.min(...this);
    const max = Math.max(...this);

    return this.map(
      value => (value - min) / (max - min)
    );
  }
});
Object.defineProperty(Array.prototype, 'shuffle', {
  enumerable: false,
  value: function() {
    for (let i = this.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = this[i];
        this[i] = this[j];
        this[j] = temp;
    }

    return this;
  }
});
Object.defineProperty(Array.prototype, 'contains', {
  enumerable: false,
  value: function(needle) {
    return this.some(
      value => value == needle
    );
  }
});

Object.defineProperty(Object.prototype, '_order', {
  enumerable: false,
  value: function() {
    const valueRef = Object.entries(this).reduce((ref, [ k, v ]) => {
      if (ref[v])
        ref[v].push(k);
      else
        ref[v] = [k];

      return ref;
    }, {});

    return Object.values(this).sort().reduce((object, v) => {
      valueRef[v].sort().forEach(k =>
        object[k] = this[k]
      );

      return object;
    }, {});
  }
});

Object.defineProperty(Document.prototype, 'template', {
  enumerable: false,
  value: function(options, addToParent = true) {
    const elements = [ options ].flat(Infinity).map(option => {
      let template;
      if (options instanceof Element)
        return option;
      else if (typeof options === 'string')
        return [ ...this.querySelectorAll(`${options}.template`) ];
      else if (options.id) {
        template = this.getElementById(options.id);
        if (template?.classList?.contains('template'))
          return template;
      } else if (options.class)
        return this.getElementsByClassName(`${options.class} template`).array();
      else if (options.tagName)
        return this.getElementsByTagName(options.tagName).array().filter(
          template => template.classList.contains('template')
        );
    }).flat(Infinity).filter(
      template => template instanceof Element
    ).map(template => {
      const element = template.cloneNode(true);
      element.classList.remove('template');

      if (addToParent)
        template.parentElement.appendChild(element, template.nextElementSibling);

      return element;
    });

    return elements.length == 1 ? elements[0] : elements;
  }
});

[ Element ].forEach(object => {
  Object.defineProperty(object.prototype, 'rect', {
    enumerable: false,
    value: Element.prototype.getBoundingClientRect
  });
  Object.defineProperty(object.prototype, 'qs', {
    enumerable: false,
    value: Element.prototype.querySelector
  });
  Object.defineProperty(object.prototype, 'qsa', {
    enumerable: false,
    value: Element.prototype.querySelectorAll
  });
  Object.defineProperty(object.prototype, 'template', {
    enumerable: false,
    value: function(options, addToParent = true) {
      const elements = [ options ].flat(Infinity).map(option => {
        let template;
        if (options instanceof Element)
          return option;
        else if (typeof options === 'string')
          return this.querySelectorAll(`${options}.template`).array();
        else if (options.id) {
          template = this.getElementById(options.id);
          if (template?.classList?.contains('template'))
            return template;
        } else if (options.class)
          return this.getElementsByClassName(`${options.class} template`).array();
        else if (options.tagName)
          return this.getElementsByTagName(options.tagName).array().filter(
            template => template.classList.contains('template')
          );
      }).flat(Infinity).filter(
        template => template instanceof Element
      ).map(template => {
        const element = template.cloneNode(true);
        element.classList.remove('template');

        if (addToParent)
          this.appendChild(element, template.nextElementSibling);

        return element;
      });

      return elements.length == 1 ? elements[0] : elements;
    }
  });
  Object.defineProperty(object.prototype, 'prependChild', {
    enumerable: false,
    value: function(element, target = 0) {
      target ??= 0;
      if (!(element instanceof Element)) {
        if (typeof element === 'string')
          element = document.createElement(element);
        else
          throw 'Bad Element Passed';
      }

      if (target instanceof Element) {
        if (target.parentNode.isEqualNode(this))
          this.insertBefore(element, target);
        else
          console.error('Incorrect target level');
      } else if (Number.isInteger(target) || target === Infinity || target === -Infinity) {
        if (target >>> 31 || target === -Infinity)
          this.insertBefore(element, this.childNodes[(this.childNodes.length + target + 1).clamp(0)]);
        else
          this.insertBefore(element, this.childNodes[target.clamp(null, this.childNodes.length - 1)]);
      }

      return element;
    }
  });
  Object.defineProperty(object.prototype, 'appendChild', {
    enumerable: false,
    value: function(element, target = Infinity) {
      target ??= Infinity;
      if (!(element instanceof Element)) {
        if (typeof element === 'string')
          element = document.createElement(element);
        else
          throw 'Bad Element Passed';
      }

      if (target instanceof Element) {
        if (target.parentNode.isEqualNode(this))
          this.insertBefore(element, this.childNodes[[].indexOf.call(target.parentNode.childNodes, target) + 1]);
        else
          console.error('Incorrect target level');
      } else if (Number.isInteger(target) || target === Infinity || target === -Infinity) {
        if (target >>> 31 || target === -Infinity)
          this.insertBefore(element, this.childNodes[(this.childNodes.length + ++target).clamp(0)]);
        else
          this.insertBefore(element, this.childNodes[(++target).clamp(null, this.childNodes.length)]);
      }

      return element;
    }
  });
  Object.defineProperty(object.prototype, 'insertChild', {
    enumerable: false,
    value: function(element, target = 0) {
      target ??= 0;
      if (!(element instanceof Element)) {
        if (typeof element === 'string')
          element = document.createElement(element);
        else
          throw 'Bad Element Passed';
      }

      if (target instanceof Element) {
        if (target.parentNode.isEqualNode(this))
          this.replaceChild(element, target);
        else
          console.error('Incorrect target level');
      } else if (Number.isInteger(target) || target === Infinity || target === -Infinity) {
        if (target >>> 31 || target === -Infinity)
          this.insertBefore(element, this.childNodes[(this.childNodes.length + ++target).clamp(0)]);
        else
          this.insertBefore(element, this.childNodes[target.clamp(null, this.childNodes.length)]);
      }

      return element;
    }
  });
  Object.defineProperty(object.prototype, 'childIndex', {
    enumerable: false,
    value: function() {
      return [].indexOf.call(this.parentNode.children, this);
    }
  });
});

/**
 * OTHER FUNCTIONS
 */

function For(function_, length, ...parameters) {
  if (length instanceof Object && !(length instanceof Array || length === null || length === undefined))
    length = amount._length();
  else if (typeof length !== 'number')
    length = amount.length;

  const array = [];
  for (let a = 0;a < length;a++)
    try {
      array.push(function_ instanceof Function ? function_.call(this, a, ...parameters) : function_);
    } catch(error) {
      array.push(error);
    };

  return array;
}