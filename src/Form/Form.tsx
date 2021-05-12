import React, {useState} from 'react';
import {Box, Button, makeStyles, Paper, TextField, Typography} from "@material-ui/core";

const useStyles = makeStyles(()=>({
    Paper:{
        width: 400,
        margin: '20px auto',
        justifyContent: 'center'
    },
    Item:{
        margin: 20
    },
    Button:{
        margin: '20px auto'
    }
}))

const Form = () => {
    const classes = useStyles();

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [age, setAge] = useState('');
    const [sex, setSex] = useState('');

    const [all, setAll] = useState({
        name,
        surname,
        age,
        sex
    });

    const onSubmitHandler = (e:any) => {
        e.preventDefault();
        setAll({name,surname,age,sex});
    }

    return (
        <div className="form">
                <form noValidate autoComplete="off" onSubmit={onSubmitHandler}>
                    <Paper className={classes.Paper}>
                        <Typography align="center" variant="h4">My form</Typography>
                    <div className={classes.Item}>
                        <TextField value={name} onChange={e => setName(e.target.value)} label="Name" fullWidth/>
                    </div>
                        <div className={classes.Item}>
                            <TextField value={surname} onChange={e => setSurname(e.target.value)} label="Surname" fullWidth/>
                        </div>
                        <div className={classes.Item}>
                            <TextField value={age} onChange={e => setAge(e.target.value)} label="Age" fullWidth/>
                        </div>
                        <div className={classes.Item}>
                            <TextField value={sex} onChange={e => setSex(e.target.value)} label="Sex" fullWidth/>
                        </div>

                    <Box textAlign="center" className={classes.Item}>
                        <Button className={classes.Button} variant="outlined" type="submit">Submit</Button>
                    </Box>
                    </Paper>
                </form>
            <Paper className={classes.Paper}>
                <pre>{JSON.stringify(all,null,2)}</pre>
            </Paper>

        </div>
    );
};

export default Form;
