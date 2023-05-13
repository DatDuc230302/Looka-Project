import classNames from 'classnames/bind';
import styles from './Editor.module.scss';
import SideBarEditor from '../../components/SideBarEditor';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Editor() {
    const [id, setId] = useState(-1);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <SideBarEditor setId={setId} />
                <div className={cx('body')}>Xin chao</div>
            </div>
        </div>
    );
}

export default Editor;
