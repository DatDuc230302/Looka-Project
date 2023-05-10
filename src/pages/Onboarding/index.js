import styles from './Onboarding.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faBars, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useParams, useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

const category = [
    {
        title: 'Sports',
        key: 'sports',
    },
    {
        title: 'Games',
        key: 'games',
    },
    {
        title: 'Development',
    },
    {
        title: 'Sports',
        key: 'sports',
    },
    {
        title: 'Games',
        key: 'games',
    },
    {
        title: 'Development',
    },
    {
        title: 'Sports',
        key: 'sports',
    },
    {
        title: 'Games',
        key: 'games',
    },
    {
        title: 'Development',
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

const imgs = [
    { img: 'https://s3.amazonaws.com/cdn-test.logojoy.com/assets/inspiration/new/14.png', key: 'img1' },
    { img: 'https://s3.amazonaws.com/cdn-test.logojoy.com/assets/inspiration/new/14.png', key: 'img2' },
    { img: 'https://s3.amazonaws.com/cdn-test.logojoy.com/assets/inspiration/new/14.png', key: 'img3' },
    { img: 'https://s3.amazonaws.com/cdn-test.logojoy.com/assets/inspiration/new/14.png', key: 'img4' },
    { img: 'https://s3.amazonaws.com/cdn-test.logojoy.com/assets/inspiration/new/14.png', key: 'img5' },
    { img: 'https://s3.amazonaws.com/cdn-test.logojoy.com/assets/inspiration/new/14.png', key: 'img6' },
    { img: 'https://s3.amazonaws.com/cdn-test.logojoy.com/assets/inspiration/new/14.png', key: 'img1' },
    { img: 'https://s3.amazonaws.com/cdn-test.logojoy.com/assets/inspiration/new/14.png', key: 'img2' },
    { img: 'https://s3.amazonaws.com/cdn-test.logojoy.com/assets/inspiration/new/14.png', key: 'img3' },
    { img: 'https://s3.amazonaws.com/cdn-test.logojoy.com/assets/inspiration/new/14.png', key: 'img4' },
    { img: 'https://s3.amazonaws.com/cdn-test.logojoy.com/assets/inspiration/new/14.png', key: 'img5' },
    { img: 'https://s3.amazonaws.com/cdn-test.logojoy.com/assets/inspiration/new/14.png', key: 'img6' },
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
        background: `linear-gradient(to right, rgb(116, 181, 235), rgb(61, 84, 178))`,
        boxShadow: `rgba(67, 102, 208, 0.3) 0px 10px 40px -10px`,
        key: 'blue',
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
        background: `linear-gradient(to right, rgb(192, 108, 233), rgb(103, 59, 179))`,
        boxShadow: `rgba(84, 30, 181, 0.3) 0px 10px 40px -10px;}`,
        key: 'purple',
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
        background: `linear-gradient(to right, rgb(231, 112, 226), rgb(173, 45, 105))`,
        boxShadow: ` rgba(194, 59, 171, 0.3) 0px 10px 40px -10px`,
        key: 'pink',
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
        background: `linear-gradient(to right, rgb(243, 91, 103), rgb(162, 37, 21))`,
        boxShadow: `rgba(234, 27, 27, 0.3) 0px 10px 40px -10px`,
        key: 'red',
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
        background: `linear-gradient(to right, rgb(246, 170, 87), rgb(211, 82, 41))`,
        boxShadow: `rgba(234, 97, 0, 0.3) 0px 10px 40px -10px`,
        key: 'orange',
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
        background: `linear-gradient(to right, rgb(250, 238, 48), rgb(239, 165, 18))`,
        boxShadow: `rgba(238, 198, 23, 0.3) 0px 10px 40px -10px`,
        key: 'yellow',
    },
    {
        item: (
            <div className={cx('color-detail')}>
                <span className={cx('color-title')}>Green</span>
                <span className={cx('color-description')}>Nature, growth, harmony, freshness, safety, and healing</span>
            </div>
        ),
        color: '#8ECF53',
        background: `linear-gradient(to right, rgb(188, 234, 106), rgb(87, 178, 55))`,
        boxShadow: `rgba(18, 171, 15, 0.3) 0px 10px 40px -10px`,
        key: 'green',
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
        background: `linear-gradient(to right, rgb(142, 228, 224), rgb(54, 140, 161))`,
        boxShadow: `rgba(67, 189, 190, 0.3) 0px 10px 40px -10px`,
        key: 'teal',
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
        background: `linear-gradient(to right, rgb(158, 158, 158), rgb(76, 76, 76))`,
        boxShadow: `rgba(0, 0, 0, 0.2) 0px 10px 40px -10px`,
        key: 'greyscale',
    },
];

function Onboarding() {
    const params = useParams();
    const navigate = useNavigate();

    const [pick0, setPick0] = useState('');
    const [pick1, setPick1] = useState('');
    const [pick2, setPick2] = useState('');
    const [pick3, setPick3] = useState(params.key);
    const [showOption, setShowOption] = useState(false);
    const [progress, setProgress] = useState(20);
    const [title, setTitle] = useState(pages[0].title);
    const [description, setDescription] = useState(pages[0].description);
    const [id, setId] = useState(pages[0].id);
    const [layout, setLayout] = useState(pages[0].layout);
    const [color, setColor] = useState('');
    const [count, setCount] = useState(-1);
    const [countImg, setCountImg] = useState(-1);
    const [logic, setLogic] = useState(0);
    const [fadeLabel, setFadeLabel] = useState(false);

    const tablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
    const mobile = useMediaQuery({ maxWidth: 767 });

    useEffect(() => {
        pages.filter((item) => item.id === id && setTitle(item.title));
        pages.filter((item) => item.id === id && setDescription(item.description));
        pages.filter((item) => item.id === id && setId(item.id));
        pages.filter((item) => item.id === id && setLayout(item.layout));
    }, [id]);

    useEffect(() => {
        setLogic(pick0.length);
    }, [pick0.length]);

    useEffect(() => {
        setLogic(pick1.length);
    }, [pick1.length]);

    useEffect(() => {
        setLogic(pick2.length);
    }, [pick2.length]);

    useEffect(() => {
        id === 3 && setLogic(pick3.length);
    }, [pick3.length]);

    // add header

    const handleNotify = () => {
        // hihi
    };

    const handleContinue = () => {
        if (logic > 0) {
            setId(id + 1);
            progress < 100 && setProgress(progress + 20);
            switch (id) {
                case 0:
                    setShowOption(false);
                    setLogic(pick1.length);
                    break;
                case 1:
                    setLogic(pick2.length);
                    break;
                case 2:
                    setColor('#000');
                    setLogic(pick3.length);
                    break;
                case 3:
                    navigate('/explore');
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
                setLogic(pick1.length);
                break;
            case 3:
                setLogic(pick2.length);
                break;
            case 4:
                setLogic(pick3.length);
                break;
            default:
        }
    };

    const handleImg = (index, key) => {
        setCountImg(index);
        setPick1(key);
    };

    const handleColor = (color, key, index) => {
        setColor(color);
        setCount(index);
        setPick2(key);
    };

    // HIHI

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('header')}>
                    {progress > 20 ? (
                        <FontAwesomeIcon onClick={() => handleBack()} className={cx('icon-back')} icon={faArrowLeft} />
                    ) : (
                        <div className={cx('back')}></div>
                    )}
                    <div className={cx('header-logo')}>
                        <img
                            className={cx('logo')}
                            src="https://s3.amazonaws.com/cdn.looka.com/images/logos/looka_logo_black.svg"
                            alt=""
                        />
                    </div>
                    <div className={cx('header-menu')}>
                        <FontAwesomeIcon className={cx('icon-menu')} icon={faBars} />
                    </div>
                    <div style={{ width: `${progress}%` }} className={cx('progress')}></div>
                </div>
                <div className={cx('body')}>
                    <div className={cx('box-sticky', mobile && 'mobile')}>
                        <div className={cx('box', tablet && 'tablet', mobile && 'mobile')}>
                            <div className={cx('content')}>
                                <span style={{ color: color }} className={cx('title')}>
                                    {title}
                                </span>
                                <span className={cx('description')}>{description}</span>
                            </div>
                            <div
                                onClick={() => handleContinue()}
                                className={cx(
                                    'btn-continue',
                                    logic > 0 && 'btn-active',
                                    tablet && 'tablet',
                                    mobile && 'mobile',
                                )}
                            >
                                <span className={cx('btn-title')}>Continue</span>
                                <FontAwesomeIcon className={cx('icon-right')} icon={faArrowRight} />
                            </div>
                        </div>
                    </div>
                    {layout === 0 && (
                        <>
                            <div
                                onClick={() => (showOption ? setShowOption(false) : setShowOption(true))}
                                className={cx('select', mobile && 'mobile')}
                            >
                                <span className={cx('slect-title')}>
                                    {pick0.length > 0 ? pick0 : 'Sports, Games, Development...'}
                                </span>
                                <FontAwesomeIcon
                                    className={cx('icon-down')}
                                    icon={showOption ? faChevronUp : faChevronDown}
                                />
                            </div>
                            {showOption && (
                                <div className={cx('list-option', tablet && 'tablet', mobile && 'mobile')}>
                                    {category.map((item, index) => (
                                        <span onClick={() => setPick0(item.title)} key={index} className={cx('option')}>
                                            {item.title}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </>
                    )}
                    {layout === 1 && (
                        <div className={cx('box-imgs', tablet && 'tablet', mobile && 'mobile')}>
                            {imgs.map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleImg(index, item.key)}
                                    className={cx('box-empty', mobile && 'mobile')}
                                >
                                    <img
                                        className={cx(
                                            'item-img',
                                            index === countImg && 'active',
                                            countImg !== -1 && index !== countImg && 'disable',
                                        )}
                                        src={item.img}
                                        alt=""
                                    />
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
                                            index === count && 'active',
                                            count !== -1 && count !== index && 'disable',
                                        )}
                                        key={index}
                                        onClick={() => handleColor(item.color, item.key, index)}
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
                                <label className={cx('company-label', (fadeLabel || pick3.length > 0) && 'fade')}>
                                    Company Name
                                </label>
                                <input
                                    onChange={(e) => setPick3(e.target.value)}
                                    onBlur={() => setFadeLabel(false)}
                                    onClick={() => setFadeLabel(true)}
                                    value={pick3}
                                    className={cx(
                                        'company-input',
                                        fadeLabel && 'active',
                                        tablet && 'tablet',
                                        mobile && 'mobile',
                                    )}
                                    type="text"
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Onboarding;
