import popular from "../../data/popular.json";

const SearchBar:React.FC = () => {
    return (
        <div className="flex flex-col items-center">

            <div className="w-[1200px]">
                
                <div className="bg-white rounded-[6px] px-[53px] pt-[36px] pb-[51px] border border-border translate-y-[-100px]">

                    <div className="flex flex-row justify-between items-center mb-[13px]">

                        <span className="text-sub text-[2.1875rem] font-bold">What do you need?</span>

                        <button className="text-[#545454] text-[1.25rem]">
                            See all products
                            <div className="w-full h-[1px] bg-border"></div>
                        </button>

                    </div>

                    <div className="border border-[#CACACA] rounded-[6px] p-[9px] flex flex-row justify-between mb-[18px]">
                        <input placeholder="Example: Business Card" className="text-[1.125rem] flex-grow px-[1rem]" />

                        <button className="bg-sub font-bold text-[1.125rem] text-white rounded-[9px] flex flex-row active:opacity-70">

                            <span className="px-[18px] py-[12px]">
                            Get Started Now

                            </span>
                            <div className="bg-main h-full w-[41px] rounded-[9px] flex items-center justify-center">
                                <img src="/img/icons/go.svg" />
                            </div>
                        </button>
                    </div>

                    <div className="flex flex-row">

                        <span className="text-[1.25rem] text-[#545454]">Most Popular:</span>

                        <div className="flex-grow px-[18px] flex flex-wrap">
                            {popular.map((item, index) => (
                                <button className="bg-[#B4B4B445] text-[#303030] px-[19px] py-[5px] rounded-[30px] mr-[11px] active:opacity-25" key={index}>
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default SearchBar;