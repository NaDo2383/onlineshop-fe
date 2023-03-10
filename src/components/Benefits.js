import { nanoid } from "nanoid";
import "../style/Benefits.css";

const BenefitsCard = [
  {
    _id: nanoid(),
    img: require("../assets/page/landing/benefitsCard1.png"),
    title: "Many Choices",
    text: "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.",
  },
  {
    _id: nanoid(),
    img: require("../assets/page/landing/benefitsCard2.png"),
    title: "Fast and On Time",
    text: "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.",
  },
  {
    _id: nanoid(),
    img: require("../assets/page/landing/benefitsCard3.png"),
    title: "Affordable Price",
    text: "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.",
  },
];

export const Benefits = () => {
  return (
    <div className="flex flex-d align-items justify-content">
      <div className="flex align-items justify-content" id="benefets-head">
        <div id="benefets-head-header-container">
          <span className="textCategory">benefits</span>
          <h2 id="benefets-head-header">Benefits when using our services</h2>
        </div>
        <div>
          <span className="benefitsText">
            Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
            dignissim placerat nisi, adipiscing mauris non purus parturient.
          </span>
        </div>
      </div>
      <div className="flex space-between" id="benefets-cards">
        {BenefitsCard.map((e, index) => (
          <div className="benefits" key={index}>
            <img src={e.img} alt="" />
            <h2 className="benefits-card-header">{e.title}</h2>
            <span className="benefitsText">{e.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
