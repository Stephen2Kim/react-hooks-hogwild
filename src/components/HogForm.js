import React, { useState } from "react";

const HogForm = ({ onAddHog }) => {
  const [newHog, setNewHog] = useState({
    name: '',
    image: '',
    specialty: '',
    weight: '',
    greased: false,
    highestMedal: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewHog(prevHog => ({
      ...prevHog,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddHog(newHog);
    setNewHog({
      name: '',
      image: '',
      specialty: '',
      weight: '',
      greased: false,
      highestMedal: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={newHog.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="text"
        name="image"
        value={newHog.image}
        onChange={handleChange}
        placeholder="Image URL"
        required
      />
      <input
        type="text"
        name="specialty"
        value={newHog.specialty}
        onChange={handleChange}
        placeholder="Specialty"
        required
      />
      <input
        type="number"
        name="weight"
        value={newHog.weight}
        onChange={handleChange}
        placeholder="Weight"
        required
      />
      <label>
        Greased
        <input
          type="checkbox"
          name="greased"
          checked={newHog.greased}
          onChange={handleChange}
        />
      </label>
      <input
        type="text"
        name="highestMedal"
        value={newHog.highestMedal}
        onChange={handleChange}
        placeholder="Highest Medal Achieved"
        required
      />
      <button type="submit">Add Hog</button>
    </form>
  );
};

export default HogForm;
