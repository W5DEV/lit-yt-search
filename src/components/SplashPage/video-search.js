import { LitElement, html, css } from "lit";
import { search } from "./icons.js";

export class VideoSearch extends LitElement {
  static properties = {
    query: {},
    onSubmit: () => {},
  };

  static styles = css`
    :host {
      width: 100%;
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
      color: #e5e5e5;
      background-color: transparent;
      flex: 1;

      &:focus {
        outline: none;
      }
    }
    button {
      border: none;
      color: #e5e5e5;
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

  render() {
    return html` <input
        type="text"
        placeholder="Search"
        @input=${(e) => (this.query = e.target.value)}
      />
      <button @click=${() => this.onSubmit(this.query)} part="button">
        ${search}
      </button>`;
  }
}

customElements.define("video-search", VideoSearch);
