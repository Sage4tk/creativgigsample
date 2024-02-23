import { IBasicFormProp } from "../interface";

interface IStyleCardProps extends IBasicFormProp {
    img: string,
    title:string,
}

const StyleCard:React.FC<IStyleCardProps> = ({
    img,
    title,
    form,
    setForm
}) => {

    const handle_press = ():void => {
        // check if already in form
        setForm({
            ...form,
            style: title
        })
    }

    return (
        <button onClick={handle_press}  style={{backgroundImage: `url(${img})`, backgroundSize: "cover"}} className={`aspect-square bg-slate-500 rounded-[6px] overflow-hidden relative`}>
            {title === form.style && (
                <img className="absolute top-2 right-2"  src="/img/icons/check.svg" />
            )}
        </button>
    )
}

export default StyleCard;