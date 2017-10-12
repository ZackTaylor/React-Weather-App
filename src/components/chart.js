import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

function average(data) {
  return _.round(_.sum(data) / data.length);
}

export default (props) => {
  return (
    <div>
      <Sparklines height={100} width={100} data={props.data}>
        <SparklinesLine color={props.color}></SparklinesLine>
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>Average: { average(props.data) } { props.units }</div>
    </div>
  );
};
