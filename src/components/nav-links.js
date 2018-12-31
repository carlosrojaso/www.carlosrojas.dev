import { html, LitElement } from "@polymer/lit-element";
import { connect } from "pwa-helpers/connect-mixin.js";
import { store } from "../store.js";
import { SharedStyles } from "./shared-styles.js";

class NavLinks extends connect(store)(LitElement) {
  render() {
    return html`
      ${SharedStyles}
      <style>
        .toolbar-list {
          display: none;
        }

        .toolbar-list > a {
          display: inline-block;
          color: var(--app-header-text-color);
          text-decoration: none;
          line-height: 30px;
          padding: 4px 24px;
        }

        .toolbar-list > a[selected] {
          color: var(--app-header-selected-color);
          border-bottom: 4px solid var(--app-header-selected-color);
        }

        .toolbar-list > a[target="_blank"]:after,
        .drawer-list > a[target="_blank"]:after,
        .footer-list > a[target="_blank"]:after {
          content: url("images/new-window-yellow.svg");
          display: inline-block;
          width: 15px;
          height: 15px;
          margin-left: 4px;
        }
      </style>
      <a ?selected="${this._page === "Home"}" href="/"> Join The Walk</a>
      <a ?selected="${this._page === "Discography"}" href="/discography">
        Discography</a
      >
      <a ?selected="${this._page === "Tour"}" href="/tour"> Tour</a>
      <a ?selected="${this._page === "Mission"}" href="/mission"> Mission</a>
      <a
        ?selected="${this._page === "Accomplishments"}"
        href="/accomplishments"
      >
        Accomplishments</a
      >
      <a ?selected="${this._page === "To-Do"}" href="/to-do"> To Do</a>
    `;
  }
}

window.customElements.define("nav-links", NavLinks);
