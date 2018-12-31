/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html } from "@polymer/lit-element";
import { PageViewElement } from "./page-view-element.js";
import { SharedStyles } from "./shared-styles.js";

class Home extends PageViewElement {
  render() {
    return html`
      ${SharedStyles}
      <section id="walk-across-america">
        <h2>Walk Across America</h2>
        <p>
          I'll be walking soon to a town near you. Follow me on Twitter to stay
          updated.
        </p>
        <picture>
          <!-- Uses WebP Format when available with fallback on JPG for older browsers -->
          <source srcset="images/posner.webp" type="image/webp" />
          <source srcset="images/posner.jpg" type="image/jpeg" />
          <img width="100%" src="images/posner.jpg" alt="Logo" />
        </picture>
      </section>
    `;
  }
}

window.customElements.define("my-view1", Home);
