import React from 'react'

class Pet extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.sex === 'female' ? '♀' : '♂'}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">is a {this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>who has been alive for {this.props.pet.age}yrs</p>
            <p>and weighs {this.props.pet.weight}lb</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.pet.isAdopted ? (<button className="ui disabled button">Already adopted</button>) : (<button onClick={() => this.props.onAdoptPet(this.props.pet.id)} className="ui primary button">Adopt pet</button>)} 
        </div>
      </div>
    )
  }
}

export default Pet
