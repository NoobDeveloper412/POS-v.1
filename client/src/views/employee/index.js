import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AppLayout from "../../layout/AppLayout";
import UserLayout from "../../layout/UserLayout";

const ViewEmployee = React.lazy(() =>
  import(/* webpackChunkName: "employee-view" */ "./view")
);
// const Register = React.lazy(() =>
//   import(/* webpackChunkName: "user-register" */ './register')
// );
// const ForgotPassword = React.lazy(() =>
//   import(/* webpackChunkName: "user-forgot-password" */ './forgot-password')
// );
// const ResetPassword = React.lazy(() =>
//   import(/* webpackChunkName: "user-reset-password" */ './reset-password')
// );

const Employee = ({ match }) => {
  return (
    <AppLayout>
      <div className="dashboard-wrapper">
        <Suspense fallback={<div className="loading" />}>
          <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/view`} />
            <Route
              path={`${match.url}/view`}
              render={(props) => <ViewEmployee {...props} />}
            />
            <Redirect to="/error" />
          </Switch>
        </Suspense>
      </div>
    </AppLayout>
  );
};

export default Employee;
