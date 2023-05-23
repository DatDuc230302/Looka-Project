import classNames from 'classnames/bind';
import styles from './LayoutLooka.module.scss';
import HeaderSecond from '../../components/HeaderSecond';
import FeatureComing from '../../components/FeatureComing';
import ModalStore from '../../components/ModalStore';
import { storeLike as setStoreLike } from '../../redux/actions/storeLike';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function LayoutLooka({ children }) {
    const storeLike = useSelector((state) => state.storeLike);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <HeaderSecond />
                <div className={cx('body')}>{children}</div>
            </div>
            <FeatureComing />
            <ModalStore />
        </div>
    );
}

export default LayoutLooka;
