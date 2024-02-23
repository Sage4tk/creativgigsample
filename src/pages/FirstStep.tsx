import ColorSection from "../components/firststep/ColorSection";
import { IForm } from "../components/firststep/interface";
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

export interface IFirstStepProps {
    form: IForm,
    setForm: (form:IForm) => void,
    setStage: (state:number) => void
}

const FirstStep:React.FC<IFirstStepProps> = ({
    form, 
    setForm,
    setStage
}) => {

    return (
        <>

        <Nav />
        
        <Heading title="Logo Design" />

        <FormProgress stage={1} />

        <InputForm />

        <SelectStlye />

        <ColorSection form={form} setForm={setForm} />

        <UploadFile />

        <FormNavigatior setStage={setStage} nextStage={1} />

        <Services />

        <FAQ />
        
        <Footer />
        
        </>
    )
}

export default FirstStep;