import React, { FormEvent, useState } from 'react';

export interface SearchFormProps {
  setCategories: React.Dispatch<React.SetStateAction<string[]>>;
}

export function SearchFormComponent({ setCategories }: SearchFormProps) {
  const [inputValue, setInputValue] = useState('');

  const formSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories(prevCategories => [inputValue, ...prevCategories]);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={formSubmit}>
      <p> {inputValue} </p>
      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
    </form>
  );
}
