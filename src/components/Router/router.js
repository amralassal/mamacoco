import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Charts from '../../containers/Charts/charts';
import Tables from '../../containers/Tables/tables';
import Settings from '../../containers/Settings/settings';
import Main from '../../containers/Main/main';
// import Menus from '../../containers/Menus/components/app/app';

const Router = props => (

  <Switch>
    <Route exact path="/" component={Main}/>
    {/*<Route exact path="/charts" component={Charts}/>*/}
    {/*<Route exact path="/tables" component={Tables}/>*/}
    {/*<Route exact path="/settings" component={Settings}/>*/}
    <Route exact path="/main" component={Main}/>
    {/*<Route exact path="/menus" component={Menus}/>*/}
  </Switch>
);

export default Router;
