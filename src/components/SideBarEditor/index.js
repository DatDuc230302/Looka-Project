import classNames from 'classnames/bind';
import styles from './SideBarEditor.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

const elements = [
    {
        icon: (
            <svg className={cx('item-icon')} viewBox="0 0 14 14" width="14" height="14">
                <g transform="matrix(1.4,0,0,1.4,0,0)">
                    <path
                        d="M9.316,4.52a.67.67,0,0,1,0,.922C8.586,6.23,6.928,7.75,5,7.75S1.414,6.23.684,5.442a.67.67,0,0,1,0-.922A6.485,6.485,0,0,1,5,2.25,6.485,6.485,0,0,1,9.316,4.52Z"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                    <path
                        d="M3.750 5.000 A1.250 1.250 0 1 0 6.250 5.000 A1.250 1.250 0 1 0 3.750 5.000 Z"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                </g>
            </svg>
        ),
        title: 'Preview',
        rule: true,
    },
    {
        icon: (
            <svg className={cx('item-icon')} viewBox="0 0 14 14" width="14" height="14">
                <g transform="matrix(1.4,0,0,1.4,0,0)">
                    <path
                        d="M7.75,5.75A2.75,2.75,0,1,0,4,8.312V9a.5.5,0,0,0,.5.5h1A.5.5,0,0,0,6,9V8.312A2.751,2.751,0,0,0,7.75,5.75Z"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                    <path d="M5 0.5L5 1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M2.022 1L2.75 1.81" fill="none" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M0.5 3.5L1.5 3.5" fill="none" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M7.978 1L7.25 1.81" fill="none" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M9.5 3.5L8.5 3.5" fill="none" strokeLinecap="round" strokeLinejoin="round"></path>
                </g>
            </svg>
        ),
        title: 'Suggested',
        rule: false,
    },
    {
        icon: (
            <svg className={cx('item-icon')} viewBox="0 0 14 14" width="14" height="14">
                <g transform="matrix(1.4,0,0,1.4,0,0)">
                    <path
                        d="M4.681,4.929.73,3.114a.388.388,0,0,1,0-.7L4.67.572a.775.775,0,0,1,.649,0L9.274,2.386a.389.389,0,0,1,0,.705L5.33,4.928A.775.775,0,0,1,4.681,4.929Z"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                    <path
                        d="M9.495,5.245,5.425,7.139a1,1,0,0,1-.839,0L.5,5.264"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                    <path
                        d="M9.495,7.512l-4.07,1.9a1,1,0,0,1-.839,0L.5,7.531"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                </g>
            </svg>
        ),
        title: 'Layout',
        rule: false,
    },
    {
        icon: (
            <svg className={cx('item-icon')} viewBox="0 0 14 14" width="14" height="14">
                <g transform="matrix(1.4,0,0,1.4,0,0)">
                    <path
                        d="M8,6.5a3,3,0,0,1-6,0c0-1.657,3-6,3-6S8,4.843,8,6.5Z"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                </g>
            </svg>
        ),
        title: 'Palette',
    },
    {
        icon: (
            <svg className={cx('item-icon')} viewBox="0 0 14 14" width="14" height="14">
                <g transform="matrix(1.4,0,0,1.4,0,0)">
                    <path d="M0.5 9.5L5.028 4.972" fill="none" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path
                        d="M8.984,1.361,8.362,3.092a.27.27,0,0,0,.034.254L9.448,4.775a.288.288,0,0,1-.236.449L7.4,5.243a.293.293,0,0,0-.233.122L6.083,6.871a.274.274,0,0,1-.49-.067l-.5-1.72a.26.26,0,0,0-.179-.179l-1.72-.5a.274.274,0,0,1-.067-.49L4.635,2.835A.293.293,0,0,0,4.757,2.6L4.776.788A.288.288,0,0,1,5.225.552L6.654,1.6a.27.27,0,0,0,.254.034l1.731-.622A.267.267,0,0,1,8.984,1.361Z"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                </g>
            </svg>
        ),
        title: 'More Ideas',
        rule: true,
    },
    {
        icon: (
            <svg className={cx('item-icon')} viewBox="0 0 14 14" width="14" height="14">
                <g transform="matrix(1.4,0,0,1.4,0,0)">
                    <path d="M9.5,1.5a1,1,0,0,0-1-1" fill="none" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M1.5.5a1,1,0,0,0-1,1" fill="none" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M5 3.5L5 6.5" fill="none" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M5 0.5L5 1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M0.5 4L0.5 6" fill="none" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M9.5 4L9.5 6" fill="none" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M6.5 5L3.5 5" fill="none" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M9.5 5L8.5 5" fill="none" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M1.5 5L0.5 5" fill="none" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M6 0.5L4 0.5" fill="none" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M9.5,8.5a1,1,0,0,1-1,1" fill="none" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M1.5,9.5a1,1,0,0,1-1-1" fill="none" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M5 9.5L5 8.5" fill="none" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M6 9.5L4 9.5" fill="none" strokeLinecap="round" strokeLinejoin="round"></path>
                </g>
            </svg>
        ),
        title: 'Background',
        rule: false,
    },
    {
        icon: (
            <svg className={cx('item-icon')} viewBox="0 0 14 14" width="14" height="14">
                <g transform="matrix(1.4,0,0,1.4,0,0)">
                    <path
                        d="M2.5,7.5,4.538,2.608a.5.5,0,0,1,.924,0L7.5,7.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                    <path d="M3.387 5.37L6.613 5.37" fill="none" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path
                        d="M0.500 0.500 L9.500 0.500 L9.500 9.500 L0.500 9.500 Z"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                </g>
            </svg>
        ),
        title: 'Name',
        rule: false,
    },
    {
        icon: (
            <svg className={cx('item-icon')} viewBox="0 0 14 14" width="14" height="14">
                <g transform="matrix(1.4,0,0,1.4,0,0)">
                    <path d="M0.5 8.5L3.5 1.5 5 5" fill="none" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M1.66 5.793L4.05 5.793" fill="none" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M9.5 8.5L7.5 4 5.5 8.5" fill="none" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M5.944 7.5L9.056 7.5" fill="none" strokeLinecap="round" strokeLinejoin="round"></path>
                </g>
            </svg>
        ),
        title: 'Slogan',
        rule: false,
    },
    {
        icon: (
            <svg className={cx('item-icon')} viewBox="0 0 14 14" width="14" height="14">
                <g transform="matrix(1.4,0,0,1.4,0,0)">
                    <path
                        d="M5.34.909l1.1,2.224a.379.379,0,0,0,.286.208L9.175,3.7a.379.379,0,0,1,.21.647L7.61,6.077a.381.381,0,0,0-.109.336L7.92,8.858a.379.379,0,0,1-.551.4L5.177,8.1a.382.382,0,0,0-.354,0L2.631,9.258a.379.379,0,0,1-.551-.4L2.5,6.413a.381.381,0,0,0-.109-.336L.615,4.345A.379.379,0,0,1,.825,3.7l2.452-.357a.379.379,0,0,0,.286-.208L4.66.909A.379.379,0,0,1,5.34.909Z"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                </g>
            </svg>
        ),
        title: 'Symbol',
        rule: false,
    },
    {
        icon: (
            <svg className={cx('item-icon')} viewBox="0 0 14 14" width="14" height="14">
                <g transform="matrix(1.4,0,0,1.4,0,0)">
                    <path
                        d="M0.500 5.000 A4.500 4.500 0 1 0 9.500 5.000 A4.500 4.500 0 1 0 0.500 5.000 Z"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                </g>
            </svg>
        ),
        title: 'Container',
        rule: true,
    },
    {
        icon: (
            <svg className={cx('item-icon')} viewBox="0 0 14 14" width="14" height="14">
                <g transform="matrix(1.4,0,0,1.4,0,0)">
                    <path
                        d="M5.25,1A4,4,0,1,1,2.481,2.114"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                    <path
                        d="M0.75 2.5L2.481 2.114 2.868 3.661"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                    <path d="M5.25 3.5L5.25 5 6.25 6" fill="none" strokeLinecap="round" strokeLinejoin="round"></path>
                </g>
            </svg>
        ),
        title: 'History',
        rule: false,
    },
    {
        icon: (
            <svg
                className={cx('item-icon')}
                xmlns="http://www.w3.org/2000/svg"
                width="15px"
                height="13px"
                viewBox="0 0 15 13"
                version="1.1"
            >
                <g strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                    <g id="Artboard-Copy-40" transform="translate(-24.000000, -260.000000)" strokeWidth="1.2">
                        <g id="Group-8" transform="translate(11.000000, 73.000000)">
                            <g id="Group" transform="translate(14.000000, 188.000000)">
                                <path
                                    d="M6.49957077,10.8995818 L0.980570772,5.85258179 C-2.00042923,2.87158179 2.38657077,-2.90841821 6.49957077,1.75258179 C10.6125708,-2.90841821 14.9995708,2.87158179 12.0185708,5.85258179 L6.49957077,10.8995818 Z"
                                    id="Path"
                                ></path>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        ),
        title: 'Your Logos',
        rule: false,
    },
];

function SideBarEditor() {
    const [count, setCount] = useState(1);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                {elements.map((item, index) => (
                    <div
                        onClick={() => setCount(index)}
                        key={index}
                        className={cx('item', item.rule && 'rule', index === count && 'active')}
                    >
                        {item.icon}
                        <span className={cx('item-title')}>{item.title}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SideBarEditor;
