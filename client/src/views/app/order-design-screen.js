import React, { Component, Fragment } from "react";
import { CustomInput, Row } from "reactstrap";
import IntlMessages from "../../helpers/IntlMessages";
import { Colxx, Separator } from "../../components/common/CustomBootstrap";
import Breadcrumb from "../../containers/navs/Breadcrumb";
import GradientCard from "../../components/cards/GradientCard";
import TodoListItem from "../../components/applications/TodoListItem";
import ListItems from "../../components/applications/ListItems";
import CustomInputField from "../../components/common/CustomInputField";

export default class OrderDesignScreen extends Component {
  render() {
    return (
      <div className="orderDesignScreen__mainContainer">
        <div className="row">
          <div className="col-sm-8">
            <div className="row orderDesignScreen__mainHeading">
              <h1>Products</h1>
              <CustomInputField placeholder="Search for products..." />
            </div>
            <div class="cardContainer">
              <GradientCard
                children={
                  <div class="orderDesignScreen__cardText">
                    <h2>Second card</h2>
                    <p>Some text</p>
                  </div>
                }
              />
              <GradientCard />
              <GradientCard />
              <GradientCard />
              <GradientCard />
              <GradientCard />
              <GradientCard />
              <GradientCard />
              <GradientCard />
              <GradientCard />
              <GradientCard />
              <GradientCard />
            </div>
          </div>
          <div className="col-sm-4 orderContainer">
              <h1>Order</h1>
              <ListItems itemName="Leanne Graham" qty={5} price={100} />
          </div>
        </div>
      </div>
    );
  }
}
