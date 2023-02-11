import React, { useState } from 'react';

import { CatCategory, DogCategory } from './data';
function App() {
  const [category1, setCategory1] = useState(undefined);
  const [category2, setCategory2] = useState(undefined);
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <main>
        <div className="categories">
          <h3 className="title">
            Please choose one candidate from each category
          </h3>
          <div className="category">
            <h3 className="category-title">cat categories</h3>
            <section className="category-container">
              {/* here is cat category */}
              {CatCategory.map((item, index) => {
                const { title, image } = item;
                return (
                  <article
                    onClick={() => setCategory1(index)}
                    style={{
                      backgroundColor:
                        category1 === index ? '#009B86' : 'lightgray',
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
            </section>

            <h3 className="category-title">dog categories</h3>
            <section className="category-container">
              {/* here is dog category */}
              {DogCategory.map((item, index) => {
                const { title, image } = item;
                return (
                  <article
                    onClick={() => setCategory2(index)}
                    style={{
                      backgroundColor:
                        category2 === index ? '#009B86' : 'lightgray',
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
            </section>
            <section className="button-container">
              <button
                type="button"
                className="btn"
                onClick={() => {
                  if (category1 >= 0 && category2 >= 0) {
                    setShowModal(true);
                    return;
                  } else {
                    console.log(22222);
                  }
                }}
              >
                Submit
              </button>
            </section>
          </div>
          {/* here we check if show modal is true we will show it on the screen */}
          {showModal && (
            <div className="modal">
              <div className="modal-center">
                Your Answers Submitted!
                <p className="info">
                  from cat category you chose:{' '}
                  <strong>{CatCategory[category1].title}</strong>
                </p>
                <p className="info">
                  from dog category you chose:{' '}
                  <strong>{DogCategory[category2].title}</strong>
                </p>
              </div>

              <div className="close-btn-container">
                <button
                  className="close-btn"
                  name="close-btn"
                  onClick={() => {
                    setCategory1(undefined);
                    setCategory2(undefined);
                    setShowModal(false);
                  }}
                >
                  close modal
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
