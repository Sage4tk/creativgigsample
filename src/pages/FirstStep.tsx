import { useState } from "react";

import ColorSection from "../components/firststep/ColorSection";
import { IFirstForm } from "../components/firststep/interface";
import Nav from "../components/shared/Nav";
import Footer from "../components/shared/Footer";
import Heading from "../components/firststep/Heading";
import FormProgress from "../components/shared/FormProgress";
import InputForm from "../components/firststep/InputForm";
import SelectStlye from "../components/firststep/SelectStyle";
import UploadFile from "../components/firststep/UploadFile";
import Services from "../components/firststep/Services";
import FAQ from "../components/home/FAQ";
import FormNavigatior from "../components/firststep/FormNavigator";



const FirstStep:React.FC = () => {
    const [form, setForm] = useState<IFirstForm>({
        colors: []
    })

    return (
        <>

        <Nav />
        
        <Heading title="Logo Design" />

        <FormProgress stage={1} />

        <InputForm />

        <SelectStlye />

        <ColorSection form={form} setForm={setForm} />

        <UploadFile />

        <FormNavigatior />

        <Services />

        <FAQ />
        
        <Footer />
        
        </>
    )
}

export default FirstStep;