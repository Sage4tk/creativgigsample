import { IBasicFormProp } from "../firststep/interface";
import BaseTable from "./card/BaseTable";
import RowBase from "./card/RowBase";
import STYLE_DATA from "../../data/style_selection.json";
import { useMemo } from "react";

const Table:React.FC<IBasicFormProp> = ({
    form,
}) => {

    // find the style
    const find_style = useMemo(() => {
        const style = STYLE_DATA.find(item => item.title === form.style);

        return style;
        
    }, [form.style]);

    return (
        <div className="w-full flex flex-col items-center px-4 lg:px-0 pb-[500px]">
            <div className="w-full lg:w-[903px] border-[0.5px] border-[#9E9E9E] rounded-[4px] overflow-hidden mb-[31px]">
                <BaseTable title="Service Name">
                    
                    <span className="text-[#545454] text-[0.875rem]">Logo Design</span>
                </BaseTable>
                <BaseTable title="Service order details">

                    <RowBase heading="What name do you want in your logo?" description={form.name} />
                    <RowBase heading="What is your industry?" description={form.industry} />
                    <RowBase heading="Tell us about your organization and your target audience." description={form.about} />
                    <RowBase heading="What 3 most important things you want people to think when they see your logo?" description={form.important} />
                    <RowBase heading="Do you want to provide any additional info?" description={form.additional_info} />

                    <RowBase heading="Which style do you prefer?">
                        {find_style && (
                            <button  style={{backgroundImage: `url(${find_style.img})`, backgroundSize: "cover"}} className={`aspect-square w-[137px] bg-slate-500 rounded-[6px] overflow-hidden relative`}>
                             
                                <img className="absolute top-2 right-2"  src="/img/icons/check.svg" />
                             
                            </button>
                        )}
                    </RowBase>  
                                 
                    <RowBase heading="Which colors do you prefer?">
                        <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-[22px]">
                            {form.colors.map(colors => (
                                <div key={colors} style={{backgroundColor: colors}} className="rounded-[6px] aspect-square border-[#C913CD] border-[3px] relative">
                                    <div className="absolute top-[-1px] right-[-1px]">
                                        <img src="/img/icons/check.svg" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </RowBase>     


                    <RowBase heading="Do you want to share any files?" description={form.files.length === 0 ? "No files uploaded":undefined}>
                        {form.files.length > 0 && form.files.map((files, index) => (
                            <div key={index} className="text-[#545454] text-[0.875rem] underline">{files.name}</div>
                        ))}
                    </RowBase>

                </BaseTable>
                <BaseTable title="Design options">
                    <span className="text-[#545454] text-[0.875rem]">{form.service}</span>
                </BaseTable>
                <BaseTable title="Total project cost">
                    <span className="text-[#545454] text-[0.875rem]">${form.cost}</span>
                </BaseTable>
            </div>

            <div className="flex lg:flex-row flex-col w-full lg:w-[903px] font-medium lg:items-end items-center mb-[51px]">
                <img src="/img/stripebanner.png" className="h-auto w-[289px] mb-6 lg:mb-0" />

                <p className="flex-grow text-[#545454] pl-[22px] translate-y-[-2px] text-center lg:text-left text-[0.8rem] lg:text-[1rem]">Our secure Stripe payment system ensures a safe and reliable transaction process for our customers. Stripe is a trusted and widely used online payment gateway that adheres to industry-leading security standards.</p>
            </div>

            <button  className="w-[168px] md:text-[1.125rem] text-[0.9rem] font-medium rounded-[4px] h-[42px] flex flex-row bg-border hover:shadow-lg active:opacity-75">
                <div className="text-white flex-grow bg-pink rounded-[4px] h-full flex items-center justify-center">
                    Continue
                </div>
                <div className="p-4 flex items-center justify-center h-full">
                    
                    <img className="lg:h-[12px] h-[12px] w-auto" src="/img/icons/go.svg" />
                </div>
            </button>

        </div>
    )
}

export default Table;