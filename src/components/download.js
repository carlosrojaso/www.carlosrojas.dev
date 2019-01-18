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
	handleAppleClick() {
		dataLayer.push({ event: 'apple' });
	}

	handleSpotifyClick() {
		dataLayer.push({ event: 'spotify' });
	}

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
					padding: 0;
					padding-left: initial;
					padding-right: initial;
					text-align: center;
					margin: 0 auto;
				}

				.download-copy {
					display: block;
					margin: 16px auto;
					margin-top: 3rem;
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

				.listen,
				.listen-button.apple {
					margin: 1rem auto;
				}

				.listen-button * {
					margin-left: initial;
					margin-right: initial;
				}
			</style>
			<section id="download" class="min-height-fix">
				<img width="200px" class="download-copy" src="images/download-brown.svg" alt="Download" />
				<!-- Play Album Sticky Leftside -->
				<div class="sticky-left">
					<img width="170px" src="images/album-cover.svg" alt="A Real Good Kid Album Cover" />
					<img class="listen" width="160px" src="images/listen-copy.svg" alt="Listen to A Real Good Kid" />
					<a
						class="listen-button spotify"
						href="https://open.spotify.com/track/3KTVQGLS2np8dWe5s4F9EN"
						target="_blank"
						rel="noreferrer"
						@click="${this.handleSpotifyClick}"
					>
						<img width="24px" src="images/spotify-icon.svg" alt="Spotify" />
						<img width="100px" src="images/spotify-copy.svg" alt="Play on Spotify" />
					</a>
					<a
						class="listen-button apple"
						href="https://geo.itunes.apple.com/us/album/move-on/1443035104?i=1443035109&mt=1&app=music"
						target="_blank"
						rel="noreferrer"
						@click="${this.handleAppleClick}"
					>
						<img width="20px" src="images/apple-icon.svg" alt="Apple Music" />
						<img width="125px" src="images/apple-copy.svg" alt="Play on Apple Music" />
					</a>
				</div>
			</section>
		`;
	}
}

window.customElements.define('my-download', Download);
