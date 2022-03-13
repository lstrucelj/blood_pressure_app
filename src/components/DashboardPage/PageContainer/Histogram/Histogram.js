import React, { useState, useEffect } from 'react'
import Chart from 'react-apexcharts'

const Histogram = ({ options, series, scale }) => {

    const chartKey = `${scale ? 'lin' : 'log'} ${options.yaxis?.min} ${options.yaxis?.max}`;

    return (
        <div id="chart">
            <Chart key={chartKey} options={options} series={series} type="bar" height={350} />
        </div>
    )
}

export default Histogram


