import { LitElement, css, html } from "lit";
import "../components/SplashPage/search-heading.js";
import "../components/SplashPage/video-search.js";

export class SplashPage extends LitElement {
  static properties = {
    query: {},
    onSubmit: () => {},
  };

  static styles = css`
    :host {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  `;

  constructor() {
    super();
  }

  render() {
    return html`
      <search-heading></search-heading>
      <video-search
        .query=${this.query}
        .onSubmit=${this.onSubmit}
      ></video-search>
    `;
  }
}
customElements.define("splash-page", SplashPage);
