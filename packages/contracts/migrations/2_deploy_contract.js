const SpatialAssets = artifacts.require("./SpatialAssets.sol");

module.exports = async function (deployer) {
  await deployer.deploy(SpatialAssets, "did:geo:{id}");

  const SpatialAssetsContract = await SpatialAssets.deployed();

  console.log(
    "Spatial Asset Registrar deployed at:",
    SpatialAssetsContract.address
  );

};
