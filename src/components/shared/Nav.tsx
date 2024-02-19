import { useState } from "react";

const Nav:React.FC = () => {

    /** STATES **/
    const [navOpen, setNavOpen] = useState<boolean>(false);

    return (
        <div className="">

            

            <div className="bg-main flex flex-col items-center">
                
                <div className="xl:w-[1200px] lg:w-[1000px] py-[8px] flex flex-row justify-between">

                    <div>
                        <span className="text-white lg:text-[1.0625rem] text-[0.8rem]">Become our partner and get up to 90% discount</span>
                    </div>

                    <div className="lg:flex hidden flex-row items-center">

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
                <div className="xl:w-[1200px] lg:w-[1000px] w-full lg:py-[12px] py-[18px] flex flex-row justify-between">

                    <img onClick={() => setNavOpen(item => !item)} className="w-[181px] h-[62.03px] lg:mx-0 mx-auto" src="/img/logo.svg" />

                    {/* <div className={`lg:flex lg:w-auto lg:h-auto lg:top-auto lg:left-auto lg:relative flex-row items-center fixed bg-white top-0 left-[${navOpen ? "0px":"100vw"}] w-screen h-screen`}> */}
                    <div className={`lg:flex lg:w-auto lg:h-auto lg:top-auto lg:left-auto lg:relative flex-row items-center fixed bg-white top-0 transition-all ${navOpen ? "left-0":"left-[100vw]"} w-screen h-screen`}>

                        <div className="flex lg:w-auto lg:flex-row xl:mr-[160px] lg:mr-[50px] flex-col items-center w-full p-8 lg:p-0">

                            <div className="lg:mr-[20px] mb-6 lg:mb-0">
                                <span className="text-main_text">Categories</span>

                                <div className="w-100 bg-other_pink h-[1px] translate-y-1"></div>
                            </div>

                            <div className="lg:mx-[20px] mb-6 lg:mb-0">
                                <span className="text-main_text">How It Works</span>

                                {/* <div className="w-100 bg-other_pink h-[1px] translate-y-1"></div> */}
                            </div>

                            <div className="lg:mx-[20px] mb-6 lg:mb-0">
                                <span className="text-main_text">Become our partner</span>

                                {/* <div className="w-100 bg-other_pink h-[1px] translate-y-1"></div> */}
                            </div>

                            <div className="lg:ml-[20px] mb-6 lg:mb-0">
                                <span className="text-main_text">Contact Us</span>

                                {/* <div className="w-100 bg-other_pink h-[1px] translate-y-1"></div> */}
                            </div>

                            



                        </div>

                        {/* <button style={{background: "linear-gradient(273.32deg, #FF35F7 -1.51%, #673DE6 113.89%)"}} className="px-[24px] py-2"> */}
                        <button className=" px-[24px] rounded-[4px] py-[8px] bg-btn-linear flex flex-row items-center mx-auto">
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