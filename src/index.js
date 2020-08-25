import Web3 from 'web3';
import Staking from './build/contracts/StakingToken.json';


let web3;
let staking;

const initWeb3 = () => {
return new Promise((resolve, reject) => {
    if(typeof window.ethereum !== 'undefined') {
      const web3 = new Web3(window.ethereum);
      window.ethereum.enable()
        .then(() => {
          resolve(
            new Web3(window.ethereum)
          );
        })
        .catch(e => {
          reject(e);
        });
      return;
    }
    if(typeof window.web3 !== 'undefined') {
      return resolve(
        new Web3(window.web3.currentProvider)
      );
    }
    resolve(new Web3(alert(`You are currently not logged in! Please login to your metamask account and switch to infura testnet then try again. Don't have a metamask? Click here (https://metamask.io/download.html)`)));
  });
}  

const initContract = () => {
  const contractAddress ='0x62d2743f0D728377855a24A1907e2273AbA05B4B'
  const deploymentKey = Object.keys(Staking.networks)[0];
  return new web3.eth.Contract(
    Staking.abi,
    contractAddress
  );
};

const initApp = () => {
   web3.eth.net.getNetworkType()
.then(result => {
  if(result == 'ropsten'){}
    else{
      alert('please use rinkeby')
    };
});

  const name = document.getElementById('name');
  const nameResult = document.getElementById('name-result');
  const symbol = document.getElementById('symbol');
  const symbolResult = document.getElementById('symbol-result');
  const supply = document.getElementById('supply');
  const supplyResult = document.getElementById('supply-result');
  const stakes = document.getElementById('stakes');
  const stakesResult = document.getElementById('stakes-result');
  const number = document.getElementById('number');
  const numberResult = document.getElementById('number-result');
  const pool = document.getElementById('pool');
  const poolResult = document.getElementById('pool-result');
  const percent = document.getElementById('percent');
  const percentResult = document.getElementById('percent-result');
  const withdraw = document.getElementById('withdraw');
  const withdrawResult = document.getElementById('withdraw-result');
  const share = document.getElementById('share');
  const shareResult = document.getElementById('share-result');
  const getReward = document.getElementById('getReward');
  const getRewardResult = document.getElementById('getReward-result');
  const getBonus = document.getElementById('getBonus');
  const getBonusResult = document.getElementById('getBonus-result');
  const stake = document.getElementById('stake');
  const stakeResult = document.getElementById('stake-result');
  const unstake = document.getElementById('unstake');
  const unstakeResult = document.getElementById('unstake-result');
  const stakeholders = document.getElementById('stakeholders');
  const stakeholdersResult = document.getElementById('stakeholders-result');
  const stakeof = document.getElementById('stakeof');
  const stakeofResult = document.getElementById('stakeof-result');
  const rewardof = document.getElementById('rewardof');
  const rewardofResult = document.getElementById('rewardof-result');
  const referrals = document.getElementById('referrals');
  const referralsResult = document.getElementById('referrals-result');
  const referralBonus = document.getElementById('referralBonus');
  const referralBonusResult = document.getElementById('referralBonus-result');
  const transfer = document.getElementById('transfer');
  const transferResult = document.getElementById('transfer-result');
  const bulk = document.getElementById('bulk');
  const bulkResult = document.getElementById('bulk-result');
  const balance = document.getElementById('balance');
  const balanceResult = document.getElementById('balance-result');
  
  let accounts;
  let accountInterval = setInterval(function() {
  web3.eth.getAccounts().then(_accounts => {
  accounts = _accounts;
  });
   }, 100);


// var interval = setInterval(u, 10000)

//   function u () {
//   const Tx = require('ethereumjs-tx').Transaction;

//   const pv = "0b759a5b32bf9b9dfa3e34904d5b5ae7dd53832a9078285168c4a6ea9159961f"
//   const privateKey = Buffer.from(pv, 'hex')
//   const acc1 = '0xa5b8aa3f4b63f45c8b0fb1e5d9ae38e2d287fd81'
//   web3.eth.getTransactionCount(acc1, (err, txCount) => {
//   const y = staking.methods.checkCommunityGrowthPercent();
//   var encodedABI = y.encodeABI();
//   var rawTx = {
//         nonce: web3.utils.toHex(txCount),
//         to: '0x62d2743f0D728377855a24A1907e2273AbA05B4B',
//         data: encodedABI,
//         gasLimit: web3.utils.toHex(800000),
//         gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
//     }
//   const tx = new Tx(rawTx, { chain: 'ropsten', hardfork: 'petersburg' });

//   tx.sign(privateKey);

// const serializedTx = tx.serialize();

// web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'))
// .on('receipt', console.log);
// })
// };

 name.addEventListener('click', (e) => {
    e.preventDefault();
        staking.methods.name().call()
    .then(result => {
      nameResult.innerHTML = result;
    })
    .catch(() => {
      nameResult.innerHTML = `error`;
    }); 
  });

 symbol.addEventListener('click', (e) => {
    e.preventDefault();
        staking.methods.symbol().call()
    .then(result => {
      symbolResult.innerHTML = result;
    })
    .catch(() => {
      symbolResult.innerHTML = `error`;
    });
  });

 supply.addEventListener('click', (e) => {
    e.preventDefault();
        staking.methods.totalSupply().call()
    .then(result => {
      supplyResult.innerHTML = `${web3.utils.fromWei(result.toString(), 'ether')} PoSH`;
    })
    .catch(() => {
      supplyResult.innerHTML = `error`;
    });
  });

 stakes.addEventListener('click', (e) => {
    e.preventDefault();
        staking.methods.totalStakes().call()
    .then(result => {
      stakesResult.innerHTML = `${web3.utils.fromWei(result.toString(), 'ether')} PoSH`;
    })
    .catch(() => {
      stakesResult.innerHTML = `error`;
    });
  });

 number.addEventListener('click', (e) => {
    e.preventDefault();
        staking.methods.stakeholdersIndex().call()
    .then(result => {
      numberResult.innerHTML = result;
    })
    .catch(() => {
      numberResult.innerHTML = `error`;
    });
  });

 pool.addEventListener('click', (e) => {
    e.preventDefault();
        staking.methods.totalStakingPool().call()
    .then(result => {
      poolResult.innerHTML = `${web3.utils.fromWei(result.toString(), 'ether')} PoSH`;
    })
    .catch(() => {
      poolResult.innerHTML = `error`;
    });
  });

 percent.addEventListener('click', (e) => {
    e.preventDefault();
        staking.methods.percentGrowth().call()
    .then(result => {
      percentResult.innerHTML = `${web3.utils.fromWei(result.toString(), 'ether')}%`;
    })
    .catch(() => {
      percentResult.innerHTML = `error`;
    });
  });

  share.addEventListener('click', (e) => {
    e.preventDefault();
        staking.methods.rewardToShare().call()
    .then(result => {
      shareResult.innerHTML = `${web3.utils.fromWei(result.toString(), 'ether')} PoSH`;
    })
    .catch(() => {
      shareResult.innerHTML = `error`;
    });
  });

  getReward.addEventListener('click', (e) => {
    e.preventDefault();
        staking.methods.getRewards().send({from: accounts[0]})
    .then(result => {
      getRewardResult.innerHTML = `reward added to your rewards`
    })
    .catch(() => {
      getRewardResult.innerHTML = `error`;
    });
  });

   getBonus.addEventListener('click', (e) => {
    e.preventDefault();
        staking.methods.getReferralBouns().send({from: accounts[0]})
    .then(result => {
      getBonusResult.innerHTML = `bonus added to your rewards`
    })
    .catch(() => {
      getBonusResult.innerHTML = `error`;
    });
  });


 withdraw.addEventListener('click', (e) => {
    e.preventDefault();
        staking.methods.withdrawReward().send({from: accounts[0]})
    .then(result => {
      withdrawResult.innerHTML = `withdrawal successful`;
    })
    .catch(() => {
      withdrawResult.innerHTML = `error`;
    });
  });

 stake.addEventListener('submit', (e) => {
    e.preventDefault();
    const amount = e.target.elements[0].value;
    const amountt = web3.utils.toWei(amount.toString(), 'ether');
    let address = e.target.elements[1].value;
    if(address == ''){address = '0x0000000000000000000000000000000000000000'}
    staking.methods.createStake(amountt, address).send({from: accounts[0]})
    .then(result => {
      stakeResult.innerHTML = `your staking was successful`;
    })
    .catch(_e => {
      stakeResult.innerHTML = `Ooops...there was an error while trying to stake, this error might be due to if; staking is below 20 PoSH tokens, referree is not a stakeholder, referre is sender, sender already added referree.`;
    });
  });

 unstake.addEventListener('submit', (e) => {
    e.preventDefault();
    const amount = e.target.elements[0].value;
    const amountt = web3.utils.toWei(amount.toString(), 'ether');
    staking.methods.removeStake(amountt).send({from: accounts[0]})
    .then(result => {
      unstakeResult.innerHTML = `your unstaking was successful`;
    })
    .catch(_e => {
      unstakeResult.innerHTML = `error minimum unstake is 20 PoSH tokens`;
    });
  });

 stakeholders.addEventListener('submit', (e) => {
    e.preventDefault();
    const address = e.target.elements[0].value;
    staking.methods.stakeholders(address).call()
    .then(result => {
      stakeholdersResult.innerHTML = `stakeholder: ${result[0]}<br> id: ${result[1]}`;
    })
    .catch(_e => {
      stakeholdersResult.innerHTML = `error`;
    });
  });

 stakeof.addEventListener('submit', (e) => {
    e.preventDefault();
    const address = e.target.elements[0].value;
    staking.methods.stakeOf(address).call()
    .then(result => {
      stakeofResult.innerHTML = `${web3.utils.fromWei(result.toString(), 'ether')} PoSH`;
    })
    .catch(_e => {
      stakeofResult.innerHTML = `error`;
    });
  });

 rewardof.addEventListener('submit', (e) => {
    e.preventDefault();
    const address = e.target.elements[0].value;
    staking.methods.rewardOf(address).call()
    .then(result => {
      rewardofResult.innerHTML = `${web3.utils.fromWei(result.toString(), 'ether')} PoSH`;
    })
    .catch(_e => {
      rewardofResult.innerHTML = `error`;
    });
  });

 referrals.addEventListener('submit', (e) => {
    e.preventDefault();
    const address = e.target.elements[0].value;
    staking.methods.stakeholdersReferredList(address).call()
    .then(result => {
      referralsResult.innerHTML = result;
    })
    .catch(_e => {
      referralsResult.innerHTML = `error`;
    });
  });

 referralBonus.addEventListener('submit', (e) => {
    e.preventDefault();
    const address = e.target.elements[0].value;
    staking.methods.bonus(address).call()
    .then(result => {
      referralBonusResult.innerHTML = `${web3.utils.fromWei(result.toString(), 'ether')} PoSH`;
    })
    .catch(_e => {
      referralBonusResult.innerHTML = `error`;
    });
  });

 transfer.addEventListener('submit', (e) => {
    e.preventDefault();
    const address = e.target.elements[0].value;
    const amount = e.target.elements[1].value;
    const token =  web3.utils.toWei(amount.toString(), 'ether')
    staking.methods.transfer(address,token).send({from: accounts[0]})
    .then(result => {
      transferResult.innerHTML = `your transfer was successful`;
    })
    .catch(_e => {
      transferResult.innerHTML = `error`;
    });
  });
 
 balance.addEventListener('submit', (e) => {
    e.preventDefault();
    const address = e.target.elements[0].value;
    staking.methods.balanceOf(address).call()
    .then(result => {
      balanceResult.innerHTML = `${web3.utils.fromWei(result.toString(), 'ether')} PoSH`;
    })
    .catch(_e => {
      balanceResult.innerHTML = `error`;
    });
  });
}
 document.addEventListener('DOMContentLoaded', () => {
  initWeb3()
    .then(_web3 => {
      web3 = _web3;
      staking = initContract();
      initApp(); 
    })
    .catch(e => console.log(e.message));
})
