export default function sortArrayKey(array) {
  return array.sort((a, b) => b.health - a.health);
}
