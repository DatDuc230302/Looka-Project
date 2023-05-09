import classNames from 'classnames/bind';
import styles from './ModalLogin.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

function ModalLogin() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('overlay')}></div>
            <div className={cx('inner')}>
                <div className={cx('heading')}></div>
                <div className={cx('body')}></div>
                <div class="modal__outside">
                    Don't have an account yet?
                    <a href="#signupModal" data-plugin="MODAL_TRIGGER">
                        Sign up
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ModalLogin;
