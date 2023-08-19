import { useEffect, useState } from "react"


export default function Cart({cartitem,removecartitem,clearcartitem,cartprice}){ 
  useEffect(function(){
    document.title="Walmart | cart"

    return function(){
        document.title="Walmart"
    }
},[])

    return<>
            {cartitem.length?<Cartrender cartitem={cartitem} removecartitem={removecartitem} clearcartitem={clearcartitem} cartprice={cartprice}/>:<Noitems/>}
    </>
}


function Cartrender({cartitem,removecartitem,clearcartitem,cartprice}){
    const [modalShown, toggleModal] = useState(false);
    return<>
        <div className="cart-con">
            <h1 style={{textAlign:"center"}}>Cart items</h1>
            <div className="cart-products">
                {cartitem.map(item=><CartPro item={item} removecartitem={removecartitem}/>)}
            </div>

            <div className='btns-con'>
                <button className='remove-all-cartitem' onClick={()=>clearcartitem()}>Remove all items</button>
                <button className='remove-all-cartitem buy-all' onClick={() => {toggleModal(!modalShown);}}>Buy All items</button>
            </div>
      <Modal shown={modalShown} close={() => {toggleModal(false);}} cartitem={cartitem} cartprice={cartprice}></Modal>
        </div>
    </>
}


function CartPro({item,removecartitem}){

    return<div className="cart-pro">
            <div className="cart-img">
                <img src={item.img}/>
            </div>
            <div className="cart-des">
                <p>{item.seller}</p>
                <h1>{item.name}</h1>
                <p>{item.catagory}</p>
                <h2><span style={{color:"red"}}>₹</span>{item.amt}</h2>
                <button className='Remove-from-cart' onClick={()=>removecartitem(item)} >Remove</button>
            </div>
    </div>
}


function Noitems(){

    return<div className='Noitems-con'>
            <div className='Noitems'>
                <h1 className='noitem-p'>No items in cart</h1>
            </div>
    </div>
}


function Modal({ children, shown, close ,cartitem,cartprice}) {
    return shown ? (
      <div
        className="modal-backdrop"
        onClick={() => {
          // close modal when outside of modal is clicked
          close();
        }}
      >
        <div
          className="modal-content"
          onClick={e => {
            // do not close modal if anything inside modal content is clicked
            e.stopPropagation();
          }}
        >
          <button onClick={close} className='model-close-btn'>X</button>
          <div className="bill">
                <table  id="customers">
                <tr><th>No</th><th>Products</th><th>Quantity</th><th>Price</th></tr>
                {cartitem.map((item,i)=><tr><td>{i+1}</td><td>{item.name}</td><td>{1}</td><td>{item.amt}</td></tr>)}
                <tr style={{backgroundColor:"#c9eaff",fontWeight:"600"}}><td colSpan={3} style={{textAlign:"right"}}>Total price</td><td>{cartprice}</td></tr>
                </table>
                
                <button className='Remove-from-cart bg' onClick={()=>alert("Site was in development")}>Pay Now</button>
          </div>
        </div>
      </div>
    ) : null;
  }