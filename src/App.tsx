import React, { useState } from 'react';
import { GifGridComponent } from './components/gif-grid.component';
import { SearchFormComponent } from './components/search-form.component';

export function App() {
  const [categories, setCategories] = useState<string[]>([]);

  return (
    <>
      <h2>GifExpertApp</h2>
      <SearchFormComponent setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map(category => (
          <GifGridComponent key={category} category={category} />
        ))}
      </ol>
    </>
  );
}
