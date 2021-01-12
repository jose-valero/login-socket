import { Line } from 'react-chartjs-2';

const RegisterChart = () => {
  return (
    <div className='my-5'>
      <Line
        data={{
          type: 'line',
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
          ],
          datasets: [
            {
              label: 'HOLA CHART REG',
              data: [1250, 2500, 1646, 890, 3250, 180],
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

export default RegisterChart;
