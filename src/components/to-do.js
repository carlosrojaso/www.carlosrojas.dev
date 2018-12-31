/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html } from "@polymer/lit-element";
import { PageViewElement } from "./page-view-element.js";
// These are the shared styles needed by this element.
import { SharedStyles } from "./shared-styles.js";

class ToDo extends PageViewElement {
  render() {
    return html`
      ${SharedStyles}
      <section>
        <h2>Things I Still Want To Do Before I Die:</h2>
        <ol>
          <li>GO TO OUTER SPACE- number one bucket list thing for me.</li>
          <li>
            Get my MSW and work as a hospice chaplain (I think working around
            death will help me lead a better life.)
          </li>
          <li>Study music theory at Berklee or somewhere good</li>
          <li>Take ear training at Berklee</li>
          <li>Intern for Richard Ryan</li>
          <li>Win a Grammy</li>
          <li>Walk across America - I’M DOING THAT THIS YEAR!</li>
          <li>Mentor/produce a younger artist</li>
          <li>read Infinite Jest - I’m DOING THAT NOW!</li>
          <li>Spend a week in solitude - I DID THIS! TWICE!</li>
          <li>
            Get a platinum plaque - I DID THIS SIX TIMES!!! WOOO! For real,
            dreams come true! GO ME!
          </li>
          <li>Do the Landmark Forum - I DID THIS IT WAS AWESOME!</li>
          <li>Drink Ayahuasca - I DID THIS!</li>
          <li>Get married? have a kid?</li>
          <li>Study film and create some bad ass film pieces</li>
          <li>Climb mount everest</li>
          <li>Take my mom to Namibia</li>
        </ol>
      </section>
    `;
  }
}

window.customElements.define("my-todo", ToDo);
