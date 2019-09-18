import React from 'react'
import Head from 'next/head'


function _hcssFont() {
  return (
    <>
      {/* <style jsx="true" global>{`
        @import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR:100,300,400,500,700,900&display=swap&subset=korean');
        .font_Noto {
          margin: 0;
          font-family: 'Noto Sans KR', sans-serif;
        }
      `}</style> */}
      <div>
        <Head>
          <title>ddd</title>
          <link href="https://ngs-css-lib.s3.ap-northeast-2.amazonaws.com/ngs-css-lib.css" rel="stylesheet" />
        </Head>
        <div className="">
          Hello Next Noto
        </div>
      </div>
      {/* test */}
    </>
  );
}

export default _hcssFont;