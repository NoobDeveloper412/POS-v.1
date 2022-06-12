import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AppLayout from "../../layout/AppLayout";
import UserLayout from "../../layout/UserLayout";

const OrderDesignScreen = React.lazy(() =>
  import(/* webpackChunkName: "create-order" */ "./createOrder")
);
// const ViewProduct = React.lazy(() =>
//   import(/* webpackChunkName: "user-register" */ "./")
// );
// const ForgotPassword = React.lazy(() =>
//   import(/* webpackChunkName: "user-forgot-password" */ './forgot-password')
// );
// const ResetPassword = React.lazy(() =>
//   import(/* webpackChunkName: "user-reset-password" */ './reset-password')
// );

const Order = ({ match }) => {
  return (
    <AppLayout>
      <div className="dashboard-wrapper">
        <Suspense fallback={<div className="loading" />}>
          <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/create`} />
            <Route
              path={`${match.url}/create`}
              render={(props) => <OrderDesignScreen {...props} />}
            />
            {/* <Route
              path={`${match.url}/view`}
              render={(props) => <ViewProduct {...props} />}
            /> */}
            <Redirect to="/error" />
          </Switch>
        </Suspense>
      </div>
    </AppLayout>
  );
};

export default Order;
