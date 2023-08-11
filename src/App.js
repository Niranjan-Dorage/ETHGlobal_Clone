import './App.css';
import Cardplatform from './components/cardplatform';
import Middlebody from './components/midbody';
import Navbar from './components/navbar';
import Cards from './components/cards';
import Impactcards from './components/impactcards';

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Middlebody />
        <center>

          <div className="midnotbold" id='events'>EVENTS</div>
          <div className="midbold" id='upcoming'>Upcoming
            Hackathons & Summits</div>
        </center>
        <div className="cards">
          <Cards cardname="BingoHack" date="AUG 4, 2023  ➤
                    AUG 18, 2023"/>
          <Cards cardname="Hack" date="AUG 4, 2023  ➤
                    AUG 18, 2023"/>
          <Cards cardname="Shark" date="AUG 4, 2023  ➤
                    AUG 18, 2023"/>
          <Cards cardname="BingoHack" date="AUG 4, 2023  ➤
                    AUG 18, 2023"/>
          <Cards cardname="Hack" date="AUG 4, 2023  ➤
                    AUG 18, 2023"/>
          <Cards cardname="Shark" date="AUG 4, 2023  ➤
                    AUG 18, 2023"/>
        </div>
        <Cardplatform />
        <center>
          <div className="midnotbold" id='events'>COMMUNITY</div>
          <div className="midbold" id='upcoming'>
            Our impact
            over the years</div>

        </center>
        <center>
          <Impactcards />
        </center>

      </div>
    </>
  );
};

export default App;
