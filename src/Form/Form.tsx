import { Box, Button, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import React, { FormEventHandler, useState } from 'react';

const useStyles = makeStyles(() => ({
  Button: {
    margin: '20px auto',
  },
  Item: {
    margin: 20,
  },
  Paper: {
    justifyContent: 'center',
    margin: '20px auto',
    width: 400,
  },
}));

const Form = () => {
  const classes = useStyles();

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');

  const [all, setAll] = useState({
    age,
    name,
    sex,
    surname,
  });

  const onSubmitHandler: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    setAll({ age, name, sex, surname });
  };

  return (
    <div className="form">
      <form autoComplete="off" noValidate onSubmit={onSubmitHandler}>
        <Paper className={classes.Paper}>
          <Typography align="center" variant="h4">
            My form
          </Typography>
          <div className={classes.Item}>
            <TextField fullWidth label="Name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className={classes.Item}>
            <TextField fullWidth label="Surname" value={surname} onChange={(e) => setSurname(e.target.value)} />
          </div>
          <div className={classes.Item}>
            <TextField fullWidth label="Age" value={age} onChange={(e) => setAge(e.target.value)} />
          </div>
          <div className={classes.Item}>
            <TextField fullWidth label="Sex" value={sex} onChange={(e) => setSex(e.target.value)} />
          </div>

          <Box className={classes.Item} textAlign="center">
            <Button className={classes.Button} type="submit" variant="outlined">
              Submit
            </Button>
          </Box>
        </Paper>
      </form>
      <Paper className={classes.Paper}>
        <pre>{JSON.stringify(all, null, 2)}</pre>
      </Paper>
    </div>
  );
};

export default Form;
