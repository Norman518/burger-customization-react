import React, { Component } from "react";
import { Route } from "react-router-dom";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData"
class Checkout extends Component {
  //dummy data
  state = {
    ingredients: {
      lettuce: 1,
      meat: 1,
      cheese: 1,
      tomato: 1
    }
  };
  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    for (let param of query.entries()) {
      ingredients[param[0]] = +param[1];
    }
    this.setState({ ingredients: ingredients });
  }
  checkoutContinueHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };
  checkoutCancelHandler = () => {
    this.props.history.goBack();
  };
  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutContinue={this.checkoutContinueHandler}
          checkoutCancel={this.checkoutCancelHandler}
        />
        <Route path={`${this.props.match.url}/contact-data`} component={ContactData} />
      </div>
    );
  }
}

export default Checkout;
