import { LitElement, css, html } from "lit";
import "../components/SearchResults/search-result.js";
import "../components/SearchResults/search-filter.js";

export class SearchResults extends LitElement {
  static properties = {
    videoDetails: {},
    order: "",
    query: "",
    onFilter: () => {},
  };

  static styles = css`
    :host {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .listWrapper {
      width: 100%;
      padding: 12px;
      list-style: none;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 16px;
    }
  `;

  constructor() {
    super();
  }

  render() {
    let resultTemplate = [];
    for (let video of this.videoDetails) {
      resultTemplate.push(html`
        <search-result .video=${video}></search-result>
      `);
    }
    return html`
      <search-filter
        order=${this.order}
        query=${this.query}
        .onFilter=${this.onFilter}
      ></search-filter>
      <ul class="listWrapper">
        ${resultTemplate}
      </ul>
    `;
  }
}
customElements.define("search-results", SearchResults);
