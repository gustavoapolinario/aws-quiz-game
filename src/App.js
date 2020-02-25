import React from 'react';
import Index from './pages/Index';
import Question from './pages/Question';
import Erro404 from './pages/Erro404';
import {
    Switch,
    Route,
    BrowserRouter
  } from 'react-router-dom'
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme'
import Loading from './components/Loading'
import API from '@aws-amplify/api';
import awsconfig from './aws-exports';
API.configure(awsconfig);

class App extends React.Component {
    state =  {
        isLoading: false,
    }

    render() {

        if( this.state.isLoading )
            return <Loading />

        return (
            <MuiThemeProvider theme={theme}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={Index} />
                        <Route path="/question" exact component={Question} />
                        
                        <Route path='*' component={Erro404} />
                    </Switch>
                </ BrowserRouter>
            </MuiThemeProvider>
        );
    }
}


export default App
