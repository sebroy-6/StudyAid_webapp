import { Component } from "react";
import AuthNForm from "../components/AuthNFormComponent";

class LoginPage extends Component {

    render () {
        return (
            <div className="library">
		        <AuthNForm type="login"/>
            </div>
        );
    }

}

export default LoginPage;