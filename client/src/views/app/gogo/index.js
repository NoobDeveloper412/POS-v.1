import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Report from './report';

const Start = React.lazy(() =>
  import(/* webpackChunkName: "start" */ './report')
);
const Gogo = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/report`} />
      <Route
        path={`${match.url}/report`}
        render={props => <Report {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Gogo;
