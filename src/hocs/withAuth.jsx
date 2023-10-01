import React from 'react';
import useAuth from './useAuth';
import useContext from './useContext';

const withAuth = (Component) => {

    return (props) => {
        const auth = useAuth();
        const store = useContext();
        return <Component {...props} auth={auth} store={store} />;
    }
}

export default withAuth;
