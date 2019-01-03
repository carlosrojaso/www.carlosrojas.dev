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

class ToDo extends PageViewElement {
	render() {
		updateMetadata({
			title: `Mike Posner - Things I Want To Do Before I Die`,
			description: 'Things I Want To Do Before I Die',
		});

		return html`
			${SharedStyles}
			<section class="min-height-fix">
				<h2 class="text-left">Things I Still Want To Do Before I Die:</h2>
				<div class="to-do-items">
					<div class="to-do-item">
						<!-- display: block     -->
						<input type="checkbox" />
						GO TO OUTER SPACE- number one bucket list thing for me.
					</div>
					<div class="to-do-item">
						<!-- display: block     -->
						<input type="checkbox" />
						Get my MSW and work as a hospice chaplain (I think working around death will help me lead a better life.)
					</div>
					<div class="to-do-item">
						<!-- display: block     -->
						<input type="checkbox" />
						Study music theory at Berklee or somewhere good
					</div>
					<div class="to-do-item">
						<!-- display: block     -->
						<input type="checkbox" />
						Take ear training at Berklee
					</div>
					<div class="to-do-item">
						<!-- display: block     -->
						<input type="checkbox" />
						Intern for Richard Ryan
					</div>
					<div class="to-do-item">
						<!-- display: block     -->
						<input type="checkbox" />
						Win a Grammy
					</div>
					<div class="to-do-item">
						<!-- display: block     -->
						<input type="checkbox" />
						Walk across America - I’M DOING THAT THIS YEAR!
					</div>
					<div class="to-do-item">
						<!-- display: block     -->
						<input type="checkbox" />
						Mentor/produce a younger artist
					</div>
					<div class="to-do-item">
						<!-- display: block     -->
						<input type="checkbox" />
						Read Infinite Jest - I’m DOING THAT NOW!
					</div>
					<div class="to-do-item">
						<!-- display: block     -->
						<input type="checkbox" checked="true" />
						Spend a week in solitude - I DID THIS! TWICE!
					</div>
					<div class="to-do-item">
						<!-- display: block     -->
						<input type="checkbox" checked="true" />
						Get a platinum plaque - I DID THIS SIX TIMES!!! WOOO! For real, dreams come true! GO ME!
					</div>
					<div class="to-do-item">
						<!-- display: block     -->
						<input type="checkbox" checked="true" />
						Do the Landmark Forum - I DID THIS IT WAS AWESOME!
					</div>
					<div class="to-do-item">
						<!-- display: block     -->
						<input type="checkbox" checked="true" />
						Drink Ayahuasca - I DID THIS!
					</div>
					<div class="to-do-item">
						<!-- display: block     -->
						<input type="checkbox" />
						Get married? have a kid?
					</div>
					<div class="to-do-item">
						<!-- display: block     -->
						<input type="checkbox" />
						Study film and create some bad ass film pieces
					</div>
					<div class="to-do-item">
						<!-- display: block     -->
						<input type="checkbox" />
						Climb mount everest
					</div>
					<div class="to-do-item">
						<!-- display: block     -->
						<input type="checkbox" />
						Take my mom to Namibia
					</div>
				</div>
			</section>
		`;
	}
}

window.customElements.define('my-todo', ToDo);
