import Headline from "./components/headline/Headline";
import Method from "./components/method/Method";
import Results from "./components/results/Results";
import Services from "./components/services/Services";

export default function Home() {
  return (
    <main>
      <Headline />
      <Method />
      <Services />
      <Results />
    </main>
  );
}
