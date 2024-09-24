"use client";
import React, { useMemo, useState } from "react";
import { initialItems } from "./util";

const demo = () => {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  // without useMemo the selecteitem will calculate through 29 mil data, which is heavy calculation that is slowing down
  // when using useMemo, function inside it will compared to prev and if nothing changed then there is no need for re-render which decrease haevy calculation
  // function will re-render when value inside depedency bracket is changed
  const selectedItem = useMemo(
    () => items.find((item) => item.id === count),
    [items, count]
  );
  return (
    <div className="flex items-center mb-3 flex-col">
      <h1>Count: {count}</h1>
      <h1>Selected item: {selectedItem?.id}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default demo;
