/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import '@polymer/app-layout/app-drawer/app-drawer';
import '@polymer/app-layout/app-header/app-header';
import '@polymer/app-layout/app-scroll-effects/effects/waterfall';
import '@polymer/app-layout/app-toolbar/app-toolbar';
import { html, LitElement } from '@polymer/lit-element';
import { setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings';
import { connect } from 'pwa-helpers/connect-mixin';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query';
import { updateMetadata } from 'pwa-helpers/metadata';
import { installOfflineWatcher } from 'pwa-helpers/network';
import { installRouter } from 'pwa-helpers/router';
import { navigate, updateDrawerState, updateOffline } from '../actions/app.js';
import { store } from '../store.js';
import { HeaderAndFooterStyles } from './header-and-footer-styles.js';
import { menuIcon, mikePosner } from './my-icons.js';
import { SharedStyles } from './shared-styles.js';
import './snack-bar.js';

class MyApp extends connect(store)(LitElement) {
	render() {
		return html`
			${SharedStyles} ${HeaderAndFooterStyles}
			<style>
				header,
				.toolbar-list,
				.page,
				.sticky-left {
					display: none;
				}

				.page[active] {
					display: block;
				}

				/* Workaround for IE11 displaying <main> as inline */
				main {
					display: block;
				}

				.main-content {
					padding-top: 64px;
				}

				.typo {
					margin: 15px;
					width: 15%;
				}

				app-drawer {
					z-index: 4000;
				}
			</style>

			<!-- Mobile Header -->
			<app-header class="show" condenses reveals effects="waterfall">
				<app-toolbar class="toolbar-top">
					<button class="menu-btn" title="Menu" @click="${this._menuButtonClicked}">${menuIcon}</button>
					<div main-title>
						<a href="/" aria-label="Mike Posner"><img class="typo" src="images/original/png/logo.png" alt="Logo"/></a>
					</div>
				</app-toolbar>
			</app-header>

			<!-- Drawer content -->
			<app-drawer .opened="${this._drawerOpened}" @opened-changed="${this._drawerOpenedChanged}">
				<nav class="drawer-list">
					<a ?selected="${this._page === 'books'}" href="/books">Books</a>
					<a href="https://market.ionicframework.com/user/8505" target="_blank">Products</a>
					<a href="https://codepen.io/carlosrojaso/posts/" target="_blank">Blog</a>
				</nav>
			</app-drawer>

			<!-- Main content -->
			<main role="main" class="main-content">
				<my-home class="page" ?active="${this._page === 'home'}"></my-home>
				<my-books class="page" ?active="${this._page === 'books'}"></my-books>
				<my-404 class="page" ?active="${this._page === '404'}"></my-404>
			</main>

			<footer>
				<p class="copyright">Carlos Rojas. 2020.</p>
				<nav class="affiliate-links">
					<a target="_blank" rel="noreferrer" href="https://www.patreon.com/carlosrojas_o">Patreon</a>
					<a target="_blank" rel="noreferrer" href="https://podcast.maestriajs.com">Podcast</a>
					<a target="_blank" rel="noreferrer" href="https://gumroad.com/carlosrojas_o">Gumroad</a>
					<a target="_blank" rel="noreferrer" href="http://j.mp/ytcarlos">Youtube</a>
					<a target="_blank" rel="noreferrer" href="https://es.quora.com/profile/Carlos-Rojas-19">Quora</a>
					<a target="_blank" rel="noreferrer" href="https://mobile.twitter.com/carlosrojas_o">Twitter</a>
					<a target="_blank" rel="noreferrer" href="https://www.instagram.com/carlosrojas_o/">Instagram</a>
					<a target="_blank" rel="noreferrer" href="https://github.com/carlosrojaso">Github</a>
					<a target="_blank" rel="noreferrer" href="https://stackoverflow.com/users/3092766/carlos-rojas">StackOverflow</a>
					<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/carlosrojaso/">linkedin</a>
					<a target="_blank" rel="noreferrer" href="https://linktr.ee/carlosrojas_o">Super Links</a>
				</nav>
			</footer>

			<snack-bar ?active="${this._snackbarOpened}"> You are now ${this._offline ? 'offline' : 'online'}.</snack-bar>
		`;
	}

	static get properties() {
		return {
			appTitle: { type: String },
			_page: { type: String },
			_drawerOpened: { type: Boolean },
			_snackbarOpened: { type: Boolean },
			_offline: { type: Boolean },
		};
	}

	constructor() {
		super();
		// To force all event listeners for gestures to be passive.
		// See https://www.polymer-project.org/3.0/docs/devguide/settings#setting-passive-touch-gestures
		setPassiveTouchGestures(true);
	}

	firstUpdated() {
		installRouter(location => store.dispatch(navigate(decodeURIComponent(location.pathname))));
		installOfflineWatcher(offline => store.dispatch(updateOffline(offline)));
		installMediaQueryWatcher(`(min-width: 1200px)`, () => store.dispatch(updateDrawerState(false)));
	}

	updated(changedProps) {
		if (changedProps.has('_page')) {
			const pageTitle = this.appTitle + ' - ' + this._page;
			updateMetadata({
				title: pageTitle,
				description: pageTitle,
				// This object also takes an image property, that points to an img src.
			});
		}
	}

	_menuButtonClicked() {
		store.dispatch(updateDrawerState(true));
	}

	_drawerOpenedChanged(e) {
		store.dispatch(updateDrawerState(e.target.opened));
	}

	stateChanged(state) {
		this._page = state.app.page;
		this._offline = state.app.offline;
		this._snackbarOpened = state.app.snackbarOpened;
		this._drawerOpened = state.app.drawerOpened;
	}
}

window.customElements.define('my-app', MyApp);
