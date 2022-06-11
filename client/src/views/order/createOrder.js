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
            <div className="cardContainer">
              <GradientCard
                imgSrc="https://smarative.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1562657549-7dfcbd4a97f8%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DMnwxMTc3M3wwfDF8c2VhcmNofDN8fGJvcmRlcnxlbnwwfHx8fDE2MjAxNzAwMTM%26ixlib%3Drb-1.2.1%26q%3D80%26w%3D2000&w=1920&q=75"
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
