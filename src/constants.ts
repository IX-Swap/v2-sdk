import JSBI from 'jsbi'

// @TODO change it to IXS deploy...
export const FACTORY_ADDRESS = '0xE83942dC9D244418272E6b7D83271D0BcFC0DB30'

// init code hash, ref: periphery/contracts/libraries/IxsV2Library.sol#31
export const INIT_CODE_HASH = '0x1041b70e515ac87fb2b62ca07d73429c08c150ef73420251a2789ef04460a382'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const FIVE = JSBI.BigInt(5)
export const _997 = JSBI.BigInt(997) // 0.3% fee
export const _990 = JSBI.BigInt(990) // 1% fee
export const _1000 = JSBI.BigInt(1000)
