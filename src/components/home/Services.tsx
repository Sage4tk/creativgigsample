const Services:React.FC = () => {
    return (
        <div className="flex flex-col items-center pb-[115px]">

            <div className="xl:w-[1200px] lg:w-[1000px] w-full flex flex-col items-center">

                <h2 className="lg:text-[2.8125rem] text-[1.8125rem] text-[#300390] font-bold mb-[20px] text-center">Our design services</h2>

                <div className="flex md:flex-row flex-col w-full items-center lg:justify-between md:justify-center justify-between mb-[36px] flex-wrap">

                    <div className="lg:w-[18%] h-full m-8 lg:m-0 md:w-[30%] w-[50%] aspect-square rounded-[4px] border border-border flex flex-col items-center py-[35px] md:mb-0 mb-8" >
                        <img className="flex-grow aspect-square" src="/img/icons/service/logodesign.svg"/>


                        <span className="text-center text-[1.125rem] text-[#303030] font-bold mt-4">Logo Design</span>
                    </div>
                    <div className="lg:w-[18%] m-8 lg:m-0 md:w-[30%] w-[50%] aspect-square rounded-[4px] border border-border flex flex-col items-center py-[35px] md:mb-0 mb-8" >
                        <img className="flex-grow aspect-square" src="/img/icons/service/businessdesign.svg"/>


                        <span className="text-center text-[1.125rem] text-[#303030] w-full whitespace-nowrap font-bold mt-4 truncate">Business Card</span>
                    </div>
                    <div className="lg:w-[18%] m-8 lg:m-0 md:w-[30%] w-[50%] aspect-square rounded-[4px] border border-border flex flex-col items-center py-[35px] md:mb-0 mb-8" >
                        <img className="flex-grow aspect-square" src="/img/icons/service/flyerdesign.svg"/>


                        <span className="text-[1.125rem] text-[#303030] font-bold mt-4">Flyer Design</span>
                    </div>
                    <div className="lg:w-[18%] m-8 lg:m-0 md:w-[30%] w-[50%] aspect-square rounded-[4px] border border-border flex flex-col items-center py-[35px] md:mb-0 mb-8" >
                        <img className="flex-grow aspect-square" src="/img/icons/service/brochuerdesign.svg"/>


                        <span className="text-center text-[1.125rem] text-[#303030] font-bold mt-4">Brochure Design</span>
                    </div>
                    <div className="lg:w-[18%] m-8 lg:m-0 md:w-[30%] w-[50%] aspect-square rounded-[4px] border border-border flex flex-col items-center py-[35px] md:mb-0 mb-8" >
                        <img className="flex-grow aspect-square" src="/img/icons/service/postcarddesign.svg"/>


                        <span className="text-center text-[1.125rem] text-[#303030] font-bold mt-4">Post Card</span>
                    </div>

                </div>

                <button className="flex flex-row items-center border-b-[1px] border-pink">
                    <span className="text-[#303030] text-[1.125rem] mr-[8px]">See all services</span>
                    <img src="/img/icons/arrow.svg" />
                </button>

            </div>

        </div>
    )
}

export default Services;