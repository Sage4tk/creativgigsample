import { IBasicFormProp } from "./interface";


const InputForm:React.FC<IBasicFormProp> = ({
    form,
    setForm
}) => {

    const input_listener = (event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {        
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div className="flex flex-col items-center w-full">

            <div className="w-full lg:w-[787px] md:w-[500px] flex-col items-center pt-[68px]">


                <div className="pb-[24px]">
                    <h2 className="text-other_pink lg:text-[2.1875rem] text-[1.4rem] font-bold text-center mb-[4px]">Tell us about your Logo project</h2>
                    <p className="text-[#303030] text-center lg:text-[1rem] text-[0.8rem]">Answer these important questions to help creatives understand what you need.</p>
                </div>

                <form className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] md:px-0 px-6">



                    <div className="flex flex-col">

                        
                            
                        <div className="mb-[24px]">

                            <label className="text-main text-[1.125rem] font-bold mb-2">What name do you want in your logo?</label>

                            <p className="text-[#303030] text-[0.875rem] mb-4">This is important. Please carefully check spelling.</p>

                            <input name="name" onChange={input_listener} className="h-[47px] border border-[#e0e0e0] rounded-[4px] w-full px-4" />

                        </div>

                        <div className="flex-grow flex flex-col">

                            <label className="text-main text-[1.125rem] font-bold mb-2">Tell us about your organization and your target audience.</label>

                            <p className="text-[#303030] text-[0.875rem] mb-4">Write brief description of your projects.</p>

                            <textarea name="about" onChange={input_listener} className="flex-grow border border-[#e0e0e0] rounded-[4px] w-full resize-none p-2" />

                        </div>

                        

                    </div>

                    <div className="">

                        <div className="mb-[24px]">

                            <label className="text-main text-[1.125rem] font-bold mb-2">What is your industry?</label>

                            <p className="text-[#303030] text-[0.875rem] mb-4">Which industry most closely aligns with your company?</p>

                            <input name="industry" onChange={input_listener} className="h-[47px] border border-[#e0e0e0] rounded-[4px] w-full px-4" />

                        </div>

                        <div className="mb-[24px]">

                            <label className="text-main text-[1.125rem] font-bold mb-2">What 3 most important things you want people to think when they see your logo?</label>

                            <p className="text-[#303030] text-[0.875rem] mb-4">Which industry most closely aligns with your company?</p>

                            <input name="important" onChange={input_listener} className="h-[47px] border border-[#e0e0e0] rounded-[4px] w-full px-4" />

                        </div>

                        <div>

                            <label className="text-main text-[1.125rem] font-bold mb-2">Do you want to provide any additional info?</label>

                            <p className="text-[#303030] text-[0.875rem] mb-4">Are there specific design elements you want to see? Is there anything you do not want to see?</p>

                            <input name="additional_info" onChange={input_listener} className="h-[47px] border border-[#e0e0e0] rounded-[4px] w-full px-4" />

                        </div>

                    </div>

                </form>

            </div>

        </div>
    )
}

export default InputForm;