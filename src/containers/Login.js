import React from 'react'
import FontAwesome from 'react-fontawesome'
import {Link} from 'react-router-dom'
import LoaderButton from '../components/LoaderButton'
import {app} from '../actions'

export default class Login extends React.Component {
  state = {
    keepSigned: true,
    username: '',
    password: ''
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = e => {
    app.login(this.state)
    this.setState({username: '', password: ''})
  }

  toggleKeepSigned() {
    this.setState({keepSigned: !this.state.keepSigned})
  }

  render() {
    const keepSigned = this.state.keepSigned
    return (
      <section className="container g-py-60">
        <div className="row justify-content-center">
          <div className="col-sm-6 col-sm-offset-3 col-lg-4 col-lg-offset-4">
            <div className="g-brd-around g-brd-gray-light-v4 rounded g-py-0 g-px-30 g-pb-20">
              <header className="text-center mb-4">
                <h2 className="h2 g-color-black g-font-weight-600">Login</h2>
              </header>

              <form onSubmit={this.handleSubmit} className="g-py-15" style={{border: 'none'}}>
                <div className="mb-4">
                  <input name="username"
                         onChange={this.handleChange}
                         className="form-control g-color-black g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-brd-primary--hover rounded g-py-15 g-px-15"
                         type="email"
                         placeholder="Email"/>
                </div>

                <div className="g-mb-15 g-mt-10">
                  <input name="password"
                         onChange={this.handleChange}
                         className="form-control g-color-black g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-brd-primary--hover rounded g-py-15 g-px-15 mb-3"
                         type="password"
                         placeholder="Password"/>
                  <div className="row justify-content-between">
                    <div className="col align-self-center">
                      <label onClick={this.toggleKeepSigned.bind(this)}
                          style={{userSelect: 'none'}}
                          className="form-check-inline u-check g-color-gray-dark-v5 g-font-size-12 g-pl-25 mb-0 g-ma-20">
                        <div className="u-check-icon-checkbox-v6 g-absolute-centered--y g-left-0">
                          <FontAwesome name={keepSigned ? "check" : "square"} size="2x"
                            style={{backgroundColor: '#000', padding: '3px', color: '#fff', fontSize: '1.3em', borderRadius: '3px'}}/>
                        </div>
                        Keep signed in
                      </label>
                    </div>
                    <div className="col align-self-center text-right" style={{margin: '-3em 1em 0 0'}}>
                      <Link className="g-font-size-12" to="/forgot">Forgot password?</Link>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <LoaderButton
                      type="submit"
                      className="btn btn-md btn-block u-btn-primary g-py-13"
                      text="Login"
                      isLoading=""
                      loadingText=""
                      />
                </div>
              </form>
              <footer className="text-center">
                <p className="g-color-gray-dark-v5 g-font-size-13 mb-0">Don't have an account? <Link to="/signup" className="g-font-weight-600">signup</Link></p>
              </footer>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
