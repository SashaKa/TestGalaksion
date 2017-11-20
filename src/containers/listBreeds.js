import React from 'react'

const ListBreeds = ({ dogs, method }) => (
  <ul className="Dogs-List">
    {dogs.map((breed, i) => (
      <li onClick={() => method(breed)} className="ItemBreed" key={i}>
        {breed}
      </li>
    ))}
  </ul>
)

export default ListBreeds