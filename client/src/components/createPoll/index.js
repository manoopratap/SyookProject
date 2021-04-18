import React, { useState ,useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import WebCam from "../webcam/index";
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme)=>({
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

    title: {
        fontSize: 17,
    },

}));


function Index(props) {
    const classes = useStyles();
    const myref = useRef();
    const [camera1, setCamera1] = useState(false)
    const [camera2, setCamera2] = useState(false)

    const SetImage1 = () => {
        setCamera1(true)
    }
    const SetImage2 = () => {
        setCamera2(true)
    }
    
    const capture2 = ()=>{

    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xl={6} md={6} xs={12}>
                    <Card className={classes.card} variant="outlined">
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Select One pot
                    </Typography>
                            <AddAPhotoIcon color="secondary" onClick={SetImage1} />
                            {camera1 ? <WebCam ref={myref}/> : null}
                        </CardContent>
                    </Card>
                    {camera1 ?
                        <Button variant="outlined" color="secondary" onClick={() => myref.current.takeSnap1()}>
                            Take Snap
                        </Button> : null}
                        
                </Grid>
                <Grid item xl={6} md={6} xs={12}>
                <Card className={classes.card} variant="outlined">
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Select other pot
                    </Typography>
                        <AddAPhotoIcon color="secondary" onClick={SetImage2} />
                        {camera2 ? <WebCam ref={myref}/> : null}
                    </CardContent>
                </Card>
                {camera2 ?
                    <Button variant="outlined" color="secondary" onClick={() => myref.current.takeSnap2()}>
                        Take Snap
            </Button> : null}
                </Grid>
            </Grid>
        </div>
    );
}

export default Index;