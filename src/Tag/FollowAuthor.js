import { Paper, IconButton } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import React from 'react'
import '../css/Author.css'
class FollowAuthor extends React.Component {
  constructor(props) {
    super(props)
    this.onButtonClicked = this.onButtonClicked.bind(this)
    this.state = { currentButton: null }
  }

  onButtonClicked(event, id) {
     event.stopPropagation()
    this.setState({
      currentButton: this.state.currentButton === id ? null : id,
    })
  }
  
  render() {
    let inputStyle = {
      color: 'grey'
    }
    return (
      <div className='FollowAuthor'>
        <div>Follow</div>

        <IconButton
          aria-label='Follow'
          color={this.state.currentButton === 0 ? 'primary' : 'default'}
          onClick={(e) => this.onButtonClicked(e, 0)}
        >
          <PersonAddIcon />
        </IconButton>
      </div>
    )
  }
}

export default FollowAuthor