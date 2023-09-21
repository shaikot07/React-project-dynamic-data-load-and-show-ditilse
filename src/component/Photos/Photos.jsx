import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Photo from './Photo/Photo';

const Photos = () => {
      const photos =useLoaderData()
      return (
            <div className='grid grid-cols-3 max-w-6xl mx-auto gap-4'>
                 
                  {
                        photos.map(photo =><Photo key={photo.id} photo={photo}></Photo>)
                  }
            </div>
      );
};

export default Photos;