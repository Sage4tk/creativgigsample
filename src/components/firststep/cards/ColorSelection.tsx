import { useMemo } from "react";
import {  IForm } from "../interface";

interface IColorSelectionProps {
    width?: string,
    form: IForm,
    setForm: (arg:IForm) => void,
    colors: {
        id: string,
        colors: Array<string>
    }
    // colorSet: Array<string>
}
  

const ColorSelection:React.FC<IColorSelectionProps> = ({
    width,
    form,
    setForm,
    colors
    // colorSet
}) => {


    const add_color = (color:string):void => {
        // create a copy of the colors array
        let color_array = [...form.colors];

        // if color is already in the array then remove it then return out of the function
        if (color_array.includes(color)) {

            

            setForm({
                ...form,
                colors: color_array.filter(string => string !== color)
            });

            return;

        };

        
            
        // color_array.shift();
        color_array.push(color);

        

        setForm({
            ...form,
            colors:color_array
        })


    }

    const checked = useMemo(() => {
        return form.colors.includes(colors.id);
    }, [form.colors]);

    return (
        <div onClick={() => add_color(colors.id)} style={{width: width}} className={`box-border grid grid-cols-3 aspect-square rounded-[9px] overflow-hidden relative`}>

            {checked && (
                <div className="absolute w-full h-full border-4 rounded-[9px] z-10 border-border top-0 left-0">
                    <img src="/img/icons/check.svg" className="absolute top-1 right-1" />
                </div>
            )}
            {colors.colors.map(item => (
                <div key={item} style={{backgroundColor: item}} className={`aspect-square relative`}>
              
                </div>
            ))}
        </div>
    )
}

export default ColorSelection;