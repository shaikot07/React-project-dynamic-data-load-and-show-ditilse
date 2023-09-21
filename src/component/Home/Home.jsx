import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

const Home = () => {
      return (
            <div >
                  <div className='max-w-4xl mx-auto'>
                  
                  <div className='flex gap-10 items-center mt-7 mb-10'>
                        <div><h2 className='text-3xl font-bold text-cyan-500 text-center'>i'm Sinorita </h2>
                              <p className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing <br /> elit. Quidem maiores veritatis.</p>
                              <h1 className='text-4xl font-semibold text-cyan-800'>This is Landing page</h1>
                        </div>
                        <div className=''>
                        <img className='h-96' src="https://i.ibb.co/bb6tWnW/photo-1494790108377-be9c29b29330.jpg" alt="" />
                        </div>
                  </div>
                  
                  </div>
                  
            </div>
      );
};

export default Home;