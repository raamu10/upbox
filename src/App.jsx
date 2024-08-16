import "./App.css"
import "./styles/common-style.css"
import NavComponent from "./nav/nav-component"
import FooterComponent from "./footer/footer-component"
import ContentComponent from "./content/content-component"

function App() {
  return (
    <div className="App">
      <NavComponent />
      <ContentComponent />
      <FooterComponent />
      {/* <div className="home-container">
        <ContentComponent />

        <FooterComponent />
      </div> */}
    </div>
  )
}

export default App
