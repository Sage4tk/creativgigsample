
/** COMPONENTS **/
import Nav from "../components/shared/Nav";
import Footer from "../components/shared/Footer";
import Hero from "../components/howitworks/Hero";
import Body from "../components/howitworks/Body";
import FAQ from "../components/home/FAQ";
import ContactUs from "../components/shared/ContactUs";

const HowItWorks:React.FC = () => {
    return (
        <>

        <Nav />

        <Hero />

        <Body />

        <ContactUs />

        <FAQ />
        
        <Footer />

        </>
    )
}

export default HowItWorks;