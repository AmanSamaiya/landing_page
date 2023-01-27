import React from 'react';
import './App.css';
import ProgressBars from './components/progressbars';
import Cards from './components/Cards';
import Circle from './components/Circle';
import { Icons, Icontext, Iconnumber } from './components/imagesdata';
import {titledata , textdata} from './components/Carddata';


function App() {

  return (
    <div>
      <div className="App">

        <div className='Data'>
          <div>
            <h6>WHY CHOOSE US India</h6>
            <hr style={{color:'red',width:'50%'}}></hr>
            <h1>We dedicate for company india with SEO work India</h1>
            <p>India from keyword research to technical auditing to site migration our team of technical SEOs are true experts in their fields</p>
          </div>

          <div className='Bars'>
            <ProgressBars percent={76} data='Keyword Research' />
            <ProgressBars percent={84} data='Technical SEO Audit' />
            <ProgressBars percent={70} data='Content Optimization' />
          </div>

        </div>

        <div className='Cards'>
          {titledata.map((data, i) => {
            return <Cards title={data} data={textdata[i]} />
          })}
        </div>

      </div>

      <div className='Circles'>
        {Icons.map((icon, i) => {
          return <Circle image={icon} text={Icontext[i]} number={Iconnumber[i]} />
        })}
      </div>

    </div>

  );
}

export default App;
