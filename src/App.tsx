import React from 'react';
import './App.css';
import { CardComponent } from "./components/card/card.component";
import  image1  from "./assets/images/sedan.png";
import  image2  from "./assets/images/suv.png";
import  image3  from "./assets/images/luxury.png";

function App() {
  let cards = [
    {
      imgSrc: image1,
      title: 'sedans',
      content: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
      btnContent: 'Learn More',
      color: '#E28625'
    },
    {
      imgSrc: image2,
      title: 'suvs',
      content: 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
      btnContent: 'Learn More',
      color: '#006971'
    },
    {
      imgSrc: image3,
      title: 'luxury',
      content: 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
      btnContent: 'Learn More',
      color: '#004140'
    },
  ]

  return (
      <div className="App">
        <div className="main" >
            {cards.map((card, index) => (
                <div className="element" key={index}>
                  <CardComponent
                      imgSrc={card.imgSrc}
                      title={card.title}
                      content={card.content}
                      btnContent={card.btnContent}
                      hexColor={card.color}
                  />
                </div>
            ))}
          </div>
      </div>
  );
}

export default App;
