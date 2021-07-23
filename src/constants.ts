import JSBI from 'jsbi'

// @TODO change it to IXS deploy...
export const FACTORY_ADDRESS = ''

// init code hash, ref: periphery/contracts/libraries/IxsV2Library.sol#31
export const INIT_CODE_HASH = '0x5b5f27619c22b9d433278bdddf4caf33ac5c632e64c01145eaab67751fae1cd7'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const FIVE = JSBI.BigInt(5)
export const _997 = JSBI.BigInt(997) // 0.3% fee
export const _990 = JSBI.BigInt(990) // 0.1% fee
export const _1000 = JSBI.BigInt(1000)
