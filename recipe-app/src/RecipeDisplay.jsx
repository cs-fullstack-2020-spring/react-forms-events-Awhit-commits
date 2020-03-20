import React, { Component } from 'react'

export default class RecipeDisplay extends Component {
    render() {
        return (
            <div>
                {
                    this.props.recipeList.map((recipe,key)=>{
                        return(<div className="recipeList">
                            <p>{recipe.title}</p>
                            <p>Recommended serving size is {recipe.size}</p>
                            <p>{recipe.time} minutes</p>
                        </div>)
                    })
                }
            </div>
        )
    }
}
