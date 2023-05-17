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

import { useMediaQuery } from 'react-responsive';

const cx = classNames.bind(styles);

function HeaderSecond() {
    const pc = useMediaQuery({ minWidth: 992 });
    const tablet = useMediaQuery({ minWidth: 768, maxWidth: 900 });
    const mobile = useMediaQuery({ maxWidth: 767 });

    const location = useLocation();
    const url = location.pathname;
    const navigate = useNavigate();
    const dispath = useDispatch();
    const [layout, setLayout] = useState(0);
    // const [menu2, setMenu2] = useState(false);

    const pick3 = useSelector((state) => state.pick3);

    useEffect(() => {
        if (url === '/explore') {
            setLayout(1);
        } else {
            setLayout(2);
            // setMenu2(true);
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
            // setMenu2(false);
            navigate('/explore');
        }
    };

    return (
        <div style={{ height: layout !== 1 && 60 }} className={cx('header')}>
            {layout === 1 && (
                <>
                    <FontAwesomeIcon onClick={() => handleBack()} className={cx('icon-back')} icon={faArrowLeft} />
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
                    <div className={cx('header-logo')}>
                        <img
                            className={cx('logo')}
                            src="https://s3.amazonaws.com/cdn.looka.com/images/logos/looka_logo_black.svg"
                            alt=""
                        />
                    </div>
                </>
            )}
            {layout !== 1 && (
                <>
                    <div className={cx('nav')}>
                        <div onClick={() => handleBack()} className={cx('arrow-back')}>
                            <svg viewBox="0 0 16 16" width="16" height="16">
                                <g transform="matrix(1.6,0,0,1.6,0,0)">
                                    <path
                                        d="M7.25,9.5,2.9,5.354a.5.5,0,0,1,0-.708L7.25.5"
                                        fill="none"
                                        stroke="#000000"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                </g>
                            </svg>
                        </div>
                        <span className={cx('nav-save')}>{mobile ? 'Saved' : 'Saved Logos'}</span>

                        <Tippy content="Duplicate" offset={[0, 0]}>
                            <div className={cx('nav-copy')}>{mobile ? 'Copy' : 'Make a Copy'}</div>
                        </Tippy>

                        {pc && <div className={cx('nav-vertical')}></div>}
                        {!mobile && (
                            <div className={cx('nav-actions')}>
                                <div className={cx('navAction-left')}>
                                    <svg width="14.4px" height="14.4px" viewBox="0 0 14 14" version="1.1">
                                        <g
                                            id="Page-1"
                                            stroke="#DAE2F2"
                                            strokeWidth="1"
                                            fill="none"
                                            fillRule="evenodd"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <g
                                                id="Artboard-Copy-39"
                                                transform="translate(-815.000000, -25.000000)"
                                                stroke="#DAE2F2"
                                                strokeWidth="1.4"
                                            >
                                                <g id="Group-Copy-3" transform="translate(816.000000, 14.000000)">
                                                    <g id="undo" transform="translate(0.000000, 12.000000)">
                                                        <polyline id="Path" points="3 0.6 0.6 3 3 5.4"></polyline>
                                                        <path
                                                            d="M0.6,3 L7.2,3 C9.51959592,3 11.3999999,4.88040408 11.3999999,7.2 C11.3999999,9.51959592 9.51959592,11.4 7.2,11.4 L4.2,11.4"
                                                            id="Path"
                                                        ></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                {pc && <span className={cx('navAction-center')}>Undo</span>}
                                <Tippy content="Repo" offset={[0, 16]}>
                                    <div className={cx('navAction-right')}>
                                        <svg width="14.4px" height="14.4px" viewBox="0 0 14 14" version="1.1">
                                            <g
                                                id="Page-1"
                                                stroke="none"
                                                strokeWidth="1"
                                                fill="none"
                                                fillRule="evenodd"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <g
                                                    id="Artboard-Copy-39"
                                                    transform="translate(-896.000000, -25.000000)"
                                                    stroke="#DAE2F2"
                                                    strokeWidth="1.4"
                                                >
                                                    <g id="Group-Copy-3" transform="translate(816.000000, 14.000000)">
                                                        <g id="redo" transform="translate(81.000000, 12.000000)">
                                                            <polyline id="Path" points="9 0.6 11.4 3 9 5.4"></polyline>
                                                            <path
                                                                d="M11.4,3 L4.8,3 C2.48040408,3 0.600000063,4.88040408 0.600000063,7.2 C0.600000063,9.51959592 2.48040408,11.4 4.8,11.4 L7.8,11.4"
                                                                id="Path"
                                                            ></path>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                </Tippy>
                            </div>
                        )}
                    </div>
                    {pc && (
                        <div className={cx('tools')}>
                            <span className={cx('tools-logo')}>Logo</span>
                            <div className={cx('tools-brand')}>
                                <span className={cx('brand-title')}>Brand Kit</span>
                                <svg width="9px" height="6px" viewBox="0 0 9 6" version="1.1">
                                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                        <g
                                            id="Artboard-Copy-39"
                                            transform="translate(-158.000000, -30.000000)"
                                            fill="#37373C"
                                            className={cx('brand-icon')}
                                        >
                                            <g id="Group-5" transform="translate(13.000000, 11.000000)">
                                                <path
                                                    d="M148.796038,24.0734342 L148.230353,23.5077488 L148.209,23.482 L145.146447,20.4192388 C144.97288,20.2456725 144.953595,19.9762481 145.088591,19.7813799 L145.146447,19.712132 L145.712132,19.1464466 C145.907394,18.9511845 146.223977,18.9511845 146.419239,19.1464466 L146.419239,19.1464466 L149.152,21.879 L151.884548,19.1464466 C152.07981,18.9511845 152.396393,18.9511845 152.591655,19.1464466 L153.15734,19.712132 C153.352603,19.9073942 153.352603,20.2239767 153.15734,20.4192388 L150.094,23.482 L150.073434,23.5077488 L149.507749,24.0734342 C149.420966,24.1602174 149.310218,24.2084302 149.196807,24.2180728 L149.10698,24.2180728 C148.993569,24.2084302 148.882822,24.1602174 148.796038,24.0734342 Z"
                                                    id="Combined-Shape"
                                                ></path>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    )}
                    <div className={cx('btns')}>
                        {pc && <span className={cx('btn-share')}>Share</span>}
                        <span className={cx('btn-signup', 'active')}>Sign Up</span>
                        <div className={cx('btn-download')}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                viewBox="0 0 140 140"
                                fill="currentColor"
                                height="15"
                                width="14"
                                className={cx('download-icon')}
                            >
                                <g transform="matrix(5.833333333333333,0,0,5.833333333333333,0,0)">
                                    <path
                                        d="M24,6.25a3,3,0,1,0-4.258,2.714c-.47,1.376-1.536,3.786-3.242,3.786-2.3,0-2.967-3.142-3.53-6.175a3,3,0,1,0-1.94,0c-.56,3.1-1.239,6.175-3.53,6.175-1.706,0-2.772-2.41-3.242-3.786a3.008,3.008,0,1,0-2.129.141l1.635,9.809a1,1,0,0,0,.986.836h14.5a1,1,0,0,0,.986-.836l1.635-9.809A2.992,2.992,0,0,0,24,6.25Z"
                                        fill="#ffffff"
                                        stroke="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="0"
                                    ></path>
                                    <path
                                        d="M19.25,21.25H4.75a1,1,0,0,0,0,2h14.5a1,1,0,0,0,0-2Z"
                                        fill="#ffffff"
                                        stroke="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="0"
                                    ></path>
                                </g>
                            </svg>
                            <span className={cx('download-title')}>Download</span>
                        </div>
                        <div className={cx('header-menu')}>
                            <FontAwesomeIcon className={cx('icon-menu')} icon={faBars} />
                        </div>
                    </div>
                </>
            )}

            {/* <p>
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
                    <div className="header-center hidden md:flex items-center justify-between flex-1">
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
            </p> */}
        </div>
    );
}

export default HeaderSecond;
