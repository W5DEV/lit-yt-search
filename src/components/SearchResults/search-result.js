import { LitElement, css, html } from "lit";

export class SearchResult extends LitElement {
  static properties = {
    video: {},
  };

  static styles = css`
    :host {
      width: 100%;
    }
    .listItem {
      display: flex;
      justify-content: center;
      align-items: start;
      flex-direction: row;
      gap: 8px;
      padding: 12px;
      border-radius: 12px;

      &:hover {
        background-color: #262626;
      }
    }
    .imageContainer {
      width: 224px;
      height: 126px;
      overflow: hidden;
      border-radius: 12px;
    }
    a {
      font-size: 20px;
      font-weight: semibold;
      color: #e5e5e5;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
    img {
      width: 224px;
      height: 126px;
      object-fit: cover;
    }
    .videoDetails {
      display: flex;
      justify-content: center;
      align-items: start;
      flex-direction: column;
      flex: 1;
      gap: 8px;
    }
    p {
      margin: 0;
    }
    .commentCount {
      font-size: 12px;
      color: #737373;
    }
    .videoDescription {
      font-size: 12px;
      color: #e5e5e5;
      font-weight: lighter;
    }
  `;

  constructor() {
    super();
  }

  render() {
    return html`
      <li class="listItem">
        <div class="imageContainer">
          <img src=${this.video.image} />
        </div>
        <div class="videoDetails">
          <a href="https://www.youtube.com/watch?v=${this.video.videoId}"
            >${this.video.title.toLocaleString()}</a
          >
          <p class="commentCount">
            ${Number(this.video.commentCount).toLocaleString()} comments
          </p>
          <p class="videoDescription">${this.video.description}</p>
        </div>
      </li>
    `;
  }
}
customElements.define("search-result", SearchResult);
