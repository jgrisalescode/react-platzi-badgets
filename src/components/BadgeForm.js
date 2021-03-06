import React from "react"

class BadgeForm extends React.Component {
  // Iniciando los estados
  state = {}
  handleChange = e => {
    // console.log({
    //   name: e.target.name,
    //   value: e.target.value
    // })
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick = e => {
    console.log("It was cliked!!!")
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="firstName"
              id=""
              value={this.state.firstName}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="lasstName"
              id=""
              value={this.state.lastName}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="email"
              name="email"
              id=""
              value={this.state.email}
            />
          </div>
          <div className="form-group">
            <label>Job Title</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="jobTitle"
              id=""
              value={this.state.jobTitle}
            />
          </div>
          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="twitter"
              id=""
              value={this.state.twitter}
            />
          </div>
          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    )
  }
}

export default BadgeForm
