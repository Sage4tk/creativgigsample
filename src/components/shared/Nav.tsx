import { useState } from "react";
import { Link } from "react-router-dom";
import check_mobile from "../../util/check_mobile";

interface INavProps {
    current?: string 
}

const Nav:React.FC<INavProps> = ({
    current
}) => {



    /** STATES **/
    const [navOpen, setNavOpen] = useState<boolean>(false);
    const [currencyHover, setCurrencyHover] = useState<boolean>(false);
    const [categoriesHover, setCategoriesHover] = useState<boolean>(false); 

    const categories_hover = (inside:boolean):void => {
        // check if client is mobile first
        if (!check_mobile()) {
            setCategoriesHover(inside);
        }
    }

    const currency_hover = (inside:boolean):void => {
        // check if client is mobile first
        if (!check_mobile()) {
            setCurrencyHover(inside);
        }
    }

    return (
        <div className="">

            

            <div className="bg-main flex flex-col items-center">
                
                <div className="xl:w-[1200px] lg:w-[1000px] py-[8px] flex flex-row justify-between">

                    <div>
                        <span className="text-white lg:text-[1.0625rem] text-[0.8rem]">Become our partner and get up to 90% discount</span>
                    </div>

                    <div className="lg:flex hidden flex-row items-center">

                        <Link to="/" className="flex flex-row items-center">

                        <img src="/img/icons/nav/cart.svg" className="w-[17px] h-[17px] mr-[4px]" />
                            <span className="text-white font-[0.875rem]">Cart</span>
                        </Link>

                        <span className="h-[17px] w-[1px] bg-white mx-[18px]">

                        </span>

                        <div
                            className="relative"
                            onMouseEnter={() => currency_hover(true)}
                            onMouseLeave={() => currency_hover(false)}
                        >

                            <div className="flex flex-row items-center cursor-pointer">

                                <img src="/img/icons/nav/currency.svg" className="w-[17px] h-[17px] mr-[4px]" />
                                <span className="text-white font-[0.875rem]">Currency</span>
                            </div>

                            {
                                currencyHover && (
                                    <div className="absolute z-[1000] bg-white rounded-[4px] border py-[12px]">
                                        
                                        <div className="px-4 flex flex-col items-center">
                                            <p className="font-bold text-main mb-2 text-[0.8rem]">CURRENCIES</p>

                                            <div className="flex flex-row items-center mb-2 cursor-pointer">

                                            <img src="/img/icons/nav/currency.svg" className="w-[14px] h-[14px] mr-2" />
                                                <p className="text-[0.75rem] text-[#303030] min-w-[80px]">DOLLAR</p>
                                            </div>
                                            <div className="flex flex-row items-center mb-2 cursor-pointer">

                                            <img src="/img/icons/nav/currency.svg" className="w-[14px] h-[14px] mr-2" />
                                                <p className="text-[0.75rem] text-[#303030] min-w-[80px]">DOLLAR</p>
                                            </div>
                                            <div className="flex flex-row items-center mb-2 cursor-pointer" >

                                            <img src="/img/icons/nav/currency.svg" className="w-[14px] h-[14px] mr-2" />
                                                <p className="text-[0.75rem] text-[#303030] min-w-[80px]">DOLLAR</p>
                                            </div>
                                            <div className="flex flex-row items-center cursor-pointer">

                                                <img src="/img/icons/nav/currency.svg" className="w-[14px] h-[14px] mr-2" />
                                                <p className="text-[0.75rem] text-[#303030] min-w-[80px]">DOLLAR</p>
                                            </div>
                   
                                        </div>
                                         

                                    </div>
                                )
                            }
                           

                        </div>

                        <span className="h-[17px] w-[1px] bg-white mx-[18px]">

                        </span>

                        <Link to="/profile" className="flex flex-row items-center">

                            <img src="/img/icons/nav/account.svg" className="w-[17px] h-[17px] mr-[4px]" />
                            <span className="text-white font-[0.875rem]">Account</span>
                        </Link>

                        <span className="h-[17px] w-[1px] bg-white mx-[18px]">

                        </span>

                        <Link to="/" className="flex flex-row items-center">

                            <img src="/img/icons/nav/call.svg" className="w-[17px] h-[17px] mr-[4px]" />
                            <span className="text-white font-[0.875rem]">Help Center</span>
                        </Link>


                    </div>

                </div>

            </div>

            <div className="flex flex-col items-center">
                <div className="xl:w-[1200px] lg:w-[1000px] w-full lg:py-[12px] py-[18px] flex flex-row justify-between relative">
                    <Link className="" to={"/"}>
                    <img className="lg:w-[160px] w-[140px] lg:pl-0 pl-[20px]  h-auto" src="/img/logo.svg" />
                    </Link>

                    {/* <div className={`lg:flex lg:w-auto lg:h-auto lg:top-auto lg:left-auto lg:relative flex-row items-center fixed bg-white top-0 left-[${navOpen ? "0px":"100vw"}] w-screen h-screen`}> */}
                    <div className={`lg:flex lg:w-auto lg:h-auto lg:top-auto lg:left-auto lg:relative flex-row items-center fixed bg-white top-0 transition-all ${navOpen ? "left-0":"left-[100vw]"} w-screen h-screen z-20`}>

                        <div className="flex lg:w-auto lg:flex-row xl:mr-[160px] lg:mr-[50px] flex-col items-center w-full p-8 lg:p-0">
                            <div className="lg:mr-[20px] mb-6 lg:mb-0 relative">
                                <Link to={"/"} onMouseOver={() => categories_hover(true)} onMouseOut={() => categories_hover(false)}>
                                    <span className="text-main_text">Categories</span>

                                    {current === "home" && <div className="w-100 bg-other_pink h-[1px] translate-y-1"></div>}
                                </Link>


                                {categoriesHover && (
                                    <div className="absolute py-4 px-3 rounded-[4px] border bg-white z-[100] grid grid-cols-2 left-0 w-[400px] gap-6"> 
                                        <div className="">
                                            <p className="font-bold text-[0.9rem] text-main mb-1">DESIGN</p>

                                            <ul className="text-[#303030] text-[0.8rem] cursor-pointer space-y-2">
                                                <li>Logo Design</li>
                                                <li>Business Card Design</li>
                                                <li>Flyer Design</li>
                                                <li>Brochure Design</li>
                                                <li>Post Card Design</li>
                                            </ul>

                                        </div>
                                        <div className="">
                                            <p className="font-bold text-[0.9rem] text-main mb-1">DESIGN</p>

                                            <ul className="text-[#303030] text-[0.8rem] cursor-pointer space-y-2">
                                                <li>Logo Design</li>
                                                <li>Business Card Design</li>
                                                <li>Flyer Design</li>
                                                <li>Brochure Design</li>
                                                <li>Post Card Design</li>
                                            </ul>

                                        </div>
                                        <div className="">
                                            <p className="font-bold text-[0.9rem] text-main mb-1">DESIGN</p>

                                            <ul className="text-[#303030] text-[0.8rem] cursor-pointer space-y-2">
                                                <li>Logo Design</li>
                                                <li>Business Card Design</li>
                                                <li>Flyer Design</li>
                                                <li>Brochure Design</li>
                                                <li>Post Card Design</li>
                                            </ul>

                                        </div>
                                        <div className="">
                                            <p className="font-bold text-[0.9rem] text-main mb-1">DESIGN</p>

                                            <ul className="text-[#303030] text-[0.8rem] cursor-pointer space-y-2">
                                                <li>Logo Design</li>
                                                <li>Business Card Design</li>
                                                <li>Flyer Design</li>
                                                <li>Brochure Design</li>
                                                <li>Post Card Design</li>
                                            </ul>

                                        </div>
                                        
                                    </div>
                                )}
                            </div>

                            <Link to={"/how"} className="lg:mx-[20px] mb-6 lg:mb-0">
                                <span className="text-main_text">How It Works</span>

                                {current === "how" && <div className="w-100 bg-other_pink h-[1px] translate-y-1"></div>}
                            </Link>

                            <Link to={"/"} className="lg:mx-[20px] mb-6 lg:mb-0">
                                <span className="text-main_text">Become our partner</span>

                                {current === "partner" && <div className="w-100 bg-other_pink h-[1px] translate-y-1"></div>}
                            </Link>

                            <Link to={"/"} className="lg:ml-[20px] mb-6 lg:mb-0">
                                <span className="text-main_text">Contact Us</span>

                                {current === "contact" && <div className="w-100 bg-other_pink h-[1px] translate-y-1"></div>}
                            </Link>

                            


                        </div>

                        {/* <button style={{background: "linear-gradient(273.32deg, #FF35F7 -1.51%, #673DE6 113.89%)"}} className="px-[24px] py-2"> */}
                        <button className=" px-[24px] rounded-[4px] py-[8px] bg-btn-linear flex flex-row items-center mx-auto">
                            <span className="text-white mr-[14px]">Get a quote</span>
                            <img src="/img/icons/arrow1.svg" />
                        </button>
                        <button onClick={() => setNavOpen(bool => !bool)} className="absolute top-4 right-4 lg:hidden">
                            <img src="/img/icons/close.svg" className="h-auto w-[40px]"  />
                        </button>
                    </div>

                    <button  onClick={() => setNavOpen(item => !item)} className="absolute top-[50%] translate-y-[-50%] right-[5%]">
                        <img className="h-auto w-[30px]" src="/img/icons/menu.svg" />
                    </button>

                </div>
            </div>

        </div>
    )
}

export default Nav;