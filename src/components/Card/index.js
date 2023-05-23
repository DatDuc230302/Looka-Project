import { useEffect, useState } from 'react';

function Card({ card }) {
    const [textData, setTextData] = useState([]);
    useEffect(() => {
        const dataFromDbTextCard = card.texts;
        if (!!dataFromDbTextCard) {
            setTextData(dataFromDbTextCard);
        }
    }, []);

    return (
        <div className="warpper-item ct-item-3-col">
            <div className="item ">
                <div className="w-[7.2rem] h-[7.2rem]">
                    <img className="h-full w-full object-cover" src={card.img} alt="" />
                </div>
                <div className="title text-[1.8rem] mt-[3rem] font-bold leading-[2.3rem] my-[2.4rem]">{card.title}</div>
                <div className="flex flex-col gap-[1.6rem] ">
                    {textData.map((data, index) => (
                        <div
                            key={index}
                            className="flex gap-3 text-[#676e8b] text-[1.4rem] leading-[2.2rem] items-start"
                        >
                            {/* checkIcon */}
                            <img
                                src="https://cdn.looka.com/images/icons/ic_checkmark_circle.svg"
                                alt=""
                                className="mt-[2px]"
                            />
                            <div>{data}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Card;
