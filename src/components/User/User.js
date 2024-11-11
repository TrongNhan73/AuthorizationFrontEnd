import React, { useEffect, useState } from 'react'
import { getUserList, deleteUser, login } from '../../service/userService';
import ReactPaginate from 'react-paginate';
import { toast } from 'react-toastify';
import ModalDelete from './ModalDelete';
import ModalUsers from './ModalUser';


const User = () => {
    const [userList, setUserList] = useState([]);
    const [currPage, setCurrPage] = useState(1);
    const [currLimit, setCurrLimit] = useState(2);
    const [totalPage, setTotalPage] = useState(0);
    const [isShowModalDelete, setIsShowModalDelete] = useState(false);
    const [dataModal, setDataModal] = useState({});
    useEffect(() => {
        getList();
    }, [currPage]);
    const getList = async () => {
        try {
            let res = await getUserList(currPage, currLimit);
            if (res && res.data && +res.data.EC === 0) {
                setUserList(res.data.DT.users);
                setTotalPage(res.data.DT.totalPage);
            } else {
                console.log(res.data.EM);
            }
        } catch (e) {
            console.log(e.message);
        }
    }


    const handlePageClick = async (even) => {
        setCurrPage(even.selected + 1);

    }

    const handleDeleteUser = async (user) => {
        let res = await deleteUser(user.id);
        if (res && res.data && +res.data.EC === 0) {
            toast.success('Delete successful!');
            await getList();
        } else {
            toast.error('Delete failed')
        }
        console.log(res);
    }

    const openModalDelete = (user) => {
        setDataModal(user);
        setIsShowModalDelete(true);
    }

    const closeModalDelete = () => {
        setDataModal({});
        setIsShowModalDelete(false);
    }

    return (
        <div className='container'>
            <div className='user-container container'>
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
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userList && userList.length > 0 ? <>
                                    {
                                        userList.map((element, index) =>
                                            <tr key={'row' + index}>
                                                <th>{index + 1}</th>
                                                <td>{element.username}</td>
                                                <td>{element.email}</td>
                                                <td>{element.phone}</td>
                                                <td>{element.sex}</td>
                                                <td>{Boolean(element.Group) ? element.Group.name : 'null'}</td>
                                                <td className=''>
                                                    <button className='btn btn-warning '>Edit</button>
                                                    <button className='btn btn-danger ms-1' onClick={() => openModalDelete(element)}>Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                </> :
                                    <>
                                        <tr><td><h3>UserList is empty</h3></td></tr>
                                    </>
                            }


                        </tbody>

                    </table>

                </div>
                <div className='user-footer'>
                    {totalPage > 0 &&
                        <ReactPaginate
                            nextLabel='next'
                            previousLabel='previous'
                            breakLabel='...'
                            pageRangeDisplayed={2}
                            marginPagesDisplayed={1}
                            pageCount={totalPage}
                            onPageChange={handlePageClick}
                            className='pagination'
                            breakClassName={'page-item'}
                            breakLinkClassName={'page-link'}
                            pageClassName={'page-item'}
                            pageLinkClassName={'page-link'}
                            previousClassName={'page-item'}
                            previousLinkClassName={'page-link'}
                            nextClassName={'page-item'}
                            nextLinkClassName={'page-link'}
                            activeClassName={'active'}
                        />}

                </div>
            </div>
            <ModalDelete
                show={isShowModalDelete}
                handleClose={closeModalDelete}
                handleComfirm={handleDeleteUser}
                dataModal={dataModal} />
            <ModalUsers title='Create' />//title is 'Create' or 'Update'

        </div>
    )
}
export default User;
