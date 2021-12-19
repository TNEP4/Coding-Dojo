import {Link, navigate} from '@reach/router';

const LoginComponent = (props) => {

    return(
        <div>
            <h1>Login</h1>
            <br />
            <button onClick={(e) => {
                e.preventDefault();
                navigate('/dashboard');
                }}>Go to dashboard</button>
        </div>
    )

}

export default LoginComponent;
