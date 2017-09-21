import React from 'react'
import {connect} from 'react-redux'
import {colors} from '../../constants/Colors'
import BizSidebar from './PageSidebar'
import Breadcrumbs from './PageBreadcrumbs'
import Product from './Product'
import {StyleSheet,css} from 'aphrodite'
import {upToSM, upToMD} from '../../constants/Media'

const styles = StyleSheet.create({
  logo: {
    margin: '2em 0 0 0',
    [upToSM]: {
      textAlign: 'center'
    }
  },
  title: {
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
      display: 'block'
    }
  },
  crumbs: {
    display: 'none',
    [upToSM]: {
      display: 'block'
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
    return region && city &&
      <div id="portfolio" className="portfolio-section">
          <div className="container">
              <div className={css(styles.crumbs)}>
                <Breadcrumbs region={region} city={city}/>
              </div>
              <div className="row">
                  <div className="col-sm-4">
                      <div className={css(styles.logo)}>
                        <img alt={b.name} src={"images/test/"+b.logo}
                          style={{height: '100%', width: '100%', borderRadius: '1em'}}/>
                      </div>

                      <div className="section-title g-pt-20">
                        <h1 className={css(styles.title)} style={{color: colors[b.color]}}>{b.name}</h1>
                        <h4 className={css(styles.subtitle)}>El Paso, TX</h4>
                        <h4 className={css(styles.mobileSubtitle)}>{b.title}</h4>
                      </div>
                      <BizSidebar b={b}/>
                  </div>
                  <div className="col-sm-8" style={{marginTop: '2em'}}>
                      <div className="text-info">
                          <h4 className={css(styles.pageTitle)}>{b.title}</h4>
                          <p>{b.subtitle}</p>
                      </div>
                      <div className="portfolio-content">
                          <div className="row">
                            { b.products.map((p,i) => (
                              <Product p={p} b={b}/>
                            ))}
                          </div>
                      </div>
                 </div>
              </div>
          </div>
      </div>
  }
}

const mapStateToProps = store => {
  return {
    region: store.region,
    city: store.city
  }
}

export default connect(mapStateToProps)(Page)
