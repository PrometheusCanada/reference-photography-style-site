/* Field & Signal / reference fidelity: content modules use the supplied card geometry—dominant illustration field, hard-edged contrasting label block, uppercase cream type. Navigation remains separate by request. */
import { useState } from "react";
import { ArrowRight, ChevronDown, Heart, Menu, Search, ShoppingBasket, UserRound } from "lucide-react";

const storage = {
  pepper: "/manus-storage/bell-pepper-low-poly_8c2dedc0.png",
  chili: "/manus-storage/hatch-chili-low-poly_ed0c4b68.png",
  cabbage: "/manus-storage/purple-cabbage-low-poly_a89f821a.png",
  bok: "/manus-storage/bok-choy-low-poly_b2d5980e.png",
};

const produce = [
  { name: "Bell Pepper", tag: "Sweet + crisp", image: storage.pepper, field: "cream", band: "red", price: "$3.20" },
  { name: "Hatch Chili Pepper", tag: "Bright heat", image: storage.chili, field: "yellow", band: "green", price: "$4.80" },
  { name: "Purple Cabbage", tag: "Crunchy + vivid", image: storage.cabbage, field: "cream", band: "plum", price: "$2.90" },
  { name: "Baby Bok Choy", tag: "Tender greens", image: storage.bok, field: "yellow", band: "green", price: "$3.60" },
];

const categories = [
  { name: "Fruit + veg", note: "Colour for the counter", image: storage.bok, field: "green", band: "cream" },
  { name: "Pantry", note: "Good things in reserve", image: storage.cabbage, field: "yellow", band: "red" },
  { name: "Bakery", note: "Baked close to home", image: storage.pepper, field: "cream", band: "green" },
  { name: "Ready meals", note: "Dinner, already thought through", image: storage.chili, field: "red", band: "yellow" },
];

const recipes = [
  { name: "Pepper + greens tray bake", detail: "4 ingredients · 25 min", image: storage.pepper, field: "yellow", band: "green" },
  { name: "Chili crunch noodles", detail: "6 ingredients · 15 min", image: storage.chili, field: "cream", band: "red" },
  { name: "Cabbage, citrus + herbs", detail: "5 ingredients · 10 min", image: storage.cabbage, field: "green", band: "plum" },
];

function SplitCard({ item, compact = false }: { item: any; compact?: boolean }) {
  return (
    <article className={`split-card ${compact ? "split-card--compact" : ""}`}>
      <div className={`split-card__field field-${item.field}`}>
        <img src={item.image} alt="" />
        <button className="card-heart" aria-label={`Save ${item.name}`}><Heart size={16} /></button>
      </div>
      <div className={`split-card__band band-${item.band}`}>
        <div>
          <h3>{item.name}</h3>
          <p>{item.tag || item.note || item.detail}</p>
        </div>
        {item.price ? <strong>{item.price}</strong> : <ArrowRight size={18} />}
      </div>
    </article>
  );
}

export default function Home() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const filtered = produce.filter((item) => filter === "All" || item.tag.toLowerCase().includes(filter.toLowerCase()) || item.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="zero-app">
      <header className="site-nav">
        <div className="nav-inner">
          <button className="nav-menu" aria-label="Open menu"><Menu size={19} /><span>MENU</span></button>
          <a className="wordmark" href="#top"><span className="wordmark-mark">Z</span><span>ZERO</span></a>
          <div className="search-box"><Search size={16} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search the whole range" aria-label="Search products" /></div>
          <button className="nav-user"><UserRound size={18} /><span>Sign in</span></button>
          <button className="basket"><ShoppingBasket size={17} /><span>$0.00</span></button>
        </div>
        <div className="nav-sub"><span>Set address <em>for delivery ETA</em></span><span><b>Z+</b> Link your <strong>ZERO Rewards</strong> card</span></div>
        <div className="nav-tabs"><button className="active">🛒 Groceries <ChevronDown size={14} /></button><button>🫘 Bulk + Bundles</button><button>🍲 Meal Time</button><button>✦ Specials</button></div>
      </header>

      <main id="top">
        <section className="hero-content">
          <div className="hero-copy">
            <span className="eyebrow">GROCERY DELIVERY, PRICED HONESTLY</span>
            <h1>Good food.<br /><i>Strong colour.</i></h1>
            <p>Fresh produce, pantry staples, and dinner-ready ideas—arranged like a bright shelf and priced without the mystery markup.</p>
            <div className="hero-actions"><a className="button button-dark" href="#picks">Shop the real price <ArrowRight size={16} /></a><a className="text-link" href="#model">See how ZERO works</a></div>
            <div className="hero-stats"><span><b>$0.00</b><small>FOOD PROFIT</small></span><span><b>60 min</b><small>DELIVERY WINDOWS</small></span><span><b>4.8/5</b><small>MEMBER RATING</small></span></div>
          </div>
          <div className="hero-card"><div className="hero-card__left"><div className="hero-card__label label-red">BELL<br />PEPPER</div><div className="hero-card__art field-cream"><img src={storage.pepper} alt="Low-poly red bell peppers" /></div></div><div className="hero-card__right"><div className="hero-card__art field-yellow"><img src={storage.chili} alt="Low-poly hatch chili peppers" /></div><div className="hero-card__label label-green">HATCH CHILI<br />PEPPER</div></div></div>
        </section>

        <section className="value-strip"><div><b>Free delivery over $60</b><span>Or included with membership</span></div><div><b>Same-day windows</b><span>Book a 60-minute slot</span></div><div><b>Plant-forward assortment</b><span>Curated, not endless</span></div><div><b>Every price explained</b><span>See what you’d pay elsewhere</span></div></section>

        <section className="section" id="picks"><div className="section-head"><div><span className="eyebrow">THIS WEEK’S PRODUCE</span><h2>Pick your <i>colour.</i></h2></div><p>Every card follows the same visual language as the reference: big field, sharp band, no visual clutter.</p></div><div className="filter-row">{["All", "Sweet", "Bright", "Crunchy", "Tender"].map((value) => <button key={value} onClick={() => setFilter(value)} className={filter === value ? "selected" : ""}>{value}</button>)}</div><div className="card-grid">{filtered.map((item) => <SplitCard key={item.name} item={item} />)}</div></section>

        <section className="section section-cream"><div className="section-head"><div><span className="eyebrow">SHOP THE SHELF</span><h2>Find the <i>good stuff.</i></h2></div></div><div className="card-grid card-grid--four">{categories.map((item) => <SplitCard key={item.name} item={item} compact />)}</div></section>

        <section className="section section-green" id="model"><div className="section-head section-head-light"><div><span className="eyebrow">THE ZERO MODEL</span><h2>Nothing hidden.<br /><i>Everything visible.</i></h2></div><p>Like the reference card, the content is split into a large confident field and a smaller signal. The result is easy to scan and hard to misread.</p></div><div className="model-grid"><div className="model-note model-note--red"><span>01</span><b>Real cost, shown at checkout.</b><p>See the honest price before the basket leaves your hand.</p></div><div className="model-note model-note--yellow"><span>02</span><b>Curated, not cluttered.</b><p>A tighter range means better choices, not fewer good ones.</p></div><div className="model-note model-note--cream"><span>03</span><b>Delivery windows that hold.</b><p>Pick a slot. We’ll meet you there.</p></div></div></section>

        <section className="section"><div className="section-head"><div><span className="eyebrow">RECIPES ARE A COMMERCE ENGINE</span><h2>Start with <i>dinner.</i></h2></div><a className="text-link" href="#recipes">See all recipes <ArrowRight size={15} /></a></div><div id="recipes" className="card-grid card-grid--three">{recipes.map((item) => <SplitCard key={item.name} item={item} compact />)}</div></section>

        <section className="section section-plum"><div className="split-callout"><div><span className="eyebrow">MEMBERSHIP, EXPLAINED</span><h2>You pay for membership.<br /><i>Not grocery markup.</i></h2><p>Access included delivery, meal planning, prepared food, and a running view of the value you create.</p><a className="button button-light" href="#join">Explore membership <ArrowRight size={16} /></a></div><div className="mini-card"><div className="mini-card__art field-yellow"><img src={storage.chili} alt="" /></div><div className="mini-card__band band-green"><b>$313.26</b><span>estimated savings to date</span></div></div></div></section>

        <section className="section faq-section"><div><span className="eyebrow">ZERO SECRETS</span><h2>Questions deserve<br /><i>straight answers.</i></h2></div><div className="faq-list">{["How does ZERO make money?", "Why is there no conventional meat?", "Is everything cheaper?"].map((q, i) => <div className="faq-item" key={q}><button onClick={() => setOpenFaq(openFaq === i ? null : i)}><span>{q}</span><span>{openFaq === i ? "−" : "+"}</span></button>{openFaq === i && <p>We keep the answer simple and show the important part directly in your basket. No mystery math, no dark patterns.</p>}</div>)}</div></section>
      </main>

      <footer className="footer" id="join"><div className="footer-top"><div><a className="wordmark wordmark--footer" href="#top"><span className="wordmark-mark">Z</span><span>ZERO</span></a><p>Premium food. Zero markup.<br />Built around what you actually eat.</p></div><div><b>SHOP</b><a href="#picks">Produce</a><a href="#picks">Pantry</a><a href="#recipes">Recipes</a></div><div><b>THE MODEL</b><a href="#model">Our prices</a><a href="#model">Delivery</a><a href="#join">Membership</a></div></div><div className="footer-bottom">© 2026 ZERO Foods <span>Good food, fair prices.</span></div></footer>
    </div>
  );
}
