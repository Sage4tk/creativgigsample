const FormNavigatior:React.FC = () => {
    return (
        <div className="flex flex-col items-center w-full">

            <div className="w-full lg:w-[787px] md:w-[500px] flex-col items-center pt-[35px] pb-[154px]">

                <div className="grid grid-cols-2 gap-[22px] md:w-[400px] w-full md:mx-auto px-6 md:px-0">

                    <button className="md:text-[1.125rem] text-[0.9rem] font-medium text-sub border-sub border rounded-[4px] h-[42px] hover:bg-sub hover:text-white active:opacity-70">
                        SAVE
                    </button>
                    <button className="md:text-[1.125rem] text-[0.9rem] font-medium rounded-[4px] h-[42px] flex flex-row bg-border hover:shadow-lg active:opacity-75">
                        <div className="text-white flex-grow bg-pink rounded-[4px] h-full flex items-center justify-center">
                            Continue
                        </div>
                        <div className="p-4 flex items-center justify-center h-full">
                            
                            <img className="lg:h-[12px] h-[12px] w-auto" src="/img/icons/go.svg" />
                        </div>
                    </button>

                </div>

            </div>
            
        </div>
    )
} 

export default FormNavigatior;