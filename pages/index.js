import React from 'react'
import NavMain from '../components/menu/NavMain'
import MainView from '../views/MainView'

function index() {

  return (
    <>
    <style jsx="true" global>{`
      @import url('https://ngs-css-lib.s3.ap-northeast-2.amazonaws.com/ngs-css-lib.css');
      @import url('https://fonts.googleapis.com/css?family=Playfair+Display+SC:400,700,900&display=swap');
      .font_play { font-family: 'Playfair Display SC', serif; }
    `}
    </style>
      <NavMain/>
      <MainView/>

    </>
  );
}

export default index;