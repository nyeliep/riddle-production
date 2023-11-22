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

const tracksUri = [
  'spotify:track:4aBR9RUUXyiMJVb2S9LyyF','spotify:track:26QLJMK8G0M06sk7h7Fkse','spotify:track:07MDkzWARZaLEdKxo6yArG','spotify:track:3tBZ60j1jQ7NJm8IjelyQe','spotify:track:0MMyJUC3WNnFS1lit5pTjk','spotify:track:1SOClUWhOi8vHZYMz3GluK','spotify:track:1MGqtRnKlHNO4fuHMm2Dm9','spotify:track:7qiZfU4dY1lWllzX7mPBI3','spotify:track:2zxEc1GCSCxbHIXTfhraRC','spotify:track:2eAvDnpXP5W0cVtiI0PUxV'
];

async function createPlaylist(tracksUri){
  const { id: user_id } = await fetchWebApi('v1/me', 'GET')

  const playlist = await fetchWebApi(
    `v1/users/${user_id}/playlists`, 'POST', {
      "name": "My recommendation playlist",
      "description": "Playlist created by the tutorial on developer.spotify.com",
      "public": false
  })

  await fetchWebApi(
    `v1/playlists/${playlist.id}/tracks?uris=${tracksUri.join(',')}`,
    'POST'
  );

  return playlist;
}

const createdPlaylist = await createPlaylist(tracksUri);
console.log(createdPlaylist.name, createdPlaylist.id);
