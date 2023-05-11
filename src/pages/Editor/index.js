import classNames from 'classnames/bind';
import styles from './Editor.module.scss';

const cx = classNames.bind(styles);

function Editor() {
    return <div className={cx('wrapper')}>HI</div>;
}

export default Editor;
