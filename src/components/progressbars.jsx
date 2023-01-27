import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

function ProgressBars(props) {

  const now = props.percent;
  return (
    <div>
      <p>{props.data}</p>
      <ProgressBar now={now} label={`${now}%`} />
    </div>

  )

}

export default ProgressBars;