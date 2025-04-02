import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import TopUsers from "./pages/TopUsers";
import TrendingPosts from "./pages/TrendingPosts";
import Feed from "./pages/Feed";
function App() {
  return (
    <Router>
      <div className="container">
        <h1>social media analytic</h1>
        <nav>
          <a href="/">feed</a>
          <a href="/top-users">top users</a>
          <a href="/trending-posts">trending posts</a>
        </nav>
        <Routes>
          <Route path="/" element={<Feed/>} />
          <Route path="/top-users" element={<TopUsers/>} />
          <Route path="/trending-posts" element={<TrendingPosts/>} />
        </Routes></div></Router>
  );
}
export default App;
