import React, { useState, useContext } from "react";
import Modal from "../../ui/components/Modal";
import { watchListContext } from '../../../context/MovieContextWrapper';
const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;
const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;

function MovieCard(props) {

  
  const { movies } = props;
  const [openModal, setOpenModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const ContextData = useContext(watchListContext) 
  
  const handleOpenModal = (movi)=>{
    setOpenModal(true);
      setSelectedMovie(movi);
   }

   const handleCloseModal = ()=>{
     setOpenModal(false);
     setSelectedMovie(null); 
  }
  
  return (
    <>
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10">
    {
      movies.map((movi, index) => {
        return (
          <div key={index} className="hover:scale-105 transition-transform duration-300 cursor-pointer">
            <div className="h-auto w-40 sm:w-48 md:w-52 lg:w-60 aspect-[2/3] bg-center bg-cover rounded-xl flex flex-col items-center" 
            style={{ backgroundImage: `url(${IMAGE_BASE_URL}${movi?.poster_path})` }}>
              {
                 ContextData.isInWatchList(movi) ?
                 (
                   <div className="flex m-2 h-8 w-8 justify-center items-center rounded-xl bg-gray-900/80" onClick={()=>ContextData.removeFromWatchList(movi)}>&#10060;</div>  
                 )
                  :
                 (
                   <div className="flex m-2 h-8 w-8 justify-center items-center rounded-xl bg-gray-900/80" onClick={()=>ContextData.addToWatchList(movi)}>&#128525;</div>
                 )
              }
              
            </div>
            <div className="mt-2 w-40 sm:w-48 md:w-52 lg:w-60 text-white text-center text-xs sm:text-sm md:text-base p-2 rounded-lg bg-black/70 font-bold" onClick={()=>handleOpenModal(movi)}>{movi.title}</div>
          </div>
        );
      })
    }
    </div>
    {
        openModal && 
        <div className='fixed inset-0 z-50 backdrop-blur-sm bg-black/50 flex justify-center items-center'>
           <Modal movie={selectedMovie}  handleCloseModal={handleCloseModal} />
        </div>
    }
    </>

  );
}

export default MovieCard;
