import React from 'react';
import { useForm } from "react-hook-form";
import googleLogo from '../img/google-g-logo.png';
import facebookLogo from '../img/facebook f logo.png'
import loginShow from '../img/login side img.png'
import './Login.css'

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <div className='login-body'>
            <div className="loging-main d-flex justify-content-center align-items-center">
                <div className="login-show">
                    <div className="row">
                        <div className="col-md-6 col-lg-6">
                            <div className="login-form p-4">
                                <h1 className='mb-4'>Login</h1>
                                <p>Doesn't have an account yet? <a href="#">Sign up</a></p>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                        <input className='form-control' type="email" {...register("email", { required: true })}  placeholder="you@Example.com" />
                                      <p className='text-danger'> {errors.email?.type === 'required' && "Email is required"}</p>
                                    </div>
                                    <div class="mb-3">
                                        <p className='m-0 d-flex justify-content-between'> <label for="exampleFormControlInput1" class="form-label">Password</label> <label><a className='ms-auto'>Forget Password</a></label></p>
                                        <input className='form-control' type="password" {...register("password", { required: true })} placeholder="Enter 6 character or more" />
                                      <p className='text-danger'> {errors.password?.type === 'required' && "Password is required"}</p>
                                    </div>                               
                                   
                                    <div class="mb-3">
                                      <p><input type="checkbox" /> Remember me</p>
                                    </div>
                                  

                                    <input className='btn btn-primary w-100 my-3' type="submit" value="Login"/>
                                </form>
                                <div className='social-login'>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <hr className='social-border' />
                                        <p className='mt-2'>Or Login with</p>
                                        <hr className='social-border' />
                                    </div>
                                    <div className="social-icon-login d-flex justify-content-center">
                                      <div className='logo-header'>
                                      <p><img className='' src={googleLogo} alt="google logo" /> Google </p>
                                      </div>
                                      <div className='logo-header login-facebook'>
                                      <p><img className='' src={facebookLogo} alt="google logo" /> Facebook </p>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6">
                            <div className="login-img">
                                <img className='w-100' src={loginShow} alt="login site image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;