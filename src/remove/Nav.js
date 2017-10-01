import React from 'react'
import {StyleSheet,css} from 'aphrodite'

const styles = StyleSheet.create({
  section: {
    position: 'fixed',
    zIndex: 200,
    right: '-1.2em',
    top: '8em',
    width: '20em',
  }
})

export default class Nav extends React.Component {
  render() {
    return (
    <div className={css(styles.section)}>
      <div id="navigation" className="menu-one">
        <div className="navbar" style={{width: '100%'}}>
        <nav id="mainmenu" className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
              <li className="scroll current dropdown"><a href="#home-banner">
                  <span><i className="fa fa-home" aria-hidden="true"></i>Account</span></a>
              </li>
              <li className="scroll"><a href="#about">
                  <span><i className="fa fa-picture-o" aria-hidden="true"></i>Business</span></a>
              </li>
              <li className="scroll"><a href="#contact">
                  <span><i className="fa fa-volume-control-phone" aria-hidden="true"></i>Contact</span></a>
              </li>
              <li className="scroll"><a href="#blog">
                  <span><i className="fa fa-file-text-o" aria-hidden="true"></i>Links</span></a>
              </li>
              <li className="scroll"><a href="#blog">
                  <span><i className="fa fa-file-text-o" aria-hidden="true"></i>Products</span></a>
              </li>
              <li className="scroll"><a href="#exprience">
                  <span><i className="fa fa-briefcase" aria-hidden="true"></i>Services</span></a>
              </li>
              <li className="scroll"><a href="#skill">
                  <span><i className="fa fa-sliders" aria-hidden="true"></i>Site</span></a>
               </li>
          </ul>
        </nav>
        </div>
      </div>
    </div>
    )
  }
}
// <li className="scroll"><a href="#exprience">
//     <span><i className="fa fa-briefcase" aria-hidden="true"></i>Experience</span></a>
// </li>
// <li className="scroll"><a href="#education">
//     <span><i className="fa fa-leanpub" aria-hidden="true"></i>Education</span></a>
// </li>
// <li className="scroll"><a href="#portfolio">
//     <span><i className="fa fa-picture-o" aria-hidden="true"></i>Portfolio</span></a>
// </li>
// <li className="scroll"><a href="#contact">
//     <span><i className="fa fa-volume-control-phone" aria-hidden="true"></i>Contact</span></a>
// </li>
// <li className="scroll"><a href="#blog">
//     <span><i className="fa fa-file-text-o" aria-hidden="true"></i>Blog</span></a>
// </li>
// <li className="scroll"><a href="#profile">
//     <span><i className="fa fa-floppy-o" aria-hidden="true"></i>My Resume.pdf</span></a>
// </li>
