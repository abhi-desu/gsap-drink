import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, SplitText);
const App = () => {
  return <div className="text-3xl text-indigo-600">App</div>;
};

export default App;
