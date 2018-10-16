import { connect } from 'react-redux'
import { baseAccountBalance, getBalance } from '../modules/home'


import Page from '../components/Home'


const mapDispatchToProps = {

}

const mapStateToProps = (state) => ({
    eventsPannelImage: state.Home.eventsPannelImage,
    events: state.Home.events
})


export default connect(mapStateToProps, mapDispatchToProps)(Page)
