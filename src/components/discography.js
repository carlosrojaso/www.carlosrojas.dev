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
import { albums } from './discography-albums.js';
import { PageViewElement } from './page-view-element.js';
// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

class Discography extends PageViewElement {
	render() {
		updateMetadata({
			title: `Mike Posner - Random and Subtly Pretentious List of Accomplishments`,
			description: 'Random and Subtly Pretentious List of Accomplishments',
		});

		return html`
			${SharedStyles}
			<style>
				.albums {
					width: 100%;
					display: flex;
					align-items: flex-start;
					flex-wrap: wrap;
					justify-content: space-evenly;
					margin-top: 36px;
				}

				.album {
					width: 200px;
					margin: 0 8px 24px;
					text-decoration: none;
				}

				.album:first-child {
					margin-left: 0;
				}

				.album:last-child {
					margin-right: 0;
				}

				.album .cover {
					box-shadow: 0 10px 18px 4px rgba(0, 0, 0, 0.1);
				}

				.album .cover.alternate {
					width: 100%;
					height: 200px;
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
					text-align: center;
					padding: 4px;
					font-size: 14px;
				}

				.album .title,
				.album .year {
					color: var(--app-secondary-color);
					font-weight: bold;
				}

				.album .title {
					margin: 8px 0;
				}

				.album .text {
					font-size: 11px;
				}
			</style>
			<section class="min-height-fix">
				<h2 class="text-left">Discography - These are all the albums/projects I’ve ever made.</h2>
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

window.customElements.define('my-discography', Discography);
