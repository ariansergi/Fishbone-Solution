import React, { useState } from 'react';
import { CatCategory, DogCategory } from './data';
export const Cat = () => {
  const [category1, setCategory1] = useState(null);
  <section className="category-container">
    {CatCategory.map((item, index) => {
      const { title, image } = item;
      return (
        <article
          onClick={() => setCategory1(index)}
          style={{
            backgroundColor: category1 === index ? '#009B86' : 'lightgray',
          }}
          key={index}
          className="card"
        >
          {console.log(category1)}
          <div className="card-info">
            <h5 className="card-title">{title}</h5>
            <img className="image" src={image} alt="" />
          </div>
        </article>
      );
    })}
  </section>;
};
