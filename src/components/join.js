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

class Join extends PageViewElement {
	render() {
		updateMetadata({
			title: `Mike Posner - Join The Walk`,
			description:
				'Anyone is welcome to walk with me at any time during my journey. I will be practicing deep listening. What does this mean? i will be spending periods of my walk compassionately listening to people with as much of my full attention as possible. If you need to be heard...I’m there to hear. ',
		});

		return html`
			${SharedStyles} <style></style>
			<section id="join" class="min-height-fix">
				<h2 class="text-left">Join The Walk</h2>
				<p>
					The Walk begins March 1, 2019. I will be announcing specifics in the upcoming weeks. Follow me on Instagram for additional
					information. Anyone is welcome to walk with me at any time during my journey. I will be practicing deep listening. What does this
					mean? i will be spending periods of my walk compassionately listening to people with as much of my full attention as possible. If
					you need to be heard...I’m there to hear. Conditions of Walking:
				</p>
				<ul>
					<li>You are responsible for being able to physically walk. This is no easy ride.</li>
					<li>
						You will NOT bring or use drugs or alcohol of any sort. This includes marijuana. We will be guests in towns across the country
						and I have no interest in babysitting inebriated people.
					</li>
					<li>You will find your own place to sleep if joining for multiple nights</li>
					<li>You will dress appropriately.</li>
					<li>You will not be an asshole and treat others kindly.</li>
				</ul>
			</section>
		`;
	}
}

window.customElements.define('my-join', Join);
