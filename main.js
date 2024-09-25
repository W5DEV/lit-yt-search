import { LitElement, css, html } from "lit";
import fetchVideoData from "./src/api/fetchVideoData.js";
import "./src/views/splash-page.js";
import "./src/views/search-results.js";
import { query } from "lit/decorators.js";

export class MainComponent extends LitElement {
  static properties = {
    onSubmit: () => {},
    onFilter: () => {},
    videoDetails: [],
    loading: false,
    query: "",
    order: "",
  };

  constructor() {
    super();
    this.query = "";
    this.order = "Relevance";
    this.onSubmit = async (submittedQuery) => {
      this.loading = true;
      this.query = submittedQuery;
      this.videoDetails = await fetchVideoData(this.query, this.order);
      this.loading = false;
    };
    this.onFilter = async (filter) => {
      this.loading = true;
      this.order = filter;
      this.videoDetails = await fetchVideoData(this.query, this.order);
      this.loading = false;
    };
  }

  static styles = css`
    :host {
      max-width: 100vw;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 20px;
      gap: 20px;
    }
  `;

  render() {
    return this.loading
      ? html`<h1>Loading...</h1>`
      : this.videoDetails
      ? html` <search-results
          .videoDetails=${this.videoDetails}
          .order=${this.order}
          .onFilter=${this.onFilter}
          .query=${this.query}
        ></search-results>`
      : html` <splash-page
          .query=${this.query}
          .onSubmit=${this.onSubmit}
        ></splash-page>`;
  }
}
customElements.define("main-component", MainComponent);
