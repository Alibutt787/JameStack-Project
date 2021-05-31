import { Link } from 'gatsby'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 43,
      padding: '0 30px',
      paddingTop:10,
      textDecoration:'none',
    },
  });
  

export const Header = () => {

    const classes = useStyles();
    return (
        <div style={{backgroundColor:'grey',  display:'flex' ,justifyContent:'space-evenly' , }}>

<Button><Link className={classes.root}  to="/">Home</Link></Button>

<Button><Link className={classes.root} to="/About">About</Link></Button>

<Button><Link className={classes.root} to="/Contact">Contact</Link></Button>

<Button><Link className={classes.root} to="/404">404</Link></Button>

<Button><Link className={classes.root} to="/product Pic1">Pic 1</Link></Button>

<Button><Link className={classes.root} to="/product Pic2">Pic 2</Link></Button>
     

        </div>
    )
}


