import React, { useState } from 'react';


const userContext = React.createContext();

const UserProvider = ({ children }) => {
    const [dataUser, setsDataUser] = useState({ 'name': 'hihi' });
    return <userContext.Provider value={{ dataUser }}>
        {children}
    </userContext.Provider>
}
export { userContext, UserProvider };