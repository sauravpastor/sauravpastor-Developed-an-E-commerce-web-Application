import {useSelector ,useDispatch} from "react-redux";
import {addQTY,removeQTY,removeItem}  from "./cartSlice";
import { AiTwotoneDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";


const CartItem=()=>{

    const cartData= useSelector((state)=>state.mycart.cart);
   
    const dispatch = useDispatch();
    const mynav= useNavigate();

    let netAmount = 0;

     const ans=cartData.map((key)=>{

         netAmount+=key.price*key.qnty;
           return(
            <>
           
              <tr>
                <td> <img src={"images/"+key.image} width="150" height="120" style={{borderRadius:"15px",border:"3px solid rgb(248, 248, 248)" , padding:"5px",margin:"15px"}}  /> </td>
                <td> {key.name} </td> 
                <td> {key.brand} </td>
                <td> {key.price} </td>
                <td> 
                   <button onClick={()=>{dispatch(addQTY({id:key.id}))}} style={{padding:"0 4px" , margin:"1px"}}>+</button>
                    {key.qnty}
                     <button onClick={()=>{dispatch(removeQTY({id:key.id}))}} style={{padding:"0 4px" , margin:"1px"}}>-</button>
                     </td>
                <td> 
                  {key.price * key.qnty}
                    </td>

                <td> 
                   <button onClick={()=>{dispatch(removeItem(key.id))}} > <AiTwotoneDelete    style={{fontSize:"20px",color:"black"}} /> </button>
                    </td>
              </tr>
            
              <tr align="left" >
                        <th colspan="7" bgcolor="#496989" height="1">
                         </th>
                 
                    </tr>
                  
            </>
           )
     })

     const BuyNow = () => {
         mynav("/buynow");
     }

    return(
        <>
         <br/>
          <h1 style={{color:"#1679AB",textAlign:"center"}}> Our WishList Products Item </h1> <br />

                 <table className="tab"  >
                    <tr align="left" style={{backgroundColor:"#496989" ,fontSize:"18px", textAlign:"center",color:"white" }}> 
                        <th > Items </th>
                        <th> Products Name</th>
                        <th> Brand </th>
                        <th> Price per Item</th>
                        <th> Quantity </th>
                        <th> Total Amount</th>
                        <th> Remove Item</th>
                        
                    </tr>
                    {ans}
                   
                 <tr align="left" style={{fontSize:"20px", textAlign:"center" }} > 
                        <th >  </th>
                        <th> </th>
                        <th>  </th>
                        <th> </th>
                        <th> Grand Total </th>
                        <th> {netAmount} </th>
                    </tr>
                 </table>
                 <br />
                 <br />

              <center>
                 <button className="buynowbutton" onClick={BuyNow} >Buy Now</button>
                 </center>
                 

        </>
    )
}

export default CartItem;