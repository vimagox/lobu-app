import React from 'react'
import {connect} from 'react-redux'
import {colors} from '../../constants/Colors'
import BizSidebar from './PageSidebar'
import Breadcrumbs from '../place/mobile/Breadcrumbs'
import Product from './Product'
import {StyleSheet,css} from 'aphrodite'
import {upToSM, upToMD} from '../../constants/Media'
import Spinner from '../Spinner'


const styles = StyleSheet.create({
  logo: {
    margin: '3.5em 0 0 0',
    height: '12em',
    textAlign: 'left',
    // border: '1px solid red',
    [upToSM]: {
      textAlign: 'center',
      margin: '1em auto'
    }
  },
  logoImg: {
    height: '100%',
    width: '100%',
    // borderRadius: '1em',
    // objectFit: 'contain',
    // objectPosition: '50% 50%'
  },
  title: {
    fontSize: '4em',
    [upToMD]: {
      fontSize:  '2em'
    },
    [upToSM]: {
      textAlign: 'center',
      fontSize:  '2.25em'
    }
  },
  subtitle: {
    fontWeight: 'normal',
    color: '#ccc',
    marginTop: '-.5em',
    [upToSM]: {
      display: 'none'
    }
  },
  mobileSubtitle: {
    fontWeight: 'normal',
    color: '#ccc',
    display: 'none',
    textAlign: 'center',
    [upToSM]: {
      display: 'block',
      marginBottom: '2em'
    }
  },
  crumbs: {
    display: 'none',
    [upToSM]: {
      marginLeft: '-1em',
      marginTop: '-1em',
      paddingTop: '1em',
      position: 'fixed',
      width: '100%',
      display: 'block',
      backgroundColor: '#fff',
      zIndex: 999,
      borderBottom: '1px solid ' + colors[8],
    }
  },
  spacer: {
    [upToSM]: {
      height: '3em',
    }
  },
  pageTitle: {
    fontSize: '45px',
    [upToMD]: {
      fontSize: '28px',
    }
  }
})


class Page extends React.Component {

  render() {
    const b = this.props.b
    const region = this.props.region
    const city = this.props.city
    return (
    <div id="portfolio" className="portfolio-section"
        style={{marginTop: '-3em'}}>
      {!(region && city) && <Spinner/>}
      {region && city &&
        <div className="container">
          <div className={css(styles.crumbs)}>
            <Breadcrumbs region={region} city={city}/>
          </div>
          <div className={css(styles.spacer)}/>
          <div className="row">
            <div className="col-sm-4">
              <div className={css(styles.logo)}>
                <img alt={b.name}
                  style={{objectFit: b.logofit || 'contain', objectPosition: b.logoposition}}
                  src={"images/test/"+b.logo} className={css(styles.logoImg)}/>
              </div>
              <div className="g-pt-0">
                <h1 className={css(styles.title)} style={{color: colors[b.color]}}>{b.name}</h1>
                <h4 className={css(styles.subtitle)}>El Paso, TX</h4>
                <h4 className={css(styles.mobileSubtitle)}>{b.title}</h4>
              </div>

              <BizSidebar b={b}/>
            </div>
            <div className="col-sm-8" style={{marginTop: '2em'}}>
              <div className="text-info" style={{clear: 'both'}}>
                <h4 className={css(styles.pageTitle)}>{b.title}</h4>
                <p>{b.subtitle}</p>
              </div>
              <div className="portfolio-content">
                <div className="row">
                  { b.products && b.products.map((p,i) => (
                    <Product key={"pro"+i} p={p} b={b}/>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>}
    </div>
  )}
}

const mapStateToProps = store => {
  return {
    b: store.place.business,
    region: store.place.region,
    city: store.place.city
  }
}

export default connect(mapStateToProps)(Page)
