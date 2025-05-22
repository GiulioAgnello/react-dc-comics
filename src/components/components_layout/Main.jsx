// IMPORT

// import Alert from "../component_variable/Alert";
import Jumbotron from "../component_variable/jumbotron";
import Library from "../component_variable/Libraries/library";

// EXPORT
export default function Main() {
  return (
    <>
      <Jumbotron />

      <div id="librarycontainer" className="container">
        <div className="buttonseries">
          <button id="series">
            <a href="#">CURRENT SERIES</a>
          </button>
        </div>
        <Library />
        {/* <Alert type="black">
        <p>Lorem, ipsum dolor.</p>
      </Alert> */}
      </div>
      <div className="buttonholder">
        <button id="loadbt">
          <a href="#">LOAD MORE</a>
        </button>
      </div>
    </>
  );
}
