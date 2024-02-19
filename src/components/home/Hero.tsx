const Hero:React.FC = () => {
    return (
        // <div style={{background:"linear-gradient(92.17deg, #673DE6 -0.69%, #C913CD 122.6%)", backgroundImage: "url(/img/herobg.png)", backgroundSize:"cover", backgroundPositionY: -300}} className="h-[586px] rounded-[9px] flex items-center justify-center">
        <div style={{background:"linear-gradient(92.17deg, #673DE6 -0.69%, #C913CD 122.6%)", backgroundImage: "url(/img/herobg.png)", backgroundSize:"cover"}} className="h-[586px] rounded-[9px] flex items-center justify-center">
            <div className="flex flex-col items-center mb-[10%]">
                <h1 className="lg:text-[3.125rem] text-[1.75rem] text-center text-white font-medium"><span className="font-bold">Designers Only Zone</span> <br/>Where Creativity Shines Bright</h1>
                <p className="lg:text-[1.375rem] text-[1rem] lg:px-0 px-4 lg:w-[50%] text-white text-center">Welcome to CreativGig, where it’s all about designers! Here, your creative ideas take flight. Find the perfect fit for your project and make your vision a reality. Let’s bring your imagination to life!”</p>
            </div>
        </div>
    )
}

export default Hero;