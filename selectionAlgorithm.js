import React, { useState, useEffect } from "react";

// Function to simulate fetching data from an API
const fetchCategories = async () => {
  // Replace with your actual API endpoint
  const response = await fetch("https://api.example.com/restaurant/categories");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const RestaurantMenu = () => {
  const [categories, setCategories] = useState(null); // Categories will be an object { categoryName: [items] }
  const [loading, setLoading] = useState(true); // Loading status
  const [error, setError] = useState(null); // Error status
  const [expandedCategory, setExpandedCategory] = useState(null);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadCategories();
  }, []); // Empty dependency array means this effect runs once on mount

  const handleCategoryClick = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a spinner or other loading indicator
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="accordion">
      {categories &&
        Object.keys(categories).map((category) => (
          <div key={category}>
            <h3 onClick={() => handleCategoryClick(category)}>{category}</h3>
            {expandedCategory === category && (
              <ul>
                {categories[category].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
    </div>
  );
};

export default RestaurantMenu;
