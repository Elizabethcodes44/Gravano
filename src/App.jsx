import "./App.css";
import Main from "./Components/Home.jsx";
import Header from "./Components/Header.jsx";
import Layout from "./Components/Layout.jsx";
export default function App() {
  return (
    <>
      <Layout>
        <div className="App_Container">
          <Header></Header>
          <Main></Main>
        </div>
      </Layout>
    </>
  );
}
