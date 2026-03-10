import React from 'react'

function WatchlistEmptyState() {
  return (
    <div className="flex justify-center items-center mt-[20rem] px-4">
          <p className="text-2xl sm:text-3xl text-center text-red-600 font-bold shadow-2xl">
            No movies are added to the watchlist.
          </p>
        </div>
  )
}

export default WatchlistEmptyState
