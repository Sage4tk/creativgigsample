import FormNavigatior from "../components/firststep/FormNavigator";
import Heading from "../components/firststep/Heading";
import Services from "../components/firststep/Services";
import FAQ from "../components/home/FAQ";
import PlanSelect from "../components/secondstep/PlanSelect";
import Footer from "../components/shared/Footer";
import FormProgress from "../components/shared/FormProgress";
import Nav from "../components/shared/Nav";

const SecondStep:React.FC = () => {
    return (
        <>

        <Nav />

        <Heading title="Logo Design" />

        <FormProgress stage={2} />

        <PlanSelect /> 

        <FormNavigatior />

        <Services />

        <FAQ />       

        <Footer />

        </>
    )
}

export default SecondStep;