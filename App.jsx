import './App.css';
import ExpoCard from './ExpoCard';

import chanelImg from './assets/chanelImg.png';
import versaceImg from './assets/versaceImg.png';
import diorImg from './assets/diorImg.png';
import gucciImg from './assets/gucciImg.png';
import balenciagaImg from './assets/balenciagaImg.png';
import valentinoImg from './assets/valentinoImg.png';
import pradaImg from './assets/pradaImg.png';
import saintlaurentImg from './assets/saintlaurentImg.png';
import mcqueenImg from './assets/mcqueenImg.png';
import givenchyImg from './assets/givenchyImg.png';

const expoEvents = [
  {
    id: 1,
    designer: "Chanel",
    event: "Haute Couture Spring Preview",
    category: "Haute Couture",
    image: chanelImg,
  },
  {
    id: 2,
    designer: "Versace",
    event: "Bold Color Runway Show",
    category: "Ready-to-Wear",
    image: versaceImg,
  },
  {
    id: 3,
    designer: "Dior",
    event: "New Look Revival",
    category: "Haute Couture",
    image: diorImg,
  },
  {
    id: 4,
    designer: "Gucci",
    event: "Maximalist Summer",
    category: "Ready-to-Wear",
    image: gucciImg,
  },
  {
    id: 5,
    designer: "Balenciaga",
    event: "Avant-Garde Forms",
    category: "Avant-Garde",
    image: balenciagaImg,
  },
  {
    id: 6,
    designer: "Valentino",
    event: "Rosso Valentino",
    category: "Haute Couture",
    image: valentinoImg,
  },
  {
    id: 7,
    designer: "Prada",
    event: "Intellectual Minimalism",
    category: "Ready-to-Wear",
    image: pradaImg,
  },
  {
    id: 8,
    designer: "Saint Laurent",
    event: "Parisian Edge",
    category: "Ready-to-Wear",
    image: saintlaurentImg,
  },
  {
    id: 9,
    designer: "McQueen",
    event: "Dark Romanticism",
    category: "Avant-Garde",
    image: mcqueenImg,
  },
  {
    id: 10,
    designer: "Givenchy",
    event: "Couture Architecture",
    category: "Haute Couture",
    image: givenchyImg,
  },
];

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>✦ Luxe Fashion Expo 2025</h1>
        <p>Designer showcases, runway shows & exclusive previews</p>
      </header>

      <main className="card-grid">

        {expoEvents.map((event) => (
          <ExpoCard key={event.id} {...event} />
        ))}
      </main>
    </div>
  );
}

export default App;