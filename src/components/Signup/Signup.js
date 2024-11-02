import { useEffect, useState } from 'react';
import './Signup.scss';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from "axios";




function Signup(props) {
    const [email, setEmail] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordComfirm, setPasswordComfirm] = useState('');



    const isValidInput = () => {
        if (!email) {
            toast.error("Email is required!");
            return false;
        }
        if (!phoneNum) {
            toast.error("Phone number is required!");
            return false;
        }
        if (!userName) {
            toast.error("User name is required!");
            return false;
        }
        if (!password) {
            toast.error("Password is required!");
            return false;
        }
        if (!passwordComfirm) {
            toast.error("Password comfirm is required!");
            return false;
        } else {
            if (password !== passwordComfirm) {
                toast.error("Password comfir and password is not same!");
                return false;
            }
        }
        return true;
    }


    const handleSignUp = () => {
        let userData = { email, userName, phoneNum, password };
        console.log(userData);
        if (isValidInput()) {
            toast.success("Success");
        }
    }
    useEffect(() => {
        // axios.get('http://localhost:8081/api/testapi')
        //     .then(data => console.log(data))
    }, []);

    return (
        <div className="login-container d-flex align-items-center p-2">
            <div className="container d-block">
                <div className="row">
                    <div className="content-left col-lg-7" >
                        <div className='brand text-center fs-1'>Authenticaton</div>
                    </div>
                    <div className="content-right col-lg-5 d-flex flex-column gap-3 py-5 col-12 p-2  ">
                        <div className='form-group'>
                            <label for='Email' className='form-label'>Email:</label>
                            <input type='email' className='form-control' placeholder='Email address' id='Email'
                                value={email} onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='form-group'>
                            <label for='PhoneNumer' className='form-label'>Phone Numer:</label>
                            <input type='text' className='form-control' placeholder='Phone number' id='PhoneNumer'
                                value={phoneNum} onChange={(e) => setPhoneNum(e.target.value)}
                            />
                        </div>
                        <div className='form-group'>
                            <label for='Username' className='form-label'>User name:</label>
                            <input type='text' className='form-control' placeholder='User name' id='Username'
                                value={userName} onChange={(e) => setUserName(e.target.value)}
                            />
                        </div>
                        <div className='form-group'>
                            <label for='Password' className='form-label'>Password:</label>
                            <input type='password' className='form-control' placeholder='Password' id='Password'
                                value={password} onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className='form-group'>
                            <label for='PasswordComfirm' className='form-label'>Comfirm Password:</label>
                            <input type='password' className='form-control' placeholder='Comfirm Password' id='PasswordComfirm'
                                value={passwordComfirm} onChange={(e) => setPasswordComfirm(e.target.value)}
                            />
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