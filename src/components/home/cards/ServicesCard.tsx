interface IServicesCardProps {
    title: string,
    img: string
}

const ServicesCard:React.FC<IServicesCardProps> = ({
    title,
    img
}) => {
    return (
        <div className="aspect-square rounded-[4px] border border-border flex flex-col items-center justify-center py-[35px] hover:shadow-xl" >
            <img className="w-[50%] aspect-square" src={img}/>


            <span className="text-center text-[1rem] text-[#303030] font-bold mt-4">{title}</span>
        </div>
    )
}

export default ServicesCard;