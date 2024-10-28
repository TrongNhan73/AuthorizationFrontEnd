import './Signup.scss';
import { Link } from 'react-router-dom';
function Signup(props) {
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
                            <input type='text' className='form-control' placeholder='Email address' id='Email' />
                        </div>
                        <div className='form-group'>
                            <label for='PhoneNumer' className='form-label'>Phone Numer:</label>
                            <input type='text' className='form-control' placeholder='Phone number' id='PhoneNumer' />
                        </div>
                        <div className='form-group'>
                            <label for='Username' className='form-label'>User name:</label>
                            <input type='text' className='form-control' placeholder='User name' id='Username' />
                        </div>
                        <div className='form-group'>
                            <label for='Password' className='form-label'>Password:</label>
                            <input type='text' className='form-control' placeholder='Password' id='Password' />
                        </div>
                        <div className='form-group'>
                            <label for='PasswordComfirm' className='form-label'>Comfirm Password:</label>
                            <input type='text' className='form-control' placeholder='Comfirm Password' id='PasswordComfirm' />
                        </div>
                        <button className='btn btn-primary'>Signup</button>
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