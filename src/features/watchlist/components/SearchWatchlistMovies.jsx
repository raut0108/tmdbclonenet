import React from 'react'

function SearchWatchlistMovies(searchProps) {
    const {setSearch} = searchProps
    
    return (
      <div className="flex justify-center my-10 px-4">
            <input
              type="text"
              placeholder="Search by a movie name"
              onChange={(e) => setSearch(e.target.value)}
              className="h-12 w-full max-w-xl px-4 outline-none border border-slate-700 rounded-lg bg-gray-300"
            />
            {/* <button onClick={()=>{}}>Search</button> */}
          </div>
  )
}

export default SearchWatchlistMovies
