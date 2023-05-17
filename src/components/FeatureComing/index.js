import classNames from 'classnames/bind';
import styles from './FeatureComing.module.scss';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { turnFeature } from '../../redux/actions/turnFeature';

const cx = classNames.bind(styles);

function FeatureComing() {
    const fade = useSelector((state) => state.turnFeature);
    const dispath = useDispatch();

    fade && setTimeout(() => dispath(turnFeature(false)), 1000);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner', fade && 'fade')}>Feature coming soon</div>
        </div>
    );
}

export default FeatureComing;
