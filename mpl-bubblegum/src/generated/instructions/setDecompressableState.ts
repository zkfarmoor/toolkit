/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/kinobi-so/kinobi
 */

import {
  Address,
  Codec,
  Decoder,
  Encoder,
  IAccountMeta,
  IAccountSignerMeta,
  IInstruction,
  IInstructionWithAccounts,
  IInstructionWithData,
  ReadonlySignerAccount,
  ReadonlyUint8Array,
  TransactionSigner,
  WritableAccount,
  combineCodec,
  fixDecoderSize,
  fixEncoderSize,
  getBytesDecoder,
  getBytesEncoder,
  getStructDecoder,
  getStructEncoder,
  transformEncoder,
} from '@solana/web3.js';
import { BUBBLEGUM_PROGRAM_ADDRESS } from '../programs';
import { ResolvedAccount, getAccountMetaFactory } from '../shared';
import {
  DecompressibleState,
  DecompressibleStateArgs,
  getDecompressibleStateDecoder,
  getDecompressibleStateEncoder,
} from '../types';

export type SetDecompressableStateInstruction<
  TProgram extends string = typeof BUBBLEGUM_PROGRAM_ADDRESS,
  TAccountTreeAuthority extends string | IAccountMeta<string> = string,
  TAccountTreeCreator extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountTreeAuthority extends string
        ? WritableAccount<TAccountTreeAuthority>
        : TAccountTreeAuthority,
      TAccountTreeCreator extends string
        ? ReadonlySignerAccount<TAccountTreeCreator> &
            IAccountSignerMeta<TAccountTreeCreator>
        : TAccountTreeCreator,
      ...TRemainingAccounts,
    ]
  >;

export type SetDecompressableStateInstructionData = {
  discriminator: ReadonlyUint8Array;
  decompressableState: DecompressibleState;
};

export type SetDecompressableStateInstructionDataArgs = {
  decompressableState: DecompressibleStateArgs;
};

export function getSetDecompressableStateInstructionDataEncoder(): Encoder<SetDecompressableStateInstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([
      ['discriminator', fixEncoderSize(getBytesEncoder(), 8)],
      ['decompressableState', getDecompressibleStateEncoder()],
    ]),
    (value) => ({
      ...value,
      discriminator: new Uint8Array([18, 135, 238, 168, 246, 195, 61, 115]),
    })
  );
}

export function getSetDecompressableStateInstructionDataDecoder(): Decoder<SetDecompressableStateInstructionData> {
  return getStructDecoder([
    ['discriminator', fixDecoderSize(getBytesDecoder(), 8)],
    ['decompressableState', getDecompressibleStateDecoder()],
  ]);
}

export function getSetDecompressableStateInstructionDataCodec(): Codec<
  SetDecompressableStateInstructionDataArgs,
  SetDecompressableStateInstructionData
> {
  return combineCodec(
    getSetDecompressableStateInstructionDataEncoder(),
    getSetDecompressableStateInstructionDataDecoder()
  );
}

export type SetDecompressableStateInput<
  TAccountTreeAuthority extends string = string,
  TAccountTreeCreator extends string = string,
> = {
  treeAuthority: Address<TAccountTreeAuthority>;
  treeCreator: TransactionSigner<TAccountTreeCreator>;
  decompressableState: SetDecompressableStateInstructionDataArgs['decompressableState'];
};

export function getSetDecompressableStateInstruction<
  TAccountTreeAuthority extends string,
  TAccountTreeCreator extends string,
>(
  input: SetDecompressableStateInput<TAccountTreeAuthority, TAccountTreeCreator>
): SetDecompressableStateInstruction<
  typeof BUBBLEGUM_PROGRAM_ADDRESS,
  TAccountTreeAuthority,
  TAccountTreeCreator
> {
  // Program address.
  const programAddress = BUBBLEGUM_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    treeAuthority: { value: input.treeAuthority ?? null, isWritable: true },
    treeCreator: { value: input.treeCreator ?? null, isWritable: false },
  };
  const accounts = originalAccounts as Record<
    keyof typeof originalAccounts,
    ResolvedAccount
  >;

  // Original args.
  const args = { ...input };

  const getAccountMeta = getAccountMetaFactory(programAddress, 'programId');
  const instruction = {
    accounts: [
      getAccountMeta(accounts.treeAuthority),
      getAccountMeta(accounts.treeCreator),
    ],
    programAddress,
    data: getSetDecompressableStateInstructionDataEncoder().encode(
      args as SetDecompressableStateInstructionDataArgs
    ),
  } as SetDecompressableStateInstruction<
    typeof BUBBLEGUM_PROGRAM_ADDRESS,
    TAccountTreeAuthority,
    TAccountTreeCreator
  >;

  return instruction;
}

export type ParsedSetDecompressableStateInstruction<
  TProgram extends string = typeof BUBBLEGUM_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    treeAuthority: TAccountMetas[0];
    treeCreator: TAccountMetas[1];
  };
  data: SetDecompressableStateInstructionData;
};

export function parseSetDecompressableStateInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedSetDecompressableStateInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 2) {
    // TODO: Coded error.
    throw new Error('Not enough accounts');
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts![accountIndex]!;
    accountIndex += 1;
    return accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: {
      treeAuthority: getNextAccount(),
      treeCreator: getNextAccount(),
    },
    data: getSetDecompressableStateInstructionDataDecoder().decode(
      instruction.data
    ),
  };
}