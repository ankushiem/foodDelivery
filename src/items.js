import React from "react";

const Item = ({id ,name, avgRating , costForTwoString ,cuisines ,deliveryTime,cloudinaryImageId}) => {

    return (
        <div>
            <img src={cloudinaryImageId}/>
            <h2> {name}</h2>
            <h3>{cuisines}  </h3>
            <h4>Rating *{avgRating} |  {deliveryTime} min  | {costForTwoString}</h4>
            <button>click here</button>
        </div>
    )
}

export default Item