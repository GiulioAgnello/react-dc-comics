// EXPORT

export default function Cardholder({ image, series }) {
  return (
    <>
      <div className="col-1-6" key="">
        <div className="card">
          <div className="topcard">
            <img src={image} alt="" />
          </div>
          <div className="bottomcard">
            <h5>{series}</h5>
          </div>
        </div>
      </div>
    </>
  );
}
