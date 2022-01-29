import React from 'react';
import cinSity from './assets/cinsity.png';
import foundersPass from './assets/foundersPass.gif'
import theyungestdyl from "./assets/theyungestdyl.jpg"
import SacaiahShaw from "./assets/SacaiahShaw.jpg"
import cypher from "./assets/cypher.jpg"
import Ryan from "./assets/Ryan.jpg"

function App(){
  return(
    <div class="bg-gunmetal container mx-auto font-sans text-almost_twilight text-2xl">

      <div class="flex justify-center text-center text-6xl text-twilight_lavender font-medium leading-tight mt-0 mb-2 py-10">
        Welcome to CinSity Dao!
      </div>
    
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

        <div class="flex justify-center text-twilight_lavender text-center">
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
      class="border-2 border-grullo-300 rounded-xl p-6"
      >
        <div class="pb-6 flex justify-center text-4xl font-mono text-twilight_lavender">Meet The Founders!</div>
        <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6 p-6">
          <div>
            <img class="pb-3 rounded-full" src={theyungestdyl} alt="theyungestdyl"></img>
            <a href="https://twitter.com/theyungestdyl" target="blank" class="pb-6 flex justify-center text-4xl font-mono text-almost_lavender">theyungestdyl</a>
          </div>
          <div>
            <img class="pb-3 rounded-full" src={cypher} alt="cypher"></img>
            <a href="https://twitter.com/Cypher__tr" target="blank" class="pb-6 flex justify-center text-4xl font-mono text-almost_lavender">Cypher_tr</a>
          </div>
          <div>
            <img class="pb-3 rounded-full" src={SacaiahShaw} alt="SacaiahShaw"></img>
            <a href="https://twitter.com/SacaiahShaw" target="blank" class="pb-6 flex justify-center text-4xl font-mono text-almost_lavender">SacaiahShaw</a>
          </div>
          <div>
            <img class="pb-3 rounded-full" src={Ryan} alt="Ryan"></img>
            <a href="https://twitter.com/RyanWel77164418" target="blank" class="pb-6 flex justify-center text-4xl font-mono text-almost_lavender">Ryan</a>
          </div>
        </div>
      </div>

    </div>
    
  )
}

export default App;
