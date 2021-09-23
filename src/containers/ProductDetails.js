import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from "../redux/actions/productActions";
import Item from "./items";
import reactDom from "react-dom";
import {View} from 'react';

const ProductDetails = () => {
    const product = useSelector((state) => state.product);
    const {area,name ,menu={}, locality} = product;
     //console.log(menu, typeof(menu));
    //  const [item , setItem] = useState([]);
    // console.log('In line 15', menu.items);
    //  for(const item in menu.items){
    //     console.log( `${item}:${menu.items[item]} `);
       
    //  }
    //  const {items} = menu;
    const {productId } = useParams();
    const dispatch = useDispatch();
    

    const fetchProductDetail = async () => {
        const response = await axios
        .get(`https://food-power.glitch.me/restaurant/${productId}`)
        .catch((err) => {
            console.log("err" , err);
        });
        dispatch(selectedProduct(response.data.data));
        // setItem(menu);
    };
    useEffect(()=> {
        if (productId && productId!=="") fetchProductDetail();
    },[productId]);
    // console.log(menu.items);
    // Object.keys(menu.items).forEach((k) => menu.items[k] == null && delete(menu.items[k]));

    var destinationObj = {};
    Object.assign(destinationObj, menu.items);
    const key = Object.keys(destinationObj);

    const iterate = key.map((currItem) => menu.items[currItem])

    let temp=[]
    const result = iterate.reduce((acc,item) => {
        if(temp.includes(item.category)){
            let objIndex = acc.findIndex((obj => obj.category === item.category));
            acc[objIndex].name = [...acc[objIndex].name,item.name];
            acc[objIndex].price = [...acc[objIndex].price,item.price];
        }else {
            temp.push(item.category);
            item.name = [item.name];
            item.price = [item.price];
            acc.push(item);
        }
        return acc;
    },[])
    const renderPriceList = (name,price) => {
        return (
            name.map((item,index) => 
                <div>
                    <p className="container1">{item} $ {price[index]}</p>
                    <button className="container2" type="button"> Add</button>
                </div>
            )

    )}

    const render = result.map((currItem) => {
        const {category , name, price} = currItem;
        name.shift();
        price.shift();
        return(
            <div className="container">
                <h3 className="container1">{category}</h3>
                {renderPriceList(name,price)}
            </div>
        )
    })
    
    return (
        <div className="container">
            <h1 className="container">Product Details</h1>
            {Object.keys(product).length ===0 ? (
                <div> Loading... </div>
            ):(
                <div className="container1">
                    <h1 className="container1"> hello {area}</h1>
                    <h2 className="container1"> here {name} | {locality}</h2>
                    {render}
                </div>
            )}
        </div>
                
    );
}
export default ProductDetails;
