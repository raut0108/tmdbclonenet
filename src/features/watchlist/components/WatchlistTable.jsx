import React from 'react'
import { ArrowUp, ArrowDown, Pointer } from "lucide-react";
import genreids from '../../../utils/Helpers/GenereIDMappings';
const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;

function WatchlistTable(Prop) {

    const {handleDecendingSortRatings,handleAscendingSortRatings,removeMovie,search,currGenere,watchList} = Prop;
    
  return (
    <div className="overflow-x-auto">
    <table className="w-full min-w-[600px] border-collapse bg-white text-left text-sm text-gray-500">
            <thead>
              <tr className="bg-gray-400">
                <th className="px-6 py-4 font-medium text-gray-900">Name</th>
                <th className="px-6 py-4 font-medium text-gray-900 hidden sm:table-cell">
                  <div className="flex gap-2">
                    <div className="cursor-pointer">
                      <ArrowUp
                        size={24}
                        strokeWidth={2}
                        onClick={handleDecendingSortRatings}
                      />
                    </div>
                    <div>Ratings</div>
                    <div className="cursor-pointer">
                      <ArrowDown
                        size={24}
                        strokeWidth={2}
                        onClick={handleAscendingSortRatings}
                      />
                    </div>
                  </div>
                </th>
                <th className="px-6 py-4 font-medium text-gray-900 hidden md:table-cell">
                  Popularity
                </th>
                <th className="px-6 py-4 font-medium text-gray-900 hidden lg:table-cell">Genere</th>
                <th className="px-6 py-4 font-medium text-gray-900">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
              {watchList.length > 0 &&
                watchList
                  .filter((movie) => {
                    return (
                      currGenere === "All Genre" ||
                      movie?.genre_ids
                        .map((id) => {
                          return genreids[id];
                        })
                        .includes(currGenere)
                    );
                  })
                  .filter((movi) => {
                    return movi?.title
                      .toLowerCase()
                      .trim()
                      .includes(search.toLowerCase());
                  })
                  .map((movi, index) => {
                    return (
                      <tr key={index}>
                        <td className="flex items-center px-4 sm:px-6 py-4 font-normal text-gray-900">
                          <img
                            src={`${IMAGE_BASE_URL}${movi?.poster_path}`}
                            alt="Movie Poster"
                            className="h-24 w-16 sm:h-32 sm:w-20 object-cover rounded-md"
                          />
                          <div className="font-medium text-gray-700 text-sm pl-2">
                            {movi?.title}
                          </div>
                        </td>
                        <td className="px-6 py-4 hidden sm:table-cell">{movi?.vote_average}</td>
                        <td className="pl-6 py-4 hidden md:table-cell">{movi?.popularity}</td>
                        <td className="pl-6 py-4 hidden lg:table-cell">
                          {movi.genre_ids.map((id, index) => {
                            const genre = genreids[id];
                            const isActive = currGenere === genre;

                            return (
                              <span
                                key={index}
                                className={
                                  isActive ? "text-blue-600 font-bold" : ""
                                }
                              >
                                {genre}
                                {index < movi.genre_ids.length - 1 && " , "}
                              </span>
                            );
                          })}
                        </td>

                        <td
                          className="pl-6 py-4 text-red-500 cursor-pointer"
                          onClick={() => removeMovie(movi)}
                        >
                          REMOVE
                        </td>
                      </tr>
                    );
                  })}
            </tbody>
          </table>
    </div>
  )
}

export default WatchlistTable
