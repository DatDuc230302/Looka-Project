import Button from '../Button';
import classNames from 'classnames/bind';
import styles from './GetStart.module.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function GetStart({ title, desc, className, classNameInput, fontText }) {
    const [valueInput, setValueInput] = useState('');
    const navigate = useNavigate();

    const khang = true;
    console.log(khang);
    const submitInput = () => {
        valueInput.length > 0 && navigate(`/onboarding/${valueInput.trim()}`);
    };

    document.onkeydown = function (e) {
        if (e.which === 13 && valueInput.length > 0) {
            navigate(`/onboarding/${valueInput.trim()}`);
        }
    };

    return (
        <div className={`wrapper px-[2.4rem] py-[8.8rem] text-center md:pt-[134px] ${className}`}>
            <div
                className={`title text-[var(--text-color)] font-bold ${
                    fontText ? 'text-[3rem] md:text-[4rem]' : 'text-[3.6rem] md:text-[4.8rem]'
                } leading-normal`}
            >
                {title}
            </div>
            <div className="desc text-[#676e8b] text-[20px] my-[32px] font-normal">{desc}</div>
            <div action="/onboarding" className="control md:flex items-center justify-center">
                <input
                    className={cx('input', `md:max-w-[424px] ${classNameInput && '!bg-white'}`)}
                    placeholder="Enter your company name"
                    value={valueInput}
                    onChange={(e) => {
                        !e.target.value.startsWith(' ') && setValueInput(e.target.value);
                    }}
                />
                <Button onClick={submitInput} primary large className={'md:ml-2 w-full md:w-auto mt-3 md:mt-0'}>
                    Get started
                </Button>
            </div>
        </div>
    );
}

export default GetStart;
