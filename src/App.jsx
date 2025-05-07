import "./App.css";
import { Otro } from "./components/Otro";
import { useCatFat } from "./hooks/useCatFact";
import { useCatImage } from "./hooks/useCatImage";

const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";

export function App() {
  const { fact, refreshFact } = useCatFat();
  const { imageUrl } = useCatImage({ fact });

  const handleClick = async () => {
    refreshFact();
  };

  return (
    <main>
      <h1>App de gatitos</h1>
      <button className="futuristic-button" onClick={handleClick}>
        Get new fact
      </button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt="Image of cats" />}
      <Otro/>
    </main>
  );
}
