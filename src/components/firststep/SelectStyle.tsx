import SELECT_DATA from "../../data/style_selection.json";
import StyleCard from "./cards/StyleCard";

const SelectStlye:React.FC = () => {
    return (
        <div className="flex flex-col items-center w-full">

            <div className="w-full lg:w-[787px] md:w-[500px] pt-[38px] md:px-0 px-6">

                <div>
                    <h3 className="text-main text-[1.125rem] font-bold mb-2">Which style do you prefer?</h3>

                    <p className="text-[#303030] text-[0.875rem] mb-4">Select all that apply.</p>
                </div>


                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[26px]">
                    {SELECT_DATA.map(props => (
                        <StyleCard {...props} key={props.title}/>
                    ))}
                </div>

            </div>

        </div>
    )
}

export default SelectStlye;