import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [data1, setData1] = useState([
    { title: 'item1', checked: false },
    { title: 'item2', checked: false },
    { title: 'item3', checked: false },
  ]);

  const [data2, setData2] = useState([
    { title: 'item A', checked: false },
    { title: 'item B', checked: false },
    { title: 'item C', checked: false },
  ]);

  const handleChange = (idx) => {
    const updatedData1 = [...data1];
    updatedData1[idx].checked = !updatedData1[idx].checked;
    setData1(updatedData1);
  };

  const handleSubmit = () => {
    const newData1 = [...data1];
    const newData2 = [...data2];

    // Loop through data1 to check for checked items
    data1.forEach((item, idx) => {
      if (item.checked) {
        // Swap the checked item with the corresponding item in data2
        const temp = newData1[idx];
        newData1[idx] = newData2[idx];
        newData2[idx] = temp;
      }
    });

    // Update the states with the swapped arrays
    setData1(newData1);
    setData2(newData2);
  };

  return (
    <div>
      <h1>list1</h1>
      <ul>
        {data1.map((item, idx) => (
          <li key={idx}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleChange(idx)}
            />{' '}
            {item.title}
          </li>
        ))}
      </ul>

      <h1>list2</h1>
      <ul>
        {data2.map((item, idx) => (
          <li key={idx}>{item.title}</li>
        ))}
      </ul>
      <button onClick={handleSubmit}>click to swap</button>
    </div>
  );
}
