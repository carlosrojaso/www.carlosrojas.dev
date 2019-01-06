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
				<ol>
					<li>
						<a
							href="https://www.amazon.com/Power-Now-Guide-Spiritual-Enlightenment/dp/1577314808/ref=sr_1_3?ie=UTF8&qid=1546811415&sr=8-3&keywords=the+power+of+now"
							target="_blank"
							rel="noreferrer"
						>
							The Power of Now</a
						>
						by Eckhart Tolle - I avoided this book for years because of its popularity. Anything powerful can’t be popular right? WRONG. I
						realized it was so popular for a reason: it’s a life changer. I read it five times this year and listened to it on audio an
						additional two times!
					</li>
					<li>
						<a
							href="https://www.amazon.com/Alchemist-Paulo-Coelho/dp/0062315005/ref=sr_1_1?ie=UTF8&qid=1546811524&sr=8-1&keywords=the+alchemist"
							target="_blank"
							rel="noreferrer"
							>The Alchemist</a
						>
						by paulo coelho - @bigsean recommended this book to me. It’s heart opening and appropriate for ages 12 and up!
					</li>
					<li>
						<a
							href="https://www.amazon.com/Siddhartha-Penguin-Classics-Deluxe-Hermann/dp/0142437182/ref=sr_1_2?ie=UTF8&qid=1546811540&sr=8-2&keywords=siddharta"
							target="_blank"
							rel="noreferrer"
							>Siddharta</a
						>
						by Herman Hesse
					</li>
					<li>
						<a
							href="https://www.amazon.com/J-D-Salingers-Catcher-Rye-ebook/dp/B07C3BC59X/ref=sr_1_2?ie=UTF8&qid=1546811557&sr=8-2&keywords=the+catcher+in+the+rye"
							target="_blank"
							rel="noreferrer"
							>The Catcher in the Rye</a
						>
						- J.D. Salinger
					</li>
					<li>
						<a
							href="https://www.amazon.com/Demian-Hermann-Hesse/dp/142094794X/ref=sr_1_3?ie=UTF8&qid=1546811573&sr=8-3&keywords=demian"
							target="_blank"
							rel="noreferrer"
							>Demian</a
						>
						by Herman Hesse
					</li>
					<li>
						<a
							href="https://www.amazon.com/Ask-Given-Learning-Manifest-Desires/dp/1401904599/ref=sr_1_3?ie=UTF8&qid=1546811622&sr=8-3&keywords=ask+and+it+is+given"
							target="_blank"
							rel="noreferrer"
							>Ask and It Is Given</a
						>
						by Esther Hicks is the book @bigsean recommended to me and it changed my life by adding a spiritual component to my existence.
						He used to travel with it everywhere (he might still😊). I came back to it this year.
					</li>
					<li>
						<a
							href="https://www.amazon.com/Stranger-Albert-Camus/dp/0679720200/ref=sr_1_2?ie=UTF8&qid=1546812189&sr=8-2&keywords=the+stranger"
							target="_blank"
							rel="noreferrer"
							>The Stranger</a
						>
						by Camus was literally mind blowing in a totally different way. This novel was recommended by @bookerbbbrown. At the end I felt
						so liberated by the fact that this is all finite! Like...wow.
					</li>
					<li>
						<a
							href="https://www.amazon.com/Labyrinths-Selected-writings-directions-paperbook/dp/B0006BMD58/ref=sr_1_2?ie=UTF8&qid=1546811693&sr=8-2&keywords=labyrinths+borges"
							target="_blank"
							rel="noreferrer"
							>Labyrinths</a
						>
						by Jorge Luis Borges was recommended by @danwilsonmusic and it actually wasn’t very fun to read but weeks later I realized my
						imagination had literally been taken to places it never had been before. The stories feel like my own memories now. Borges saw
						the world in a way no one else did or does.
					</li>
				</ol>
				<h2>Complete 2018 Reading List:</h2>
				<ol>
					<li>
						<a
							href="https://www.amazon.com/Doctor-Hudsons-Secret-Journal-Douglas/dp/150247543X/ref=sr_1_1?ie=UTF8&qid=1546811729&sr=8-1&keywords=doctor+hudson%27s+secret+journal"
							target="_blank"
							rel="noreferrer"
							>Doctor Hudson’s Secret Journal</a
						>
						- Lloyd C. Douglas
					</li>
					<li>
						<a
							href="https://www.amazon.com/Survivor-Novel-Chuck-Palahniuk/dp/039333807X/ref=sr_1_1?ie=UTF8&qid=1546811748&sr=8-1&keywords=survivor+palahniuk"
							target="_blank"
							rel="noreferrer"
							>Survivor</a
						>
						- Palahniuk
					</li>
					<li>
						<a
							href="https://www.amazon.com/Third-Door-Uncover-Successful-Launched/dp/0804136661/ref=sr_1_1?ie=UTF8&qid=1546811763&sr=8-1&keywords=the+third+door"
							target="_blank"
							rel="noreferrer"
							>The Third Door</a
						>
						- Alex Banayan
					</li>
					<li>
						<a
							href="https://www.amazon.com/Ask-Given-Learning-Manifest-Desires/dp/1401904599/ref=sr_1_3?ie=UTF8&qid=1546811622&sr=8-3&keywords=ask+and+it+is+given"
							target="_blank"
							rel="noreferrer"
							>Ask and It Is Given</a
						>
						- Esther and Jerry Hicks
					</li>
					<li>
						<a
							href="https://www.amazon.com/Born-Run-Bruce-Springsteen/dp/1501141511/ref=sr_1_2?ie=UTF8&qid=1546811813&sr=8-2&keywords=born+to+run"
							target="_blank"
							rel="noreferrer"
							>Born to Run</a
						>
						- Bruce Springsteen
					</li>
					<li>
						<a
							href="https://www.amazon.com/Enlightenment-Now/dp/0525559027/ref=sr_1_2?ie=UTF8&qid=1546811835&sr=8-2&keywords=enlightenment+now"
							target="_blank"
							rel="noreferrer"
							>Enlightenment Now</a
						>
						- Steven Pinker
					</li>
					<li>
						<a
							href="https://www.amazon.com/Hitchhikers-Guide-Galaxy-Douglas-Adams/dp/0345391802/ref=sr_1_1?ie=UTF8&qid=1546811859&sr=8-1&keywords=the+hitchhikers+guide+to+the+galaxy+book"
							target="_blank"
							rel="noreferrer"
							>The Hitchkikers Guide to the Galaxy</a
						>
						- Douglas Adams
					</li>
					<li>
						<a
							href="https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_aps_sr_pg1_1?ie=UTF8&adId=A035361535MHFOO6S85PF&url=https%3A%2F%2Fwww.amazon.com%2FBook-Five-Rings-Miyamoto-Musashi%2Fdp%2F1519671059%2Fref%3Dsr_1_1_sspa%3Fie%3DUTF8%26qid%3D1546811879%26sr%3D8-1-spons%26keywords%3Dthe%2Bbook%2Bof%2Bfive%2Brings%26psc%3D1&qualifier=1546811879&id=1509392362681615&widgetName=sp_atf"
							target="_blank"
							rel="noreferrer"
							>The Book of Five Rings</a
						>
						- Miyamoto Musasashi
					</li>
					<li>
						<a
							href="https://www.amazon.com/What-Work-Poems-Philip-Levine/dp/0679740589/ref=sr_1_1?ie=UTF8&qid=1546811898&sr=8-1&keywords=what+work+is"
							target="_blank"
							rel="noreferrer"
							>What Work Is</a
						>
						- Philip Levine
					</li>
					<li>
						<a
							href="https://www.amazon.com/Power-Now-Guide-Spiritual-Enlightenment/dp/1577314808/ref=sr_1_3?ie=UTF8&qid=1546811415&sr=8-3&keywords=the+power+of+now"
							target="_blank"
							rel="noreferrer"
							>The Power of Now</a
						>
						- Eckhart Tolle
					</li>
					<li>
						<a
							href="https://www.amazon.com/New-Earth-Awakening-Purpose-Selection/dp/0452289963/ref=sr_1_1?ie=UTF8&qid=1546811950&sr=8-1&keywords=a+new+earth"
							target="_blank"
							rel="noreferrer"
							>A New Earth</a
						>
						- Eckhart Tolle
					</li>
					<li>
						<a
							href="https://www.amazon.com/Labyrinths-Selected-writings-directions-paperbook/dp/B0006BMD58/ref=sr_1_2?ie=UTF8&qid=1546811693&sr=8-2&keywords=labyrinths+borges"
							target="_blank"
							rel="noreferrer"
							>Labyrinths</a
						>
						- Jorge Luis Borges
					</li>
					<li>
						<a
							href="https://www.amazon.com/Wind-Up-Bird-Chronicle-Novel/dp/0679775439/ref=sr_1_2?ie=UTF8&qid=1546812015&sr=8-2&keywords=the+wind+up+bird+chronicle+by+haruki+murakami"
							target="_blank"
							rel="noreferrer"
							>The Wind Up Bird Chronicle</a
						>
						- Haruki Murakami
					</li>
					<li>
						<a
							href="https://www.amazon.com/Narcissus-Goldmund-Hermann-Hesse/dp/0553275860/ref=sr_1_1?ie=UTF8&qid=1546812071&sr=8-1&keywords=narcissus+and+goldmund"
							target="_blank"
							rel="noreferrer"
							>Narcissus and Goldmund</a
						>
						- Herman Hesse
					</li>
					<li>
						<a
							href="https://www.amazon.com/Scar-Tissue-Anthony-Kiedis/dp/1401307450/ref=sr_1_1?ie=UTF8&qid=1546812086&sr=8-1&keywords=scar+tissue"
							target="_blank"
							rel="noreferrer"
							>Scar Tissue</a
						>
						- Anthony Keidis
					</li>
					<li>
						<a
							href="https://www.amazon.com/Granny-Walking-Across-America-Ninetieth/dp/0375505393/ref=sr_1_1?ie=UTF8&qid=1546812106&sr=8-1&keywords=granny+d+walking+across+america+in+my+90th+year"
							target="_blank"
							rel="noreferrer"
							>Granny D: Walking Across America in My 90th Year</a
						>
						- Doris Haddock
					</li>
					<li>
						<a
							href="https://www.amazon.com/Pride-Prejudice-Jane-Austen/dp/0141439513/ref=sr_1_5?ie=UTF8&qid=1546812124&sr=8-5&keywords=pride+and+prejudice"
							target="_blank"
							rel="noreferrer"
							>Pride and Prejudice</a
						>
						- Jane Austen
					</li>
					<li>
						<a
							href="https://www.amazon.com/Gentleman-Moscow-Novel-Amor-Towles/dp/0670026190/ref=sr_1_1?ie=UTF8&qid=1546812145&sr=8-1&keywords=a+gentleman+in+moscow+by+amor+towels"
							target="_blank"
							rel="noreferrer"
							>A Gentleman in Moscow</a
						>
						- Amor Towles
					</li>
					<li>
						<a
							href="https://www.amazon.com/Michael-Jordan-Life-Roland-Lazenby/dp/031619476X/ref=sr_1_2?ie=UTF8&qid=1546812161&sr=8-2&keywords=michael+jordan%3A+the+life"
							target="_blank"
							rel="noreferrer"
							>Michael Jordan: The Life</a
						>
						- Roland Lazenby
					</li>
					<li>
						<a
							href="https://www.amazon.com/Our-Golden-Rule-John-McConnell/dp/1931604037/ref=sr_1_2?ie=UTF8&qid=1546812175&sr=8-2&keywords=our+golden+rule"
							target="_blank"
							rel="noreferrer"
							>Our Golden Rule</a
						>
						- John H. McConnell
					</li>
					<li>
						<a
							href="https://www.amazon.com/Stranger-Albert-Camus/dp/0679720200/ref=sr_1_2?ie=UTF8&qid=1546812189&sr=8-2&keywords=the+stranger"
							target="_blank"
							rel="noreferrer"
							>The Stranger</a
						>
						- Albert Camus
					</li>
					<li>
						<a
							href="https://www.amazon.com/Infinite-Jest-David-Foster-Wallace/dp/0316066524/ref=sr_1_1?ie=UTF8&qid=1546812234&sr=8-1&keywords=infinite+jest"
							target="_blank"
							rel="noreferrer"
							>Infinite Jest</a
						>
						(in progress)
					</li>
				</ol>
				<h2>Audiobooks:</h2>
				<ol>
					<li>
						<a
							href="https://www.amazon.com/Homo-Deus-Brief-History-Tomorrow/dp/B01MYZ4OUW/ref=sr_1_1_twi_audd_1?ie=UTF8&qid=1546812252&sr=8-1&keywords=homo+deus+audiobook"
							target="_blank"
							rel="noreferrer"
							>Homo Deus</a
						>
						- Yuval Noah Harari
					</li>
					<li>
						<a
							href="https://www.amazon.com/Getting-Past-Your-Breakup-Devastating/dp/B007T5N2YU/ref=sr_1_1?ie=UTF8&qid=1546812292&sr=1-1&keywords=getting+past+your+breakup"
							target="_blank"
							rel="noreferrer"
							>Getting Past Your Breakup</a
						>
						- Susan J. Elliot
					</li>
					<li>
						<a
							href="https://www.amazon.com/Million-Miles-Thousand-Years-Learned/dp/B002UF5KOE/ref=sr_1_1_twi_audd_3?s=books&ie=UTF8&qid=1546812311&sr=1-1&keywords=a+million+miles+in+a+thousand+years+by+donald+miller"
							target="_blank"
							rel="noreferrer"
							>A Million Miles in a Thousand Years</a
						>
						- Donald Miller
					</li>
				</ol>
			</section>
		`;
	}
}

window.customElements.define('my-reading-list', ReadingList);
