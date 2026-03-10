
import React from "react";
import { useEffect,useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;
const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;

function Modal({ movie, handleCloseModal }) {
    
    const {id,title,overview,release_date,vote_average,poster_path} = movie;
    const [trailerURL, setTrailerURL] = useState(null);
    const [err , setErr] = useState(null);
    const [loader , setLoader] = useState(true);     
   
    
      useEffect(()=>{
          
            const fetmoviTrailerID = async ()=>{
                const url = BASE_URL+`movie/${id}/videos?api_key=${API_KEY}`;
               await axios.get(url)
                .then((response)=>{
                  const  trailers = response?.data?.results.filter(video=> video.type === "Trailer" && video.site === 'YouTube');
                  if(trailers.length > 0)
                  {
                    setTrailerURL(`https://www.youtube.com/embed/${trailers[0].key}?autoplay=1&unmute=1`);
                  }
                })
                .catch((error)=>{
                    setErr(error);
                })
                .finally(()=>{
                    setLoader(false);
                })  
                
            } 
            fetmoviTrailerID()

      },[movie])


  return (
    <div className="bg-white/45 rounded-lg shadow-lg p-6 max-w-full sm:max-w-[35vw] max-h-[90vh] overflow-y-auto flex flex-col">
      {
        loader ?
        (
            <Spinner/>
        )
        :
        (  
          err ? (  (<ErrorFallback err={err}/> ))
          :
            <>
              <div className="flex gap-6">
               {
                    poster_path ?
                    (
                    <img src={`${IMAGE_BASE_URL}${poster_path}`}
                        alt={title} 
                        className="w-[33%] rounded-lg object-cover"
                    />
                    )
                    :
                    (
                        <div>No Image available </div>
                    )
                }
            
            <div>
                <h2 className="text-3xl font-bold text-blue-500">{title}</h2>
                <p className="text-gray-900/100 font-bold">Release Date : {release_date}</p>
                <p className="text-gray-900/100 font-bold">Average Vote : {vote_average ? vote_average.toFixed(1) : "N/A"}</p>
                <p className="text-gray-900/100">{overview?overview:"No overview available"}</p>
            </div>
        </div>
        <h1 className="text-blue-600/95 font-bold text-3xl  m-2">Trailer</h1> 
          <div className="w-full h-60">
            {  
            trailerURL ?
            (
                <iframe src={trailerURL} 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="w-full h-full rounded-lg" 
              ></iframe>
            )
            :
            (
                <p className="text-blue-600/95 font-bold text-3xl text-center mt-20">Trailer Is Not Avilable</p>
            )
          }
          </div>
        <div>
          <div className="text-right">
             <button className="mt-4 mb-0 bg-blue-500 text-white font-bold py-2 px-4 rounded-lg" onClick={handleCloseModal}>Close</button> 
          </div>
        </div>
            </>
        )
      }
        
      
    </div>
  );
}

export default Modal;





