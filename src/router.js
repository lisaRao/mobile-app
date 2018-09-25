import React from 'react';
import PropTypes from 'prop-types';
import { Router, Switch, Route } from 'dva/router';
import Dynamic from 'dva/dynamic';

function RouterConfig({ history, app}) {
  const Index = Dynamic({
    app,
    // models: () => [
    //   import('./models/index')
    // ],
    component: ()=> import('./routes/index')
  });
  const Coupon = Dynamic({
    app,
    models: () => [
      import('./models/coupon')
    ],
    component: ()=> import('./routes/coupon')
  });
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/coupon" component={Coupon} />
      </Switch>
    </Router>
  );
}

RouterConfig.propTypes = {
  history: PropTypes.object.isRequired
};

export default RouterConfig;
