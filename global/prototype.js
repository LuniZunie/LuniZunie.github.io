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
  ].forEach(prototype => {
    if (object === Object) {
      object.prototype[`_${prototype}`] = function(...parameters) {
        return Object.entries(this)[prototype](...parameters);
      };

      object.prototype[`k_${prototype}`] = function(...parameters) {
        return Object.key(this)[prototype](...parameters);
      };

      object.prototype[`v_${prototype}`] = function(...parameters) {
        return Object.values(this)[prototype](...parameters);
      };

      object.prototype[`_$${prototype}`] = function(...parameters) {
        return Object.fromEntries(Object.entries(this)[prototype](...parameters));
      };

      object.prototype[`k_$${prototype}`] = function(...parameters) {
        return Object.fromEntries(Object.key(this)[prototype](...parameters));
      };

      object.prototype[`v_$${prototype}`] = function(...parameters) {
        return Object.fromEntries(Object.values(this)[prototype](...parameters));
      };
    } else
      object.prototype[prototype] = function(...parameters) {
        return [ ...this ][prototype](...parameters);
      };
  });
});

/**
 * OTHER FUNCTIONS
 */

function For(Function, amount, ...parameters) {
  for (let a = 0;a < amount;a++)
    Function.call(this, a, ...parameters);
}

/**
 * UPDATE
 */

const Update = {
  fixed: [],
  loose: [],
};

function _looseUpdate() {
  Update.loose.forEach(
    Function => Function()
  );

  requestIdleCallback(_looseUpdate);
}
requestIdleCallback(_looseUpdate);

function _fixedUpdate() {
  Update.fixed.forEach(
    Function => Function()
  );

  requestAnimationFrame(_fixedUpdate);
}
requestAnimationFrame(_fixedUpdate);

function LooseUpdate(Function) {
  Update.loose.push(Function);
}

function FixedUpdate(Function) {
  Update.fixed.push(Function);
}