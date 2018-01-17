import './index.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './app/App';
import Game from './game/game';
import Entity from './game/world/entity';
import Vector from './geometry/vector';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);

const game = new Game(
  document.getElementById('entities') as Canvas,
  document.getElementById('background') as Canvas,
  document.getElementById('foreground') as Canvas,
);

game.addEntity(new Entity(game, Vector.ZERO));
game.addEntity(new Entity(game, Vector.ZERO));
game.addEntity(new Entity(game, Vector.ZERO));
game.addEntity(new Entity(game, Vector.ZERO));
game.addEntity(new Entity(game, Vector.ZERO));

game.start();

registerServiceWorker();

(Math as { TAU: number }).TAU = Math.PI * 2;

declare global {
  type Renderer2D = CanvasRenderingContext2D;
  type Canvas = HTMLCanvasElement;

  interface Math {
    readonly TAU: number;
  }
}
