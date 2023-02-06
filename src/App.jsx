import React, { Component } from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import PhotoCamera from '@material-ui/icons';
class Counter extends Component {

    render() {
        return (
            <>
                <CssBaseline />
                <AppBar position="relative" />
                <Toolbar>
                    <PhotoCamera />
                    <Typography variant="h6">
                        Photo ALbum
                    </Typography>
                </Toolbar>
            </>
        );
    }

}

export default App;