import axios from 'axios';
import React from 'react';
import { useEffect , useState } from 'react';
import { act } from 'react-dom/test-utils';
import Item from './items';
import { products } from './products';

const FoodData = () => {
     const [item , setItem] = useState([]);
    //  const url = 'https://food-power.glitch.me/restaurants/';
    // const requ = axios.get(url);
    // console.log(requ);
    //console.log(requ.Object);
    const fetchProducts = async () => {
        const response = await axios
        .get("https://food-power.glitch.me/restaurants/")
        .catch((err) => {
            console.log("err" , err);
        });
        //console.log(response.data.data[0].cuisines);
        setItem(response.data.data);
    };
    useEffect(() => {
        fetchProducts();
    },[]);
    return (
        <div>
            {
                item.map((currItem) => {
                    return <Item key={currItem.id} {...currItem}/>
                })
            }
        </div>
    )
}

export default FoodData