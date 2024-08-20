'use client'
import React from 'react'
import ReactApexChart from 'react-apexcharts';
import { NumberTransition } from './NumberTransition';

function Chart() {
  const radialChartState = {
    series: [75, 60, 50],
    options: {
      chart: {
        height: 250,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: '16px',
            },
            value: {
              fontSize: '30px',
              color: "#fff"
            },
            total: {
              show: true,
              label: 'STATUSES',
              color: "#fff",
              formatter: function (w) {
                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                return 14
              }
            },
          },
          track: {
            background: '#fff',
            strokeWidth: '67%',
            margin: 4, // margin is in pixels
          },
        }
      },
      stroke: {
        lineCap: 'round'
      },
      labels: ['Months in Business', 'Happy Clients', 'Project Done'],
    }
  }



  const barChartState = {
    series: [{
      name: 'Marine Sprite',
      data: [44, 55, 41, 37, 22, 43, 21]
    }, {
      name: 'Striking Calf',
      data: [53, 32, 33, 52, 13, 43, 32]
    }, {
      name: 'Tank Picture',
      data: [12, 17, 11, 9, 15, 11, 20]
    }, {
      name: 'Bucket Slope',
      data: [9, 7, 5, 8, 6, 9, 4]
    }, {
      name: 'Reborn Kid',
      data: [25, 12, 19, 32, 25, 24, 10]
    }],
    options: {
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          dataLabels: {
            total: {
              enabled: true,
              offsetX: 0,
              style: {
                fontSize: '13px',
                fontWeight: 900,
              }
            }
          }
        },
      },
      stroke: {
        width: 1,
        colors: ['#fff'],
        lineCap: 'rounded'
      },
      xaxis: {
        categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
        show: false
      },
      fill: {
        opacity: 1
      },
      legend: {
        show: false
      }
    },
  };

  return (
    <div className='container' >
      <div className="row">
        <div className="col-12 col-md-7">
          <div className="row  rounded-4  radial-chart">
            <div className="col-5">
              <p className="fs-4 text-white">Projects summary</p>
              <div id="chart">
                <ReactApexChart options={radialChartState.options} series={radialChartState.series} type="radialBar" height={250} />
              </div>
            </div>
            <div className="col-1"></div>
            <div className="col-6 p-0 chart-img">
              <img src="assets/images/web.png" alt="chart-img" className='img-fluid h-100 rounded-bottom-end-4 img-radius' />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-5">
          <div className="row radial-chart rounded-4 ms-2 me-1">
            <div className="col-9">
              <div id="chart">
                <ReactApexChart options={barChartState.options} series={barChartState.series} type="bar" height={245} />
              </div>
            </div>
            <div className="col-2">
              <NumberTransition end={4} suffix="M+" enableScrollSpy duration={3} />
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Chart;