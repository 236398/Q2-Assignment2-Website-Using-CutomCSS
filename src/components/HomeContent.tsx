import React from 'react';
const Home = () => {
  return (
    <div>
      <section className="hero" style={{ backgroundImage: "url('watches-background.jpg')" }}>
        <div>
          <h1 className="fade-in">Welcome to Watch World</h1>
          <p>Your one-stop shop for the best watches</p>
          <button>Shop Now</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
