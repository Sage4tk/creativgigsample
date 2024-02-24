
interface IBuildBrandProps {
    img: string,
    title: string,
    description: string
}

const BuildBrandCard:React.FC<IBuildBrandProps> = ({
    img,
    title,
    description
}) => (
    <div className="bg-white rounded-[6px] lg:mb-0 mb-10 mx-[13px] xl:w-[308px] lg:w-[30%] w-[80%] p-[34px] custom-shadow flex flex-col items-center">

        <img loading="lazy" className="pb-[18px]" src={img} />

        <p className="text-center text-main md:text-[1.5rem] text-[1.2rem] font-bold mb-[18px] leading-8">{title}</p>
        
        <p className="text-center text-[#303030] md:text-[1rem] text-[0.8rem]">{description}</p>

    </div>
)

export default BuildBrandCard;