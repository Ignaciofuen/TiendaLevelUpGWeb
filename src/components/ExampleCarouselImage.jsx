import React from 'react';

export default function ExampleCarouselImage({ text }) {
  return (
    <div
      style={{
        height: '300px',
        backgroundColor: '#ccc',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '24px',
      }}
    >
      {text}
    </div>
  );
}