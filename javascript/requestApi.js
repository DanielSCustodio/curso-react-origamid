const requestApi = async () => {
  const responseRaw = await  fetch('https://api.github.com/users/diego3g');
  const responseJson = await responseRaw.json();
  console.log(responseJson);
}

export default requestApi;