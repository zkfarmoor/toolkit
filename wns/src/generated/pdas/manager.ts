/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/kinobi-so/kinobi
 */

import {
  Address,
  ProgramDerivedAddress,
  fixEncoderSize,
  getBytesEncoder,
  getProgramDerivedAddress,
} from '@solana/web3.js';

export async function findManagerPda(
  config: { programAddress?: Address | undefined } = {}
): Promise<ProgramDerivedAddress> {
  const {
    programAddress = 'wns1gDLt8fgLcGhWi5MqAqgXpwEP1JftKE9eZnXS1HM' as Address<'wns1gDLt8fgLcGhWi5MqAqgXpwEP1JftKE9eZnXS1HM'>,
  } = config;
  return await getProgramDerivedAddress({
    programAddress,
    seeds: [
      fixEncoderSize(getBytesEncoder(), 7).encode(
        new Uint8Array([109, 97, 110, 97, 103, 101, 114])
      ),
    ],
  });
}
