import { IFirstForm } from "./interface";
import ColorSelection from "./cards/ColorSelection";
import { PALLETE_EIGHT, PALLETE_FIVE, PALLETE_FOUR, PALLETE_NINE, PALLETE_ONE, PALLETE_SEVEN, PALLETE_SIX, PALLETE_TEN, PALLETE_THREE, PALLETE_TWO } from "../../data/pallete";

interface IColorSectionProps {
    form: IFirstForm,
    setForm: (arg:IFirstForm) => void   
}

const ColorSection:React.FC<IColorSectionProps> = ({
    form,
    setForm
}) => {
    
    return (
        <div className="flex flex-col items-center w-full">

            <div className="w-full lg:w-[787px] md:w-[500px] pt-[38px] md:px-0 px-6">

                <div>
                    <h3 className="text-main text-[1.125rem] font-bold mb-2">Which colors do you prefer?</h3>

                    <p className="text-[#303030] text-[0.875rem] mb-4">What colors do you want creatives to explore? Select up to 3.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[23px]">

                    <ColorSelection
                        colors={PALLETE_ONE}
                        form={form}
                        setForm={setForm}
                    />

                    <ColorSelection
                        colors={PALLETE_TWO}
                        form={form}
                        setForm={setForm}
                    />

                    <ColorSelection
                        colors={PALLETE_THREE}
                        form={form}
                        setForm={setForm}
                    />

                    <ColorSelection
                        colors={PALLETE_FOUR}
                        form={form}
                        setForm={setForm}
                    />

                    <ColorSelection
                        colors={PALLETE_FIVE}
                        form={form}
                        setForm={setForm}
                    />

                    <ColorSelection
                        colors={PALLETE_SIX}
                        form={form}
                        setForm={setForm}
                    />

                    <ColorSelection
                        colors={PALLETE_SEVEN}
                        form={form}
                        setForm={setForm}
                    />

                    <ColorSelection
                        colors={PALLETE_EIGHT}
                        form={form}
                        setForm={setForm}
                    />

                    <ColorSelection
                        colors={PALLETE_NINE}
                        form={form}
                        setForm={setForm}
                    />

                    <ColorSelection
                        colors={PALLETE_TEN}
                        form={form}
                        setForm={setForm}
                    />
                    
                </div>

            </div>  
        </div>
    )
}

export default ColorSection;