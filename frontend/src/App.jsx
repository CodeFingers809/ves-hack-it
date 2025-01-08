import Coming from "./Pages/ComingSoon/Coming";
import Faq from "./Pages/Faq";
import Landing from "./Pages/Landing/Landing";
import Prizes from "./Pages/Prizes";
import Sponsors from "./Pages/Sponsors";
import Timeline from "./Pages/Timeline/Timeline";
import Tracks from "./Pages/Tracks/Tracks";
import Navbar from "./Pages/Landing/Navbar";

function App() {
  return (
    // <Coming />
    <>
      <Navbar />
      <Landing />
      <Tracks />
      <Prizes />
      {/* <Timeline /> */}
      <Sponsors />
      <Faq />
    </>
  );
}

export default App;
