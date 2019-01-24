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
import { repeat } from '../../node_modules/lit-html/directives/repeat';
import { PageViewElement } from './page-view-element.js';
import { audiobooks } from './reading-list-audiobooks';
import { complete2018 } from './reading-list-complete-2018';
import { mostImpacted } from './reading-list-most-impacted';
import { SharedStyles } from './shared-styles.js';

class ReadingList extends PageViewElement {
	render() {
		updateMetadata({
			title: `Mike Posner - Reading List`,
			description: 'These are the books that have impacted my life this most.',
		});

		return html`
			${SharedStyles}
			<style>
				.heading:not(:first-child) {
					margin-top: 5rem;
				}

				.subheading {
					margin-top: 5rem;
					margin-bottom: 0;
					text-decoration: none;
				}

				.body.author {
					margin-top: 0;
					margin-bottom: 1rem;
				}
			</style>
			<section id="reading-list" class="container">
				<h2 class="heading">These are the books that have impacted my life the most</h2>
				<div class="most-impacted">
					${
						repeat(
							mostImpacted,
							book => html`
								<div class="book">
									<a class="subheading d-block" href="${book.url}" target="_blank" rel="noreferrer">${book.title}</a>
									<p class="body author">by ${book.author}</p>
									<p class="body copy">${book.body}</p>
									<a class="d-table mx-auto text-center" href="${book.url}" target="_blank" rel="noreferrer"
										><img width="80px" src="images/amazon.svg" alt="Buy It Now On Amazon"
									/></a>
								</div>
							`
						)
					}
				</div>
				<h2 class="heading">Complete 2018 Reading List</h2>
				<div class="complete-2018">
					${
						repeat(
							complete2018,
							book => html`
								<div class="book">
									<a class="subheading d-block" href="${book.url}" target="_blank" rel="noreferrer">${book.title}</a>
									<p class="body author">by ${book.author}</p>
									<p class="body copy">${book.body}</p>
									<a class="d-table mx-auto text-center" href="${book.url}" target="_blank" rel="noreferrer"
										><img width="80px" src="images/amazon.svg" alt="Buy It Now On Amazon"
									/></a>
								</div>
							`
						)
					}
				</div>
				<h2 class="heading">Audiobooks</h2>
				<div class="audiobooks">
					${
						repeat(
							audiobooks,
							book => html`
								<div class="book">
									<a class="subheading d-block" href="${book.url}" target="_blank" rel="noreferrer">${book.title}</a>
									<p class="body author">by ${book.author}</p>
									<p class="body copy">${book.body}</p>
									<a class="d-table mx-auto text-center" href="${book.url}" target="_blank" rel="noreferrer"
										><img width="80px" src="images/amazon.svg" alt="Buy It Now On Amazon"
									/></a>
								</div>
							`
						)
					}
				</div>
			</section>
		`;
	}
}

window.customElements.define('my-reading-list', ReadingList);
