import React from 'react';

// Reusable PropertyCard Component
function PropertyCard({ tag, imageUrl, title, location, price }) {
  return (
    <div className="w-80 p-4 mt-4 mx-4 gap-4 bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform">
      <div className="absolute left-[4em] mt-[1.5em] bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">
        {tag}
      </div>
      <img src={imageUrl} alt="Property" className="w-full h-48 object-cover rounded-lg" />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-gray-500 text-sm">{location}</p>
        <div className="mt-2">
          <span className="text-xl font-bold">${price}</span>
          <span className="text-sm text-gray-500"> /month</span>
        </div>
      </div>
    </div>
  );
}

function Card() {
  const properties = [
    {
      tag: 'For rent',
      imageUrl: 'https://i.pinimg.com/736x/ce/89/6e/ce896eb536bc4740bddbee62a7c27e21.jpg',
      title: 'Greenspace',
      location: 'Chicago, IL • Apartment',
      price: 1200,
    },
    {
      tag: 'For rent',
      imageUrl: 'https://i.pinimg.com/736x/64/eb/6c/64eb6c4642150c59adf4f2f2dc95dfc0.jpg',
      title: 'Modern Living',
      location: 'Los Angeles, CA • Condo',
      price: 2500,
    },
    {
        tag: 'For rent',
        imageUrl: 'https://i.pinimg.com/736x/64/eb/6c/64eb6c4642150c59adf4f2f2dc95dfc0.jpg',
        title: 'Modern Living',
        location: 'Los Angeles, CA • Condo',
        price: 2500,
      },
      {
        tag: 'For rent',
        imageUrl: 'https://i.pinimg.com/736x/64/eb/6c/64eb6c4642150c59adf4f2f2dc95dfc0.jpg',
        title: 'Modern Living',
        location: 'Los Angeles, CA • Condo',
        price: 2500,
      },
      {
        tag: 'For rent',
        imageUrl: 'https://i.pinimg.com/736x/64/eb/6c/64eb6c4642150c59adf4f2f2dc95dfc0.jpg',
        title: 'Modern Living',
        location: 'Los Angeles, CA • Condo',
        price: 2500,
      },
  ];

  return (
    <div className="grid grid-cols-3  gap-4">
      {properties.map((property, index) => (
        <PropertyCard
          key={index}
          tag={property.tag}
          imageUrl={property.imageUrl}
          title={property.title}
          location={property.location}
          price={property.price}
        />
      ))}
    </div>
  );
}

export default Card;
