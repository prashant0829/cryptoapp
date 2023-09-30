import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Layout, Typography } from "antd";
import { Navbar } from "./components";
import { Homepage, Cryptocurrencies, CryptoDetails, News } from "./pages";
function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route
                exact
                path="/cryptocurrencies"
                element={<Cryptocurrencies />}
              />
              <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route exact path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={4}
            style={{ color: "white", textAlign: "center" }}>
            Cryptoverse <br />
            All rights reserved
          </Typography.Title>
          <div
            style={{
              color: "white",
              textAlign: "center",
              fontFamily: "monospace",
            }}>
            Created By Prashant Bansal
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
