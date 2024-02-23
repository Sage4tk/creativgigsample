import BaseTable from "./card/BaseTable";

const Table:React.FC = () => {
    return (
        <div className="w-full flex flex-col items-center px-4 lg:px-0">
            <div className="w-full lg:w-[903px] border-[0.5px] border-[#9E9E9E] rounded-[4px] overflow-hidden">
                <BaseTable title="Service Name">
                    
                    <span className="text-[#545454] text-[0.875rem]">Logo Design</span>
                </BaseTable>
                <BaseTable title="Service order details">
                    <div></div>
                </BaseTable>
            </div>
        </div>
    )
}

export default Table;