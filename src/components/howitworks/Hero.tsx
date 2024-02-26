const Hero:React.FC = () => {

    const redirect_form = ():void => {
        window.location.href = "/form";
    }

    return (
        <div style={{background: "linear-gradient(277.81deg, #DF15D7 -1.17%, #673DE6 92.93%)"}} className="flex flex-col items-center">

            <div className="xl:w-[1200px] lg:w-[1000px] w-full flex flex-col items-center relative">
                
                <div className="flex flex-row py-[87px] relative">


                    <div>
                        <h1 className="lg:text-[2.9375rem] text-[2rem] px-4 lg:px-0 text-white font-bold mb-3 md:text-left text-center">Stand Out with Stunning Business Card Designs</h1>
                        <p className="lg:text-[1.3125rem] text-[1rem] px-4 lg:px-0 text-white pb-10 md:text-left text-center">Make a lasting impression with our custom business card designs that captivate attention and leave a lasting impact. At Creative Gig, we specialize in creating unique and eye-catching business cards that help you stand out from the competition.</p>

                        <button onClick={redirect_form} className="bg-[#DF15D7] lg:text-[1.5625rem] text-[1rem] rounded-[4px] text-white flex flex-row items-stretch justify-self-end mx-auto md:mx-0 hover:shadow active:opacity-80">


                            
                            <div className="px-[22px] py-[16px] ">Get Started Now</div>

                            <div className="rounded-[4px] bg-border flex items-center justify-center px-[20px]">
                                <img className="lg:h-[25px] h-[20px] w-auto" src="/img/icons/go.svg" />
                            </div>
                            
                        </button>
                    </div>

                    <img className="h-auto w-[45%] hidden md:block" src="/img/h-hero.svg" />

                </div>



                <a href="#main_body" className="bg-[#DF15D7] lg:w-[75px] lg:h-[75px] w-[40px] h-[40px] flex items-center justify-center animate-bounce lg:bottom-[-37px] bottom-[-20px] rounded-full absolute z-10">
                    <img draggable={false} className="lg:w-[30px] w-[15px] h-auto" src="/img/icons/down.svg" />

                </a>

            </div>

        </div>
    )
}

export default Hero;