import classNames from 'classnames/bind';
import styles from './PageError.module.scss';

const cx = classNames.bind(styles);

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
                </div>
            </div>
        </div>
    );
}

export default PageError;
