import './Login.scss';
function Login(props) {
    return (
        <div className="login-container d-flex align-items-center p-2">
            <div className="container d-block">
                <div className="row">
                    <div className="content-left col-sm-7" >
                        <div className='brand text-center fs-1'>Authenticaton</div>
                    </div>
                    <div className="content-right col-sm-5 d-flex flex-column gap-3 py-5 col-12 p-2  ">
                        <input type='text' className='form-control' placeholder='Email address or phone number' />
                        <input type='password' className='form-control' placeholder='Password' />
                        <button className='btn btn-primary'>Login</button>
                        <span className='text-center'><a href='#' className='forgotpassword'>Forgot your password?</a></span>
                        <hr />
                        <div className='text-center'>
                            <button className='btn btn-success'>Create new account</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}
export default Login;