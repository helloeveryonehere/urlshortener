import React, { useState, useEffect } from 'react';
import injectSheet from 'react-jss';
import { styles } from './formStyles';

const Form = ({ classes }) => {
  const [value, setValue] = useState('');
  const [responseUrl, setResponseUrl] = useState('');
  const [processing, setProcessing] = useState(false);

  const fetchData = async () => {
    const response = await fetch(
      'http://localhost:5000/api/shortener', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json',
        },
        body: `url=${encodeURI(value)}`,
      },
    );

    const jsonStr = await response.json();
    const url = JSON.parse(JSON.stringify(jsonStr)).shortUrl;

    setResponseUrl(url);
    setProcessing(false);
  };

  useEffect(() => {
    if (processing === true) {
      fetchData();
    }
  }, [processing]);

  const onSubmit = (event) => {
    setProcessing(true);
    event.preventDefault();
  };

  return (
    <div className={classes.formWrapper}>
      <div className={classes.submitedValue}>
        {responseUrl}
      </div>
      <form onSubmit={onSubmit} method="POST">
        <input
          type="text"
          value={value}
          className={classes.formInput}
          onChange={event => setValue(event.target.value)}
        />
        <input
          disabled={processing}
          className={classes.formSubmit}
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

Form.defaultProps = {
  classes: {},
};

export default injectSheet(styles)(Form);
