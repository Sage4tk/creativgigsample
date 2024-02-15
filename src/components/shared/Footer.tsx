const Footer:React.FC = () => {
    return (
        <>
        <div className="flex flex-col items-center bg-[#F4EFFF] py-[66px]">
            <div className="flex flex-row items-center justify-between w-[1200px]">
                
                <div className="flex-col items-center">
                    <img className="mx-auto mb-[18px]" src="/img/logo.svg" />

                    <p className="text-center w-[320px] text-[#303030]">We are a team of talented and passionate professionals who are dedicated to delivering exceptional creative solutions. From captivating graphic designs to stunning illustrations, our agency is here to bring your ideas to life.</p>
                </div>

                <div className="flex-grow flex flex-row justify-between px-[77px]">

                    <div className="flex flex-col">
                        <p className="text-main text-[1.125rem] font-bold mb-[13px]">Categories</p>


                        <ul className="text-[#303030] text-[0.875rem]">
                            <li className="mb-[11px]">
                                <a href="/#">Logo & Identity</a>
                            </li>
                            <li className="mb-[11px]">
                                <a href="/#">UI/UX Design</a>
                            </li>
                            <li className="mb-[11px]">
                                <a href="/#">Digital Marketing</a>
                            </li>
                            <li className="mb-[11px]">
                                <a href="/#">Print Design</a>
                            </li>
                            <li className="mb-[11px]">
                                <a href="/#">Product and packaging</a>
                            </li>
                            <li className="mb-[11px]">
                                <a href="/#">Outdoor and signage</a>
                            </li>
                            <li>
                                <a href="/#">Art and Illustration</a>
                            </li>
                        </ul>

                    </div>
                    <div className="flex flex-col">
                        <p className="text-main text-[1.125rem] font-bold mb-[13px]">I need a design</p>


                        <ul className="text-[#303030] text-[0.875rem]">
                            <li className="mb-[11px]">
                                <a href="/#">Logo design</a>
                            </li>
                            <li className="mb-[11px]">
                                <a href="/#">Web page design</a>
                            </li>
                            <li className="mb-[11px]">
                                <a href="/#">Business card design</a>
                            </li>
                            <li className="mb-[11px]">
                                <a href="/#">Graphic design</a>
                            </li>
                            <li className="mb-[11px]">
                                <a href="/#">Brochure design</a>
                            </li>
                            <li className="mb-[11px]">
                                <a href="/#">T-shirt design</a>
                            </li>
                            <li className="mb-[11px]">
                                <a href="/#">Poster design</a>
                            </li>
                            <li>
                                <a href="/#">All design services</a>
                            </li>
                        </ul>

                    </div>
                    <div className="flex flex-col">
                        <p className="text-main text-[1.125rem] font-bold mb-[13px]">Categories</p>


                        <ul className="text-[#303030] text-[0.875rem]">
                            <li className="mb-[11px]">
                                <a href="/#">Logo & Identity</a>
                            </li>
                            <li className="mb-[11px]">
                                <a href="/#">UI/UX Design</a>
                            </li>
                            <li className="mb-[11px]">
                                <a href="/#">Digital Marketing</a>
                            </li>
                            <li className="mb-[11px]">
                                <a href="/#">Print Design</a>
                            </li>
                            <li className="mb-[11px]">
                                <a href="/#">Product and packaging</a>
                            </li>
                            <li className="mb-[11px]">
                                <a href="/#">Outdoor and signage</a>
                            </li>
                            <li>
                                <a href="/#">Art and Illustration</a>
                            </li>
                        </ul>

                    </div>

                </div>

                <div className="flex flex-col">
                    <img className="cursor-pointer" src="/img/icons/socials/ig.svg" />
                    <img className="py-[24px] cursor-pointer" src="/img/icons/socials/fb.svg" />
                    <img className="cursor-pointer" src="/img/icons/socials/twitter.svg" />
                </div>
                
            </div>

        </div>
        <div className="flex flex-col items-center bg-main justify-center py-[20px]">
            <p className="text-white text-[0.875rem]">Copyright © 2023 All rights are reserved Creative Gig. Trademarks and brands are the property of their respective owners.</p>
        </div>
        </>
    )
}

export default Footer;