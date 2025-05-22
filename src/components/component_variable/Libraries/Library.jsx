// IMPORT
import comics from "../../../assets/db/comics";
import Cardholder from "./Cardholder";

const Books = comics.map((book) => (
  <Cardholder key={book.id} image={book.thumb} title={book.title} />
));

export default function Library() {
  return <div className="row">{Books}</div>;
}
