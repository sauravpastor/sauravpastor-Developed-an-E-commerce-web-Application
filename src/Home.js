import { useState , useEffect } from "react";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { addtoCart } from "./cartSlice";
import Slideshow from "./Silider";


const Home = () =>{
    const [mydata , setMydata] = useState([]);

    const dispatch = useDispatch();

    const loadData = () => {
         let url = "http://localhost:4000/product";
         axios.get(url).then((res)=>{
            setMydata(res.data);
         })
    }

    useEffect(()=>{
       loadData();
    },[])

    const productAns = mydata.map((key)=>{

      return(
        <>
       
         <div className="proitems">
      
          <img src={"images/"+key.image} width="230" height="250" style={{marginLeft:"13px" , borderRadius:"10px"}} />
          <div style={{display:"flex"}}>
          <div style={{marginLeft:"13px"}}>
          <h3>Name: {key.name}</h3>
          <h4>Price: {key.price}</h4>
          <h4>Brand: {key.brand}</h4>
          
            </div>
          <div style={{marginTop:"30px"}}>
          <button onClick={()=>{
            dispatch(addtoCart({id:key.id,
              name:key.name, price:key.price,
              image:key.image, brand:key.brand}))
            }}
             style={{backgroundColor: "#3468C0", color:"white",borderRadius:"5px",padding:"1px",width:"80px",height:"30px"}}>
              Add Cart
             </button>
              
            </div>
            </div>
         </div>
        </>
      )
    })

    return(
        <>
        <br />
          <div class="ProductDiv">
      <div class="im1">
        <div>
          <h1 style={{textShadow:"1.5px 1.5px blue"}} >
            Stylish Shoes <br />
            For Women
          </h1>
        </div>
      </div>
      <div class="im2">
        <div class="im22">
          <h1 style={{textShadow:"1.5px 1.5px white"}}>Sports Wear</h1>
          
        </div>
        <div class="im23">
          <h1 style={{textShadow:"1.5px 1.5px white"}}>Sports Wear</h1>
         
        </div>
        <div></div>
      </div>
    </div>
    <br /> <br />
        <Slideshow/>
{/* ------------------------------------- */}
    <div class="DiscountDiv">
      <div class="DiscountDivInner">
        <div>
          <h1>
            10% OFF Discount <br />
            Coupons
          </h1>
          <p>Subscribe us to get 10% OFF on all purchases</p>
        </div>
        <div>
          <button>EMAIL ME</button>
        </div>
      </div>
    </div>
    
{/* --------------------------------------- */}

<div class="FeatVA">
      <div><h3>F E A T U R E D P R O D U C T</h3></div>
      <div><h4>VIEW ALL</h4></div>
    </div>

   
    <div class="Fiveimgdiv">
      {productAns}
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    {/* ----------------------------------- */}

    <div class="TwoMostcollecttion">
      <div class="FirstCol">
        <h1 style={{textShadow:"1.5px 1.5px blue"}}>
          Minimal <br />
          Collection <br />
          <span>SHOP NOW</span>
        </h1>
      </div>
      <div class="SecondCol">
        <h1 style={{textShadow:"1.5px 1.5px grey"}}>
          Sneakers <br />
          Collection <br />
          <span>SHOP NOW</span>
        </h1>
      </div>
    </div>
        </>
    )
}
export default Home;