import React from "react";
import { makeStyles, StylesProvider } from '@material-ui/core/styles';
import { Grid, Card, CardActionArea, CardContent, CardMedia, Typography}  from '@material-ui/core';
import styles from './header.module.css';
import cx from 'classnames';

const Header = () => {
    return (
    <div className={styles.container}>
    <Grid container spacing={8} justify="center">
        <Grid xs={12} md={2} className={styles.card}>
            <Card className={styles.root} >
                <CardActionArea>
                    <CardContent>
                        <Typography variant="h6" component="h6" gutterBottom>
                            Stați în casă cât mai mult timp.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>    
        <Grid xs={12} md={2} className={styles.card}>
            <Card className={styles.root} >
                <CardActionArea>
                    <CardContent>
                        <Typography variant="h6" component="h6" gutterBottom>
                            Păstrați o distanță de siguranță.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid> 
        <Grid xs={12} md={2} className={styles.card}>  
            <Card className={styles.root} >
                <CardActionArea>
                    <CardContent>
                        <Typography variant="h6" component="h6" gutterBottom>
                            Spălați-vă frecvent mâinile.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>  
        <Grid xs={12} md={2} className={styles.card}>   
            <Card className={styles.root} >
                <CardActionArea>
                    <CardContent>
                        <Typography variant="h6" component="h6" gutterBottom>
                            Acoperiți gura când tușiți
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>   
        <Grid xs={12} md={2} className={styles.card}>  
            <Card className={styles.root} >
                <CardActionArea>
                    <CardContent>
                        <Typography variant="h6" component="h6" gutterBottom>
                            Bolnav? Contactați medicul.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>   
    </Grid>
    </div>
    );
  }
  export default Header;