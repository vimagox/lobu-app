import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import Biz from '../components/business/Page'
import {place} from '../actions'
import Spinner from '../components/Spinner'


const biz1 = {
  name: 'Casa Furniture',
  title: 'Wholesale Bedroom Sets',
  subtitle: 'High quality and modern bedroom sets at wholesale prices. Contact us today with your business inquiries.',
  logo: 'cf.png',
  imgHeight: '11em',
  contact: {
    name: "Victor Gómez",
    // address: "123 West 12th Street, Suite 456",
    city: "El Paso, TX",
    // zipcode:  "79922",
    phone: "(915) 320 2836",
    email: "sales@casafurniture.co"
  },
  location: {
    region: '/tx',
    city: 'el',
  },
  color: 1,
  links: {
    website: 'casafurniture.co'
  },
  services: {
    freeDelivery: true,
    bitcoin: true,
  },
  products: [
    {category: 'Bedroom Sets', name: 'Suzy', img: '1.jpg'},
    {category: 'Bedroom Sets', name: 'Sandra', img: '2.jpg'},
    {category: 'Bedroom Sets', name: 'Sarah', img: '3.jpg'},
    {category: 'Bedroom Sets', name: 'Samantha', img: '4.jpg'},
    {category: 'Bedroom Sets', name: 'Shannon', img: '5.jpg'},
    {category: 'Bedroom Sets', name: 'Scarlett', img: '6.jpg'},
    {category: 'Bedroom Sets', name: 'Sabrina', img: '7.jpg'},
    {category: 'Bedroom Sets', name: 'Sofia', img: '8.jpg'},
    {category: 'Bedroom Sets', name: 'Susan', img: '9.jpg'},
    {category: 'Bedroom Sets', name: 'Sue', img: '10.jpg'},
    {category: 'Bedroom Sets', name: 'Syvia', img: '11.jpg'},
  ]
}

const biz2 = {
  name: 'Rainbow',
  title: 'Face Painting',
  subtitle: "Face painting is a fun addition to any kids' party. Hire Sasha today.",
  logo: 'rainbow.jpg',
  imgHeight: '25em',
  contact: {
    name: "Sasha Gómez",
    // address: "123 West 12th Street, Suite 456",
    city: "El Paso, TX",
    // zipcode:  "79922",
    phone: "(915) 320 2811",
    email: "sahitagomita@gmail.com"
  },
  location: {
    region: '/tx',
    city: 'el',
  },
  color: 5,
  services: {
    bitcoin: true,
  },
  products: [
    {category: '', name: 'Suzy', img: 'test1.jpg'},
    {category: '', name: 'Sandra', img: 'test2.jpg'},
    {category: '', name: 'Sarah', img: 'test3.jpg'},
    {category: '', name: 'Samantha', img: 'test4.jpg'},
    {category: '', name: 'Shannon', img: 'test5.jpg'},
    {category: '', name: 'Scarlett', img: 'test6.jpg'},
    {category: '', name: 'Sabrina', img: 'test7.jpg'},
    {category: '', name: 'Sofia', img: 'test8.jpg'},
    {category: '', name: 'Susan', img: 'test9.jpg'},
    {category: '', name: 'Sue', img: 'test10.jpg'},
    {category: '', name: 'Syvia', img: 'test11.jpg'},
    {category: '', name: 'Syvia', img: 'test12.jpg'},
  ]
}


class Business extends React.Component {

  constructor() {
    super()
    this.state = {biz: null}
  }

  componentWillMount() {
    // if(!this.props.business) {
      if(this.props.location.pathname === '/casa') {
        this.setState({biz: biz1})
        place.loadBusiness(biz1)
      }
      else if(this.props.location.pathname === '/rainbow') {
        this.setState({biz: biz2})
        place.loadBusiness(biz2)
      // }
    }else {
      place.loadBusiness(biz1)
    }

    window.scrollTo(0, 0)
  }

  render() {
    const biz = this.props.business || this.state.biz
    const region = this.props.region
    const city = this.props.city
    const bizFound = region && city && biz
    return (
      <div className="container">
        {!bizFound && <Spinner/>}
        {bizFound && <Biz b={biz}/>}
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    business: store.app.business,
    region: store.location.region,
    city: store.location.city
  }
}

export default withRouter(connect(mapStateToProps)(Business))

// <div className={css(styles.notfound)}>
//   <h3>Sorry, page not found!</h3>
// </div>
// {!bizFound && <NotFound/>}
