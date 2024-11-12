/**
 * This code was AUTOGENERATED using the codama library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun codama to update it.
 *
 * @see https://github.com/codama-idl/codama
 */

import {
  combineCodec,
  getEnumDecoder,
  getEnumEncoder,
  type Codec,
  type Decoder,
  type Encoder,
} from '@solana/web3.js';

export enum TokenState {
  Unlocked,
  Locked,
  Listed,
}

export type TokenStateArgs = TokenState;

export function getTokenStateEncoder(): Encoder<TokenStateArgs> {
  return getEnumEncoder(TokenState);
}

export function getTokenStateDecoder(): Decoder<TokenState> {
  return getEnumDecoder(TokenState);
}

export function getTokenStateCodec(): Codec<TokenStateArgs, TokenState> {
  return combineCodec(getTokenStateEncoder(), getTokenStateDecoder());
}
