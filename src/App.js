import React from "react";
import GlobalStyle from "./shared/GlobalStyle";
import Router from "./shared/Router";

function App() {
  return (
    <>
      {/* GlobalStyle - 전체css스타일 */}
      <GlobalStyle />
      {/* 페이지 쪼갬 */}
      <Router />
    </>
  );
}

export default App;
