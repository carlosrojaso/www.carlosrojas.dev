/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

// These are the elements needed by this element.
import "@polymer/app-layout/app-drawer/app-drawer.js";
import "@polymer/app-layout/app-header/app-header.js";
import "@polymer/app-layout/app-scroll-effects/effects/waterfall.js";
import "@polymer/app-layout/app-toolbar/app-toolbar.js";
import { html, LitElement } from "@polymer/lit-element";
import { setPassiveTouchGestures } from "@polymer/polymer/lib/utils/settings.js";
import { connect } from "pwa-helpers/connect-mixin.js";
import { installMediaQueryWatcher } from "pwa-helpers/media-query.js";
import { updateMetadata } from "pwa-helpers/metadata.js";
import { installOfflineWatcher } from "pwa-helpers/network.js";
import { installRouter } from "pwa-helpers/router.js";
// These are the actions needed by this element.
import { navigate, updateDrawerState, updateOffline } from "../actions/app.js";
// This element is connected to the Redux store.
import { store } from "../store.js";
import {
  facebook,
  instagram,
  menuIcon,
  mikePosner,
  spotify,
  tumblr,
  twitter,
  youtube
} from "./my-icons.js";
import "./snack-bar.js";

class MyApp extends connect(store)(LitElement) {
  render() {
    // Anything that's related to rendering should be done in here.
    return html`
      <style>
        :host {
          --app-drawer-width: 256px;
          display: block;

          --app-primary-color: #ff6b00;
          --app-secondary-color: #f1d09f;
          --app-tertiary-color: #673918;
          --app-dark-text-color: var(--app-tertiary-color);
          --app-light-text-color: var(--app-secondary-color);
          --app-section-odd-color: white;
          --app-section-even-color: var(--app-secondary-color);

          --app-header-background-color: var(--app-primary-color);
          --app-header-text-color: var(--app-primary-color);
          --app-header-selected-color: var(--app-tertiary-color);
          --app-header-hover-color: var(--app-secondary-color);

          --app-drawer-background-color: var(--app-primary-color);
          --app-drawer-text-color: var(--app-secondary-color);
          --app-drawer-selected-color: var(--app-tertiary-color);
          --app-drawer-hover-color: var(--app-selected-color);
        }

        app-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          text-align: center;
          /* background-color: var(--app-header-background-color); */
          color: var(--app-header-text-color);
          border-bottom: 1px solid var(--app-header-selected-color);
        }

        .toolbar-top {
          background-color: white;
        }

        [main-title] {
          padding-right: 44px;
          height: 100%;
        }

        [main-title] > svg {
          height: 100%;
          padding: 0.5em 0;
          box-sizing: border-box;
        }

        .toolbar-list {
          display: none;
        }

        .toolbar-list > a {
          display: inline-block;
          color: var(--app-header-text-color);
          text-decoration: none;
          line-height: 30px;
          padding: 4px 24px;
          transition: all 200ms ease;
        }

        .toolbar-list > a[selected] {
          color: var(--app-header-selected-color);
          border-bottom: 4px solid var(--app-header-selected-color);
        }

        .toolbar-list > a:hover:not([selected]) {
          color: var(--app-header-hover-color);
          transition: all 200ms ease;
        }

        .toolbar-list > a[target="_blank"]:after,
        .drawer-list > a[target="_blank"]:after,
        .footer-list > a[target="_blank"]:after,
        .affiliate-links > a[target="_blank"]:after {
          content: url("images/new-window-yellow.svg");
          display: inline-block;
          width: 15px;
          height: 15px;
          margin-left: 4px;
        }

        .menu-btn {
          background: none;
          border: none;
          fill: var(--app-header-text-color);
          cursor: pointer;
          height: 44px;
          width: 44px;
        }

        .drawer-list {
          box-sizing: border-box;
          width: 100%;
          height: 100%;
          padding: 24px;
          background: var(--app-drawer-background-color);
          position: relative;
        }

        .drawer-list > a {
          display: block;
          text-decoration: none;
          color: var(--app-drawer-text-color);
          line-height: 40px;
          padding: 0 24px;
          transition: all 200ms ease;
        }

        .drawer-list > a[selected] {
          color: var(--app-drawer-selected-color);
        }

        /* Workaround for IE11 displaying <main> as inline */
        main {
          display: block;
        }

        .main-content {
          padding-top: 64px;
        }

        .page {
          display: none;
        }

        .page[active] {
          display: block;
        }

        footer {
          padding: 24px;
          background: var(--app-drawer-background-color);
          color: var(--app-tertiary-color);
          text-align: center;
          text-transform: uppercase;
          font-size: 10px;
        }

        .affiliate-links {
          margin-top: 16px;
        }

        .footer-list > a,
        .affiliate-links > a {
          text-decoration: none;
          color: var(--app-tertiary-color);
          padding: 0 12px;
          transition: all 200ms ease;
        }

        .footer-list > a:hover,
        .affiliate-links > a:hover {
          color: var(--app-secondary-color);
          transition: all 200ms ease;
        }

        .social-links {
          margin-top: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .social-links div {
          width: 20px;
          height: auto;
          margin-right: 12px;
        }

        .social-links div:last-child {
          margin-right: 0;
        }

        .social-links svg {
          fill: var(--app-tertiary-color);
          transition: all 200ms ease;
        }

        .social-links svg:hover {
          fill: var(--app-secondary-color);
          transition: all 200ms ease;
        }

        /* Wide layout: when the viewport width is bigger than 460px, layout
        changes to a wide layout. */
        @media (min-width: 460px) {
          .toolbar-list {
            display: block;
          }

          .menu-btn {
            display: none;
          }

          .main-content {
            padding-top: 107px;
          }

          /* The drawer button isn't shown in the wide layout, so we don't
          need to offset the title */
          [main-title] {
            padding-right: 0px;
          }
        }
      </style>

      <!-- Header -->
      <app-header condenses reveals effects="waterfall">
        <app-toolbar class="toolbar-top">
          <button
            class="menu-btn"
            title="Menu"
            @click="${this._menuButtonClicked}"
          >
            ${menuIcon}
          </button>
          <span main-title>${mikePosner}</span>
        </app-toolbar>

        <nav class="toolbar-list">
          <a ?selected="${this._page === "Home"}" href="/">Join The Walk</a>
          <a ?selected="${this._page === "Discography"}" href="/Discography"
            >Discography</a
          >
          <a ?selected="${this._page === "Tour"}" href="/Tour">Tour</a>
          <a ?selected="${this._page === "Mission"}" href="/Mission">Mission</a>
          <a
            ?selected="${this._page === "Accomplishments"}"
            href="/Accomplishments"
            >Accomplishments</a
          >
          <a ?selected="${this._page === "To-Do"}" href="/To-Do">To Do</a>
        </nav>
      </app-header>

      <!-- Drawer content -->
      <app-drawer
        .opened="${this._drawerOpened}"
        @opened-changed="${this._drawerOpenedChanged}"
      >
        <nav class="drawer-list">
          <a ?selected="${this._page === "Home"}" href="/">Join The Walk</a>
          <a ?selected="${this._page === "Discography"}" href="/Discography"
            >Discography</a
          >
          <a ?selected="${this._page === "Tour"}" href="/Tour">Tour</a>
          <a ?selected="${this._page === "Mission"}" href="/Mission">Mission</a>
          <a
            ?selected="${this._page === "Accomplishments"}"
            href="/Accomplishments"
            >Accomplishments</a
          >
          <a ?selected="${this._page === "To-Do"}" href="/To-Do">To Do</a>
        </nav>
      </app-drawer>

      <!-- Main content -->
      <main role="main" class="main-content">
        <my-home class="page" ?active="${this._page === "Home"}"></my-home>
        <my-discography
          class="page"
          ?active="${this._page === "Discography"}"
        ></my-discography>
        <my-tour class="page" ?active="${this._page === "Tour"}"></my-tour>
        <my-mission
          class="page"
          ?active="${this._page === "Mission"}"
        ></my-mission>
        <my-accomplishments
          class="page"
          ?active="${this._page === "Accomplishments"}"
        ></my-accomplishments>
        <my-todo class="page" ?active="${this._page === "To-Do"}"></my-todo>
        <my-view404
          class="page"
          ?active="${this._page === "view404"}"
        ></my-view404>
      </main>

      <footer>
        <p>&copy; 2019 Mike Posner Offical Website. All Rights Reserved.</p>
        <nav class="footer-list">
          <a
            target="_blank"
            rel="noreferrer"
            href="http://privacypolicy.umusic.com/"
            >Privacy Policy</a
          >
          <a
            target="_blank"
            rel="noreferrer"
            href="http://privacypolicy.umusic.com/terms/"
            >Terms of Use</a
          >
        </nav>
        <nav class="affiliate-links">
          <a target="_blank" rel="noreferrer" href="https://shopmikeposner.com/"
            >Shop</a
          >
          <a
            target="_blank"
            rel="noreferrer"
            href="http://whatdoesthisallmeanpodcast.com/"
            >Podcast</a
          >
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.teardropsandballoons.com/"
            >Poetry</a
          >
          <a target="_blank" rel="noreferrer" href="http://mikeposner.co/blog"
            >Blog</a
          >
          <a target="_blank" rel="noreferrer" href="http://mikeposner.co/hate"
            >Hate Mail</a
          >
        </nav>
        <div class="social-links">
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href="http://mikeposner.co/youtube"
              >${youtube}</a
            >
          </div>
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href="http://mikeposner.co/twitter"
              >${twitter}</a
            >
          </div>
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href="http://mikeposner.co/instagram"
              >${instagram}</a
            >
          </div>
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href="http://mikeposner.co/facebook"
              >${facebook}</a
            >
          </div>
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href="http://mikeposner.co/tumblr"
              >${tumblr}</a
            >
          </div>
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href="http://mikeposner.co/posnerspotify"
              >${spotify}</a
            >
          </div>
        </div>
      </footer>

      <snack-bar ?active="${this._snackbarOpened}">
        You are now ${this._offline ? "offline" : "online"}.</snack-bar
      >
    `;
  }

  static get properties() {
    return {
      appTitle: { type: String },
      _page: { type: String },
      _drawerOpened: { type: Boolean },
      _snackbarOpened: { type: Boolean },
      _offline: { type: Boolean }
    };
  }

  constructor() {
    super();
    // To force all event listeners for gestures to be passive.
    // See https://www.polymer-project.org/3.0/docs/devguide/settings#setting-passive-touch-gestures
    setPassiveTouchGestures(true);
  }

  firstUpdated() {
    installRouter(location =>
      store.dispatch(navigate(decodeURIComponent(location.pathname)))
    );
    installOfflineWatcher(offline => store.dispatch(updateOffline(offline)));
    installMediaQueryWatcher(`(min-width: 460px)`, () =>
      store.dispatch(updateDrawerState(false))
    );
  }

  updated(changedProps) {
    if (changedProps.has("_page")) {
      const pageTitle = this.appTitle + " - " + this._page;
      updateMetadata({
        title: pageTitle,
        description: pageTitle
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

window.customElements.define("my-app", MyApp);
