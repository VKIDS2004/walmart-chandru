import "./App.css";
import ProductsCart from "./ProductsCart";
import Gallery from "./gallery";
import Header from "./header";
import Footer from "./footer";
import Navigation from "./navigation";
import { useEffect, useState } from "react";
import Actioncart from "./action cart";
import Atm from "./atm";
import Gallery2 from "./gallery2";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  Navigate,
} from "react-router-dom";
import Cart from "./cart";
import Signin from "./signin";
import Createaccount from "./CreateAcc";
import Profile from "./profile";

import shiplogo from './images/shipping.png'
import picklogo from './images/pickup.png'
import deliverylogo from './images/delivery.png'
import locblacklogo from './images/locationB.png'
import fillstart from './images/fillstar.png'
import nostart from './images/nostar.png'
import homelogo from './images/home.png'
import rightarrow from './images/right-arrow.png'

const data = [
  {
    id: 1,
    name: "Fire Boltt Ninja 2",
    img: "https://m.media-amazon.com/images/I/617eiZeFtNL._SL1500_.jpg",
    img1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/XtendPro-FI-Misc_Blue08_700x.png?v=1679325867",
    img2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/XtendPro-FI-Display_Blue03_700x.png?v=1679325867",
    img3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/XtendPro-FI-Crest-HR_Blue07_700x.png?v=1679325867",

    amt: 1599,
    seller: "Boltt Store",
    catagory: "Watch",
    cart: false,
    stock: 10,
    star: 3,
  },

  {
    id: 2,
    name: "Noise Pulse Go",
    img: "https://m.media-amazon.com/images/I/61akt30bJsL._SL1500_.jpg",
    img1:"https://m.media-amazon.com/images/I/61C7QxrH7NL._SX522_.jpg",
    img2:"https://m.media-amazon.com/images/I/71xJDte4RJL._SX522_.jpg",
    img3:"https://m.media-amazon.com/images/I/61T4r-idjnL._SX522_.jpg",
    amt: 1300,
    seller: "Noise Store",
    catagory: "Watch",
    cart: false,
    stock: 10,
    star: 1,
  },

  {
    id: 3,
    name: "boAt Xtend Pro",
    img: "https://m.media-amazon.com/images/I/61ZuL8CUigL._SL1500_.jpg",
    img1:"https://m.media-amazon.com/images/I/71tiVCwuoCL._SX679_.jpg",
    img2:"https://m.media-amazon.com/images/I/51G-2JElmFL._SX679_.jpg",
    img3:"https://m.media-amazon.com/images/I/61UZwWHg5gL._SX679_.jpg",
    amt: 2799,
    seller: "Rajesh Watchs",
    catagory: "Watch",
    cart: false,
    stock: 10,
    star: 5,
  },
  {
    id: 4,
    name: "Lenovo Tab M8",
    img: "https://m.media-amazon.com/images/I/71SvqTFPXJL._SL1500_.jpg",
    img1:"https://m.media-amazon.com/images/I/41b4nz8EwfL.jpg",
    img2:"https://m.media-amazon.com/images/I/413tAIY76-L.jpg",
    img3:"https://m.media-amazon.com/images/I/41B6FYxLyAL.jpg",
    amt: 9270,
    seller: "Stonehenge Retail",
    catagory: "Tablets",
    cart: false,
    stock: 10,
    star: 2,
  },
  {
    id: 5,
    name: "Honor PAD X8",
    img: "https://m.media-amazon.com/images/I/710G-VKcgtL._SL1500_.jpg",
    img1:"https://m.media-amazon.com/images/I/71sAa-+jtOL._SX522_.jpg",
    img2:"https://m.media-amazon.com/images/I/71EdClVFglL._SX522_.jpg",
    img3:"https://m.media-amazon.com/images/I/81dBGztWYFL._SX522_.jpg",
    amt: 12999,
    seller: "Honor india",
    catagory: "Tablets",
    cart: false,
    stock: 10,
    star: 1,
  },

  {
    id: 6,
    name: "IKALL N9",
    img: "https://m.media-amazon.com/images/I/7185GL6hPlL._SL1500_.jpg",
    img1:"https://m.media-amazon.com/images/I/61lx6jk-loL._SX679_.jpg",
    img2:"https://m.media-amazon.com/images/I/71CWje7F73L._SX679_.jpg",
    img3:"https://m.media-amazon.com/images/I/717-+4Pao9L._SX679_.jpg",
    amt: 3999,
    seller: "IKALL Store",
    catagory: "Tablets",
    cart: false,
    stock: 10,
    star: 3,
  },

  {
    id: 7,
    name: "Oppo Pad Air",
    img: "https://m.media-amazon.com/images/I/513FD4w8hGL._SL1500_.jpg",
    img1:"https://m.media-amazon.com/images/I/71lyP4fV7FL._SX522_.jpg",
    img2:"https://m.media-amazon.com/images/I/81RdfEcmG3L._SX522_.jpg",
    img3:"https://m.media-amazon.com/images/I/710tDq2mREL._SX522_.jpg",
    amt: 15999,
    seller: "Oppo Store",
    catagory: "Tablets",
    cart: false,
    stock: 10,
    star: 4,
  },
  {
    id: 8,
    name: "Acer EK220Q",
    img:"https://m.media-amazon.com/images/I/81aGVHsC6HL._SX522_.jpg",
    img1:"https://m.media-amazon.com/images/I/81LBRHfFUtL._SX522_.jpg",
    img2:"https://m.media-amazon.com/images/I/81tJ9bkMfSL._SX522_.jpg",
    img3: "https://m.media-amazon.com/images/I/8150iUXkc5L._SL1500_.jpg",
    amt: 6249,
    seller: "Accer Store",
    catagory: "Monitors",
    cart: false,
    stock: 10,
    star: 2,
  },
  {
    id: 9,
    name: "Samsung 24",
    img: "https://m.media-amazon.com/images/I/81TjRLHaz1L._SL1500_.jpg",
    img1:"https://m.media-amazon.com/images/I/81l5oBXCbYL._SX679_.jpg",
    img2:"https://m.media-amazon.com/images/I/71W4yu3PpQL._SX679_.jpg",
    img3:"https://m.media-amazon.com/images/I/81sZ5wtQIDL._SX679_.jpg",
    amt: 9799,
    seller: "Samsung Store",
    catagory: "Monitors",
    cart: false,
    stock: 10,
    star: 5,
  },

  {
    id: 10,
    name: "ZEBRONICS",
    img: "https://m.media-amazon.com/images/I/813Y1TIZwfL._SL1500_.jpg",
    img1:"https://m.media-amazon.com/images/I/71YFcwTDOEL._SX522_.jpg",
    img2:"https://m.media-amazon.com/images/I/71wxqRBeJtL._SX522_.jpg",
    img3:"https://m.media-amazon.com/images/I/71nZFP0WWVL._SX522_.jpg",
    amt: 12799,
    seller: "ZEBRONICS Store",
    catagory: "Monitors",
    cart: false,
    stock: 10,
    star: 1,
  },

  {
    id: 11,
    name: "Jet Noise Twist",
    img: "https://m.media-amazon.com/images/I/61TapeOXotL._SX679_.jpg",
    img1:"https://m.media-amazon.com/images/I/61fQuzgOdyL._SX679_.jpg",
    img2:"https://m.media-amazon.com/images/I/61Y5zQnBRFL._SX679_.jpg",
    img3:"https://m.media-amazon.com/images/I/61LlRpeeDXL._SX679_.jpg",
    amt: 1500,
    seller: "Noise Store",
    catagory: "Watch",
    cart: false,
    stock: 10,
    star: 4,
  },

  {
    id: 12,
    name: "Ipad 10th gen",
    img: "https://m.media-amazon.com/images/I/61uA2UVnYWL._SX679_.jpg",
    img1:"https://m.media-amazon.com/images/I/81b3zG8j2bL._SX679_.jpg",
    img2:"https://m.media-amazon.com/images/I/61UYTCvyN0L._SX679_.jpg",
    img3:"https://m.media-amazon.com/images/I/71Xe1DNqYgL._SX679_.jpg",
    amt: 41999,
    seller: "Apple Store",
    catagory: "Tablets",
    cart: false,
    stock: 10,
    star: 5,
  },
];


function App() {
  const [curpro, setcurpro] = useState(1);
  const [search, setsearch] = useState("");
  const [datarray, setdatarray] = useState(data);
  const [How, setHow] = useState(false);

  const [curUser,setCurUser] =useState(JSON.parse(localStorage.getItem("curuser"))||"")
  const [cartitem,setcartitem] = useState(JSON.parse(localStorage.getItem("curuser"))?.cart||[])
  

  
  // setcartitem(JSON.parse(localStorage.getItem("curuser"))?.cart||[])

  const filteredData = filterArrayBySearchQuery(datarray, search);

  let cartitems = cartitem.length;

  //datarray.map((it) => it.cart === true && cartitems++);

  let cartprice = 0;
  cartitem.map((it) =>(cartprice += it.amt));

  function winclic() {
    setHow((s) => (s === true ? false : true));
  }

  function addcartitem(newitem){
    setcartitem(old=>[...old,newitem]);
    
  }

  function removecartitem(newitem){
    setcartitem(cartitem.filter(item=>item.id!==newitem.id))
  }

  function clearcartitem(){
    setcartitem([]);
  }

  useEffect(()=>{
    window.localStorage.setItem("temCart",JSON.stringify(cartitem))
    if(curUser){
      let tem = {...curUser,cart:cartitem}
      window.localStorage.setItem("curuser",JSON.stringify(tem))
      // setCurUser(tem)
    }

    if(curUser){
        let users = JSON.parse(localStorage.getItem("users"))
        let curuserindex = users.findIndex(us=>us.email===curUser.email)
        users[curuserindex].cart=cartitem;
        localStorage.setItem("users",JSON.stringify(users))
    }
  },[cartitem])

  useEffect(function(){
    let a = JSON.parse(localStorage.getItem("curuser"))?.cart||[]
    if(a)
    setcartitem(a)
  },[curUser])

  

  return (
    <>
      <Router>
        <Header
          search={search}
          setsearch={setsearch}
          cartitems={cartitems}
          cartprice={cartprice}
          curUser={curUser}
        />
        <Navigation setHow={setHow} How={How}>
          {How ? <WantItem /> : null}
        </Navigation>

        <Routes>
          <Route
            path="/walmart-chandru"
            element={
              <Index
                setcurpro={setcurpro}
                How={How}
                search={search}
                filteredData={filteredData}
                setdatarray={setdatarray}
                cartitem={cartitem}
                addcartitem={addcartitem}
                removecartitem={removecartitem}
                setcartitem={setcartitem}
                
              />
            }
          />
          <Route path="/:names" element={<Singleproduct datarray={datarray} setdatarray={setdatarray} cartitem={cartitem} addcartitem={addcartitem} removecartitem={removecartitem}/>} />
          <Route path="/cart" element={<Cart cartitem={cartitem} removecartitem={removecartitem} clearcartitem={clearcartitem} cartprice={cartprice}/>} />
          <Route path="/signin" element={<Signin setCurUser={setCurUser} />} />
          <Route path="/createAccount" element={<Createaccount />} />
          <Route path="/profile" element={<Profile curUser={curUser} setCurUser={setCurUser} setcartitem={setcartitem}/>} />
          <Route path="*" element={<Err curpro={curpro} />} />

          
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

function filterArrayBySearchQuery(array, query) {
  const lowerCaseQuery = query.toLowerCase().trim();

  const filteredArray = array.filter((item) => {
    const lowerCaseName = item.name.toLowerCase();
    return lowerCaseName.includes(lowerCaseQuery);
  });

  return filteredArray;
}
function Singleproduct({ datarray,setdatarray,cartitem,addcartitem,removecartitem }) {
  const { names } = useParams();
  const [title,settitle]  = useState("Walmart");
  let name = names;

  useEffect(()=>{
    if(title!=="Walmart")
    document.title="Walmart | "+title;

    return ()=>{
      document.title="Walmart"
    }
  },[title])
  return (
    <>
      {datarray.map((item) => item.name === name && <Productpage item={item} setdatarray={setdatarray} settitle={settitle} cartitem={cartitem} addcartitem={addcartitem} removecartitem={removecartitem}/>)}

      <Link to="/walmart-chandru">go back</Link>
    </>
  );
}
function Err({ curpro }) {
  return (
    <>
      <h2>Error</h2>
      {/* <Link to="/walmart-chandru">go back</Link> */}
      <img src={curpro.img} alt="" />
    </>
  );
}
function Index({ setcurpro, How, search, filteredData, setdatarray,cartitem ,addcartitem,removecartitem,setcartitem}) {

  return (
    <>
      <div
        className="container"
        style={
          How
            ? {
                filter: " brightness(.7)",
                backgroundColor: "#eee",
                pointerEvents: "none",
                overflow: "hidden",
              }
            : {}
        }
        // onClick={winclic}
      >
        {search === "" && <Gallery />}
        <ProductsCart
          search={search}
          datarray={filteredData}
          setdatarray={setdatarray}
          setcurpro={setcurpro}
          addcartitem={addcartitem}
          removecartitem={removecartitem}
          cartitem={cartitem}
          setcartitem={setcartitem}
        />
        {search === "" && <Actioncart />}
        {search === "" && <Atm />}
        {search === "" && <Gallery2 />}
      </div>
    </>
  );
}

function WantItem() {
  return (
    <>
      <div className="wantitem">
        <div className=" devLogos">
          <div className="item ship">
            <img src={shiplogo} />
            <p>Shipping</p>
          </div>
          <div className="item pick">
            <img src={picklogo} />
            <p>Pickup</p>
          </div>
          <div className="item dev">
            <img src={deliverylogo} />
            <p>Delivery</p>
          </div>
        </div>

        <div className="address">
          <div className="add-con">
            <img src={locblacklogo} />
            <div className="addCon">
              <p>Add an address for shipping and delivery</p>
              <p>karur, 639004</p>
            </div>
          </div>
          <button>Add Address</button>
        </div>

        <div className="homeAdd">
          <img className="home-logo" src={homelogo}/>
          <div>
            <p>Chandrakumar</p>
            <p>Pasupathipalayam,karur-639004</p>
          </div>
          <img className="right-arrow" src={rightarrow} />
        </div>
      </div>
    </>
  );
}

function Productpage({ item,settitle,cartitem,addcartitem,removecartitem}) {
  const [imachange,setimgchange] = useState(item.img)
  const [isoncart, setisoncart] = useState(false);



  function handlebtn() {
    isoncart ? removecartitem(item) : addcartitem(item);
    setisoncart((i) => !i);
  }

  useEffect(()=>{
    window.scrollTo(200,0);
    settitle(item.name)
    cartitem.map(itm=>itm.id===item.id&&setisoncart(true))
  },[])

  var dt=new Date();
  dt.setDate(dt.getDate()+5)

  return (
    <>
      <div className="pro-page-con">
        <marquee direction="right" className="blink">
          Today 10% Offer Flat $150 off on $2000 , Flat $200 on $3000
        </marquee>

        <div className="pro-con">
          <div className="pro-imgs">
            <div className='other-imgs' onMouseEnter={()=>setimgchange(item.img)}><img src={item.img}/></div>
            <div className='other-imgs' onMouseEnter={()=>setimgchange(item.img1)}><img src={item.img1}/></div>
            <div className='other-imgs' onMouseEnter={()=>setimgchange(item.img2)}><img src={item.img2}/></div>
            <div className='other-imgs' onMouseEnter={()=>setimgchange(item.img3)}><img src={item.img3}/></div>
          </div>

          <div className="pro-img">
            <img src={imachange} />
          </div>

          <div className="pro-dis">
            <p style={{ textDecoration: "underline", fontSize: "12px" }}>
              {item.seller}
            </p>
            <h1>{item.name}</h1>

            <p className="pro-cata">{item.catagory}</p>
            <p
              className="best-sel"
              style={item.star < 3 ? { borderColor: "red", color: "red" } : {}}
            >
              {item.star < 3 ? "Worst Seller" : "Best Seller"}
            </p>
            <Star Nstar={item.star} />
            <p className="pro-dis-para">
              Lorem Ipsum is simply dummy text of the essentially unchanged. It
              was popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <span className="pro-price">
              <h1><span style={{color:"red"}}>₹</span> {item.amt} </h1>
                <p><del className='del-amt'>{item.amt + 200}</del></p>
            </span>
            <p style={{color:"green"}}>In stock</p>
            <button className='sin-buy-now'>Buy Now</button>
            <button className='sin-buy-now' onClick={handlebtn} style={isoncart?{backgroundColor:"#f09300"}:{}} >{isoncart?"Remove":"Add to cart"}</button>

            <div className="bank-offer">
              <p>💥 Offers</p>
              <div className="banks-con">
                  <div className="banks">
                    <h5>No cost EMI</h5>
                    <p>Upto $10% EMI interest savings on select Credit cards</p>
                    <a>Learn More> </a>
                  </div>
                  <div className="banks">
                    <h5>Bank Offer</h5>
                    <p>Upto $12% discount on SBI Credit Cards</p>
                    <a>Learn More> </a>
                  </div>
                  <div className="banks">
                    <h5>Partner Offer</h5>
                    <p>Get up to 4 Months Audible Membership With purchase of Product</p>
                    <a>Learn More> </a>
                  </div>
                  <div className="banks">
                    <h5>No cost EMI</h5>
                    <p>Upto $10% EMI interest savings on select Credit cards</p>
                    <a>Learn More> </a>
                  </div>
              </div>
            </div>

            <h4 style={{color:"green"}}>FREE delivery on {dt.toDateString()}</h4>
          </div>
        </div>

        <div className='pro-down-description'>
          <div className='pro-des'>
            <div className='pro-des-img'>
              <img src={item.img1}/>
            </div>
            <div className='pro-des-para'> 
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section pro-des-1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
          </div>
        </div>

        <div className='pro-down-description'>
          <div className='pro-des'>
            <div className='pro-des-para'> 
                <p style={{textAlign:"right"}}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section pro-des-1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div className='pro-des-img'>
              <img src={item.img2}/>
            </div>
          </div>
        </div>


        <div className='pro-down-description'>
          <div className='pro-des'>
            <div className='pro-des-img'>
              <img src={item.img3}/>
            </div>
            <div className='pro-des-para'> 
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section pro-des-1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
          </div>
        </div>

        <div className='pro-down-description'>
          <div className='pro-des'>
            <div className='pro-des-para'> 
                <p style={{textAlign:"right"}}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section pro-des-1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div className='pro-des-img'>
              <img src={item.img}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Star({ Nstar }) {
  const [rate, setrate] = useState(Nstar);
  return (
    <div className="single-pro-stars stars">
      {Array.from({ length: 5 }, (_, i) => (
        <Starlist full={rate >= i + 1} />
      ))}
      <span>Reviews ({rate * 234})</span>
    </div>
  );
}

function Starlist({ full }) {
  return (
    <span className="sinstar">
      {full ? (
        <img src={fillstart} alt="SVG as an image" alt="" />
      ) : (
        <img src={nostart} alt="SVG as an image" alt="" />
      )}
    </span>
  );
}
export default App;