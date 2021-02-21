import React from 'react';

export default function CharDetails({ species, origin, details }) {
  return (
    <div>
      {details && (
        <>
          <p>{species}</p>
          <p>{origin}</p>
        </>
      )}
    </div>
  );
}
