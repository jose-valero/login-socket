import { useState } from 'react';
import { Line } from 'react-chartjs-2';

const LogedChart = () => {
  const [chartData, setChartData] = useState({});

  const [log, setLog] = useState([]);

  const [reg, setReg] = useState([]);

  const calcdates = () => {};

  return (
    <div className=' my-5'>
      <Line
        type='line'
        data={{
          labels: [
            '01',
            '02',
            '03',
            '04',
            '05',
            '06',
            '07',
            '08',
            '09',
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
              label: 'hola CHAR REG',
              data: [
                1,
                2,
                3,
                8,
                0,
                15,
                6,
                2,
                5,
                2,
                8,
                15,
                13,
                5,
                3,
                8,
                7,
                15,
                1,
                2,
                22,
                8,
                6,
                15,
              ],
              pointBackgroundColor: [
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
        }}
      />
    </div>
  );
};

export default LogedChart;
