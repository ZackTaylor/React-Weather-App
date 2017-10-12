import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default (props) => {
  console.log(props.data)
  return(
    <div>
      <Sparklines height={100} width={100} data={props.data}>
        <SparklinesLine color={props.color}></SparklinesLine>
      </Sparklines>
    </div>
  );
}
