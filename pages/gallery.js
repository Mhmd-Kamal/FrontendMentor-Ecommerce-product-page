import React, { useState, useEffect } from 'react';

function gallery() {
  const [order, setOrder] = useState([
    { order: 1, value: 1 },
    { order: 2, value: 2 },
    { order: 3, value: 3 },
    { order: 4, value: 4 },
  ]);
  const [current, setCurrent] = useState(order[0]);
  const [translation, setTranslation] = useState(0);
  const [translationClass, setTranslationClass] = useState(
    `translate-x-[${translation}px]`
  );

  const nextButton = () => {
    setTranslation((translation) =>
      translation <= -100 * (order.length - 1) ? 0 : translation - 100
    );
  };

  const previousButton = () => {
    setTranslation((translation) =>
      translation >= 0 ? -100 * (order.length - 1) : translation + 100
    );
  };

  const thumbButton = (index) => {
    setTranslation(index * -100);
  };

  useEffect(() => {
    setTranslationClass(`translate-x-[${translation}px]`);
  }, [translation]);

  return (
    <div className='w-[104px] border-slate-900 border-2 overflow-hidden'>
      <div
        className={`flex w-[104px] duration-1000 ${translationClass}   transition-all`}
      >
        {order.map((item) => {
          return (
            <div
              key={item.value}
              className={` bg-red-400 border-2  border-lime-800 bg-lie flex-shrink-0 bg-lime w-[100px] h-[100px] flex justify-center items-center text-7xl`}
            >
              {item.value}
            </div>
          );
        })}
      </div>
      <div className='flex justify-around cursor-pointer'>
        {order.map((item, index) => (
          <a onClick={() => thumbButton(index)} key={item.value}>
            {item.value}
          </a>
        ))}
      </div>
      <button onClick={nextButton}>next</button>
      <button onClick={previousButton}>previous</button>
    </div>
  );
}

export default gallery;
