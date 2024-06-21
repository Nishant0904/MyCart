import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <>
            <h1>Uh oh!</h1>
            <p>Looks like the page you are seeking is lost. <Link to='/'>Return to home?</Link></p>
        </>
    )
}

export default NotFound