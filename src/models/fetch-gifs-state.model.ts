import { GifImage } from './gif-image.model';

export class FetchGifsState {
  loading = true;
  images: GifImage[] = [];

  constructor(args: Partial<FetchGifsState> = {}) {
    Object.assign(this, args);
  }
}
