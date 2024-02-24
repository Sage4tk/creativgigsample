import SideBarSection from "./card/SideBarSection";

const ProfileSide:React.FC = () => {
    return (
        <div className="flex flex-col items-center lg:w-[280px] w-full px-6 lg:px-0 mb-8 lg:mb-0">

            <div className="flex flex-col items-center mb-[21px]">
                <img className="w-[82px] aspect-square rounded-full object-cover mb-2" src="/img/person.png" />

                <p className="text-pink font-semibold">Piyush Kanti Sen</p>
                <p className="text-[#858585] text-[0.75rem]">CEO, ABC Company INC</p>
            </div>

            <div className="border border-[#CACACA] w-full lg:w-auto">

                <SideBarSection title="Dashboard" icon="/img/icons/profile/dashboard.svg" />
                <SideBarSection title="Orders" icon="/img/icons/profile/orders.svg" />
                <SideBarSection title="Submit Ticket" icon="/img/icons/profile/orders.svg" />
                <SideBarSection title="Partner" icon="/img/icons/profile/partner.svg" />
                <SideBarSection title="Downloads" icon="/img/icons/profile/downloads.svg" />
                <SideBarSection title="Addresses" icon="/img/icons/profile/addresses.svg" />
                <SideBarSection title="Account Details" icon="/img/icons/profile/account.svg" />
                <SideBarSection title="Log out" icon="/img/icons/profile/logout.svg" />

            </div>

        </div>
    )
}

export default ProfileSide;