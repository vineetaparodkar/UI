//Bundler & RPC configs
export const BUNDLER_URL = process.env.BUNDLER_URL;
export const RPC_URL = process.env.RPC_URL;
export const CHAIN_ID = process.env.CHAIN_ID;

//Contract configs
export const LOGIC_CONTRACT_ADDRESS = process.env.LOGIC_CONTRACT_ADDRESS;
export const GUARDIAN_LOGIC_CONTRACT_ADDRESS =
  process.env.GUARDIAN_LOGIC_CONTRACT_ADDRESS;
export const ENTRYPOINT_CONTRACT_ADDRESS =
  process.env.ENTRYPOINT_CONTRACT_ADDRESS;
export const PAYMASTER_CONTRACT_ADDRESS =
  process.env.PAYMASTER_CONTRACT_ADDRESS;
export const CREATE2_CONTRACT_ADDRESS = process.env.CREATE2_CONTRACT_ADDRESS;
export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

//Account abstraction guardian configs
export const DEFAULT_SALT = process.env.DEFAULT_SALT;
export const FEE_MULTIPLIER = process.env.FEE_MULTIPLIER;
export const DEFAULT_TIP = process.env.DEFAULT_TIP;
export const UPGRADE_DELAY = process.env.UPGRADE_DELAY;
export const GUARDIAN_DELAY = process.env.GUARDIAN_DELAY;
export const GUARDIAN_SALT = process.env.GUARDIAN_SALT;

//API configs
export const API_BASE_URL = process.env.API_BASE_URL;
