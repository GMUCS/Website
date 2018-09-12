import { connect } from 'react-redux'
import { baseAccountBalance, getBalance } from '../modules/home'


import Page from '../components/Home'


const mapDispatchToProps = {
    getBalance : () => getBalance()

}

const mapStateToProps = (state) => ({
    baseAccountBalance: state.Home.baseAccountBalance,
    baseAccount: state.Home.baseAccount
})


export default connect(mapStateToProps, mapDispatchToProps)(Page)
