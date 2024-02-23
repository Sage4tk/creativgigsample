import PLANS from "../../data/plans.json";
import { IBasicFormProp } from "../firststep/interface";
import PlanCard from "./cards/PlanCard";

const PlanSelect:React.FC<IBasicFormProp> = ({
    form,
    setForm
}) => {
    return (
        <div className="flex flex-col items-center w-full">

            <div className="w-full lg:w-[787px] md:w-[500px] flex-col items-center pt-[68px]">


                <div className="pb-[24px]">
                    <h2 className="text-main lg:text-[2.1875rem] text-[1.4rem] font-bold text-center mb-[4px]">Tell us about your Logo project</h2>
                    <p className="text-[#303030] text-center lg:text-[1rem] text-[0.8rem]">Answer these important questions to help creatives understand what you need.</p>
                </div>


            </div>

            <div className="w-full lg:w-[900px] md:w-[600px] flex flex-col lg:flex-row flex-wrap justify-between pt-[36px] items-center px-8 lg:px-0">
                {
                    PLANS.map((props, index) => (
                        <PlanCard {...props} odd={index % 2 === 0} form={form} setForm={setForm} />
                    ))
                }
            </div>
        </div>
    )
}

export default PlanSelect;