import {BiSearch} from 'react-icons/bi'

import './index.css'

const FiltersGroup = props => {
  const {value, changeInSearchElement} = props
  const updateSearchInputs = event => {
    changeInSearchElement(event.target.value, false)
  }
  const enterKeyPressed = event => {
    if (event.key === 'Enter') {
      changeInSearchElement(value, true)
    }
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
    </div>
  )
}

export default FiltersGroup
