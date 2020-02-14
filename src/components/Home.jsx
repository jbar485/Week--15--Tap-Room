import React from 'react';
import './Home.css';

function Home(){
  return (
    <div>
      <h2>TROY3OY BREWING</h2>
      <h3 className='fancy'>WHICH LOCATION ARE YOU LOOKING FOR?</h3>
      <div className="row">
  <div className="column">
      <div class="card">
        <img className='threeImages' src="https://heathenbrewing.com/wp-content/uploads/bfi_thumb/screen-shot-2017-10-05-at-9.26.10-am-o0gzc8ndygprnwey9w9hequ3obub2n239lz8zjrqeo.png" alt=""></img>
        <div className="container">
        <h4 className='rocktext'><b>TROY3OY PUBLIC HOUSE</b></h4>
        <p>THE BREW PUB</p>
        </div>
        </div>
    </div>
    <div className="column">
    <div className="card">
        <img className='threeImages' src="https://heathenbrewing.com/wp-content/uploads/bfi_thumb/fresh-hop-2018-3-of2ubg1p0dnjt7jz53ctt99cpc52306l8owefodqwg.jpg" alt=""></img>
        <div class="container">
        <h4 className='rocktext'><b>HEATHEN BREWING</b></h4>
        <p>THE PRODUCTION BREWERY</p>
        </div>
        </div>
    </div>
    <div className="column">
    <div className="card">
        <img className='threeImages' src="https://heathenbrewing.com/wp-content/uploads/2015/10/estate2.jpg" alt=""></img>
        <div className="container">
        <h4 className='rocktext'><b>TROY3OY ESTATE</b></h4>
        <p>THE WINERY</p>
        </div>
        </div>
    </div>
    </div>
    </div>
  );
}

export default Home;