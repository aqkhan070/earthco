import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'


const LoginPage = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("hello@example.com");
    const [password, setPassword] = useState('Password');
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmitSignUp = (e) => {
        e.preventDefault();
        // navigate('/Dashboard');
        window.location.assign('/Dashboard');
    }
    return (
        <>
            <div className="page-wraper">
                <div className="browse-job login-style3">
                    <div className="row bg-white" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>

                        {/* <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12 vh-100 bg-white" style={{ display: 'flex', alignItems: 'center' }}> */}
                        {/* <div id="mCSB_1" className="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside" style={{ maxHeight: '653px' }} tabIndex="0"> */}
                        {/* <div id="mCSB_1_container" className="mCSB_container" style={{ position: 'relative', top: '0', left: '0' }} dir="ltr"> */}
                        <div className="login-form style-2" style={{ maxWidth: '500px' }}>


                            <div className="card-body">
                                <div className="logo-header">
                                    <a href="#" className="logo"><img src='/earthco/assets/images/background/earthco_logo.png' alt="" className="width-230 light-logo" style={{ width: '35%',marginLeft:"30%" }} /></a>
                                    <a href="#" className="logo"><img src='/earthco/assets/images/background/earthco_logo.png' alt="" className="width-230 dark-logo" style={{ width: '35%' ,marginLeft:"30%"}} /></a>
                                </div>

                                <nav>
                                    <div className="nav nav-tabs border-bottom-0" id="nav-tab" role="tablist">

                                        <div className="tab-content w-100" id="nav-tabContent">
                                            <div className="tab-pane fade show active" id="nav-personal" role="tabpanel" aria-labelledby="nav-personal-tab">
                                                <form onSubmit={handleSubmitSignUp} action="" className=" dz-form pb-3">
                                                    <h3 className="form-title m-t0">Personal Information</h3>
                                                    <div className="dz-separator-outer m-b5">
                                                        <div className="dz-separator bg-primary style-liner"></div>
                                                    </div>
                                                    <p>Enter your e-mail address and your password. </p>
                                                    <div className="form-group mb-3">
                                                        <input type="email" onChange={handleChangeEmail} className="form-control" value={email} required />
                                                    </div>
                                                    <div className="form-group mb-3">
                                                        <input type="password" onChange={handleChangePassword} className="form-control" value={password} required />
                                                    </div>
                                                    <div className="form-group text-left mb-3 forget-main">
                                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                            <span className="form-check d-inline-block">
                                                                <input type="checkbox" className="form-check-input" id="check1" name="example1" />
                                                                <label className="form-check-label" htmlhtmlFor="check1">Remember me</label>
                                                            </span>
                                                            <button style={{ padding: '0px' }} className="nav-link btn tp-btn-light btn-primary forget-tab " id="nav-forget-tab" data-bs-toggle="tab" data-bs-target="#nav-forget" type="button" role="tab" aria-controls="nav-forget" aria-selected="false">Forget Password ?</button>
                                                        </div>
                                                    </div>
                                                    <div className="text-center bottom">
                                                    <NavLink to='/Dashboard' ><button className="btn btn-primary button-md btn-block" type='button'>Sign Me In</button>
                                                    </NavLink>
                                                    </div>
                                                    {/* <div className="dz-social ">
                                                                        <h5 className="form-title fs-20">Sign In With</h5>
                                                                        <ul className="dz-social-icon dz-border dz-social-icon-lg text-white">
                                                                            <li><a target="_blank" href="https://www.facebook.com/" className="fab fa-facebook-f btn-facebook"></a></li>
                                                                            <li><a target="_blank" href="https://www.google.com/" className="fab fa-google-plus-g btn-google-plus"></a></li>
                                                                            <li><a target="_blank" href="https://www.linkedin.com/" className="fab fa-linkedin-in btn-linkedin"></a></li>
                                                                            <li><a target="_blank" href="https://twitter.com/" className="fab fa-twitter btn-twitter"></a></li>
                                                                        </ul>
                                                                    </div> */}
                                                </form>
                                                <button style={{ width: "100%" }} className="text-center nav-link btn tp-btn-light btn-primary forget-tab " id="nav-sign-tab" data-bs-toggle="tab" data-bs-target="#nav-sign" type="button" role="tab" aria-controls="nav-sign" aria-selected="false">Create an account</button>
                                                {/* <div className="text-center bottom">
                                                                    <button className="btn btn-primary button-md btn-block" id="nav-sign-tab" data-bs-toggle="tab" data-bs-target="#nav-sign" type="button" role="tab" aria-controls="nav-sign" aria-selected="false">Create an account</button>

                                                                </div> */}
                                            </div>
                                            <div className="tab-pane fade" id="nav-forget" role="tabpanel" aria-labelledby="nav-forget-tab">
                                                <form className="dz-form">
                                                    <h3 className="form-title m-t0">Forget Password ?</h3>
                                                    <div className="dz-separator-outer m-b5">
                                                        <div className="dz-separator bg-primary style-liner"></div>
                                                    </div>
                                                    <p>Enter your e-mail address below to reset your password. </p>
                                                    <div className="form-group mb-4">
                                                        <input name="dzName" required="" className="form-control" placeholder="Email Address" type="text" />
                                                    </div>
                                                    <div className="form-group clearfix text-left">
                                                        <button className=" active btn btn-primary" id="nav-personal-tab" data-bs-toggle="tab" data-bs-target="#nav-personal" type="button" role="tab" aria-controls="nav-personal" aria-selected="true">Back</button>
                                                        <button className="btn btn-primary float-end">Submit</button>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="tab-pane fade" id="nav-sign" role="tabpanel" aria-labelledby="nav-sign-tab">
                                                <form className="dz-form py-2">
                                                    <h3 className="form-title">Sign Up</h3>
                                                    <div className="dz-separator-outer m-b5">
                                                        <div className="dz-separator bg-primary style-liner"></div>
                                                    </div>
                                                    <p>Enter your personal details below: </p>
                                                    <div className="form-group mt-3">
                                                        <input name="dzName" required="" className="form-control" placeholder="Full Name" type="text" />
                                                    </div>
                                                    <div className="form-group mt-3">
                                                        <input name="dzName" required="" className="form-control" placeholder="User Name" type="text" />
                                                    </div>
                                                    <div className="form-group mt-3">
                                                        <input name="dzName" required="" className="form-control" placeholder="Email Address" type="text" />
                                                    </div>

                                                    <div className="form-group mt-3">
                                                        <input name="dzName" required="" className="form-control" placeholder="Password" type="password" />
                                                    </div>
                                                    <div className="form-group mt-3 mb-3">
                                                        <input name="dzName" required="" className="form-control" placeholder="Re-type Your Password" type="password" />
                                                    </div>
                                                    <div className="mb-3">
                                                        <span className="form-check float-start me-2 ">
                                                            <input type="checkbox" className="form-check-input" id="check2" name="example1" />
                                                            <label className="form-check-label d-unset" htmlhtmlFor="check2">I agree to the</label>
                                                        </span>
                                                        <label ><a href="#">Terms of Service </a>&amp; <a href="#">Privacy Policy</a></label>
                                                    </div>
                                                    <div className="form-group clearfix text-left">
                                                        <button className="btn btn-primary outline gray" data-bs-toggle="tab" data-bs-target="#nav-personal" type="button" role="tab" aria-controls="nav-personal" aria-selected="true">Back</button>
                                                        <button className="btn btn-primary float-end">Submit</button>
                                                    </div>
                                                </form>

                                            </div>
                                        </div>

                                    </div>
                                </nav>
                            </div>
                            {/* <div className="card-footer">
                                                <div className=" bottom-footer clearfix m-t10 m-b20 row text-center">
                                                    <div className="col-lg-12 text-center">
                                                        <span> © Copyright by <span className="heart"></span>
                                                            <a href="">DexignZone </a> All rights reserved.</span>
                                                    </div>
                                                </div>
                                            </div> */}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage
