import styles from './Onboarding.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faBars, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { pick0 as setPick0 } from '../../redux/actions/pick0';
import { pick1 as setPick1 } from '../../redux/actions/pick1';
import { pick2 as setPick2 } from '../../redux/actions/pick2';
import { pick3 as setPick3 } from '../../redux/actions/pick3';
import { apiPick1 as setApiPick1 } from '../../redux/actions/dat/apiPick1';
import axios from 'axios';
import PageError from '../../components/PageError';

const cx = classNames.bind(styles);

export const category = [
    {
        title: 'Clothes',
    },
    {
        title: 'Company',
    },
    {
        title: 'Electronic',
    },
    {
        title: 'Food',
    },
    {
        title: 'Institution',
    },
    {
        title: 'Pet',
    },
    {
        title: 'Translatation',
    },
    {
        title: 'Accessories',
    },
];

const pages = [
    {
        title: 'Pick your industry',
        description: 'Knowing your industry will help us pick symbols, colors, and more.',
        id: 0,
        layout: 0,
    },
    {
        title: 'Pick some logos you like',
        description: `We'll use these as inspiration. These were all made with Looka.`,
        id: 1,
        layout: 1,
    },
    {
        title: 'Pick some colors you like',
        description: 'Colors help convey emotion in your logo',
        id: 2,
        layout: 2,
    },
    {
        title: 'Enter your company name',
        description: 'You can always change these later',
        id: 3,
        layout: 3,
    },
];

const colors = [
    {
        item: (
            <div className={cx('color-detail')}>
                <span className={cx('color-title')}>Blue</span>
                <span className={cx('color-description')}>
                    Depth, trust, loyalty, confidence, intelligence, and calmness
                </span>
            </div>
        ),
        color: '#6296D9',
        color2: 'blue',
        background: `linear-gradient(to right, rgb(116, 181, 235), rgb(61, 84, 178))`,
        boxShadow: `rgba(67, 102, 208, 0.3) 0px 10px 40px -10px`,
        key: 1,
    },
    {
        item: (
            <div className={cx('color-detail')}>
                <span className={cx('color-title')}>Purple</span>
                <span className={cx('color-description')}>
                    Royalty, power, nobility, luxury, wealth, extravagance, and wisdom
                </span>
            </div>
        ),
        color: '#A15BD6',
        color2: 'purple',
        background: `linear-gradient(to right, rgb(192, 108, 233), rgb(103, 59, 179))`,
        boxShadow: `rgba(84, 30, 181, 0.3) 0px 10px 40px -10px;}`,
        key: 2,
    },
    {
        item: (
            <div className={cx('color-detail')}>
                <span className={cx('color-title')}>Pink</span>
                <span className={cx('color-description')}>
                    Sweet, innocent, sensitive, passionate, playful, and loving
                </span>
            </div>
        ),
        color: '#D159B5',
        color2: 'pink',
        background: `linear-gradient(to right, rgb(231, 112, 226), rgb(173, 45, 105))`,
        boxShadow: ` rgba(194, 59, 171, 0.3) 0px 10px 40px -10px`,
        key: 3,
    },
    {
        item: (
            <div className={cx('color-detail')}>
                <span className={cx('color-title')}>Red</span>
                <span className={cx('color-description')}>
                    Power, energy, passion, desire, speed, strength, love, and intensity
                </span>
            </div>
        ),
        color: '#D7494B',
        color2: 'red',
        background: `linear-gradient(to right, rgb(243, 91, 103), rgb(162, 37, 21))`,
        boxShadow: `rgba(234, 27, 27, 0.3) 0px 10px 40px -10px`,
        key: 4,
    },
    {
        item: (
            <div className={cx('color-detail')}>
                <span className={cx('color-title')}>Orange</span>
                <span className={cx('color-description')}>
                    Joy, enthusiasm, happiness, creativity, determination, and stimulation
                </span>
            </div>
        ),
        color: '#E98845',
        color2: 'orange',
        background: `linear-gradient(to right, rgb(246, 170, 87), rgb(211, 82, 41))`,
        boxShadow: `rgba(234, 97, 0, 0.3) 0px 10px 40px -10px`,
        key: 5,
    },
    {
        item: (
            <div className={cx('color-detail')}>
                <span className={cx('color-title')}>Yellow</span>
                <span className={cx('color-description')}>
                    Sunshine, joy, happiness, intellect, cheerfulness, and energy
                </span>
            </div>
        ),
        color: '#F5C721',
        color2: 'yellow',
        background: `linear-gradient(to right, rgb(250, 238, 48), rgb(239, 165, 18))`,
        boxShadow: `rgba(238, 198, 23, 0.3) 0px 10px 40px -10px`,
        key: 6,
    },
    {
        item: (
            <div className={cx('color-detail')}>
                <span className={cx('color-title')}>Green</span>
                <span className={cx('color-description')}>Nature, growth, harmony, freshness, safety, and healing</span>
            </div>
        ),
        color: '#8ECF53',
        color2: 'green',
        background: `linear-gradient(to right, rgb(188, 234, 106), rgb(87, 178, 55))`,
        boxShadow: `rgba(18, 171, 15, 0.3) 0px 10px 40px -10px`,
        key: 7,
    },
    {
        item: (
            <div className={cx('color-detail')}>
                <span className={cx('color-title')}>Teal</span>
                <span className={cx('color-description')}>
                    Creativity, inspiration, excitement, tranquility, and youth
                </span>
            </div>
        ),
        color: '#66B6BF',
        color2: 'teal',
        background: `linear-gradient(to right, rgb(142, 228, 224), rgb(54, 140, 161))`,
        boxShadow: `rgba(67, 189, 190, 0.3) 0px 10px 40px -10px`,
        key: 8,
    },
    {
        item: (
            <div className={cx('color-detail')}>
                <span className={cx('color-title')}>Greyscale</span>
                <span className={cx('color-description')}>
                    Power, elegance, reliability, intelligence, modesty, and maturity
                </span>
            </div>
        ),
        color: '#7E7E7E',
        color2: 'brown',
        background: `linear-gradient(to right, rgb(158, 158, 158), rgb(76, 76, 76))`,
        boxShadow: `rgba(0, 0, 0, 0.2) 0px 10px 40px -10px`,
        key: 9,
    },
];

const arrLoading = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function Onboarding() {
    const tablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
    const mobile = useMediaQuery({ maxWidth: 767 });

    const params = useParams();
    const url = params.key;
    const navigate = useNavigate();

    let newArr = [];
    const [opa, setOpa] = useState(true);
    const [api1, setApi1] = useState([]);
    const [colorPost, setColorPost] = useState('');
    const [valuePick3, setValuePick3] = useState(!url ? 0 : url);
    const [colorPick2, setColorPick2] = useState(-1);
    const [showOption, setShowOption] = useState(false);
    const [progress, setProgress] = useState(100 / (pages.length + 1));
    const [title, setTitle] = useState(pages[0].title);
    const [description, setDescription] = useState(pages[0].description);
    const [id, setId] = useState(pages[0].id);
    const [layout, setLayout] = useState(pages[0].layout);
    const [color, setColor] = useState('');
    const [logic, setLogic] = useState(0);
    const [fadeLabel, setFadeLabel] = useState(false);
    const [sticky, setSticky] = useState(false);

    const pick0 = useSelector((state) => state.pick0);
    const pick1 = useSelector((state) => state.pick1);
    const pick2 = useSelector((state) => state.pick2);
    const pick3 = useSelector((state) => state.pick3);
    const backOnboard = useSelector((state) => state.backOnboard);
    const dispath = useDispatch();

    useEffect(() => {
        pages.filter((item) => item.id === id && setTitle(item.title));
        pages.filter((item) => item.id === id && setDescription(item.description));
        pages.filter((item) => item.id === id && setId(item.id));
        pages.filter((item) => item.id === id && setLayout(item.layout));
    }, [id]);

    useEffect(() => {
        setLogic(colorPick2);
    }, [colorPick2]);

    useEffect(() => {
        id === 3 && setLogic(pick3.length);
    }, [pick3.length]);

    useEffect(() => {
        if (backOnboard) {
            setLogic(pick3.length);
            setId(3);
            setProgress(80);
        }
    }, [backOnboard]);

    const handleContinue = () => {
        if (logic > 0) {
            setId(id + 1);
            progress < 100 && valuePick3.length < 15 && setProgress(progress + 100 / (pages.length + 1));
            switch (id) {
                case 0:
                    setShowOption(false);
                    setLogic(pick1);
                    setTimeout(() => setOpa(false), 1500);
                    break;
                case 1:
                    setLogic(pick2.length);
                    setColor(pick2);
                    break;
                case 2:
                    setColor('#000');
                    setLogic(valuePick3.length);
                    break;
                case 3:
                    if (valuePick3.length < 15) {
                        navigate('/explore');
                        dispath(setPick3(valuePick3));
                        dispath(setPick2(colorPost));
                    }
                    break;
                default:
            }
        }
    };

    const handleBack = () => {
        setColor('#000');
        progress > 0 && setProgress(progress - 20);
        setId(id - 1);
        switch (id) {
            case 1:
                setLogic(pick0.length);
                break;
            case 2:
                setTimeout(() => setOpa(false), 1500);
                setLogic(pick1);
                break;
            case 3:
                colors.filter((item) => pick2 === item.color && setColorPick2(item.key));
                setLogic(colorPick2);
                setColor(pick2);
                break;
            default:
        }
    };

    const handleImg = (id) => {
        setLogic(id);
        dispath(setPick1(id));
    };

    const handleColor = (color, key, color2) => {
        setColorPost(color2);
        setColor(color);
        setColorPick2(key);
        dispath(setPick2(color));
    };

    // Sticky
    window.addEventListener('scroll', () => {
        if (window.scrollY > 45) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    });

    //render Layout 12
    const apiPick1 = useSelector((state) => state.apiPick1);
    useEffect(() => {
        getApi();
    }, []);

    const getApi = async () => {
        let result = await axios.get('https://server-looka.onrender.com/looka/getApi');
        const data = await result.data;
        setApi1(data);
    };

    useEffect(() => {
        setLogic(pick0.length);
        setOpa(true);
        if (api1.length > 0 && pick0.length > 0) {
            dispath(setPick1(-1));
            let arr = api1.filter((item) => item.category === pick0);
            for (var i = 0; i < 16; i++) {
                let rd = Math.floor(Math.random(arr.length) * arr.length);
                arr.filter((item, index) => rd === index && newArr.push(item));
            }
            dispath(setApiPick1(newArr));
        }
    }, [pick0]);

    useEffect(() => {
        switch (pick2) {
            case 'blue':
                dispath(setPick2(0));
                break;
            case 'purple':
                dispath(setPick2(1));
                break;
            default:
                console.log('HI');
        }
    }, []);

    return (
        <div className={cx('wrapper')}>
            {url ? (
                <div className={cx('inner')}>
                    <div className={cx('header')}>
                        {progress > 20 ? (
                            <FontAwesomeIcon
                                onClick={() => handleBack()}
                                className={cx('icon-back')}
                                icon={faArrowLeft}
                            />
                        ) : (
                            <div className={cx('back')}></div>
                        )}
                        <div className={cx('header-logo')}>
                            <img className={cx('logo')} src={require('../../assets/images/Logan.jpg')} alt="" />
                        </div>
                        <div className={cx('header-menu')}>
                            <FontAwesomeIcon className={cx('icon-menu')} icon={faBars} />
                        </div>
                        <div style={{ width: `${progress}%` }} className={cx('progress')}></div>
                    </div>
                    <div className={cx('body')}>
                        <div className={cx('box-sticky', mobile && 'mobile', sticky && 'sticky')}>
                            {api1.length > 0 ? (
                                <div className={cx('box', tablet && 'tablet', mobile && 'mobile', sticky && 'sticky')}>
                                    <div className={cx('content')}>
                                        <span style={{ color: color }} className={cx('title', mobile && 'mobile')}>
                                            {title}
                                        </span>
                                        {!sticky && <span className={cx('description')}>{description}</span>}
                                    </div>
                                    <div
                                        onClick={() => handleContinue()}
                                        className={cx(
                                            'btn-continue',

                                            logic > 0 && valuePick3.length < 15 && 'btn-active',
                                            tablet && 'tablet',
                                            mobile && 'mobile',
                                        )}
                                    >
                                        <span className={cx('btn-title')}>Continue</span>
                                        <FontAwesomeIcon className={cx('icon-right')} icon={faArrowRight} />
                                    </div>
                                </div>
                            ) : (
                                <div className={cx('box', tablet && 'tablet', mobile && 'mobile', sticky && 'sticky')}>
                                    <div className={cx('content')}>
                                        <span
                                            style={{ color: color }}
                                            className={cx('title', mobile && 'mobile', 'loadingApi')}
                                        ></span>
                                        {!sticky && <span className={cx('description', 'loadingApi')}></span>}
                                    </div>
                                    <div
                                        className={cx(
                                            'btn-continue',
                                            'loadingApi',
                                            tablet && 'tablet',
                                            mobile && 'mobile',
                                        )}
                                    ></div>
                                </div>
                            )}
                        </div>
                        {layout === 0 && (
                            <>
                                {api1.length > 0 ? (
                                    <div
                                        onClick={() => (showOption ? setShowOption(false) : setShowOption(true))}
                                        className={cx('select', mobile && 'mobile')}
                                    >
                                        <div className={cx('slect-title')}>
                                            {pick0.length > 0 ? pick0 : 'Company, Electronic, Clothes ...'}
                                        </div>
                                        <FontAwesomeIcon
                                            className={cx('icon-down')}
                                            icon={showOption ? faChevronUp : faChevronDown}
                                        />
                                    </div>
                                ) : (
                                    <div className={cx('select', 'loadingApi', mobile && 'mobile')}></div>
                                )}
                                {showOption && (
                                    <div className={cx('list-option', tablet && 'tablet', mobile && 'mobile')}>
                                        {category.map((item, index) => (
                                            <span
                                                onClick={() => {
                                                    dispath(setPick0(item.title));
                                                }}
                                                key={index}
                                                className={cx('option')}
                                            >
                                                {item.title}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </>
                        )}
                        {layout === 1 && (
                            <div className={cx('box-imgs', tablet && 'tablet', mobile && 'mobile')}>
                                {!opa &&
                                    apiPick1.map((item, index) => (
                                        <div
                                            key={index}
                                            onClick={() => handleImg(item.id)}
                                            className={cx('box-empty', mobile && 'mobile', opa && 'opa')}
                                        >
                                            <img
                                                className={cx(
                                                    'item-img',
                                                    item.id === pick1 && 'active',
                                                    pick1 !== -1 && item.id !== pick1 && 'disable',
                                                )}
                                                src={item.link}
                                                alt=""
                                            />
                                        </div>
                                    ))}
                                {opa &&
                                    arrLoading.map((item, index) => (
                                        <div key={index} className={cx('box-empty', mobile && 'mobile')}>
                                            <div className={cx('item-img', 'loadingApi')}></div>
                                        </div>
                                    ))}
                            </div>
                        )}
                        {layout === 2 && (
                            <div className={cx('box-colors', mobile && 'mobile')}>
                                <div className={cx('list-colors', tablet && 'tablet', mobile && 'mobile')}>
                                    {colors.map((item, index) => (
                                        <div
                                            style={{
                                                background: item.background,
                                                boxShadow: item.boxShadow,
                                            }}
                                            className={cx(
                                                'color-item',
                                                item.key === colorPick2 && 'active',
                                                colorPick2 !== -1 && colorPick2 !== item.key && 'disable',
                                            )}
                                            key={index}
                                            onClick={() => handleColor(item.color, item.key, item.color2, index)}
                                        >
                                            {item.item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        {layout === 3 && (
                            <div className={cx('box-company', mobile && 'mobile')}>
                                <div className={cx('company')}>
                                    <label
                                        className={cx('company-label', (fadeLabel || valuePick3.length > 0) && 'fade')}
                                    >
                                        Company Name
                                    </label>
                                    <input
                                        onChange={(e) => setValuePick3(e.target.value)}
                                        onBlur={() => setFadeLabel(false)}
                                        onClick={() => setFadeLabel(true)}
                                        value={valuePick3}
                                        className={cx(
                                            'company-input',
                                            fadeLabel && 'active',
                                            tablet && 'tablet',
                                            mobile && 'mobile',
                                        )}
                                        type="text"
                                    />
                                    {valuePick3.length > 15 && (
                                        <span className={cx('warning')}>Tên không được dài quá 15 ký tự</span>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <PageError />
            )}
        </div>
    );
}

export default Onboarding;
