import React from 'react';
import TextField from '@material-ui/core/TextField';
import { roundTextFieldStylesHook } from '@mui-treasury/styles/textField/round';

const TextField2 = () => {
  const inputBaseStyles = roundTextFieldStylesHook.useInputBase();
  const inputLabelStyles = roundTextFieldStylesHook.useInputLabel();
  const helperTextStyles = roundTextFieldStylesHook.useHelperText();
  return (
    <TextField
      label={'Primary field'}
      placeholder={'Placeholder'}
      helperText={'Helper Text'}
      margin={'normal'}
      InputLabelProps={{ shrink: true, classes: inputLabelStyles }}
      InputProps={{ classes: inputBaseStyles, disableUnderline: true }}
      FormHelperTextProps={{ classes: helperTextStyles }}
    />
  );
};



export default TextField2;