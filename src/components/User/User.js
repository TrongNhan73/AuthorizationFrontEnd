import React, { useEffect, useState } from 'react'
import { getUserList } from '../../service/userService';
const User = () => {
    const [userList, setUserList] = useState([]);
    useEffect(() => {
        getList();
    }, []);
    const getList = async () => {
        try {
            let res = await getUserList();
            if (+res.data.EC === 0) {
                setUserList(res.data.DT)
            } else {
                console.log(res.data.EM);
            }
        } catch (e) {
            console.log(e.message);
        }
    }
    return (
        <div className='user-container container    '>
            <div className='user-container__header'>
                <div className='header__title'>
                    <h2>Table User</h2>
                </div>
                <div className='header__action'>
                    <div className='action__reload'>
                        <button className='btn btn-success'>Reload</button>
                    </div>
                    <div className='action__create' >
                        <button className='btn btn-primary'>Create</button>
                    </div>
                </div>
            </div>
            <div className='user-body'>
                <table className='table table-hover table-bordered'>
                    <thead>
                        <tr>
                            <th>NO</th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Sex</th>
                            <th>Group</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userList && userList.length > 0 ? <>
                                {
                                    userList.map((element, index) => <>
                                        <tr key={'row' + index}>
                                            <th>{index + 1}</th>
                                            <td>{element.username}</td>
                                            <td>{element.email}</td>
                                            <td>{element.phone}</td>
                                            <td>{element.sex}</td>
                                            <td>{Boolean(element.Group) ? element.Group.name : 'null'}</td>
                                        </tr>
                                    </>)
                                }
                            </> :
                                <>
                                    <h3>UserList is empty</h3>
                                </>
                        }


                    </tbody>

                </table>

            </div>
            <div className='user-footer'>
                <nav>
                    <ul className='pagination'>
                        <li className='page-item'><a className='page-link' href=''>Previous</a></li>
                        <li className='page-item'><a className='page-link' href=''>1</a></li>
                        <li className='page-item'><a className='page-link' href=''>2</a></li>
                        <li className='page-item'><a className='page-link' href=''>3</a></li>
                        <li className='page-item'><a className='page-link' href=''>Next </a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
export default User;
