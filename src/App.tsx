import './App.css';
import Dogheader from './components/dogheader';
import Dogsearch from './components/dogsearch';
import Dogslist from './components/dogslist';
import { ALL_BREEDS_API } from './config';
import useDataFetching from './lib/fetcher';

function App() {
  const createBreedsList = () => {
    const breeds: { message: { [ind: string]: string[] } } =
      useDataFetching(ALL_BREEDS_API);
    let allBreeds = [];
    if (breeds && breeds.message) {
      for (const breed of Object.keys(breeds.message)) {
        if (breeds.message[breed].length > 0) {
          for (let i = 0; i < breeds.message[breed].length; i++)
            allBreeds.push(`${breed} ${breeds.message[breed][i]}`);
        } else allBreeds.push(breed);
      }
    }
    return allBreeds;
  };

  return (
    <div className='container'>
      <div className='header'>
        <Dogheader title='Dog Image Gallery' />
      </div>
      <div className='search'>
        <Dogsearch data={createBreedsList()} />
      </div>
      <div className='list'>
        <Dogslist />
      </div>
    </div>
  );
}

export default App;
