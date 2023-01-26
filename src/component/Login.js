import { Fragment } from "react"

const login = () => {

    const onClickLogin = () => {

    }

    return (
        <Fragment>
            <form action="#">
                <h1>Sign in</h1>
                <span>use your account</span>
                
                <input type="email" placeholder="Your Email"></input>
                <input type="password" placeholder="Your Password"></input>

                <a href="#">Forgot your password?</a>
                <button onClick={onClickLogin}>Sign In</button>
            </form>
        </Fragment>
    )
}
export default login;