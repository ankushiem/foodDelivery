import React, { useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from "../redux/actions/productActions";

const ProductDetails = () => {
    const product = useSelector((state) => state.product);
    const {area, menu,name , locality} = product;
    // const {items} = menu;
    const {productId } = useParams();
    const dispatch = useDispatch();
    console.log(menu);

    const fetchProductDetail = async () => {
        const response = await axios
        .get(`https://food-power.glitch.me/restaurant/${productId}`)
        .catch((err) => {
            console.log("err" , err);
        });
        dispatch(selectedProduct(response.data.data));
    };
    useEffect(()=> {
        if (productId && productId!=="") fetchProductDetail();
    },[productId]);
    return (
        <div>
            <h1>Product Details</h1>
            {Object.keys(product).length===0 ? (
                <div> Loading...</div>
            ):(
                <div>
                    <h1> hello {area}</h1>
                    <h2> here {name} | {locality}</h2>
                    {/* <p>{items}</p> */}
                </div>
            )}
        </div>
    )
}
export default ProductDetails;