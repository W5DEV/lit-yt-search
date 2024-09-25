import { LitElement, html, css } from "lit";
import fetchSearchResults from "./api/fetchSearchResults";
import fetchVideoStatistics from "./api/fetchVideoStatistics";

export class ExampleButton extends LitElement {
  static get tag() {
    return "example-button";
  }

  static get styles() {
    return css`
      :host {
        display: block;
        border: solid 1px gray;
        padding: 12px;
        border-radius: 24px;
        height: 48px;
        max-width: 800px;
        margin: 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      input {
        height: 24px;
        font-size: 24px;
        border: none;
        color: red;
        background-color: transparent;
        flex: 1;

        &:focus {
          outline: none;
        }
      }
      button {
        border: none;
        color: red;
        cursor: pointer;
        background-color: transparent;

        &:hover {
          background-color: transparent;
        }
      }
      .searchIcon {
        height: 36px;
      }
    `;
  }

  static get properties() {
    return {
      name: { type: String },
      count: { type: Number },
    };
  }

  constructor() {
    super();
    this.query = "";
  }

  render() {
    return html`
      <input
        type="text"
        .value=${this.query}
        @input=${(e) => (this.query = e.target.value)}
      />
      <button @click=${this._onClick} part="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="searchIcon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </button>
    `;
  }

  async _onClick() {
    this.dispatchEvent(new CustomEvent("api-call"));
    console.log(this.query);
    const results = await fetchSearchResults(this.query, "relevance");
    console.log(results);
    const videoId = results[0].id.videoId;
    const statistics = await fetchVideoStatistics(videoId);
    console.log(statistics);
  }
}

window.customElements.define("example-button", ExampleButton);
