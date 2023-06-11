const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

async function main() {
  // TODO: how do we prove to the server we're on the nice list? 
    // console.log(process.argv)
  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    // console.log(process.argv)
    name: process.argv[2]
    // TODO: add request body parameters here!
  });

  console.log({ gift });
}

main();