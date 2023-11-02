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
 * DECLARATIONS
 */

const { body, documentElement: doc } = document;
const root = document.querySelector(':root');

/**
 * EVENT LISTENER
 */

const Mouse = {};
addEventListener('mousemove', e => {
  Mouse.x = e.pageX;
  Mouse.y = e.pageY;
});

/**
 * UPDATE
 */

const Update = {
  fixed: [],
  loose: [],
};

function _looseUpdate() {
  Update.loose.forEach(
    ({ _function, _this }) => _function.call(_this)
  );

  requestIdleCallback(_looseUpdate);
}
requestIdleCallback(_looseUpdate);

function _fixedUpdate() {
  Update.fixed.forEach(
    ({ _function, _this }) => _function.call(_this)
  );

  requestAnimationFrame(_fixedUpdate);
}
requestAnimationFrame(_fixedUpdate);

function LooseUpdate(_function) {
  Update.loose.push({ _function: _function, _this: this });
}

function FixedUpdate(_function) {
  Update.loose.push({ _function: _function, _this: this });
}

/**
 * LINKS
 */

LooseUpdate(function() {
  doc.qsa('span[href]').forEach(span => {
    span.style.cursor = 'pointer';
    span.onclick = function() {
      window.open(this.getAttribute('href'), this.getAttribute('target'));
    }
  });
});

FixedUpdate(function() {
  doc.qsa('.hash.false_hidden:not([data-false-hidden])').forEach(
    element => element.dataset.falseHidden = true
  );

  doc.qsa('.hash[data-false-hidden]:not(.false_hidden)').forEach(
    element => delete element.dataset.falseHidden
  );

  const hash = doc.qsa('.hash:not(.hidden, .falseHidden)').map(
    (element) => element.id
  ).join(',');

  location.hash = hash ?? '';
});

addEventListener('hashchange', function(event) {
  const hashes = event.newURL.replace(location.origin + location.pathname, '').replace('#', '').split(',');
  doc.qsa('.hash').forEach(
    element => element.classList[hashes.includes(element.id) ? 'remove' : 'add'](element.dataset.falseHidden ? 'falseHidden' : 'hidden')
  );
});