import classNames from 'classnames/bind';
import styles from './Editor.module.scss';
import SideBarEditor from '../../components/SideBarEditor';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PageError from '../../components/PageError';
import axios from 'axios';
import { useMediaQuery } from 'react-responsive';
import { saveAs } from 'file-saver';

const cx = classNames.bind(styles);

function Editor() {
    const [api, setApi] = useState([]);
    const [id, setId] = useState(-1);

    const pc = useMediaQuery({ minWidth: 992 });
    const tablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
    const mobile = useMediaQuery({ maxWidth: 767 });

    const params = useParams();
    const url = params.key;
    const navigate = useNavigate();
    console.log(url);

    const apiLogo = useSelector((state) => state.apiLogo);
    const pick3 = useSelector((state) => state.pick3);
    const apiPick1 = useSelector((state) => state.apiPick1);

    // get APi
    // useEffect(() => {
    //     getApi();
    // }, []);

    // const getApi = async () => {
    //     let result = await axios.get('https://server-looka.onrender.com/looka/getApi');
    //     const data = await result.data;
    //     setApi(data);
    // };

    const linkIMg = `data:image/png;base64,${apiLogo[url]}`;

    const handleDownloadClick = () => {
        const imageUrl = linkIMg; // Đường dẫn đến hình ảnh cần tải về
        const fileName = 'LogoFree.jpg'; // Tên tệp tin khi tải về
        saveAs(imageUrl, fileName);
    };
    return (
        <div className={cx('wrapper')}>
            {url && pick3.length > 0 ? (
                <div className={cx('inner', tablet && 'tablet', mobile && 'mobile')}>
                    <SideBarEditor setId={setId} />
                    <div className={cx('body')}>
                        <div className={cx('preview-box')}>
                            <img
                                className={cx('previewBox-img')}
                                src={`data:image/png;base64,` + apiLogo[url]}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className={cx('start')}>
                        <div onClick={handleDownloadClick} className={cx('start-btn')}>
                            Download
                        </div>
                    </div>
                </div>
            ) : (
                <PageError />
            )}
        </div>
    );
}

export default Editor;
