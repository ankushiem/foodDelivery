import { ActionTypes } from "../redux/contants/actiontypes";
import { useSelector,useDispatch } from "react-redux";

export function MenuItem(props) {
    const { id,name,price,cloudinaryImageId } = props.item;
  
    const cartByIds = useSelector((state) => state.changeTheNumber.cartByIds);
    // console.log("in line 10", cartByIds);
    const dispatch = useDispatch();
  
    const quantity = cartByIds[id]?.quantity ?? 0;
  
    function handleIncrement() {
      dispatch({
        type: ActionTypes.INCREMENT,
        payload: {
          itemId: id
        }
      });
    }
  
    function handleDecrement() {
      dispatch({
        type: ActionTypes.DECREMENT,
        payload: {
          itemId: id
        }
      });
    }
  
    const addBtn = (
      <button
        onClick={handleIncrement}
      >
        Add +
      </button>
    );
  
    const increaseBtn = (
      <button
        onClick={handleIncrement}
      >
        +
      </button>
    );
  
    const decreaseBtn = (
      <button
        onClick={handleDecrement}
      >
        -
      </button>
    );
  
    const qtyIndicator = (
      <div >
        {quantity}
      </div>
    );
  
    return (
      <li className="food-item">
        <div>
            
            <img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`} alt="food"/>

            <h4>{name}</h4>
            <span>(${price})</span>
        </div>
        {quantity===0 ? (
            addBtn
        ):(
            <div className="menu-btn-group">
                {decreaseBtn}
                {qtyIndicator}
                {increaseBtn}
            </div>
        )
    }
      </li>
    );
  }
  
  
  
  export default MenuItem;
  