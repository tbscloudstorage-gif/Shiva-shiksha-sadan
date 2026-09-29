 

import { Link } from "react-router-dom";
import { useState } from "react";

const initialCart = [
  {
    id: 1,
    image: "assets/img/shop/details-sm-1-1.jpg",
    title: "Your product",
    price: 180,
    quantity: 1,
  },
  {
    id: 2,
    image: "assets/img/shop/details-sm-1-2.jpg",
    title: "Your product",
    price: 1260.5,
    quantity: 1,
  },
  {
    id: 3,
    image: "assets/img/shop/details-1-3.jpg",
    title: "Your product",
    price: 180,
    quantity: 1,
  },
  {
    id: 4,
    image: "assets/img/shop/details-1-4.jpg",
    title: "Your product",
    price: 90.5,
    quantity: 1,
  },
];

export default function CartArea() {

  const [cartItems, setCartItems] = useState(initialCart);

  // increment
  const handleIncrement = (id: number) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? {
          ...item,
          quantity: item.quantity + 1,
        }
        : item
    );

    setCartItems(updatedCart);
  };

  // decrement
  const handleDecrement = (id: number) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? {
          ...item,
          quantity:
            item.quantity > 1
              ? item.quantity - 1
              : 1,
        }
        : item
    );

    setCartItems(updatedCart);
  };

  // remove item
  const handleRemove = (id: number) => {
    const updatedCart = cartItems.filter(
      (item) => item.id !== id
    );

    setCartItems(updatedCart);
  };

  // cart total
  const total = cartItems.reduce(
    (acc, item) =>
      acc + item.price * item.quantity,
    0
  );

  return (
    <>
      {/* <!-- cart-area-start --> */}
      <section className="cart-area pt-130 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {cartItems.length > 0 ?
                <form  >

                  <div className="table-content table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="product-thumbnail">
                            Images
                          </th>

                          <th className="cart-product-name">
                            Product
                          </th>

                          <th className="product-price">
                            Unit Price
                          </th>

                          <th className="product-quantity">
                            Quantity
                          </th>

                          <th className="product-subtotal">
                            Total
                          </th>

                          <th className="product-remove">
                            Remove
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.map((item) => (
                          <tr key={item.id}>

                            <td className="product-thumbnail">
                              <Link to="/shop-details">
                                <img
                                  src={item.image}
                                  alt=""
                                />
                              </Link>
                            </td>

                            <td className="product-name">
                              <Link to="/shop-details">
                                {item.title}
                              </Link>
                            </td>

                            <td className="product-price">
                              <span className="amount">
                                $
                                {item.price.toFixed(2)}
                              </span>
                            </td>

                            <td className="product-quantity">

                              <span
                                className="cart-minus"
                                onClick={() =>
                                  handleDecrement(item.id)
                                }
                                style={{
                                  cursor: "pointer",
                                }}
                              >
                                -
                              </span>

                              <input
                                className="cart-input"
                                type="text"
                                value={item.quantity}
                                readOnly
                              />

                              <span
                                className="cart-plus"
                                onClick={() =>
                                  handleIncrement(item.id)
                                }
                                style={{
                                  cursor: "pointer",
                                }}
                              >
                                +
                              </span>

                            </td>

                            <td className="product-subtotal">
                              <span className="amount">
                                $
                                {(
                                  item.price *
                                  item.quantity
                                ).toFixed(2)}
                              </span>
                            </td>

                            <td className="product-remove">
                              <a
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleRemove(item.id);
                                }}
                              >
                                <i className="fa fa-times"></i>
                              </a>
                            </td>

                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="row">
                    <div className="col-12">

                      <div className="coupon-all">

                        <div className="coupon d-flex align-items-center flex-wrap">

                          <input
                            id="coupon_code"
                            className="input-text mb-20"
                            name="coupon_code"
                            placeholder="Coupon code"
                            type="text"
                          />

                          <button
                            className="it-btn-yellow theme-bg mb-20"
                            name="apply_coupon"
                            type="submit"
                          >
                            <span>
                              <span className="text-1">
                                Apply coupon
                              </span>

                              <span className="text-2">
                                Apply coupon
                              </span>
                            </span>
                          </button>

                        </div>

                        <div className="coupon2">

                          <button
                            className="it-btn-yellow theme-bg mb-20"
                            name="update_cart"
                            type="submit"
                          >
                            <span>
                              <span className="text-1">
                                Update cart
                              </span>

                              <span className="text-2">
                                Update cart
                              </span>
                            </span>
                          </button>

                        </div>

                      </div>

                    </div>
                  </div>

                  <div className="row justify-content-end">
                    <div className="col-md-5 ">

                      <div className="cart-page-total">

                        <h2>Cart totals</h2>

                        <ul className="mb-20">

                          <li>
                            Subtotal
                            <span>
                              ${total.toFixed(2)}
                            </span>
                          </li>

                          <li>
                            Total
                            <span>
                              ${total.toFixed(2)}
                            </span>
                          </li>

                        </ul>

                        <Link
                          className="it-btn-yellow theme-bg"
                          to="/checkout"
                        >
                          <span>

                            <span className="text-1">
                              Proceed to checkout
                            </span>

                            <span className="text-2">
                              Proceed to checkout
                            </span>

                          </span>
                        </Link>

                      </div>

                    </div>
                  </div>

                </form>
                :
                <tr>
                  <td colSpan={6}>
                    <div className="text-center py-5">
                      <h4>
                        No any item in cart
                      </h4>
                    </div>
                  </td>
                </tr>
              }
            </div>
          </div>
        </div>
      </section>
      {/* <!-- cart-area-end --> */}
    </>
  );
}
