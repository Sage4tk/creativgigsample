
interface IMainSquareProps {
    title: string,
    icon: string
}

const MainSquare:React.FC<IMainSquareProps> = ({
    title,
    icon
}) => {
    return (
        <div className="lg:h-[158px] h-[140px]  flex flex-col items-center justify-center bg-[#FFFBFB] border border-[#CACACA] rounded-[4px]">
            <img src={icon} className="lg:w-[48px] w-[30px] aspect-square mb-2" />
            <p className="lg:text-[1.125rem] text-[0.875rem] text-[#545454]">{title}</p>
        </div>
    )
}

export default MainSquare;