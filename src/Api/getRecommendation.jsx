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

const topTracksIds = [
  '4aBR9RUUXyiMJVb2S9LyyF','07MDkzWARZaLEdKxo6yArG','0MMyJUC3WNnFS1lit5pTjk','1MGqtRnKlHNO4fuHMm2Dm9','2zxEc1GCSCxbHIXTfhraRC'
];

async function getRecommendations(){
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-recommendations
  return (await fetchWebApi(
    `v1/recommendations?limit=5&seed_tracks=${topTracksIds.join(',')}`, 'GET'
  )).tracks;
}

const recommendedTracks = await getRecommendations();
console.log(
  recommendedTracks.map(
    ({name, artists}) =>
      `${name} by ${artists.map(artist => artist.name).join(', ')}`
  )
);
