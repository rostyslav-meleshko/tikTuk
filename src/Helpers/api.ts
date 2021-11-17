const BASE_URL = 'https://tiktok33.p.rapidapi.com';
// const API_KEY = 'c623a8a0d6msh06483b4961c26b3p1e09c8jsne61c6fde6318';
const API_KEY = 'c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66';


export const serverRequest = async (url: string) => {
  const serverResponse = await fetch(`${BASE_URL}${url}`, {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
      'x-rapidapi-key': `${API_KEY}`,
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Server error occured');
      }

      return response.json();
    });

  return serverResponse;
};
