import { nanoid } from "nanoid";
import "../style/Testimonials.css";
import "../App.css";

const testimonials = [
  {
    _id: nanoid(),
    img: require("../assets/vuesax/bold/quote-up.png"),
    text: "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.",
    user: [
      {
        _id: nanoid(),
        avatar: require("../assets/avatar/avatar1.png"),
        name: "Hanne Cooper",
        star: require("../assets/icon-img/star.png"),
        starNumber: "4.3",
      },
    ],
  },
  {
    _id: nanoid(),
    img: require("../assets/vuesax/bold/quote-up.png"),
    text: "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.",
    user: [
      {
        _id: nanoid(),
        avatar: require("../assets/avatar/avatar1.png"),
        name: "Hanne Cooper",
        star: require("../assets/icon-img/star.png"),
        starNumber: "4.3",
      },
    ],
  },
  {
    _id: nanoid(),
    img: require("../assets/vuesax/bold/quote-up.png"),
    text: "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.",
    user: [
      {
        _id: nanoid(),
        avatar: require("../assets/avatar/avatar1.png"),
        name: "Hanne Cooper",
        star: require("../assets/icon-img/star.png"),
        starNumber: "4.3",
      },
    ],
  },
];

export const Testimonial = () => {
  return (
    <div className="testimonials flex flex-d align-items">
      <div className="testomonials-header flex flex-d align-items">
        <div className="testomonials-header-1 flex flex-d align-items">
          <span className="textCategory">Testimonials</span>
          <h1>What our customer say</h1>
        </div>
        <span>
          Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
          placerat nisi, adipiscing mauris non purus parturient.
        </span>
      </div>
      <div className="pidback ">
        <div className="pidbackCards flex">
          {testimonials.map((e, index) => (
            <div key={index} className="pidbackCard flex flex-d">
              <img
                key={e._id}
                src={e.img}
                alt="check img"
                className="pidbackCardImg1"
              />
              <span>{e.text}</span>
              {e.user.map((avatar, index) => (
                <div
                  key={index}
                  className="pidbackCardUserInfo flex space-between"
                >
                  <div>
                    <img
                      key={avatar._id}
                      src={avatar.avatar}
                      alt="avatar img"
                    />
                    <span>{avatar.name}</span>
                  </div>
                  <div>
                    <img src={avatar.star} alt="star" />
                    <span>{avatar.starNumber}</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
