// IMPORT

// import Alert from "../component_variable/Alert";
import Jumbotron from "../component_variable/jumbotron";
import Library from "../component_variable/Libraries/library";

// EXPORT
export default function Main() {
  return (
    <>
      <Jumbotron />
      <button>Load more</button>
      <div className="container">
        <Library />
        {/* <Alert type="black">
        <p>Lorem, ipsum dolor.</p>
      </Alert> */}
      </div>
      <button>Load more</button>
    </>
  );
}
