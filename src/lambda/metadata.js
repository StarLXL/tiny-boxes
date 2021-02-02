import dotenv from 'dotenv'
import Web3 from 'web3'
import Readable from 'stream'
import pinataSDK from '@pinata/sdk'
import axios from 'axios'
import FormData, { Stream } from 'form-data'
import { tinyboxesABI } from '../tinyboxes-contract'
import { resolve } from 'path'
import fs from 'fs'
dotenv.config()

const {
  PINATA_API_KEY,
  PINATA_API_SECRET,
  WALLET_PRIVATE_KEY,
  WEBSITE,
  EXTERNAL_URL_BASE,
  WEB3_PROVIDER_ENDPOINT,
  CONTRACT_ADDRESS,
} = process.env

// init web3 provider and load contract
var web3 = new Web3(WEB3_PROVIDER_ENDPOINT)
const tinyboxesContract = new web3.eth.Contract(
  tinyboxesABI,
  CONTRACT_ADDRESS,
)

const generateResponse = (body, statusCode) => {
  return {
    statusCode: statusCode,
    body: JSON.stringify(body),
  }
}

class ReadableString extends Readable {
  sent = false

  constructor(str) {
    super();
  }

  _read() {
    if (!this.sent) {
      this.push(Buffer.from(this.str));
      this.sent = true
    }
    else {
      this.push(null)
    }
  }
}

function lookupMintedBlock(id) {
  const idHash = '0x' + ((id > 2222) ? BigInt(id) : parseInt(id, 10) ).toString(16).padStart(64, '0');
  console.log("Finding Token with id hash: ", idHash);
  return new Promise((resolve, reject) => {
    web3.eth
      .subscribe('logs', {
        address: CONTRACT_ADDRESS,
        topics: [
          '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
          '0x0000000000000000000000000000000000000000000000000000000000000000',
          null,
          idHash,
        ],
      })
      .on("data", async (log) => {
        console.log('...Minted Block...')
        web3.eth.getBlock(log.blockNumber, (err, response) => {
          if (err) reject(err);
          else resolve(response);
        })
      })
      .on("error", function(log) {
        console.error(log);
      });
  })
}

exports.handler = async (event, context) => {
  // wrap things with error catching
  try {
    const id = event.queryStringParameters.id

    console.log(CONTRACT_ADDRESS);

    if (event.httpMethod !== 'GET') {
      // Only GET requests allowed
      console.log('Bad method:', event.httpMethod)
      return generateResponse('Bad method:' + event.httpMethod, 405)
    } else if (id === undefined) {
      // complain if id is missing
      console.log('Undefined ID parameter is required')
      return generateResponse('Undefined ID parameter is required', 204)
    }

    // check token exists and get owner
    console.log('Checking token of ID ', id, ' exists')
    const owner = await tinyboxesContract.methods.ownerOf(id).call()
    if (owner === '0x0000000000000000000000000000000000000000') {
      // complain if token is missing
      console.log('Token ' + id + " dosn't exist")
      return generateResponse('Token ' + id + " dosn't exist", 204)
    }

    // concurently lookup token data, palette, art & timestamp
    console.log('Looking Up Token Data...')
    const dataPromise = tinyboxesContract.methods.tokenData(id).call()
    const artPromise = tinyboxesContract.methods.tokenArt(id).call()
    //const blockPromise = lookupMintedBlock(id);
    

    // await token data
    console.log("Awaiting requests...");
    let [data, art, block] = ['', '', '']
    data = await dataPromise
      .catch((err) => console.error(err))
    if (data.animation == 14)
      art = await tinyboxesContract.methods.tokenArt(id,0,10,0,'').call()
        .catch((err) => console.error(err))
    else art = await artPromise
      .catch((err) => console.error(err))
    if (data === undefined || art === undefined) return generateResponse('Server Error', 500)
    
    console.log('Lookup Complete!')

    // convert static art from SVG to PNG

    // capture MP4 video of SVG animation

    // console.log('Creating ReadableStrings')
    // // needs to be converted to a file without writing to fs
    // const artStream = new File(art, ("TinyBox#"+id+"-art.svg"))
    // //Blob(art, {type : 'image/svg+xml'})
    // const animationStream = new ReadableString(animation)

    // load Pinata SDK
    // console.log('Connecting to Pinata SDK...')
    // const pinata = pinataSDK(PINATA_API_KEY, PINATA_API_SECRET)

    // const imageHash = (await pinata.pinFileToIPFS(artStream)).IpfsHash
    // const animationHash = (await pinata.pinFileToIPFS(animationStream)).IpfsHash
    // console.log('IPFS Hashes: ')
    // console.log(imageHash)
    // console.log(animationHash)

    // build the metadata object from the token data and IPFS hashes
    console.log("Building Metadata");
    const animationTitles = [
      "Snap Spin 90",
      "Snap Spin 180",
      "Snap Spin 270",
      "Snap Spin Tri",
      "Snap Spin Quad",
      "Snap Spin Tetra",
      "Spin",
      "Slow Mo",
      "Clockwork",
      "Spread",
      "Unfurl",
      "Jitter",
      "Jiggle",
      "Jolt",
      "Grow n Shrink",
      "Squash n Stretch",
      "Round",
      "Glide",
      "Wave",
      "Fade",
      "Skew X",
      "Skew Y",
      "Stretch",
      "Jello"
    ];
    const schemeTitles = [
      "Analogous",
      "Triadic",
      "Complimentary",
      "Tetradic",
      "Analogous and Complimentary",
      "Split Complimentary",
      "Complimentary and Analogous",
      "Series",
      "Square",
      "Mono",
      "Random"
    ];
    const isLE = BigInt(id) > 2222;
    const max256Int = 115792089237316195423570985008687907853269984665640564039457584007913129639936n;
    const description = (
      (isLE ? "Limited Edition " : "") +
      "TinyBox " + 
      (isLE ?
        (max256Int - BigInt(id)).toString(10) + " of 100 Limited Editions Max" :
        (id % 202) + " of 202 in Phase " + (parseInt(data.scheme) + 1).toString(10)) +
      " " +
      "TinyBoxes is to Autoglyphs as Avastars is to CryptoPunks. " +
      "TinyBoxes are animated patterns of shapes and colors generated and rendered 100% on-chain. Innovative features of TinyBoxes include dynamic rendering settings, 24 animations, and 11 exclusive color schemes released in phases. \n" +
      "Our contract has been designed as efficiently as possible, with a minting fee of just 260k gas. TinyBoxes gives back to its community; giving back 50% of gas spent as referral rewards, prizes and giveaways."
    );
    const metadata = {
      platform: "TinyBoxes",
      name: isLE ? 'LE TinyBox #-' + (max256Int - BigInt(id)).toString(10) : 'TinyBox #' + id,
      tokenID: id,
      description: description,
      website: WEBSITE,
      external_url: EXTERNAL_URL_BASE + id,
      image_data: art,
      background_color: '121212',
      artist: "NonFungibleTeam",
      license: "NFT License",
      royaltyInfo:{
        artistAddress: CONTRACT_ADDRESS,
        royaltyFeeByID: 5
      },
      attributes: [
        {
          trait_type: 'Shapes',
          value: parseInt(data.shapes),
          max_value: 30
        },
        {
          trait_type: 'Hatching',
          value: parseInt(data.hatching),
          max_value: 30
        },
        {
          trait_type: 'Min Width',
          value: parseInt(data.size[0]),
          max_value: 255
        },
        {
          trait_type: 'Max Width',
          value: parseInt(data.size[1]),
          max_value: 255
        },
        {
          trait_type: 'Min Height',
          value: parseInt(data.size[2]),
          max_value: 255
        },
        {
          trait_type: 'Max Height',
          value: parseInt(data.size[3]),
          max_value: 255
        },
        {
          trait_type: 'Spread',
          value: data.spacing[0] + "%",
          max_value: 100
        },
        {
          trait_type: 'Rows',
          value: (data.spacing[1] % 16) + 1,
          max_value: 16
        },
        {
          trait_type: 'Columns',
          value: Math.floor(data.spacing[1] / 16) + 1,
          max_value: 16
        },
        {
          trait_type: 'Hue',
          value: parseInt(data.color[0]),
          max_value: 360
        },
        {
          trait_type: 'Saturation',
          value: parseInt(data.color[1]),
          max_value: 100
        },
        {
          trait_type: 'Lightness',
          value: parseInt(data.color[2]),
          max_value: 100
        },
        {
          trait_type: 'Contrast',
          value: data.contrast,
          max_value: 100
        },
        {
          trait_type: 'Shades',
          value: data.shades,
          max_value: 7
        },
        {
          trait_type: 'Scheme',
          value:  parseInt(data.color[1]) === 0 ? "Grayscale" : schemeTitles[data.scheme],
        },
        {
          display_type: "number",
          trait_type: 'Phase',
          value: isLE ? "Limited Edition" : parseInt(data.scheme) + 1,
        },
        {
          trait_type: 'Animation',
          value: animationTitles[data.animation],
        },
        {
          trait_type: 'Mirroring',
          value: data.mirroring % 4 + "," + Math.floor(data.mirroring / 4) % 4 + "," + Math.floor(data.mirroring / 16) % 4 
        },
        {
          display_type: "date",
          trait_type: 'Rendered',
          value: Date.now(),
        },
      ],
    }

    // log metadata to console
    console.log('Metadata of token ' + id)
    console.log(metadata)

    // upload metadata JSON object to IPFS
    // console.log('Writing metadata to IPFS')
    // const options = {
    //   pinataMetadata: {
    //       name: "TinyBox #"+id+" Metadata"
    //   }
    // };

    // const metadataHash = (await pinata.pinJSONToIPFS(metadata, options)).IpfsHash
    // console.log(metadataHash)

    // update token with the metadataHash
    // can happen after response

    return generateResponse(metadata, 200)
  } catch (err) {
    console.log(err)
    return generateResponse('Server Error', 500)
  }
}
