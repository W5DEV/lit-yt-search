import { LitElement, css, html } from "lit";

export class SearchHeading extends LitElement {
  static properties = {
    name: {},
  };

  static styles = css`
    :host {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      font-weight: bold;
    }
  `;

  constructor() {
    super();
    this.heading = "YouTube Search API";
  }

  render() {
    return html`<h1>${this.heading}</h1>`;
  }
}
customElements.define("search-heading", SearchHeading);
