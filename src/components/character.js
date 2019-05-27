import React from 'react'

class Character extends React.Component {
  onBack () {
    this.props.history.push('./characters')
  }

  render () {
    const { data } = this.props
    console.log('data: ', data)

    return (
      <div className="character_container">
        <div className="img-wrapper">
          <img src={data.image} />
        </div>
        <div className="info-section">
          <div className="info">name: <span>{data.name}</span></div>
          <div className="info">created: <span>{data.created}</span></div>
          <div className="info">status: <span>{data.status}</span></div>
          <div className="info">sdivecies: <span>{data.sdivecies}</span></div>
          <div className="info">gender: <span>{data.gender}</span></div>
          <div className="info">origin: <span>{data.origin.name}</span></div>
          <div className="info">location: <span>{data.location.name}</span></div>
          <button onClick={this.onBack.bind(this)}>BACK</button>
        </div>
      </div>
    )
  }
}

export default Character
