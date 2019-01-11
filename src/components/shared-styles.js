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

export const SharedStyles = html`
	<style>
		:host {
			display: block;
			box-sizing: border-box;

			/* Variables */
			--app-primary-color: #ff6b00;
			--app-secondary-color: #f1d09f;
			--app-tertiary-color: #673918;
			--app-dark-text-color: var(--app-tertiary-color);
			--app-light-text-color: var(--app-secondary-color);
			--app-section-odd-color: white;
			--app-section-even-color: var(--app-secondary-color);

			/* Header Variables */
			--app-header-background-color: var(--app-primary-color);
			--app-header-text-color: var(--app-primary-color);
			--app-header-selected-color: var(--app-tertiary-color);
			--app-header-hover-color: var(--app-secondary-color);

			/* Drawer Variables */
			--app-drawer-width: 256px;
			--app-drawer-background-color: var(--app-primary-color);
			--app-drawer-text-color: var(--app-secondary-color);
			--app-drawer-selected-color: var(--app-tertiary-color);
			--app-drawer-hover-color: var(--app-selected-color);
		}

		section {
			padding: 24px;
			background: var(--app-section-odd-color);
		}

		section * {
			max-width: 648px;
			margin-right: auto;
			margin-left: auto;
		}

		section:nth-of-type(even) {
			background: var(--app-section-even-color);
		}

		/* Typeography */
		h2 {
			font-size: 24px;
			text-align: center;
			color: var(--app-dark-text-color);
		}

		h3 {
			text-align: center;
		}

		p {
			margin-top: 16px;
			margin-bottom: 16px;
		}

		@media (min-width: 1200px) {
			h2 {
				font-size: 36px;
			}
		}

		/* Utility Classes */
		.text-left {
			text-align: left !important;
		}

		.text-center {
			text-align: center !important;
		}

		.primary-text {
			color: var(--app-primary-color) !important;
		}

		.min-height-fix {
			min-height: calc(100vh - 303px);
		}

		section.min-height-fix {
			background-color: var(--app-primary-color);
		}

		section.min-height-fix * {
			color: white;
		}

		.hide {
			display: none !important;
		}

		@media (min-width: 1200px) {
			.min-height-fix {
				min-height: calc(100vh - 346px);
				padding-left: 378px;
				padding-right: 68px;
			}

			.min-height-fix * {
				margin: 0;
			}
		}

		@media (min-width: 1660px) {
			.min-height-fix {
				padding: 23px;
			}

			.min-height-fix * {
				margin: 0 auto;
			}
		}

		/* ***************************
                LISTEN BUTTONS
        **************************** */
		.listen-button {
			position: relative;
			display: flex;
			align-items: center;
			justify-content: flex-start;
			background-color: var(--app-primary-color);
			border-radius: 24px;
			border: none;
			height: 47px;
			width: 166px;
			text-align: left;
			padding: 0 12px;
			outline: none;
			transition: background-color 200ms ease;
		}

		.listen-button:after {
			width: 0px;
			height: 47px;
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			transition: width 200ms ease;
			border-radius: 24px;
			z-index: 0;
		}

		.listen-button:hover {
			outline: none;
			transition: background-color 400ms ease;
			background-color: var(--app-secondary-color);
		}

		.listen-button:hover:after {
			background-color: var(--app-secondary-color);
			width: 100%;
			transition: width 200ms ease;
		}

		.listen-button * {
			position: relative;
			z-index: 1;
		}

		.listen-button img {
			vertical-align: middle;
		}

		.listen-button img:last-child {
			margin-left: 12px;
		}
	</style>
`;
