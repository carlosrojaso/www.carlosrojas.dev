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

class FavoriteAlbums extends PageViewElement {
	render() {
		updateMetadata({
			title: `Mike Posner - My Favorite Albums of All Time`,
			description:
				'Anyone is welcome to walk with me at any time during my journey. I will be practicing deep listening. What does this mean? i will be spending periods of my walk compassionately listening to people with as much of my full attention as possible. If you need to be heard...I’m there to hear. ',
		});

		return html`
			${SharedStyles} <style></style>
			<section id="favorite-albums" class="min-height-fix">
				<h2 class="text-left">My Favorite Albums of All Time</h2>
				<ul>
					<li>Aquemini by Outkast</li>
					<li>Songs in the Key of Life by Stevie Wonder</li>
					<li>Continuum by John Mayer</li>
					<li>I’m Wide Awake, It’s Morning by Bright Eyes</li>
				</ul>
			</section>
		`;
	}
}

window.customElements.define('my-favorite-albums', FavoriteAlbums);
