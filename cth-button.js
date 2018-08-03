import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `cth-button`
 * Button component.
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class CthButton extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'cth-button',
      },
    };
  }
}

window.customElements.define('cth-button', CthButton);
