import { connect } from 'react-redux'
import { onEventChange } from '../modules/home'


import Page from '../components/Home'


const mapDispatchToProps = {
    onEventChange: (event) => onEventChange(event)
}

const mapStateToProps = (state) => ({
    eventsPannelImage: state.Home.eventsPannelImage,
    events: state.Home.events
})


export default connect(mapStateToProps, mapDispatchToProps)(Page)
