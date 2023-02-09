import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";
const Cart = () => {
    const {myCart,total,addMyCart,setTotal} = useContext(CartContext);
    const navigate = useNavigate();
    const handleHome = () =>{
        navigate("/");
    };
    const handleDone = () =>{
        addMyCart([{}]);
        setTotal(0);
    };
    return ( 
        <>
            <p className="title">checkout</p>
            <div className="cart-container">
                
                    {myCart.slice(1).map((dog) => {
                        return(
                            <div key={dog.id} className="dogs-item">
                                <img className="dog-img" src={dog.image} alt ="" />
                                <p className="inf"> {dog.name} : {dog.price}$</p>
                            </div>
                        )
                    })}
                    <div className="total" >Total : {total}$</div>

            </div>
            <div className="button">
                    <button className="btns" onClick={handleHome}>Home</button>
                    <button className="btns" onClick={handleDone}>done</button>
            </div>
        </>
     );
}
 
export default Cart;