export const mockData = [{
    date: new Date(),
    systolic: 130,
    diastolic: 90
},
{
    date: new Date(),
    systolic: 120,
    diastolic: 80
},
{
    date: new Date(),
    systolic: 150,
    diastolic: 70
},
{
    date: new Date(),
    systolic: 103,
    diastolic: 85
}];

export function getData() {
    // const delay = (0.5 + Math.random() * 2) * 1000;
    return new Promise((resolve, reject) => {
        resolve(mockData);

        // setTimeout(function () {
        //     resolve(mockData);
        // }, delay);
    });
}

export function createSeries(name, data) {
    return {
        name,
        data
    }
}

export var graphOptions = {
    chart: {
        id: 'histogram',
        type: 'bar',
        height: 350
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    yaxis: {
        title: {
            text: 'Frequency'
        },
        logarithmic: false,
    },
    legend: {
        markers: {
            fillColors: ['#BA1A43', '#5A1340']
        },
    },
    fill: {
        opacity: 1,
        colors: ['#BA1A43', '#5A1340']
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return val + " mmgh"
            }
        }
    }
}


export function performLogin({ email, password }) {
    const delay = (0.5 + Math.random() * 2) * 1000;
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            if (!!password && !!email) {
                var rand = function () {
                    return Math.random().toString(36) // remove `0.`
                };
                var token = function () {
                    return rand() + rand(); // to make it longer
                };
                resolve({ token: token() });
            } else {
                reject(new Error("Invalid credentials"));
            }
        }, delay);
    });
}