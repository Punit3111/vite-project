// eslint-disable-next-line no-unused-vars
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';

const AuthWrapper = ({ children }) => {
    const isUserLoggedIn = useSelector((state) => state.user.isUserLoggedIn);

    useEffect(() => {

    }, [isUserLoggedIn]);

    if (isUserLoggedIn) {
        return <Redirect to="/dashboard" />;
    }  else {
        return <Redirect to="/login" />;
    }
       
};

export default AuthWrapper;



