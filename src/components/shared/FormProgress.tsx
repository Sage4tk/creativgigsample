import { useEffect, useRef, useState } from "react";

interface IFormProgressProps {
    stage: number
}

const FormProgress:React.FC<IFormProgressProps> = ({
    stage
}) => {

    const [lineWidth, setLineWidth] = useState<number>(0);

    const div_one = useRef<HTMLDivElement | null>(null);
    const div_two = useRef<HTMLDivElement | null>(null);

    useEffect(() => {

        const calculate_distance = ():void => {
            // calculate space between
            if (div_one.current && div_two.current) {
                const rect1 = div_one.current.getBoundingClientRect();
                const rect2 = div_two.current.getBoundingClientRect();

                setLineWidth(rect2.right - rect1.right);
            }
        }

        calculate_distance();

        // run the function on resizes to make sure it caters to the screen.
        window.addEventListener("resize", calculate_distance);    

        return () => {
            window.removeEventListener("resize", calculate_distance)
        }
    },[]);

    return (
        <div className="flex felx-col items-center relative">

            <div className="w-[calc(100%-40px)] border border-border lg:w-[787px] md:w-[500px] absolute rounded-[6px] bg-white z-10 py-[16px] px-[8px] md:px-[25px] left-[50%] translate-x-[-50%]">
                <div style={{width: lineWidth + "px"}} className="absolute left-[50%] translate-x-[-50%] h-[30px] flex items-center">
                <div className="border border-main h-[6px] w-full">
                    <div style={{width: stage === 1 ? "33%": stage === 2 ? "66%" : stage === 3 ? "100%": "0px" }} className={`h-full bg-main`}></div>
                </div>
                </div>

                <div className="flex flex-row justify-between">
                    
                    <div className="flex flex-col items-center z-10">
                        <div className="border-border border w-[30px] h-[30px] rounded-full mb-[4px] bg-white flex items-center justify-center font-bold text-border overflow-hidden"  ref={div_one}>
                            {stage <= 0 ? <p className="font-bold text-border">1</p>:<div className="w-[30px] h-[30px] bg-border flex items-center justify-center"><img src="/img/icons/loadercheck.svg" className="select-none" /></div>}
                        </div>

                        <p className="md:text-[0.75rem] text-[0.6rem] text-center">Select Service</p>
                    </div>
                    <div className="flex flex-col items-center z-10">
                        <div className="border-border border w-[30px] h-[30px] rounded-full mb-[4px] bg-white flex items-center justify-center font-bold text-border overflow-hidden">
                            {stage <= 1 ? <p className="font-bold text-border">2</p>:<div className="w-[30px] h-[30px] bg-border flex items-center justify-center"><img src="/img/icons/loadercheck.svg" className="select-none" /></div>}
                        </div>

                        <p className="md:text-[0.75rem] text-[0.6rem] text-center">Creative Brief</p>
                    </div>
                    <div className="flex flex-col items-center z-10">
                        <div className="border-border border w-[30px] h-[30px] rounded-full mb-[4px] bg-white flex items-center justify-center font-bold text-border overflow-hidden">
                            {stage <= 2 ? <p className="font-bold text-border">3</p>:<div className="w-[30px] h-[30px] bg-border flex items-center justify-center"><img src="/img/icons/loadercheck.svg" className="select-none" /></div>}
                        </div>

                        <p className="md:text-[0.75rem] text-[0.6rem] text-center">Design Options</p>
                    </div>
                    <div className="flex flex-col items-center z-10">
                    <div className="border-border border w-[30px] h-[30px] rounded-full mb-[4px] bg-white flex items-center justify-center font-bold text-border overflow-hidden" ref={div_two}>
                            {stage <= 3 ? <p className="font-bold text-border">4</p>:<div className="w-[30px] h-[30px] bg-border flex items-center justify-center"><img src="/img/icons/loadercheck.svg" className="select-none" /></div>}
                        </div>

                        <p className="md:text-[0.75rem] text-[0.6rem] text-center">Payment Options</p>
                    </div>

                    

                </div>


            </div>

        </div>
    )
}

export default FormProgress;