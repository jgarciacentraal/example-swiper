import * as React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import './App.css';


import { mock } from './data'

const imageExtensions = /\.(jpg|jpeg|png|gif)$/i;


function App() {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {mock.map(item => (
          <SwiperSlide key={item.id}>
            {item.file.endsWith('.pdf') ? (
              <object style={{
                display: 'flex', justifyContent: 'center', alignItems: 'center'
              }}>
                <embed src={item.file} type="text/html" height={1000} width='100%' />
              </object>
            ) : (
              <img src={item.file} alt={`Slide ${item.id}`} />
            )}
          </SwiperSlide>
        ))}

        {/* {mock.map(item => (å
          <SwiperSlide key={item.id}>
            {imageExtensions.test(item.file) ? (
              <img src={item.file} alt={`Slide ${item.id}`} />
            ) : (
              <object data={item.file} type="application/pdf">
                <embed src={item.file} type="application/pdf" />
              </object>
            )}
          </SwiperSlide>
        )}} */}
      </Swiper>
      
    </div>
  );
}

export default App;
