import React, { useEffect, useState } from 'react';
import { getAccount } from '../service/userService';



const userContext = React.createContext();

const UserProvider = ({ children }) => {
    const [dataUser, setsDataUser] = useState({
        isLoading: true,
        isAuthenticated: false,
        token: '',
        account: {

        }
    });

    const fetchAccount = async () => {
        let res = await getAccount();
        if (res && +res.EC === 0) {
            let dataS = {
                isLoading: false,
                isAuthenticated: true,
                token: 'fake token',
                account: {
                    roles: res.DT.roles,
                    email: res.DT.email,
                    username: res.DT.username,
                }
            }
            setsDataUser(dataS)
        } else {
            setsDataUser((old) => { return { ...old, isLoading: false } })
        }
    }

    useEffect(() => {


        fetchAccount();

    }, []);

    return <userContext.Provider value={{ dataUser, setsDataUser }}>
        {children}
    </userContext.Provider>
}
export { userContext, UserProvider };