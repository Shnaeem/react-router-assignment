
function PlanetDetail(props) {
  return (
    <div>
      <h1>Planet Detail</h1>
      <p> Num of Moon : {props.location.props.moon}</p>
      <p> color: {props.location.props.color}</p>
    </div>
  )
}

export default PlanetDetail;