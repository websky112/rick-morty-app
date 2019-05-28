import React from 'react'

class List extends React.Component {
  onClicked (id) {
    this.props.history.push(`characters/${id}`)
  }

  render () {
    const { data } = this.props

    return (
      <div className="container">
        {
          data.map(character => {
            return (
              <a className="card" onClick={this.onClicked.bind(this, character.id)} key={character.id}>
                <div className="img-wrapper">
                  <img src={character.image} />
                </div>
                <div className="info">name: <span>{character.name}</span></div>
                <div className="info">status: <span>{character.status}</span></div>
                <div className="info">sdivecies: <span>{character.sdivecies}</span></div>
                <div className="info">gender: <span>{character.gender}</span></div>
                <div className="info">origin: <span>{character.origin.name}</span></div>
                <div className="info">location: <span>{character.location.name}</span></div>
              </a>
            )
          })
        }
      </div>
    )
  }
}

export default List
