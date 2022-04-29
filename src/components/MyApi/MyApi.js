import { useState } from 'react';

export default function MyApi() {
  const [defaultapiresponse, setDefaultApiResponse] = useState('');

  fetch(
    `https://api.themoviedb.org/3/movie/550?api_key=c92c75743b7b53c3d8b6c69fd6fd4463`
  )
    .then(res => JSON.res)
    .then(response => setDefaultApiResponse(response));
  console.log('defaultapiresponse: ', defaultapiresponse);
}

MyApi();
