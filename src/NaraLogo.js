import { html, css, LitElement } from 'lit-element';

export class NaraLogo extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 5px;
      }
    `;
  }

  static get properties() {
    return {
      stacked: { type: String },
      horizontal: { type: String },
      eagle: { type: String },
    };
  }

  constructor() {
    super();
    this.stacked = '/nara-logo-stack.svg';
    this.horizontal = '/nara-logo-horizontal.svg';
    this.eagle = '/nara-logo-eagle.svg';
  }

  render() {
    return html`
      <img src="${this.horizontal}" />
    `;
  }
}
