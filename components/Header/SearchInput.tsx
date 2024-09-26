'use client'
import { useState } from 'react'
import SearchCoin from '../SearchCoins/SearchCoins'

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="flex relative">
      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search ..."
        className="border px-4 py-2 rounded-lg focus:boder-none focus:outline-none w-[400px]"
        onClick={() => setIsOpen(true)}
      />
      <SearchCoin
        isVisible={isOpen}
        onClose={() => setIsOpen(false)}
        containerClasses="absolute top-[100%] left 0"
      />
    </div>
  )
}

export default SearchInput
