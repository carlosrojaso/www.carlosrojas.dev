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
import { HeaderAndFooterStyles } from './header-and-footer-styles.js';
import { PageViewElement } from './page-view-element.js';
import { SharedStyles } from './shared-styles.js';

class Download extends PageViewElement {
	render() {
		updateMetadata({
			title: `Mike Posner - "A Real Good Kid"`,
			description: 'Download music from Mike Posner on Apple Music or Spotify. A Real Good Kid, available January 18th, 2019.',
		});

		return html`
			${SharedStyles} ${HeaderAndFooterStyles}
			<style>
				#download {
					background: white;
				}

				.sticky-left {
					position: relative;
					padding: 24px;
					background-color: white;
					display: flex !important;
					align-items: center;
					justify-content: center;
					flex-direction: column;
				}

				.listen-button * {
					margin-left: initial;
					margin-right: initial;
				}
			</style>
			<section id="download" class="min-height-fix">
				<h2 class="primary-text">Download</h2>
				<!-- Play Album Sticky Leftside -->
				<div class="sticky-left">
					<img width="170px" src="images/album-cover.svg" alt="A Real Good Kid Album Cover" />
					<img class="listen" width="160px" src="images/listen-copy.svg" alt="Listen to A Real Good Kid" />
					<a class="listen-button spotify" href="https://open.spotify.com/track/0Knc89pMAsIZbK8tor7i93" target="_blank" rel="noreferrer">
						<img width="24px" src="images/spotify-icon.svg" alt="Spotify" />
						<img width="80px" src="images/spotify-copy.svg" alt="Play on Spotify" />
					</a>
					<a
						class="listen-button apple"
						href="https://geo.itunes.apple.com/us/album/a-real-good-kid/1443035104?mt=1&app=music"
						target="_blank"
						rel="noreferrer"
					>
						<img width="16px" src="images/apple-icon.svg" alt="Apple Music" />
						<img width="106px" src="images/apple-copy.svg" alt="Play on Apple Music" />
					</a>
				</div>
			</section>
		`;
	}
}

window.customElements.define('my-download', Download);
