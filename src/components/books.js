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

class Books extends PageViewElement {
	render() {
		updateMetadata({
			title: `Carlos Rojas - Books`,
			description: 'My Books.',
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
			<section id="join" class="container">
				<h2 class="heading">Join The Walk</h2>
				<p class="body">
					The Walk begins April 15, 2019 in Asbury Park, NJ. Follow me on Instagram for additional information. Anyone is welcome to walk
					with me at any time during my journey. I will be practicing deep listening. What does this mean? i will be spending periods of my
					walk compassionately listening to people with as much of my full attention as possible. If you need to be heard...I’m there to
					hear. Conditions of Walking:
				</p>
			</section>
		`;
	}
}

window.customElements.define('my-books', Books);
