/**
 * This code was AUTOGENERATED using the codama library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun codama to update it.
 *
 * @see https://github.com/codama-idl/codama
 */

import {
  combineCodec,
  fixDecoderSize,
  fixEncoderSize,
  getBytesDecoder,
  getBytesEncoder,
  getStructDecoder,
  getStructEncoder,
  transformEncoder,
  type Address,
  type Codec,
  type Decoder,
  type Encoder,
  type IAccountMeta,
  type IAccountSignerMeta,
  type IInstruction,
  type IInstructionWithAccounts,
  type IInstructionWithData,
  type ReadonlyAccount,
  type ReadonlySignerAccount,
  type ReadonlyUint8Array,
  type TransactionSigner,
  type WritableAccount,
} from '@solana/web3.js';
import { SPL_ACCOUNT_COMPRESSION_PROGRAM_ADDRESS } from '../programs';
import { getAccountMetaFactory, type ResolvedAccount } from '../shared';

export const APPEND_DISCRIMINATOR = new Uint8Array([
  149, 120, 18, 222, 236, 225, 88, 203,
]);

export function getAppendDiscriminatorBytes() {
  return fixEncoderSize(getBytesEncoder(), 8).encode(APPEND_DISCRIMINATOR);
}

export type AppendInstruction<
  TProgram extends string = typeof SPL_ACCOUNT_COMPRESSION_PROGRAM_ADDRESS,
  TAccountMerkleTree extends string | IAccountMeta<string> = string,
  TAccountAuthority extends string | IAccountMeta<string> = string,
  TAccountNoop extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountMerkleTree extends string
        ? WritableAccount<TAccountMerkleTree>
        : TAccountMerkleTree,
      TAccountAuthority extends string
        ? ReadonlySignerAccount<TAccountAuthority> &
            IAccountSignerMeta<TAccountAuthority>
        : TAccountAuthority,
      TAccountNoop extends string
        ? ReadonlyAccount<TAccountNoop>
        : TAccountNoop,
      ...TRemainingAccounts,
    ]
  >;

export type AppendInstructionData = {
  discriminator: ReadonlyUint8Array;
  leaf: ReadonlyUint8Array;
};

export type AppendInstructionDataArgs = { leaf: ReadonlyUint8Array };

export function getAppendInstructionDataEncoder(): Encoder<AppendInstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([
      ['discriminator', fixEncoderSize(getBytesEncoder(), 8)],
      ['leaf', fixEncoderSize(getBytesEncoder(), 32)],
    ]),
    (value) => ({ ...value, discriminator: APPEND_DISCRIMINATOR })
  );
}

export function getAppendInstructionDataDecoder(): Decoder<AppendInstructionData> {
  return getStructDecoder([
    ['discriminator', fixDecoderSize(getBytesDecoder(), 8)],
    ['leaf', fixDecoderSize(getBytesDecoder(), 32)],
  ]);
}

export function getAppendInstructionDataCodec(): Codec<
  AppendInstructionDataArgs,
  AppendInstructionData
> {
  return combineCodec(
    getAppendInstructionDataEncoder(),
    getAppendInstructionDataDecoder()
  );
}

export type AppendInput<
  TAccountMerkleTree extends string = string,
  TAccountAuthority extends string = string,
  TAccountNoop extends string = string,
> = {
  merkleTree: Address<TAccountMerkleTree>;
  /**
   * Authority that controls write-access to the tree
   * Typically a program, e.g., the Bubblegum contract validates that leaves are valid NFTs.
   */
  authority: TransactionSigner<TAccountAuthority>;
  /** Program used to emit changelogs as cpi instruction data. */
  noop: Address<TAccountNoop>;
  leaf: AppendInstructionDataArgs['leaf'];
};

export function getAppendInstruction<
  TAccountMerkleTree extends string,
  TAccountAuthority extends string,
  TAccountNoop extends string,
  TProgramAddress extends
    Address = typeof SPL_ACCOUNT_COMPRESSION_PROGRAM_ADDRESS,
>(
  input: AppendInput<TAccountMerkleTree, TAccountAuthority, TAccountNoop>,
  config?: { programAddress?: TProgramAddress }
): AppendInstruction<
  TProgramAddress,
  TAccountMerkleTree,
  TAccountAuthority,
  TAccountNoop
> {
  // Program address.
  const programAddress =
    config?.programAddress ?? SPL_ACCOUNT_COMPRESSION_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    merkleTree: { value: input.merkleTree ?? null, isWritable: true },
    authority: { value: input.authority ?? null, isWritable: false },
    noop: { value: input.noop ?? null, isWritable: false },
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
      getAccountMeta(accounts.merkleTree),
      getAccountMeta(accounts.authority),
      getAccountMeta(accounts.noop),
    ],
    programAddress,
    data: getAppendInstructionDataEncoder().encode(
      args as AppendInstructionDataArgs
    ),
  } as AppendInstruction<
    TProgramAddress,
    TAccountMerkleTree,
    TAccountAuthority,
    TAccountNoop
  >;

  return instruction;
}

export type ParsedAppendInstruction<
  TProgram extends string = typeof SPL_ACCOUNT_COMPRESSION_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    merkleTree: TAccountMetas[0];
    /**
     * Authority that controls write-access to the tree
     * Typically a program, e.g., the Bubblegum contract validates that leaves are valid NFTs.
     */

    authority: TAccountMetas[1];
    /** Program used to emit changelogs as cpi instruction data. */
    noop: TAccountMetas[2];
  };
  data: AppendInstructionData;
};

export function parseAppendInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedAppendInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 3) {
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
      merkleTree: getNextAccount(),
      authority: getNextAccount(),
      noop: getNextAccount(),
    },
    data: getAppendInstructionDataDecoder().decode(instruction.data),
  };
}
