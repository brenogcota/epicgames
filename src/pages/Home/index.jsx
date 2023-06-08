import React from 'react';
import Main from './Main';
import ProductGallery from './ProductGallery';
import CardThree from './CardThree';

import highlights from 'data/highlights.json';
import Header from 'components/Header';

function Home() {
  const { data } = highlights;

  return (
    <>
      <Header />
      <Main />
      <ProductGallery games={data.slice(0, 6)} title="大特卖聚焦" />
      <CardThree games={data.slice(24, 27)} />
      <ProductGallery games={data.slice(6, 12)} title="包含成就的游戏" />
      <ProductGallery games={data.slice(12, 18)} title="编辑精选" />
      <ProductGallery games={data.slice(18, 24)} title="最近更新" />
    </>
  );
}

export default Home;
