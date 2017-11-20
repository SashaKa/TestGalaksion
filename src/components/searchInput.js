import React from 'react'

const SearchInput = ({ method }) => (
  <input className="Search-Input" name="search" onInput={method} type="text" placeholder="Search by letter" />
)

export default SearchInput
