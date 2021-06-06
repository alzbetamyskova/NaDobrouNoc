/* eslint-disable no-use-before-define */
import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import data from '../../assets/database.json';
import './style.css';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#4EA0AE',
    borderRadius: '10px',
    border: 'none',
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(0),
    },
    '& label': {
      color: '#FFF48F',
    },
  },
  textfield: {
    '& legend': {
      color: '#FFF48F'
    },
    '&:focus legend': {
      color: '#FFF48F'
    },
  },
}));

const placeholder = ["Vyberte 3 klíčová slova", "Další slovo", "Zbývá 1 slovo", "Už nevybírej"];

const AutoCompleteInput = ({filtrKeyWords, setFiltrKeyWords}) => {
  const classes = useStyles();

  const handleChange = (event, value) => {
    setFiltrKeyWords(value);
  };

  return (
    <>
    <div className={classes.root}>
      <Autocomplete
        onChange={handleChange}
        multiple
        limitTags={3}
        id="multiple-limit-tags"
        options={data.keywords}
        getOptionLabel={(option) => option}
        defaultValue={filtrKeyWords}
        renderInput={(params) => (
          <TextField {...params}
            variant="outlined"
            label="Vyberte klíčové slovo"
            placeholder={placeholder[filtrKeyWords.length]}
            className={classes.textfield}/>
        )}
      />
    </div>
    {filtrKeyWords.length >= 4 ? <p className='errormessage'>Vyberte pouze 3 klíčová slova.</p> : ''}
    </>
  );
}

export default AutoCompleteInput;