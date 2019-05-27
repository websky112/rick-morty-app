import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import Character from '../components/character'

class CharacterContainer extends React.Component {
  render () {
    const { character } = this.props
    return (
      <div>
        {
          character !== undefined ? <Character data={character.data} /> : <div>No Data. Loading... </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('state.character: ', state.character)
  if (state.character !== null) {
    return { character: state.character }
  } else {
    return { character: undefined }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CharacterContainer))
