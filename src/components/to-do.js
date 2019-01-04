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
			<style>
				input[type='checkbox'] {
					width: 30px;
					min-width: 30px;
					max-width: 30px;
					height: 30px;
					border-radius: 8px;
					border: 1px solid #d2d2d2;
					background-color: #fff;
					-webkit-appearance: none;
					-moz-appearance: none;
					appearance: none;
					margin: 0;
					flex-basis: 30px;
					outline: none;
					position: relative;
				}

				input[type='checkbox']:checked:after {
					content: '';
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					background: url('esm-bundled/images/orange-checkmark.svg'), url('es6-bundled/images/orange-checkmark.svg'),
						url('es5-bundled/images/orange-checkmark.svg'), url('images/orange-checkmark.svg');
					background-position: center;
					background-repeat: no-repeat;
					background-size: 15px;
				}

				.to-do-item {
					display: flex;
					align-items: center;
					flex-direction: row;
					justify-content: space-between;
					margin: 8px 0 12px;
				}

				.to-do-item .text {
					margin: 0;
					margin-right: 12px;
					text-align: left;
					color: white;
				}
			</style>
			<section id="things-to-do-before-i-die" class="min-height-fix">
				<h2 class="text-left">Things I Still Want To Do Before I Die:</h2>
				<div class="to-do-items">
					<div class="to-do-item">
						<span class="text">GO TO OUTER SPACE- number one bucket list thing for me.</span>
						<!-- display: block     -->
						<input type="checkbox" />
					</div>
					<div class="to-do-item">
						<span class="text"
							>Get my MSW and work as a hospice chaplain (I think working around death will help me lead a better life.)</span
						>
						<!-- display: block     -->
						<input type="checkbox" />
					</div>
					<div class="to-do-item">
						<span class="text">Study music theory at Berklee or somewhere good</span>
						<!-- display: block     -->
						<input type="checkbox" />
					</div>
					<div class="to-do-item">
						<span class="text">Take ear training at Berklee</span>
						<!-- display: block     -->
						<input type="checkbox" />
					</div>
					<div class="to-do-item">
						<span class="text">Intern for Richard Ryan</span>
						<!-- display: block     -->
						<input type="checkbox" />
					</div>
					<div class="to-do-item">
						<span class="text">Win a Grammy</span>
						<!-- display: block     -->
						<input type="checkbox" />
					</div>
					<div class="to-do-item">
						<span class="text">Walk across America - I’M DOING THAT THIS YEAR!</span>
						<!-- display: block     -->
						<input type="checkbox" />
					</div>
					<div class="to-do-item">
						<span class="text">Mentor/produce a younger artist</span>
						<!-- display: block     -->
						<input type="checkbox" />
					</div>
					<div class="to-do-item">
						<span class="text">Read Infinite Jest - I’m DOING THAT NOW!</span>
						<!-- display: block     -->
						<input type="checkbox" />
					</div>
					<div class="to-do-item">
						<span class="text">Spend a week in solitude - I DID THIS! TWICE!</span>
						<!-- display: block     -->
						<input type="checkbox" checked="true" />
					</div>
					<div class="to-do-item">
						<span class="text">Get a platinum plaque - I DID THIS SIX TIMES!!! WOOO! For real, dreams come true! GO ME!</span>
						<!-- display: block     -->
						<input type="checkbox" checked="true" />
					</div>
					<div class="to-do-item">
						<span class="text">Do the Landmark Forum - I DID THIS IT WAS AWESOME!</span>
						<!-- display: block     -->
						<input type="checkbox" checked="true" />
					</div>
					<div class="to-do-item">
						<span class="text">Drink Ayahuasca - I DID THIS!</span>
						<!-- display: block     -->
						<input type="checkbox" checked="true" />
					</div>
					<div class="to-do-item">
						<span class="text">Get married? have a kid?</span>
						<!-- display: block     -->
						<input type="checkbox" />
					</div>
					<div class="to-do-item">
						<span class="text">Study film and create some bad ass film pieces</span>
						<!-- display: block     -->
						<input type="checkbox" />
					</div>
					<div class="to-do-item">
						<span class="text">Climb mount everest</span>
						<!-- display: block     -->
						<input type="checkbox" />
					</div>
					<div class="to-do-item">
						<span class="text">Take my mom to Namibia</span>
						<!-- display: block     -->
						<input type="checkbox" />
					</div>
				</div>
			</section>
		`;
	}
}

window.customElements.define('my-todo', ToDo);
