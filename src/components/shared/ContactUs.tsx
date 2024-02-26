const ContactUs:React.FC = () => {
    return (
        <div className="flex flex-col items-center">

            <div style={{background:"linear-gradient(92.17deg, #673DE6 -0.69%, #C913CD 122.6%)"}} className="xl:w-[1200px] lg:w-[1000px] w-[calc(100%-40px)] flex lg:flex-row flex-col items-center justify-between relative lg:px-[45px] px-[20px] lg:py-[28px] py-[32px] rounded-[9px]">

                <div className="lg:w-[70%] w-full mb-8 lg:mb-0">
                    <h4 className="lg:text-[2.1875rem] text-[1.8rem] text-white font-bold mb-[12px] text-center lg:text-left">Count Us As Your Extended Team</h4>

                    <p className="lg:text-[1rem] text-[0.9rem] text-white text-center lg:text-left">We will be happy to be your extended team, working with your internal team to make your online presence as effective and engaging as possible.</p>
                </div>

                <button style={{boxShadow:"0px 0px 34.79999923706055px 0px #00000040"}} className="text-main lg:text-[1.375rem] text-[1rem] rounded-[100px] font-bold px-[26px] py-[12px] bg-white w-[270px]">
                Become our partner
                </button>

            </div>
        </div>
    )
}

export default ContactUs;