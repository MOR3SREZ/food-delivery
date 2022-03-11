import CHICKEN from './utils/chicken';
import PIZZA from './utils/pizza';
import STEAK from './utils/steak';
import DRINK from './utils/drink';
import VEGETARIAN from './utils/vegetarian';
import PASTA from './utils/pasta';

let allProduct = [
  ...PIZZA,
  ...CHICKEN,
  ...PASTA,
  ...STEAK,
  ...VEGETARIAN,
  ...DRINK,
];

function App() {
  console.log(allProduct);
  return <div className='App'></div>;
}

export default App;
