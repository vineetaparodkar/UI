import { EIP4337Lib } from "soul-wallet-lib";
import { LOGIC_CONTRACT_ADDRESS, ZERO_ADDRESS } from "../config/Config";
import { guardianList } from "../config/Mock";
import config from "@src/config";
import BN from "bignumber.js";

export const calculateWalletAddress = (address) => {
  let guardianInitCode = getGuardianInitCode();
  return EIP4337Lib.calculateWalletAddress(
    LOGIC_CONTRACT_ADDRESS,
    ENTRYPOINT_CONTRACT_ADDRESS,
    address,
    UPGRADE_DELAY,
    GUARDIAN_DELAY,
    guardianInitCode.address,
    0,
    CREATE2_CONTRACT_ADDRESS
  );
};

export const getGuardianInitCode = () => {
  const response = EIP4337Lib.Guardian.calculateGuardianAndInitCode(
    GUARDIAN_LOGIC_CONTRACT_ADDRESS,
    guardianList,
    Math.round(guardianList.length / 2),
    GUARDIAN_SALT,
    CREATE2_CONTRACT_ADDRESS
  );
  return response;
};

export const getAccount = async () => {
  const response = await keyStore.getAddress();
  return response;
};

export const getGasPrice = async () => {
  const gas = await web3.eth.getGasPrice();
  const gasMultiplied = new BN(gas)
    .times(config.feeMultiplier)
    .integerValue()
    .toNumber();
  console.log("gas mul", gasMultiplied);
  return 10 * 10 ** 9;
};

const executeOperation = async (
  operation,
  actionName
) => {
  const requestId = operation.getUserOpHash(
    ENTRYPOINT_CONTRACT_ADDRESS,
    CHAIN_ID
  );

  const signature = await keyStore.sign(requestId);

  if (signature) {
    operation.signWithSignature(account, signature || "");

    // TODO, should wait for complete
    await Runtime.send("execute", {
      actionName,
      operation: JSON.stringify(operation),
      requestId,
    });

    return;
  }
};

const activateWallet = async () => {
  const actionName = "Activate Wallet";
  const currentFee = (await getGasPrice()) * FEE_MULTIPLIER;
  const account = await getAccount();
  const guardianInitCode = getGuardianInitCode();

  const activateOp = EIP4337Lib.activateWalletOp(
    LOGIC_CONTRACT_ADDRESS,
    ENTRYPOINT_CONTRACT_ADDRESS,
    account,
    UPGRADE_DELAY,
    GUARDIAN_DELAY,
    guardianInitCode.address,
    ZERO_ADDRESS,
    0,
    CREATE2_CONTRACT_ADDRESS,
    currentFee,
    currentFee
  );

  await executeOperation(activateOp, actionName);
};
