
//if(typeof window.ethereum !== "undefined"){
   //window.ethereum.request({method:"eth_requestAccounts"})

//} else {
    //console.log("No metamask")
//}
//rap the above into async function so it does'nt connect automatically
 //in Front end javascript you cant use require

 //{ethers}= require{ethers} wont work cause it cant interact with node module
 //go to Ethers doc and copy the main package into a new file.
 //copy the ethers in front end version and past in ethers-5.6.esm.mim.js and import it

 import { ethers } from "./ethers-5.6.esm.min.js"
 //import abi from constants
 import { abi , contractAddress} from "./constants.js"

 const connectButton = document.getElementById("connectButton")
 const fundButton = document.getElementById("fundButton")
 connectButton.onclick = connect
 fundButton.onclick = fund

console.log(ethers)
 async function connect(){
    if(typeof window.ethereum !== "undefined"){
     //window.ethereum.request({method:"eth_requestAccounts"})
     
    //Lets update with await
     await ethereum.request({method:"eth_requestAccounts"})   
     //document.getElementById("connectButton").innerHTML = "Connected"
     //update the above since we are using await
     connectButton.innerHTML = "Connected"
     } else {
         console.log("No metamask")
     }
 }

 async function fund()  { 

     const ethAmount = "0.1"
    
    console.log(`Funding with ${ethAmount}`)
    if(typeof window.ethereum !=="undefined"){
        //what needed to send Transaction
        //provider 2) connection to the blockchain
        //signer /wallet /someone with some gas'// contract that we are interacting with
        //ABI and Address

//web3Provider ease moving from web3.js based app to ethers, wrapps existing web3- compataible(web3HttpProvider) either infura or Alchemy
     //Metamask will be the http point.
     const provider = new ethers.providers.Web3Provider(window.ethereum)
     //since our provider is connected to Metamask we need a signer
     const signer = provider.getSigner()
     //signer will return anywallet connected to the provider which is the metamask
     // we need ABI and address,of our contract create a file constants
     //go to the contract in question and get the Abi and run yarn hardhat node
     //copy the address like in our case fundMe address deployed at 0xfklaa....
     //go back to constant file and past it like export..
      const contract = new ethers.Contract(contractAddress, abi, signer)
      //lets run transaction
      const transactionResponse = await contract.fund({
        value: ethers.utils.parseEther(ethAmount),
    })

      

    
     
    }

 }