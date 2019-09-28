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
			--app-primary-color: #150259;
			--app-secondary-color: #f2cb05;
			--app-tertiary-color: #c5a7d9;
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

		section.container {
			padding: 24px;
			min-height: calc(100vh - 303px);
			background-color: var(--app-primary-color);
		}

		section > * {
			max-width: 648px;
			margin-right: auto;
			margin-left: auto;
		}

		/* Typography */
		.heading {
			font-size: 24px;
			line-height: 35px;
			letter-spacing: 0.8px;
			font-weight: 400;
			text-align: center;
			color: var(--app-secondary-color);
			text-transform: uppercase;
		}

		.subheading {
			text-align: center;
			font-size: 20px;
			line-height: 26px;
			text-transform: uppercase;
			color: var(--app-secondary-color);
			font-weight: 300;
		}

		.body {
			margin-top: 16px;
			margin-bottom: 16px;
			font-size: 18px;
			line-height: 34px;
			text-align: center;
			color: white;
			font-weight: 300;
		}

		.jumbo {
			margin-top: 16px;
			margin-bottom: 16px;
			font-size: 26px;
			line-height: 45px;
			text-align: center;
			color: white;
		}

		@media (min-width: 600px) {
			.heading {
				font-size: 38px;
				line-height: 48px;
			}
		}

		@media (min-width: 900px) {
			.heading {
				font-size: 48px;
				line-height: 58px;
			}

			.subheading {
				font-size: 32px;
				line-height: 38px;
			}

			.jumbo {
				font-size: 36px;
				line-height: 58px;
			}
		}

		/* Utility Classes */
		.text-uppercase {
			text-transform: uppercase;
		}

		.text-left {
			text-align: left !important;
		}

		.text-center {
			text-align: center !important;
		}

		.text-link {
			text-decoration: underline;
			transition: all 300ms ease;
		}

		.text-link:hover {
			text-decoration: none;
			transition: all 300ms ease;
		}

		.text-white {
			color: white !important;
		}

		.primary-text {
			color: var(--app-primary-color) !important;
		}

		.hide {
			display: none !important;
		}

		.d-block {
			display: block !important;
		}

		.d-inline-block {
			display: inline-block !important;
		}

		.d-table {
			display: table !important;
		}

		.mx-auto {
			margin-left: auto !important;
			margin-right: auto !important;
		}

		@media (min-width: 1200px) {
			.container {
				min-height: calc(100vh - 346px);
			}

			.container > *:not(.heading) {
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
