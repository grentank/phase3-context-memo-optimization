import React, { useState, useEffect } from 'react';
// import axios from 'axios';

export default function EffectsPage() {
  // eslint-disable-next-line no-unused-vars
  const [counter, setCounter] = useState(0);

  // setCounter(1);
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('interval');
      setCounter((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [counter]);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    fetch('https://jsonplaceholder.typicode.com/users', { signal })
      .then((res) => res.json())
      .then((res) => {
        // eslint-disable-next-line no-alert
        alert('Data loaded!');
        console.log(res);
      })
      .catch(console.log);
    // eslint-disable-next-line no-return-assign
    return () => controller.abort();
  }, []);

  return (
    <h2>{counter}</h2>
  );
}
