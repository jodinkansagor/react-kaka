export const getZodiacSigns = () => {
  return fetch('http://localhost:2000/zodiac').then(res => res.json())
}