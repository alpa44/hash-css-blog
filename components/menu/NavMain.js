import Link from "next/link";

const NavMain = () => (
  <div className="fxh">
    <div className={ Container }>
      <div className={ Lay_menu }>
        <img src="/static/ico_mainMenu.png" alt="logo" className={ Img } />
      </div>
      
      <div className="x-grow1"/>

      {/* <div className={ Lay_logo }>
        <div className={ Label_logo }>H</div>
      </div> */}
      <div className={ Lay_logo }>
        <div className={ Label_logo }>H</div>
      </div>

      <div className="x-grow1"/>

      <Link href="/">
        <div className={ Label_link }>Home</div>
      </Link>
      <Link href="/about">
        <div className={ Label_link }>About</div>
      </Link>
      <Link href="/blogs">
        <div className={ Label_link }>Blogs</div>
      </Link>
      <Link href="/news">
        <div className={ Label_link }>News</div>
      </Link>
    </div>  
  </div>
);

export default NavMain;

// -------------------------------------------------
//                      style
// -------------------------------------------------
const Img =`
pw100 ph100
`
const Container =`
<!--[ position ]-->
  pos-relative
<!--[ layout ]-->
  x-hor x-ac x-jc
<!--[ size ]-->
  pw100 wx1200 h150
<!--[ space ]-->
  px10
<!--[ font ]-->
  font_playFair fs24
<!--[ color ]-->
  fc-white bdc-gray300 bc-white bdc-black
<!--[ border ]-->
  bd-sb6
<!--[ shadow ]-->
`
const Lay_menu =`
<!--[ position ]-->
<!--[ layout ]-->
<!--[ size ]-->
  h24 w24
<!--[ space ]-->
<!--[ font ]-->
<!--[ color ]-->
<!--[ border ]-->
<!--[ shadow ]-->
`
const Lay_logo =`
<!--[ position ]-->
pos-absolute
<!--[ layout ]-->
fxh
<!--[ size ]-->
  w40 h40
<!--[ space ]-->
  pb2
<!--[ font ]-->
<!--[ color ]-->
  bc-black
<!--[ border ]-->
<!--[ shadow ]-->
`
const Label_logo =`
<!--[ position ]-->
<!--[ layout ]-->
<!--[ size ]-->
<!--[ space ]-->
<!--[ font ]-->
  font_notoSerif fs22
<!--[ color ]-->
<!--[ border ]-->
<!--[ shadow ]-->
`
const Label_link =`
<!--[ position ]-->
<!--[ layout ]-->
<!--[ size ]-->
<!--[ space ]-->
  pl30
<!--[ font ]-->
  fs20
<!--[ color ]-->
fc-gray500
<!--[ border ]-->
<!--[ shadow ]-->
`
const Template =`
<!--[ position ]-->
<!--[ layout ]-->
<!--[ size ]-->
<!--[ space ]-->
<!--[ font ]-->
<!--[ color ]-->
<!--[ border ]-->
<!--[ shadow ]-->
`