import { useState } from 'react';

function App() {

  const products = [
    { name: 'Mela', price: 0.5 },
    { name: 'Pane', price: 1.2 },
    { name: 'Latte', price: 1.0 },
    { name: 'Pasta', price: 0.7 },
  ];

  const [addedProducts, setAddedProducts] = useState([]);

  const addToCart = (product) => {
    const isProducAlreadyInCart = addedProducts.some(p => p.name === product.name);
    if (isProducAlreadyInCart) {
      return;
    }
    const productToAdd = {
      ...product,
      quantity: 1
    } // Aggiungo la proprietà quantity con valore 1
    setAddedProducts(curr => [...curr, productToAdd]);
  }

  return (
    <>
      <h1>prodotti da scegliere</h1>
      <ul>
        {products.map((p, index) => (
          <li key={index}>
            <p>{p.name} ({p.price.toFixed(2)}€)</p>
            <button onClick={() => addToCart(p)}>Aggiungi al carrello</button>
            {/* toFixed(2) per mostrare il prezzo con due decimali */}
            {/* Utilizzo di index come chiave per ogni elemento della lista */}
          </li>
        ))}
      </ul>
      {addedProducts.length > 0 && (
        <>
          <h2>Prodotti nel carrello</h2>
          <ul>
            {addedProducts.map((p, index) => (
              <li key={index}>
                <p>{p.quantity} x {p.name} ({p.price.toFixed(2)}€)</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  )
}

export default App


/*Milestone 1: Mostrare la lista dei prodotti
 Parti dall’array products fornito:
Crea un componente che mostra la lista dei prodotti.
Per ogni prodotto, mostra:
Nome
Prezzo

Obiettivo: Vedere un elenco leggibile di tutti i prodotti con nome e prezzo.*/

/*Milestone 2: Aggiungere prodotti al carrello
Aggiungi uno stato locale addedProducts (inizialmente un array vuoto) per rappresentare i prodotti nel carrello.
Per ogni prodotto della lista, aggiungi un bottone "Aggiungi al carrello":
Al click del bottone, usa una funzione addToCart per:
Aggiungere il prodotto al carrello se non è già presente, con una proprietà quantity = 1.
Se il prodotto è già nel carrello, ignora l’azione.
Sotto alla lista dei prodotti, mostra una lista dei prodotti nel carrello se addedProducts contiene almeno un elemento.
Per ogni prodotto nel carrello, mostra:
Nome
Prezzo
Quantità

Obiettivo: L’utente può aggiungere prodotti al carrello e vedere una lista dei prodotti aggiunti.*/