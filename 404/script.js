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
 * PAGES
*/

const pages = {
  '/pages/projects/periodic-table/': [
    '/periodictable',
    '/pdtable',
    '/ptable',
    '/pdt',
    '/pd',
    '/pt',
  ],
};

const pageReference = {};
pages._forEach(([ file, links ]) => {
  links.concat(file).forEach(
    link => pageReference[link.replace(/-/g, '').toLowerCase()] = file
  );
});

addEventListener('load', function() {
  const path = location.pathname.replace(/-/g, '').toLowerCase();
  const page = pageReference[path];
  if (!page) {
    window.open('/', '_self');
    return;
  }

  const destination = pages[page][0];
  if (path != destination.replace(/-/g, '').toLowerCase()) {
    window.open(destination, '_self');
    return;
  }

  if (page)
    fetch(page).then(() => {
      const iframe = document.querySelector('iframe') ?? document.body.appendChild('iframe');
      iframe.src = page;

      const title = document.querySelector('title') ?? document.body.appendChild('title');
      title.innerHTML = frames[0].document.querySelector('title')?.innerHTML ?? destination;
    }).catch(
      error => console.error(error, 'fecth_error')
    );
});