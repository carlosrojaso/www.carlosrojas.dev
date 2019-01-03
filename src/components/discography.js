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
			<section class="min-height-fix">
				<h2 class="text-left">Discography - These are all the albums/projects I’ve ever made.</h2>
				<ol>
					<li>
						2006 - Reflections of a Lost Teen - This was the album I produced in high school. I sold it out of the trunk of my car. This was
						before I sang. I only rapped. No one has ever really heard it except my schoolmates.
					</li>
					<li>2009 - A Matter of Time - This was the mixtape I made in my dorm room that sort of started my professional career.</li>
					<li>2009 - One Foot Out the Door - This was my second mixtape.</li>
					<li>2010 - 31 Minutes to Takeoff - This was my first studio album.</li>
					<li>2011 - The Layover - This was my really cool mixtape from 2011.</li>
					<li>2012 - Sky High - (never released)</li>
					<li>2014 - Pages (never released)</li>
					<li>
						2016 - At Night, Alone. This was the album where I got really good at songwriting. One of the songs “I Took A Pill in Ibiza” got
						really popular and nominated for a Grammy.
					</li>
					<li>
						2017 - Mansionz. This was the album I made with Blackbear. Mansionz is our band that we have together. We dyed our hair green.
					</li>
					<li>2017 - Tear Drops and Balloons - this is the audiobook of my book of poetry, “Tear Drops and Balloons"</li>
					<li>
						2018 - “i was born in detroit on a very, very, very, very, very, very, very cold day” This is a LIVE album that I made as I
						toured with my band, The Legendary Mike Posner Band. Each night I did a new poem at the concerts. The band had never heard the
						poems until we were on the stage. They made up the music each night to follow what I was saying. That’s what made them
						legendary.
					</li>
					<li>2018 - A Real Good Kid. This is the best album ever. Seriously, I really love this album.</li>
				</ol>
			</section>
		`;
	}
}

window.customElements.define('my-discography', Discography);
