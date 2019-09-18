import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import HcssFont from './_hcssFont'


function index() {
  // const [add, setAdd] = useState()
  // const [isLoading, setIsLoading] = useState(false)

  // useEffect(() => {
  //   console.log(add)
  //   return () => {
  //     console.log(add)
  //     setIsLoading(true)
  //   }
  // }, [add])

  return (
    <>
      {/* <style jsx="true" global>{`
        @import url('https://fonts.googleapis.com/css?family=Roboto');
        .font_Roboto {
          margin: 0;
          font-family: 'Roboto', sans-serif;
        }
      `}</style> */}
      
      <Head>
        <title>ddd</title>
        <link href="https://ngs-css-lib.s3.ap-northeast-2.amazonaws.com/ngs-css-lib.css" rel="stylesheet" />
      </Head>
      <div className="font_Roboto">
        Hello Next
      </div>

    </>
  );
}

export default index;