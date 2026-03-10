import React from 'react'
function MovieFilters(genreProp) {

    const  {genreList,currGenere , setCurrGenere} = genreProp
  return (
    <div className="flex flex-wrap justify-center m-4 gap-2">
                {genreList.map((genre, index) => {
                  console.log(currGenere === genre);
                  return (
                    <div
                      key={index}
                      className={`mx-2 my-2 flex justify-center items-center h-12 sm:h-14 px-4 sm:px-6 border border-black rounded-xl cursor-pointer ${
                        currGenere === genre
                          ? "bg-blue-400 text-white"
                          : "bg-gray-300"
                      }`}
                      onClick={() => {
                        setCurrGenere(genre);
                      }}
                    >
                      {genre}
                    </div>
                  );
                })}
              </div>
  )
}

export default MovieFilters
