import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import axios from "axios";

function Exchangeusd() {
  const [rate, setRate] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRate = async () => {
      try {
        // USD → KRW 환율 가져오기
        const res = await axios.get(
          //"https://api.exchangerate.host/latest?base=USD&symbols=KRW" >> https://api.frankfurter.app/latest?from=USD&to=KRW
          // {"amount":1.0,"base":"USD","date":"2026-01-20","rates":{"KRW":1476.8}}
          "https://api.frankfurter.app/latest?from=USD&to=KRW"          
          //"https://finance.naver.com/marketindex/exchangeDetail.naver?marketindexCd=FX_USDKRW"
        );
        setRate(res.data.rates.KRW);
      } catch (err) {
        console.error("환율 정보를 가져올 수 없습니다.", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRate();

    // 1분마다 갱신
    const interval = setInterval(fetchRate, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: "10px", fontFamily: "sans-serif", width: "1024px", height: "600px"}}>
      <NavBar /> 
      <h2>💵 실시간 달러 환율</h2>
      {loading ? (
        <p>불러오는 중...</p>
      ) : (
        <p>1 USD = {rate?.toLocaleString()} KRW</p>
      )}
      <h2>💵 환율 조회 (iframe)</h2>
      <iframe src="https://finance.naver.com/marketindex/exchangeDetail.naver?marketindexCd=FX_USDKRW" width="100%" height="600px" style={{ border: "none" }} title="환율정보" />
    </div>
  );
}

export default Exchangeusd;
