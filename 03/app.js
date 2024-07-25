export default function randomNumber(min, max) {
  if(max >= min) {
    return Math.floor((Math.random() * (max - min + 1) + min));
  }
  else {console.log('Niepoprawny zestaw danych')}
}