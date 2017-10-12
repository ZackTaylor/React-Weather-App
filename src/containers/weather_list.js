import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);

    return (
      <tr key={ name }>
        <td>{ name }</td>
        <td>
          <Chart data={temps} color="orange" units="K"/>
        </td>
        <td>
          <Chart data={pressures} color="green" units="HPa"/>
        </td>
        <td>
          <Chart data={humidities} color="blue" units="%"/>
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover text">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperat</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          { this.props.weather.map(this.renderWeather) }
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
