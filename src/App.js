import React from 'react';
import cinSity from './assets/NIGHT_CASINO.png';
import foundersPass from './assets/foundersPass.gif'
import theyungestdyl from "./assets/theyungestdyl.jpg"
import SacaiahShaw from "./assets/SacaiahShaw.jpg"
import cypher from "./assets/cypher.jpg"
import Ryan from "./assets/Ryan.jpg"

import checked from "./assets/checked_checkbox.png"
import unchecked from "./assets/unchecked_checkbox.png"

function App(){
  return(
    <div class="w-screen">
      <div class="bg-night_casino bg-cover h-80 py-10">
        <div class="flex justify-center">
          <div class="flex justify-center w-fit text-center text-6xl text-twilight_lavender font-medium leading-tight bg-almost_twilight rounded-xl">
              Welcome to CinSity Dao!
          </div>
        </div>
      </div>
      <div class="bg-warped_plank font-sans text-almost_twilight text-2xl">
      
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-6 bg-inherit">
          
          <div
          class="flex justify-center"
          >
            <img class="object-contain rounded-xl" src={cinSity} alt="Cin Sity"></img>
        
          </div>

          <div
          class="flex justify-center text-left p-6"
          >
            <div class="container mx-auto">
              <div class="pb-6 text-4xl font-mono text-twilight_lavender">What is CinSity DAO?</div>
              <div>CinSity Casino, operating inside the NFTWorlds Metaverse, is a one-of-a-kind business focused on providing an immersive crypto-gaming experience that offers different casino themed games and skill-based games. By launching the CinSity DAO Founders Pass we aim to give CinSity Casino investors access to the CinSity DAO, an exclusive discord community, as well as exclusive perks throughout the development of this project. </div>
            </div>
          </div>

          <div
          class="flex justify-center p-6 row-span-3"
          >
            <div>
              <div class="pb-6 text-4xl font-mono text-twilight_lavender">Founder's Pass</div>
              <div class="pb-6">70% of all proceeds from the initial minting of our nft will be directed towards building, developing, and launching CinSity Casino when NFTWorlds Multiplayer is live on their WorldPlayer DApp</div>
              <div class="pb-6">CinSity DAO Founders Pass is the only NFT that provides the holder with access to the CinSity DAO and in turn a share of its Community Wallet - with CinSity Casino depositing profits monthly.</div>
              <div class="pb-6">Each user’s individual ownership of the CinSity DAO is verified on the blockchain; similar to someone’s ownership stake in a publicly listed company being verified through stock ownership</div>
            </div>
          </div>

          <div class="justify-center text-twilight_lavender text-center">
            <div class="p-6">
              <a href="https://cinsitydao.gitbook.io/cinsity-dao/" target="blank" class="underline decoration-2 text-4xl font-mono">View Our Documentation!</a>
            </div>
            <button 
            class="p-6 bg-almost_twilight rounded-xl"
            onClick={event =>  window.open("https://opensea.io/collection/cinsity-dao-founders-pass")}
            >Purchase On Opensea!</button>          
          </div>

          <div
          class="flex justify-center row-span-2"
          >
            <img class="object-contain rounded-xl" src={foundersPass} alt="Founders Pass"></img>
          </div>
        </div>

        <div
        class="bg-purpur_block rounded-xl p-6"
        >
          <div class="pb-6 flex justify-center text-4xl font-mono">Meet The Founders!</div>
          <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-3 2xl:gap-64 p-6">
            <div>
              <img class="flex justify-center pb-3 rounded-full" src={theyungestdyl} alt="theyungestdyl"></img>
              <a href="https://twitter.com/theyungestdyl" target="blank" class="flex justify-center font-mono text-almost_lavender">theyungestdyl</a>
            </div>
            <div>
              <img class="flex justify-center pb-3 rounded-full" src={cypher} alt="cypher"></img>
              <a href="https://twitter.com/Cypher__tr" target="blank" class="flex justify-center ont-mono text-almost_lavender">Cypher_tr</a>
            </div>
            <div>
              <img class="flex justify-center  pb-3 rounded-full" src={SacaiahShaw} alt="SacaiahShaw"></img>
              <a href="https://twitter.com/SacaiahShaw" target="blank" class="flex justify-center font-mono text-almost_lavender">SacaiahShaw</a>
            </div>
            <div>
              <img class="flex justify-center pb-3 rounded-full" src={Ryan} alt="Ryan"></img>
              <a href="https://twitter.com/RyanWel77164418" target="blank" class="flex justify-center font-mono text-almost_lavender">Ryan</a>
            </div>
          </div>
        </div>






        <div class="bg-dark_prismarine rounded-xl p-6">
          <a href="https://cinsitydao.gitbook.io/cinsity-dao/roadmap" target="blank" class=" underline decoration-2 flex justify-center text-4xl font-mono text-twilight_lavender">Road Map</a>
          
          <div class="text-twilight_lavender">
            PHASE ONE: 
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-6 bg-inherit">

          <div>
            <div class="text-twilight_lavender">
            ✅ Inital Mint:
            </div>
            <div>
            Get 100 verified users in CinSity Casino NFTs discord server. Once these 100 users are in the server, minting of the CinSity Casino NFTs will begin. 
            </div>
          </div>

          <div>
            <div class="text-twilight_lavender">✅ Wave 1: ($350)</div>
            <div>DAO Founders Passes will be released for purchase from our official CinSity-Vault OpenSea account. These NFTs will have CinSityDAO access and exclusive benefits available ONLY to these holders For example; Exclusive discord roles, rewards within CinSity Casino, as well as beta access to CinSity Casino before public release </div>
          </div>

          <div>
            <div class="text-twilight_lavender">❌ Wave 2: ($450)</div>
            <div>
            1500 CinSity DAO Founders Passes will be released for purchase from our official CinSity-Vault OpenSea account once all "Wave 1" NFTs are purchased. Wave 2 NFTs will have CinSityDAO access and exclusive benefits available ONLY to these holders.
            </div>
          </div>

          <div>
            <div class="text-twilight_lavender">❌ Wave 3: ($550)</div>
            <div>2250 CinSity DAO Founders Passes will be released for purchase from our official CinSity-Vault Open Sea account, granting access to the CinSityDAO, after all "Wave 2" NFTs are purchased</div>
          </div>

          <div>
            <div class="text-twilight_lavender">❌ CinSity DAO:</div>
            <div>
            Establish the CinSityDAO after all 7500 CinSity DAO Founders Passes have been minted. All NFTs will exist on the Polygon blockchain. We do not want gas to get in the way of this opportunity.
            </div>
          </div>

          <div>
            <div class="text-twilight_lavender">
              Note: 
            </div>
            <div>
            70% OF ALL PROCEEDS FROM THE INITIAL MINTING OF OUR NFT WILL BE DIRECTED TOWARDS BUILDING, DEVELOPING, AND LAUNCHING CinSity Casino WHEN NFTWorlds MULTIPLAYER IS LIVE ON THEIR WORLDPLAYER dAPP. THE REMAINING 30% OF PROCEEDS WILL GO DIRECTLY INTO THE CinSityDAO COMMUNITY WALLET.
            </div>
          </div>
          </div>


          <div class="text-twilight_lavender">
            PHASE TWO: 
          </div>

          <div class="pt-6">
          After all CinSity DAO Founders passes are purchased, NFT holders will receive access to the CinSity DAO.
          </div>

          <div class="pt-6">
          All NFT holders are entitled to a share of the CinSityDAO Wallet regardless of which pass you own The CinSityDao Wallet will hold 30% of all monthly CinSity Casino profits  
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-6 bg-inherit">

          <div>
            <div class="text-twilight_lavender">
            ❌ Monthly Reports:
            </div>
            <div>
            ALL NFT HOLDERS WILL HAVE EXCLUSIVE ACCESS TO MONTHLY BUSINESS REPORTS ON CASINO REVENUE, PROFIT, COSTS, AND ALL OTHER BUSINESS-RELATED INFO AVAILABLE IN OUR DISCORD SERVER.
            </div>
          </div>

          <div>
            <div class="text-twilight_lavender">❌ Staking:</div>
            <div>Staking of the CinSity Founders Pass begins. </div>
          </div>
          </div>

        </div>








        <div class="bg-warped_wart rounded-xl p-6">
          <a href="https://cinsitydao.gitbook.io/cinsity-dao/faq" target="blank" class=" underline decoration-2 flex justify-center text-4xl font-mono text-twilight_lavender">FAQ</a>
          
          <div class="flex justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-6 bg-inherit">

          <div>
            <div class="text-twilight_lavender text-3xl">
            How do I get the Polygon Network on my Metamask? 
            </div>
            <div>
            - A: <a href="https://docs.polygon.technology/docs/develop/metamask/config-polygon-on-metamask/" target="blank" class="underline decoration-2">https://docs.polygon.technology/docs/develop/metamask/config-polygon-on-metamask/</a>
            </div>
          </div>

          <div>
            <div class="text-twilight_lavender text-3xl">How can I get wETH on Open Sea?</div>
            - A: <a href="https://www.youtube.com/watch?v=Vi_4tPJUWdQ&list=LL&index=3" target="blank" class="underline decoration-2">https://www.youtube.com/watch?v=Vi_4tPJUWdQ&list=LL&index=3</a>          
            </div>

          <div class="row-span-3">
            <div class="text-twilight_lavender text-3xl">How do I get Matic on the Polygon (Matic) Network?</div>
            -A: After converting your Eth to wEth on OpenSea, you need to bridge the wEth on the Ethereum Network to the Polygon Network. In order to do that you need Matic on Polygon Network. It is pretty difficult to directly get Matic but Polygon has made it much easier to bridge from network to network on their website <a href="https://wallet.polygon.technology/bridge/" target="blank" class="underline decoration-2">https://wallet.polygon.technology/bridge/</a>.
            <div class="pt-6">
            Once you connect your MetaMask to the Polygon Wallet, you can see the section on the left-hand side for "Swap For Gas Token". This lets you convert your wEth on Ethereum Network to Matic on Polygon Network to only use it for gas fees. More info on <a href="https://blog.polygon.technology/swap-for-gas-get-matic-token-on-polygon-pos-in-a-flash/" target="blank" class="underline decoration-2">https://blog.polygon.technology/swap-for-gas-get-matic-token-on-polygon-pos-in-a-flash/</a>.
            Once you get Matic you can go to the bridging section and deposit your wEth from Ethereum Network to Polygon Network gas-less. 
            </div>
          </div>

          <div>
            <div class="text-twilight_lavender text-3xl">How many passes are total in Wave 1?</div>
            <div>-A: There are 1500 passes total. 1400 for purchase and 100 passes given away to our Early Supporters members.</div>
          </div>

          <div>
            <div class="text-twilight_lavender text-3xl">How does minting work?</div>
            <div>
            -A: All Wave 1 Founders Passes are initially on sale from us on Open Sea! We have linked our official vault account in #mint in our discord (<a href="https://opensea.io/collection/cinsity-dao-founders-pass" target="blank" class="underline decoration-2">https://opensea.io/collection/cinsity-dao-founders-pass</a>). If you qualify for a Whitelist discounted mint, we will manually list WL discounted passes on OS for your specific wallet address. We will then specify which passes have been listed for you.
            </div>
          </div>

          <div>
            <div class="text-twilight_lavender text-3xl">What games will be offered inside the casino?</div>
            <div>-A: Upon launch roulette and blackjack will be offered. Eventually, we will also offer poker, dice, slots, sports betting, real-life betting, and more!</div>
          </div>

          <div>
            <div class="text-twilight_lavender text-3xl">What happens to the 30% of casino profits held within CinSity DAO?</div>
            <div>-A: Members of the DAO will vote on the allocation of these funds. This is the beauty of the DAO.</div>
          </div>

          <div class="">
            <div class="text-twilight_lavender text-3xl">How will CinSity DAO distributions to Founders Pass holders work?</div>
            <div>-A: DAO members will vote on how the money in the wallet is spent. One of the options members can vote on is a “dividend style payout.” This means DAO members could vote to receive their share of casino profits, paid directly to them. BUT this is not the only possibility. Since it is a DAO we want members to have the ability to propose other ideas. These can include investing in a crypto asset to hold, buying another NFT to flip, etc. Each month our community will be able to decide how the DAO wallet is spent.</div>
          </div>
          </div>
          </div>
         



          <div class="bg-blackstone_brick p-6">
          <a href="https://cinsitydao.gitbook.io/cinsity-dao/faq" target="blank" class=" underline decoration-2 flex justify-center text-4xl font-mono text-twilight_lavender">Contracts and Addresses</a>

              <div class="pt-6 flex justify-center">
              The official Verified Custom Contract of all CinSity DAO Founders Passes on Polygon.
              </div>
              <a href="https://polygonscan.com/address/0x8f392bda5d1fc9d6076894295aeff9207d218d82" target="blank" class="underline decoration-2 flex justify-center text-4xl font-mono text-twilight_lavender pt-4 break-all">0x8f392bda5d1fc9d6076894295aeff9207d218d82</a>

              <div class="pt-6 flex justify-center">
              The DAO Wallet that currently holds 30% of mint sales and will eventually hold 30% of CinSity Casino's monthly profit.
              </div>
              <a href="https://polygonscan.com/address/0xa1d3cb83d9ee35d2018ee98a3abf54d330b0f5af" target="blank" class="underline decoration-2 flex justify-center text-4xl font-mono text-twilight_lavender pt-4 break-all">0xa1d3cb83d9ee35d2018ee98a3abf54d330b0f5af</a>

              <div class="pt-6 flex justify-center">
              The creator of the Verified Custom Contract of all CinSity Founders Passes
              </div>
              <a href="https://polygonscan.com/address/0x9b61a1aaa934808adb8753f4bde57d324ba064a5" target="blank" class="underline decoration-2 flex justify-center text-4xl font-mono text-twilight_lavender pt-4 break-all">0x9b61a1aaa934808adb8753f4bde57d324ba064a5</a>
              
          </div>






      </div>
    </div>
  )
}

export default App;
