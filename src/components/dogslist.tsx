import { atomBreedSelected } from '../config';
import { useAtom } from 'jotai';
import useDataFetching from '../lib/fetcher';

// type DogslistProps = {
//   breedList: string[];
// };

export default function Dogslist() {
  const [currentBreed, setCurrentBreed] = useAtom(atomBreedSelected);
  const itemData = useDataFetching(
    `https://dog.ceo/api/breed/${currentBreed}/images/random`
  );
  console.log(itemData);
  return (
    <>
      {itemData && itemData.message && (
        <img src={itemData.message} alt={currentBreed} loading='lazy' />
      )}
    </>
  );
}
