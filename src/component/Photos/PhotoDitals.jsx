import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const PhotoDitals = () => {
      const ditals = useLoaderData();
      const { id, url } = ditals
      return (
            <div>
                  <div className='w-80 mx-auto bg-red-800 p-3 mt-20'>
                        <img src={url} alt="" />
                        <h2 className='text-2xl text-center text-white'>The Number of id: {id}</h2>
                  </div>
                 <div className='flex justify-center mt-10'>
                 <Link to="/"><button className='bg-sky-400 rounded px-4 py-2 text-white font-semibold'>GO Back Home</button></Link>
                 </div>
            </div>
      );
};

export default PhotoDitals;