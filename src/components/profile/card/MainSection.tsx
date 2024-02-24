import MainSquare from "./MainSquare";

const MainSection:React.FC = () => {
    return (
        <div className="lg:w-[calc(100%-280px)] w-full lg:pl-[28px] px-6">

            <div className="text-[#545454] mb-10 text-[0.875rem] lg:text-[1rem]">
                <div>
                    <span>Hello admin (not admin? <span className="underline cursor-pointer">Log out</span>)</span>
                </div>
                <div>
                From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.
                </div>
            </div>

            <div className="h-full grid grid-cols-2 lg:grid-cols-4 gap-[29px]">

                <MainSquare title="Dashboard" icon="/img/icons/profile/dashboard.svg" />
                <MainSquare title="Orders" icon="/img/icons/profile/orders.svg" />
                <MainSquare title="Submit Ticket" icon="/img/icons/profile/orders.svg" />
                <MainSquare title="Partner" icon="/img/icons/profile/partner.svg" />
                <MainSquare title="Downloads" icon="/img/icons/profile/downloads.svg" />
                <MainSquare title="Addresses" icon="/img/icons/profile/addresses.svg" />
                <MainSquare title="Account Details" icon="/img/icons/profile/account.svg" />
                <MainSquare title="Log out" icon="/img/icons/profile/logout.svg" />

            </div>
                    
        </div>
    )
}

export default MainSection;