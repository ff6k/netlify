import React, {Component} from "react";
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import TextField from '@material-ui/core/TextField';
import {Link} from "react-router-dom";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from "@material-ui/core/Typography";
import PaymentIcon from '@material-ui/icons/Payment';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import '../Main.css';

//
class Registration extends Component
{
    constructor()
    {
        super();

        this.state = {email: "", vorname: "", nachname: "", password: "", confirmPassword: "", whyUs: false, accountNumberHandle: false, accountNumber: 0, accountCheckbox1: false, accountCheckbox2: false};
        this.registrationRef = React.createRef();
        this.paymentCheckoutRef = React.createRef();
        this.checkFormRegistration = this.checkFormRegistration.bind(this);
        this.checkFormPayment = this.checkFormPayment.bind(this);
        this.btnWhyUs = this.btnWhyUs.bind(this);
        this.dropDownAccountClick = this.dropDownAccountClick.bind(this);
        this.dropDownAccountClose = this.dropDownAccountClose.bind(this);
        this.accountCheckbox = this.accountCheckbox.bind(this);
    }

    goToRegistration = () => this.registrationRef.current.scrollIntoView();
    goToPaymentCheckout = () => this.paymentCheckoutRef.current.scrollIntoView();

    checkFormRegistration(event)
    {
        alert
        (
            "Registration Data:\n" +
            "\nE-mail: " + this.state.email +
            "\nVorname: " + this.state.vorname +
            "\nNachname: " + this.state.nachname +
            "\nPassword: " + this.state.password +
            "\nConfirmPassword: " + this.state.confirmPassword
        );
    }

    checkFormPayment(event)
    {
        alert("Payment Data ...");
    }

    btnWhyUs(event)
    {
        this.setState({whyUs: !this.state.whyUs});
    }

    accountCheckbox(event)
    {
        this.setState({accountCheckbox1: !this.state.accountCheckbox1, accountCheckbox2: false, accountNumber: 0});
    }

    dropDownAccountClick(event)
    {
        this.setState({accountNumberHandle: event.currentTarget, accountCheckbox1: false});
    }

    dropDownAccountClose(number)
    {
        this.setState({accountNumberHandle: null});

        if(number > 0) this.setState({accountNumber: number, accountCheckbox2: number > 0});
    }

    //
    render()
    {
        return (
            <div className="page-registration page-content">
                <Container maxWidth="xl">
                    <Grid justify="center" container spacing={3}>
                        <Grid className="page-title" item xs={12}>Registration</Grid>

                        {/* section des */}
                        <Grid item xs={12}>
                            <Grid container justify="center" alignItems="center" className="section-des-first">
                                <Grid className="col-des" item sm={6} xs={12}>
                                    <Typography className="des">Hallo,<br />Abc ist die Coach Community rund um Kinder- und Jugendfußball. Was dich bei uns erwartet:<br /><Typography className="des-inner">Werde Teil der besten Trainer-Bewegung<br />Erfahre wie du dein Training besser organisiert<br />Nehme an Diskussionen teil und vernetze dich mit Kollegen</Typography>Interesse geweckt? Dann lass uns besser kennen lernen.</Typography>
                                </Grid>

                                <Grid className="col-image" item sm={3} xs={12}>
                                    <img className="image" src={`${process.env.PUBLIC_URL}/image/post.jpg`}  />
                                </Grid>
                            </Grid>
                        </Grid>

                        {/* registration */}
                        <Grid item md={5} sm={8} xs={12} ref={this.registrationRef}>
                            <ButtonGroup fullWidth variant="contained" className="tab-box">
                                <Typography className="tab active">Registration</Typography>
                                <Typography className="tab" onClick={this.goToPaymentCheckout}>Payment/Checkout</Typography>
                            </ButtonGroup>

                            <form className="form-box" autoComplete="off">
                                <FormControl fullWidth>
                                    <TextField id="standard-basic" label="Wie lautet deine E-Mail?" onChange={evt => this.setState({email: evt.target.value})} />
                                </FormControl>

                                <FormControl fullWidth>
                                    <TextField id="standard-basic" label="Vorname" onChange={evt => this.setState({vorname: evt.target.value})} />
                                </FormControl>

                                <FormControl fullWidth>
                                    <TextField id="standard-basic" label="Nachname" onChange={evt => this.setState({nachname: evt.target.value})} />
                                </FormControl>

                                <FormControl fullWidth>
                                    <TextField type="password" id="standard-basic" label="Password" autoComplete="current-password" onChange={evt => this.setState({password: evt.target.value})} />
                                </FormControl>

                                <FormControl fullWidth>
                                    <TextField type="password" id="standard-basic" label="Confirm Password" autoComplete="current-password" onChange={evt => this.setState({confirmPassword: evt.target.value})} />
                                </FormControl>

                                <FormControl fullWidth>
                                    <Button variant="contained" className="btn-submit" endIcon={<ArrowForwardIcon />} onClick={this.checkFormRegistration}>Kostenlos registrieren</Button>
                                </FormControl>
                            </form>
                        </Grid>

                        {/* login link */}
                        <Grid item xs={12} className="login-bar">
                            <Link to="/login">Already registered? Click here to Login</Link>
                        </Grid>

                        {/* why-us */}
                        <Grid item xs={12}>
                            <Button variant="contained" className="btn-why-us" endIcon={<ArrowForwardIcon />} onClick={this.btnWhyUs}>Why you should be a premium member</Button>
                        </Grid>
                        {
                            (this.state.whyUs) ?
                                <Grid item xs={12}>
                                    <Grid justify="center" container spacing={3}>
                                        <Grid item xs={8} className="section-des-two">
                                            <Typography className="des">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Typography>
                                        </Grid>

                                        <Grid item md={10} xs={12} className="why-us-box">
                                            <Grid container spacing={3} className="why-us-box">
                                                <Grid item className="why-us-item" xs={4}>
                                                    <img className="image" src={`${process.env.PUBLIC_URL}/image/post.jpg`}  />
                                                    <Typography className="title">Lorem ipsum dolar Lorem</Typography>
                                                </Grid>

                                                <Grid item className="why-us-item" xs={4}>
                                                    <img className="image" src={`${process.env.PUBLIC_URL}/image/post.jpg`}  />
                                                    <Typography className="title">Lorem ipsum dolar Lorem</Typography>
                                                </Grid>

                                                <Grid item className="why-us-item" xs={4}>
                                                    <img className="image" src={`${process.env.PUBLIC_URL}/image/post.jpg`}  />
                                                    <Typography className="title">Lorem ipsum dolar Lorem</Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                :
                                null
                        }

                        {/* section-title */}
                        <Grid className="section-title-by-bg" item xs={12}>
                            <Typography className="title">Choose your product</Typography>
                        </Grid>

                        {/* section des */}
                        <Grid item xs={8} className="section-des-two">
                            <Typography className="des">Für 7,- Euro im Monat wirst du ein besserer Trainer. Und, du  ermöglicht unsere Vision: Kindern und Jugendlichen Zugang zu besserem Fußballtraining zu bieten. Unsere Inhalte basieren auf den besten  wissenschaftlichen Studien und Methoden, sind aber einfach verpackt.</Typography>
                        </Grid>

                        {/* product */}
                        <Grid item lg={10} md={12} className="product-bar">
                            <Grid container spacing={3}>
                                <Grid item className="product-item-box" md={3} xs={6}>
                                    <Grid className="product-item">
                                        <ButtonGroup className="btn-box">
                                            <Button className="btn active">monatlich</Button>
                                            <Button className="btn">jährlich</Button>
                                        </ButtonGroup>

                                        <Grid className="title-des">
                                            <Typography className="title">Sponsorship</Typography>
                                            <Grid className="des">
                                                <Typography className="des-1">Arbeitslose, Schüler, Studenten - mit Nachweis</Typography>
                                                <Typography className="des-2">4,99 €/Monat.<br />1 Konto, 1 Device.</Typography>
                                                <ul>
                                                    <li>Lerne und trainiere ohne Werbeunterbrechungen</li>
                                                    <li>Überall trainieren – sogar offline auf dem Platz</li>
                                                    <li>Spare Zeit in der Trainingsvorbereitung und erhalte alle Inhalte.</li>
                                                </ul>
                                                <Typography>Lorem ipsum dolor sit amet, amet, consectetur adipiscing elit,</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid className="btn-link"><Grid className="title">jetzt loslegen</Grid><Grid className="des">Lorem ipsum dolor sit amet</Grid></Grid>
                                </Grid>

                                <Grid item className="product-item-box" md={3} xs={6}>
                                    <Grid className="product-item">
                                        <ButtonGroup className="btn-box">
                                            <Button className="btn active">monatlich</Button>
                                            <Button className="btn">jährlich</Button>
                                        </ButtonGroup>

                                        <Grid className="title-des">
                                            <Typography className="title">Sponsorship</Typography>
                                            <Grid className="des">
                                                <Typography className="des-1">Arbeitslose, Schüler, Studenten - mit Nachweis</Typography>
                                                <Typography className="des-2">4,99 €/Monat.<br />1 Konto, 1 Device.</Typography>
                                                <ul>
                                                    <li>Lerne und trainiere ohne Werbeunterbrechungen</li>
                                                    <li>Überall trainieren – sogar offline auf dem Platz</li>
                                                    <li>Spare Zeit in der Trainingsvorbereitung und erhalte alle Inhalte.</li>
                                                </ul>
                                                <Typography>Lorem ipsum dolor sit amet, amet, consectetur adipiscing elit,</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid className="btn-link"><Grid className="title">jetzt loslegen</Grid><Grid className="des">Lorem ipsum dolor sit amet</Grid></Grid>
                                </Grid>

                                <Grid item className="product-item-box" md={3} xs={6}>
                                    <Grid className="product-item">
                                        <ButtonGroup className="btn-box">
                                            <Button className="btn active">monatlich</Button>
                                            <Button className="btn">jährlich</Button>
                                        </ButtonGroup>

                                        <Grid className="title-des">
                                            <Typography className="title">Sponsorship</Typography>
                                            <Grid className="des">
                                                <Typography className="des-1">Arbeitslose, Schüler, Studenten - mit Nachweis</Typography>
                                                <Typography className="des-2">4,99 €/Monat.<br />1 Konto, 1 Device.</Typography>
                                                <ul>
                                                    <li>Lerne und trainiere ohne Werbeunterbrechungen</li>
                                                    <li>Überall trainieren – sogar offline auf dem Platz</li>
                                                    <li>Spare Zeit in der Trainingsvorbereitung und erhalte alle Inhalte.</li>
                                                </ul>
                                                <Typography>Lorem ipsum dolor sit amet, amet, consectetur adipiscing elit,</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid className="btn-link"><Grid className="title">jetzt loslegen</Grid><Grid className="des">Lorem ipsum dolor sit amet</Grid></Grid>
                                </Grid>

                                <Grid item className="product-item-box" md={3} xs={6}>
                                    <Grid className="product-item">
                                        <ButtonGroup className="btn-box">
                                            <Button className="btn active">monatlich</Button>
                                            <Button className="btn">jährlich</Button>
                                        </ButtonGroup>

                                        <Grid className="title-des">
                                            <Typography className="title">Sponsorship</Typography>
                                            <Grid className="des">
                                                <Typography className="des-1">Arbeitslose, Schüler, Studenten - mit Nachweis</Typography>
                                                <Typography className="des-2">4,99 €/Monat.<br />1 Konto, 1 Device.</Typography>
                                                <ul>
                                                    <li>Lerne und trainiere ohne Werbeunterbrechungen</li>
                                                    <li>Überall trainieren – sogar offline auf dem Platz</li>
                                                    <li>Spare Zeit in der Trainingsvorbereitung und erhalte alle Inhalte.</li>
                                                </ul>
                                                <Typography>Lorem ipsum dolor sit amet, amet, consectetur adipiscing elit,</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid className="btn-link"><Grid className="title">jetzt loslegen</Grid><Grid className="des">Lorem ipsum dolor sit amet</Grid></Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        {/* payment-checkout */}
                        <Grid item md={5} sm={8} xs={12} ref={this.paymentCheckoutRef}>
                            <ButtonGroup fullWidth variant="contained" className="tab-box">
                                <Typography className="tab" onClick={this.goToRegistration}>Registration</Typography>
                                <Typography className="tab active">Payment/Checkout</Typography>
                            </ButtonGroup>

                            <form className="form-box form-outlined-box" autoComplete="off">
                                <FormControl fullWidth className="form-row">
                                    <Grid container>
                                        <Grid item xs={6}>
                                            <FormControlLabel control={<Checkbox name="ad" checked={this.state.accountCheckbox1} onChange={this.accountCheckbox} />} label="Single user account" />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <FormControlLabel control={<Checkbox name="ad" checked={this.state.accountCheckbox2} />} aria-controls="simple-menu" aria-haspopup="true" onClick={this.dropDownAccountClick} label="Anzahl der Accounts" />

                                            <Menu className="account-number-menu" id="simple-menu" anchorEl={this.state.accountNumberHandle} keepMounted open={Boolean(this.state.accountNumberHandle)} onClose={this.dropDownAccountClose}>
                                                <MenuItem className={this.state.accountNumber === 1 ? "active" : ""} onClick={() => this.dropDownAccountClose(1)}>1</MenuItem>
                                                <MenuItem className={this.state.accountNumber === 2 ? "active" : ""} onClick={() => this.dropDownAccountClose(2)}>2</MenuItem>
                                                <MenuItem className={this.state.accountNumber === 3 ? "active" : ""} onClick={() => this.dropDownAccountClose(3)}>3</MenuItem>
                                                <MenuItem className={this.state.accountNumber === 4 ? "active" : ""} onClick={() => this.dropDownAccountClose(4)}>4</MenuItem>
                                                <MenuItem className={this.state.accountNumber === 5 ? "active" : ""} onClick={() => this.dropDownAccountClose(5)}>5</MenuItem>
                                            </Menu>
                                        </Grid>
                                    </Grid>
                                </FormControl>

                                <FormControl fullWidth>
                                    <TextField id="outlined-basic" variant="outlined" label="Club, Firma, Organisation" onChange={evt => {}} />
                                </FormControl>

                                <FormControl fullWidth>
                                    <TextField id="outlined-basic" variant="outlined" label="Vorname des Vertragspartner" onChange={evt => {}} />
                                </FormControl>

                                <FormControl fullWidth>
                                    <TextField id="outlined-basic" variant="outlined" label="Name des Vertragspartner" onChange={evt => {}} />
                                </FormControl>

                                <FormControl fullWidth>
                                    <TextField id="outlined-basic" variant="outlined" label="Straße / Hausnummer" onChange={evt => {}} />
                                </FormControl>

                                <FormControl fullWidth>
                                    <TextField id="outlined-basic" variant="outlined" label="PLZ" onChange={evt => {}} />
                                </FormControl>

                                <FormControl fullWidth>
                                    <TextField id="outlined-basic" variant="outlined" label="Ort" onChange={evt => {}} />
                                </FormControl>

                                <FormControl fullWidth>
                                    <TextField id="outlined-basic" variant="outlined" label="Land" onChange={evt => {}} />
                                </FormControl>

                                <FormControl fullWidth>
                                    <TextField id="outlined-basic" variant="outlined" label="Ust ID" onChange={evt => {}} />
                                </FormControl>

                                <Grid item className="form-row form-border form-des">
                                    <Typography className="title">Zahlungsmethode</Typography>

                                    <Grid container>
                                        <Grid item xs={4}>
                                            <Typography><PaymentIcon className="icon" /> Kreditkarte</Typography>
                                        </Grid>

                                        <Grid item xs={4}>
                                            <Typography><PaymentIcon className="icon" /> PayPal</Typography>
                                        </Grid>

                                        <Grid item xs={4}>
                                            <Typography><PaymentIcon className="icon" /> Rechnung</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid item className="form-row form-border form-des">
                                    <Typography>Jetzt zahlungspflichtig bestellen</Typography>
                                    <Typography>9,99 € im Monat, inkl. Ust.</Typography>
                                    <Typography>Das Abo verlängert sich jeden Monat automatisch. Du kannst jeden Monat online oder per E-Mail kündigen mit Wirkung für den folgenden Monat.</Typography>
                                </Grid>

                                <FormControl fullWidth>
                                    <TextField id="outlined-basic" variant="outlined" label="Kartennummer" onChange={evt => {}} />
                                </FormControl>

                                <Grid container spacing={1}>
                                    <Grid item xs={6}>
                                        <FormControl fullWidth>
                                            <TextField id="outlined-basic" variant="outlined" label="Ablaufdatum der Karte:" onChange={evt => {}} />
                                        </FormControl>
                                    </Grid>

                                    <Grid item xs={6}>
                                        <FormControl fullWidth>
                                            <TextField id="outlined-basic" variant="outlined" label="Sicherheitscode" onChange={evt => {}} />
                                        </FormControl>
                                    </Grid>
                                </Grid>

                                <FormControl fullWidth>
                                    <Button variant="contained" className="btn-submit" endIcon={<ArrowForwardIcon />} onClick={this.checkFormPayment}>Jetzt zahlungspflichtig bestellen</Button>
                                </FormControl>
                            </form>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        );
    }
}

export default Registration;