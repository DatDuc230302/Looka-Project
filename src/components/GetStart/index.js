import Button from '../Button';
import classNames from 'classnames/bind';
import styles from './GetStart.module.scss';

const cx = classNames.bind(styles);

function GetStart({ title, desc, className, classNameInput, fontText }) {
    return (
        <div className={`wrapper px-[2.4rem] py-[8.8rem] text-center pt-[134px] ${className}`}>
            <div
                className={`title text-[var(--text-color)] font-bold ${
                    fontText ? 'text-[2.9rem] md:text-[4rem]' : 'text-[3.6rem] md:text-[4.8rem]'
                } leading-[1.3]`}
            >
                {title}
            </div>
            <div className="desc text-[#676e8b] text-[20px] my-[32px] font-normal">{desc}</div>
            <div className="control md:flex items-center justify-center">
                <input
                    className={cx('input', `md:max-w-[424px] ${classNameInput && '!bg-white'}`)}
                    placeholder="Enter your company name"
                />
                <Button primary large className={'md:ml-2 w-full md:w-auto mt-3 md:mt-0'}>
                    Get started
                </Button>
            </div>
        </div>
    );
}

export default GetStart;
