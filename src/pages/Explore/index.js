import className from 'classnames/bind';
import styles from './Explore.module.scss';
import { useEffect, useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { StoreStateFavorite as SetStoreStateFavorite } from '../../redux/actions/khang/StoreStateFavorite';
import { AddFavorite as setAddFavorite } from '../../redux/actions/khang/AddFavorite';
import { pick3 as setPick3 } from '../../redux/actions/pick3';
import PageError from '../../components/PageError';
import { apiLogo as setApiLogo } from '../../redux/actions/dat/apiLogo';
import axios from 'axios';

const cx = className.bind(styles);

const colors = [
    {
        color: '#000000',
        id: 1,
    },
    {
        color: '#0000FF',
        id: 2,
    },
    {
        color: '#008080',
        id: 3,
    },
    {
        color: '#008000',
        id: 4,
    },
    {
        color: '#800080',
        id: 5,
    },
    {
        color: '#FFC0CB',
        id: 6,
    },
    {
        color: '#FF0000',
        id: 7,
    },
    {
        color: '#FFA500',
        id: 8,
    },
    {
        color: '#FFFF00',
        id: 9,
    },
];

const arrLoading = [1, 2, 3, 4, 5, 6, 7, 8];

function Explore() {
    const key = 'favoriteList';

    const tablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
    const mobile = useMediaQuery({ maxWidth: 767 });

    const apiPick1 = useSelector((state) => state.apiPick1);
    const apiLogo = useSelector((state) => state.apiLogo);
    const pick1 = useSelector((state) => state.pick1);
    const pick3 = useSelector((state) => state.pick3);
    const pick2 = useSelector((state) => state.pick2);
    const addFavorite = useSelector((state) => state.AddFavorite);
    const StoreStateFavorite = useSelector((state) => state.SetStoreStateFavorite);

    const [api, setApi] = useState([]);
    const [fade, setFade] = useState(false);
    const [select, setSelect] = useState(false);
    const [color, setColor] = useState(pick2);
    const [arrColors, setArrColors] = useState(colors);
    const [valueInput, setValueInput] = useState(pick3);
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem(key)) || []);

    //add Favorite
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleColor = (item, id) => {
        setColor(item);
        let arr = colors.filter((index) => index !== id);
        setArrColors(arr);
    };

    const handleDeleteColor = () => {
        setColor('');
        setArrColors(colors);
    };

    const handleSelect = () => {
        if (color.length > 0) {
            setSelect(false);
        } else {
            setSelect(true);
        }
    };

    const handleImg = (index) => {
        dispatch(setApiLogo(api));
        navigate(`/editor/${index}`);
    };

    const handleAddFavotire = (index, img) => {
        dispatch(setAddFavorite({ id: index, img: img }));
        setFavorites((prev) => {
            const newData = { id: index, img: img };
            let newFavoriteList = [...prev, newData];
            let checkItemInCluse = favorites.some((item) => item.id === newData.id);
            if (checkItemInCluse) {
                //exsit
                const favoritesUnFavorite = favorites.filter((item) => item.id !== newData.id);
                newFavoriteList = [...favoritesUnFavorite];
            } else {
                //dont exsit
            }
            localStorage.setItem(key, JSON.stringify(newFavoriteList));
            return newFavoriteList;
        });
    };

    // useEffect(() => {
    //     setFavorites((prev) => {
    //         const newFavoriteList = [...prev, addFavorite];
    //         localStorage.setItem(key, JSON.stringify(newFavoriteList));
    //         return newFavoriteList;
    //     });
    // }, [addFavorite]);

    useEffect(() => {
        if (valueInput.length > 0) {
            dispatch(setPick3(valueInput));
        }
    }, [valueInput]);

    useEffect(() => {
        postData();
    }, []);

    const postData = async () => {
        if (apiLogo.length > 0) {
            setApi(apiLogo);
        } else {
            const link = apiPick1.filter((item) => item.id === pick1)[0].link;
            const body = { company: pick3, link: link, color: pick2 };
            let result = await axios.post('http://localhost:5000/api', body);
            setApi(result.data);
        }
    };

    return (
        <div className={cx('wrapper')}>
            {pick3.length > 0 || true ? (
                <div className={cx('inner')}>
                    <div className={cx('body')}>
                        <div className={cx('control')}>
                            <div className={cx('control-box', mobile && 'mobile')}>
                                <div className={cx('control-input', mobile && 'mobile')}>
                                    <input
                                        onChange={(e) => {
                                            setValueInput(e.target.value);
                                        }}
                                        onClick={() => setFade(true)}
                                        onBlur={() => setFade(false)}
                                        className={cx('control-company', mobile && 'mobile', fade && 'fade')}
                                        placeholder="Company Name"
                                        value={valueInput}
                                    />
                                </div>
                                <div className={cx('control-select')}>
                                    <HeadlessTippy
                                        appendTo={'parent'}
                                        zIndex={0}
                                        interactive={true}
                                        placement="bottom-start"
                                        onClickOutside={() => handleSelect()}
                                        visible={select}
                                        render={() => (
                                            <div className={cx('options')}>
                                                {arrColors.map((item, index) => (
                                                    <div
                                                        onClick={() => handleColor(item.color, item.id)}
                                                        key={index}
                                                        style={{ background: item.color }}
                                                        className={cx('option')}
                                                    ></div>
                                                ))}
                                            </div>
                                        )}
                                    >
                                        <div>
                                            <div
                                                onClick={() => (select ? setSelect(false) : setSelect(true))}
                                                className={cx('select-btn', select && 'select')}
                                            >
                                                <svg
                                                    width={14}
                                                    height={14}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 13 13"
                                                >
                                                    <path
                                                        className={cx('icon-plus')}
                                                        d="M11.94 5.44H7.56V1.06a1.06 1.06 0 0 0-2.12 0v4.38H1.06a1.06 1.06 0 1 0 0 2.12h4.38v4.38a1.06 1.06 0 0 0 2.12 0V7.56h4.38a1.06 1.06 0 1 0 0-2.12z"
                                                    ></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </HeadlessTippy>
                                    <div
                                        onClick={() => handleDeleteColor()}
                                        style={{ background: color }}
                                        className={cx('select-color', color.length > 0 && 'select')}
                                    >
                                        <svg
                                            className={cx('icon-plus2')}
                                            width={12}
                                            height={12}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 13 13"
                                        >
                                            <path d="M11.94 5.44H7.56V1.06a1.06 1.06 0 0 0-2.12 0v4.38H1.06a1.06 1.06 0 1 0 0 2.12h4.38v4.38a1.06 1.06 0 0 0 2.12 0V7.56h4.38a1.06 1.06 0 1 0 0-2.12z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('box-sticky', mobile && 'mobile')}>
                            <div className={cx('box', tablet && 'tablet', mobile && 'mobile')}>
                                <div className={cx('content')}>
                                    <span className={cx('title')}>Pick a logo to customize</span>
                                    <span className={cx('description')}>
                                        Click a design to preview and see different versions
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={cx('box-imgs', tablet && 'tablet', mobile && 'mobile')}>
                            {api.length > 0
                                ? api.map((item, index) => (
                                      <div key={index} className={cx('box-empty', mobile && 'mobile')}>
                                          <img
                                              onClick={() => handleImg(index)}
                                              className={cx('item-img')}
                                              src={`data:image/png;base64,` + item}
                                              alt=""
                                          />
                                          <div className={cx('buy')}>
                                              <div
                                                  // onClick={() => handleImg(item.id)}
                                                  className={cx('buy-btn', tablet && 'tablet')}
                                              >
                                                  Customize
                                              </div>
                                              <div className={cx('buy-cart')}>
                                                  <svg
                                                      width="22.05px"
                                                      height="21px"
                                                      viewBox="0 0 21 20"
                                                      version="1.1"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                                  >
                                                      <g
                                                          strokeWidth="1"
                                                          fill="none"
                                                          fillRule="evenodd"
                                                          transform="translate(-568.000000, -578.000000)"
                                                      >
                                                          <g
                                                              transform="translate(155.000000, 181.000000)"
                                                              stroke="#000"
                                                          >
                                                              <g
                                                                  id="cart"
                                                                  transform="translate(413.000000, 398.000000)"
                                                              >
                                                                  <path
                                                                      d="M0,0.0666666667 L3.02226667,0.0666666667 L7.19973333,8.46666667 L5.57,11.1722667 C5.3096,11.6046667 5.62093333,12.1556 6.12546667,12.1556 L17.3333333,12.1556"
                                                                      id="Stroke-1"
                                                                      strokeLinecap="round"
                                                                  ></path>
                                                                  <path
                                                                      d="M8.4,16.0333333 C8.4,16.8618039 7.72847059,17.5333333 6.9,17.5333333 C6.07152941,17.5333333 5.4,16.8618039 5.4,16.0333333 C5.4,15.2048627 6.07152941,14.5333333 6.9,14.5333333 C7.72847059,14.5333333 8.4,15.2048627 8.4,16.0333333 Z"
                                                                      id="Stroke-3"
                                                                  ></path>
                                                                  <path
                                                                      d="M17,16.0333333 C17,16.8618039 16.3284706,17.5333333 15.5,17.5333333 C14.6715294,17.5333333 14,16.8618039 14,16.0333333 C14,15.2048627 14.6715294,14.5333333 15.5,14.5333333 C16.3284706,14.5333333 17,15.2048627 17,16.0333333 Z"
                                                                      id="Stroke-5"
                                                                  ></path>
                                                                  <path
                                                                      d="M3.53333333,1.26666667 L19.3052,1.26666667 C19.7349333,1.26666667 20.0050667,1.72973333 19.7938667,2.10373333 L16.6841333,7.60946667 C16.3850667,8.13906667 15.8238667,8.46666667 15.2154667,8.46666667 L7.19973333,8.46666667"
                                                                      id="Stroke-7"
                                                                  ></path>
                                                              </g>
                                                          </g>
                                                      </g>
                                                  </svg>
                                              </div>
                                              <div
                                                  className={cx('buy-heart')}
                                                  onClick={() => handleAddFavotire(item.id, item.img)}
                                              >
                                                  {addFavorite.filter((i) => i.id === item.id).length > 0 ? (
                                                      <svg
                                                          width="23.1px"
                                                          height="19.95px"
                                                          viewBox="0 0 20 17"
                                                          version="1.1"
                                                          xmlns="http://www.w3.org/2000/svg"
                                                      >
                                                          <g
                                                              id="001"
                                                              stroke="none"
                                                              strokeWidth="1"
                                                              fill="none"
                                                              fillRule="evenodd"
                                                              transform="translate(-608.000000, -1064.000000)"
                                                          >
                                                              <g
                                                                  id="Group-6-Copy"
                                                                  transform="translate(155.000000, 667.000000)"
                                                                  fill="#F96167"
                                                              >
                                                                  <g id="Group-4">
                                                                      <g id="card">
                                                                          <g id="Group-4-Copy">
                                                                              <g
                                                                                  id="Group-2"
                                                                                  transform="translate(415.000000, 359.000000)"
                                                                              >
                                                                                  <path
                                                                                      d="M57.7339015,43.4210068 C57.7339015,44.969359 57.0811648,46.3684421 56.03628,47.3526072 L55.9629104,47.4234468 L48.7524464,54.593431 L48.6816067,54.6637647 C48.231016,55.1120784 47.5031386,55.1120784 47.0522948,54.6637647 L46.9814552,54.593431 L39.7709912,47.4234468 L39.6976215,47.3526072 C38.6527367,46.3684421 38,44.969359 38,43.4184768 C38,40.4330917 40.4211979,38.0118938 43.409113,38.0118938 C45.1489853,38.0118938 46.6986026,38.8359106 47.6870687,40.1133013 C47.7773892,40.2299337 47.9565123,40.2299337 48.0468329,40.1133013 C49.0355519,38.8359106 50.5851692,38.0118938 52.3273185,38.0118938 C55.3127036,38.0118938 57.7339015,40.4330917 57.7339015,43.4210068 Z"
                                                                                      id="ic_heart_fill"
                                                                                  ></path>
                                                                              </g>
                                                                          </g>
                                                                      </g>
                                                                  </g>
                                                              </g>
                                                          </g>
                                                      </svg>
                                                  ) : (
                                                      <svg
                                                          width="23.1px"
                                                          height="19.95px"
                                                          viewBox="0 0 22 19"
                                                          version="1.1"
                                                          xmlns="http://www.w3.org/2000/svg"
                                                          xmlnsXlink="http://www.w3.org/1999/xlink"
                                                      >
                                                          <title>ic_heart</title>
                                                          <desc>Created with Sketch.</desc>
                                                          <defs></defs>
                                                          <g
                                                              id="001"
                                                              stroke="none"
                                                              strokeWidth="1"
                                                              fill="none"
                                                              fillRule="evenodd"
                                                              transform="translate(-29.000000, -26.000000)"
                                                          >
                                                              <g
                                                                  id="ic_heart"
                                                                  transform="translate(30.000000, 26.000000)"
                                                                  stroke="#000000"
                                                              >
                                                                  <path
                                                                      d="M19.7339015,6.42100677 C19.7339015,7.96935904 19.0811648,9.36844206 18.03628,10.3526072 L17.9629104,10.4234468 L10.7524464,17.593431 L10.6816067,17.6637647 C10.231016,18.1120784 9.50313859,18.1120784 9.05229484,17.6637647 L8.98145519,17.593431 L1.77099116,10.4234468 L1.69762153,10.3526072 C0.652736744,9.36844206 0,7.96935904 0,6.41847678 C0,3.43309167 2.42119792,1.01189375 5.40911301,1.01189375 C7.14898533,1.01189375 8.6986026,1.83591064 9.68706867,3.11330127 C9.77738922,3.22993369 9.95651233,3.22993369 10.0468329,3.11330127 C11.0355519,1.83591064 12.5851692,1.01189375 14.3273185,1.01189375 C17.3127036,1.01189375 19.7339015,3.43309167 19.7339015,6.42100677 Z"
                                                                      id="Page-1"
                                                                  ></path>
                                                              </g>
                                                          </g>
                                                      </svg>
                                                  )}
                                              </div>
                                          </div>
                                      </div>
                                  ))
                                : arrLoading.map((item) => (
                                      <div key={item} className={cx('box-empty', mobile && 'mobile')}>
                                          <div className={cx('item-img', 'loadingApi')} alt=""></div>
                                      </div>
                                  ))}
                        </div>
                    </div>
                    <div className={cx('start')}>
                        <div className={cx('start-btn')}>Start customizing</div>
                    </div>
                </div>
            ) : (
                <PageError />
            )}
        </div>
    );
}

export default Explore;
