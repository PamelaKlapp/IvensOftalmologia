import React from 'react';

import MainHeader from '../../components/MainHeader/MainHeader';
import MainBanner from '../../components/MainBanner/MainBanner';
import Categorias from '../../components/Categorias/Categorias';
import MarcasRep from '../../components/MarcasRep/MarcasRep';

const Home = () => {
  return (
    <>
      <MainHeader />
      <MainBanner />
      <Categorias />
      <MarcasRep />
    </>
  );
};

export default Home;
