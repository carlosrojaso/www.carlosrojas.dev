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
import { repeat } from 'lit-html/directives/repeat.js';
import { SharedStyles } from './shared-styles.js';
import { books } from './bibliography-data';

class Books extends PageViewElement {
	render() {
		updateMetadata({
			title: `Carlos Rojas - Books`,
			description: 'My Books.',
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
					width: 50px;
					height: 50px;
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
			<section id="join" class="container">
				<h2 class="heading">Books</h2>
			<div class="books">
			<div class="albums">
				${repeat(
					books,
					book => html`
						<div class="album">
							<!-- display: block -->
							<a
								class="cover d-table mx-auto"
								href="${book.spotifyUrl ? book.spotifyUrl : '/discography'}"
								target="${book.spotifyUrl ? '_blank' : ''}"
								rel="noreferrer"
								aria-label="${book.title}"
							>
								<picture> <img width="300px" src="images/books/${book.cover}" alt="${book.title}" /> </picture>
							</a>
							<a
								class="body heading"
								href="${book.spotifyUrl ? book.spotifyUrl : '/discography'}"
								target="${book.spotifyUrl ? '_blank' : ''}"
								rel="noreferrer"
								aria-label="${book.title}"
							>
								<div class="heading text-uppercase">${book.title}</div>
							</a>
							<div class="body year">${book.year}</div>
							<div class="body copy">${book.copy}</div>
							<div class="listening-options">
								<a
									href="${book.spotifyUrl ? book.spotifyUrl : '/discography'}"
									target="_blank'"
									rel="noreferrer"
									aria-label="${book.title}"
								>
									Link
								</a>
							</div>
						</div>
					`
				)}
			</div>
			</section>
		`;
	}
}

window.customElements.define('my-books', Books);
