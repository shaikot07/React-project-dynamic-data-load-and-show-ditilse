import React from 'react';
import { Link } from 'react-router-dom';

const Photo = ({photo}) => {
      const {id,title,url,thumbnailUrl}=photo
      return (
            <div className=' p-4 bg-amber-200 mb-4'>
                  <img className='w-full' src={thumbnailUrl} alt="" />
                  <h2 className='text-2xl font-semibold text-center'>{title}</h2>
                 <Link to={`/photo/${id}`}> <button  className='btn btn-primary py-2 px-4 w-full bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>More info</button></Link>
            </div>
      );
};

export default Photo;