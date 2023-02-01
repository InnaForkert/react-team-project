import { useState } from 'react';
import {
  SelectDate,
  SelectInput,
  SelectContainer,
} from './DropdownMenu.styled';

const categories = ['Select a category'];

export default function DropdownMenu({ expenseCategories, handleDropDown }) {
  expenseCategories.map(({ id, name }) => {
    categories.push(name);
    return null;
  });

  const [categoryDropdownShown, setCategoryDropdownShown] = useState(false);

  const [category, setCategory] = useState(0);

  function handleCategoryChange(e) {
    setCategory(e.target.dataset.idx);
    handleDropDown(e.target.dataset.id);
    toggleCategoryDropdown();
  }

  function toggleCategoryDropdown() {
    setCategoryDropdownShown(state => !state);
  }

  return (
    <SelectContainer className={categoryDropdownShown ? 'dropdownShown' : ''}>
      <SelectInput
        type="button"
        onClick={toggleCategoryDropdown}
        className={category === 0 ? '' : 'selected'}
      >
        {categories[category]}
      </SelectInput>
      <SelectDate name="category" onClick={handleCategoryChange}>
        {expenseCategories.map(({ id, name }, idx) => (
          <li key={id} data-idx={idx + 1} data-id={id}>
            {name}
          </li>
        ))}
      </SelectDate>
    </SelectContainer>
  );
}
