function Brand({ brand }) {
    return (
        <div className="ct-item-3-col">
            <div className="rounded-xl overflow-auto cursor-pointer md:w-[36.8rem] md:h-[21.5rem]">
                <img src={brand.img} alt="" className="md:h-full md:w-full" />
            </div>
            <div className="tag text-[#5340ff] text-[1.1rem] uppercase tracking-[0.12rem] cursor-pointer mt-12">
                {brand.title}
            </div>
            <div className="title text-[2.4rem] leading-[3rem] font-bold mt-[0.8rem] hover:underline cursor-pointer">
                {brand.desc}
            </div>
        </div>
    );
}

export default Brand;
