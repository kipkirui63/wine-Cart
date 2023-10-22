import React, { useState } from 'react';
import './Wines.css';
import StarRating from './StarRating';

function Wines() {
  const [cart, setCart] = useState([]); // State to track the items in the cart
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State to track user authentication

  // Function to add a wine to the cart
  const addToCart = (wine) => {
    if (isAuthenticated) {
      setCart([...cart, wine]);
    } else {
      alert('Please log in or sign up to add items to the cart.');
    }
  };

  // Function to remove a wine from the cart
  const removeFromCart = (wine) => {
    const updatedCart = cart.filter((item) => item !== wine);
    setCart(updatedCart);
  };

  // Function to calculate the total price of items in the cart
  const calculateTotalPrice = () => {
    if (!isAuthenticated) {
      return 0; // Return 0 if the user is not authenticated
    }
    // Replace this sample logic with your actual pricing data
    const prices = {
      'Four Cousins Red Sweet': 1350,
      'Robertson Winery Sweet Red': 1700,
      'Asconi Pastoral': 1980,
      'Rosso Nobile Cioccolata': 1949,
      'Four Cousins Sweet Rose' :1450,
      'Robertson Winery Rose' : 1900,
      '4th Street Sweet Rose':1400,
      'Nederburg Rose':2150,
      'Robertson Winery Natural Sweet White':2100,
      'Four Cousins White Sweet':2500,
      'Mikado White Wine':1700,
      'Drostdy-Hof White Dry':1850,
      'Belaire Luxe':5300,
      'Belaire Rosé':5200,
      'Pure Heaven Red Celebration Drink':1800,
      'Bottega Gold Prosecco':5600,

    };

    return cart.reduce((total, wine) => total + prices[wine], 0);
  };

  // Function to handle rating changes
  const handleRatingChange = (rating) => {
    // You can implement the logic for handling rating changes here
    console.log(`Rating changed to ${rating}`);
  };
  // Function to clear the cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="wines-page">
      {/* Page Header */}
      <header className="header">
        <h1>Explore Our Wines</h1>
        <p>Discover a diverse collection of exceptional wines.</p>
      </header>

       {/* Cart Section */}
       <section className="cart">
  <h2>Cart <i className="fa fa-shopping-cart" aria-hidden="true"></i></h2>
  <ul>
    {cart.map((item, index) => (
      <li key={index}>
        {item} -{' '}
        <button className='remove' onClick={() => removeFromCart(item)}>Remove</button>
      </li>
    ))}
  </ul>
  <div>
    <strong>Total Items: {cart.length}</strong>
  </div>
  <div>
    <strong>Total Price: KES {calculateTotalPrice()}</strong>
  </div>
  <button className="clear-cart-button" onClick={clearCart}>Clear Cart</button>
  <button
          className="buy-button"
          onClick={() => {
            if (isAuthenticated) {
              // Handle the buy action here
            } else {
              alert('Please log in or sign up to make a purchase.');
            }
          }}
        >
          Buy
        </button>
        </section>


      {/* Wine Gallery */}
      <section className="wine-gallery">
        {/* Red Wines */}
        <h4 className="wine-category-title">RED WINE VARIETALS</h4>
        <div className="wine-category">
          <div className="wine-category-image">
            <img src="https://storage.googleapis.com/drinksvine/products/four-cousins-sweet-red.webp" alt="Red Wine 1" />
          </div>
          <div className="wine-details">
            <h3>Four Cousins Red Sweet</h3>
            <p>Four Cousins Red Sweet Wine: Luscious, fruity delight with a smooth finish.</p>
            <p>Price: KES 1,350 - KES 2,100</p>
            <div className="ratings">
              <p>Rating: 4.5/5</p>
              <StarRating rating={4.5} onRatingChange={handleRatingChange} />
            </div>
            <p>Reviews: 28</p>
            <button onClick={() => addToCart('Four Cousins Red Sweet')}><i className="fa fa-cart-arrow-down" aria-hidden="true"></i> Add to Cart</button>
          </div>
        </div>
        <div className="wine-category">
          <div className="wine-category-image">
            <img src="https://storage.googleapis.com/drinksvine/products/robertson-winery-sweet-red.webp" alt="Red Wine 2" />
          </div>
          <div className="wine-details">
            <h3>Robertson Winery Sweet Red</h3>
            <p>Robertson Winery Sweet Red: Bursting with ripe berries, a sweet indulgence.</p>
            <p>Price: KES 1,700 - KES 2,450</p>
            <div className="ratings">
              <p>Rating: 3/5</p>
              <StarRating rating={3} onRatingChange={handleRatingChange} />
            </div>
            <p>Reviews: 40</p>
            <button onClick={() => addToCart('Robertson Winery Sweet Red')}><i className="fa fa-cart-arrow-down" aria-hidden="true"></i> Add to Cart</button>
          </div>
        </div>
        <div className="wine-category">
          <div className="wine-category-image">
            <img src="https://storage.googleapis.com/drinksvine/products/asconi-pastoral.webp" alt="Red Wine 3" />
          </div>
          <div className="wine-details">
            <h3>Asconi Pastoral</h3>
            <p>Asconi Pastoral: A harmonious blend of fruits and a velvety finish.</p><br/>
            <p>Price: KES 1,980</p>
            <div className="ratings">
              <p>Rating: 4/5</p>
              <StarRating rating={3} onRatingChange={handleRatingChange} />
            </div>
            <p>Reviews: 30</p>
            <button onClick={() => addToCart('Asconi Pastoral')}><i className="fa fa-cart-arrow-down" aria-hidden="true"></i> Add to Cart</button>
          </div>
        </div>
        <div className="wine-category">
          <div className="wine-category-image">
            <img src="https://storage.googleapis.com/drinksvine/products/rosso-nobile-cioccolata.webp" alt="Red Wine 4" />
          </div>
          <div className="wine-details">
            <h3>Rosso Nobile Cioccolata</h3>
            <p>Rosso Nobile Cioccolata: A delightful fusion of wine and chocolate indulgence.</p>
            <p>Price: KES 1,949</p>
            <div className="ratings">
              <p>Rating: 4/5</p>
              <StarRating rating={3} onRatingChange={handleRatingChange} />
            </div>
            <p>Reviews: 45</p>
            <button onClick={() => addToCart('Rosso Nobile Cioccolata')}><i className="fa fa-cart-arrow-down" aria-hidden="true"></i> Add to Cart</button>
          </div>
        </div>
        <h4 className="wine-category-title">ROSE VARIETALS</h4>
        <div className="wine-category">
          <div className="wine-category-image">
            <img src="https://storage.googleapis.com/drinksvine/products/four-cousins-sweet-rose.webp" alt="Red Wine 1" />
          </div>
          <div className="wine-details">
            <h3>Four Cousins Sweet Rose</h3>
            <p>Four Cousins Sweet Rosé: A fruity, easy-drinking rosé wine for casual enjoyment.</p>
            <p>Price: KES 1,450</p>
            <div className="ratings">
              <p>Rating: 4.5/5</p>
              <StarRating rating={3} onRatingChange={handleRatingChange} />
            </div>
            <p>Reviews: 58</p>
            <button onClick={() => addToCart('Four Cousins Red Sweet')}><i className="fa fa-cart-arrow-down" aria-hidden="true"></i> Add to Cart</button>
          </div>
        </div>
        <div className="wine-category">
          <div className="wine-category-image">
            <img src="https://storage.googleapis.com/drinksvine/products/robertson-winery-rose.webp" alt="Red Wine 1" />
          </div>
          <div className="wine-details">
            <h3>Robertson Winery Rose</h3>
            <p>Robertson Winery Rosé: Refreshing, fruity, and perfect for a relaxing evening.</p>
            <p>Price: KES 1,900 </p>
            <div className="ratings">
              <p>Rating: 3.5/5</p>
              <StarRating rating={3} onRatingChange={handleRatingChange} />
            </div>
            <p>Reviews: 50</p>
            <button onClick={() => addToCart('Four Cousins Red Sweet')}><i className="fa fa-cart-arrow-down" aria-hidden="true"></i> Add to Cart</button>
          </div>
        </div>

        <div className="wine-category">
          <div className="wine-category-image">
            <img src="https://storage.googleapis.com/drinksvine/products/4th-street-red.webp" alt="Red Wine 1" />
          </div>
          <div className="wine-details">
            <h3>4th Street Sweet Rose</h3>
            <p>4th Street Sweet Rosé: A sweet and fruity delight for a fun-filled evening.</p>
            <p>Price: KES 1,400</p>
            <div className="ratings">
              <p>Rating: 3.5/5</p>
              <StarRating rating={3} onRatingChange={handleRatingChange} />
            </div>
            <p>Reviews: 38</p>
            <button onClick={() => addToCart('Four Cousins Red Sweet')}><i className="fa fa-cart-arrow-down" aria-hidden="true"></i> Add to Cart</button>
          </div>
        </div>

        <div className="wine-category">
          <div className="wine-category-image">
            <img src="https://storage.googleapis.com/drinksvine/products/nederburg-rose_jGP.webp" alt="Red Wine 1" />
          </div>
          <div className="wine-details">
            <h3>Nederburg Rose</h3>
            <p>Nederburg Rosé: A delightful South<br/> African rosé wine for<br/> a charming experience.</p>
            <p>Price: KES 2,150</p>
            <div className="ratings">
              <p>Rating: 3/5</p>
              <StarRating rating={3} onRatingChange={handleRatingChange} />
            </div>
            <p>Reviews: 29</p>
            <button onClick={() => addToCart('Four Cousins Red Sweet')}><i className="fa fa-cart-arrow-down" aria-hidden="true"></i> Add to Cart</button>
          </div>
        </div>
        <h4 className="wine-category-title">WHITE WINES VARIETALS</h4>
        <div className="wine-category">
          <div className="wine-category-image">
            <img src="https://storage.googleapis.com/drinksvine/products/robertson-winery.webp" alt="White Wine 1" />
          </div>
          <div className="wine-details">
            <h3>Robertson Winery Natural Sweet White</h3>
            <p>Robertson Winery's Natural Sweet White: Sweet, fruity, and delightful sip.</p>
            <p>Price: KES 2,100</p>
            <div className="ratings">
              <p>Rating: 3/5</p>
              <StarRating rating={3} onRatingChange={handleRatingChange} />
            </div>
            <p>Reviews: 40</p>
            <button onClick={() => addToCart('Four Cousins White Sweet')}><i className="fa fa-cart-arrow-down" aria-hidden="true"></i> Add to Cart</button>
          </div>
        </div>

        <div className="wine-category">
          <div className="wine-category-image">
            <img src="https://storage.googleapis.com/drinksvine/products/four-cousins-white-sweet.webp" alt="White Wine 1" />
          </div>
          <div className="wine-details">
            <h3>Four Cousins White Sweet</h3>
            <p>Four Cousins White Sweet Wine: Luscious, fruity<br/> delight with a <br/>smooth finish.</p>
            <p>Price: KES 2,500</p>
            <div className="ratings">
              <p>Rating: 3/5</p>
              <StarRating rating={3} onRatingChange={handleRatingChange} />
            </div>
            <p>Reviews: 40</p>
            <button onClick={() => addToCart('Four Cousins White Sweet')}><i className="fa fa-cart-arrow-down" aria-hidden="true"></i> Add to Cart</button>
          </div>
        </div>

        <div className="wine-category">
          <div className="wine-category-image">
            <img src="https://storage.googleapis.com/drinksvine/products/mikado-white-wine.webp" alt="White Wine 1" />
          </div>
          <div className="wine-details">
            <h3>Mikado White Wine</h3>
            <p>Mikado White Wine: Crisp, refreshing, <br/>and perfect for any<br/> occasion.</p>
            <p>Price: KES 1, 700</p>
            <div className="ratings">
              <p>Rating: 3/5</p>
              <StarRating rating={3} onRatingChange={handleRatingChange} />
            </div>
            <p>Reviews: 40</p>
            <button onClick={() => addToCart('Four Cousins White Sweet')}><i className="fa fa-cart-arrow-down" aria-hidden="true"></i> Add to Cart</button>
          </div>
        </div>

        <div className="wine-category">
          <div className="wine-category-image">
            <img src="https://storage.googleapis.com/drinksvine/products/drostdy-hof.webp" alt="White Wine 1" />
          </div>
          <div className="wine-details">
            <h3>Drostdy-Hof White Dry</h3>
            <p>Drostdy-Hof White Dry: Crisp, clean,<br/> and versatile for your<br/> wine preferences.</p>
            <p>Price: KES 1,850</p>
            <div className="ratings">
              <p>Rating: 3/5</p>
              <StarRating rating={3} onRatingChange={handleRatingChange} />
            </div>
            <p>Reviews: 42</p>
            <button onClick={() => addToCart('Four Cousins White Sweet')}><i className="fa fa-cart-arrow-down" aria-hidden="true"></i> Add to Cart</button>
          </div>
        </div>

        <h4 className="wine-category-title">SPARKLING VARIETALS</h4>
        <div className="wine-category">
          <div className="wine-category-image">
            <img src="https://storage.googleapis.com/drinksvine/products/luc-belaire-luxe.webp" alt="White Wine 1" />
          </div>
          <div className="wine-details">
            <h3>Belaire Luxe</h3>
            <p>Belaire Luxe: Elegant, luxurious sparkling <br/>wine for special celebratory moments.</p>
            <p>Price: KES 5,300</p>
            <div className="ratings">
              <p>Rating: 3/5</p>
              <StarRating rating={3} onRatingChange={handleRatingChange} />
            </div>
            <p>Reviews: 22</p>
            <button onClick={() => addToCart('Four Cousins White Sweet')}><i className="fa fa-cart-arrow-down" aria-hidden="true"></i> Add to Cart</button>
          </div>
        </div>

        <div className="wine-category">
          <div className="wine-category-image">
            <img src="https://storage.googleapis.com/drinksvine/products/luc-belaire-rose.webp" alt="White Wine 1" />
          </div>
          <div className="wine-details">
            <h3>Belaire Rosé</h3>
            <p>Belaire Rosé: A vibrant and fruity sparkling <br/>wine for joyful <br/>occasions.</p>
            <p>Price: KES 5, 200</p>
            <div className="ratings">
              <p>Rating: 3.5/5</p>
              <StarRating rating={3} onRatingChange={handleRatingChange} />
            </div>
            <p>Reviews: 44</p>
            <button onClick={() => addToCart('Four Cousins White Sweet')}><i className="fa fa-cart-arrow-down" aria-hidden="true"></i> Add to Cart</button>
          </div>
        </div>

        <div className="wine-category">
          <div className="wine-category-image">
            <img src="https://storage.googleapis.com/drinksvine/products/pure-heaven-red-celebration-drink-non-alcholic.webp" alt="White Wine 1" />
          </div>
          <div className="wine-details">
            <h3>Pure Heaven Red Celebration Drink</h3>
            <p>Pure Heaven Red Celebration Drink: A delightful non-alcoholic choice for festive moments.</p>
            <p>Price: KES 1, 800</p>
            <div className="ratings">
              <p>Rating: 4/5</p>
              <StarRating rating={3} onRatingChange={handleRatingChange} />
            </div>
            <p>Reviews: 23</p>
            <button onClick={() => addToCart('Four Cousins White Sweet')}><i className="fa fa-cart-arrow-down" aria-hidden="true"></i> Add to Cart</button>
          </div>
        </div>

        <div className="wine-category">
          <div className="wine-category-image">
            <img src="https://storage.googleapis.com/drinksvine/products/bottega-gold-prosecco.webp" alt="White Wine 1" />
          </div>
          <div className="wine-details">
            <h3>Bottega Gold Prosecco</h3>
            <p>Bottega Gold Prosecco: Premium Italian Prosecco with a touch of luxury and elegance.</p>
            <p>Price: KES 5, 600</p>
            <div className="ratings">
              <p>Rating: 3/5</p>
              <StarRating rating={3} onRatingChange={handleRatingChange} />
            </div>
            <p>Reviews: 35</p>
            <button onClick={() => addToCart('Four Cousins White Sweet')}><i className="fa fa-cart-arrow-down" aria-hidden="true"></i> Add to Cart</button>
          </div>
        </div>

        {/* Add more wine items here */}
      </section>
    </div>
  );
}

export default Wines;