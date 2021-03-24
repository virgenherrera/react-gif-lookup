import { useEffect, useState } from 'react';
import { FetchGifsState } from '../models/fetch-gifs-state.model';
import { getGifImages } from '../utils/get-gif-images.util';

export function useFetchGifs(category: string) {
  const [state, setState] = useState(new FetchGifsState());

  useEffect(() => {
    const subscription$ = getGifImages(category).subscribe({
      next: images => {
        setState(new FetchGifsState({ loading: false, images }));
        subscription$.unsubscribe();
      },
    });
  }, [category]);

  return state;
}
