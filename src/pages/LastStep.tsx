import Heading from "../components/firststep/Heading"
import { IBasicFormProp } from "../components/firststep/interface"
import Table from "../components/laststep/Table"
import Top from "../components/laststep/Top"
import Footer from "../components/shared/Footer"
import FormProgress from "../components/shared/FormProgress"
import Nav from "../components/shared/Nav"



const LastStep:React.FC<IBasicFormProp> = ({
    form,
    setForm,
}) => {
    return (
        <>

        <Nav />

        <Heading title="Logo Design" />

        <FormProgress stage={3} />

        <Top />

        <Table form={form} setForm={setForm} />

        <Footer />
        </>
    )
}

export default LastStep;