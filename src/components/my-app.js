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
import { facebook, instagram, menuIcon, mikePosner, spotify, tumblr, twitter, youtube } from './my-icons.js';
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

				app-drawer {
					z-index: 2000;
				}

				@media (min-width: 1200px) {
					.main-content {
						padding-top: 102px;
					}

					app-header {
						display: none;
					}
				}
			</style>

			<!-- Mobile Header -->
			<app-header condenses reveals effects="waterfall">
				<app-toolbar class="toolbar-top">
					<button class="menu-btn" title="Menu" @click="${this._menuButtonClicked}">${menuIcon}</button>
					<div main-title><a href="/" aria-label="Mike Posner">${mikePosner}</a></div>
				</app-toolbar>
			</app-header>

			<!-- Desktop Navigation Links -->
			<nav class="toolbar-list">
				<a ?selected="${this._page === 'mission'}" href="/mission">Mission</a>
				<a ?selected="${this._page === 'join'}" href="/join">Join The Walk</a>
				<a ?selected="${this._page === 'tour'}" href="/tour">Tour</a>
				<a ?selected="${this._page === 'discography'}" href="/discography">Discography</a>
				<a ?selected="${this._page === 'favorite-albums'}" href="/favorite-albums">My Favorite Albums of All Time</a>
				<a ?selected="${this._page === 'reading-list'}" href="/reading-list">Reading List</a>
				<a ?selected="${this._page === 'accomplishments'}" href="/accomplishments">Random and Subtly Pretentious List of Accomplishments</a>
				<a ?selected="${this._page === 'to-do'}" href="/to-do">Things I Want To Do Before I Die</a>
				<a ?selected="${this._page === 'about'}" href="/about-me">About Me</a>
				<a href="http://amorfatimusicacademy.org/" target="_blank" rel="noreferrer">Amor Fati</a>
				<a ?selected="${this._page === 'listen'}" href="/listen">Listen</a>
			</nav>

			<!-- Play Album Sticky Leftside -->
			<div class="sticky-left">
				<a href="/" aria-label="Mike Posner"><img class="logo" width="210px" src="images/mike-posner.svg" alt="Mike Posner"/></a>
				<img width="170px" src="images/album-cover.svg" alt="A Real Good Kid Album Cover" />
				<img class="listen" width="160px" src="images/listen-copy.svg" alt="Listen to A Real Good Kid" />
				<a class="listen-button" href="https://open.spotify.com/track/0Knc89pMAsIZbK8tor7i93" target="_blank" rel="noreferrer">
					<img width="24px" src="images/spotify-icon.svg" alt="Spotify" />
					<img width="80px" src="images/spotify-copy.svg" alt="Play on Spotify" />
				</a>
				<a
					class="listen-button"
					href="https://geo.itunes.apple.com/us/album/a-real-good-kid/1443035104?mt=1&app=music"
					target="_blank"
					rel="noreferrer"
				>
					<img width="16px" src="images/apple-icon.svg" alt="Apple Music" />
					<img width="106px" src="images/apple-copy.svg" alt="Play on Apple Music" />
				</a>
			</div>

			<!-- Drawer content -->
			<app-drawer .opened="${this._drawerOpened}" @opened-changed="${this._drawerOpenedChanged}">
				<nav class="drawer-list">
					<a ?selected="${this._page === 'mission'}" href="/mission">Mission</a>
					<a ?selected="${this._page === 'join'}" href="/join">Join The Walk</a>
					<a ?selected="${this._page === 'tour'}" href="/tour">Tour</a>
					<a ?selected="${this._page === 'discography'}" href="/discography">Discography</a>
					<a ?selected="${this._page === 'favorite-albums'}" href="/favorite-albums">My Favorite Albums of All Time</a>
					<a ?selected="${this._page === 'reading-list'}" href="/reading-list">Reading List</a>
					<a ?selected="${this._page === 'accomplishments'}" href="/accomplishments"
						>Random and Subtly Pretentious List of Accomplishments</a
					>
					<a ?selected="${this._page === 'to-do'}" href="/to-do">Things I Want To Do Before I Die</a>
					<a ?selected="${this._page === 'about'}" href="/about-me">About Me</a>
					<a href="http://amorfatimusicacademy.org/" target="_blank" rel="noreferrer">Amor Fati</a>
					<a ?selected="${this._page === 'listen'}" href="/listen">Listen</a>
				</nav>
			</app-drawer>

			<!-- Main content -->
			<main role="main" class="main-content">
				<my-home class="page" ?active="${this._page === 'home'}"></my-home>
				<my-join class="page" ?active="${this._page === 'join'}"></my-join>
				<my-tour class="page" ?active="${this._page === 'tour'}"></my-tour>
				<my-discography class="page" ?active="${this._page === 'discography'}"></my-discography>
				<my-favorite-albums class="page" ?active="${this._page === 'favorite-albums'}"></my-favorite-albums>
				<my-reading-list class="page" ?active="${this._page === 'reading-list'}"></my-reading-list>
				<my-mission class="page" ?active="${this._page === 'mission'}"></my-mission>
				<my-accomplishments class="page" ?active="${this._page === 'accomplishments'}"></my-accomplishments>
				<my-todo class="page" ?active="${this._page === 'to-do'}"></my-todo>
				<my-about class="page" ?active="${this._page === 'about-me'}"></my-about>
				<my-listen class="page" ?active="${this._page === 'listen'}"></my-listen>
				<my-404 class="page" ?active="${this._page === '404'}"></my-404>
			</main>

			<footer>
				<p class="copyright">&copy; 2019 Mike Posner Offical Website. All Rights Reserved.</p>
				<nav class="footer-list">
					<a target="_blank" rel="noreferrer" href="http://privacypolicy.umusic.com/">Privacy Policy</a>
					<a target="_blank" rel="noreferrer" href="http://privacypolicy.umusic.com/terms/">Terms of Use</a>
				</nav>
				<nav class="affiliate-links">
					<a target="_blank" rel="noreferrer" href="https://shopmikeposner.com/">Shop</a>
					<a target="_blank" rel="noreferrer" href="http://whatdoesthisallmeanpodcast.com/">Podcast</a>
					<a target="_blank" rel="noreferrer" href="https://www.teardropsandballoons.com/">Poetry</a>
					<a target="_blank" rel="noreferrer" href="http://mikeposner.co/blog">Blog</a>
					<a target="_blank" rel="noreferrer" href="http://mikeposner.co/hate">Hate Mail</a>
				</nav>
				<div class="social-links">
					<div><a target="_blank" rel="noreferrer" href="http://mikeposner.co/youtube" aria-label="youtube">${youtube}</a></div>
					<div><a target="_blank" rel="noreferrer" href="http://mikeposner.co/twitter" aria-label="twitter">${twitter}</a></div>
					<div><a target="_blank" rel="noreferrer" href="http://mikeposner.co/instagram" aria-label="instagram">${instagram}</a></div>
					<div><a target="_blank" rel="noreferrer" href="http://mikeposner.co/facebook" aria-label="facebook">${facebook}</a></div>
					<div><a target="_blank" rel="noreferrer" href="http://mikeposner.co/tumblr" aria-label="tumblr">${tumblr}</a></div>
					<div><a target="_blank" rel="noreferrer" href="http://mikeposner.co/posnerspotify" aria-label="spotify">${spotify}</a></div>
				</div>
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
