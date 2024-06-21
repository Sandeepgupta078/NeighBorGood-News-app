import React from 'react';

const categories = [
  'General',
  'Business',
  'Technology',
  'Entertainment',
  'Health',
  'Science',
  'Sports',
];

const CategoryList = ({ category, setCategory }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 my-4">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setCategory(cat.toLowerCase())}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
            category === cat.toLowerCase()
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryList;