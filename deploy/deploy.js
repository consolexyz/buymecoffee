const { Wallet } = require("zksync-web3");
const ethers = require("ethers");
const { Deployer } = require("@matterlabs/hardhat-zksync-deploy");

module.exports = async function (hre) {
  console.log(`Running deploy script for the BuyMeCoffee contract`);

  const wallet = new Wallet(process.env.PRIVATE_KEY);

  const deployer = new Deployer(hre, wallet);
  const artifact = await deployer.loadArtifact("BuyMeCoffee");


  // const deploymentFee = await deployer.estimateDeployFee(artifact);


  // const parsedFee = ethers.utils.formatEther(deploymentFee.toString());
  // console.log(`The deployment is estimated to cost ${parsedFee} ETH`);

  const buymecoffeeContract = await deployer.deploy(artifact);


  const contractAddress = buymecoffeeContract.address;
  console.log(`${artifact.contractName} was deployed to ${contractAddress}`);
};



//0xc99632aA6D711421eB5997eaD592aEc1d6827D5a