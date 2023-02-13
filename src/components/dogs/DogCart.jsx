import "./Dogs.css";
import { useState,useContext } from "react";
import { CartContext } from "../contexts/CartContext";
const DogCart = (props) => {
    const {id, name, breed, description, price, imageUrl} = props;
    const [add, setAdd] = useState(false);
    const {addMyCart,setTotal} = useContext(CartContext);
    const handleAdd = () =>{
        setAdd(true);
        const newItem = {
            id:id,
            name:name,
            price:price,
            image:imageUrl
        };
        addMyCart((item) => [...item,newItem]);
        setTotal((total) => total += Number(price));
    }
    const handleAdded = () =>{
        setAdd(false);
    }

    return ( 
        <>
            <div className="dogs">
                <div key={id} className="dog-infor">
                    <p>{name}</p>
                    <p>{breed}</p>

                </div>
                <div className="imgs">
                    <img className="img" src={imageUrl} alt="" />
                </div>
                <div className="desc">{description}</div>
                <div className="price">{price}$</div>
                {add ? (
                    <button className="btn-added" onClick={handleAdded}>Added</button>
                ) : (
                    <button className="btn-card" onClick={handleAdd}>Add to card</button>
                )}
                
            </div>
        </>
     );
}
 
export default DogCart;