import Header from '../../components/Header';
import classNames from 'classnames/bind';
import styles from './LayoutLooka.module.scss';
import HeaderSecond from '../../components/HeaderSecond';

const cx = classNames.bind(styles);

function LayoutLooka({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <HeaderSecond />
                {children}
            </div>
        </div>
    );
}

export default LayoutLooka;
