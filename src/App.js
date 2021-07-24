import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import PlacesToVisit from './components/PlacesToVisit';
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/pexel5.jpg"})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }

})
);

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <PlacesToVisit />
    </div>
  );
}

export default App;
