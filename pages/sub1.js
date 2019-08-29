import React from 'react'


function index() {
  return (
    <>
      <style jsx="true" global>{`
        @import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR:100,300,400,500,700,900&display=swap&subset=korean');
        .font_Noto {
          margin: 0;
          font-family: 'Noto Sans KR', sans-serif;
        }
      `}</style>
      <div className="font_Noto">
        Hello Next Noto
      </div>
      
    </>
  );
}

export default index;