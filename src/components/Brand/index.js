function Brand({ brand }) {
    return (
        <div className="ct-item-3-col">
            <div className="rounded-xl overflow-auto cursor-pointer">
                <img src={brand.img} alt="" className="" />
            </div>
            <div className="tag text-[#5340ff] text-[1.1rem] uppercase tracking-[0.12rem] cursor-pointer mt-2 md:mt-1">
                {brand.title}
            </div>
            <div className="title text-[2.4rem] leading-[3rem] font-bold mt-[0.8rem] hover:underline cursor-pointer">
                {brand.desc}
            </div>
        </div>
    );
}

export default Brand;
