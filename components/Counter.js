import React, { useState } from 'react';

export default function Counter() {
  const [taco, setTaco] = useState(0); // 0 is the default value. It can be an obj, string, number, etc. Whatever you want to start with on the dom.

  return (
    <>
      <h1>Counter Title</h1>
      <h2>{taco}</h2>
      <button type="button" onClick={() => setTaco((preState) => preState + 1)}>Increment</button>
      <button type="button" onClick={() => setTaco((preState) => preState - 1)}>Decrement</button>
      <button type="button" onClick={() => setTaco(0)}>Reset</button>
    </>
  );
}
