import JSBI from 'jsbi'

// @TODO change it to IXS deploy...
export const FACTORY_ADDRESS = '0x0b8bF935F597d3D7f43180eF40eb370d9EFf91A1'

// init code hash, ref: periphery/contracts/libraries/IxsV2Library.sol#31
export const INIT_CODE_HASH = '0x1e336e731fbd63ef3c94abb119c871141c9e1220f95928bbbf3d070b64c86fea'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const FIVE = JSBI.BigInt(5)
export const _997 = JSBI.BigInt(997) // 0.3% fee
export const _990 = JSBI.BigInt(990) // 0.1% fee
export const _1000 = JSBI.BigInt(1000)
