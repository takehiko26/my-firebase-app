import React, { useEffect, useState } from "react";

function getJSTTimeString() {
  const now = new Date();
  // JSTはUTC+9
  const jst = new Date(now.getTime() + (9 * 60 * 60 * 1000) - (now.getTimezoneOffset() * 60000));
  return jst.toLocaleString("ja-JP", { hour12: false });
}

function App() {
  const [time, setTime] = useState(getJSTTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getJSTTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "40px", fontSize: "2rem" }}>
      <div>Hello!</div>
      <div>{time}</div>
    </div>
  );
}

export default App;
