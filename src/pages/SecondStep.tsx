import FormNavigatior from "../components/firststep/FormNavigator";
import Heading from "../components/firststep/Heading";
import Services from "../components/firststep/Services";
import FAQ from "../components/home/FAQ";
import PlanSelect from "../components/secondstep/PlanSelect";
import Footer from "../components/shared/Footer";
import FormProgress from "../components/shared/FormProgress";
import Nav from "../components/shared/Nav";
import { IFirstStepProps } from "./FirstStep";

const SecondStep:React.FC<IFirstStepProps> = ({
    form,
    setForm,
    setStage
}) => {
    return (
        <>

        <Nav />

        <Heading title="Logo Design" />

        <FormProgress stage={2} />

        <PlanSelect form={form} setForm={setForm} /> 

        <FormNavigatior setStage={setStage} nextStage={2} />

        <Services />

        <FAQ />       

        <Footer />

        </>
    )
}

export default SecondStep;