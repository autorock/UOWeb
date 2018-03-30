import {
  Element as PolymerElement
} from '@polymer/polymer/polymer-element.js';
import playerSprite from './sprite.png';

export class PlayerComponent extends PolymerElement {

  static get template() {
    return `
      <style>
        :host {
          display: inline-block;
        }

        @keyframes walk {
          from {background-position-x: 0px}
          to {background-position-x: -580px}
        }

        .player {
          width: 58px;
          height: 77px;
          background-color: black;
          background-image: url(${playerSprite});
        }

        .player.walk.e {
          background-position-y: -693px;
        }

        .player.walk.n {
          background-position-y: -770px;
        }

        .player.walk.ne {
          background-position-y: -847px;
        }

        .player.walk.nw {
          background-position-y: -924px;
        }

        .player.walk.s {
          background-position-y: -1001px;
        }

        .player.walk.se {
          background-position-y: -1078px;
        }

        .player.walk.sw {
          background-position-y: -1155px;
        }

        .player.walk.w {
          background-position-y: -1232px;
        }

        .player.run.e {
          background-position-y: -77px;
        }

        .player.run.ne {
          background-position-y: -154px;
        }

        .player.run.nw {
          background-position-y: -231px;
        }

        .player.run.s {
          background-position-y: -308px;
        }

        .player.run.se {
          background-position-y: -385px;
        }

        .player.run.sw {
          background-position-y: -462px;
        }

        .player.run.w {
          background-position-y: -539px;
        }

        .player.run.n {
          background-position-y: -616px;
        }

        .player.walk, .player.run {
          animation: walk .9s steps(10) infinite;
        }

        .player.idle {
          background-position-x: 0px;
        }

        .player.idle.e {
          background-position-x: 0px;
        }
        .player.idle.n {
          background-position-x: -58px;
        }
        .player.idle.ne {
          background-position-x: -116px;
        }
        .player.idle.nw {
          background-position-x: -174px;
        }
        .player.idle.s {
          background-position-x: -232px;
        }
        .player.idle.se {
          background-position-x: -290px;
        }
        .player.idle.sw {
          background-position-x: -348px;
        }
        .player.idle.w {
          background-position-x: -406px;
        }
      </style>

      <div class$="[[className]]"></div>
    `
  }

  constructor() {
    super();
  }

  computeClassName(action, direction) {
    return `player ${action} ${direction}`;
  }

  static get properties() {
    return {
      action: {
        type: String,
        notify: true,
        readonly: true,
        value: false
      },
      direction: {
        type: String,
        notify: false,
        readonly: true,
        value: 's'
      },
      className: {
        type: String,
        computed: 'computeClassName(action, direction)'
      }
    };
  }
}

customElements.define('uow-player', PlayerComponent);
