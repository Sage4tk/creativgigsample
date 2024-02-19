const How:React.FC = () => {
    return (
        <div className="flex flex-col items-center">

            <div className="xl:w-[1200px] lg:w-[1000px] w-full flex flex-col items-center pt-[101px]">

                <h6 className="text-main font-bold lg:text-[2.8125rem] text-[1.8125rem] text-center  mb-[42px]">How does Creativ Gig work?</h6>

                <div className="flex lg:flex-row flex-col">

                    <div>
                        <div className="lg:w-[508px] w-full lg:p-0 p-2 flex flex-row">
                            
                            <div className="lg:w-[300px] w-[59%] mr-[9px]">

                                <div style={{backgroundImage: 'url("/img/how/pictwo.png")', backgroundSize: "cover"}} className="h-[265px] mb-[10px] w-full bg-gray-400 rounded-[6px]">

                                </div>

                                <div style={{backgroundImage: 'url("/img/how/picthree.png")', backgroundSize: "cover"}} className="h-[138px] w-full bg-gray-400 rounded-[6px]">

                                </div>

                            </div>

                            <div style={{backgroundImage: 'url("/img/how/picone.png")', backgroundSize: "cover"}} className="bg-gray-400 h-[413px] lg:w-[199px] w-[39%] rounded-[6px]">
                                
                            </div>

                        </div>
                    </div>

                    <div className="flex-grow pl-[28px]">

                        <p className="text-[1.5rem] font-bold text-main mb-[10px]">Tell us your vision</p>

                        <p className="text-[#303030] text-[0.875rem] mb-[1rem]">Share your design requirements and specifications, and let us bring your ideas to life. Our graphic design server empowers you to communicate your needs clearly and effectively.</p>
                        
                        <p className="text-[1.5rem] font-bold text-main mb-[10px]">Unleash the creativity</p>

                        <p className="text-[#303030] text-[0.875rem] mb-[1rem]">Our talented pool of creatives eagerly awaits your design project. They'll craft unique and captivating designs tailored specifically to your requirements. Sit back and watch as a multitude of creative possibilities unfold.</p>

                        <p className="text-[1.5rem] font-bold text-main mb-[10px]">Your perfect pick</p>

                        <p className="text-[#303030] text-[0.875rem] mb-[30px]">With an array of impressive designs at your fingertips, you have the power to choose your favorite. Explore the submitted designs, compare them side by side, and select the one that resonates with your vision. Enjoy the satisfaction of finding the perfect custom design, every time.</p>

                        <button className="flex flex-row items-center border-b-[1px] border-pink">
                            <span className="text-[#303030] text-[1.125rem] mr-[8px]">Place your first order now</span>
                            <img src="/img/icons/arrow.svg" />
                        </button>



                    </div>

                </div>
            </div>

        </div>
    )
}

export default How;