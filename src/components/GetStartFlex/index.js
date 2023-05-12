import Button from '../Button';
import classNames from 'classnames/bind';
import styles from './GetStartFlex.module.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const cx = classNames.bind(styles);

function GetStartFlex({ title, desc, className, classNameInput, fontText, black }) {
    const [valueInput, setValueInput] = useState('');
    const navigate = useNavigate();

    const submitInput = () => {
        valueInput.length > 0 && navigate(`/onboarding/${valueInput}`);
    };

    document.onkeydown = function (e) {
        if (e.which === 13 && valueInput.length > 0) {
            navigate(`/onboarding/${valueInput}`);
        }
    };
    return (
        <div className={`wrapper px-[2.4rem] py-[8.8rem] pb-[6rem] flex flex-col mb-[100px] md:mb-0 md:flex-row ${className}`}>
            <div className="w-full md:pl-[5rem]">
                <div
                    className={`title text-[#fff] font-bold md:w-[46.4rem] ${
                        fontText ? 'text-[3rem] md:text-[4rem]' : 'text-[3.6rem] md:text-[4.8rem]'
                    } leading-normal`}
                >
                    {title}
                </div>
                <div className="desc text-[#fff] text-[1.6rem] mt-[12px] mb-[40px] md:my-[32px] font-normal md:w-[46.4rem]">{desc}</div>
            </div>
            <div className="control md:flex items-center justify-center md:w-full">
                <input
                    className={cx('input', `md:max-w-[424px] ${classNameInput && '!bg-white'}`)}
                    placeholder="Enter your company name"
                    onChange={(e) => setValueInput(e.target.value)}
                />
                <Button onClick={submitInput} black large className={'md:ml-2 w-full md:w-auto mt-3 md:mt-0'}>
                    Get started
                </Button>
            </div>
        </div>
    );
}

export default GetStartFlex;
