// IMPORT
import comics from "../../../assets/db/comics";
import Cardholder from "./Cardholder";

const Books = comics.map((book) => (
  <Cardholder key={book.id} image={book.thumb} series={book.series} />
));

export default function Library() {
  return <div className="row">{Books}</div>;
}
