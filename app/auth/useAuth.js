import { useContext } from "react";
import jwtDecode from 'jwt-decode';

import AuthContext from './context';
import authStorage from './storage';

// exporting a single function
export default useAuth = () => {
    const { user, setUser } = useContext(AuthContext);

    const logIn = (authToken) => {
        const user = jwtDecode(authToken);
        setUser(user);
        authStorage.storeToken(authToken);
    };

    const logOut = () => {
        setUser(null);
        // we dont need to await the call bcos we dont need to wait for promise to be done or finish
        authStorage.removeToken();
    };
    // returns functions in an object
    return { user, logIn, logOut };
};