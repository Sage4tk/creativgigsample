import FaqCard from "./cards/FaqCard";

const FAQ:React.FC = () => {
    return (
        <div className="flex flex-col items-center pb-[142px] mt-[96px]">
            
            <div className="w-[1200px] flex flex-col items-center">
                <h5 className="text-[2.8125rem] font-bold text-main pb-[30px]">Frequently asked questions</h5>

                <div className="flex flex-col w-[822px]">
                    <FaqCard title="How does the design process work?" description="Our design process is simple and efficient. First, you provide us with your design requirements and specifications. Our talented creatives then submit their designs based on your brief. Finally, you have the opportunity to review and choose your favorite design from the options presented to you. " />
                    <FaqCard title="Can I provide feedback and make revisions to the designs? " description="Our design process is simple and efficient. First, you provide us with your design requirements and specifications. Our talented creatives then submit their designs based on your brief. Finally, you have the opportunity to review and choose your favorite design from the options presented to you. " />
                    <FaqCard title="How long does it take to receive the design submissions? " description="Our design process is simple and efficient. First, you provide us with your design requirements and specifications. Our talented creatives then submit their designs based on your brief. Finally, you have the opportunity to review and choose your favorite design from the options presented to you. " />
                    <FaqCard title="What if I don't like any of the submitted designs?  " description="Our design process is simple and efficient. First, you provide us with your design requirements and specifications. Our talented creatives then submit their designs based on your brief. Finally, you have the opportunity to review and choose your favorite design from the options presented to you. " />
                    <FaqCard title="Are the designs I receive exclusive to me? " description="Our design process is simple and efficient. First, you provide us with your design requirements and specifications. Our talented creatives then submit their designs based on your brief. Finally, you have the opportunity to review and choose your favorite design from the options presented to you. " />
                    <FaqCard title="What if I need further assistance or have additional questions? " description="Our design process is simple and efficient. First, you provide us with your design requirements and specifications. Our talented creatives then submit their designs based on your brief. Finally, you have the opportunity to review and choose your favorite design from the options presented to you. " bottom />
                </div>
            </div>
        </div>
    )
}

export default FAQ;