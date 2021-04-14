import React, {Component} from "react";
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import ReplyOutlinedIcon from '@material-ui/icons/ReplyOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import CreateNewFolderOutlinedIcon from '@material-ui/icons/CreateNewFolderOutlined';
import Badge from '@material-ui/core/Badge';
import Radio from '@material-ui/core/Radio';
import Popover from '@material-ui/core/Popover';
import RadioGroup from '@material-ui/core/RadioGroup';
import AddIcon from '@material-ui/icons/Add';
import PlayArrowOutlinedIcon from '@material-ui/icons/PlayArrowOutlined';

import '../Main.css';

//
class Excercise extends Component
{
    constructor()
    {
        super();

        this.state = {autoPlay: true, popUpOpen: false, tabValue: 0, listId: "3"};
        this.tabChange = this.tabChange.bind(this);
        this.autoPlayChange = this.autoPlayChange.bind(this);
        this.iconClick = this.iconClick.bind(this);
        this.closePopUp = this.closePopUp.bind(this);
        this.listChange = this.listChange.bind(this);
        this.addList = this.addList.bind(this);
    }

    autoPlayChange(event)
    {
        this.setState({autoPlay: !this.state.autoPlay});
        alert("auto play changed");
    }

    iconClick(event, type)
    {
        switch(type)
        {
            case "like": break;
            case "unlike": break;
            case "message": break;
            case "view": break;
            case "share": break;
            case "favourite": break;
            case "addList": this.setState({popUpOpen: event.currentTarget}); break;
            default: break;
        }
    }

    listChange(event)
    {
        this.setState({listId: event.target.value, popUpOpen: null});
    }

    addList(event)
    {
        this.setState({popUpOpen: null});
        alert("add new");
    }

    closePopUp(event)
    {
        this.setState({popUpOpen: null});
    }

    tabChange(event, newValue)
    {
        this.setState({tabValue: newValue});
    }

    //
    render()
    {
        const open = Boolean(this.state.popUpOpen);
        const id = open ? 'simple-popover' : undefined;

        return (
            <div className="page-excercise page-content">
                <Container maxWidth="xl">
                    <Grid container spacing={3}>
                        {/* * */}
                        <Grid className="section-title" item xs={12}>Lorem ipsum</Grid>

                        <Grid className="banner-box" item xs={12}>
                            <Grid container>
                                <Grid item className="image-box">
                                    <img src={`${process.env.PUBLIC_URL}/image/post.jpg`}  />
                                </Grid>

                                <Grid item className="des-box">
                                    <Typography className="line">Lorem ipsum</Typography>
                                    <Typography className="line">Lorem ipsum dolor sit amet</Typography>
                                    <Typography className="line">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>
                                </Grid>
                            </Grid>
                        </Grid>

                        {/* icon */}
                        <Grid item xs={12} className="icon-bar">
                            <Grid className="icon-box">
                                <img className="icon-person" src={`${process.env.PUBLIC_URL}/image/post.jpg`}  />

                                <FormControlLabel className="icon-label" control={<ThumbUpAltOutlinedIcon className="icon" />} label="Like" onClick={() => this.iconClick("like")} />
                                <FormControlLabel className="icon-label" control={<ThumbDownAltOutlinedIcon className="icon" />} label="Unlike" onClick={() => this.iconClick("unlike")} />
                                <Badge badgeContent={4}><FormControlLabel className="icon-label" control={<ChatBubbleOutlineOutlinedIcon className="icon" />} label="Messages" onClick={() => this.iconClick("message")} /></Badge>
                                <FormControlLabel className="icon-label" control={<VisibilityOutlinedIcon className="icon" />} label="Views" onClick={() => this.iconClick("view")} />
                                <FormControlLabel className="icon-label" control={<ReplyOutlinedIcon className="icon reverse" />} label="Share" onClick={() => this.iconClick("share")} />
                                <FormControlLabel className="icon-label" control={<FavoriteBorderOutlinedIcon className="icon" />} label="Favourite" onClick={() => this.iconClick("favourite")} />
                                <FormControlLabel className="icon-label" control={<CreateNewFolderOutlinedIcon className="icon" />} label="Add to list" onClick={(e) => this.iconClick(e, "addList")} aria-describedby={id} />
                            </Grid>

                            <Popover className="pop-up-list" id={id} open={open} anchorEl={this.state.popUpOpen} onClose={this.closePopUp} anchorOrigin={{vertical: 'bottom', horizontal: 'center'}} transformOrigin={{vertical: 'top', horizontal: 'center'}}>
                                <Button className="btn-add" onClick={this.addList}><AddIcon className="icon" /> Add new training</Button>

                                <RadioGroup aria-label="list-group" name="list-group" value={this.state.listId} onChange={this.listChange}>
                                    <FormControlLabel value="1" control={<Radio />} label="Lorem 1" />
                                    <FormControlLabel value="2" control={<Radio />} label="Lorem 2" />
                                    <FormControlLabel value="3" control={<Radio />} label="Lorem 3" />
                                    <FormControlLabel value="4" control={<Radio />} label="Lorem 4" />
                                </RadioGroup>
                            </Popover>

                            <FormControlLabel className="auto-play-box" labelPlacement="start" control={<Switch checked={this.state.autoPlay} onChange={this.autoPlayChange} name="autoPlay" />} label="Auto Play" />
                        </Grid>

                        {/* des-download-graphic */}
                        <Grid item className="des-download-graphic">
                            <Grid container spacing={3}>
                                <Grid className="" item xs={12}>
                                    <Tabs className="tab-panel" value={this.state.tabValue} onChange={this.tabChange}>
                                        <Tab className="tab" label="Description" />
                                        <Tab className="tab" label="Downloads" />
                                        <Tab className="tab" label="Graphics/animated Gifs" />
                                    </Tabs>
                                </Grid>

                                <Grid className="" item xs={12}>
                                    <TabPanel value={this.state.tabValue} index={0}>
                                        <Grid className="des-title">
                                            <Typography className="title">Lorem ipsum</Typography>
                                            <Typography className="des">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat  cupidatat non proident, sunt in culpa qui officia deseruntmollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
                                        </Grid>
                                    </TabPanel>

                                    <TabPanel value={this.state.tabValue} index={1}>
                                        <Grid className="download-box" container alignItems="center">
                                            <div className="title-des-size">
                                                <Typography className="title">Downloads</Typography>
                                                <Typography className="des">Lorem ipsum-Lorem ipsum</Typography>
                                                <Typography className="size">49 MB</Typography>
                                            </div>

                                            <div className="btn-download">
                                                <Link to="/" className="btn">Donwload</Link>
                                            </div>
                                        </Grid>
                                    </TabPanel>

                                    <TabPanel value={this.state.tabValue} index={2}>
                                        <Grid container spacing={2} className="graphic-animated-gif">
                                            <Grid item className="item">
                                                <Link to="/" className="link-image"><img className="image" src={`${process.env.PUBLIC_URL}/image/post.jpg`}  /></Link>
                                            </Grid>

                                            <Grid item className="item">
                                                <Link to="/" className="link-image"><img className="image" src={`${process.env.PUBLIC_URL}/image/post.jpg`}  /></Link>
                                            </Grid>

                                            <Grid item className="item">
                                                <Link to="/" className="link-image"><img className="image" src={`${process.env.PUBLIC_URL}/image/post.jpg`}  /></Link>
                                            </Grid>

                                            <Grid item className="item">
                                                <Link to="/" className="link-image"><img className="image" src={`${process.env.PUBLIC_URL}/image/post.jpg`}  /></Link>
                                            </Grid>

                                            <Grid item className="item">
                                                <Link to="/" className="link-image"><img className="image" src={`${process.env.PUBLIC_URL}/image/post.jpg`}  /></Link>
                                            </Grid>

                                            <Grid item className="item">
                                                <Link to="/" className="link-image"><img className="image" src={`${process.env.PUBLIC_URL}/image/post.jpg`}  /></Link>
                                            </Grid>

                                            <Grid item className="item">
                                                <Link to="/" className="link-image"><img className="image" src={`${process.env.PUBLIC_URL}/image/post.jpg`}  /></Link>
                                            </Grid>

                                            <Grid item className="item">
                                                <Link to="/" className="link-image"><img className="image" src={`${process.env.PUBLIC_URL}/image/post.jpg`}  /></Link>
                                            </Grid>
                                        </Grid>
                                    </TabPanel>
                                </Grid>
                            </Grid>
                        </Grid>

                        {/* related video */}
                        <Grid item className="related-post">
                            <Grid container spacing={3}>
                                <Grid className="section-title" item xs={12}>Related Videos</Grid>

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
                        </Grid>

                        {/* category */}
                        <Grid item className="category">
                            <Grid container spacing={3}>
                                <Grid className="section-title" item xs={12}>Categories</Grid>

                                <Grid className="category-link" item xs={12}>
                                    <Link to="/">Lorem ipsum</Link>
                                    <Link to="/">Lorem ipsum dolor sit</Link>
                                    <Link to="/">Lorem ipsum dolor sit amet ipsum</Link>
                                    <Link to="/">Lorem ipsum dolor sit</Link>
                                    <Link to="/">Lorem ipsum</Link>
                                    <Link to="/">Lorem ipsum dolor sit</Link>
                                    <Link to="/">Lorem ipsum dolor sit amet ipsum</Link>
                                    <Link to="/">Lorem ipsum dolor sit</Link>
                                    <Link to="/">Lorem ipsum</Link>
                                    <Link to="/">Lorem ipsum dolor sit</Link>
                                    <Link to="/">Lorem ipsum dolor sit amet ipsum</Link>
                                    <Link to="/">Lorem ipsum dolor sit</Link>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        );
    }
}

function TabPanel(props)
{
    const { children, value, index, ...other } = props;

    return(
        <div role="tabpanel" hidden={value !== index} id={`scrollable-force-tabpanel-${index}`} aria-labelledby={`scrollable-force-tab-${index}`} {...other}>
            {value === index && (<div className="tab-panel-data">{children}</div>)}
        </div>
    );
}

TabPanel.propTypes =
    {
        children: PropTypes.node,
        index: PropTypes.any.isRequired,
        value: PropTypes.any.isRequired,
    };

export default Excercise;