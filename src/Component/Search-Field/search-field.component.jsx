import React from 'react'

export default function SearchField({placeholder,handleOnchange}) {
    return (
        <input
        type="search"
        placeholder={placeholder}
        onChange={handleOnchange}
      />
    )
}
