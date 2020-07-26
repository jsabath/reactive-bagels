import React from 'react'

class Form extends React.Component{

  state = {
    bagel: 'default bagel'
  }

  handleUserBagel(event){
    this.setState({
      bagel: event.target.value
    })

  }


  handleSubmit(event){
    event.preventDefault()
    this.props.submitBagel(this.state.bagel)
    this.setState({
      bagel: ''
    })
  }

  render(){
    return(
        <form onSubmit = {(event) => this.handleSubmit(event)}>
          <input
            name='bagel'
            type='text'
            value={this.state.bagel}
            onChange={(event)=> this.handleUserBagel(event)}/>
          <button type='submit'>Submit</button>
        </form>
    )
  }

}

export default Form
