import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className="header" style={{
        height: '45px',
        width: '80%'
      }}>
        <img className='logo' src="src/img/rareblocks.png" alt="" />
        <div className="menu">
          <a href="">About</a>
          <a href="">Apes</a>
          <a href="">Dashboard</a>
        </div>
        <button>Connect Wallet</button>
      </div>
      <div className="basetext">
        <h1>NFT<br/>PURPLE</h1>
        <p>Fuape is a collection of 1000 funny ape NFTs - <br/>unique digital collectibles living on the Ethereum<br/> blockchain.</p>
      </div>
      <div className="Note">
        <div className="LeftNote">
          <p>Current Bid</p>
          <h2>Ξ 2.5 ETH</h2>
        </div>
        <div className="RightNote">
          <p>Bid Ends In</p>
          <h2>12h:24m:41s</h2>
        </div> 
      </div>
      <button id='Bid'>Bid on Opensea</button>
    </>
  )
}

export default App
