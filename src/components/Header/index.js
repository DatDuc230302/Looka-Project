import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { show } from '../../redux/actions/show';
import { toggleForm } from '../../redux/actions/toggleForm';

const cx = classNames.bind(styles);

const navigations = [
    {
        to: '/LogoMaker',
        title: 'Logo Maker',
    },
    {
        to: '/BrandKit',
        title: 'Brand Kit',
    },
    {
        to: '/HowItWorks',
        title: 'How It Works',
    },
    {
        to: '/Reviews',
        title: 'Reviews',
    },
    {
        to: '/LogoIdeas',
        title: 'Logo Ideas',
    },
    {
        to: '/Blog',
        title: 'Blog',
    },
];

function Header() {
    const [fade, setFade] = useState(false);
    const pc = useMediaQuery({ minWidth: 954 });
    const showMenu = useSelector((state) => state.show);
    const toggleMenu = useSelector((state) => state.toggleForm);

    const dispath = useDispatch();

    const openLogin = () => {
        dispath(show(!!showMenu));
    };

    const openRegister = () => {
        dispath(show(!!showMenu));
        dispath(toggleForm(!!toggleMenu));
    };
    useEffect(() => {
        if (pc) {
            setFade(false);
        }
    }, [pc]);

    return (
        <div className={cx('header')}>
            <Link to={'/'} className={cx('header-logo')}>
                <img
                    className={cx('logo')}
                    // src="https://looka.com/wp-content/themes/looka/images/logos/looka_logo_black.svg"
                    src={require('../../assets/images/Logan.jpg')}
                    alt=""
                />
            </Link>
            {pc ? (
                <div className={cx('nav')}>
                    <div className={cx('nav-list')}>
                        {navigations.map((item, index) => (
                            <Link to={item.to} key={index} className={cx('navList-item')}>
                                {item.title}
                            </Link>
                        ))}
                    </div>
                    <div className={cx('nav-btn')}>
                        <div className={cx('nav-login')} onClick={() => openLogin()}>
                            Log in
                        </div>
                        <div className={cx('nav-signup')} onClick={() => openRegister()}>
                            Sign up
                        </div>
                    </div>
                </div>
            ) : (
                <div className={cx('more')}>
                    <div
                        onClick={() => (fade ? setFade(false) : setFade(true))}
                        className={cx('more-icon', fade && 'fade')}
                    ></div>
                    {fade && (
                        <div className={cx('more-modal')}>
                            <div className={cx('more-list')}>
                                {navigations.map((item, index) => (
                                    <Link to={item.to} key={index} className={cx('moreList-item')}>
                                        {item.title}
                                    </Link>
                                ))}
                            </div>
                            <div className={cx('more-btn')}>
                                <div className={cx('more-signup')} onClick={() => openRegister()}>
                                    Sign up
                                </div>
                                <div className={cx('more-login')} onClick={() => openLogin()}>
                                    Log in
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default Header;
