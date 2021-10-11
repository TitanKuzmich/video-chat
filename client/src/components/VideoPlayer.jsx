import React, {useContext} from 'react';
import {Grid, Typography, Paper} from "@material-ui/core";

import {makeStyles} from "@material-ui/core";

import {SocketContext} from "../SocketContext";

const useStyles = makeStyles((theme) => ({
    video: {
        width: '550px',
        [theme.breakpoints.down('xs')]: {
            width: '300px',
        },
    },
    gridContainer: {
        justifyContent: 'center',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        },
    },
    paper: {
        padding: '10px',
        border: '2px solid black',
        margin: '10px',
    },
}));

const VideoPlayer = () => {
    const classes = useStyles();
    const {name, callAccepted, myVideoRef, userVideoRef, callEnded, stream, call} = useContext(SocketContext)



    return (
        <Grid container className={classes.gridContainer}>
            {/* My video */}
            {
                stream && (
                    <Paper className={classes.paper}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h5">{name || "Name"}</Typography>
                            <video playsInline muted ref={myVideoRef} autoPlay className={classes.video}/>
                        </Grid>
                    </Paper>
                )}

            {/* User video */}
            {
                callAccepted && !callEnded && (
                    <Paper className={classes.paper}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h5">{call.name || "Name"}</Typography>
                            <video playsInline ref={userVideoRef} autoPlay className={classes.video}/>
                        </Grid>
                    </Paper>
                )}
        </Grid>
    );
};

export default VideoPlayer;