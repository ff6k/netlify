import {Link} from "react-router-dom";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import '../Main.css';

//
function Footer()
{
    return (
        <div className="footer-bar">
            <Container maxWidth="xl">
                <Grid container spacing={3} justify="center" alignItems="center">
                    <Grid className="col-left" item md={2} sm={12} xs={12}>
                        <div className="copy-right">© ABC, 2020 |</div>
                        <div className="mail">abc@gmail.com</div>
                    </Grid>

                    <Grid className="col-right" item md={10} sm={12} xs={12}>
                        <Link to="/">Third Party License Notice</Link>
                        <Link to="/">Cookie-Richtlinie *</Link>
                        <Link to="/">Data Policy *</Link>
                        <Link to="/">Terms of use *</Link>
                        <Link to="/">Imprint *</Link>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Footer;