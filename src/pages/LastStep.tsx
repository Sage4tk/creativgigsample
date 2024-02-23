import Heading from "../components/firststep/Heading"
import Services from "../components/firststep/Services"
import FAQ from "../components/home/FAQ"
import Table from "../components/laststep/Table"
import Top from "../components/laststep/Top"
import Footer from "../components/shared/Footer"
import FormProgress from "../components/shared/FormProgress"
import Nav from "../components/shared/Nav"

const LastStep:React.FC = () => {
    return (
        <>

        <Nav />

        <Heading title="Logo Design" />

        <FormProgress stage={3} />

        <Top />

        <Table />

        <Services />

        <FAQ />

        <Footer />
        </>
    )
}

export default LastStep;