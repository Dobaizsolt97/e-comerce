import React from "react";
import { connect } from "react-redux";
import "./checkout-item.styles.scss";
import {
  ClearItemFromCart,
  addItem,
  removeItem
} from "../../redux/cart/cart.actions";

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(ClearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item ">
      <div className="image-container">
        <img alt="item" src={imageUrl}></img>
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div onClick={() => removeItem(cartItem)} className="arrow">
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div onClick={() => addItem(cartItem)} className="arrow">
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div onClick={() => clearItem(cartItem)} className="remove-button">
        &#10005;
      </div>
    </div>
  );
};
export default connect(null, mapDispatchToProps)(CheckoutItem);
