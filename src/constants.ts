import JSBI from 'jsbi'
import { AddressMap } from './types/AddressMap'

// @TODO change it to IXS deploy...
export const FACTORY_ADDRESS: AddressMap = {
  137: '0xc2D0e0bc81494adB71Ce9Aa350cC875DaE12D81D',
  42: '0x4983b160a8E0De9Cf6a055bd8750847DE3E14eE6',
  80001: '0xF8E10Dc0BEf764E0889F539b58fbDA00f7d9a2FD',
  1: '0x1111111111111111111111111111111111111111',
  3: '0x1111111111111111111111111111111111111111',
}
// init code hash, ref: periphery/contracts/libraries/IxsV2Library.sol#31
export const INIT_CODE_HASH = '0x972504bfd3259d3d8e5fc9fed5ec2ea5a969144c60dc7b3c0fd7091f7f40f435'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const FIVE = JSBI.BigInt(5)
export const _997 = JSBI.BigInt(997) // 0.3% fee
export const _990 = JSBI.BigInt(990) // 1% fee
export const _1000 = JSBI.BigInt(1000)
