import popular from "../../data/popular.json";

const SearchBar:React.FC = () => {
    return (
        <div className="flex flex-col items-center">

            <div className="xl:w-[1200px] lg:w-[1000px] md:w-[600px] w-screen">
                
                <div className="bg-white rounded-[6px]  lg:px-[53px] px-[16px] lg:pt-[36px] pt-[16px] lg:pb-[41px] pb-[24px] border border-border translate-y-[-100px]">

                    <div className="flex flex-row justify-between items-center mb-[13px]">

                        <span className="text-sub lg:text-[2.1875rem] text-[1rem] font-bold">What do you need?</span>

                        <button className="text-[#545454] lg:text-[1.25rem] text-[0.6rem]">
                            See all products
                            <div className="w-full h-[1px] bg-border"></div>
                        </button>

                    </div>

                    <div className="border border-[#CACACA] rounded-[6px] p-[9px] flex flex-row justify-between mb-[18px]">
                        <input placeholder="Example: Business Card" className="lg:text-[1.125rem] text-[0.8rem] flex-grow lg:px-[1rem] px-[0.75rem]" />

                        <button className="bg-sub font-bold lg:text-[1.125rem] text-[0.65rem] text-white rounded-[9px] flex flex-row active:opacity-70">

                            <span className="lg:px-[18px] lg:py-[12px] py-[8px] px-[0px] lg:w-auto w-[75px] ">
                            Get Started Now

                            </span>
                            <div className="bg-main h-full lg:w-[41px] w-[32px] rounded-[9px] flex items-center justify-center">
                                <img className="h-auto w-[10px]" src="/img/icons/go.svg" />
                            </div>
                        </button>
                    </div>

                    <div className="flex flex-row">

                        <span className="lg:text-[1.25rem] text-[1rem] text-[#545454]">Most Popular:</span>

                        <div className="flex-grow px-[18px] flex flex-wrap">
                            {popular.map((item, index) => (
                                <button className="bg-[#B4B4B445] lg:text-[1rem] text-[0.75rem] mb-4 text-[#303030] px-[19px] py-[5px] rounded-[30px] mr-[11px] active:opacity-25" key={index}>
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