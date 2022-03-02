import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

const Dashboard = ({ authenticated }) => {

    console.log(authenticated)

    if(!authenticated) {

        return <Redirect to="/"/>

    }

    return (

        <h1>
            Dashboard
        </h1>

    );

}

export default Dashboard;