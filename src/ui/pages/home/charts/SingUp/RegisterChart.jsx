import { Bar } from 'react-chartjs-2';

const RegisterChart = () => {
  return (
    <div className='my-5'>
      <Bar
        data={{
          type: 'line',
          labels: [
            'LUNES',
            'MARTES',
            'MIERCOLES',
            'JUEVES',
            'VIERNES',
            'SABADO',
            'DOMINGO',
          ],
          datasets: [
            {
              label: 'hola CHAR REG',
              data: [1250, 2500, 1646, 890, 3250, 180],
              backgroundColor: [
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
