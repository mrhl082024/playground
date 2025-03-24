import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Chart } from "react-chartjs-2";
import data from "./data/data.json";
function App() {
  return (
    <>
      <Chart
        data={{
          labels: data.map((data) => data.label),
          datasets: [
            {
              type: "doughnut",
              label: "count",
              data: data.map((data) => data.value),
            },
          ],
        }}
      />
    </>
  );
}

export default App;
