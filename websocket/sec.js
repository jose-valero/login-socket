// const valor = {
//   1: {
//     11: 59,
//     18: 5,
//   },
//   4: {
//     11: 3,
//   },
// };

// const val = (vals) => {
//   const hoy = new Date().getMonth() + 1;
//   const hoyDia = new Date().getDate();
//   const YEntries = new Map();
//   const algo = Object.entries(vals);

//   for (i = 1; i <= hoyDia; i++) {
//     YEntries[i]=0;
//   }


//   algo.forEach((val) => {
//     if (algo[`${hoy}`].length > 0) {
//       console.log('el mes analizado es ', val[0]);
//       if (val[0] == hoy) {
//         Object.entries(val[1]).forEach((val2) => {
//           YEntries[val2[0]]=val2[1];
//         });
//       }
//     }
//   });

//   return YEntries;
// };


// console.log(val(valor));
