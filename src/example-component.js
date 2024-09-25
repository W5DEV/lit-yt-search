import { LitElement, html, css } from "lit";

export class ExampleComponent extends LitElement {
  static get tag() {
    return "example-component";
  }

  constructor() {
    super();
    this.title = "Example Component";
  }

  static get styles() {
    return css`
      :host {
        color: red;
      }
    `;
  }

  render() {
    return html`<div>${this.title}</div>`;
  }

  static get properties() {
    return {
      title: { type: String },
    };
  }
}

globalThis.customElements.define(ExampleComponent.tag, ExampleComponent);
