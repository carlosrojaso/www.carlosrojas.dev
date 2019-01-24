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

class MyView404 extends PageViewElement {
	render() {
		updateMetadata({
			title: `Mike Posner - Random and Subtly Pretentious List of Accomplishments`,
			description: 'Random and Subtly Pretentious List of Accomplishments',
		});

		return html`
			${SharedStyles}
			<section id="404" class="container">
				<h2 class="heading">Oops! You hit a 404</h2>
				<p class="body">
					The page you're looking for doesn't seem to exist. Head back <a class="text-link text-white" href="/">home</a> and try again?
				</p>
			</section>
		`;
	}
}

window.customElements.define('my-404', MyView404);
