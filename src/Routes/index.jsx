import { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../pages/Login';
import Registration from '../pages/Registration';
import Dashboard from '../pages/Dashboard';

const Routes = () => {

    const [authenticated, setAuthenticated] = useState(true);

    useEffect(() => {

        const token = JSON.parse(localStorage.getItem("@Kenziehub:token"));

        if(token) {

            return setAuthenticated(true);

        }

    }, [authenticated]);

    return (

        <Switch>

            <Route exact path="/">

                <Login 

                    authenticated={authenticated}

                    setAuthenticated={setAuthenticated}

                />

            </Route>

            <Route path="/registration">

                <Registration authenticated={authenticated}/>

            </Route>

            <Route path="/dashboard">

                <Dashboard authenticated={authenticated}/>

            </Route>

            <Route 

                render={() => <Redirect to="/"/>}

            />

        </Switch>

    );

}

export default Routes;