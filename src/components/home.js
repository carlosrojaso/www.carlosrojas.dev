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
      <style>
        #walk-across-america {
          background: map;
        }

        .listening-options {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
        }

        .listening-options .apple-music {
          margin-right: 24px;
        }

        .listening-options .spotify {
          margin-left: 24px;
        }

        @media (max-width: 460px) {
          .listening-options .option {
            margin: 0;
          }
        }
      </style>
      <section id="walk-across-america">
        <div class="container">
          <h2>Walk Across America</h2>
          <p>
            Catch me outside! I'll be walking to a town near you. Follow me on
            Twitter to stay updated.
          </p>
          <picture>
            <!-- Uses WebP Format when available with fallback on JPG for older browsers -->
            <source srcset="images/posner.webp" type="image/webp" />
            <source srcset="images/posner.jpg" type="image/jpeg" />
            <img width="100%" src="images/posner.jpg" alt="Logo" />
          </picture>
        </div>
      </section>
      <section id="listen">
        <div class="container">
          <h2>Listen</h2>
          <div class="listening-options">
            <div class="option apple-music">
              <h3>Apple Music</h3>
              <iframe
                allow="autoplay *; encrypted-media *;"
                frameborder="0"
                height="380"
                style="width:100%;max-width:300px;overflow:hidden;background:transparent;"
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                src="https://embed.music.apple.com/us/album/a-real-good-kid/1443035104?app=music"
              ></iframe>
            </div>
            <div class="option spotify">
              <h3>Spotify</h3>
              <iframe
                src="https://open.spotify.com/embed/user/officialmikeposner/playlist/0CQgU6sHvsuglnOKlpP9Jz"
                width="300"
                height="380"
                frameborder="0"
                allowtransparency="true"
                allow="encrypted-media"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

window.customElements.define("my-home", Home);
