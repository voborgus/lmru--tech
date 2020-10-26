/*
 * Copyright 2018 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

(function ($) {
    'use strict';

    // Headers' anchor link that shows on hover
    $(function () {
        // append anchor links to headings in markdown.
        var article = document.getElementsByTagName('main')[0];
        if (!article) {
            return;
        }
        
        var headings = article.querySelectorAll('h1, h2, h3, h4, h5, h6');
        headings.forEach(function (heading) {
            if (heading.id) {
                var a = document.createElement('a');
                // set visibility: hidden, not display: none to avoid layout change
                a.style.visibility = 'hidden';
                // [a11y] hide this from screen readers, etc..
                a.setAttribute('aria-hidden', 'true');
                // material insert_link icon in svg format
                a.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>';
                a.href = '#' + heading.id;
                heading.insertAdjacentElement('beforeend', a);

                heading.addEventListener('mouseenter', function () {
                    a.style.visibility = 'initial';
                });
                heading.addEventListener('mouseleave', function () {
                    a.style.visibility = 'hidden';
                });

                if (location.href.match(/\/values\//) && heading.tagName == "H3" && !getCookie(heading.id)) {
                    var b = document.createElement('b');
                    var c = document.createElement('b');
                    b.style.visibility = 'hidden';
                    c.style.visibility = 'hidden';
                    b.style.cursor = 'pointer';
                    c.style.cursor = 'pointer';
                    b.setAttribute('aria-hidden', 'true');
                    c.setAttribute('aria-hidden', 'true');
                    $(b).tooltip({'title': 'Полезная ценность, поддерживаю', 'placement': 'bottom'});
                    $(c).tooltip({'title': 'Бесполезная ценность, давайте выпилим', 'placement': 'bottom'});
                    b.classList.add("ml-2")
                    c.classList.add("ml-1")
                    b.classList.add("reactions")
                    c.classList.add("reactions")
                    b.innerHTML = '🔥';
                    c.innerHTML = '💩';
                    
                    b.addEventListener('click', function() {
                        $('#emotions').toast('show');
                        $('#' + heading.id + ' b').hide();
                        setCookie(heading.id, "Yes", 365);
                        dataLayer.push({
                            'event': 'LeroyMerlin_new',
                            'eventAction': 'click',
                            'eventCategory': 'Interactions',
                            'eventLabel': 'emotions',
                            'eventLocation': document.location.pathname, 
                            'eventContent': 'Yes', 
                            'eventContext': heading.id
                            });
                    })

                    c.addEventListener('click', function() {
                        $('#emotions').toast('show');
                        $('#' + heading.id + ' b').hide();
                        setCookie(heading.id, "No", 365);
                        dataLayer.push({
                            'event': 'LeroyMerlin_new',
                            'eventAction': 'click',
                            'eventCategory': 'Interactions',
                            'eventLabel': 'emotions',
                            'eventLocation': document.location.pathname, 
                            'eventContent': 'No', 
                            'eventContext': heading.id
                            });
                    })

                    heading.insertAdjacentElement('beforeend', b);
                    heading.insertAdjacentElement('beforeend', c);
    
                    heading.addEventListener('mouseenter', function () {
                        b.style.visibility = 'initial';
                        c.style.visibility = 'initial';
                    });
                    heading.addEventListener('mouseleave', function () {
                        b.style.visibility = 'hidden';
                        c.style.visibility = 'hidden';
                    });
                }
            }
        });
    });

}(jQuery));
