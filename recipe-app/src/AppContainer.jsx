import React, { Component } from 'react'
import Header from './Header'
import RecipeDisplay from './RecipeDisplay'
import RecipeForm from './RecipeForm'

export default class AppContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            recipeList:[]
             
        }
    }
    updateList = (updatedList)=>{
        this.setState({recipeList:updatedList})
    }
    render() {
        return (
            <div className ="container">
                <Header name = "Andrew"/>
                <RecipeForm updateList = {this.updateList}/>
                <RecipeDisplay recipeList = {this.state.recipeList}/>
            </div>
        )
    }
}
