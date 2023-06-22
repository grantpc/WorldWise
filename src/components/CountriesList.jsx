import CountryItem from './CountryItem';
import styles from './CountryList.module.css';
import Spinner from './Spinner';
import Message from './Message';

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return <Message message="Add your first city by clicking on the map." />;

  const countries = cities.reduce((array, city) => {
    // does this empty array I'm starting with already include the city that I'm looping over?
    // if not, add a new object to that array that contains the current country and emoji
    if (!array.map(el => el.country).includes(city.country))
      return [...array, { country: city.country, emoji: city.emoji }];
    else return array;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries &&
        countries.map(c => <CountryItem country={c} key={c.country} />)}
    </ul>
  );
}

export default CountryList;
