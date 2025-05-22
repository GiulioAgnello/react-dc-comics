// EXPORT

export default function Cardholder({ image, title }) {
  return (
    <>
      <div className="col-1-6" key="">
        <div className="topcard">
          <img src={image} alt="" />
        </div>
        <div className="bottomcard">
          <h5>{title}</h5>
        </div>
      </div>
    </>
  );
}
