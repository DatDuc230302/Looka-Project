import classNames from 'classnames/bind';
import styles from './Editor.module.scss';
import SideBarEditor from '../../components/SideBarEditor';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PageError from '../../components/PageError';

const cx = classNames.bind(styles);

function Editor() {
    const [id, setId] = useState(-1);

    const params = useParams();
    const url = params.key;
    const navigate = useNavigate();

    const pick3 = useSelector((state) => state.pick3);

    return (
        <div className={cx('wrapper')}>
            {url && pick3.length > 0 ? (
                <div className={cx('inner')}>
                    <SideBarEditor setId={setId} />
                    <div className={cx('body')}>Xin chao</div>
                </div>
            ) : (
                <PageError />
            )}
        </div>
    );
}

export default Editor;
