import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../index.css";

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    // const productItem = () => {
    //     return (
    //         <div>
    //             <Link to = {'/https://food-power.glitch.me/restaurant/${id}'} ></Link>
    //         </div>
    //     )
    // }
    const renderList = products.map((product) => {
        const {id, avgRating,cuisines ,deliveryTime,name,costForTwoString,cloudinaryImageId} = product;
        return (
            <div key={id}>
            <Link to = {`/food-power.glitch.me/restaurant/${id}`} >
            <div className="container">
            <img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`} alt="food"/>
                {/* {console.log(id)} */}
                <h2> {name}</h2>
                <h3>{cuisines}  </h3>
                <h4>Rating *{avgRating} |  {deliveryTime} min  | {costForTwoString}</h4>
                {/* <button onClick={productItem}>click here</button> */}
                
            </div>
            </Link>
            </div>
        );
    });
    return (
        <div>
            {renderList}
        </div>
    )
};

export default ProductComponent;
