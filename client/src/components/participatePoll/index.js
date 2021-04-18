import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import WebCam from "../webcam/index";
import Grid from '@material-ui/core/Grid';
import { Checkbox } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        float: "left",
    },
    vertical: {
        float: 'right',
    },
    card: {
        margin: '20px',
        display: 'block',
        [theme.breakpoints.down('xl')]: {
            width: '45vw',
            height: '30vw'
        },
        [theme.breakpoints.down('md')]: {
            width: '45vw',
            height: '30vw'
        },
        [theme.breakpoints.down('xs')]: {
            width: '300px',
            height: '300px'
        },

        transitionDuration: '0.3s',
    },
}));
function Index(props) {
    const classes = useStyles();

    let userDetails = JSON.parse(localStorage.getItem("userDetails"))
    return (
        <div className={classes.root}>
            { userDetails.map((number) =>
                <Grid container spacing={3}>
                    <Grid item xl={6} md={6} xs={12}>
                        <Card className={classes.card} variant="outlined">
                            <CardContent>
                                <Checkbox>select option</Checkbox>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Select One pot
                            </Typography>
                            <img src={number.pot2}/>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xl={6} md={6} xs={12}>
                        <Card className={classes.card} variant="outlined">
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Select other pot
                                    </Typography>
                                <img src={number.pot1}/>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

            )};

        </div>
    );
}

export default Index;