import classNames from 'classnames/bind';
import styles from './PageError.module.scss';
import React from 'react';
// import { listAll } from '../../firebase';

const cx = classNames.bind(styles);

// const on = () => {
//     listAll('accessories/');
// };

function PageError() {
    return (
        <div>
            <div className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <div className={cx('notfound-404')}>
                        <h1>
                            4<span>0</span>4
                        </h1>
                    </div>
                    <p>
                        The page you are looking for might have been removed had its name changed or is temporarily
                        unavailable.
                    </p>
                    <a href="/" className={cx('navigate-home')}>
                        Home Page
                    </a>
                    {/* <button onClick={() => on()}>Click Me</button> */}
                </div>
            </div>
        </div>
    );
}

export default PageError;
