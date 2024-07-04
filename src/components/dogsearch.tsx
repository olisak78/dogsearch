import TextField from '@mui/material/TextField';
import Autocomplete, {
  AutocompleteRenderInputParams,
} from '@mui/material/Autocomplete';
import { atomBreedSelected } from '../config';
import { useAtom } from 'jotai';

type DogsearchProps = {
  data: string[];
};

export default function Dogsearch({ data }: DogsearchProps) {
  const [currentBreed, setCurrentBreed] = useAtom(atomBreedSelected);
  const setValue = (breed: string) => {
    setCurrentBreed(breed);
  };
  return (
    <Autocomplete
      onChange={(event: any, newValue: string | null) => {
        setValue(newValue ? newValue : '');
      }}
      disablePortal
      id='combo-box-demo'
      options={data}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label='Breed' />}
    />
  );
}
