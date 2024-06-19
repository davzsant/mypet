import React from 'react'

import { BsSearch } from "react-icons/bs"

interface iSearchInputProps{isMobile:boolean}

const SearchForm:React.FC<iSearchInputProps> = (isMobile) => {
  return (
    <div>
      <form action="" method="get" className="relative">
        <input className="searchInput" type="search" placeholder="Pesquisa os produtos que deseja procurar"/>
        <button 
          type='submit'
          className="absolute centerItem right-3 bg-secondColor p-1 rounded-full text-white shadow-lg">
          {isMobile?<BsSearch/>:"BUSCAR"}
        </button>
    </form>
    </div>
  )
}

export default SearchForm
