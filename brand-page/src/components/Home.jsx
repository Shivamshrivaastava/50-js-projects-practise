const Home = () => {
    return (
      <div className="home container">
        <div className="home-content">
          <h1>STEP INTO STYLE AND COMFORT</h1>
          <p>
            Explore our Extensive Footwear Collection, Designed to Elevate Your
            Every Step with Unparalleled Quality, Trendsetting Designs, and
            Unmatched Comfort.
          </p>
          <div className="buttons">
            <button className="shopNowBtn">Shop Now</button>
            <button className="trendingBtn">Trending Collection</button>
          </div>
          <div className="availability">
            <p>Also Available On</p>
            <div className="shoppingApps">
              <img src="../images/flipkart.png" alt="" />
              <img src="../images/amazon.png" alt="" />
              <img src="../images/myntra.png" alt="" />
            </div>
          </div>
        </div>
        <div className="home-logo">
          <img src="../images/Rectangle 1(1).png" alt="shoe" />
        </div>
      </div>
    );
  };
  
  export default Home;