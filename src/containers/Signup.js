import React from 'react'
import FontAwesome from 'react-fontawesome'
import {Link} from 'react-router-dom'


export default class Signup extends React.Component {
  constructor(props){
    super(props)
    this.state = {iaccept: true}
  }

  toggleIaccept(){
    this.setState({iaccept: !this.state.iaccept})
  }

  render() {
    const iaccept = this.state.iaccept
    return (
      <section className="container g-py-60">
        <div className="row justify-content-center">
          <div className="col-sm-6 col-sm-offset-3">
            <div className="g-brd-around g-brd-gray-light-v4 rounded g-py-0 g-px-30 g-pb-20">
              <header className="text-center mb-4">
                <h2 className="h2 g-color-black g-font-weight-600">Signup</h2>
              </header>

              <form className="g-py-15" style={{border: 'none'}}>
                <div className="row">
                  <div className="col-xs-12 col-sm-6 mb-4">
                    <input className="form-control g-color-black g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-brd-primary--hover rounded g-py-15 g-px-15" type="email" placeholder="First Name"/>
                  </div>

                  <div className="col-xs-12 col-sm-6 mb-4">
                    <input className="form-control g-color-black g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-brd-primary--hover rounded g-py-15 g-px-15" type="tel" placeholder="Last Name"/>
                  </div>
                </div>

                <div className="g-mb-20  g-mt-20">
                  <input className="form-control g-color-black g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-brd-primary--hover rounded g-py-15 g-px-15" type="email" placeholder="Email"/>
                </div>

                <div className="row">
                  <div className="col-xs-12 col-sm-6 mb-4">
                    <input className="form-control g-color-black g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-brd-primary--hover rounded g-py-15 g-px-15" type="password" placeholder="Password"/>
                  </div>

                  <div className="col-xs-12 col-sm-6 mb-4">
                    <input className="form-control g-color-black g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-brd-primary--hover rounded g-py-15 g-px-15" type="password" placeholder="Confirm Password"/>
                  </div>
                </div>

                <div className="g-mt-20 g-mb-20">
                  <label className="form-check-inline u-check g-color-gray-dark-v5 g-font-size-13 g-pl-25">
                    <input className="hidden-xs-up g-pos-abs g-top-0 g-left-0" type="checkbox"/>
                    <div onClick={this.toggleIaccept.bind(this)} className="u-check-icon-checkbox-v6 g-absolute-centered--y g-left-0">
                      <FontAwesome name={iaccept ? 'check' : 'square'} size="2x"
                        style={{fontSize: '1.4em', borderRadius:'3px', backgroundColor:'#000', color: '#fff', padding: '3px'}}/>
                    </div>
                    <span style={{userSelect: 'none', margin: '5px'}}>I accept the <Link to="/terms">Terms and Conditions</Link></span>
                  </label>
                </div>
                <button className="btn btn-md btn-block u-btn-primary g-py-13 mb-4" type="button">Signup</button>
              </form>

              <footer className="text-center">
                <p className="g-color-gray-dark-v5 g-font-size-13 mb-0">Already have an account? <Link to="/login" className="g-font-weight-600">login</Link></p>
              </footer>
            </div>
          </div>
        </div>
      </section>

    )
  }
}
