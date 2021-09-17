import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

export default function BasicButton() {
    return (
        <Button variant="contained" startIcon={<SaveIcon />}> Home</Button>     
    );
  }