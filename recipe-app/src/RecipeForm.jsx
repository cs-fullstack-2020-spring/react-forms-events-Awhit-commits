import React, { Component } from 'react'

export default class RecipeForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             title:"",
             time:0,
             size:0,
             recipeList:[]
        }
    }
    handleChange = (event)=>{
        if (event.target.name === "title"){
            this.setState({title:event.target.value})
        }
        else if (event.target.name ==="size"){
            this.setState({size: event.target.value})
        }
        else if (event.target.name ==="time"){
            this.setState({time:event.target.value})
        }
    }
    handleSubmission = (event) =>{
        event.preventDefault();
        this.state.recipeList.push({title:this.state.title,size:this.state.size,time:this.state.time})
        this.setState({recipeList:this.state.recipeList})
        this.props.updateList(this.state.recipeList);
        this.setState({title:"",size:"",time:""})
    }
    render() {
        return (
            <div>
                <form action="">
                    <fieldset>
                        <legend>Add a New Recipe</legend>
                        <div className="form">
                            <p>
                                <label htmlFor="title">Title: </label>
                                <input type="text" name="title" id="title" value={this.state.title} onChange ={this.handleChange}/>

                            </p>
                            <p>
                                <label htmlFor="time">Duration: </label>
                                <input type="number" name="time" id="time" value = {this.state.time} onChange = {this.handleChange}/>
                            </p>
                            <p>
                                <label htmlFor="size">Serving Size: </label>
                                <input type="number" name="size" id="size" value ={this.state.size} onChange={this.handleChange}/>
                            </p>
                            <button type="submit" onClick = {this.handleSubmission}>Submit!</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}
