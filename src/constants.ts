import JSBI from 'jsbi'

// @TODO change it to IXS deploy...
export const FACTORY_ADDRESS = '0x85Af0Af2a25392641d477339CE9c3C26845BF271'

// init code hash, ref: periphery/contracts/libraries/IxsV2Library.sol#31
export const INIT_CODE_HASH = '0x39dc286d0caad217e8a8d19b90b20758bdfc6adf57e11ce69baa497b7dabebb5'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const FIVE = JSBI.BigInt(5)
export const _997 = JSBI.BigInt(997) // 0.3% fee
export const _990 = JSBI.BigInt(990) // 0.1% fee
export const _1000 = JSBI.BigInt(1000)
