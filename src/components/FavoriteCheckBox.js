import React, { useState } from 'react';

export default function FavoriteCheckBox() {
  const [checked, setChecked] = useState(false);

  return (
    <label>
      <input
        type="checkbox"
        defaultChecked={checked}
        onChange={() => setChecked(!checked)}
      />
      Favorite
    </label>
  );
}
