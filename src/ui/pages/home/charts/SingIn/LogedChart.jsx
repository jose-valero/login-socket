import { Line } from 'react-chartjs-2';

const LogedChart = ({ januaryLogs }) => {
  const data = {
    labels: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      '17',
      '18',
      '19',
      '20',
      '21',
      '22',
      '23',
      '24',
      '25',
      '26',
      '27',
      '28',
      '29',
      '30',
    ],
    datasets: [
      {
        label: '# of Logs daily',
        data: [],
        pointBackgroundColor: [
          'rgba(2, 197, 247)',
          'rgba(81, 18, 227)',
          'rgba(87, 63, 69)',
          'rgba(217, 4, 57)',
          'rgba(211, 242, 31)',
          'rgba(151, 187, 194)',
          'rgba(18, 18, 18)',
          'rgba(2, 197, 247)',
          'rgba(81, 18, 227)',
          'rgba(87, 63, 69)',
          'rgba(217, 4, 57)',
          'rgba(211, 242, 31)',
          'rgba(151, 187, 194)',
          'rgba(18, 18, 18)',
          'rgba(2, 197, 247)',
          'rgba(81, 18, 227)',
          'rgba(87, 63, 69)',
          'rgba(217, 4, 57)',
          'rgba(211, 242, 31)',
          'rgba(151, 187, 194)',
          'rgba(18, 18, 18)',
          'rgba(2, 197, 247)',
          'rgba(81, 18, 227)',
          'rgba(87, 63, 69)',
          'rgba(217, 4, 57)',
          'rgba(211, 242, 31)',
          'rgba(151, 187, 194)',
          'rgba(18, 18, 18)',
        ],
      },
    ],
  };

  data.labels.forEach((labels) => {
    const dataY = data.datasets[0].data;
    if (januaryLogs.hasOwnProperty(labels)) {
      dataY.push(januaryLogs[labels]);
    } else {
      dataY.push(0);
    }
  });

  console.log('chart data', data);

  return (
    <div className=' my-5'>
      <Line type='line' data={data} />
    </div>
  );
};

export default LogedChart;
