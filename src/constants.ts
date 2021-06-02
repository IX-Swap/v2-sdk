import JSBI from 'jsbi'

// @TODO change it to IXS deploy...
export const FACTORY_ADDRESS = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f'

// init code hash, ref: periphery/contracts/libraries/IxsV2Library.sol#31
export const INIT_CODE_HASH = '0x77b173365e035eb41ccf1c42c942ce4e2e6da707395a30a933109e236ece6a49'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const FIVE = JSBI.BigInt(5)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)
