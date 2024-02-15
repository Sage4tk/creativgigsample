const Services:React.FC = () => {
    return (
        <div className="flex flex-col items-center pb-[115px]">

            <div className="w-[1200px] flex flex-col items-center">

                <h2 className="text-[2.8125rem] text-[#300390] font-bold mb-[20px]">Our design services</h2>

                <div className="flex flex-row w-full justify-between mb-[36px]">

                    <div className="w-[18%] aspect-square rounded-[4px] border border-border flex flex-col items-center py-[35px]" >
                        <img className="flex-grow aspect-square" src="/img/icons/service/logodesign.svg"/>


                        <span className="text-[1.125rem] text-[#303030] font-bold mt-4">Logo Design</span>
                    </div>
                    <div className="w-[18%] aspect-square rounded-[4px] border border-border flex flex-col items-center py-[35px]" >
                        <img className="flex-grow aspect-square" src="/img/icons/service/businessdesign.svg"/>


                        <span className="text-[1.125rem] text-[#303030] font-bold mt-4">Business Card Design</span>
                    </div>
                    <div className="w-[18%] aspect-square rounded-[4px] border border-border flex flex-col items-center py-[35px]" >
                        <img className="flex-grow aspect-square" src="/img/icons/service/flyerdesign.svg"/>


                        <span className="text-[1.125rem] text-[#303030] font-bold mt-4">Flyer Design</span>
                    </div>
                    <div className="w-[18%] aspect-square rounded-[4px] border border-border flex flex-col items-center py-[35px]" >
                        <img className="flex-grow aspect-square" src="/img/icons/service/brochuerdesign.svg"/>


                        <span className="text-[1.125rem] text-[#303030] font-bold mt-4">Brochure Design</span>
                    </div>
                    <div className="w-[18%] aspect-square rounded-[4px] border border-border flex flex-col items-center py-[35px]" >
                        <img className="flex-grow aspect-square" src="/img/icons/service/postcarddesign.svg"/>


                        <span className="text-[1.125rem] text-[#303030] font-bold mt-4">Post Card</span>
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