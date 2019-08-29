import React, {useState, useEffect} from 'react'
import Sub1 from './sub1'


function index() {
  const [add, setAdd] = useState()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    console.log(add)
    return () => {
      console.log(add)
      setIsLoading(true)
    }
  }, [add])

  return (
    <>
      <style jsx="true" global>{`
        @import url('https://fonts.googleapis.com/css?family=Roboto');
        .font_Roboto {
          margin: 0;
          font-family: 'Roboto', sans-serif;
        }
      `}</style>
      <div className="font_Roboto" onClick={() => setAdd(1)}>
        Hello Next
      </div>
      {isLoading &&
        <Sub1/>
      }
    </>
  );
}

export default index;