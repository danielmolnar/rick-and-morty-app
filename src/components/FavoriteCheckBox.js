import React, { useState } from 'react';

export default function FavoriteCheckBox({ onChangeFunction, Cards }) {


  return (
    <label>
      <input
        type="checkbox"
        onChange={onChangeFunction}
      />
      Favorite
    </label>
  );
}

