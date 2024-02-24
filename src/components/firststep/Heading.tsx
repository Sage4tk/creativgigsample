interface IHeadingProps {
    title: string,
    noBottom?: boolean
}

const Heading:React.FC<IHeadingProps> = ({
    title,
    noBottom
}) => {
    return (
        <div style={{background:"linear-gradient(97.46deg, #7F43FF 7.46%, #C913CD 129.09%)"}} className={`pt-[42px] ${noBottom ? "pb-[42px]":"pb-[70px]"}`}>
            <h1 className="text-white font-bold text-center md:text-[3.125rem] text-[2rem]">{title}</h1>
        </div>
    )
}

export default Heading;