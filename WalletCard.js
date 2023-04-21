// import { ethers } from 'ethers';
// import React, {useState} from 'react'

// const WalletCard = () => {

//     const [errorMessage, setErrorMessage] = useState(null);
//     const [defaultAccount, setDefaultAccount] = useState(null);
//     const [userBalance, setUserBalance] = useState(null);

//     const accountChangedHandler = (newAccount) => {
//         setDefaultAccount(newAccount);
//         getUserBalance(newAccount.toString());
//     }

//     const getUserBalance = (address) => {
//         window.ethereum.request({method: 'eht_getBalance', params: [address, 'latest']})
//         .then(balance => {
//             setUserBalance(ethers.utils.formatEther(balance));
//         })
//     }

//     window.ethereum.on('accountsChanged', accountChangedHandler);

//     return (
//     <div className='WalletCard'>
//         <div className='accountDisplay'>
//             <h3>Address: {defaultAccount} </h3>
//         </div>
//         <div>
//             <h3>Balance: {userBalance} </h3>
//         </div>
//         {errorMessage}
//     </div>
//     )
// }

// export default WalletCard;