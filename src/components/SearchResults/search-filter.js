import { LitElement, css, html } from "lit";

export class SearchFilter extends LitElement {
  static properties = {
    order: "",
    query: "",
    openMenu: false,
    onFilter: () => {},
  };

  static styles = css`
    :host {
      width: 100%;
    }
    .filterContainer {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 16px;
      border-bottom: solid 1px gray;
    }
    h1 {
      color: #e5e5e5;
      font-weight: semibold;
      line-height: 28px;
    }
    button {
      display: flex;
      align-items: center;
      font-size: 14px;
      line-height: 24px;
      font-weight: medium;
      column-gap: 4px;
      background-color: transparent;
      color: #e5e5e5;
      border: none;
    }
    .sortText {
      font-weight: light;
    }
    svg {
      width: 20px;
      height: 20px;
      color: #737373;
    }
    .relative {
      position: relative;
    }
    .dropdownMenu {
      position: absolute;
      width: auto;
      height: auto;
      background-color: #171717;
      border-radius: 6px;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
      z-index: 10;
      top: 48px;
      right: 0;
    }
    .menuItem {
      display: block;
      width: 100%;
      padding: 8px 16px;
      font-size: 14px;

      &:hover {
        background-color: #262626;
      }
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .hidden {
      display: none;
    }
  `;

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="filterContainer">
        <h1>Results for '${this.query}'</h1>

        <!-- Sort dropdown -->
        <div class="relative">
          <button
            type="button"
            @click=${() => (this.openMenu = !this.openMenu)}
            id="sort-menu-button"
            aria-expanded="false"
            aria-haspopup="true"
          >
            Sort Results by <span class="sortText">'${this.order}'</span>
            <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path
                fill-rule="evenodd"
                d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <div
            class=${this.openMenu ? "dropdownMenu" : "hidden"}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="sort-menu-button"
          >
            <ul class="py-1">
              <li class="relative">
                <button
                  @click=${() => this.onFilter("Relevance")}
                  class="menuItem"
                  role="menuitem"
                >
                  Relevance
                </button>
              </li>
              <li class="relative">
                <button
                  @click=${() => this.onFilter("Rating")}
                  class="menuItem"
                  role="menuitem"
                >
                  Rating
                </button>
              </li>
              <li class="relative">
                <button
                  @click=${() => this.onFilter("Date")}
                  class="menuItem"
                  role="menuitem"
                >
                  Date
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define("search-filter", SearchFilter);
