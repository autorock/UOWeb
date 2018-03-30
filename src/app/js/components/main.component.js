import {
  Element as PolymerElement
} from '@polymer/polymer/polymer-element.js';

export class MainComponent extends PolymerElement {

  static get template() {
    return `<div>[[msg]]</div>`
  }

  constructor() {
    super();
    this.msg = 'MainComponent rendered';
  }

  static get properties() {
    msg: {
      Type: String
    }
  }
}

customElements.define('app-main', MainComponent);
