import {BiSearch} from 'react-icons/bi'

import './index.css'

const FiltersGroup = props => {
  const {value, changeInSearchElement, categoryOptions, updateCategory} = props
  const updateSearchInputs = event => {
    changeInSearchElement(event.target.value, false)
  }
  const enterKeyPressed = event => {
    if (event.key === 'Enter') {
      changeInSearchElement(value, true)
    }
  }
  const changeCategory = event => {
    updateCategory(event.target.value)
  }
  return (
    <div className="filters-group-container">
      <div className="input-search-con">
        <input
          type="text"
          placeholder="Search"
          className="search-ele"
          value={value}
          onChange={updateSearchInputs}
          onKeyDown={enterKeyPressed}
        />
        <BiSearch className="search-icon" />
      </div>
      <h1 className="category-heading">Category</h1>
      <ul className="category-options-list">
        {categoryOptions.map(each => (
          <li
            value={each.name}
            key={each.categoryId}
            className="category-option"
          >
            <button
              type="button"
              className="category-button"
              value={each.name}
              onClick={changeCategory}
            >
              {' '}
              {each.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FiltersGroup
