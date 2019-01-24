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
import { repeat } from '../../node_modules/lit-html/directives/repeat';
import { accomplishments } from './accomplishments-list';
import { PageViewElement } from './page-view-element.js';
// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

class Accomplishments extends PageViewElement {
	render() {
		updateMetadata({
			title: `Mike Posner - Random and Subtly Pretentious List of Accomplishments`,
			description: 'Random and Subtly Pretentious List of Accomplishments',
		});

		return html`
			${SharedStyles}
			<style>
				.subheading {
					margin-top: 3rem;
					font-size: 32px;
					line-height: 34px;
				}

				.body {
					margin-top: 0.5rem;
				}
			</style>
			<section id="accomplishments" class="container">
				<h2 class="heading">Random and Subtly Pretentious List of Accomplishments</h2>
				<div class="body">
					${
						repeat(
							accomplishments,
							(accomplishment, index) => html`
								<div class="subheading">${index + 1}</div>
								<div class="body">${accomplishment.text}</div>
							`
						)
					}
				</div>
			</section>
		`;
	}
}

window.customElements.define('my-accomplishments', Accomplishments);
