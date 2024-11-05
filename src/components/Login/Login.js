import './Login.scss';
import { isRouteErrorResponse, Link } from 'react-router-dom';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { isValidEmail, isValidPhone, isValidPassword } from '../../utils';
import { login } from '../../service/userService';




function Login(props) {
    const [ephone, setEPhoen] = useState('');
    const [password, setPassword] = useState('');
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [objValid, setObjValid] = useState({
        isValidEPhone: true,
        isValidPassword: true
    });

    const setValidClass = (id) => {
        switch (id) {
            case 1: {
                return objValid.isValidEPhone ? ephone ? "form-control is-valid" : "form-control" : "form-control is-invalid";
                break;
            }

            case 2: {
                return objValid.isValidPassword ? password ? "form-control is-valid" : "form-control" : "form-control is-invalid";
                break;

            }
            default: return;
        }
    }

    const validate = () => {
        if (ephone == '') {
            toast.error('Please enter email or phone number!');
            setObjValid({ ...objValid, isValidEPhone: false });
            return false;
        }
        if (password == '') {
            toast.error('Please enter password!');
            setObjValid({ ...objValid, isValidPassword: false });

            return false;
        }
        if (!objValid.isValidEPhone) {
            toast.error('Email or phone number is invalid!')
            return false;
        }
        if (!objValid.isValidPassword) {
            toast.error('Password must have more 4 letters!')
            return false;
        }
        return true;
    }

    const handleLogin = async () => {
        if (validate()) {
            toast('success!');
            let res = await login({ ephone, password });
            alert(JSON.stringify(res.data));
        }
    }

    return (
        <div className="login-container d-flex align-items-center p-2">
            <div className="container d-block">
                <div className="row">
                    <div className="content-left col-lg-7" >
                        <div className='brand text-center fs-1'>Authenticaton</div>
                    </div>
                    <div className="content-right col-lg-5 d-flex flex-column gap-3 py-5 col-12 p-2  ">
                        <input type='text' className={setValidClass(1)} placeholder='Email address or phone number'
                            value={ephone}
                            onChange={(e) => {
                                setObjValid({ ...objValid, isValidEPhone: isValidEmail(e.target.value) || isValidPhone(e.target.value) })
                                setEPhoen(e.target.value)
                            }}
                        />
                        <input type={isShowPassword ? 'text' : 'password'} className={setValidClass(2)} placeholder='Password'
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                setObjValid({ ...objValid, 'isValidPassword': isValidPassword(e.target.value) });
                            }}
                        />
                        <form className='form-check'>
                            <input type="checkbox" name="" id="showPass" className='form-check-input' onClick={(e) => setIsShowPassword(e.target.checked)} />
                            <label htmlFor="showPass" className='form-label' >Show password</label>
                        </form>
                        <button className='btn btn-primary' onClick={handleLogin}>Login</button>
                        <span className='text-center'><a href='#' className='forgotpassword'>Forgot your password?</a></span>
                        <hr />
                        <div className='text-center'>
                            <Link to={'/signup'} className='btn btn-success'>Create new account</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}
export default Login;