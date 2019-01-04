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
import { repeat } from 'lit-html/directives/repeat.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';
import { albums } from './favorite-albums-list.js';
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
			${SharedStyles}
			<style>
				.albums {
					width: 100%;
					margin-top: 36px;
				}

				.album {
					width: 100%;
					margin: 36px 0;
					display: flex;
					align-items: flex-start;
					flex-direction: row;
				}

				.album a {
					margin: 0;
				}

				.album .cover {
					width: 110px;
					margin-right: 16px;
					margin-left: 0;
					box-shadow: 0 10px 18px 4px rgba(0, 0, 0, 0.1);
				}

				.album .cover:hover {
					box-shadow: 0 10px 22px 6px rgba(0, 0, 0, 0.2);
				}

				.album .cover.alternate {
					height: 110px;
					position: relative;
					display: flex;
					align-items: center;
					justify-content: center;
					text-align: center;
				}

				.album .cover.alternate:after {
					content: 'we never made a cover';
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					display: flex;
					align-items: center;
					justify-content: center;
					text-align: center;
					background-color: white;
					color: var(--app-primary-color);
				}

				.album .copy {
					width: 100%;
					padding: 4px;
					font-size: 14px;
					margin: 0;
				}

				.album .title,
				.album .year {
					color: var(--app-secondary-color);
					font-weight: bold;
				}

				.album .title {
					margin: 8px 0;
					font-size: 18px;
				}

				.album .text {
					font-size: 11px;
				}

				@media (min-width: 660px) {
					.album {
						margin: 64px 0;
					}

					.album .cover {
						width: 220px;
					}

					.album .cover.alternate {
						height: 220px;
					}

					.album .year {
						font-size: 22px;
					}

					.album .title {
						font-size: 28px;
					}

					.album .text {
						font-size: 16px;
					}
				}
			</style>
			<section id="favorite-albums" class="min-height-fix">
				<h2 class="text-left">My Favorite Albums of All Time</h2>
				<div class="albums">
					${
						repeat(
							albums,
							album => html`
								<div class="album">
									<!-- display: block -->
									<a href="${album.url}" target="_blank" rel="noreferrer" aria-label="${album.title}">
										<img class="cover ${album.cover ? '' : 'alternate'}" width="100%" src="${album.cover}" alt="${album.title}" />
									</a>
									<div class="copy">
										<div class="year">${album.year}</div>
										<div class="title">${album.title}</div>
										<div class="text">${album.copy}</div>
									</div>
								</div>
							`
						)
					}
				</div>
			</section>
		`;
	}
}

window.customElements.define('my-favorite-albums', FavoriteAlbums);
