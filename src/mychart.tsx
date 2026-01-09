import NavBar from "./components/NavBar";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["1월", "2월", "3월", "4월", "5월"],
  datasets: [
    {
      label: "매출액",
      data: [120, 150, 180, 90, 200],
      borderColor: "rgba(75,192,192,1)",
      backgroundColor: "rgba(75,192,192,0.2)",
      tension: 0.3,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { position: "top" as const },
    title: { display: true, text: "월별 매출 차트" },
  },
};

export default function Mychart() {
  return (
    <div style={{ width: "600px", margin: "0 auto" }}>
      <NavBar />   
      <h1>📊 React Chart 예제</h1>
      <Line data={data} options={options} />
    </div>
  );
}
