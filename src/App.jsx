import { Phone, Tablet, Laptop, Monitor } from "lucide-react";
import  useMediaQuery  from "./hooks/useMedia";
import './App.css'
export default function App() {
  const isSmallDevice = useMediaQuery("only screen and (max-width: 768px)");
  const isMediumDevice = useMediaQuery("only screen and (min-width: 769px) and (max-width: 992px)");
  const isLargeDevice = useMediaQuery("only screen and (min-width: 993px) and (max-width: 1200px)");
  const isExtraLargeDevice = useMediaQuery("only screen and (min-width: 1201px)");

  return (
    <section>
      <h1>Custom useMediaQuery</h1>
      Resize your browser to see changes
      <article>
        <figure className={isSmallDevice ? "active" : ""}>
          <Phone />
          <figcaption>Small</figcaption>
        </figure>

        <figure className={isMediumDevice ? "active" : ""}>
          <Tablet />
          <figcaption>Medium</figcaption>
        </figure>

        <figure className={isLargeDevice ? "active" : ""}>
          <Laptop />
          <figcaption>Large</figcaption>
        </figure>

        <figure className={isExtraLargeDevice ? "active" : ""}>
          <Monitor />
          <figcaption>Extra Large</figcaption>
        </figure>
      </article>
    </section>
  );
}
