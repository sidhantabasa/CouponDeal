import React from 'react';
import logo from './images/cd_logo.png';

function UserCard({ data, itemId, removeItem }) {
  const handleRemove = () => {
    removeItem(itemId);
  };

  return (
    <div className="items-center">
      <div className="bg-[#181e24] p-2 pl-5 text-white w-56 mx-4 rounded-md rounded-t-xl">
        <div className="flex mt-5">
          <img
            src={logo}
            alt="bg"
            className="object-cover h-10 w-14 rounded-md"
          />
          <div>
            <h1 className="font-bold">Offer {data.offer} off</h1>
            <h1 className="pl-2 text-sm">on {data.brandname}</h1>
          </div>
        </div>
        <hr className="mt-3 w-40 ml-3" />
        <div className="mt-3 text-sm">
          <h1 className="font-medium">Terms and conditions</h1>
          <ol className="mt-2 mr-3 text-xs">
            <li>1. Offer Valid on official sites only</li>
            <li>2. This offer cannot be clubbed with any other offer</li>
            <li>3. Minimum spend {data.minimumAmt}Rs.</li>
            <li>4. Validity {data.validity}</li>
          </ol>
        </div>
      </div>

      <div className="flex w-[248px] bg-[#181e24] rounded-full mx-1">
        <div className="bg-[#2a323c] h-8 w-8 rounded-full"></div>
        <div className="text-white text-center w-48">----------------------</div>
        <div className="bg-[#2a323c] h-8 w-8 rounded-full items-end"></div>
      </div>

      <div className="bg-[#181e24] h-16 w-56 ml-4 rounded-md rounded-b-xl py-2 px-12">
        <button
          className="px-2 m-2 w-28 h-8 text-center text-white cursor-pointer bg-red-500 rounded-md shadow-sm hover:bg-red-700"
          onClick={handleRemove}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default UserCard;
