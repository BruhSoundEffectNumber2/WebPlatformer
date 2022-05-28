import {
  DisplayMode,
  Engine,
  Input,
  Loader,
  Scene,
  ScrollPreventionMode,
} from 'excalibur';
import {ArtResources, SoundResources, TiledMapResources} from './resources';

export class Game extends Engine {
  constructor() {
    super({
      resolution: {width: 1280, height: 720},
      canvasElementId: 'game',
      enableCanvasTransparency: true,
      pointerScope: Input.PointerScope.Document,
      displayMode: DisplayMode.FitScreen,
      suppressPlayButton: true,
      suppressConsoleBootMessage: true,
      scrollPreventionMode: ScrollPreventionMode.All,
    });

    this.start().then(() => {
      // TODO: Some logic
      TiledMapResources.test.addTiledMapToScene(this.currentScene);
    });
  }

  override start() {
    // Automatically load all default resources
    const loader = new Loader();

    // Add resources to loader
    loader.addResources(Object.values(ArtResources));
    loader.addResources(Object.values(SoundResources));
    loader.addResources(Object.values(TiledMapResources));

    return super.start(loader);
  }
}
