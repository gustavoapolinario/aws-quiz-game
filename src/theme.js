import { createMuiTheme } from '@material-ui/core/styles';

const palette = {
  primary: { main: '#29ab1e' },
  secondary: { main: '#f50057' },
};
const themeName = 'San Marino Razzmatazz Coral';

export default createMuiTheme({ palette, themeName,
  typography: {
    useNextVariants: true,
  }
});
