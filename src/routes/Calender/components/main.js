import React from 'react'
import PropTypes from 'prop-types'
import '../../Home/components/Home.scss'
import { Pannel2, Pannel3 } from '../../../components/Pannel';
import Footer from "../../../components/Footer";


let Panels = (props) => {

  return (
    <div className="pannel">


      <Pannel2
        header="Stuff Here"
       />

      <Footer />

    </div>
  )
}


export const Page = ({ }) => (
  <div style={{ margin: '0 auto' }} >

    <Panels />


  </div>
)

Page.propTypes = {
}

export default Page

/*
      <Pannel2
        header="How is this a trustless network?"
        text="Starting out, we have a certain number of keys that are allowed to mine. However,
        we are issuing new miner keys to companies that chose GameCoin as their cryptocurrency provider. This
        means that the GameCoin Blockchain is supported by the companies and organizations that support it.
        Furthermore, since they are mining, they make cryptocurrency fees for practically free!"
       />

      <Pannel3
        header="Whats in it for companies?"
        text="We've created a positive sum game where companies are encouraged to help one another succeed.
        The more successful the companies that use the blockchain are, the more transactions occur, 
        the more they can mine, the more their cryptocurrency holdings grow in value. This model encourages companies to help
        each other become successful."
       />


      <Pannel2
        header="Whats in it for us?"
        text="We want to see what cool things we can build together."
       />*/