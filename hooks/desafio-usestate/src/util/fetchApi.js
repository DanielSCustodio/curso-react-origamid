
const fetchtApi = async (options) => {
  const url = 'https://ranekapi.origamid.dev/json/api/produto/';
  const responseRaw = await  fetch(`${url}${options}`);
  const responseJson = await responseRaw.json();
  return responseJson;
}

export default fetchtApi;
