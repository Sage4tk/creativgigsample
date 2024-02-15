
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
    <div className="bg-white rounded-[6px] mx-[13px] w-[308px] p-[34px] custom-shadow flex flex-col items-center">

        <img className="pb-[18px]" src={img} />

        <p className="text-center text-main text-[1.5rem] font-bold mb-[18px] leading-8">{title}</p>
        
        <p className="text-center text-[#303030]">{description}</p>

    </div>
)

export default BuildBrandCard;