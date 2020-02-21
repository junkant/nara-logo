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
      __logo: { type: String },
    };
  }

  pathFromUrl(url) {
    return url.substring(0, url.lastIndexOf("/") + 1);
  }
  /**
   * HTMLElement
   */
  constructor() {
    super();
    this.format = 'stack';
    this.basePath = new URL('.', import.meta.url).pathname;
  }

  /**
   * LitElement life cycle - render
   */
  render() {
    return html`
      <img src="${this.__logo}" loading="lazy" alt="" />
    `;
  }
  /**
   * LitElement life cycle - property changed
   */
  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName == 'format') {
        switch (this[propName]) {
          case 'stack':
          case 'horizontal':
          case 'eagle':
            this.__logo = `${this.basePath}/nara-logo-${this[propName]}.svg`;
            break;
          // this way if someone screws it up it still does something
          default:
            this.__logo = `${this.basePath}/nara-logo-stack.svg`;
            break;
        }
      }
    });
  }
}
