import { useState } from 'react';
import Button from '../Button';
import classNames from 'classnames/bind';
import styles from './ModalLogin.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function ModalLogin() {
    return (
        <div className="wrapper">
            <div className="overlay fixed top-0 bottom-0 right-0 left-0 bg-black/70 z-[200]"></div>
            <div className="login absolute top-1/2 left-1/2 bg-white p-[4rem] z-[300] -translate-x-1/2 -translate-y-1/2 rounded-[0.8rem] max-w-[37.5rem]">
                <div className="inner-login">
                    <div className="heading">
                        <div className="title font-bold text-[2.4rem] leading-[3rem] mb-[2rem] text-center">
                            Welcome back!
                        </div>
                        <div className="items"></div>
                    </div>
                    <div className={cx('or')}>or</div>
                    <div className="inputs">
                        <input placeholder="Email" />
                        <input placeholder="Password" />
                    </div>
                    <Button primary small className={"mt-[0.8rem] w-full text-[1.4rem]"}>Sign In</Button>
                    <div className="forgot-pass text-center text-[1.2rem] cursor-pointer text-[var(--primary-color)] my-[0.4rem]">Forgot password?</div>
                    <div className="text-white text-[1.4rem] text-center absolute left-0 -bottom-[3rem] w-full">
                        Don't have an account yet? <span className="cursor-pointer">Sign up</span>
                    </div>
                    <div className='close absolute right-[2rem] top-[1.2rem] text-[2rem]'>
                        <span className='text-black text-[1.4rem] font-bold'><FontAwesomeIcon icon={faXmark} /></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalLogin;
