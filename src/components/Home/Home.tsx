import React from 'react';
import { makeStyles } from '@material-ui/core';
import Link from '@mui/material/Link';
import Button from '@material-ui/core/Button';
import { HashLink } from 'react-router-hash-link';
import { Contact, Projects, Publications } from '../../components';
import { borderRadius } from '@material-ui/system';
import Grid from '@mui/material/Grid';
import myImg from '../../assets/images/me.jpg';
import LinkedInImg from '../../assets/images/linkedin.png';
import GithubImg from '../../assets/images/github1.png';
import GoogleScholarImg from '../../assets/images/googlescholar1.png';
import ResearchGateImg from '../../assets/images/rg2.png';
import VidaResume from '../../assets/images/VahidehResume.pdf';
import GG from '../../assets/images/GG.jpeg';
import { createTheme, Theme } from '@material-ui/core/styles';

const theme: Theme = createTheme();

interface Props {
    title: string;
}


const useStyles = makeStyles({
    root: {
        padding: '0',
        margin: '0',
        fontFamily: "'Montserrat', sans-serif",
        overflow: 'visible'
    },
    navbar: {
        position: 'sticky',
        top: '0',
        alignSelf: 'flex-start',  
        marginBottom: '16px',    
    },
    navbar_container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    logo: {
        padding: '1rem 1rem 1rem 1rem',
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            justifyContent: 'space-around'
        }
    },
    logo_a: {
        color: 'rgb(28,24,22)'
    },
    logo_navigation: {
        textDecoration: 'none'
    },
    link_in_grid: {
        display: 'flex',
        justifyContent: 'space-around'
    },
    nav_a: {
        display: 'block',
        padding: '1em',
        color: 'black',
        textDecoration: 'none',
        fontSize: '14pt'
    },
    navigation: {
        display: 'flex',
        listStyle: 'none',
        justifyContent: 'flex-end'
    },
    main: {
        width: '100%',
        height: '100%',
        position: 'absolute'
    },
    main_text: {
        backgroundImage: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.4)), url(${GG})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        // width: '100%',
        minHeight: '80%',
        paddingBottom: '20px',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        position: 'relative',
        padding: '5%',
        color: 'rgba(50,50,50,1)'
    },
    my_photo: {
        backgroundImage: `url(${myImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        height: '300px',
        width: '300px',
        borderRadius: '200%',
        borderColor: 'rgba(255,255,255,1)',
        border: ' solid',
        borderWidth: '10px'
    },
    pro_photo: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    about_text: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10%',
        fontSize: '22pt'
    },
    links_resume: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '40%',
        alignItems: 'center'

    },
    logo_adjust: {
        display: 'flex',
        flexDirection: 'row',
        margin: '20px'
    },
    Logos: {
        borderRadius: '30px 30px 30px 30px',
        width: '50px',
        height: '50px',
        borderWidth: '1px',
        borderStyle: 'solid',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: '15px'
        // marginTop: '30px'
    },
    LinkedInLogo: {
        width: '25px'
    },
    GitHubLogo: {
        width: '25px'
    },
    GoogleScholarLogo: {
        width: '25px'
    },
    ResearchGateLogo: {
        width: '25px'
    }
});

export const Home = (props: Props) => {
    const classes = useStyles();
    return (

        <div className={classes.root}>
            <nav className={classes.navbar}>
                <Grid container className={classes.navbar_container}>
                    <Grid item xs={12} sm={12} md={4} className={classes.logo}>
                        <h1>
                            Vahideh Ghanbari
                        </h1>
                    </Grid>
                    <Grid item xs={12} sm={12} md={8}>
                        <Grid container className={`${classes.navigation} ${classes.logo_navigation}`}>
                            <Grid item xs={12} sm={12} md="auto" className={classes.link_in_grid} >
                                <HashLink
                                    to='/'
                                    className={classes.nav_a}
                                    scroll={el => el.scrollIntoView({ behavior: 'smooth' })}
                                >Home</HashLink>
                            </Grid>
                            <Grid item xs={12} sm={12} md="auto" className={classes.link_in_grid}>
                                <HashLink
                                    to='/#projects'
                                    className={classes.nav_a}
                                    scroll={el => el.scrollIntoView({ behavior: 'smooth' })}
                                >Projects</HashLink>
                            </Grid>
                            <Grid item xs={12} sm={12} md="auto" className={classes.link_in_grid}>
                                <HashLink
                                    to='/#publications'
                                    className={classes.nav_a}
                                    scroll={el => el.scrollIntoView({ behavior: 'smooth' })}
                                >Publications</HashLink>
                            </Grid>
                            <Grid item xs={12} sm={12} md="auto" className={classes.link_in_grid}>
                                <HashLink
                                    to='/#contact'
                                    className={classes.nav_a}
                                    scroll={el => el.scrollIntoView({ behavior: 'smooth' })}
                                >Contact</HashLink>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </nav>
            <main className={classes.main}>
                    <div className={classes.main_text}>
                        <Grid container spacing={2}>
                            <Grid item sm={12} md={5}>
                                <div className={classes.pro_photo}>
                                    <div className={classes.my_photo}></div>
                                    <div className={classes.links_resume}>
                                        <div className={classes.logo_adjust}>
                                            <div className={classes.Logos}>
                                                <a href="https://www.linkedin.com/in/vahidehgh/" target="_blank">
                                                    <img src={LinkedInImg} alt="" className={classes.LinkedInLogo} />
                                                </a>
                                            </div>
                                            <div className={classes.Logos}>
                                                <a href="https://github.com/Vida-G" target="_blank">
                                                    <img src={GithubImg} alt="" className={classes.GitHubLogo} />
                                                </a>
                                            </div>
                                            <div className={classes.Logos}>
                                                <a href="https://scholar.google.com/citations?hl=en&user=mvigNOsAAAAJ&view_op=list_works&gmla=AJsN-F6hxALqhjegliSDRs20rx5fGzrSKmxl6WM8Eb8aDgEXLXOnTqzfkJr5wmhoq5fZIpSHKakd5V6594SCofkbrBoprOapYP6bro77L4dTbxJNaPpvZ2M" target="_blank">
                                                    <img src={GoogleScholarImg} alt="" className={classes.GoogleScholarLogo} />
                                                </a>
                                            </div>
                                            <div className={classes.Logos}>
                                                <a href="https://www.researchgate.net/profile/Vahideh-Ghanbari" target="_blank">
                                                    <img src={ResearchGateImg} alt="" className={classes.ResearchGateLogo} />
                                                </a>
                                            </div>
                                        </div>
                                        <a href={VidaResume} target='_blank' style={{ textDecoration: "none" }}>
                                            <Button
                                                variant="outlined"
                                                size="large"
                                                style={{ border: '2px solid', textTransform: "none", fontSize: "14pt", width: "160px", color: 'black' }}
                                            >
                                                My Resume
                                            </Button>
                                        </a>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item sm={12} md={7} className={classes.about_text} sx={{ p: "10%" }}>
                                {/* <b>Hi, I am Vida! I am a full-stack engineer with the machine learning experience and a Ph.D. in electrical engineering </b> */}
                                <b>Hi, I am Vida! I am a Data Scientist with Full-stack Software Engineering skills and a Ph.D. in Electrical Engineering</b>
                            </Grid>
                        </Grid>
                    </div>
                <Projects title={'Projects'} />
                <Publications title={'Publications'} />
                <Contact title={'Contact'} />
            </main>

        </div>

    )
}

