import Accordion from "./components/accordion/Accordion";
import SearchableList from "./components/searchableList/searchableList";
import savannaImg from "./assets/african-savanna.jpg";
import amazonImg from "./assets/amazon-river.jpg";
import caribbeanImg from "./assets/caribbean-beach.jpg";
import desertImg from "./assets/desert-dunes.jpg";
import forestImg from "./assets/forest-waterfall.jpg";
import Place from "./place";

const PLACES = [
  {
    id: "african-savanna",
    image: savannaImg,
    title: "African Savanna",
    description: "Experience the beauty of nature.",
  },
  {
    id: "amazon-river",
    image: amazonImg,
    title: "Amazon River",
    description: "Get to know the largest river in the world.",
  },
  {
    id: "caribbean-beach",
    image: caribbeanImg,
    title: "Caribbean Beach",
    description: "Enjoy the sun and the beach.",
  },
  {
    id: "desert-dunes",
    image: desertImg,
    title: "Desert Dunes",
    description: "Discover the desert life.",
  },
  {
    id: "forest-waterfall",
    image: forestImg,
    title: "Forest Waterfall",
    description: "Listen to the sound of the water.",
  },
];

function App() {
  return (
    <main>
      <section>
        <h2>Why travel with us?</h2>
        <Accordion className="accordion">
          <Accordion.item id="experience" className="accordion-item">
            <Accordion.title className="accordion-item-title">
              We got 20 years of experience
            </Accordion.title>
            <Accordion.content className="accordion-item-content">
              <article>
                <p>You can't wrong with us</p>
                <p>
                  We are in the business of planning highly individualize
                  vacation trips for more than 20 years
                </p>
              </article>
            </Accordion.content>
          </Accordion.item>

          <Accordion.item id="local-guides" className="accordion-item">
            <Accordion.title className="accordion-item-title">
              We are working with local guides
            </Accordion.title>
            <Accordion.content className="accordion-item-content">
              <article>
                <p>We are not doing this along from our office</p>
                <p>
                  Instead, we are working with local guides for pleasant and
                  save vacations
                </p>
              </article>
            </Accordion.content>
          </Accordion.item>
        </Accordion>
      </section>

      <section>
        <SearchableList items={PLACES} itemKeyFun={(item) => item.id}>
          {(item) => <Place item={item} />}
        </SearchableList>

        <SearchableList
          items={["item 1", "item 2"]}
          itemKeyFun={(item) => item}
        >
          {(item) => item}
        </SearchableList>
      </section>
    </main>
  );
}

export default App;
