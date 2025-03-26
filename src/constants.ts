import JSBI from 'jsbi'
import { AddressMap } from './types/AddressMap'

// @TODO change it to IXS deploy...
export const FACTORY_ADDRESS: AddressMap = {
  137: '0xc2D0e0bc81494adB71Ce9Aa350cC875DaE12D81D',
  42: '0x4983b160a8E0De9Cf6a055bd8750847DE3E14eE6',
  80001: '0xF8E10Dc0BEf764E0889F539b58fbDA00f7d9a2FD',
  80002: '0xA9f8EB060f36ECa31a05C3920A78883f7F650312',
  84532: '0x9aA5f0Fab0D7F13ff528a0d637DE343cf23A0218',
  8453: '0x2eE28d1Bbc2EcB1fFDB83E8055d585E9F0fb757f',
  153: '0xFe4ed79689cB4aDF76A419C1f027A7671c37c179',
  1: '0x1111111111111111111111111111111111111111',
  3: '0x1111111111111111111111111111111111111111'
}
// init code hash, ref: periphery/contracts/libraries/IxsV2Library.sol#31
export const INIT_CODE_HASH = '0x972504bfd3259d3d8e5fc9fed5ec2ea5a969144c60dc7b3c0fd7091f7f40f435'
export const NEW_INIT_CODE_HASH = '0x68fc96abe1f9bdcc7a94b4c21b85f09e490c16b2d8160956269fb24dfb3eef64'
export const REDBELLY_INIT_CODE_HASH = '0x0c05bbe629be65556aad21aa1da0609d3bd6216e4c1d84a360a0d478e8d230d8'

export const INIT_CODE_HASH_BY_CHAINID: AddressMap = {
  137: INIT_CODE_HASH,
  42: INIT_CODE_HASH,
  80001: INIT_CODE_HASH,
  80002: NEW_INIT_CODE_HASH,
  84532: NEW_INIT_CODE_HASH,
  8453: NEW_INIT_CODE_HASH,
  153: REDBELLY_INIT_CODE_HASH,
  1: INIT_CODE_HASH,
  3: INIT_CODE_HASH
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const FIVE = JSBI.BigInt(5)
export const _997 = JSBI.BigInt(997) // 0.3% fee
export const _990 = JSBI.BigInt(990) // 1% fee
export const _1000 = JSBI.BigInt(1000)
