/* eslint-disable no-unused-vars */
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import Character from '../components/character'
import { toggleCharacter } from '../redux/actions'

class CharacterContainer extends React.Component {
  componentDidMount () {
    const id = this.props.match.params.id
    this.props.toggleCharacter(id)
  }

  render () {
    const { character, history } = this.props
    return (
      <div>
        {
          character !== undefined ? <Character data={character.data} history={history}/> : <div>No Data. Loading... </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  if (state.character !== null) {
    return { character: state.character }
  } else {
    return { character: undefined }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCharacter: id => dispatch(toggleCharacter(id))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CharacterContainer))
