
import * as React from 'react';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';


type PropsType = {
  title: string,
  choices: Array<{id: number|string, name: string, value: any}>,
  handleChange: (Event) => void,
  classes: { formControl: string, nativeSelect: string },
  name: string,
  value: string,
};

export default function SelectWithPlacefolder(props: PropsType): React.Node {
  const {
    title,
    choices,
    handleChange,
    classes,
    name,
    value,
  } = props;

  return (
    <FormControl className={classes.formControl}>
      <FormHelperText>{title}</FormHelperText>
      <NativeSelect
        className={classes.nativeSelect}
        value={value}
        name={name}
        onChange={handleChange}
      >
        <option value="" disabled>
          選択してください
        </option>
        {
          choices.map(choice => (
            <option key={`${choice.id}`} value={choice.value}>
              {choice.name}
            </option>
          ))
        }
      </NativeSelect>
    </FormControl>
  );
}
