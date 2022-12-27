import logo from "./logo.svg";
import "./App.css";
// import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import "chartjs-plugin-datalabels";
import { Chart } from "chart.js";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Data, NewData, NewData2 } from "./data";
import { useEffect, useState } from "react";

Chart.register(ChartDataLabels);

function App() {
  // const [label, setLabel] = useState([]);
  // const [dataset, setDataset] = useState([]);

  // const [label1, setLabel1] = useState([]);
  // const [dataset1, setDataset1] = useState([]);
  // useEffect(() => {
  //   const lab = [];
  //   const data = [];
  //   for (let index = 0; index < NewData.length; index++) {
  //     const element = NewData[index];
  //     // console.log(Object.keys(element), Object.values(element));
  //     lab.push(Object.keys(element));
  //     data.push(JSON.stringify(Object.values(element)));
  //     // setLabel(lab);
  //     // setDataset(data);

  //     console.log("Lab: " + lab);
  //     console.log("data: " + data);
  //   }
  // }, []);

  // useEffect(() => {
  //   const sSubject = Array(NewData2.length).fill(Array(2));
  //   const sMarks = Array(NewData2.length).fill(Array(2));
  //   // console.log(sSubject);
  //   // console.log(sSubject[1]);
  //   // console.log(sSubject[2]);
  //   for (let index = 0; index < NewData2.length; index++) {
  //     // const getData1 = () => {
  //     var responses = NewData2[index];
  //     // console.log(sSubject[index]);
  //     for (let i = 0; i < responses.length; i++) {
  //       var eachResponse = responses[i];
  //       console.log(eachResponse);
  //       // console.log(sSubject[index]);

  //       sSubject[index] = eachResponse;
  //       // sMarks[index] = eachResponse;
  //       // console.log("sSubject ith index", sSubject[i]);
  //       // console.log(sSubject[index]);
  //     }

  //     console.log(sSubject[index]);
  //     // console.log(sMarks);

  //     setLabel1(sSubject);
  //     setDataset1(sMarks);
  //   }

  //   // getData1();
  //   // }
  //   //console.log(resData);
  // }, []);

  // useEffect(() => {
  //   const sSubject = [];
  //   const sMarks = [];
  //   const getData = () => {
  //     for (let i = 0; i < NewData.length; i++) {
  //       sSubject.push(NewData[i].label);
  //       sMarks.push(parseInt(NewData[i].response));
  //     }
  //     // console.log(sSubject);
  //     setLabel(sSubject);
  //     setDataset(sMarks);
  //   };

  //   getData();
  //   //console.log(resData);
  // }, []);

  const data = {
    labels: NewData2.map((d) => d.label),
    datasets: [
      {
        label: "Audit responses",
        data: NewData2.map((d) => d.data),
        backgroundColor: ["#4b77a9", "#5f255f"],
        hoverOffset: 4,
      },
    ],
  };

  // const data2 = {
  //   labels: label1.map((d) => d),
  //   datasets: [
  //     {
  //       label: "Audit responses",
  //       data: dataset1.map((d) => d),
  //       backgroundColor: ["#4b77a9", "#5f255f"],
  //       hoverOffset: 4,
  //     },
  //   ],
  // };

  var options = {
    legend: {
      display: false,
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem) {
          return tooltipItem.yLabel;
        },
      },
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          let sum = 0;
          let dataArr = ctx.chart.data.datasets[0].data;
          dataArr.map((data) => {
            sum += Number(data);
          });
          let percentage = ((value * 100) / sum).toFixed(2) + "%";
          return percentage;
        },
        color: "#fff",
      },
    },
  };
  return (
    <div className="App">
      {NewData2.map((data) => {
        return (
          <Pie
            type="pie"
            data={{
              labels: data.label,
              datasets: [
                {
                  label: "Audit responses",
                  data: data.data,
                  backgroundColor: ["#4b77a9", "#5f255f"],
                  hoverOffset: 4,
                },
              ],
            }}
            options={options}
          />
        );
      })}
      {/* <Pie type="pie" data={data2} options={options} />
      <Pie type="pie" data={data3} options={options} /> */}
    </div>
  );
}

export default App;

// const data1 = {
//   labels: ["Yes", "No"],
//   datasets: [
//     {
//       label: "My First dataset",
//       data: [65, 59],
//       backgroundColor: ["#4b77a9", "#5f255f"],
//       hoverOffset: 4,
//     },
//   ],
// };
// const data2 = {
//   labels: ["Yes", "No"],
//   datasets: [
//     {
//       label: "My First dataset",
//       data: [80, 56],
//       backgroundColor: ["#5f255f", "#d21243"],
//       hoverOffset: 4,
//     },
//   ],
// };
// const data3 = {
//   labels: ["Yes", "No"],
//   datasets: [
//     {
//       label: "My First dataset",
//       data: [59, 106],
//       backgroundColor: ["#d21243", "#B27200"],
//       hoverOffset: 4,
//       borderWidth: 2,
//     },
//   ],
// };
