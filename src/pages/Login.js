import {Component} from "react";
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import TextField from '@material-ui/core/TextField';
import {Link} from "react-router-dom";

import '../Main.css';

//
class Login extends Component
{
    constructor()
    {
        super();

        this.state = {email: "", password: ""};
        this.checkFormLogin = this.checkFormLogin.bind(this);
    }

    checkFormLogin(event)
    {
        alert("Login Data:\n\nE-mail: " + this.state.email + "\nPassword: " + this.state.password);
    }

    //
    render()
    {
        return (
            <div className="page-login page-content">
                <Container maxWidth="xl">
                    <Grid justify="center" container>
                        <Grid className="page-title" item xs={12}>Login</Grid>

                        <Grid item md={5} sm={8} xs={12}>
                            <ButtonGroup fullWidth variant="contained" className="tab-box">
                                <Link to="/login" className="tab active">Login</Link>
                                <Link to="/registration" className="tab">Registration</Link>
                            </ButtonGroup>

                            <form className="form-box" autoComplete="off">
                                <FormControl fullWidth>
                                    <TextField id="standard-basic" label="Enter your E-mail" onChange={evt => this.setState({email: evt.target.value})} />
                                </FormControl>

                                <FormControl fullWidth>
                                    <TextField type="password" id="standard-basic" label="Password" autoComplete="current-password" onChange={evt => this.setState({password: evt.target.value})} />
                                </FormControl>

                                <FormControl fullWidth>
                                    <Button variant="contained" className="btn-submit" endIcon={<ArrowForwardIcon />} onClick={this.checkFormLogin}>Login</Button>
                                </FormControl>
                            </form>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        );
    }
}

export default Login;