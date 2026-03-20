import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

function Nevrusd() {

  type RateData = {
    time: string;
    rate: number;
  };

  //const [data, setData] = useState([]);
  const [data, setData] = useState<RateData[]>([]);

  const fetchRate = async () => {
    const res = await fetch(
      //"https://api.exchangerate.host/latest?base=USD&symbols=KRW"
      "https://api.frankfurter.app/latest?from=USD&to=KRW"      
    );
    const json = await res.json();

    const rate = json.rates.KRW;

    const now = new Date().toLocaleTimeString();

    setData(prev => [
      ...prev.slice(-30),   // 최근 30개만 유지
      { time: now, rate: rate }
    ]);
  };

  useEffect(() => {

    fetchRate(); // 최초 실행

    const interval = setInterval(() => {
      fetchRate();
    }, 5000); // 5초마다

    return () => clearInterval(interval);

  }, []);

  return (
    <div>
      <h3>USD → KRW 환율</h3>

      <LineChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time"/>
        <YAxis domain={['auto','auto']}/>
        <Tooltip />
        <Line type="monotone" dataKey="rate" stroke="#8884d8" />
      </LineChart>

    </div>
  );
}

export default Nevrusd;