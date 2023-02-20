import "./App.css";
import React from "react";
import Navbar from "./Navbar";
import Cart from "./Cart";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 999,
          title: "phone",
          qty: 1,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDWVwxGgUYdaECtUAJdEMKJnJWZUNpKnggcBkpKdRvWw&s",
          id: 1,
        },
        {
          price: 999,
          title: "phone 2",
          qty: 1,
          img: "https://www.bajajfinservmarkets.in/ecomm/images/catalog/product/1/o/1oppo_a54_base_28_octo_2.jpeg",
          id: 2,
        },
        {
          price: 999,
          title: "phone 3",
          qty: 1,
          img: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8&w=1000&q=80",
          id: 3,
        },
      ],
    };
  }
  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
      products: products,
    });
  };
  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty != 0) {
      products[index].qty -= 1;
    }
    this.setState({
      products: products,
    });
  };
  handleDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);
    this.setState({
      products: items,
    });
  };
  getCartCount = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    });
    return count;
  };
  getCartTotal = () => {
    const { products } = this.state;
    let cartTotal = 0;
    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price;
    });
    return cartTotal;
  };
  render() {
    const { products } = this.state;
    return (
      <div className="App">
        {/* <button onClick={showAlert}>ss</button> */}

        <Navbar count={this.getCartCount()} />

        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={{ fontSzie: 20 }}> Totat :{this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
