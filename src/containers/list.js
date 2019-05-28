import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import List from '../components/list'
import { loadCharacters } from '../redux/actions'

class ListContainer extends React.Component {
  componentDidMount () {
    this.props.loadCharacters()
  }

  render () {
    const { characters, toggleCharacter, history } = this.props
    return (
      <div>
        {
          characters !== undefined ? <List data={characters} toggleCharacter={toggleCharacter} history={history} /> : <div>No Data. Loading... </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  if (state.characters !== null) {
    return { characters: state.characters.data.results }
  } else {
    return { characters: undefined }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadCharacters: () => dispatch(loadCharacters())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListContainer))
