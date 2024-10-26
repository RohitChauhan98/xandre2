'use client';
import React from 'react';

type PropertyCardProps = {
  imageUrl: string;
  name: string;
  location: string;
  progress: number;
  onContinue: () => void;
  onDelete: () => void;
};

const PropertyCard: React.FC<PropertyCardProps> = ({
  imageUrl,
  name,
  location,
  progress,
  onContinue,
  onDelete,
}) => {
  return (
    <div className="flex items-center p-4 bg-white shadow-md rounded-lg mb-4">
      <img
        src={imageUrl}
        alt={name}
        className="w-16 h-16 rounded-full mr-4"
      />
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-500">{location}</p>
      </div>
      <div className="text-center w-20">
        <span className="text-gray-700 font-medium">{progress}%</span>
      </div>
      <button
        onClick={onContinue}
        className="text-orange-500 hover:text-orange-600 font-medium mx-4"
      >
        Continue registration
      </button>
      <button
        onClick={onDelete}
        className="text-gray-500 hover:text-gray-700 p-2 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default PropertyCard;
