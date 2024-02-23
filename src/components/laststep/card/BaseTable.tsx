interface IBaseTableProps {
    title: string,
    children: React.ReactNode
}

const BaseTable:React.FC<IBaseTableProps> = ({
    title,
    children
}) => {
    return (
        <div className="flex flex-col lg:flex-row">
            
            <div className="border-[0.5px] border-[#9E9E9E] py-[13px] px-[17px] lg:w-[240px] w-full">
                <span className="text-[1rem] text-main font-bold">{title}</span>
            </div>

            <div className="border-[0.5px] border-[#9E9E9E] py-[13px] px-[17px] lg:flex-grow">
                {children}
            </div>

        </div>
    )
}

export default BaseTable;