import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

import classNames from 'classnames/bind';
import styles from './HeaderSecond.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { backOnboard } from '../../redux/actions/backOnboard';
import Button from '../Button';
import { DownArrowIcon, DownloadIcon } from '../../assets/Icons';

const cx = classNames.bind(styles);

function HeaderSecond() {
    const location = useLocation();
    const url = location.pathname;
    const navigate = useNavigate();
    const dispath = useDispatch();
    const [layout, setLayout] = useState(0);
    const [menu2, setMenu2] = useState(false);

    const pick3 = useSelector((state) => state.pick3);

    useEffect(() => {
        if (url === '/explore') {
            setLayout(1);
        } else {
            setLayout(2);
            setMenu2(true);
        }
    }, [url]);

    const handleBack = () => {
        if (url === '/explore') {
            if (pick3.length > 0) {
                navigate(`/onboarding/${pick3}`);
                dispath(backOnboard(true));
            } else {
                navigate('/');
            }
        } else {
            setMenu2(false);
            navigate('/explore');
        }
    };

    return (
        <div style={{ height: layout !== 1 && 60 }} className={cx('header')}>
            <>
                <FontAwesomeIcon onClick={() => handleBack()} className={cx('icon-back')} icon={faArrowLeft} />
                {!menu2 && (
                    <div className={cx('header-heart')}>
                        <svg
                            width="22px"
                            height="19px"
                            viewBox="0 0 22 19"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                            <defs></defs>
                            <g
                                id="001"
                                stroke="none"
                                strokeWidth="1"
                                fill="none"
                                fillRule="evenodd"
                                transform="translate(-29.000000, -26.000000)"
                            >
                                <g id="ic_heart" transform="translate(30.000000, 26.000000)" stroke="#000000">
                                    <path
                                        d="M19.7339015,6.42100677 C19.7339015,7.96935904 19.0811648,9.36844206 18.03628,10.3526072 L17.9629104,10.4234468 L10.7524464,17.593431 L10.6816067,17.6637647 C10.231016,18.1120784 9.50313859,18.1120784 9.05229484,17.6637647 L8.98145519,17.593431 L1.77099116,10.4234468 L1.69762153,10.3526072 C0.652736744,9.36844206 0,7.96935904 0,6.41847678 C0,3.43309167 2.42119792,1.01189375 5.40911301,1.01189375 C7.14898533,1.01189375 8.6986026,1.83591064 9.68706867,3.11330127 C9.77738922,3.22993369 9.95651233,3.22993369 10.0468329,3.11330127 C11.0355519,1.83591064 12.5851692,1.01189375 14.3273185,1.01189375 C17.3127036,1.01189375 19.7339015,3.43309167 19.7339015,6.42100677 Z"
                                        id="Page-1"
                                    ></path>
                                </g>
                            </g>
                        </svg>
                    </div>
                )}
                {!menu2 && (
                    <div className={cx('header-logo')}>
                        <img
                            className={cx('logo')}
                            src="https://s3.amazonaws.com/cdn.looka.com/images/logos/looka_logo_black.svg"
                            alt=""
                        />
                    </div>
                )}
                {menu2 && (
                    <div className="header-center flex items-center justify-between flex-1">
                        <div className="start flex items-center text-[1.4rem] cursor-pointer">
                            <div className="hover:bg-[#f5f6f8] px-[1rem] py-[0.8rem] rounded-[0.8rem]">Saved Logos</div>
                            <Tippy content="Duplicate" offset={[0, 5]}>
                                <div className="hover:bg-[#f5f6f8] px-[1rem] py-[0.8rem] rounded-[0.8rem]">
                                    Make a Copy
                                </div>
                            </Tippy>
                        </div>
                        <div className="center flex items-center gap-8 text-[1.4rem] cursor-pointer bg-[#0014280d] h-[4rem] px-[2rem] rounded-full">
                            <div className="text-[#5340ff]">Logo</div>
                            <div className="hover:text-[#5340ff]">
                                <Button rightIcon={<DownArrowIcon className={''} />}>Brand Kit</Button>
                            </div>
                        </div>
                        <div className="end flex items-center gap-8">
                            <div className="text-[1.4rem] cursor-pointer hover:bg-[#f5f6f8] px-[1rem] py-[0.8rem] rounded-[0.8rem]">
                                Share
                            </div>
                            <Button leftIcon={<DownloadIcon className={'mr-4'} />} primary medium>
                                Download
                            </Button>
                        </div>
                    </div>
                )}
                <div className={cx('header-menu')}>
                    <FontAwesomeIcon className={cx('icon-menu')} icon={faBars} />
                </div>
            </>
        </div>
    );
}

export default HeaderSecond;
