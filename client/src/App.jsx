import React from 'react';
import injectSheet from 'react-jss';
import Form from './components/Form/form';
import styles from './styles';

const App = ({ classes }) => (
  <div className={classes.app}>
    <Form />
  </div>
);

export default injectSheet(styles)(App);
