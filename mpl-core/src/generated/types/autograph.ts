/**
 * This code was AUTOGENERATED using the codama library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun codama to update it.
 *
 * @see https://github.com/codama-idl/codama
 */

import {
  combineCodec,
  getArrayDecoder,
  getArrayEncoder,
  getStructDecoder,
  getStructEncoder,
  type Codec,
  type Decoder,
  type Encoder,
} from '@solana/web3.js';
import {
  getAutographSignatureDecoder,
  getAutographSignatureEncoder,
  type AutographSignature,
  type AutographSignatureArgs,
} from '.';

export type Autograph = { signatures: Array<AutographSignature> };

export type AutographArgs = { signatures: Array<AutographSignatureArgs> };

export function getAutographEncoder(): Encoder<AutographArgs> {
  return getStructEncoder([
    ['signatures', getArrayEncoder(getAutographSignatureEncoder())],
  ]);
}

export function getAutographDecoder(): Decoder<Autograph> {
  return getStructDecoder([
    ['signatures', getArrayDecoder(getAutographSignatureDecoder())],
  ]);
}

export function getAutographCodec(): Codec<AutographArgs, Autograph> {
  return combineCodec(getAutographEncoder(), getAutographDecoder());
}
