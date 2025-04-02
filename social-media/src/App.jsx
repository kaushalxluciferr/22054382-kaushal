import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import TopUsers from "./pages/TopUsers";
import TrendingPosts from "./pages/TrendingPosts";
import Feed from "./pages/Feed";
import "./styles/global.css";
function App() {
  return (
    <Router>
      <div className="container">
        <h1>Social media analytic</h1>
        <nav>
          <a href="/">Feed</a>
          <a href="/top-users">Top users</a>
          <a href="/trending-posts">Trending posts</a>
        </nav>
        <Routes>
          <Route path="/" element={<Feed/>} />
          <Route path="/top-users" element={<TopUsers/>} />
          <Route path="/trending-posts" element={<TrendingPosts/>} />
        </Routes></div></Router>
  );
}
export default App;
