import { html, css, LitElement } from 'lit-element';

export class NaraLogo extends LitElement {
  /**
   * LitElement life cycle - css render
   */
  static get styles() {
    return [css`
      :host {
        display: inline-flex;
        padding: var(--nara-logo-padding, 5px);
      }
      img {
        width: var(--nara-logo-width, auto);
        height: var(--nara-logo-height, auto);
      }
    `];
  }
  /**
   * LitElement / popular convention
   */
  static get properties() {
    return {
      format: { type: String },
      basePath: { type: String, attribute: "base-path" },
      __logo: { type: String }
    };
  }
  /**
   * HTMLElement
   */
  constructor() {
    super();
    this.format = 'stack';
    this.basePath = this.basePath = new URL('.', import.meta.url).pathname;
  }
  /**
   * LitElement life cycle - render
   */
  render() {
    return html`
      <img src="${this.basePath}/${this.__logo}" alt="" />
    `;
  }
  /**
   * LitElement life cycle - property changed
   */
  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName == "format") {
        switch (this[propName]) {
          case 'stack':
          case 'horizontal':
          case 'eagle':
            this.__logo = `nara-logo-${this[propName]}.svg`;
            break;
          // this way if someone screws it up it still does something
          default:
            this.__logo = `nara-logo-stack.svg`;
            break;
        }
      }
    });
  }
}
