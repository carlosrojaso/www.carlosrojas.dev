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
import { apple, spotify } from './my-icons.js';
import { PageViewElement } from './page-view-element.js';
// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

class Discography extends PageViewElement {
	render() {
		updateMetadata({
			title: `Mike Posner - Discography`,
			description: 'These are all the albums/projects I’ve ever made.',
		});

		return html`
			${SharedStyles}
			<style>
				.heading {
					margin-bottom: 0;
				}

				.albums {
					margin-top: 5rem;
				}

				.album:not(:first-of-type) {
					margin-top: 5rem;
				}

				.album .cover {
					max-width: 220px;
					margin-bottom: 19px;
				}

				.album .cover img {
					box-shadow: 0 10px 18px 4px rgba(0, 0, 0, 0.1);
				}

				.album .cover img:hover {
					transition: all 200ms ease;
					box-shadow: 0 10px 22px 6px rgba(0, 0, 0, 0.2);
				}

				.album .heading {
					font-size: 32px;
					line-height: 38px;
					font-size: 25px;
					line-height: 32px;
					margin: 0 auto;
					text-decoration: none;
				}

				.album .year {
					margin-top: 0;
				}

				.album .copy {
					margin-top: 0;
				}

				.album .listening-options,
				.album .listening-options a {
					display: flex;
					align-items: center;
					justify-content: center;
					flex-direction: row;
				}

				.album .listening-options a {
					width: 35px;
					height: 35px;
					background: var(--app-secondary-color);
					border-radius: 50%;
					text-align: center;
					flex-direction: column;
					box-shadow: 0 10px 18px 4px rgba(0, 0, 0, 0.1);
				}

				.album .listening-options a:hover {
					transition: all 200ms ease;
					box-shadow: 0 10px 22px 6px rgba(0, 0, 0, 0.2);
				}

				.album .listening-options a:not(:last-of-type) {
					margin-right: 1rem;
				}

				.album .listening-options a svg {
					width: 20px;
					height: 20px;
					fill: var(--app-tertiary-color);
				}
			</style>
			<section id="discography" class="container">
				<h2 class="heading">Discography</h2>
				<p class="body">These are all the albums/projects I’ve ever made.</p>
				<div class="albums">
					${
						repeat(
							albums,
							album => html`
								<div class="album">
									<!-- display: block -->
									<a
										class="cover d-table mx-auto"
										href="${album.spotifyUrl ? album.spotifyUrl : '/discography'}"
										target="${album.spotifyUrl ? '_blank' : ''}"
										rel="noreferrer"
										aria-label="${album.title}"
									>
										<picture>
											<!-- Use WebP on Supported Browsers -->
											<source
												srcset="images/${album.svg ? '' : 'webp/'}${album.svg ? album.cover : album.webpcover}"
												type="image/${album.svg ? 'svg' : 'webp'}"
											/>
											<source srcset="images/${album.svg ? '' : 'jpg/'}${album.cover}" type="image/${album.svg ? 'svg' : 'jpg'}" />
											<!-- Falls back to JPG on Unsupported Browsers -->
											<img width="220px" src="images/${album.svg ? '' : 'jpg/'}${album.cover}" alt="${album.title}" />
										</picture>
									</a>
									<a
										class="body heading"
										href="${album.spotifyUrl ? album.spotifyUrl : '/discography'}"
										target="${album.spotifyUrl ? '_blank' : ''}"
										rel="noreferrer"
										aria-label="${album.title}"
									>
										<div class="heading text-uppercase">${album.title}</div>
									</a>
									<div class="body year">${album.year}</div>
									<div class="body copy">${album.copy}</div>
									<div class="listening-options">
										<a
											class="spotify ${album.spotifyUrl ? 'show' : 'hide'}"
											href="${album.spotifyUrl ? album.spotifyUrl : '/discography'}"
											target="${album.spotifyUrl ? '_blank' : ''}"
											rel="noreferrer"
											aria-label="${album.title}"
										>
											${spotify}
										</a>
										<a
											class="apple-music ${album.appleMusicUrl ? 'show' : 'hide'}"
											href="${album.appleMusicUrl ? album.appleMusicUrl : '/discography'}"
											target="${album.appleMusicUrl ? '_blank' : ''}"
											rel="noreferrer"
											aria-label="${album.title}"
										>
											${apple}
										</a>
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
