const getAge = (a) => {
  let now = new Date();
  let yourBirth = new Date(a);
  let age = now.getFullYear() - yourBirth.getFullYear();
  let m = now.getMonth() - yourBirth.getMonth();
  if (m < 0 && now.getDate() < yourBirth.getDate()) {
    age--;
  }
  return age
};
export default getAge
