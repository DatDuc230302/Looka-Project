import { faTrash, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Button';
import classNames from 'classnames/bind';
import styles from './ModalStore.module.scss';
import { storeLike as setStoreLike } from '../../redux/actions/storeLike';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function ModalStore() {
    const key = 'favoriteList';

    const storeLike = useSelector((state) => state.storeLike);
    const AddFavorite = useSelector((state) => state.AddFavorite);

    const dispath = useDispatch();

    const handleCloseStore = () => {
        dispath(setStoreLike(storeLike));
    };
    const stateFav = useSelector((state) => state.AddFavorite);

    const [storageLike, setStorageLike] = useState(JSON.parse(localStorage.getItem(key)) || []);

    useEffect(() => {
        setStorageLike(JSON.parse(localStorage.getItem(key)));
    }, [stateFav]);

    return (
        <div style={{ display: 'none' }} className="">
            <div
                className={`overlay top-0 bottom-0 right-0 left-0 bg-black/70 z-[2100] ${storeLike ? 'fixed' : ''}`}
                onClick={() => handleCloseStore()}
            ></div>
            <div
                className={`fixed top-[10px] inner-modal w-[42rem] h-[calc(100vh_-_20px)] bg-white text-black rounded-2xl ease-in-out duration-500 z-[2200] ${
                    storeLike ? 'translate-x-[10px]' : '-translate-x-[42rem]'
                }`}
            >
                <div className="header flex justify-between items-center p-[12px]">
                    <div
                        onClick={() => handleCloseStore()}
                        className="close text-4xl px-[9px] py-[5px] cursor-pointer hover:bg-[#f5f6f8] hover:rounded-xl"
                    >
                        <FontAwesomeIcon icon={faXmark} />
                    </div>
                    <div className="saved text-[16px] font-bold ml-[30px]">Your Saved Logos</div>
                    <div className="view-all text-[16px] text-[var(--primary-color)] px-[10px] py-[8px] cursor-pointer hover:bg-[#f5f6f8] hover:rounded-xl">
                        View all
                    </div>
                </div>
                <div className="container overflow-y-scroll w-full h-[calc(100%_-_80px)] pt-[12px] pl-[12px]">
                    <div className="wrapper flex flex-wrap flex-row pr-[12px] h-full w-full">
                        {Array.isArray(storageLike) &&
                            storageLike.map((item, index) => (
                                <div
                                    className={cx(
                                        'items',
                                        'wrapper-img h-[calc(50%_-_10px)] w-full mb-[12px] hover:scale-[1.05] ease-in duration-100 relative',
                                    )}
                                    key={index}
                                >
                                    <img
                                        src={item.img}
                                        alt=""
                                        className="h-full w-full object-cover rounded-xl shadow-[0_20px_35px_-30px_rgba(0,0,0,0.5)]"
                                    />
                                    <div className={cx('control')}>
                                        <Button smallMixMedium primary>
                                            Edit
                                        </Button>
                                        <Button smallMixMedium primary className={'!ml-0'}>
                                            Buy
                                        </Button>
                                        <div className={cx('trash', 'hover:bg-[#eee] hover:rounded-xl cursor-pointer')}>
                                            <FontAwesomeIcon icon={faTrash} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>

            <div className="fixed top-0 left-0 right-0 bottom-0 z-[2999]">
                <div className="modal rounded-2xl px-[40px] py-[20px] fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white z-[3000]">
                    <div className="opacity-50 hover:opacity-100 cursor-pointer absolute right-[12px] top-[12px]">
                        <img src="https://cdn.logojoy.com/app-explore-page/close.svg" alt="" className="" />
                    </div>
                    <div className="">Delete your logo</div>
                    <div className="">Are you sure you want to delete this logo?</div>
                    <div className="">
                        <img
                            src="https://cdn.logojoy.com/app-explore-page/img_delete%402x.png"
                            alt=""
                            className="w-[200px]"
                        />
                    </div>
                    <div className="control">
                        <Button textCustom custom>
                            Cancel
                        </Button>
                        <Button primary custom>
                            Confirm
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalStore;
