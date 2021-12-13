import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Link from '@mui/material/Link';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShareIcon from '@mui/icons-material/Share';
import Typography from '@mui/material/Typography';
import LinkIcon from '@mui/icons-material/Link';
import { CardActionArea } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import { padding } from '@mui/system';
import projectImg from '../../assets/images/project.jpeg';
import portfolioImg from '../../assets/images/portfolio.png';
import ACCImg from '../../assets/images/ACC.png';
import AnomalyImg from '../../assets/images/Anomaly.png';
import SVMImg from '../../assets/images/SVM.png';
import DealershipImg from '../../assets/images/Dealership.png';
import F1Img from '../../assets/images/F1.png';
import FESImg from '../../assets/images/FES.png';
import GarageImg from '../../assets/images/Garage.png';
import HybridtImg from '../../assets/images/Hybrid.png';
import LinearRegressionImg from '../../assets/images/LinearRegression.png';
import LogisticRegressionImg from '../../assets/images/LogisticRegression.png';
import MovieApiImg from '../../assets/images/MovieAPI.png';
import movieLoverAppImg from '../../assets/images/MovieLoverApp.png';
import PcaImg from '../../assets/images/PCA.png';
import RealstateImg from '../../assets/images/Realestate.png';
import SymmetryImg from '../../assets/images/symmetry.png';
import WeatherApiImg from '../../assets/images/WeatherAPI.png';
import WeatherAppImg from '../../assets/images/WeatherApp.png';
import { styled } from '@mui/material/styles';



interface Props {
    title: string;
}

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
        // alignItems: 'center'

    },
});

const cardStyles = {
    width: 400,
    padding: '0',
    boxShadow: 10,
    margin: '2%'
}

export const Projects = (props: Props) => {
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const classes = useStyles();

    return (
        <div id="projects" className={classes.root}>

            {/*///////////////////////////////////////////////////////// Movie Lovers APP ////////////////////////////////////////////////////////////////  */}
            <Card sx={cardStyles}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={movieLoverAppImg}
                        alt="Project"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Movie Lovers App
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h3>Machine Learning, Data Science, Data Analysis, Web Development</h3>
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Link href="https://github.com/Vida-G/Movie-Lovers-Project" target="_blank">
                            <IconButton aria-label="github link">
                                <GitHubIcon />
                            </IconButton>
                        </Link>
                        <Link href="https://movie-lovers-ml.web.app/" target="_blank">
                            <IconButton aria-label="link to website">
                                <LinkIcon />
                            </IconButton>
                        </Link>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Languages: Python, JavaScript/TypeScript, HTML, CSS, SQL</Typography>
                            <Typography paragraph>Libraries: PyTorch, Fast.ai, React, Redux, Flask, Material UI</Typography>
                            <Typography paragraph>
                                A full-stack multi-page web application with a React frontend and Flask backend that provides users
                                with movie suggestions using a machine learning algorithm.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </CardActionArea>
            </Card>
            {/*///////////////////////////////////////////////////////// SVM ////////////////////////////////////////////////////////////////  */}
            <Card sx={cardStyles}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={SVMImg}
                        alt="Project"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Email Spam Classifier using Support Vector Machines (SVMs)
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h3>Machine Learning</h3>
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        {/* <Link href="https://github.com/Vida-G" target="_blank">
                            <IconButton aria-label="github link">
                                <GitHubIcon />
                            </IconButton>
                        </Link>
                        <Link href="https://github.com/" target="_blank">
                            <IconButton aria-label="link to website">
                                <LinkIcon />
                            </IconButton>
                        </Link> */}
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Languages: MATLAB</Typography>
                            <Typography paragraph>
                                Applied SVMs to build a spam filter to classify emails into spam and non-spam email with high accuracy.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </CardActionArea>
            </Card>
            {/*///////////////////////////////////////////////////////// PCA ////////////////////////////////////////////////////////////////  */}
            <Card sx={cardStyles}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={PcaImg}
                        alt="Project"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Face Recognition using Principal Component Analysis (PCA)
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h3>Neural Networks, Optimization, Data Science</h3>
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        {/* <Link href="https://github.com/Vida-G" target="_blank">
                            <IconButton aria-label="github link">
                                <GitHubIcon />
                            </IconButton>
                        </Link>
                        <Link href="https://github.com/" target="_blank">
                            <IconButton aria-label="link to website">
                                <LinkIcon />
                            </IconButton>
                        </Link> */}
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Languages: Python</Typography>
                            <Typography paragraph>Libraries: TensorFlow, NumPy</Typography>
                            <Typography paragraph>
                                Used principal component analysis (PCA) to find a low-dimensional representation of face images.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </CardActionArea>
            </Card>
            {/*///////////////////////////////////////////////////////// Anomaly ////////////////////////////////////////////////////////////////  */}
            <Card sx={cardStyles}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={AnomalyImg}
                        alt="Project"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Anomaly Detection for Telecommunications Network
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h3>Machine Learning, Data Science</h3>
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        {/* <Link href="https://github.com/Vida-G" target="_blank">
                            <IconButton aria-label="github link">
                                <GitHubIcon />
                            </IconButton>
                        </Link>
                        <Link href="https://github.com/" target="_blank">
                            <IconButton aria-label="link to website">
                                <LinkIcon />
                            </IconButton>
                        </Link> */}
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Languages: MATLAB</Typography>
                            <Typography paragraph>
                                Implemented the anomaly detection algorithm and applied it to detect failing servers on a network.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </CardActionArea>
            </Card>
            {/*///////////////////////////////////////////////////////// Logistic Regression ////////////////////////////////////////////////////////////////  */}
            <Card sx={cardStyles}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={LogisticRegressionImg}
                        alt="Project"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Quality Assurance for a Fabrication Plant using Logistic Regression
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h3>Machine Learning</h3>
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        {/* <Link href="https://github.com/Vida-G" target="_blank">
                            <IconButton aria-label="github link">
                                <GitHubIcon />
                            </IconButton>
                        </Link>
                        <Link href="https://github.com/" target="_blank">
                            <IconButton aria-label="link to website">
                                <LinkIcon />
                            </IconButton>
                        </Link> */}
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Languages: MATLAB</Typography>
                            <Typography paragraph>
                                Implemented regularized logistic regression to predict whether microchips from a fabrication plant pass quality assurance (QA).
                                During QA, each microchip goes through various tests to ensure it is functioning correctly.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </CardActionArea>
            </Card>
            {/*///////////////////////////////////////////////////////// Linear Regression ////////////////////////////////////////////////////////////////  */}
            <Card sx={cardStyles}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={LinearRegressionImg}
                        alt="Project"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Profit Prediction for a Food Truck with Linear Regression
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h3>Machine Learning</h3>
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        {/* <Link href="https://github.com/Vida-G" target="_blank">
                            <IconButton aria-label="github link">
                                <GitHubIcon />
                            </IconButton>
                        </Link>
                        <Link href="https://github.com/" target="_blank">
                            <IconButton aria-label="link to website">
                                <LinkIcon />
                            </IconButton>
                        </Link> */}
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Languages: MATLAB</Typography>
                            <Typography paragraph>
                                Implemented linear regression to predict profits for a food truck based on the populations from the cities.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </CardActionArea>
            </Card>
            {/*///////////////////////////////////////////////////////// Medical Robotics ////////////////////////////////////////////////////////////////  */}
            <Card sx={cardStyles}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={FESImg}
                        alt="Project"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Applied Learning Controller on Medical Robotics
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h3>Medical Robotics, Optimization, Learning Controllers</h3>
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        {/* <Link href="https://github.com/Vida-G" target="_blank">
                            <IconButton aria-label="github link">
                                <GitHubIcon />
                            </IconButton>
                        </Link> */}
                        <Link href="https://ieeexplore.ieee.org/document/8423783" target="_blank">
                            <IconButton aria-label="link to website">
                                <LinkIcon />
                            </IconButton>
                        </Link>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Languages: MATLAB/Simulink</Typography>
                            <Typography paragraph>
                                Combination of learnability and passivity concepts are applied to the state-dependent switched cycle-rider system,
                                induced by functional electrical stimulation (FES) of lower muscles with the assistance of an electric motor.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </CardActionArea>
            </Card>
            {/*///////////////////////////////////////////////////////// Car Dealership ////////////////////////////////////////////////////////////////  */}
            <Card sx={cardStyles}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={DealershipImg}
                        alt="Project"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Car Dealership Database
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h3>Data Engineering</h3>
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Link href="https://github.com/Vida-G/Project-Week4" target="_blank">
                            <IconButton aria-label="github link">
                                <GitHubIcon />
                            </IconButton>
                        </Link>
                        {/* <Link href="https://github.com/" target="_blank">
                            <IconButton aria-label="link to website">
                                <LinkIcon />
                            </IconButton>
                        </Link> */}
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Languages: SQL</Typography>
                            <Typography paragraph>Libraries: PostgreSQL, Lucidchart</Typography>
                            <Typography paragraph>
                                Created an ERD for a car dealership and then build the database in PostgreSQL based on the chart.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </CardActionArea>
            </Card>
            {/*///////////////////////////////////////////////////////// Real Estate ////////////////////////////////////////////////////////////////  */}
            <Card sx={cardStyles}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={RealstateImg}
                        alt="Project"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Real Estate Calculator
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h3>Programming</h3>
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Link href="https://github.com/Vida-G/Project-Week3" target="_blank">
                            <IconButton aria-label="github link">
                                <GitHubIcon />
                            </IconButton>
                        </Link>
                        {/* <Link href="https://github.com/" target="_blank">
                            <IconButton aria-label="link to website">
                                <LinkIcon />
                            </IconButton>
                        </Link> */}
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Languages: Python </Typography>
                            <Typography paragraph>
                                This program calculates the rental income of customers based on information like mortgage,
                                insurance, HOA payment, tax and evaluates the investment.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </CardActionArea>
            </Card>
            {/*///////////////////////////////////////////////////////// Parking Garage ////////////////////////////////////////////////////////////////  */}
            <Card sx={cardStyles}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={GarageImg}
                        alt="Project"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Automated Parking Garage
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h3>Programming</h3>
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Link href="https://github.com/Vida-G/Project-Garage" target="_blank">
                            <IconButton aria-label="github link">
                                <GitHubIcon />
                            </IconButton>
                        </Link>
                        {/* <Link href="https://github.com/" target="_blank">
                            <IconButton aria-label="link to website">
                                <LinkIcon />
                            </IconButton>
                        </Link> */}
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Languages: Python</Typography>
                            <Typography paragraph>
                                This program issues tickets for the users based on the available parking spaces and
                                checks if the ticket is paid.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </CardActionArea>
            </Card>
            {/*///////////////////////////////////////////////////////// Symmetry ////////////////////////////////////////////////////////////////  */}
            <Card sx={cardStyles}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={SymmetryImg}
                        alt="Project"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Model Reduction by Symmetry and Dissipativity
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h3>Model Reduction, multi-agent systems, Large-scale systems</h3>
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        {/* <Link href="https://github.com/Vida-G" target="_blank">
                            <IconButton aria-label="github link">
                                <GitHubIcon />
                            </IconButton>
                        </Link> */}
                        <Link href="https://ieeexplore.ieee.org/document/7404243" target="_blank">
                            <IconButton aria-label="link to website">
                                <LinkIcon />
                            </IconButton>
                        </Link>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Languages: MATLAB</Typography>
                            <Typography paragraph>
                                The concept of symmetry is employed as a powerful tool to overcome the complexity of multi-agent
                                systems by reducing the number of multiple interconnections.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </CardActionArea>
            </Card>

            {/*///////////////////////////////////////////////////////// Portfolio ////////////////////////////////////////////////////////////////  */}
            <Card sx={cardStyles}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={portfolioImg}
                        alt="Project"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            My Personal Portfolio Website
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h3>Web Development</h3>
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Link href="https://github.com/Vida-G/My-Portfolio" target="_blank">
                            <IconButton aria-label="github link">
                                <GitHubIcon />
                            </IconButton>
                        </Link>
                        <Link href="https://vida-portfolio.web.app/" target="_blank">
                            <IconButton aria-label="link to website">
                                <LinkIcon />
                            </IconButton>
                        </Link>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Languages: JavaScript/TypeScript, HTML, CSS</Typography>
                            <Typography paragraph>Libraries: React, Material UI </Typography>
                            <Typography paragraph>
                                My portfolio representing my projects, publications, resume, with a contact form.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </CardActionArea>
            </Card>
            {/*///////////////////////////////////////////////////////// Movie Lovers API ////////////////////////////////////////////////////////////////  */}
            <Card sx={cardStyles}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={MovieApiImg}
                        alt="Project"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Movie Lovers API
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h3>Backend Development, Web Development</h3>
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Link href="hhttps://github.com/Vida-G/Movie-Lovers-Project-Main" target="_blank">
                            <IconButton aria-label="github link">
                                <GitHubIcon />
                            </IconButton>
                        </Link>
                        <Link href="https://movie-lovers-main.herokuapp.com/" target="_blank">
                            <IconButton aria-label="link to website">
                                <LinkIcon />
                            </IconButton>
                        </Link>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Languages: Python, Flask, HTML, CSS</Typography>
                            <Typography paragraph>Libraries: Bootstrap</Typography>
                            <Typography paragraph>
                                This API contains information about movies; the genre, year, and a unique ID.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </CardActionArea>
            </Card>
            {/*///////////////////////////////////////////////////////// Weather APP ////////////////////////////////////////////////////////////////  */}
            <Card sx={cardStyles}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={WeatherAppImg}
                        alt="Project"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Weather App
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h3>Web Development</h3>
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Link href="https://github.com/Vida-G/Weather-App-Project" target="_blank">
                            <IconButton aria-label="github link">
                                <GitHubIcon />
                            </IconButton>
                        </Link>
                        <Link href="https://weather-app-project-vg.herokuapp.com/" target="_blank">
                            <IconButton aria-label="link to website">
                                <LinkIcon />
                            </IconButton>
                        </Link>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Languages: JavaScript, HTML, CSS</Typography>
                            <Typography paragraph>Libraries: Bootstrap</Typography>
                            <Typography paragraph>
                                The website gives current temperature, humidity, and weather condition with an adaptive background based on the city name and/or zipcode.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </CardActionArea>
            </Card>
            {/*///////////////////////////////////////////////////////// Weather API ////////////////////////////////////////////////////////////////  */}
            <Card sx={cardStyles}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={WeatherApiImg}
                        alt="Project"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Weather API
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h3>Backend Development, Web Development</h3>
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Link href="https://github.com/Vida-G/weather-api-Project" target="_blank">
                            <IconButton aria-label="github link">
                                <GitHubIcon />
                            </IconButton>
                        </Link>
                        <Link href="https://weather-api-vg.herokuapp.com/" target="_blank">
                            <IconButton aria-label="link to website">
                                <LinkIcon />
                            </IconButton>
                        </Link>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Languages: Python, Flask, HTML, CSS</Typography>
                            <Typography paragraph>Libraries: Bootstrap</Typography>
                            <Typography paragraph>
                                This API contains information about weather conditions, temperature, and wind speed of cities/countries in different dates.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </CardActionArea>
            </Card>
            {/*///////////////////////////////////////////////////////// F1 Racer API ////////////////////////////////////////////////////////////////  */}
            <Card sx={cardStyles}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={F1Img}
                        alt="Project"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            F1 Racer API
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h3>Web Development</h3>
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Link href="https://github.com/Vida-G/HW3-Week6" target="_blank">
                            <IconButton aria-label="github link">
                                <GitHubIcon />
                            </IconButton>
                        </Link>
                        {/* <Link href="https://github.com/" target="_blank">
                            <IconButton aria-label="link to website">
                                <LinkIcon />
                            </IconButton>
                        </Link> */}
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Languages: JavaScript, HTML, CSS</Typography>
                            <Typography paragraph>Libraries: Bootstrap</Typography>
                            <Typography paragraph>
                                The website gives information about drivers' name, nationality, sponsor, and the points
                                based on the season and round.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </CardActionArea>
            </Card>

            {/*///////////////////////////////////////////////////////// Switched Systems ////////////////////////////////////////////////////////////////  */}
            <Card sx={cardStyles}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={HybridtImg}
                        alt="Project"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Design of Switched Controllers with a Passivation Method
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h3>Hybrid Systems, Switched Systems, Control Systems</h3>
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        {/* <Link href="https://github.com/Vida-G" target="_blank">
                            <IconButton aria-label="github link">
                                <GitHubIcon />
                            </IconButton>
                        </Link> */}
                        <Link href="https://ieeexplore.ieee.org/document/7963656" target="_blank">
                            <IconButton aria-label="link to website">
                                <LinkIcon />
                            </IconButton>
                        </Link>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Languages: MATLAB/Simulink </Typography>
                            <Typography paragraph>
                                This project, circumvent the challenges of traditional methods in the design of switched controllers
                                by employing energy-based approaches using an enhanced passivation method.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </CardActionArea>
            </Card>
            {/*///////////////////////////////////////////////////////// ACC/LKC////////////////////////////////////////////////////////////////  */}
            <Card sx={cardStyles}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={ACCImg}
                        alt="Project"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Adaptive Cruise Control (ACC) and Lane Keeping Control (LKC) with a Passivation Method
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h3>Optimization, Hybrid Systems </h3>
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        {/* <Link href="https://github.com/Vida-G" target="_blank">
                            <IconButton aria-label="github link">
                                <GitHubIcon />
                            </IconButton>
                        </Link> */}
                        <Link href="https://github.com/" target="_blank">
                            <IconButton aria-label="link to website">
                                <LinkIcon />
                            </IconButton>
                        </Link>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Languages: MATLAB/Simulink </Typography>
                            <Typography paragraph>Libraries: CarSim</Typography>
                            <Typography paragraph>
                                Optimized the switched controller’s performance by applying the energy-based control methods in
                                Adaptive Cruise Control (ACC) and Lane Keeping Control (LKC).
                            </Typography>
                        </CardContent>
                    </Collapse>
                </CardActionArea>
            </Card>

            {/* ///////////////////////////////////////////////////////// Capstone Project //////////////////////////////////////////////////////////////// 
            <Card sx={cardStyles}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={projectImg}
                        alt="Project"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Future Capstone Project
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h3>Machine Learning, Data Science, Data Analysis, Web Development</h3>
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Link href="https://github.com/Vida-G" target="_blank">
                            <IconButton aria-label="github link">
                                <GitHubIcon />
                            </IconButton>
                        </Link>
                        <Link href="https://github.com/" target="_blank">
                            <IconButton aria-label="link to website">
                                <LinkIcon />
                            </IconButton>
                        </Link>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Languages: Python, Flask, JavaScript/TypeScript, SQL, HTML, CSS</Typography>
                            <Typography paragraph>Libraries: React, Redux, Material UI, Bootstrap</Typography>
                            <Typography paragraph>
                                A website for movie lovers to rate their movies and get new suggestion based on
                                their past ratings and preferences.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </CardActionArea>
            </Card> */}
        </div>
    );
}
