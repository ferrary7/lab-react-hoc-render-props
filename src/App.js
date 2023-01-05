import './App.css';
import LikeImage from './components/LikeImage';
import LikeImageHOC from './components/LikeImageHOC';
import LikePost from './components/LikePost';
import LikePostHOC from './components/LikePostHOC';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <div>

      <h3>Some Blog</h3>

{/* Render Props */}

      <div className='buttons'>
        <Wrapper render={(counter, handleIncreament)=>{
          return <LikeImage likeImageCounter={counter} handleLikeImageCount = {handleIncreament}/>}}/>

        <Wrapper render={(counter, handleIncreament)=>{
          return <LikePost LikePostCounter={counter} handlePostCount = {handleIncreament}/>}}/>
      </div>


{/*HOC*/} 

      <div className='buttons'>
        <LikeImageHOC/>
        <LikePostHOC/>
      </div>

    </div>
  );
}

export default App;