import Button from '../Button';
import classNames from 'classnames/bind';
import styles from './GetStartFlex.module.scss';

const cx = classNames.bind(styles);

function GetStartFlex({ title, desc, className, classNameInput, fontText, black }) {
    return (
        <div className={`wrapper px-[2.4rem] py-[8.8rem] pb-[6rem] flex ${className}`}>
            <div className="w-full pl-[5rem]">
                <div
                    className={`title text-[#fff] font-bold md:w-[46.4rem] ${
                        fontText ? 'text-[3rem] md:text-[4rem]' : 'text-[3.6rem] md:text-[4.8rem]'
                    } leading-normal`}
                >
                    {title}
                </div>
                <div className="desc text-[#fff] text-[1.6rem] my-[32px] font-normal md:w-[46.4rem]">{desc}</div>
            </div>
            <div className="control md:flex items-center justify-center md:w-full">
                <input
                    className={cx('input', `md:max-w-[424px] ${classNameInput && '!bg-white'}`)}
                    placeholder="Enter your company name"
                />
                <Button black large className={'md:ml-2 w-full md:w-auto mt-3 md:mt-0'}>
                    Get started
                </Button>
            </div>
        </div>
    );
}

export default GetStartFlex;
