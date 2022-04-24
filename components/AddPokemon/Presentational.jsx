import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

const Presentational = ({
  name,
  ability,
  errorName,
  submitting,
  submited,
  errorAbility,
  handleChangeName, 
  handleChangeAbility,
  handleSubmit,
  handleCancel
}) => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <FormControl error={!!errorName} disabled={submitting} variant="standard">
        <InputLabel htmlFor="component-simple">Name</InputLabel>
        <Input id="component-simple" value={name} onChange={handleChangeName} />
        <FormHelperText id="component-error-text">{errorName}</FormHelperText>
      </FormControl>
      <FormControl error={!!errorAbility} disabled={submitting} variant="standard">
        <InputLabel htmlFor="component-helper">Ability</InputLabel>
        <Input
          id="component-helper"
          value={ability}
          onChange={handleChangeAbility}
          aria-describedby="component-helper-text"
        />
        <FormHelperText id="component-error-text">{errorAbility}</FormHelperText>
        {!errorAbility && <FormHelperText id="component-helper-text">
          {'Add here the pokemon\'s ability'}
        </FormHelperText>}
      </FormControl>
      <Button variant="contained" onClick={handleSubmit} disabled={submitting}>Submit</Button>
      <Button onClick={handleCancel} disabled={submitting}>Cancel</Button>
      {submited && <Alert severity="success">Pokemon Added!</Alert>}
    </Box>
  );
}

export { Presentational as default }