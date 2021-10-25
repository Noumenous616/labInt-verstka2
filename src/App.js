import React from 'react'

import s from './App.module.css'
import NeverTooLateBlock from "./components/NeverTooLateBlock/NeverTooLateBlock";
import HowItWorkBlock from "./components/HowItWorkBlock/HowItWorkBlock";
import CoolThirdBlock from "./components/CoolThirdBlock/CoolThirdBlock";
import ReviewsBlock from "./components/ReviewsBlock/ReviewsBlock";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";




function App() {
  return (
      <div className={s.mainBlockBody}>
          <div className={s.bodyOfHeaderAndBlockOne}>
              <div>
                  <Header />
              </div>

              <NeverTooLateBlock/>
          </div>
          <HowItWorkBlock/>
          <CoolThirdBlock/>
          <ReviewsBlock/>
          <Footer/>
      </div>

  );
}

export default App;
