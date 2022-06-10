import React, { Component, Fragment } from "react";
import { Col, Row } from "reactstrap";
import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import Bar from "../../../components/charts/Bar";
import Area from "../../../components/charts/Area";

export default class Report extends Component {
  render() {
    return (
      <Fragment>
        <Row>
          <Col className="col">
            <Breadcrumb heading="menu.start" match={this.props.match} />
            <Separator className="mb-5" />
          </Col>
        </Row>
        <Row className="report__row">
          <Col className="col-sm-6">
              {/* <Bar /> */}
              <Area />
          </Col>
          <Col className="col-sm-6">
              <Bar />
              {/* <Area /> */}
          </Col>
        </Row>
      </Fragment>
    );
  }
}
