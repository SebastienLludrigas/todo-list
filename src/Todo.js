import React, { Component } from 'react'

export default class Todo extends Component {

   state = {
      element: '',
      items: []
   }

   onChange = (evt) => {
      this.setState({
         [evt.target.name]: evt.target.value
      })
   }

   onSubmit = (evt) => {
      evt.preventDefault();
      this.setState({
         element: '',
         items: [...this.state.items, {element: this.state.element}]
      })

      console.log(this.state);
   }

   render() {
      return (
         <div className="card my-3">
            <div className="card-header">To-Do List</div>
            <div className="card-body">

               <form onSubmit={this.onSubmit}>
                  <div className="form-group">

                     <label htmlFor="element">Chose à faire</label>
                     <input
                     className="form-control form-control-lg"
                     name="element"
                     onChange={this.onChange}
                     value={this.state.element}
                     />

                  </div>
                  <button className="btn btn-primary btn-block">Ajouter une chose à faire !</button>
               </form>

            </div>      
         </div>
      )
   }
}
