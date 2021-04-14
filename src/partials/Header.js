import React, {Component} from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import DehazeIcon from '@material-ui/icons/Dehaze';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import {Link} from "react-router-dom";
import Slide from '@material-ui/core/Slide';
import CloseIcon from '@material-ui/icons/Close';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Typography from "@material-ui/core/Typography";
import $ from 'jquery';

import logo from '../logo.png';
import '../Main.css';
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import Switch from "@material-ui/core/Switch/Switch";
import TextField from "@material-ui/core/TextField/TextField";

//
class Footer extends Component
{
    constructor()
    {
        super();

        this.state = {menuOpen: false, menuLevel2Open: false};
        this.menuOpenClose = this.menuOpenClose.bind(this);
        this.btnLogin = this.btnLogin.bind(this);
        this.searchChange = this.searchChange.bind(this);
    }

    menuOpenClose(status)
    {
        if(status) document.body.classList.add("menu-open"); else document.body.classList.remove("menu-open");

        this.setState({menuOpen: status, menuLevel2Open: false});
    }

    searchChange(event)
    {
        console.log(event.target.value);
    }

    btnLogin()
    {
        this.setState({menuOpen: false});
    }

    componentDidMount()
    {
        this.componentDidUpdate()
    }

    componentDidUpdate()
    {
        let _this = this;

        $(".menu-level-1 .link-box").unbind("click").click
        (
            function()
            {
                let menuIndex = $(this).attr("data-index");

                // hide search box
                $(".menu-drawer .search-box").removeClass("show").addClass("hide");

                // hide level 2
                $(".menu-level-2-sub").removeClass("show").addClass("hide");
                $(".menu-level-2 .link-box").removeClass("active");
                $(".menu-level-2 .col-right").removeClass("hide").addClass("show");
                $(".menu-level-3").removeClass("show").addClass("hide");

                // show level 2
                $(".menu-level-1").addClass("menu-level-1-min");
                $(".menu-level-1 .link-box").removeClass("active");
                $(this).addClass("active");

                setTimeout
                (
                    function()
                    {
                        $(".menu-level-2-sub").removeClass("show").addClass("hide");
                        $(".menu-level-2-sub[data-index=" + menuIndex + "]").removeClass("hide").addClass("show");
                    },
                    100
                );

                // show btn back
                $(".btn-menu-back").addClass("show");

                // change login icon
                $(".btn-login-2").addClass("status-2");

                // change bottom-bar
                _this.setState({menuLevel2Open: true});
                $(".menu-drawer .bottom-bar").addClass("status-2");
            }
        );

        $(".menu-level-2 .link-box").unbind("click").click
        (
            function()
            {
                let menuIndex = $(this).attr("data-index");

                $(this).parent().parent().find(".col-right").removeClass("show").addClass("hide");

                $(".menu-level-2 .link-box").removeClass("active");
                $(this).addClass("active");

                // show menu level 3
                $(".menu-level-3").removeClass("show").addClass("hide");
                $(".menu-level-3[data-index=" + menuIndex + "]").removeClass("hide").addClass("show");
            }
        );

        $(".btn-menu-back").unbind("click").click
        (
            function()
            {
                // hide level 2
                $(".menu-level-1").removeClass("menu-level-1-min");
                $(".menu-level-1 .link-box").removeClass("active");

                // show search box
                $(".menu-drawer .search-box").removeClass("hide").addClass("show");

                // hide btn back
                $(".btn-menu-back").removeClass("show");

                // change login icon
                $(".btn-login-2").removeClass("status-2");

                // change bottom-bar
                _this.setState({menuLevel2Open: false});
                $(".menu-drawer .bottom-bar").removeClass("status-2");
            }
        );
    }

    //
    render()
    {
        return (
            <div className="header-bar">
                <Container maxWidth="xl">
                    <Grid className="btn-menu-box">
                        <Button className="btn-menu" onClick={() => {this.menuOpenClose(true)}}><DehazeIcon style={{ color: '#ffffff' }} /> <span className="title">Menü</span></Button>
                    </Grid>

                    <Grid className="logo-box">
                        <img className="logo" src={logo} />
                    </Grid>

                    <Grid className="btn-login-box">
                        <Link to="/login" onClick={this.btnLogin}><IconButton className="btn-login"><PersonIcon className="icon" style={{ color: '#ffffff' }} /><span className="title">My Account</span></IconButton></Link>
                    </Grid>
                </Container>

                <Slide direction="right" in={this.state.menuOpen} mountOnEnter unmountOnExit>
                    <Grid container className="menu-drawer">
                        {/* top */}
                        <Button className="btn-menu-close" onClick={() => {this.menuOpenClose(false)}}><CloseIcon style={{ color: '#ffffff' }} /> <span className="title">Close Menü</span></Button>
                        <Button className="btn-menu-back"><ArrowBackIosIcon className="icon" /> <span className="title">Back</span></Button>
                        <Link to="/login" onClick={this.btnLogin}><IconButton className="btn-login-2"><AccountCircleOutlinedIcon className="icon" /><span className="title">My Account</span></IconButton></Link>

                        {/* level 1 */}
                        <Grid container className="menu-level-1">
                            <Grid item className="col-left" xs={8}>
                                <FormControlLabel className="search-box" labelPlacement="start" control={<TextField id="standard-basic" onChange={this.searchChange} />} label="Search:" />

                                <Grid className="link-box" data-index="1" container alignItems="center">
                                    <Grid className="title-des">
                                        <Typography className="title">Single Exercises</Typography>
                                        <Typography className="des">Structured by age, forms, contents and goals.</Typography>
                                    </Grid>
                                    <ArrowForwardIosOutlinedIcon className="icon" />
                                </Grid>

                                <Grid className="link-box" data-index="2" container alignItems="center">
                                    <Grid className="title-des">
                                        <Typography className="title">Complete Training Sessions (60-90min)</Typography>
                                        <Typography className="des">Train hard, planning smart.</Typography>
                                    </Grid>
                                    <ArrowForwardIosOutlinedIcon className="icon" />
                                </Grid>

                                <Grid className="link-box" data-index="3" container alignItems="center">
                                    <Grid className="title-des">
                                        <Typography className="title">Skill Upgrade</Typography>
                                        <Typography className="des">Learning and knowledge area.</Typography>
                                    </Grid>
                                    <ArrowForwardIosOutlinedIcon className="icon" />
                                </Grid>

                                <Grid className="link-box" data-index="4" container alignItems="center">
                                    <Grid className="title-des">
                                        <Typography className="title">For Scrolling Lovers</Typography>
                                        <Typography className="des">Your entire content feed</Typography>
                                    </Grid>
                                    <ArrowForwardIosOutlinedIcon className="icon" />
                                </Grid>

                                <Grid className="link-box" data-index="5" container alignItems="center">
                                    <Grid className="title-des">
                                        <Typography className="title">Help</Typography>
                                        <Typography className="des">FAQ & how to handle this tool</Typography>
                                    </Grid>
                                    <ArrowForwardIosOutlinedIcon className="icon" />
                                </Grid>

                                <Grid className="link-box" data-index="6" container alignItems="center">
                                    <Grid className="title-des">
                                        <Typography className="title">What we can do for you.</Typography>
                                        <Typography className="des">FAQ & how to handle this tool</Typography>
                                    </Grid>
                                    <ArrowForwardIosOutlinedIcon className="icon" />
                                </Grid>

                                <Grid className="link-box" data-index="7" container alignItems="center">
                                    <Grid className="title-des">
                                        <Typography className="title">Champions Corner</Typography>
                                        <Typography className="des">Lorem ipsum</Typography>
                                    </Grid>
                                    <ArrowForwardIosOutlinedIcon className="icon" />
                                </Grid>
                            </Grid>

                            <Grid item className="col-right" xs={4}>
                                <Typography className="title">Top Links</Typography>

                                <Link to="/">One drill of the week</Link>
                                <Link to="/">One blogpost</Link>
                                <Link to="/">Webinar of the week</Link>

                                <Typography className="title2">Big Promo Area</Typography>
                                <Grid className="image">
                                    <img className="image" src={`${process.env.PUBLIC_URL}/image/post.jpg`}  />
                                </Grid>
                            </Grid>
                        </Grid>

                        {/* level 2 */}
                        <Slide direction="left" in={this.state.menuLevel2Open} mountOnEnter unmountOnExit>
                            <Grid container className="menu-level-2">
                                {/* level 2 - 1 */}
                                <Grid container className="menu-level-2-sub" data-index="1">
                                    <Grid item className="col-left" xs={8}>
                                        <Typography className="title-main">Single Exercises</Typography>

                                        <Grid className="link-box" data-index="1" container alignItems="center">
                                            <Grid className="title-des">
                                                <Typography className="title">Alle Trainingsformen (Übungen)</Typography>
                                            </Grid>
                                            <ArrowForwardIosOutlinedIcon className="icon" />
                                        </Grid>

                                        <Grid className="link-box" data-index="2" container alignItems="center">
                                            <Grid className="title-des">
                                                <Typography className="title">Altersbereiche</Typography>
                                            </Grid>
                                            <ArrowForwardIosOutlinedIcon className="icon" />
                                        </Grid>

                                        <Grid className="link-box" data-index="3" container alignItems="center">
                                            <Grid className="title-des">
                                                <Typography className="title">Trainingsschwerpunkt / Ziel</Typography>
                                            </Grid>
                                            <ArrowForwardIosOutlinedIcon className="icon" />
                                        </Grid>

                                        <Grid className="link-box" data-index="4" container alignItems="center">
                                            <Grid className="title-des">
                                                <Typography className="title">Übungen nach Baustein</Typography>
                                            </Grid>
                                            <ArrowForwardIosOutlinedIcon className="icon" />
                                        </Grid>

                                        <Grid className="link-box" data-index="5" container alignItems="center">
                                            <Grid className="title-des">
                                                <Typography className="title">Individual Training</Typography>
                                            </Grid>
                                            <ArrowForwardIosOutlinedIcon className="icon" />
                                        </Grid>
                                    </Grid>

                                    <Grid item className="col-right" xs={4}>
                                        <Typography className="title">Top Links</Typography>

                                        <Link to="/">One drill of the week</Link>
                                        <Link to="/">One blogpost</Link>
                                        <Link to="/">Webinar of the week</Link>

                                        <Typography className="title2">Big Promo Area</Typography>
                                        <Grid className="image">
                                            <img className="image" src={`${process.env.PUBLIC_URL}/image/post.jpg`}  />
                                        </Grid>
                                    </Grid>

                                    {/* level 3 */}
                                    <Grid item className="menu-level-3 hide" data-index="1" xs={4}>
                                        <Link to="/">Alle Übungen in diesem </Link>
                                        <Link to="/">Altersbereich</Link>
                                        <Link to="/">Passspiel</Link>
                                        <Link to="/">Ballan- und Mitnahme</Link>
                                        <Link to="/">Torschuss</Link>
                                        <Link to="/">Dribbling</Link>
                                        <Link to="/">Minispiel</Link>
                                        <Link to="/">Fangspiel/Schnelligkeit</Link>
                                        <Link to="/">Technik/Finten</Link>
                                        <Link to="/">1-gegen-1</Link>
                                        <Link to="/">Üz UZ GZ</Link>
                                    </Grid>

                                    <Grid item className="menu-level-3 hide" data-index="2" xs={4}>
                                        <Link to="/">A</Link>
                                    </Grid>

                                    <Grid item className="menu-level-3 hide" data-index="3" xs={4}>
                                        <Link to="/">B</Link>
                                    </Grid>

                                    <Grid item className="menu-level-3 hide" data-index="4" xs={4}>
                                        <Link to="/">C</Link>
                                    </Grid>

                                    <Grid item className="menu-level-3 hide" data-index="5" xs={4}>
                                        <Link to="/">D</Link>
                                    </Grid>
                                </Grid>

                                {/* level 2 - 2 */}
                                <Grid container className="menu-level-2-sub" data-index="2">
                                    <Grid item className="col-left" xs={8}>
                                        <Typography className="title-main">Complete Training Sessions</Typography>

                                        <Grid className="link-box" data-index="1" container alignItems="center">
                                            <Grid className="title-des">
                                                <Typography className="title">U7</Typography>
                                            </Grid>
                                            <ArrowForwardIosOutlinedIcon className="icon" />
                                        </Grid>

                                        <Grid className="link-box" data-index="2" container alignItems="center">
                                            <Grid className="title-des">
                                                <Typography className="title">U9</Typography>
                                            </Grid>
                                            <ArrowForwardIosOutlinedIcon className="icon" />
                                        </Grid>

                                        <Grid className="link-box" data-index="3" container alignItems="center">
                                            <Grid className="title-des">
                                                <Typography className="title">U11</Typography>
                                            </Grid>
                                            <ArrowForwardIosOutlinedIcon className="icon" />
                                        </Grid>

                                        <Grid className="link-box" data-index="4" container alignItems="center">
                                            <Grid className="title-des">
                                                <Typography className="title">U13</Typography>
                                            </Grid>
                                            <ArrowForwardIosOutlinedIcon className="icon" />
                                        </Grid>

                                        <Grid className="link-box" data-index="5" container alignItems="center">
                                            <Grid className="title-des">
                                                <Typography className="title">U15</Typography>
                                            </Grid>
                                            <ArrowForwardIosOutlinedIcon className="icon" />
                                        </Grid>

                                        <Grid className="link-box" data-index="6" container alignItems="center">
                                            <Grid className="title-des">
                                                <Typography className="title">U17</Typography>
                                            </Grid>
                                            <ArrowForwardIosOutlinedIcon className="icon" />
                                        </Grid>

                                        <Grid className="link-box" data-index="7" container alignItems="center">
                                            <Grid className="title-des">
                                                <Typography className="title">U19</Typography>
                                            </Grid>
                                            <ArrowForwardIosOutlinedIcon className="icon" />
                                        </Grid>

                                        <Grid className="link-box" data-index="8" container alignItems="center">
                                            <Grid className="title-des">
                                                <Typography className="title">Erwachsene</Typography>
                                            </Grid>
                                            <ArrowForwardIosOutlinedIcon className="icon" />
                                        </Grid>
                                    </Grid>

                                    <Grid item className="col-right" xs={4}>
                                        <Typography className="title">Top Links</Typography>

                                        <Link to="/">One drill of the week</Link>
                                        <Link to="/">One blogpost</Link>
                                        <Link to="/">Webinar of the week</Link>

                                        <Typography className="title2">Big Promo Area</Typography>
                                        <Grid className="image">
                                            <img className="image" src={`${process.env.PUBLIC_URL}/image/post.jpg`}  />
                                        </Grid>
                                    </Grid>
                                </Grid>

                                {/* level 2 - 3 */}
                                <Grid container className="menu-level-2-sub" data-index="3">
                                    <Grid item className="col-left" xs={8}>
                                        <Typography className="title-main">Skill Upgrade</Typography>

                                        <Grid className="link-box" data-index="1" container alignItems="center">
                                            <Grid className="title-des">
                                                <Typography className="title">Kommende Fortbildungen</Typography>
                                            </Grid>
                                            <ArrowForwardIosOutlinedIcon className="icon" />
                                        </Grid>

                                        <Grid className="link-box" data-index="2" container alignItems="center">
                                            <Grid className="title-des">
                                                <Typography className="title">Re-Live/ Webinaraufzeichnungen</Typography>
                                            </Grid>
                                            <ArrowForwardIosOutlinedIcon className="icon" />
                                        </Grid>

                                        <Grid className="link-box" data-index="3" container alignItems="center">
                                            <Grid className="title-des">
                                                <Typography className="title">Lernmodule</Typography>
                                            </Grid>
                                            <ArrowForwardIosOutlinedIcon className="icon" />
                                        </Grid>

                                        <Grid className="link-box" data-index="4" container alignItems="center">
                                            <Grid className="title-des">
                                                <Typography className="title">Interviews (Audio Podcasts + VIdeo Podcast)</Typography>
                                            </Grid>
                                            <ArrowForwardIosOutlinedIcon className="icon" />
                                        </Grid>
                                    </Grid>

                                    <Grid item className="col-right" xs={4}>
                                        <Typography className="title">Top Links</Typography>

                                        <Link to="/">One drill of the week</Link>
                                        <Link to="/">One blogpost</Link>
                                        <Link to="/">Webinar of the week</Link>

                                        <Typography className="title2">Big Promo Area</Typography>
                                        <Grid className="image">
                                            <img className="image" src={`${process.env.PUBLIC_URL}/image/post.jpg`}  />
                                        </Grid>
                                    </Grid>
                                </Grid>

                                {/* level 2 - 4 */}
                                <Grid container className="menu-level-2-sub" data-index="4">
                                    <Grid item className="col-left" xs={8}>
                                        <Typography className="title-main">For scrolling lovers</Typography>

                                        <Grid className="link-box" data-index="1" container alignItems="center">
                                            <Grid className="title-des">
                                                <Typography className="title">Click here and you find everything from category a to z</Typography>
                                            </Grid>
                                            <ArrowForwardIosOutlinedIcon className="icon" />
                                        </Grid>
                                    </Grid>

                                    <Grid item className="col-right" xs={4}>
                                        <Typography className="title">Top Links</Typography>

                                        <Link to="/">One drill of the week</Link>
                                        <Link to="/">One blogpost</Link>
                                        <Link to="/">Webinar of the week</Link>

                                        <Typography className="title2">Big Promo Area</Typography>
                                        <Grid className="image">
                                            <img className="image" src={`${process.env.PUBLIC_URL}/image/post.jpg`}  />
                                        </Grid>
                                    </Grid>
                                </Grid>

                                {/* level 2 - 5 */}
                                <Grid container className="menu-level-2-sub" data-index="5">
                                    <Grid item className="col-left" xs={8}>
                                        <Typography className="title-main">Help</Typography>

                                        <Grid className="link-box" data-index="1" container alignItems="center">
                                            <Grid className="title-des">
                                                <Typography className="title">FAQs</Typography>
                                            </Grid>
                                            <ArrowForwardIosOutlinedIcon className="icon" />
                                        </Grid>

                                        <Grid className="link-box" data-index="2" container alignItems="center">
                                            <Grid className="title-des">
                                                <Typography className="title">How to this tool</Typography>
                                            </Grid>
                                            <ArrowForwardIosOutlinedIcon className="icon" />
                                        </Grid>

                                        <Grid className="link-box" data-index="3" container alignItems="center">
                                            <Grid className="title-des">
                                                <Typography className="title">Contact support</Typography>
                                            </Grid>
                                            <ArrowForwardIosOutlinedIcon className="icon" />
                                        </Grid>
                                    </Grid>

                                    <Grid item className="col-right" xs={4}>
                                        <Typography className="title">Top Links</Typography>

                                        <Link to="/">One drill of the week</Link>
                                        <Link to="/">One blogpost</Link>
                                        <Link to="/">Webinar of the week</Link>

                                        <Typography className="title2">Big Promo Area</Typography>
                                        <Grid className="image">
                                            <img className="image" src={`${process.env.PUBLIC_URL}/image/post.jpg`}  />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Slide>

                        {/* bottom */}
                        <Grid className="bottom-bar" item xs={12}>
                            <Link to="/">Third Party License Notice</Link>
                            <Link to="/">Cookie-Richtlinie *</Link>
                            <Link to="/">Data Policy *</Link>
                            <Link to="/">Terms of use *</Link>
                            <Link to="/">Imprint *</Link>
                        </Grid>
                    </Grid>
                </Slide>
            </div>
        );
    }
}

export default Footer;