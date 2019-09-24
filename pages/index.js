import React from 'react'
import NavMain from '../components/menu/NavMain'
import MainView from '../views/MainView'

function index() {

  return (
    <>
    <style jsx="true" global>{`
      @import url('https://ngs-css-lib.s3.ap-northeast-2.amazonaws.com/ngs-css-lib.css');
      @import url('https://fonts.googleapis.com/css?family=Playfair+Display+SC:400,700,900&display=swap');
      .font_playFair { font-family: 'Playfair Display SC', serif; }
      @import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR:100,300,400,500,700,900&display=swap&subset=korean" rel="stylesheet');
      .font_notoSans { font-family: 'Noto Sans KR', serif; }
      @import url('https://fonts.googleapis.com/css?family=Noto+Serif+KR:200,300,400,500,600,700,900&display=swap&subset=korean" rel="stylesheet');
      .font_notoSerif { font-family: 'Noto Serif KR', serif; }
      
      .pos-left {
        top: 0%;
        bottom: 0%;
        left: 0%;
        right: auto;
      }
      
      .pos-right {
        top: 0%;
        bottom: 0%;
        left: auto;
        right: 0%;
      }
      
      .pos-top {
        top: 0%;
        bottom: auto;
        left: 0%;
        right: 0%;
      }
      
      .pos-bottom {
        top: auto;
        bottom: 0%;
        left: 0%;
        right: 0%;
      }
    `}
    </style>
      <NavMain/>
      <MainView/>

    </>
  );
}

export default index;