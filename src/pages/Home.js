import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from '@material-ui/core/Typography';
import PlayArrowOutlinedIcon from '@material-ui/icons/PlayArrowOutlined';

import '../Main.css';

//
class Home extends Component
{
    constructor()
    {
        super();
    }

    //
    render()
    {
        const settings =
            {
                dots: true,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                autoplay: true,
                speed: 500,
                autoplaySpeed: 50000,
                cssEase: "linear"
            };

        return (
            <div className="page-home">
                {/* slider */}
                <Grid className="slider-box main-slider">
                    <Slider {...settings}>
                        <Grid className="slide-item">
                            <img className="image" src={`${process.env.PUBLIC_URL}/image/post.jpg`}  />
                            <Grid className="title-des-btn">
                                <Typography className="title">Lorem ipsum dolor sit amet</Typography>
                                <Typography className="des">Lorem ipsum dolor sit amet, consectetur</Typography>
                                <Link to="/excercise" className="btn">Excercises</Link>
                            </Grid>
                            <Grid className="main-slider-cover"></Grid>
                        </Grid>

                        <Grid className="slide-item">
                            <img className="image" src={`${process.env.PUBLIC_URL}/image/post.jpg`}  />
                            <Grid className="title-des-btn">
                                <Typography className="title">Lorem ipsum dolor sit amet</Typography>
                                <Typography className="des">Lorem ipsum dolor sit amet, consectetur</Typography>
                                <Link to="/excercise" className="btn">Excercises</Link>
                            </Grid>
                            <Grid className="main-slider-cover"></Grid>
                        </Grid>

                        <Grid className="slide-item">
                            <img className="image" src={`${process.env.PUBLIC_URL}/image/post.jpg`}  />
                            <Grid className="title-des-btn">
                                <Typography className="title">Lorem ipsum dolor sit amet</Typography>
                                <Typography className="des">Lorem ipsum dolor sit amet, consectetur</Typography>
                                <Link to="/excercise" className="btn">Excercises</Link>
                            </Grid>
                            <Grid className="main-slider-cover"></Grid>
                        </Grid>
                    </Slider>
                </Grid>

                {/* post top */}
                <Grid className="post-top-full">
                    <Container maxWidth="xl">
                        <Grid container spacing={3}>
                            <Grid item className="post-item">
                                <Link to="/excercise">
                                    <Grid className="image-box">
                                        <Grid className="slider-box">
                                            <Slider {...settings}>
                                                <Grid className="slide-item">
                                                    <img className="image" src={`${process.env.PUBLIC_URL}/image/post.jpg`}  />
                                                </Grid>

                                                <Grid className="slide-item">
                                                    <img className="image" src={`${process.env.PUBLIC_URL}/image/post.jpg`}  />
                                                </Grid>

                                                <Grid className="slide-item">
                                                    <img className="image" src={`${process.env.PUBLIC_URL}/image/post.jpg`}  />
                                                </Grid>
                                            </Slider>

                                            <Grid className="title-des-btn">
                                                <Typography className="title">Lorem ipsum dolor sit amet</Typography>
                                                <Typography className="btn">Excercises</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid className="des-title">
                                        <Typography className="title">Lorem ipsum dolar Lorem</Typography>
                                        <Typography className="des">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</Typography>
                                    </Grid>
                                </Link>
                            </Grid>

                            <Grid item className="post-item">
                                <Link to="/excercise">
                                    <Grid className="image-box">
                                        <Grid className="slider-box">
                                            <Slider {...settings}>
                                                <Grid className="slide-item">
                                                    <img className="image" src={`${process.env.PUBLIC_URL}/image/post.jpg`}  />
                                                </Grid>

                                                <Grid className="slide-item">
                                                    <img className="image" src={`${process.env.PUBLIC_URL}/image/post.jpg`}  />
                                                </Grid>

                                                <Grid className="slide-item">
                                                    <img className="image" src={`${process.env.PUBLIC_URL}/image/post.jpg`}  />
                                                </Grid>
                                            </Slider>

                                            <Grid className="title-des-btn">
                                                <Typography className="title">Lorem ipsum dolor sit amet</Typography>
                                                <Typography className="btn">Excercises</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid className="des-title">
                                        <Typography className="title">Lorem ipsum dolar Lorem</Typography>
                                        <Typography className="des">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</Typography>
                                    </Grid>
                                </Link>
                            </Grid>

                            <Grid item className="post-item">
                                <Link to="/excercise">
                                    <Grid className="image-box">
                                        <Grid className="slider-box">
                                            <Slider {...settings}>
                                                <Grid className="slide-item">
                                                    <img className="image" src={`${process.env.PUBLIC_URL}/image/post.jpg`}  />
                                                </Grid>

                                                <Grid className="slide-item">
                                                    <img className="image" src={`${process.env.PUBLIC_URL}/image/post.jpg`}  />
                                                </Grid>

                                                <Grid className="slide-item">
                                                    <img className="image" src={`${process.env.PUBLIC_URL}/image/post.jpg`}  />
                                                </Grid>
                                            </Slider>

                                            <Grid className="title-des-btn">
                                                <Typography className="title">Lorem ipsum dolor sit amet</Typography>
                                                <Typography className="btn">Excercises</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid className="des-title">
                                        <Typography className="title">Lorem ipsum dolar Lorem</Typography>
                                        <Typography className="des">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</Typography>
                                    </Grid>
                                </Link>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>

                {/* post favorites */}
                <Grid className="post-top">
                    <Container maxWidth="xl">
                        <Grid container spacing={3}>
                            <Grid className="section-title" item xs={12}>My Favorites List</Grid>

                            <Grid item className="post-item">
                                <Link to="/">
                                    <img className="image" src={`${process.env.PUBLIC_URL}/image/post.jpg`}  />
                                    <Typography className="title">Lorem ipsum dolar Lorem</Typography>
                                    <PlayArrowOutlinedIcon className="icon" />
                                </Link>
                            </Grid>

                            <Grid item className="post-item">
                                <Link to="/">
                                    <img className="image" src={`${process.env.PUBLIC_URL}/image/post.jpg`}  />
                                    <Typography className="title">Lorem ipsum dolar Lorem</Typography>
                                    <PlayArrowOutlinedIcon className="icon" />
                                </Link>
                            </Grid>

                            <Grid item className="post-item">
                                <Link to="/">
                                    <img className="image" src={`${process.env.PUBLIC_URL}/image/post.jpg`}  />
                                    <Typography className="title">Lorem ipsum dolar Lorem</Typography>
                                    <PlayArrowOutlinedIcon className="icon" />
                                </Link>
                            </Grid>

                            <Grid item className="post-item">
                                <Link to="/">
                                    <img className="image" src={`${process.env.PUBLIC_URL}/image/post.jpg`}  />
                                    <Typography className="title">Lorem ipsum dolar Lorem</Typography>
                                    <PlayArrowOutlinedIcon className="icon" />
                                </Link>
                            </Grid>

                            <Grid item className="post-item">
                                <Link to="/">
                                    <img className="image" src={`${process.env.PUBLIC_URL}/image/post.jpg`}  />
                                    <Typography className="title">Lorem ipsum dolar Lorem</Typography>
                                    <PlayArrowOutlinedIcon className="icon" />
                                </Link>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>

                {/* post most like ... */}
                <Grid className="post-top">
                    <Container maxWidth="xl">
                        <Grid container spacing={3}>
                            <Grid className="section-title" item xs={12}>Most Liked/Viewed/Comment</Grid>

                            <Grid item className="post-item">
                                <Link to="/">
                                    <img className="image" src={`${process.env.PUBLIC_URL}/image/post.jpg`}  />
                                    <Typography className="title">Lorem ipsum dolar Lorem</Typography>
                                    <PlayArrowOutlinedIcon className="icon" />
                                </Link>
                            </Grid>

                            <Grid item className="post-item">
                                <Link to="/">
                                    <img className="image" src={`${process.env.PUBLIC_URL}/image/post.jpg`}  />
                                    <Typography className="title">Lorem ipsum dolar Lorem</Typography>
                                    <PlayArrowOutlinedIcon className="icon" />
                                </Link>
                            </Grid>

                            <Grid item className="post-item">
                                <Link to="/">
                                    <img className="image" src={`${process.env.PUBLIC_URL}/image/post.jpg`}  />
                                    <Typography className="title">Lorem ipsum dolar Lorem</Typography>
                                    <PlayArrowOutlinedIcon className="icon" />
                                </Link>
                            </Grid>

                            <Grid item className="post-item">
                                <Link to="/">
                                    <img className="image" src={`${process.env.PUBLIC_URL}/image/post.jpg`}  />
                                    <Typography className="title">Lorem ipsum dolar Lorem</Typography>
                                    <PlayArrowOutlinedIcon className="icon" />
                                </Link>
                            </Grid>

                            <Grid item className="post-item">
                                <Link to="/">
                                    <img className="image" src={`${process.env.PUBLIC_URL}/image/post.jpg`}  />
                                    <Typography className="title">Lorem ipsum dolar Lorem</Typography>
                                    <PlayArrowOutlinedIcon className="icon" />
                                </Link>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>

                {/* post last ... */}
                <Grid className="post-top">
                    <Container maxWidth="xl">
                        <Grid container spacing={3}>
                            <Grid className="section-title" item xs={12}>Last Viewed/Watched List</Grid>

                            <Grid item className="post-item">
                                <Link to="/">
                                    <img className="image" src={`${process.env.PUBLIC_URL}/image/post.jpg`}  />
                                    <Typography className="title">Lorem ipsum dolar Lorem</Typography>
                                    <PlayArrowOutlinedIcon className="icon" />
                                </Link>
                            </Grid>

                            <Grid item className="post-item">
                                <Link to="/">
                                    <img className="image" src={`${process.env.PUBLIC_URL}/image/post.jpg`}  />
                                    <Typography className="title">Lorem ipsum dolar Lorem</Typography>
                                    <PlayArrowOutlinedIcon className="icon" />
                                </Link>
                            </Grid>

                            <Grid item className="post-item">
                                <Link to="/">
                                    <img className="image" src={`${process.env.PUBLIC_URL}/image/post.jpg`}  />
                                    <Typography className="title">Lorem ipsum dolar Lorem</Typography>
                                    <PlayArrowOutlinedIcon className="icon" />
                                </Link>
                            </Grid>

                            <Grid item className="post-item">
                                <Link to="/">
                                    <img className="image" src={`${process.env.PUBLIC_URL}/image/post.jpg`}  />
                                    <Typography className="title">Lorem ipsum dolar Lorem</Typography>
                                    <PlayArrowOutlinedIcon className="icon" />
                                </Link>
                            </Grid>

                            <Grid item className="post-item">
                                <Link to="/">
                                    <img className="image" src={`${process.env.PUBLIC_URL}/image/post.jpg`}  />
                                    <Typography className="title">Lorem ipsum dolar Lorem</Typography>
                                    <PlayArrowOutlinedIcon className="icon" />
                                </Link>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>

                {/* section-lorem */}
                <Grid className="section-lorem">
                    <Container maxWidth="md">
                        <Grid container spacing={3}>
                            <Grid className="section-title-2" item xs={12}>Lorem Ipsum</Grid>

                            <Grid item sm={6} xs={12} className="title-des">
                                <Typography className="title">Lorem ipsum dolor sit amet</Typography>
                                <Typography className="des">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
                            </Grid>

                            <Grid item sm={6} xs={12} className="title-des">
                                <Typography className="title">Lorem ipsum dolor sit amet</Typography>
                                <Typography className="des">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
                            </Grid>
                        </Grid>
                    </Container>

                    <Grid className="cover-red"></Grid>
                </Grid>
            </div>
        );
    }
}

export default Home;