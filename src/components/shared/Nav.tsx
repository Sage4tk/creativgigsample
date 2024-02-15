const Nav:React.FC = () => {
    return (
        <div className="">

            

            <div className="bg-main flex flex-col items-center">
                
                <div className="w-[1200px] py-[8px] flex flex-row justify-between">

                    <div>
                        <span className="text-white text-[1.0625rem]">Become our partner and get up to 90% discount</span>
                    </div>

                    <div className="flex flex-row items-center">

                        <div className="flex flex-row items-center">

                        <img src="/img/icons/nav/cart.svg" className="w-[17px] h-[17px] mr-[4px]" />
                            <span className="text-white font-[0.875rem] font-normal">Cart</span>
                        </div>

                        <span className="h-[17px] w-[1px] bg-white mx-[18px]">

                        </span>

                        <div className="flex flex-row items-center">

                            <img src="/img/icons/nav/currency.svg" className="w-[17px] h-[17px] mr-[4px]" />
                            <span className="text-white font-[0.875rem]">Currency</span>
                        </div>

                        <span className="h-[17px] w-[1px] bg-white mx-[18px]">

                        </span>

                        <div className="flex flex-row items-center">

                        <img src="/img/icons/nav/account.svg" className="w-[17px] h-[17px] mr-[4px]" />
                            <span className="text-white font-[0.875rem]">Account</span>
                        </div>

                        <span className="h-[17px] w-[1px] bg-white mx-[18px]">

                        </span>

                        <div className="flex flex-row items-center">

                        <img src="/img/icons/nav/call.svg" className="w-[17px] h-[17px] mr-[4px]" />
                            <span className="text-white font-[0.875rem]">Help Center</span>
                        </div>


                    </div>

                </div>

            </div>

            <div className="flex flex-col items-center">
                <div className="w-[1200px] py-[12px] flex flex-row justify-between">


                    {/* <div className="w-[181px] h-[62.03px] bg-gray-400">

                    </div> */}

                    <img className="w-[181px] h-[62.03px]" src="/img/logo.svg" />

                    <div className="flex flex-row items-center">

                        <div className="flex flex-row mr-[160px]">

                            <div className="mr-[20px]">
                                <span className="text-main_text">Categories</span>

                                <div className="w-100 bg-other_pink h-[1px] translate-y-1"></div>
                            </div>

                            <div className="mx-[20px]">
                                <span className="text-main_text">How It Works</span>

                                {/* <div className="w-100 bg-other_pink h-[1px] translate-y-1"></div> */}
                            </div>

                            <div className="mx-[20px]">
                                <span className="text-main_text">Become our partner</span>

                                {/* <div className="w-100 bg-other_pink h-[1px] translate-y-1"></div> */}
                            </div>

                            <div className="ml-[20px]">
                                <span className="text-main_text">Contact Us</span>

                                {/* <div className="w-100 bg-other_pink h-[1px] translate-y-1"></div> */}
                            </div>

                            



                        </div>

                        {/* <button style={{background: "linear-gradient(273.32deg, #FF35F7 -1.51%, #673DE6 113.89%)"}} className="px-[24px] py-2"> */}
                        <button className=" px-[24px] rounded-[4px] py-[8px] bg-btn-linear flex flex-row items-center">
                            <span className="text-white mr-[14px]">Get a quote</span>
                            <img src="/img/icons/arrow1.svg" />
                        </button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Nav;