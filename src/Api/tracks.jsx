// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token = 'BQAJ-Oti5bkyKak8ZtzyFWLCqQoSGQAcDiJTrKCzvS1-ezBQCtGxgXcLV8i_ia36_B-GEq262MG2_SCN-nnsJyp152Sg6gNEhSLrRTQeO8wqUBQ0BiCHINzES66iVUKKBOwWK5CpPSJ9m9eEJdwQQXa-aIId35ukvyGD51kduYz70sBjPA5raOpfLwLdet195lt6Qf2X9N8l9LcfC4Bdhp9SEZRHTV18zT1t9h74PRcGNanjAhTPELcgbbk54YR90l95WKtH0EIjzQLRhUrc';
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body:JSON.stringify(body)
  });
  return await res.json();
}

async function getTopTracks(){
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  return (await fetchWebApi(
    'v1/me/top/tracks?time_range=long_term&limit=5', 'GET'
  )).items;
}

const topTracks = await getTopTracks();
console.log(
  topTracks?.map(
    ({name, artists}) =>
      `${name} by ${artists.map(artist => artist.name).join(', ')}`
  )
);

