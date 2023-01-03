import { createContext } from 'react';


const Context = createContext({
    isLoggedIn: false,
    emailLogin: 0,
});
export default Context;