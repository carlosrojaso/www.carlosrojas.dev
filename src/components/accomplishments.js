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
import { PageViewElement } from './page-view-element.js';
// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

class Accomplishments extends PageViewElement {
	render() {
		return html`
			${SharedStyles}
			<style>
				section {
					min-height: calc(100vh - 301px);
				}

				@media (min-width: 460px) {
					section {
						min-height: calc(100vh - 327px);
					}
				}
			</style>
			<section>
				<h2 class="text-left">Random and Subtly Pretentious List of Accomplishments</h2>
				<ol>
					<li>Graduated from Duke University</li>
					<li>Made a bunch of songs</li>
					<li>Got a record deal</li>
					<li>Made a few super duper popular songs (cooler than me, I took a pill in ibiza)</li>
					<li>Dyed my hair green for a while</li>
					<li>Got nominated for a Grammy…for song of the year!!!! (I didn’t win the previously mentioned grammy…Adele did)</li>
					<li>Wrote a song for Justin Bieber</li>
					<li>Learn guitar and piano and singing as an adult, actually after I started to have hits!</li>
					<li>Had a spiritual experience meeting Ram Dass</li>
					<li>Met Jay-Z…TWICE! WOW - I must be a big deal!</li>
				</ol>
			</section>
		`;
	}
}

window.customElements.define('my-accomplishments', Accomplishments);
