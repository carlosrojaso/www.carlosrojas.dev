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
// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

class About extends PageViewElement {
	render() {
		updateMetadata({
			title: `Mike Posner - About Me`,
			description: 'i was born in detroit on a very, very, very, very, very, very, very cold day.',
		});

		return html`
			${SharedStyles}
			<style>
				@media (max-width: 600px) {
					.heading {
						font-size: 42px;
						line-height: 42px;
					}
				}
			</style>
			<section id="about" class="container">
				<h2 class="heading">About Me</h2>
				<p class="jumbo">i was born in detroit on a very, very, very, very, very, very, very cold day.</p>
			</section>
		`;
	}
}

window.customElements.define('my-about', About);
