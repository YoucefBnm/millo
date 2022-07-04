import './FormInput.scss'

const FormInput = () => {

    return (
        <>
            <h2 className="heading--title">LOGIN</h2>
            <div className="formGroup">
                <input type="text" placeholder='Email' className="formGroup__input" />
            </div>
            <div className="formGroup">
                <input autoComplete='current password' type="password" className="formGroup__input" placeholder='Password' />
            </div>
            <div className="formGroup__btn">
                <button className="btn btn--border">sign in</button>
                <span>Forgot your password?</span>
            </div>
        </>
    )
}

export default FormInput