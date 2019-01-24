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

class Listen extends PageViewElement {
	render() {
		updateMetadata({
			title: `Mike Posner - Listen on Apple Music or Spotify`,
			description: 'Listen to Mike Posner on Apple Music or Spotify',
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
			<style>
				.white-box {
					background-color: #f8f8fa;
					border-radius: 0px;
					height: 380px;
				}

				.listening-options {
					display: flex;
					align-items: center;
					justify-content: center;
					flex-wrap: wrap;
				}

				.listening-options .apple-music {
					margin-right: 24px;
				}

				.listening-options .spotify {
					margin-left: 24px;
				}

				.option.apple-music iframe {
					box-shadow: 1px 1px 10px 10px rgba(0, 0, 0, 0.25);
				}

				.option.spotify iframe {
					box-shadow: 1px 1px 10px 10px rgba(0, 0, 0, 0.25);
				}

				@media (max-width: 695px) {
					.listening-options {
						flex-direction: column;
					}

					.listening-options .option {
						margin: 0;
					}
				}
			</style>
			<section id="listen" class="container">
				<h2 class="heading">Listen</h2>
				<div class="listening-options">
					<div class="option apple-music">
						<h3 class="subheading">Apple Music</h3>
						<div class="white-box">
							<iframe
								title="Apple Music Embed"
								allow="autoplay *; encrypted-media *;"
								frameborder="0"
								height="380"
								style="width:100%;max-width:300px;overflow:hidden;background:transparent;"
								sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
								src="https://embed.music.apple.com/us/album/a-real-good-kid/1449093091?app=music"
							></iframe>
						</div>
					</div>
					<div class="option spotify">
						<h3 class="subheading">Spotify</h3>
						<iframe
							title="Spotify Embed"
							src="https://open.spotify.com/embed/user/officialmikeposner/playlist/0CQgU6sHvsuglnOKlpP9Jz"
							width="300"
							height="380"
							frameborder="0"
							allowtransparency="true"
							allow="encrypted-media"
						></iframe>
					</div>
				</div>
			</section>
		`;
	}
}

window.customElements.define('my-listen', Listen);
