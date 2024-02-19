interface IBodyCardProps {
    header: string,
    contents: Array<string>,
    img: string,
    reversed: boolean
}

const BodyCard:React.FC<IBodyCardProps> = ({
    header,
    contents,
    img,
    reversed
}) => {
    return (
        <div className={`flex ${reversed ? "lg:flex-row":"lg:flex-row-reverse"} flex-col justify-between items-center w-full`}>
            <div className={`lg:w-[50%] flex flex-row ${!reversed ? "justify-end":"justify-start"} lg:mb-0 mb-4`}>
                <img className="lg:w-[90%] w-full" src={img} />
            </div>
            <div className="lg:w-[45%] w-full">
                <h3 className="text-main text-[1.875rem] font-bold mb-[16px] text-center lg:text-left">{header}</h3>

                <ul>

                    {contents.map((item, index) => (
                        <li key={index} className="flex flex-row items-baseline text-[0.875rem] text-[#303030] mb-4 px-8 lg:px-4">
                            <img className="mr-[10px] w-[14px] h-auto" src="/img/icons/pointer.svg" />
                            {item}
                        </li>
                    ))}

                </ul>
            </div>
        </div>
    )
}

export default BodyCard;