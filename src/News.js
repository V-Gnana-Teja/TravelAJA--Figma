import React from 'react';
import NewsNavbar from './components/NewsNavbar';
import NewsCarousel from './components/NewsCarousel';
import NewsFooter from './components/NewsFooter';


const News = () => {
  return (
    <div>
       <NewsNavbar />
       <NewsCarousel />
       <NewsFooter  />

    </div>
  );
};

export default News;
