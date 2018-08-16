import React, {Component} from 'react'
import axios from 'axios'

class Edit extends Component {
    constructor(props){
        super(props)
        this.state={
            stories: {}
        }
    }
    componentDidMount(){
        axios.get('http://localhost:3001/story/api' + this.props.match.params.id)
        .then(res => {
            this.setState({stories: res.data})
        })
    }
    onChange = (e) => {
        const storyEditState = this.state.stories
        storyEditState[e.target.name] = e.target.value
        this.setState({stories:storyEditState})
    }

    onSubmit = (e) => {
        e.preventDefault()
        const { title, author, you, need, go, search, find, take, returned, changed} = this.state.stories
        axios.put('http://localhost:3001/story/api' + this.props.match.params.id, {title, author, you, need, go, search, find, take, returned, changed})
        .then((result) => {
            this.props.history.push("")
        })
    }

    render(){
        return(
            <div>
                   <form onSubmit={this.onSubmit}>

<div className="">
<label htmlFor="title">Title</label>
  <input type="text" id="title" onChange={this.onChange} value={this.state} name="title" placeholder="from"/>
  </div>

  <div className="">
<label htmlFor="author">By</label>
  <input type="text" id="author" onChange={this.onChange} name="author" placeholder="Author"/>
  </div>

  <div className="">
  <label htmlFor="you">Enable your Protagonist: A character is in a zone of comfort</label>
  <input type="text" id="you" onChange={this.onChange} name="you" placeholder=" A character is in a zone of comfort"/>
  </div>

   <div className="">
  <label htmlFor="need">Something Ain't Quite Right:</label>
  <input type="text" id="need" onChange={this.onChange} name="need" placeholder="The character wants something"/>
  </div>

    <div className="">
  <label htmlFor="go">Crossing the Threshold:</label>
  <input type="text" id="go" onChange={this.onChange} name="go" placeholder="They enter an unfamiliar situation"/>
  </div>

<div className="">
  <label htmlFor="search">The Road of Trials:</label>
  <input type="text" id="search" onChange={this.onChange} name="search" placeholder="The character adapts to the unfamiliar"/>
  </div>

   <div className="">
  <label htmlFor="find">Meeting with the Goddess</label>
  <input type="text" id="find" onChange={this.onChange} name="find" placeholder="The character gets what they wanted"/>
  </div>

   <div className="">
  <label htmlFor="take">The Road of Trials:</label>
  <input type="text" id="take" onChange={this.onChange} name="take" placeholder="They pay a heavy price"/>
  </div>

  <div className="">
  <label htmlFor="take">Meet Your Maker:</label>
  <input type="text" onChange={this.onChange} id="take" name="take" placeholder="They pay a heavy price"/>
  </div>


<div className="">
  <label htmlFor="returned">Bringing It Home:</label>
  <input type="text" id="returned" name="returned" onChange={this.onChange} placeholder="They return to their familiar situation"/>
  </div>

      <div className="">
  <label htmlFor="changed">Master of Both Worlds:</label>
  <input type="text" id="changed" name="changed" onChange={this.onChange} placeholder="The character has changed in someway"/>
  </div>

  <input type="submit" value="sendcard"/>
</form>
                </div>
        )
    }
}

export default Edit