import Footer from "../../components/Footer/Footer"
import FormInput from "../../components/FormInput/FormInput"

const Login = () => {

    return (
        <>
            <form className="login" style={{width: '40%', margin: '35px auto'}}>
                <FormInput />
            </form>
            <Footer />
        </>
    )
}

export default Login