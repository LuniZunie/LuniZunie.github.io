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
 * DECLARATION
 */
let menuBarY = 0;

/**
 * ELEMENT DECLARATION
 */
const topNav = doc.qs('#top_nav');
const menuBar = doc.qs('#menu_bar');

/**
 * SCRIPT
 */

topNav.qsa('h1 > span').forEach((span, index) => {
  span.addEventListener('mouseenter', function() {
    menuBarY = index;
  });
});

addEventListener('wheel', function(event) {
  menuBarY = (menuBarY + Math.sign(event?.deltaY)).clamp(0, 3) || 0;
});

FixedUpdate(function() {
  const { top, bottom } = doc.qsa('h1')[menuBarY].getBoundingClientRect();
  menuBar.style.top = `${(top + bottom) / 2}px`;
});