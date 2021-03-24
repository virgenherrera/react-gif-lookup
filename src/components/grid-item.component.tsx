import React from 'react';

export interface GridItemProps {
  title: string;
  url: string;
}

export function GridItemComponent({ title, url }: GridItemProps) {
  return (
    <div className="card animate__animated animate__fadeIn">
      <img crossOrigin="anonymous" src={url} alt={title} />
      <p> {title} </p>
    </div>
  );
}
