import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponents";
import axios from "axios";
import {setProducts} from "../redux/actions/productActions";


const ProductListing = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios
        .get("https://food-power.glitch.me/restaurants/")
        .catch((err) => {
            console.log("err", err);
        });
        console.log(response.data);
        dispatch(setProducts(response.data.data));
    };

    useEffect(() => {
        fetchProducts();
    },[]);

    console.log("product: " ,products);
    return (
        <div>
            <ProductComponent/>
        </div>
    )
}

export default ProductListing;