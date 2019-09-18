import React from 'react'


function FontTemplate() {

  return (
    <>
    <div className={ Container }>

      font template

    </div>
    </>
  );
}

export default FontTemplate;

// -------------------------------------------------
//                      style
// -------------------------------------------------
const Container =`
<!--[ position ]-->
  
<!--[ layout ]-->
  x-hor x-ac x-jc
<!--[ size ]-->
  pw100
<!--[ space ]-->
  py50
<!--[ font ]-->
  font_play fs24
<!--[ color ]-->
  fc-white bdc-gray300 bc-blue100 p-bc-blue300 l-bc-blue500 m-bc-blue700
<!--[ border ]-->
  bd-sb1
<!--[ shadow ]-->
  shadow-s2
`