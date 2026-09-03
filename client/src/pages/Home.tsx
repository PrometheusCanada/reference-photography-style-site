/* Field & Signal / restoration pass: preserve the original ZERO structure, left rail, horizontal option rails, and content copy. Apply the user-approved split-panel visual language only to content modules—not navigation. */
import { useMemo, useState } from "react";
import {
  Apple, ArrowRight, BookOpen, Carrot, ChevronDown, CircleHelp, Cookie, CupSoda, House,
  Leaf, Menu, Palette, Recycle, Search, ShoppingBasket, Snowflake, Sparkles, Soup, Star,
  Utensils, UserRound, Wheat, X,
} from "lucide-react";

const assets = {
  pepper: "/manus-storage/bell-pepper-low-poly_8c2dedc0.png",
  chili: "/manus-storage/hatch-chili-low-poly_ed0c4b68.png",
  cabbage: "/manus-storage/purple-cabbage-low-poly_a89f821a.png",
  bok: "/manus-storage/bok-choy-low-poly_b2d5980e.png",
  radish: "/manus-storage/scarlet-globe-radish-low-poly_b676ef9a.png",
  daikon: "/manus-storage/golden-daikon-low-poly_b83eb6de.png",
  tomato: "/manus-storage/tomato-low-poly_446fde67.png",
  strawberry: "/manus-storage/strawberry-low-poly_98426095.png",
  carrot: "/manus-storage/carrot-low-poly_2647455f.png",
  apple: "/manus-storage/apple-low-poly_d181ebb8.png",
  pear: "/manus-storage/pear-low-poly_cdb824db.png",
  banana: "/manus-storage/banana-low-poly_fdc6a7f2.png",
  orange: "/manus-storage/orange-low-poly_9ae39378.png",
  lemon: "/manus-storage/lemon-low-poly_78b1e007.png",
  grapes: "/manus-storage/grapes-low-poly_6bb7028c.png",
  lime: "/manus-storage/lime-low-poly_e3c41cbb.png",
  grapefruit: "/manus-storage/grapefruit-low-poly_c89a277b.png",
  tangerine: "/manus-storage/tangerine-low-poly_6f63f2ac.png",
  nectarine: "/manus-storage/nectarine-low-poly_39553aa4.png",
  apricot: "/manus-storage/apricot-low-poly_4de3950b.png",
  guava: "/manus-storage/guava-low-poly_ecdb5179.png",
  passionFruit: "/manus-storage/passion-fruit-low-poly_31f2d147.png",
  dragonFruit: "/manus-storage/dragon-fruit-low-poly_212442cd.png",
  persimmon: "/manus-storage/persimmon-low-poly_ff3870db.png",
  coconut: "/manus-storage/coconut-low-poly_505c210b.png",
  jackfruit: "/manus-storage/jackfruit-low-poly_6f4aad93.png",
  lychee: "/manus-storage/lychee-low-poly_87b7b58f.png",
  longan: "/manus-storage/longan-low-poly_1f676216.png",
  rambutan: "/manus-storage/rambutan-low-poly_ec23442e.png",
  mangosteen: "/manus-storage/mangosteen-low-poly_8caee9a1.png",
  durian: "/manus-storage/durian-low-poly_b35a1187.png",
  kumquat: "/manus-storage/kumquat-low-poly_6c548989.png",
  quince: "/manus-storage/quince-low-poly_1ef246da.png",
  mulberry: "/manus-storage/mulberry-low-poly_ea4ec293.png",
  gooseberry: "/manus-storage/gooseberry-low-poly_bdb7b79a.png",
  boysenberry: "/manus-storage/boysenberry-low-poly_a8d054b8.png",
  breadfruit: "/manus-storage/breadfruit-low-poly_bd1d4f91.png",
  plantain: "/manus-storage/plantain-low-poly_5505445a.png",
  cherimoya: "/manus-storage/cherimoya-low-poly_2d77f097.png",
  sourdough: "/manus-storage/sourdough-bread-low-poly_7e291cbb.png",
  baguette: "/manus-storage/baguette-low-poly_3687e2bb.png",
  pita: "/manus-storage/pita-low-poly_dbcb3d94.png",
  tortillas: "/manus-storage/tortillas-low-poly_e3850512.png",
  rolledOats: "/manus-storage/rolled-oats-low-poly_444ea159.png",
  brownRice: "/manus-storage/brown-rice-low-poly_67c1e09b.png",
  quinoa: "/manus-storage/quinoa-low-poly_2080e3bd.png",
  couscous: "/manus-storage/couscous-low-poly_129d2c4b.png",
  lentils: "/manus-storage/lentils-low-poly_c28bb9cb.png",
  chickpeas: "/manus-storage/chickpeas-low-poly_91fd663f.png",
  blackBeans: "/manus-storage/black-beans-low-poly_588ae4df.png",
  tofu: "/manus-storage/tofu-low-poly_8ce133db.png",
  tempeh: "/manus-storage/tempeh-low-poly_09945483.png",
  oatMilk: "/manus-storage/oat-milk-low-poly_fa38de20.png",
  almondMilk: "/manus-storage/almond-milk-low-poly_0c022781.png",
  soyMilk: "/manus-storage/soy-milk-low-poly_885e4718.png",
  coconutYogurt: "/manus-storage/coconut-yogurt-low-poly_3035f7bf.png",
  oliveOil: "/manus-storage/olive-oil-low-poly_a5a1427b.png",
  tahini: "/manus-storage/tahini-low-poly_0c4242f0.png",
  peanutButter: "/manus-storage/peanut-butter-low-poly_2898a2b9.png",
  almonds: "/manus-storage/almonds-low-poly_28051945.png",
  walnuts: "/manus-storage/walnuts-low-poly_691d6f46.png",
  pumpkinSeeds: "/manus-storage/pumpkin-seeds-low-poly_aa93ac9a.png",
  sunflowerSeeds: "/manus-storage/sunflower-seeds-low-poly_fe0608e8.png",
  mushrooms: "/manus-storage/mushrooms-low-poly_e160e4f1.png",
  beetroot: "/manus-storage/beetroot-low-poly_55ee04e8.png",
  broccoli: "/manus-storage/broccoli-low-poly_e6106cf1.png",
  cauliflower: "/manus-storage/cauliflower-low-poly_f31fdef8.png",
  cucumber: "/manus-storage/cucumber-low-poly_f4c66e87.png",
  zucchini: "/manus-storage/zucchini-low-poly_9fe810fd.png",
};

type Produce = { name: string; tag: string; image: string; field: string; band: string; price: string; fact: string; recipe: string; category?: string };
const makeFood = (name: string, image: string, category: string, field: string, band: string, price: string): Produce => ({ name, image, category, field, band, price, tag: category, fact: `A ${category.toLowerCase()} pick for a brighter basket.`, recipe: `${name} makes dinner feel easy.` });
const produce: Produce[] = [
  { name: "Bell Pepper", tag: "Sweet + crisp", image: assets.pepper, field: "cream", band: "red", price: "$3.20", fact: "Bright, juicy, and built for a hot pan.", recipe: "Roasted pepper, beans + herbs." },
  { name: "Hatch Chili Pepper", tag: "Bright heat", image: assets.chili, field: "yellow", band: "green", price: "$4.80", fact: "A clean hit of heat with a grassy finish.", recipe: "Chili crunch noodles." },
  { name: "Purple Cabbage", tag: "Crunchy + vivid", image: assets.cabbage, field: "cream", band: "plum", price: "$2.90", fact: "The colour stays bold from slaw to stir-fry.", recipe: "Cabbage, citrus + herbs." },
  { name: "Baby Bok Choy", tag: "Tender greens", image: assets.bok, field: "yellow", band: "green", price: "$3.60", fact: "Tender stems and leaves, ready for sesame oil.", recipe: "Ginger bok choy bowl." },
  { name: "Scarlet Globe Radish", tag: "Peppery crunch", image: assets.radish, field: "plum", band: "red", price: "$2.40", fact: "A crisp little spark for any plate.", recipe: "Radish toast with greens." },
  { name: "Golden Daikon", tag: "Sweet root", image: assets.daikon, field: "green", band: "yellow", price: "$3.10", fact: "Mild, golden, and brilliant roasted.", recipe: "Golden daikon tray bake." },
  { name: "Vine Tomato", tag: "Juicy + ripe", image: assets.tomato, field: "cream", band: "red", price: "$4.10", fact: "The first thing to slice when bread is warm.", recipe: "Tomato + basil bruschetta." },
  { name: "Strawberry", tag: "Sweet + bright", image: assets.strawberry, field: "yellow", band: "plum", price: "$5.20", fact: "A bright, fragrant finish to breakfast.", recipe: "Strawberry oat bowl." },
  { name: "Carrot", tag: "Root vegetable", image: assets.carrot, field: "cream", band: "green", price: "$2.10", fact: "Good raw, better with a little heat.", recipe: "Honey-roasted carrots." },
 ];

const fullCatalog: Produce[] = [
  ...produce.map((item) => ({ ...item, category: ["Strawberry", "Vine Tomato"].includes(item.name) ? "Fruit" : "Vegetables" })),
  makeFood("Apple", assets.apple, "Fruit", "cream", "red", "$2.80"), makeFood("Pear", assets.pear, "Fruit", "green", "yellow", "$3.10"), makeFood("Banana", assets.banana, "Fruit", "yellow", "green", "$2.40"), makeFood("Orange", assets.orange, "Fruit", "cream", "red", "$3.20"), makeFood("Lemon", assets.lemon, "Fruit", "yellow", "green", "$1.90"),
  makeFood("Grapes", assets.grapes, "Fruit", "plum", "cream", "$4.30"), makeFood("Lime", assets.lime, "Fruit", "green", "yellow", "$1.60"), makeFood("Grapefruit", assets.grapefruit, "Fruit", "yellow", "plum", "$3.80"), makeFood("Tangerine", assets.tangerine, "Fruit", "red", "yellow", "$3.60"), makeFood("Nectarine", assets.nectarine, "Fruit", "cream", "red", "$4.20"),
  makeFood("Apricot", assets.apricot, "Fruit", "yellow", "red", "$4.10"), makeFood("Guava", assets.guava, "Fruit", "green", "plum", "$4.90"), makeFood("Passion Fruit", assets.passionFruit, "Fruit", "plum", "yellow", "$5.40"), makeFood("Dragon Fruit", assets.dragonFruit, "Fruit", "red", "green", "$5.90"), makeFood("Persimmon", assets.persimmon, "Fruit", "yellow", "red", "$4.50"),
  makeFood("Coconut", assets.coconut, "Fruit", "cream", "green", "$4.80"), makeFood("Jackfruit", assets.jackfruit, "Fruit", "green", "yellow", "$6.20"), makeFood("Lychee", assets.lychee, "Fruit", "red", "cream", "$5.20"), makeFood("Longan", assets.longan, "Fruit", "yellow", "green", "$4.60"), makeFood("Rambutan", assets.rambutan, "Fruit", "red", "yellow", "$5.60"),
  makeFood("Mangosteen", assets.mangosteen, "Fruit", "plum", "cream", "$5.90"), makeFood("Durian", assets.durian, "Fruit", "green", "yellow", "$8.40"), makeFood("Kumquat", assets.kumquat, "Fruit", "yellow", "green", "$3.90"), makeFood("Quince", assets.quince, "Fruit", "cream", "red", "$4.00"), makeFood("Mulberry", assets.mulberry, "Fruit", "plum", "red", "$5.10"),
  makeFood("Gooseberry", assets.gooseberry, "Fruit", "green", "yellow", "$4.70"), makeFood("Boysenberry", assets.boysenberry, "Fruit", "plum", "cream", "$5.40"), makeFood("Breadfruit", assets.breadfruit, "Fruit", "green", "red", "$5.80"), makeFood("Plantain", assets.plantain, "Fruit", "yellow", "green", "$3.40"), makeFood("Cherimoya", assets.cherimoya, "Fruit", "cream", "plum", "$6.10"),
  makeFood("Sourdough Bread", assets.sourdough, "Staples", "cream", "red", "$6.50"), makeFood("Baguette", assets.baguette, "Staples", "yellow", "green", "$4.20"), makeFood("Pita", assets.pita, "Staples", "cream", "plum", "$3.90"), makeFood("Corn Tortillas", assets.tortillas, "Staples", "yellow", "red", "$3.40"), makeFood("Rolled Oats", assets.rolledOats, "Staples", "cream", "green", "$4.60"),
  makeFood("Brown Rice", assets.brownRice, "Staples", "yellow", "red", "$5.20"), makeFood("Quinoa", assets.quinoa, "Staples", "cream", "plum", "$7.20"), makeFood("Couscous", assets.couscous, "Staples", "yellow", "green", "$4.40"), makeFood("Lentils", assets.lentils, "Staples", "red", "cream", "$3.80"), makeFood("Chickpeas", assets.chickpeas, "Staples", "yellow", "red", "$3.90"),
  makeFood("Black Beans", assets.blackBeans, "Staples", "plum", "yellow", "$3.70"), makeFood("Tofu", assets.tofu, "Staples", "cream", "green", "$4.20"), makeFood("Tempeh", assets.tempeh, "Staples", "yellow", "red", "$5.80"), makeFood("Oat Milk", assets.oatMilk, "Drinks", "cream", "green", "$4.90"), makeFood("Almond Milk", assets.almondMilk, "Drinks", "red", "yellow", "$4.70"),
  makeFood("Soy Milk", assets.soyMilk, "Drinks", "green", "cream", "$4.60"), makeFood("Coconut Yogurt", assets.coconutYogurt, "Staples", "plum", "green", "$5.40"), makeFood("Olive Oil", assets.oliveOil, "Pantry", "yellow", "green", "$9.80"), makeFood("Tahini", assets.tahini, "Pantry", "cream", "red", "$6.20"), makeFood("Peanut Butter", assets.peanutButter, "Pantry", "yellow", "plum", "$5.90"),
  makeFood("Almonds", assets.almonds, "Pantry", "cream", "green", "$7.40"), makeFood("Walnuts", assets.walnuts, "Pantry", "red", "yellow", "$8.20"), makeFood("Pumpkin Seeds", assets.pumpkinSeeds, "Pantry", "green", "cream", "$6.80"), makeFood("Sunflower Seeds", assets.sunflowerSeeds, "Pantry", "yellow", "red", "$4.90"), makeFood("Mushrooms", assets.mushrooms, "Vegetables", "cream", "plum", "$4.10"),
  makeFood("Beetroot", assets.beetroot, "Vegetables", "plum", "red", "$3.50"), makeFood("Broccoli", assets.broccoli, "Vegetables", "green", "yellow", "$3.90"), makeFood("Cauliflower", assets.cauliflower, "Vegetables", "cream", "green", "$4.20"), makeFood("Cucumber", assets.cucumber, "Vegetables", "green", "cream", "$2.80"), makeFood("Zucchini", assets.zucchini, "Vegetables", "yellow", "green", "$3.10"),
];

const categories = [
  ["Popular", Star, "yellow"], ["Fresh produce", Leaf, "green"], ["Easy meals", Soup, "red"], ["High protein", Wheat, "cream"],
  ["Dairy + alt-milk", CupSoda, "yellow"], ["ZERO Bakery", Wheat, "red"], ["Pantry + bulk", Apple, "plum"], ["Breakfast", Soup, "yellow"],
  ["Deli", Utensils, "red"], ["Snacks", Cookie, "yellow"], ["Drinks", CupSoda, "cream"], ["Freezer", Snowflake, "green"],
  ["Organic", Leaf, "green"], ["Gluten free", Wheat, "yellow"], ["Personal care", Sparkles, "plum"], ["Household", Sparkles, "cream"],
  ["Pet", Apple, "yellow"], ["Baby", Star, "cream"], ["ZERO Waste", Recycle, "red"], ["Gifting", Sparkles, "plum"],
] as const;

const tabs = [["Groceries", ShoppingBasket], ["Bulk + Bundles", Wheat], ["Meal Time", Soup], ["Specials", Sparkles]] as const;
const railItems = [
  ["Home", House, "#top"], ["Brand guide", Palette, "#brand-guide"], ["Shop all", ShoppingBasket, "#shop"], ["Fruit + veg", Apple, "#produce"],
  ["Mushrooms", Soup, "#shop-cats"], ["Root vegetables", Carrot, "#shop-cats"], ["Leafy greens", Leaf, "#shop-cats"], ["Cruciferous", Leaf, "#shop-cats"],
  ["Alliums", Leaf, "#shop-cats"], ["Berries", Apple, "#shop-cats"], ["Deli + dips", Utensils, "#shop-cats"], ["Pantry + bulk", Wheat, "#shop-cats"],
  ["Breakfast", Soup, "#shop-cats"], ["Snacks", Cookie, "#shop-cats"], ["Drinks", CupSoda, "#shop-cats"], ["Freezer", Snowflake, "#shop-cats"],
  ["Organic", Leaf, "#shop-cats"], ["ZERO specials", Sparkles, "#shop"], ["Meal kits", Utensils, "#recipes"], ["Recipes", BookOpen, "#recipes"], ["ZERO Waste", Recycle, "#shop-cats"],
] as const;

const brandColors = [
  ["Butter Cream", "#FFF0C9"], ["Pepper Red", "#C7442E"], ["Hatch Yellow", "#F1CB61"], ["Hatch Green", "#3E8138"],
  ["Pepper Dark", "#8F231D"], ["Leaf Green", "#32AA57"], ["Radish Plum", "#8B3D62"], ["Label Cream", "#F6E7B7"],
];

function SplitCard({ item, compact = false }: { item: Partial<Produce> & { note?: string }; compact?: boolean }) {
  return <article className={`split-card ${compact ? "split-card--compact" : ""}`}>
    <div className={`split-card__field field-${item.field || "cream"}`}>
      <img src={item.image || assets.pepper} alt="" />
      <button className="card-heart" aria-label={`Save ${item.name}`}><Star size={14} /></button>
    </div>
    <div className={`split-card__band band-${item.band || "red"}`}>
      <div><h3>{item.name}</h3><p>{item.tag || item.note}</p></div>
      {item.price ? <strong>{item.price}</strong> : <ArrowRight size={17} />}
    </div>
  </article>;
}

function SideRail({ open, setOpen }: { open: boolean; setOpen: (value: boolean) => void }) {
  return <><aside className={`zero-side ${open ? "zero-open" : ""}`} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
    <div className="zero-side-inner">
      <div className="zero-brand"><span className="zero-brand-mark">Z</span><span className="zero-brand-name">ZERO Foods</span></div>
      <nav className="zero-nav" aria-label="Primary navigation">
        {railItems.map(([label, Icon, target], index) => <a className={`zero-nav-item ${index === 0 ? "zero-active" : ""}`} href={target} key={label}><Icon className="zero-nav-icon" size={19} /><span className="zero-nav-label">{label}</span></a>)}
      </nav>
      <div className="zero-profile"><span className="zero-avatar">Z+</span><span className="zero-profile-copy"><strong>ZERO member</strong><small>Good food, fair prices</small></span></div>
    </div>
  </aside><button className={`zero-backdrop ${open ? "zero-open" : ""}`} onClick={() => setOpen(false)} aria-label="Close navigation" /></>;
}

export default function Home() {
  const [railOpen, setRailOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All foods");
  const [faq, setFaq] = useState<number | null>(0);
  const filtered = useMemo(() => fullCatalog.filter((item) => {
    const searchMatch = `${item.name} ${item.tag} ${item.category}`.toLowerCase().includes(query.toLowerCase());
    const filterMatch = filter === "All foods" || item.category === filter;
    return searchMatch && filterMatch;
  }), [filter, query]);

  return <div className="zero-app"><SideRail open={railOpen} setOpen={setRailOpen} /><div className="zero-content">
    <header className="site-nav">
      <div className="nav-inner"><button className="nav-menu" onClick={() => setRailOpen(!railOpen)} aria-label="Toggle sidebar navigation"><Menu size={19} /><span>MENU</span></button><a className="wordmark" href="#top"><span className="wordmark-mark">Z</span><span>ZERO Foods</span></a><div className="search-box"><Search size={16} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search the whole range" aria-label="Search the whole range" /></div><button className="nav-user"><UserRound size={18} /><span>Sign in</span></button><button className="basket"><ShoppingBasket size={17} /><span>$0.00</span></button></div>
      <div className="nav-sub"><span>Set address <em>for delivery ETA</em></span><span><b>Z+</b> Link your <strong>ZERO Rewards</strong> card</span></div>
      <div className="nav-tabs">{tabs.map(([label, Icon], index) => <button className={index === 0 ? "active" : ""} key={label}><Icon size={15} />{label}{index === 0 && <ChevronDown size={14} />}</button>)}</div>
      <div className="category-rail">{categories.map(([label, Icon, color]) => <a href="#shop-cats" className="category-rail__item" key={label}><span className={`category-rail__icon field-${color}`}><Icon size={21} /></span><b>{label}</b></a>)}</div>
    </header>

    <main id="top">
      <section className="hero-content"><div className="hero-copy"><span className="eyebrow">GROCERY DELIVERY, PRICED HONESTLY</span><h1>Premium food.<br /><i>Zero markup.</i></h1><p>We cut the storefront, the excess and the hidden margin out of every basket—so what’s left is good food, an honest price, and a delivery window that actually holds.</p><div className="hero-actions"><a className="button button-dark" href="#shop">Shop the real price <ArrowRight size={16} /></a><a className="text-link" href="#how">See how ZERO works</a></div><div className="hero-stats"><span><b>$0.00</b><small>FOOD PROFIT</small></span><span><b>60 min</b><small>DELIVERY WINDOWS</small></span><span><b>24</b><small>ITEMS PICKED</small></span></div></div><div className="hero-card"><div className="hero-card__left"><div className="hero-card__label label-red">BELL<br />PEPPER</div><div className="hero-card__art field-cream"><img src={assets.pepper} alt="Low-poly bell peppers" /></div></div><div className="hero-card__right"><div className="hero-card__art field-yellow"><img src={assets.chili} alt="Low-poly hatch chili peppers" /></div><div className="hero-card__label label-green">HATCH CHILI<br />PEPPER</div></div></div></section>

      <section className="value-strip"><div><b>Free delivery over $60</b><span>Or included with membership</span></div><div><b>Same-day windows</b><span>Book a 60-minute slot</span></div><div><b>Plant-forward assortment</b><span>Curated, not endless</span></div><div><b>Every price explained</b><span>See what you’d pay elsewhere</span></div></section>

      <section className="section" id="produce"><div className="section-head"><div><span className="eyebrow">MEET YOUR PRODUCE</span><h2>Tap a character,<br /><i>learn what it does.</i></h2></div><p>Every ZERO character is real food. Tap one for its nutrients, a fun fact, and a recipe to try tonight.</p></div><div className="card-grid card-grid--three produce-grid">{produce.slice(0, 6).map((item) => <SplitCard key={item.name} item={item} />)}</div></section>

      <section className="section section-cream" id="shop-cats"><div className="section-head"><div><span className="eyebrow">SHOP BY CATEGORY</span><h2>Curated, not <i>cluttered.</i></h2></div><a className="text-link" href="#shop">View all groceries <ArrowRight size={15} /></a></div><div className="category-card-grid">{categories.slice(0, 12).map(([label, Icon, color]) => <a className={`category-card category-card--${color}`} href="#shop" key={label}><span className="category-card__art"><Icon size={35} /></span><span className="category-card__band">{label}</span></a>)}</div></section>

      <section className="section" id="shop"><div className="section-head"><div><span className="eyebrow">THE FULL GROCERY PICKER · {fullCatalog.length} PICKS</span><h2>Good food, <i>clear prices.</i></h2></div><p>One complete vegan range: fruit, vegetables, staples, pantry, and plant-based drinks. Use the tabs to move through the shelf without losing your place.</p></div><div className="picker-tabs" role="tablist" aria-label="Grocery departments">{["All foods", "Fruit", "Vegetables", "Staples", "Pantry", "Drinks"].map((value) => <button role="tab" aria-selected={filter === value} key={value} onClick={() => setFilter(value)} className={filter === value ? "selected" : ""}>{value}<span>{value === "All foods" ? fullCatalog.length : fullCatalog.filter((item) => item.category === value).length}</span></button>)}</div><div className="picker-meta"><span>Showing <b>{filtered.length}</b> of {fullCatalog.length}</span>{query && <span>Searching for “{query}”</span>}</div><div className="card-grid card-grid--picker">{filtered.map((item) => <SplitCard key={item.name} item={item} />)}</div><a className="cart-strip" href="#shop"><ShoppingBasket size={18} /><b>Your basket is ready when you are</b><span>Food profit: $0.00</span><ArrowRight size={17} /></a></section>

      <section className="section section-green" id="how"><div className="section-head section-head-light"><div><span className="eyebrow">THE ZERO MODEL</span><h2>Why ZERO’s prices<br /><i>stay fair.</i></h2></div><p>Traditional grocery stores are built around aisles, shelves, parking and checkout lanes. ZERO is built around inventory, picking, and delivery routes—so the savings show up in your basket, not our margin.</p></div><div className="model-grid"><div className="model-note model-note--red"><span>01</span><b>Join</b><p>Membership funds the system, not the food.</p></div><div className="model-note model-note--yellow"><span>02</span><b>Shop</b><p>See our cost beside the comparison, every time.</p></div><div className="model-note model-note--cream"><span>03</span><b>We deliver</b><p>Reliable windows. No checkout line.</p></div><div className="model-note model-note--plum"><span>04</span><b>Watch your savings</b><p>Every basket shows the math.</p></div></div></section>

      <section className="section" id="convenience"><div className="section-head"><div><span className="eyebrow">THE CONVENIENCE SPECTRUM</span><h2>Choose how much <i>work</i><br />ZERO does.</h2></div><p>Same quality food, different service level. Mix and match depending on the week you’re having.</p></div><div className="service-grid">{[["Whole", "You do the prep", assets.carrot, "green"], ["Prepped", "We chop the basics", assets.radish, "cream"], ["Ready to cook", "Portioned for a recipe", assets.pepper, "yellow"], ["Ready to eat", "ZERO Kitchen cooks", assets.chili, "red"]].map(([name, note, image, color]) => <article className="service-card" key={name}><div className={`service-card__art field-${color}`}><img src={image} alt="" /></div><div className="service-card__band band-green"><b>{name}</b><span>{note}</span></div></article>)}</div></section>

      <section className="section section-cream" id="recipes"><div className="section-head"><div><span className="eyebrow">RECIPES ARE A COMMERCE ENGINE</span><h2>Start with dinner.<br /><i>Not a blog post.</i></h2></div><p>Choose the prep level, see nutrition, and add a coherent basket in one tap.</p></div><div className="recipe-feature"><div className="recipe-feature__visual"><div className="recipe-feature__label label-red">HIGH-PROTEIN<br />TERIYAKI BOWL</div><div className="recipe-feature__art field-yellow"><img src={assets.chili} alt="Low-poly chili peppers" /></div></div><div className="recipe-feature__body"><span className="eyebrow">2 SERVINGS · 46G PROTEIN · 520 CAL</span><h3>Every recipe connects to the catalog.</h3><p>Start with dinner, then choose the exact amount of work you want ZERO to do.</p><div className="recipe-price-row"><b>🥦 Whole <strong>$9.80</strong></b><b>🔪 Prepped <strong>$12.40</strong></b><b>🍳 Ready to cook <strong>$18.60</strong></b></div><a className="button button-dark" href="#shop">Add everything to basket <ArrowRight size={16} /></a></div></div></section>

      <section className="section" id="ecosystem"><div className="section-head"><div><span className="eyebrow">MORE THAN GROCERIES</span><h2>A food <i>operating system.</i></h2></div><p>Discover what fits your week, then move through the system without starting over.</p></div><div className="eco-grid">{[["⚡", "ZERO Performance", "Protein, fibre, and food that works as hard as you do."], ["🍲", "ZERO Kitchen", "Dinner without the work. Prepared with intention."], ["🍞", "ZERO Bakery", "Artisan bread and better baked goods, made locally."], ["🫘", "ZERO Bulk", "Buy together, pay less—and less packaging too."], ["🍓", "ZERO Waste", "Nothing wrong with good food. Real scarcity only."], ["✦", "ZERO Assist", "Tell us your budget, goals, or how much time you have."]].map(([icon, name, note]) => <a className="eco-card" href="#shop" key={name}><span>{icon}</span><b>{name}</b><small>{note}</small><em>Explore <ArrowRight size={13} /></em></a>)}</div></section>

      <section className="section section-plum" id="membership"><div className="split-callout"><div><span className="eyebrow">MEMBERSHIP, EXPLAINED</span><h2>You pay for membership.<br /><i>Not grocery markup.</i></h2><p>Membership gives you access to the ZERO ecosystem: transparent pricing, included delivery, meal planning, prepared food, and a running view of the value you create.</p><a className="button button-light" href="#membership">Explore membership <ArrowRight size={16} /></a></div><div className="mini-card"><div className="mini-card__art field-yellow"><img src={assets.chili} alt="" /></div><div className="mini-card__band band-green"><b>$313.26</b><span>estimated savings to date</span></div></div></div></section>

      <section className="section faq-section"><div><span className="eyebrow">ZERO SECRETS</span><h2>Questions deserve<br /><i>straight answers.</i></h2><p className="faq-intro">No mystery math, no dark patterns—just the important things, in plain language.</p></div><div className="faq-list">{[["How does ZERO make money?", "Membership funds the system. Food pricing is built around transparent landed and operating cost rather than traditional retail markup."], ["Why is there no conventional meat?", "The initial assortment is plant-forward by design: tofu, tempeh, legumes, seitan where appropriate, and other high-protein plant foods."], ["Why is there no regular refrigerated milk?", "ZERO prioritizes oat, almond, soy, and other plant-based milk alternatives."], ["Is everything cheaper?", "ZERO shows the math instead of promising that every item is always cheaper."]].map(([question, answer], index) => <div className="faq-item" key={question}><button onClick={() => setFaq(faq === index ? null : index)}><span>{question}</span><span>{faq === index ? "−" : "+"}</span></button>{faq === index && <p>{answer}</p>}</div>)}</div></section>

      <section className="section brandguide" id="brand-guide"><div className="section-head"><div><span className="eyebrow">BRAND GUIDE</span><h2>The look, <i>all in one place.</i></h2></div><p>ZERO’s visual language is built from bold, flat colour and low-poly produce. Every panel pairs one dominant field with one contrasting label band.</p></div><div className="swatchrow">{brandColors.map(([name, color]) => <div className="swatch" key={name}><div className="swatch__fill" style={{ background: color }} /><div className="swatch__meta"><b>{name}</b><code>{color}</code></div></div>)}</div><div className="reference-row"><SplitCard item={{ name: "Bell Pepper", tag: "Source card", image: assets.pepper, field: "cream", band: "red" }} compact /><SplitCard item={{ name: "Hatch Chili Pepper", tag: "Source card", image: assets.chili, field: "yellow", band: "green" }} compact /><SplitCard item={{ name: "Scarlet Globe Radish", tag: "Source card", image: assets.radish, field: "plum", band: "red" }} compact /></div></section>

      <section className="section story"><div className="story-inner"><span className="eyebrow">THE ZERO PROMISE</span><h2>Good food should feel <i>clear.</i></h2><p>We build a smaller, brighter system around the food itself—honest prices, practical convenience, and a catalog that helps you decide what to eat next.</p><a className="button button-dark" href="#shop">See the range <ArrowRight size={16} /></a></div></section>
    </main>

    <footer className="footer"><div className="footer-top"><div><a className="wordmark wordmark--footer" href="#top"><span className="wordmark-mark">Z</span><span>ZERO Foods</span></a><p>Premium food. Zero markup.<br />Built around what you actually eat.</p></div><div><b>SHOP</b><a href="#produce">Fruit + veg</a><a href="#shop-cats">Categories</a><a href="#recipes">Recipes</a></div><div><b>THE MODEL</b><a href="#how">Our prices</a><a href="#how">Delivery</a><a href="#membership">Membership</a></div><div><b>KEEP IN TOUCH</b><a href="#top">Instagram</a><a href="#top">Newsletter</a><a href="#top">Help centre</a></div></div><div className="footer-bottom">© 2026 ZERO Foods <span>Good food, fair prices.</span></div></footer>
  </div></div>;
}
