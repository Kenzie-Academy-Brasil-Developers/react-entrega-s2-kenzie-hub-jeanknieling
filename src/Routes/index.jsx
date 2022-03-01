import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../pages/Login';
import Registration from '../pages/Registration';
import Dashboard from '../pages/Dashboard';

const Routes = () => {

    return (

        <Switch>

            <Route exact path="/">
                <Login/>
            </Route>

            <Route path="/registration">
                <Registration/>
            </Route>

            <Route path="/dashboard">
                <Dashboard/>
            </Route>

            <Route 
                render={() => <Redirect to="/"/>}
            />

        </Switch>

    );

}

export default Routes;