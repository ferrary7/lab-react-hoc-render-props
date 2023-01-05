import WrapperHOC from "./WrapperHOC"

function LikePostHOC(props) {
  return (
    <div>
      <button onClick={props.handleCounter}>Like Post {props.counter}</button>
    </div>
  )
}

export default WrapperHOC(LikePostHOC);