import { IFirstForm } from "../interface";

interface IColorSelectionProps {
    width?: string,
    form: IFirstForm,
    setForm: (arg:IFirstForm) => void,
    colors: Array<string>
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

        
        // if longer than or equals to 3 then remove first index then push at the end with the new value
        if (form.colors.length >= 3) {
            
            color_array.shift();
            color_array.push(color);

        } else {

            // if less than then just push the color
            color_array.push(color);

        }

        setForm({
            ...form,
            colors:color_array
        })


    }

    return (
        <div style={{width: width}} className={`grid grid-cols-3 aspect-square rounded-[9px] overflow-hidden`}>
            {colors.map(item => (
                <div onClick={() => add_color(item)} key={item} style={{backgroundColor: item}} className={`aspect-square relative`}>
                    {form.colors.includes(item) && <img src="/img/icons/check.svg" className="w-[30%] aspect-square absolute top-0 right-0 select-none" />}
                </div>
            ))}
        </div>
    )
}

export default ColorSelection;