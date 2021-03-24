export class GifImage {
  id: string;
  title: string;
  url: string;

  constructor(args: GifImage & any = {}) {
    this.id = args.id;
    this.title = args.title;
    this.url = args.images.downsized_medium.url;
  }
}
