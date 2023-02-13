import "../App.css";
import "../style/ourProduct.css";

export const OutProduct = () => {
  return (
    <>
      <div
        className="flex align-items space-between"
        id="our-products-container"
      >
        <div className="flex flex-d space-between">
          <div className="our-product-container-1 flex flex-d space-between">
            <div id="our-product-container-1-header" className="flex flex-d">
              <span className="text-category">out product</span>
              <h2>Crafted by talented and high quality material</h2>
            </div>
            <span className="our-product-span-text">
              Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
              dignissim placerat nisi, adipiscing mauris non purus parturient.
              morbi fermentum, vivamus et accumsan dui tincidunt pulvinar
            </span>
            <button className="boxGreen button">Learn More</button>
            <img
              src={require("../assets/page/landing/outProduct.jpg")}
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-d space-between our-product-container-2">
          <div className="tooshuu flex">
            <div className="flex flex-d">
              <span className="our-product-span-number">20+</span>
              <span className="our-product-span-text">Years Experience</span>
            </div>
            <div className="flex flex-d">
              <span className="our-product-span-number">483</span>
              <span className="our-product-span-text">Happy Client</span>
            </div>
            <div className="flex flex-d">
              <span className="our-product-span-number">150+</span>
              <span className="our-product-span-text">Project Finished</span>
            </div>
          </div>
          <img src={require("../assets/page/landing/outProduct2.jpg")} alt="" />
        </div>
      </div>
    </>
  );
};
