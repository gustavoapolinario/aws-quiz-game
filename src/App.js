import React from 'react'
import Index from './pages/Index'

import {
    Switch,
    Route,
    BrowserRouter
  } from 'react-router-dom'
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import Loading from './components/Loading'
import API from '@aws-amplify/api';
import awsconfig from './aws-exports';
import asyncComponent from './components/AsyncComponent'
API.configure(awsconfig);

const AsyncQuestion = asyncComponent(() => import("./pages/Question"));
const AsyncQuestionList = asyncComponent(() => import("./pages/QuestionList"));
const AsyncQuestionEdit = asyncComponent(() => import("./pages/QuestionEdit"));
const AsyncErro404 = asyncComponent(() => import("./pages/Erro404"));

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
                        <Route path="/question" exact component={AsyncQuestion} />
                        <Route path="/question/list" exact component={AsyncQuestionList} />
                        <Route path="/question/edit/:id?" component={AsyncQuestionEdit} />
                        
                        <Route path='*' component={AsyncErro404} />
                    </Switch>
                </ BrowserRouter>
            </MuiThemeProvider>
        );
    }
}


export default App
