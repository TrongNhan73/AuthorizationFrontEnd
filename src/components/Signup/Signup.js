import { useEffect, useState } from 'react';
import './Signup.scss';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { registerNewUser } from '../../service/userService';
import { isValidPhone, isValidPassword, isValidEmail } from '../../utils';




function Signup(props) {
    let navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordComfirm, setPasswordComfirm] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [objCheckInput, setObjCheckInput] = useState({
        isValidEmail: true,
        isValidPhoneNum: true,
        isValidUserName: true,
        isValidPassword: true,
        isValidPasswordComfirm: true,
    });


    const styleCheckValidInput = (name, value) => {
        let prop = "isValid" + name;
        if (!value) {
            return objCheckInput[prop] ? "form-control" : "form-control is-invalid"
        }
        return objCheckInput[prop] ? "form-control is-valid" : "form-control is-invalid";
    }



    const isValidInput = () => {
        if (!email) {
            setObjCheckInput({ ...objCheckInput, isValidEmail: false });
            toast.error("Email is required!");
            return false;
        }
        if (!isValidEmail(email)) {
            toast.error("The email is invalid!");
            return false;
        }
        if (!phoneNum) {
            toast.error("Phone number is required!");
            setObjCheckInput({ ...objCheckInput, isValidPhoneNum: false });
            return false;
        }
        if (!userName) {
            toast.error("User name is required!");
            setObjCheckInput({ ...objCheckInput, isValidUserName: false });
            return false;
        }
        if (!password) {
            toast.error("Password is required!");
            setObjCheckInput({ ...objCheckInput, isValidPassword: false });
            return false;
        }
        if (!passwordComfirm) {
            toast.error("Password comfirm is required!");
            setObjCheckInput({ ...objCheckInput, isValidPasswordComfirm: false });
            return false;
        } else {
            if (password !== passwordComfirm) {
                toast.error("Password comfir and password is not same!");
                setObjCheckInput({ ...objCheckInput, isValidPasswordComfirm: false });
                return false;
            }
        }
        if (!objCheckInput.isValidEmail) {
            toast.error("The email is invalid!");
            return false;
        }
        if (!objCheckInput.isValidPhoneNum) {
            toast.error("The phone num is invalid!");
            return false;
        }
        if (!objCheckInput.isValidPassword) {
            toast.error("The password must have more 3 letter!");
            return false;
        }
        return true;
    }


    const handleSignUp = async () => {
        let userData = { email, userName, phoneNum, password };
        if (isValidInput()) {
            let res = await registerNewUser(userData);
            if (+res.data.EC == 0) {
                toast.success("Success");
                navigate('/login');
            } else {
                toast.error(res.data.EM);
            }

        }
    }

    const handleShowPassword = (evt) => {
        if (evt.target.checked) {

            setShowPassword(true);
        } else {
            setShowPassword(false);
        }
        console.log(evt.target.checked);
    }


    useEffect(() => {
        let re = /\S+@\S+\.\S+/;
        if (!re.test(email)) {
            setObjCheckInput({ ...objCheckInput, isValidEmail: false });
        } else {
            setObjCheckInput({ ...objCheckInput, isValidEmail: true });
        }
    }, [email]);
    useEffect(() => {
        if (password !== passwordComfirm) {
            setObjCheckInput({ ...objCheckInput, isValidPasswordComfirm: false });
        } else {
            setObjCheckInput({ ...objCheckInput, isValidPasswordComfirm: true });
        }
    }, [passwordComfirm]);
    return (
        <div className="login-container d-flex align-items-center p-2">
            <div className="container d-block">
                <div className="row">
                    <div className="content-left col-lg-7" >
                        <div className='brand text-center fs-1'>Authenticaton</div>
                    </div>
                    <div className="content-right col-lg-5 d-flex flex-column gap-3 py-5 col-12 p-2  ">
                        <div className='form-group'>
                            <label htmlFor='Email' className='form-label'>Email:</label>
                            <input type='email' className={styleCheckValidInput('Email', email)} placeholder='Email address' id='Email'
                                value={email} onChange={(e) => {
                                    setEmail(e.target.value);
                                    if (isValidEmail(e.target.value)) {
                                        setObjCheckInput({ ...objCheckInput, isValidEmail: true })
                                    } else {
                                        setObjCheckInput({ ...objCheckInput, isValidEmail: false })

                                    }
                                }}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='PhoneNumer' className='form-label'>Phone Numer:</label>
                            <input type='text' className={styleCheckValidInput('PhoneNum', phoneNum)} placeholder='Phone number' id='PhoneNumer'
                                value={phoneNum} onChange={(e) => {
                                    setPhoneNum(e.target.value);
                                    if (isValidPhone(e.target.value)) {
                                        setObjCheckInput({ ...objCheckInput, isValidPhoneNum: true })
                                    } else {
                                        setObjCheckInput({ ...objCheckInput, isValidPhoneNum: false })

                                    }
                                }}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='Username' className='form-label'>User name:</label>
                            <input type='text' className={styleCheckValidInput('UserName', userName)} placeholder='User name' id='Username'
                                value={userName} onChange={(e) => setUserName(e.target.value)}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='Password' className='form-label'>Password:</label>
                            <input type={showPassword ? 'text' : 'password'} className={styleCheckValidInput('Password', password)} placeholder='Password' id='Password'
                                value={password} onChange={(e) => {
                                    setPassword(e.target.value);
                                    if (isValidPassword(e.target.value)) {
                                        setObjCheckInput({ ...objCheckInput, isValidPassword: true })

                                    } else {
                                        setObjCheckInput({ ...objCheckInput, isValidPassword: false })
                                    }
                                }}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='PasswordComfirm' className='form-label'>Comfirm Password:</label>
                            <input type={showPassword ? 'text' : 'password'} className={styleCheckValidInput('PasswordComfirm', passwordComfirm)} placeholder='Comfirm Password' id='PasswordComfirm'
                                value={passwordComfirm} onChange={(e) => setPasswordComfirm(e.target.value)}
                            />
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="cb-showPassword" onChange={(e) => handleShowPassword(e)} />
                            <label class="form-check-label" htmlFor="cb-showPassword">
                                Show password
                            </label>
                        </div>
                        <button className='btn btn-primary' onClick={handleSignUp}>Signup</button>
                        <hr />
                        <div className='text-center'>
                            <Link to={'/login'} className='btn btn-success'>Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}
export default Signup;