import className from 'classnames/bind';
import styles from './Explore.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faBars, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const cx = className.bind(styles);

function Explore() {
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
        {
            title: 'Enter your company name',
            description: 'You can always change these later',
            id: 4,
            layout: 4,
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
                    <span className={cx('color-description')}>
                        Nature, growth, harmony, freshness, safety, and healing
                    </span>
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
    const [logic, setLogic] = useState(0);
    const [fadeLabel, setFadeLabel] = useState(false);

    const tablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
    const mobile = useMediaQuery({ maxWidth: 767 });

    const handleBack = () => {
        navigate('/onboarding/Dat');
    };

    const handleColor = (color, key, index) => {
        setColor(color);
        setCount(index);
        setPick2(key);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('header')}>
                    <FontAwesomeIcon onClick={() => handleBack()} className={cx('icon-back')} icon={faArrowLeft} />

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
                    <div className={cx('progress')}></div>
                </div>
                <div className={cx('body')}>
                    {layout === 0 && (
                        <>
                            <div
                                onClick={() => (showOption ? setShowOption(false) : setShowOption(true))}
                                className={cx('select')}
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
                        <>
                            <button onClick={() => setPick1('Dat')}>Xin chao</button>
                        </>
                    )}
                    {layout === 2 && (
                        <div className={cx('box-colors')}>
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
                        <div className={cx('box-company')}>
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

export default Explore;
