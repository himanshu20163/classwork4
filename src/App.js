import logo from './logo.svg';
import './App.css';
import Cards_next from './Cards_next';
import Home_page from './Home/Home_page';

function App() {
  return (
    <div className="App">
      {/* <div className="card_box">
        <img src="https://ps.w.org/cbxuseronline/assets/icon-256x256.png?rev=2284897" height="100" width="100"/>
        <h4>Himanshu Sahu</h4>
        <p>I am website Designer</p>
        <div className="follow">
          <div class="posts">
            <p>172</p>
            <p>POSTS</p>
          </div>
          <div class="posts">
            <p>47</p>
            <p>FOLLWERS</p>
          </div>
          <div class="posts">
            <p>20</p>
            <p>FOLLOWINGS</p>
          </div>
        </div>
        <button style={{backgroundColor:"hsl(272.45deg 74.65% 58.24%)",margi:"10px",padding:"10px",width:"18%",color:"white",borderStyle:"none",borderRadius:"5px"}}>FOLLOW</button>
        <button style={{backgroundColor:"hsl(324.43deg 73.57% 55.49%)",margin:"10px",padding:"10px",width:"18%",color:"white",borderStyle:"none",borderRadius:"5px"}}>MESSAGES</button>
      </div> */}
      <Cards_next />
      {/* <Home_page /> */}
    </div>
  );
}

export default App;
