import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './User.scss';
import { getGroup } from '../../service/groupService';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { isValidEmail, isValidPhone, isValidPassword } from '../../utils/Function.utils';
import { createUser, updateUser } from '../../service/userService';
import _ from 'lodash';




const ModalUsers = (props) => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [userName, setUserName] = useState();
    const [gender, setGender] = useState('other');
    const [group, setGroup] = useState('');
    const [password, setPassword] = useState('');
    const [passwordComfirm, setPasswordComfirm] = useState('');
    const [groups, setGroups] = useState([]);
    const [isShowPass, setIsShowPass] = useState(false);
    const [isValidInput, setIsValidInput] = useState({
        isValidEmail: true,
        isValidPhone: true,
        isValidPassWord: true,
    });
    useEffect(() => {
        fetchGroup();
    }, [])
    useEffect(() => {
        if (props.show) {
            if (!isCreateModal()) {
                setEmail(props.data.email || '');
                setPhone(props.data.phone || '');
                setUserName(props.data.username);
                setAddress(props.data.address || '');
                setGender(props.data.sex || '');
                setGroup(props.data.groupId || '');
            } else {
                setEmail('');
                setPhone('');
                setUserName('');
                setAddress('');
                setGender('');
                setGroup('');
            }
            setIsValidInput(
                {
                    isValidEmail: true,
                    isValidPhone: true,
                    isValidPassWord: true,
                }
            )
        } else {
            setEmail('');
            setPhone('');
            setUserName('');
            setAddress('');
            setGender('');
            setGroup('');
            setPassword('');
            setPasswordComfirm('');
        }
    }, [props.show]);

    const isCreateModal = () => {
        if (props && _.isEmpty(props.data)) {
            return true;
        } else {
            return false;
        }
    }

    const fetchGroup = async () => {
        let res = await getGroup();
        if (res && res.DT) {
            setGroups(res.DT);
            // if (!group) {
            //     setGroup(res.data.DT[0].id);
            // }
        } else {
            toast.error('Error when get groups');
        }
    }

    const checkValidInput = () => {

        if (!userName) {
            toast.error("User name is required!");
            return false;
        }
        if (isCreateModal()) {
            if (!password) {
                toast.error("Password is required!");
                setIsValidInput({ ...isValidInput, isValidPassword: false });
                return false;
            }
            if (!passwordComfirm) {
                toast.error("Password comfirm is required!");
                return false;
            } else {
                if (password !== passwordComfirm) {
                    toast.error("Password comfir and password is not same!");
                    setIsValidInput({ ...isValidInput, isValidPasswordComfirm: false });
                    return false;
                }
            }
            if (!isValidInput.isValidEmail) {
                toast.error("The email is invalid!");
                return false;
            }
            if (!isValidInput.isValidPhone) {
                toast.error("The phone num is invalid!");
                return false;
            }
            if (!isValidInput.isValidPassWord) {
                toast.error("The password must have more 3 letter!");
                return false;
            }
            if (!email) {
                setIsValidInput({ ...isValidInput, isValidEmail: false });
                toast.error("Email is required!");
                return false;
            }
            if (!isValidEmail(email)) {
                toast.error("The email is invalid!");
                return false;
            }
            if (!phone) {
                toast.error("Phone number is required!");
                setIsValidInput({ ...isValidInput, isValidPhone: false });
                return false;
            }
        }

        return true;
    }

    const handleCreate = async () => {
        // props.handleClose();
        if (checkValidInput()) {
            let res = await createUser({
                email,
                phone,
                address,
                userName,
                gender,
                group,
                password
            });
            if (+res.EC === 0) {
                toast.success('Create successfull!');
                props.handleClose();
            } else {
                toast.error(res.EM);
            }

        }
    }
    const handleUpdateUser = async () => {
        if (checkValidInput()) {
            let res = await updateUser({
                address,
                userName,
                gender,
                group,
                id: props.data.id
            });
            if (+res.EC === 0) {
                toast.success(res.EM);
                props.handleClose();
                window.location.reload();
            } else {
                toast.error(res.EM);
            }

        }
    }
    return (
        <Modal show={props.show} onHide={props.handleClose} centered size='lg'>
            <Modal.Header closeButton>
                <Modal.Title>{isCreateModal ? 'Create ' : 'Update ' + ' user'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='container row modal-user '>
                    <div className='form-group col-sm-6 '>
                        <label htmlFor='email' className='form-label'>Email: (<span className='red'>*</span>)  </label>
                        <input
                            id='email'
                            className={'form-control ' + (!email || !isCreateModal() ? '' : isValidInput.isValidEmail ? 'is-valid' : 'is-invalid')}
                            value={email}
                            disabled={!isCreateModal()}
                            onChange={(even) => {
                                setEmail(even.target.value);
                                setIsValidInput({ ...isValidInput, isValidEmail: isValidEmail(even.target.value) });
                            }} />
                    </div>
                    <div className='form-group col-sm-6'>
                        <label htmlFor='phone' className='form-label'>Phone: (<span className='red'>*</span>) </label>
                        <input
                            id='phone'
                            className={'form-control ' + (!phone || !isCreateModal() ? '' : isValidInput.isValidPhone ? 'is-valid' : 'is-invalid')}
                            value={phone}
                            disabled={!isCreateModal()}
                            onChange={(even) => {
                                setPhone(even.target.value);
                                setIsValidInput({ ...isValidInput, isValidPhone: isValidPhone(even.target.value) });
                            }}
                        />
                    </div>
                    <div className='form-group col-sm-6'>
                        <label htmlFor='username' className='form-label'>User name: (<span className='red'>*</span>)</label>
                        <input id='username'
                            className='form-control '
                            value={userName}
                            onChange={(even) => setUserName(even.target.value)} />
                    </div>
                    <div className='form-group col-sm-6'>
                        <label htmlFor='address' className='form-label'>Address: </label>
                        <input id='address'
                            className='form-control '
                            value={address}
                            onChange={(even) => setAddress(even.target.value)}
                        />
                    </div>
                    <div className='form-group col-sm-6'>
                        <label htmlFor='sex' className='form-label'>Gender: (<span className='red'>*</span>)</label>
                        <select className='form-select' value={gender} onChange={(even) => { setGender(even.target.value) }}>
                            <option value={''} >Other</option>
                            <option value={'male'} >Male</option>
                            <option value={'female'} >Female</option>
                        </select>
                    </div>
                    <div className='form-group col-sm-6'>
                        <label htmlFor='group' className='form-label'>Group: (<span className='red'>*</span>)</label>
                        <select className='form-select' value={group} onChange={(even) => setGroup(even.target.value)}>
                            <option value={''} >Undefinde</option>
                            {groups.length > 0 && groups.map((item, index) => (item.id == group) ?
                                <option key={'opt' + index} value={item.id} selected>{item.name} </option>
                                : <option key={'opt' + index} value={item.id} >{item.name} </option>)}
                        </select>
                    </div>
                    <div className={isCreateModal() ? 'form-group col-sm-6' : 'd-none'}>
                        <label htmlFor='password' className='form-label'>Password: (<span className='red'>*</span>)</label>
                        <input
                            type={isShowPass ? 'text' : 'password'}
                            id='password'
                            className={'form-control ' + (!password ? '' : isValidInput.isValidPassWord ? 'is-valid' : 'is-invalid')}
                            value={password}
                            onChange={(even) => {
                                setPassword(even.target.value);
                                setIsValidInput({ ...isValidInput, isValidPassWord: isValidPassword(even.target.value) });
                            }} />
                        <div className='form-check'>
                            <input
                                type='checkbox'
                                id='cb-showpassword'
                                className='form-check-input'
                                onChange={(even) => setIsShowPass(even.target.checked)}
                            />
                            <label htmlFor='cb-showpassword' className='form-check-label'>Show password</label>
                        </div>
                    </div>
                    <div className={isCreateModal() ? 'form-group col-sm-6' : 'd-none'}>
                        <label htmlFor='password-comfirm' className='form-label'>Comfirm Password: (<span className='red'>*</span>)</label>
                        <input
                            type={isShowPass ? 'text' : 'password'}
                            id='password-comfirm'
                            className='form-control'
                            value={passwordComfirm}
                            onChange={(even) => setPasswordComfirm(even.target.value)} />
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => props.handleClose()}>
                    Close
                </Button>
                <Button variant="primary" onClick={async () => {
                    if (isCreateModal()) {
                        handleCreate();
                    } else {
                        handleUpdateUser()
                    }
                }}>
                    {isCreateModal() ? 'Create' : 'Update'}
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalUsers;