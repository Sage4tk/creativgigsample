
/** COMPONENTS **/
import BuildBrand from "../components/home/BuildBrand";
import FAQ from "../components/home/FAQ";
import Hero from "../components/home/Hero";
import How from "../components/home/How";
import SearchBar from "../components/home/SearchBar";
import Services from "../components/home/Services";
import ContactUs from "../components/shared/ContactUs";
import Footer from "../components/shared/Footer";
import Nav from "../components/shared/Nav";

const Index:React.FC = () => {
    return (
        <>

        <Nav current="home" />

        <Hero />
        
        <SearchBar />

        <Services />

        <BuildBrand />
        
        <How />

        <ContactUs />

        <FAQ />

        <Footer />

        </>
    )
}

export default Index;