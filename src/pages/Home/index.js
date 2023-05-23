import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import GetStart from '../../components/GetStart';
import CarouselComp from '../../components/Carousel';
import imgFlex from '../../assets/images/imgFlex';
import Button from '../../components/Button';
import GetStartFlex from '../../components/GetStartFlex';
import { useEffect, useState } from 'react';
import ModalLogin from '../../components/ModalLogin';
import { useSelector } from 'react-redux';
import { InitalData } from '../../components/actions/InitalData';
import Card from '../../components/Card';
import Brand from '../../components/Brand';

import { category as categorys } from '../Onboarding';
import ModalStore from '../../components/ModalStore';

const cx = classNames.bind(styles);

function Home() {
    // const [dataFromDb, setDataFromDb] = useState({});
    const [cardData, setCardData] = useState([]);
    const [brandData, setBrandData] = useState([]);

    useEffect(() => {
        const boardFromDb = InitalData.boards.find((board) => board.id === 'board-1');
        const brandFromDb = InitalData.brand.find((brand) => brand.id === 'brand-1');
        if (!!boardFromDb) {
            // setDataFromDb(boardFromDb);
            setCardData(boardFromDb.cards);
            setBrandData(brandFromDb.items);
        } else {
            return <div className="">404</div>;
        }
    }, []);

    document.title = 'Logo Design &amp; Brand Identity for Entrepreneurs | Looka';

    const showMenu = useSelector((state) => state.show);

    // console.log(DataImgs.map((dataImg) => console.log(dataImg)));

    return (
        <div className={cx('wrapper')}>
            <GetStart
                title={'Design your own beautiful brand'}
                desc={"Use Looka's AI-powered platform to design a logo and build a brand you love."}
            />
            <CarouselComp />
            <div className="hidden brand bg-[#f4f6f8] p-[40px] w-full md:block">
                <div className="flex justify-around items-center w-full px-[16px]">
                    {imgFlex.map((img) => (
                        <img className="max-w-[135px] flex items-center mx-[8px]" alt="" src={img.src} key={img.id} />
                    ))}
                </div>
            </div>
            <div className="layout mt-[160px]">
                <div className="layout-headline text-center mx-auto font-bold mb-[72px] leading-[52px] text-[var(--text-color)] max-w-[670px] text-[40px] ">
                    The easiest way to design and launch your new business
                </div>
                <div className="flex gap-[160px] flex-col">
                    <div className="wrapper w-full items-center flex flex-col md:flex-row mx-auto px-[32px] gap-20">
                        <div className="layout-img w-full md:w-[57%]">
                            <img
                                src="https://cdn.logojoy.com/wp-content/uploads/20210211103713/Kardia-Brand-Logo-Creation-Compressed.jpg"
                                alt=""
                                className=""
                            />
                        </div>
                        <div className="layout-text w-full md:w-[462px]">
                            <div className="step font-bold text-[30px] leading-[38px]">
                                <span className="number text-[#5340ff]">01.</span> Make a logo in minutes
                            </div>
                            <div className="layout-desc my-[24px] text-[#676e8b] font-medium text-[16px]">
                                Forget looking generic! Looka’s software is powered by AI to create a logo that matches
                                your vision — no design skills required. Generate endless options, and tweak designs to
                                get exactly what you want.
                            </div>
                            <Button primary small className={'text-[1.4rem]'}>
                                Get started
                            </Button>
                        </div>
                    </div>
                    <div className="wrapper w-full items-center flex flex-col md:flex-row mx-auto px-[32px] gap-20">
                        <div className="layout-img w-full md:w-[57%] md:order-2">
                            <img
                                src="https://cdn.logojoy.com/wp-content/uploads/20210211103731/Kardia-Brand-Business-Cards-Compressed.jpg"
                                alt=""
                                className=""
                            />
                        </div>
                        <div className="layout-text w-full md:w-[462px]">
                            <div className="step font-bold text-[30px] leading-[38px]">
                                <span className="number text-[#5340ff]">02.</span> Bring your brand to life
                            </div>
                            <div className="layout-desc my-[24px] text-[#676e8b] font-medium text-[16px]">
                                With your logo design finalized, it’s time to start building your brand identity.
                                Looka’s Brand Kit uses your logo, colors, and fonts to instantly create hundreds of
                                branded marketing materials—all in one spot.
                            </div>
                            <Button primary small className={'text-[1.4rem]'}>
                                Get started
                            </Button>
                        </div>
                    </div>
                    <div className="wrapper w-full items-center flex flex-col md:flex-row mx-auto px-[32px] gap-20">
                        <div className="layout-img w-full md:w-[57%]">
                            <img
                                src="https://cdn.logojoy.com/wp-content/uploads/20210211103812/Kardia-Brand-Website-Compressed.jpg"
                                alt=""
                                className=""
                            />
                        </div>
                        <div className="layout-text w-full md:w-[462px]">
                            <div className="step font-bold text-[30px] leading-[38px]">
                                <span className="number text-[#5340ff]">03.</span> Market your business
                            </div>
                            <div className="layout-desc my-[24px] text-[#676e8b] font-medium text-[16px]">
                                Choose from 300+ templates made to match your brand identity and industry. Customize the
                                design of your brand’s business cards, social profiles, email signatures, and more in
                                the Brand Kit’s easy-to-use editor.
                            </div>
                            <Button primary small className={'text-[1.4rem]'}>
                                Get started
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <GetStart
                className={'bg-[#f4f6f8] mt-[160px]'}
                classNameInput={true}
                fontText={true}
                title={"Make a logo you'll be proud of"}
                // desc={"Use Looka's AI-powered platform to design a logo and build a brand you love."}
            />
            <div className="md:mt-[16rem] mt-[8.8rem] px-[2.4rem]">
                <div className="text-[var(--text-color)] text-[3rem] md:text-[4rem] leading-[50px] font-bold text-center">
                    Looka is your personal designer
                </div>
                <div className="text-[#676e8b] text-[1.6rem] md:px-[2.4rem] max-w-[83.2rem] text-center mx-auto mt-[1.6rem]">
                    Looka gives you everything you need to launch your brand and look great from day one. The best part?
                    Artificial intelligence does the heavy graphic design lifting, you have the creative control.
                </div>
            </div>
            <div className="ct-list-3-col-wrapper">
                {cardData.map((card, index) => (
                    <Card key={index} card={card} />
                ))}
            </div>
            <div className="video">
                <div className="video-heading text-[var(--text-color)] text-[3rem] md:text-[4rem] leading-[50px] font-bold text-center mb-[5rem] mt-[10rem]">
                    See how to bring your vision to life
                </div>
                <div className="video-content relative max-w-[120rem] mx-auto rounded-2xl cursor-pointer overflow-hidden">
                    <img
                        alt=""
                        src="https://cdn.logojoy.com/wp-content/uploads/20201113113025/Looka_Explainer_Image_Compressed.jpg"
                        className=""
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50 w-[8.8rem] h-[8.8rem] bg-white rounded-full flex items-center justify-center">
                        <img
                            className="ml-3"
                            src="https://looka.com/wp-content/themes/looka/images/icons/ic_play.svg"
                            alt=""
                        />
                    </div>
                </div>
                {/* <iframe
                    class="video__iframe"
                    dataVideoid="zcoSY-bVxAk"
                    frameborder="0"
                    allowfullscreen="1"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
title="YouTube video player"
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/zcoSY-bVxAk?autoplay=1&amp;modestbranding=1&amp;color=white&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Flooka.com&amp;widgetid=1"
                    id="widget2"
                ></iframe> */}
            </div>
            <GetStart
                title={"Turn your creative vision into a business and brand you'll love"}
                fontText={true}
                classNameInput
                className="bg-[#f4f6f8] my-[16rem]"
            />

            {/* demo // item-product */}
            <div className="demo">
                <div className="demo-heading text-[3rem] md:text-[4rem] text-center w-full font-bold mb-[7.2rem] px-[2.4rem] md:px-0">
                    Cool brands designed with Looka
                </div>
                <div className="demo-wrapper md:flex px-[3.2rem] gap-[4rem] justify-center">
                    <div className="col-left basic-1/2">
                        <div className="wrapper">
                            <div className="w-full md:h-[39rem] lg:h-[55.3rem]">
                                <img
                                    src="https://cdn.logojoy.com/wp-content/uploads/20201113144110/Spoon_Fork_Compressed.jpg"
                                    alt=""
                                    className="w-full h-full"
                                />
                            </div>
                            <div className="ct-item-decs-product">Spoon & Fork</div>
                            <div className="ct-item-text-product">New York, USA</div>
                        </div>
                        <div className="wrapper">
                            <div className="w-full md:h-[48rem] lg:h-[61.8rem]">
                                <img
                                    src="https://cdn.logojoy.com/wp-content/uploads/20201113144148/Vivox_Compressed.jpg"
                                    alt=""
                                    className="w-full h-full"
                                />
                            </div>
                            <div className="ct-item-decs-product">Spoon & Fork</div>
                            <div className="ct-item-text-product">New York, USA</div>
                        </div>
                        <div className="wrapper">
                            <div className="w-full md:h-[57.6rem] lg:h-[74.5rem]">
                                <img
                                    src="https://cdn.logojoy.com/wp-content/uploads/20201113144211/Gravity_Wave_Compressed.jpg"
                                    alt=""
                                    className="w-full h-full"
                                />
                            </div>
                            <div className="ct-item-decs-product">Spoon & Fork</div>
                            <div className="ct-item-text-product">New York, USA</div>
                        </div>
                    </div>
                    <div className="col-right basic-1/2">
                        <div className="wrapper">
                            <div className="w-full md:h-[48rem] lg:h-[61.8rem]">
                                <img
                                    src="https://cdn.logojoy.com/wp-content/uploads/20201113144229/Spacebox_Compressed.jpg"
                                    alt=""
                                    className="w-full h-full"
                                />
                            </div>
                            <div className="ct-item-decs-product">Spoon & Fork</div>
                            <div className="ct-item-text-product">New York, USA</div>
                        </div>
                        <div className="wrapper">
                            <div className="w-full md:h-[57.6rem] lg:h-[74.5rem]">
                                <img
                                    src="https://cdn.logojoy.com/wp-content/uploads/20201113144302/Altessa_Compressed.jpg"
                                    alt=""
                                    className="w-full h-full"
                                />
                            </div>
                            <div className="ct-item-decs-product">Spoon & Fork</div>
                            <div className="ct-item-text-product">New York, USA</div>
                        </div>
                        <div className="wrapper">
                            <div className="w-full md:h-[39rem] lg:h-[55.3rem]">
                                <img
                                    src="https://cdn.logojoy.com/wp-content/uploads/20201113144325/Shadow_Box_Compressed.jpg"
                                    alt=""
                                    className="w-full h-full"
                                />
                            </div>
                            <div className="ct-item-decs-product">Spoon & Fork</div>
                            <div className="ct-item-text-product">New York, USA</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="build-your-brand mt-[12rem] md:mt-[16rem] px-[2.4rem]">
                <div className="title text-[var(--text-color)] text-[3rem] md:text-[4rem] md:leading-[50px] font-bold text-center">
                    We’re here to help build your brand
                </div>
                <div className="desc text-[#676e8b] text-[1.6rem] md:px-[2.4rem] max-w-[83.2rem] text-center mx-auto mt-[1.6rem]">
                    Looka’s fun and friendly in-house customer success team is available via live chat and email to
                    answer all your questions. Get help accessing files, tweaking your logo designs, and more!
                </div>
                <div className="brand-img mb-[4rem] mt-[5rem]">
                    <img
                        src="https://cdn.logojoy.com/wp-content/uploads/20201113145312/CS_Team_Compressed.jpg"
                        alt=""
                        className=""
                    />
                </div>
                <div className="flex justify-center">
                    <Button medium text className={'!px-16 '}>
                        Contact us
                    </Button>
                </div>
            </div>
            <div className="learn-about-desgin mt-[12rem] mv-[4rem] md:mt-[16rem]">
                <div className="title text-[var(--text-color)] text-[3rem] md:text-[4rem] md:leading-[50px] font-bold text-center">
                    Learn about design, branding & entrepreneurship
                </div>
                <div className="ct-list-3-col-wrapper md:gap-3">
                    {brandData.map((brand, index) => (
                        <Brand key={index} brand={brand} />
                    ))}
                </div>
            </div>
            <GetStartFlex
                black
                fontText
                className={'bg-[var(--primary-color)]'}
                title={'Get started for free!'}
                desc={"Then use Looka's AI-powered platform to make a logo, business cards & more!"}
            />
            {showMenu && <ModalLogin />}

        </div>
    );
}

export default Home;
