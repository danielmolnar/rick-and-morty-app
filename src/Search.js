import React, { useState } from 'react';

const Search = ({ getQuery }) => {
  //1. Dem Inputfeld einen State zuweisen
  const [text, setText] = useState('');

  const onChange = (q) => {
    //5. q steht für den Value unten (was immer auch getippt wird)
    setText(q); //6. setText wird trotzdem aufgerufen nach der Änderung
    getQuery(q); //7. diese Funktion wird als Prop in der App.js zu "Search hinzugefügt"
    //diese Prop "getQuery" wir anschließend oben in die Funktion Search() eingefügt
  };

  return (
    <section>
      <form>
        <input
          type="text"
          placeholder="Search for Human or Alien"
          value={text} //text von useState s.o.
          onChange={(e) => onChange(e.target.value)}
          // 2. Wird beim tippen ausgelöst und der Wert in der Klammer geht in Value
          // 3. Query in Fetch einfügen und neuen useState anlegen
          // 4. onChange war zurvor setText(e.target.value), zum hochreichen zur App.js
          // wird oben eine Funktion "const onChange" angelegt
          autoFocus
        />
      </form>
    </section>
  );
};

export default Search;
