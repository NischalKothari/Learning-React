import React from 'react';

function Card({username = "default name", age = 20, price = 500}) {
    console.log(username,age,price);
    
    return ( 
        <>
        <div className = "m-2"></div>
        <div className="w-60 flex flex-col rounded-xl bg-black min-h-[19rem] ">
        <div>
          <img
            src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
            alt="test"
            className="object-cover object-center rounded-t-xl"
          />
        </div>
        <div className="flex flex-col py-3 px-3 pb-10 text-white">
          <div className="flex justify-between ">
            <h1 className="font-bold ">{username }</h1>
            <h1>Price</h1>
          </div>
          <div className="flex  justify-between">
            <p>{age }</p>
            <p>{price }</p>
          </div>
        </div>
      </div>
        </>
     );
}

export default Card;
