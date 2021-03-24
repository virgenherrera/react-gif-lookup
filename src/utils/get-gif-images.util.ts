import { from, of, throwError } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { catchError, map, pluck, switchMap } from 'rxjs/operators';
import { GifImage } from '../models/gif-image.model';

export function getGifImages(category: string) {
  const baseUrl =
    'https://api.giphy.com/v1/gifs/search?q=:category&limit=10&api_key=A8xMXqzieIHmtO3BjGLAtf1daSSDAv8K';
  const url = baseUrl.replace(':category', encodeURI(category));

  return fromFetch(url)
    .pipe(
      switchMap(response => {
        return response.ok ? from(response.json()) : throwError(response);
      }),
    )
    .pipe(
      pluck('data'),
      map<any, GifImage[]>((data: any[]) =>
        data.map((row: any) => new GifImage(row)),
      ),
    )
    .pipe(
      catchError(err => {
        // Network or other error, handle appropriately
        console.error(err);
        return of([]);
      }),
    );
}
