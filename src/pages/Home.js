import React from 'react';
import Banner from '../components/Banner';
import HouseList from '../components/HouseList';

const Home = () => {
  return (
    <div className='min-h-[1800px] max-w-[1440px] mx-auto bg-blue-300'>
        <Banner />
        <HouseList />
    </div>
  )
};

export default Home;
