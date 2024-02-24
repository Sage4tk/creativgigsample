interface ISideBarSectionProps {
    title:string,
    icon: string,
    active?:boolean

}

const SideBarSection:React.FC<ISideBarSectionProps> = ({
    title,
    icon,
    active
}) => {
    return (
        <div className={`flex flex-row items-center px-[19px] py-[15px] ${active && "bg-[#FCF8F8]"} border-b border-b-[#CACACA] pr-[42px]`}>
            <img className="mr-[10px]" src={icon} />

            <span className="text-[#545454] lg:text-[1.125rem] text-[1rem]">{title}</span>
        </div>
    )
}

export default SideBarSection;