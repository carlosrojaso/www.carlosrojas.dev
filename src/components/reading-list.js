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

class ReadingList extends PageViewElement {
	render() {
		updateMetadata({
			title: `Mike Posner - Reading List`,
			description: 'These are the books that have impacted my life this most.',
		});

		return html`
			${SharedStyles} <style></style>
			<section id="reading-list" class="min-height-fix">
				<h2 class="text-left">These are the books that have impacted my life this most:</h2>
				<ul>
					<li>
						The Power of Now by Eckhart Tolle - I avoided this book for years because of its popularity. Anything powerful can’t be popular
						right? WRONG. I realized it was so popular for a reason: it’s a life changer. I read it five times this year and listened to it
						on audio an additional two times!
					</li>
					<li>
						The Alchemist by paulo coelho - @bigsean recommended this book to me. It’s heart opening and appropriate for ages 12 and up!
					</li>
					<li>Siddharta by Herman Hesse</li>
					<li>The Catcher in the Rye - J.D. Salinger</li>
					<li>Demian by Herman Hesse</li>
					<li>
						Ask and It Is Given by Esther Hicks is the book @bigsean recommended to me and it changed my life by adding a spiritual
						component to my existence. He used to travel with it everywhere (he might still😊). I came back to it this year.
					</li>
					<li>
						The Stranger by Camus was literally mind blowing in a totally different way. This novel was recommended by @bookerbbbrown. At
						the end I felt so liberated by the fact that this is all finite! Like...wow.
					</li>
					<li>
						Labyrinths by Jorge Luis Borges was recommended by @danwilsonmusic and it actually wasn’t very fun to read but weeks later I
						realized my imagination had literally been taken to places it never had been before. The stories feel like my own memories now.
						Borges saw the world in a way no one else did or does.
					</li>
				</ul>
				<h2>Complete 2018 Reading List:</h2>
				<ol>
					<li>Douglas</li>
					<li>Survivor - Palahniuk</li>
					<li>The Third Door - Alex Banayan</li>
					<li>Ask and It Is Given - Esther and Jerry Hicks</li>
					<li>Born to Run - Bruce Springsteen</li>
					<li>Enlightenment Now - Steven Pinker</li>
					<li>The Hitchkikers Guide to the Galaxy - Douglas Adams</li>
					<li>The Book of Five Rings - Miyamoto Musasashi</li>
					<li>What Work Is - Philip Levine</li>
					<li>The Power of Now - Eckhart Tolle</li>
					<li>A New Earth - Eckhart Tolle</li>
					<li>Labyrinths - Jorge Luis Borges</li>
					<li>The Wind Up Bird Chronicle - Haruki Murakami</li>
					<li>Narcissus and Goldmund - Herman Hesse</li>
					<li>Scar Tissue - Anthony Keidis</li>
					<li>Granny D: Walking Across America in My 90th Year - Doris Haddock</li>
					<li>Pride and Prejudice - Jane Austen</li>
					<li>A Gentleman in Moscow - Amor Towles</li>
					<li>Michael Jordan: The Life - Roland Lazenby</li>
					<li>Our Golden Rule - John H. McConnell</li>
					<li>The Stranger - Albert Camus</li>
					<li>Infinite Jest (in progress)</li>
				</ol>
				<h2>Audiobooks:</h2>
				<ol>
					<li>Homo Deus - Yuval Noah Harari</li>
					<li>Getting Past Your Breakup - Susan J. Elliot</li>
					<li>A Million Miles in a Thousand Years - Donald Miller</li>
				</ol>
			</section>
		`;
	}
}

window.customElements.define('my-reading-list', ReadingList);
