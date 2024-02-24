import ProfileSide from "./ProfileSide";
import MainSection from "./card/MainSection";

const Body:React.FC = () => {
    return (
        <div className="w-full flex flex-col items-center pb-[500px]">

            <div className="xl:w-[1200px] lg:w-[1000px] w-full flex flex-col lg:flex-row items-end pt-[41px] px-0 md:px-[100px] lg:px-0">

                <ProfileSide />

                <MainSection />

            </div>

        </div>
    )
}

export default Body;