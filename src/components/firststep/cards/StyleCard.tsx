interface IStyleCardProps {
    img: string,
    title:string
}

const StyleCard:React.FC<IStyleCardProps> = ({
    img,
    title
}) => {
    return (
        <button style={{backgroundImage: `url(${img})`, backgroundSize: "cover"}} className="aspect-square bg-slate-500 rounded-[6px] overflow-hidden">

        </button>
    )
}

export default StyleCard;