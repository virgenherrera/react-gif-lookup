import React from 'react';
import { useFetchGifs } from '../hooks/use-fetch-gifs.hook';
import { GridItemComponent } from './grid-item.component';

export interface GifGridProps {
  category: string;
}

export function GifGridComponent({ category }: GifGridProps) {
  const { images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__fadeIn"> {category} </h3>

      {loading && <p className="animate__animated animate__flash">Loading</p>}

      <div className="card-grid">
        {images.map(image => (
          <GridItemComponent key={image.id} {...image} />
        ))}
      </div>
    </>
  );
}
