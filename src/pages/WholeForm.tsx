import { useState } from "react";
import { IForm } from "../components/firststep/interface";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import LastStep from "./LastStep";

const WholeForm:React.FC = () => {

    /** STATES **/
    const [form, setForm] = useState<IForm>({
        service: "",
        industry: "",
        about: "",
        important: "",
        colors: [],
        additional_info: "",
        style: "",
        files: [],
        option: "",
        cost: 0
    });

    const [stage, setState] = useState<number>(0);

    return (
        <>
        
        {stage === 0 && <FirstStep />}
        {stage === 1 && <SecondStep />}
        {stage === 2 && <LastStep />}

        </>
    )
}

export default WholeForm;