import WrapperHOC from "./WrapperHOC"

function LikeImageHOC(props) {
  return (
    <div>
      <button onClick={props.handleCounter}>Like Image {props.counter}</button>
    </div>
  )
}

export default WrapperHOC(LikeImageHOC);