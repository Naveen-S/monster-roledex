import React from 'react'
import "./search-box.style.css";

export default function SearchBox(props) {
    return (
        <div>
          <input className="search" type="search" placeholder="search monsters" onChange={ props.onSearchChange} />
        </div>
    )
}
