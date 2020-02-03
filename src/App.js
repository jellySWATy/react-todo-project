import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Auth from "./containers/Auth/Auth"
import TaskList from "./containers/TaskList/TaskList"
import TaskListCreator from "./containers/TaskListCreator/TaskListCreator"
import Project from "./containers/Project/Project"
import ProjectList from "./containers/ProjectList/ProjectList"
import ProjectCreator from "./containers/ProjectCreator/ProjectCreator"
import AllTasks from "./containers/AllTasks/AllTasks"
import Layout from './hoc/Layout/Layout'

export default class App extends Component {
    render() {
        let routs = (
            <Switch>
                <Route path="/auth" component={Auth} />
                <Route path="/tasklist/:id" component={TaskList} />
                <Route path="/tasklist-creator" component={TaskListCreator} />
                <Route path="/project/:id" component={Project} />
                <Route path="/project-list" component={ProjectList} />
                <Route path="/project-creator" component={ProjectCreator} />
                <Route path="/" exact component={AllTasks} />
            </Switch>
        )
        return (
            <Layout children={routs} />
        )
    }
}
