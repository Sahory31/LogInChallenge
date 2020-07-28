import React from 'react';
import { Card, makeStyles } from '@material-ui/core';

export default function Slides(props) {
    const { backgroundColor, title , img} = props.content;

    const useStyles = makeStyles(() => ({
        card: {
            backgroundColor,
            width: '100%',
            height: '100%',
            borderRadius: 5,
            justifyContent: 'center',
            fontFamily: 'Roboto',
            fontSize: '1em',
        } 
    }));

    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <div>{img}</div>
            <h1>{title}</h1>
        </Card>
    );
}