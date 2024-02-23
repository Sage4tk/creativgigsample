import { useEffect, useState } from "react";
import { IForm } from "../components/firststep/interface";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import LastStep from "./LastStep";

const WholeForm:React.FC = () => {

    /** STATES **/
    const [form, setForm] = useState<IForm>({
        name: "",
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

    const [stage, setStage] = useState<number>(0);

    // scroll to top on change
    useEffect(() => {
        window.scrollTo({
            top: 0
        });
    }, [stage]);

    return (
        <>
        
        {stage === 0 && <FirstStep setStage={setStage} form={form} setForm={setForm} />}
        {stage === 1 && <SecondStep setStage={setStage} form={form} setForm={setForm} />}
        {stage === 2 && <LastStep form={form} setForm={setForm} />}

        </>
    )
}

export default WholeForm;