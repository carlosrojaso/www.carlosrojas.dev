/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html } from '@polymer/lit-element';
import { updateMetadata } from 'pwa-helpers/metadata.js';
import { PageViewElement } from './page-view-element.js';
import { SharedStyles } from './shared-styles.js';

class Home extends PageViewElement {
	render() {
		updateMetadata({
			title: `Carlos Rojas - Home`,
			description: 'Official Website for Carlos Rojas. Javascript Developer 👨‍💻, Writer ✍️, Gamer 🎮, Photographer 📷.',
		});

		return html`
			${SharedStyles}
			<style>
				#home {
					background: white;
				}

				p.text-center {
					font-size: 1.6rem;
					color: #666;
					margin-top: 4rem !important;
					margin-bottom: 4rem !important;
				}

				img {
					margin: 50px;
				}

				@media (max-width: 1600px) {
					#home {
						margin-top: 30px;
					}

					#home > .logo > img {
						width: 80%;
					}
				}
			</style>
			<section id="home" class="container">
				<div class="logo text-center"><img width="60%" src="images/original/png/logoHead.png" alt="Logo" /></div>
				<p class="text-center">
					I am a JavaScript Developer 👨‍💻. I enjoy writing about things ✍️, mainly Science Fiction 👽, Patterns 🎲, and JavaScript 🤓.
				</p>
			</section>
		`;
	}
}

window.customElements.define('my-home', Home);
