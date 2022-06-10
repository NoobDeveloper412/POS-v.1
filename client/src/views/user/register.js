import React, { Component } from "react";
import { Row, Card, CardTitle, Form, Label, Input, Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { registerUserAction } from "../../redux/actions";

import IntlMessages from "../../helpers/IntlMessages";
import { Colxx } from "../../components/common/CustomBootstrap";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "demo1@gmail.com",
      password: "demo1demo1",
      name: "demo1demo1",
      password_confirmation: "demo1demo1",
    };
  }
  onHandleRegister = (event) => {
    // event.preventDefault();

    let email = this.state.email;
    let password = this.state.password;
    let name = this.state.name;
    let password_confirmation = this.state.password_confirmation;

    const data = {
      email,
      password,
      name,
      password_confirmation,
    };

    this.props.dispatch(registerUserAction(data));
  };

  render() {
    return (
      <Row className="h-100">
        <Colxx xxs="12" md="10" className="mx-auto my-auto">
          <Card className="auth-card">
            <div className="position-relative image-side ">
              <p className="text-white h2">MAGIC IS IN THE DETAILS</p>
              <p className="white mb-0">
                Please use this form to register. <br />
                If you are a member, please{" "}
                <NavLink to={`/user/login`} className="white">
                  login
                </NavLink>
                .
              </p>
            </div>
            <div className="form-side">
              <NavLink to={`/`} className="white">
                <span className="logo-single" />
              </NavLink>
              <CardTitle className="mb-4">
                <IntlMessages id="user.register" />
              </CardTitle>
              <Form onSubmit={this.onHandleRegister}>
                <Label className="form-group has-float-label mb-4">
                  <Input type="name" defaultValue={this.state.name} />
                  <IntlMessages id="user.fullname" />
                </Label>
                <Label className="form-group has-float-label mb-4">
                  <Input type="email" defaultValue={this.state.email} />
                  <IntlMessages id="user.email" />
                </Label>
                <Label className="form-group has-float-label mb-4">
                  <Input type="password" />
                  <IntlMessages
                    id="user.password"
                    defaultValue={this.state.password}
                  />
                </Label>
                <div className="d-flex justify-content-end align-items-center">
                  <Button
                    color="primary"
                    size="lg"
                    className={`btn-shadow btn-multiple-state ${
                      this.props.loading ? "show-spinner" : ""
                    }`}
                  >
                    <IntlMessages id="user.register-button" />
                  </Button>
                </div>
              </Form>
            </div>
          </Card>
        </Colxx>
      </Row>
    );
  }
}
const mapStateToProps = ({ authUser }) => {
  const { user, loading } = authUser;
  return { user, loading };
};

export default connect(mapStateToProps)(Register);
