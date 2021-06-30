import { Paper, IconButton } from '@material-ui/core'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import React from 'react'
class FollowAuthor extends React.Component {
  constructor(props) {
    super(props)
    // this.onButtonClicked = this.onButtonClicked.bind(this)
    this.state = { currentButton: null }
  }

  onButtonClicked(id) {
    this.setState({
      currentButton: this.state.currentButton === id ? null : id,
    })
  }

  render() {
    return (
      <div>
        <IconButton aria-label='Follow' color={this.state.currentButton === 0 ? 'primary' : 'default'}
          onClick={() => this.onButtonClicked(0)}>
          <PersonAddIcon />
        </IconButton>
        
      </div>
    )
  }
}

export default FollowAuthor