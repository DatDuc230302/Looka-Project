import classNames from 'classnames/bind';
import styles from './Editor.module.scss';
import SideBarEditor from '../../components/SideBarEditor';

const cx = classNames.bind(styles);

function Editor() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <SideBarEditor />
                <div className={cx('body')}>Xin chao</div>
            </div>
        </div>
    );
}

export default Editor;
