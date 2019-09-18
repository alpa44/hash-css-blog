import React, { useRef, useEffect } from 'react'
import Link from 'next/link'
import { useWindowScroll } from 'react-use';

function MainView() {
  const {x, y} = useWindowScroll();

  useEffect(() => {
    //console.log('x: ', x, ' y: ', y)
  })

  return (
    <>
    <div className={ Container }>
      HCSS Main View
      <Link href="/content">
      <div className="x-ver x-ac py50">
        <div className="fxh playfair fs22 mb50 fc-gray600">Card Style 1-1</div>
        <div className="fxv bc-white h350 w200 shadow-l2">
          <div className="x-ver x-ac x-jc x-grow1 pw-c11 ma10 bd-s3 bdc-deeporange50">
            <div className="fxh mb20 w70 h70 bc-deeporange50 bd-ra50">
                <div className="fxh w60 h60 bd-s1 bdc-white bc-deeporange50 bd-ra50">
                  <div className="fs11 fc-white">My Logo</div>
                </div>
            </div>
            <div className="fxh fa-center pw-c9 fc-gray500">HCss Card Element Style</div>
            <div className="fxh pw-c9 fs7 fc-gray300">DEEP ORANGE</div>
          </div>
          <div className="fxh pw-c12 ph-c2 bc-deeporange50">
            <div className="fc-white fs12">DEEP ORANGE</div>
          </div>
        </div>
      </div>
      </Link>

    </div>
    </>
  );
}

export default MainView;

// -------------------------------------------------
//                      style
// -------------------------------------------------
const Container =`
<!--[ position ]-->

<!--[ layout ]-->
  x-ver x-ac
<!--[ size ]-->
  pw100 h1000
<!--[ space ]-->

<!--[ font ]-->
  font_play fs24
<!--[ color ]-->
  fc-gray600
<!--[ border ]-->

<!--[ shadow ]-->
`