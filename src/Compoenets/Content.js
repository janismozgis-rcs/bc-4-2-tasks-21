import { Route, Routes } from "react-router-dom";
import Article from "../Pages/Article";
import Landing from "../Pages/Landing";
import Tags from "../Pages/Tags";

function Content() {
    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/article" element={<Article />} />
                <Route path="/tags" element={<Tags />} />
            </Routes>
        </div>
    )
}
export default Content;