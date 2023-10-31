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
 * HASH
 */

FixedUpdate(function() {
  document.querySelectorAll('.hash.false_hidden:not([data-false-hidden])').forEach(
    element => element.dataset.falseHidden = true
  );

  document.querySelectorAll('.hash[data-false-hidden]:not(.false_hidden)').forEach(
    element => delete element.dataset.falseHidden
  );

  const hash = document.querySelectorAll('.hash:not(.hidden, .false_hidden)').map(
    (element) => element.id
  ).join(',');

  location.hash = hash ?? '';
});

addEventListener('hashchange', function(event) {
  const hashes = event.newURL.replace(location.origin + location.pathname, '').replace('#', '').split(',');
  document.querySelectorAll('.hash').forEach(
    element => element.classList[hashes.includes(element.id) ? 'remove' : 'add'](element.dataset.falseHidden ? 'false_hidden' : 'hidden')
  );
});