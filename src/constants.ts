import JSBI from 'jsbi'

// @TODO change it to IXS deploy...
export const FACTORY_ADDRESS = '0x209290A4F4e01affD0AfFc44a11a843534039CF9'

// init code hash, ref: periphery/contracts/libraries/IxsV2Library.sol#31
export const INIT_CODE_HASH = '0x7ee9291a0e1924070b131d5ab24a985787e8f5958284a541fd19c8c365755a79'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const FIVE = JSBI.BigInt(5)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)
