import styled from 'styled-components';

import React from 'react';

export default function Button({ text, currywurstFunktion }) {
  return <button onClick={currywurstFunktion}>{text}</button>;
}
