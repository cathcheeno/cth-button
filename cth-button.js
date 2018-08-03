import { LitElement, html } from '@polymer/lit-element';

/**
 * `cth-button`
 * Button component.
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class CthButton extends LitElement {

  static get properties() {
    return {
      theme: String
    };
  }

  _render({ theme }) {
    return html`
      <style>
        :host {
          display: block;
          background-color: blue;
        }
        .label {
          color: white;
          font-weight: bold;
        }
      </style>
      <div class="label">Button</div>
    `;
  }

}

window.customElements.define('cth-button', CthButton);
