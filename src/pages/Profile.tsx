import Heading from "../components/firststep/Heading";
import Body from "../components/profile/Body";
import Footer from "../components/shared/Footer"
import Nav from "../components/shared/Nav"

const Profile:React.FC = () => {
    return (
        <>

        <Nav />

        <Heading title="My Account" noBottom />

        <Body />

        <Footer />

        </>
    )
}

export default Profile;