import className from 'classnames/bind';
import styles from './Explore.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const cx = className.bind(styles);

function Explore() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('header')}>
                    <div className={cx('header-logo')}>
                        <img
                            className={cx('logo')}
                            src="https://s3.amazonaws.com/cdn.looka.com/images/logos/looka_logo_black.svg"
                            alt=""
                        />
                    </div>
                    <div className={cx('header-menu')}>
                        <FontAwesomeIcon className={cx('icon-menu')} icon={faBars} />
                    </div>
                    <div className={cx('progress')}></div>
                </div>
                <div className={cx('body')}></div>
            </div>
        </div>
    );
}

export default Explore;
