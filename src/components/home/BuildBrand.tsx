import brand_data from "../../data/brand.json";
import BuildBrandCard from "./cards/BuildBrandCard";

const BuildBrand:React.FC = () => {
    return (
        <div className="flex flex-col items-center pt-[102px] pb-[125px] bg-[#FFF8FF]">
 
            <div className="w-[1200px] flex flex-col items-center">

                <h3 className="text-[2.8125rem] text-main font-bold mb-[33px]">Build a brand your customers love</h3>

                <div className="flex flex-row">

                   {brand_data.map(props => <BuildBrandCard key={props.title} {...props} />)}

                </div>

            </div>

        </div>
    )
}

export default BuildBrand;