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
  Option,
  OptionOrNullable,
  ReadonlyAccount,
  ReadonlySignerAccount,
  TransactionSigner,
  WritableAccount,
  WritableSignerAccount,
  addDecoderSizePrefix,
  addEncoderSizePrefix,
  combineCodec,
  getOptionDecoder,
  getOptionEncoder,
  getStructDecoder,
  getStructEncoder,
  getU32Decoder,
  getU32Encoder,
  getU8Decoder,
  getU8Encoder,
  getUtf8Decoder,
  getUtf8Encoder,
  transformEncoder,
} from '@solana/web3.js';
import { MPL_CORE_PROGRAM_PROGRAM_ADDRESS } from '../programs';
import { ResolvedAccount, getAccountMetaFactory } from '../shared';
import {
  UpdateAuthority,
  UpdateAuthorityArgs,
  getUpdateAuthorityDecoder,
  getUpdateAuthorityEncoder,
} from '../types';

export type UpdateV1Instruction<
  TProgram extends string = typeof MPL_CORE_PROGRAM_PROGRAM_ADDRESS,
  TAccountAsset extends string | IAccountMeta<string> = string,
  TAccountCollection extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountAuthority extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountLogWrapper extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountAsset extends string
        ? WritableAccount<TAccountAsset>
        : TAccountAsset,
      TAccountCollection extends string
        ? ReadonlyAccount<TAccountCollection>
        : TAccountCollection,
      TAccountPayer extends string
        ? WritableSignerAccount<TAccountPayer> &
            IAccountSignerMeta<TAccountPayer>
        : TAccountPayer,
      TAccountAuthority extends string
        ? ReadonlySignerAccount<TAccountAuthority> &
            IAccountSignerMeta<TAccountAuthority>
        : TAccountAuthority,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      TAccountLogWrapper extends string
        ? ReadonlyAccount<TAccountLogWrapper>
        : TAccountLogWrapper,
      ...TRemainingAccounts,
    ]
  >;

export type UpdateV1InstructionData = {
  discriminator: number;
  newName: Option<string>;
  newUri: Option<string>;
  newUpdateAuthority: Option<UpdateAuthority>;
};

export type UpdateV1InstructionDataArgs = {
  newName: OptionOrNullable<string>;
  newUri: OptionOrNullable<string>;
  newUpdateAuthority: OptionOrNullable<UpdateAuthorityArgs>;
};

export function getUpdateV1InstructionDataEncoder(): Encoder<UpdateV1InstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([
      ['discriminator', getU8Encoder()],
      [
        'newName',
        getOptionEncoder(
          addEncoderSizePrefix(getUtf8Encoder(), getU32Encoder())
        ),
      ],
      [
        'newUri',
        getOptionEncoder(
          addEncoderSizePrefix(getUtf8Encoder(), getU32Encoder())
        ),
      ],
      ['newUpdateAuthority', getOptionEncoder(getUpdateAuthorityEncoder())],
    ]),
    (value) => ({ ...value, discriminator: 15 })
  );
}

export function getUpdateV1InstructionDataDecoder(): Decoder<UpdateV1InstructionData> {
  return getStructDecoder([
    ['discriminator', getU8Decoder()],
    [
      'newName',
      getOptionDecoder(addDecoderSizePrefix(getUtf8Decoder(), getU32Decoder())),
    ],
    [
      'newUri',
      getOptionDecoder(addDecoderSizePrefix(getUtf8Decoder(), getU32Decoder())),
    ],
    ['newUpdateAuthority', getOptionDecoder(getUpdateAuthorityDecoder())],
  ]);
}

export function getUpdateV1InstructionDataCodec(): Codec<
  UpdateV1InstructionDataArgs,
  UpdateV1InstructionData
> {
  return combineCodec(
    getUpdateV1InstructionDataEncoder(),
    getUpdateV1InstructionDataDecoder()
  );
}

export type UpdateV1Input<
  TAccountAsset extends string = string,
  TAccountCollection extends string = string,
  TAccountPayer extends string = string,
  TAccountAuthority extends string = string,
  TAccountSystemProgram extends string = string,
  TAccountLogWrapper extends string = string,
> = {
  /** The address of the asset */
  asset: Address<TAccountAsset>;
  /** The collection to which the asset belongs */
  collection?: Address<TAccountCollection>;
  /** The account paying for the storage fees */
  payer: TransactionSigner<TAccountPayer>;
  /** The update authority or update authority delegate of the asset */
  authority?: TransactionSigner<TAccountAuthority>;
  /** The system program */
  systemProgram?: Address<TAccountSystemProgram>;
  /** The SPL Noop Program */
  logWrapper?: Address<TAccountLogWrapper>;
  newName: UpdateV1InstructionDataArgs['newName'];
  newUri: UpdateV1InstructionDataArgs['newUri'];
  newUpdateAuthority: UpdateV1InstructionDataArgs['newUpdateAuthority'];
};

export function getUpdateV1Instruction<
  TAccountAsset extends string,
  TAccountCollection extends string,
  TAccountPayer extends string,
  TAccountAuthority extends string,
  TAccountSystemProgram extends string,
  TAccountLogWrapper extends string,
>(
  input: UpdateV1Input<
    TAccountAsset,
    TAccountCollection,
    TAccountPayer,
    TAccountAuthority,
    TAccountSystemProgram,
    TAccountLogWrapper
  >
): UpdateV1Instruction<
  typeof MPL_CORE_PROGRAM_PROGRAM_ADDRESS,
  TAccountAsset,
  TAccountCollection,
  TAccountPayer,
  TAccountAuthority,
  TAccountSystemProgram,
  TAccountLogWrapper
> {
  // Program address.
  const programAddress = MPL_CORE_PROGRAM_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    asset: { value: input.asset ?? null, isWritable: true },
    collection: { value: input.collection ?? null, isWritable: false },
    payer: { value: input.payer ?? null, isWritable: true },
    authority: { value: input.authority ?? null, isWritable: false },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
    logWrapper: { value: input.logWrapper ?? null, isWritable: false },
  };
  const accounts = originalAccounts as Record<
    keyof typeof originalAccounts,
    ResolvedAccount
  >;

  // Original args.
  const args = { ...input };

  // Resolve default values.
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value =
      '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>;
  }

  const getAccountMeta = getAccountMetaFactory(programAddress, 'programId');
  const instruction = {
    accounts: [
      getAccountMeta(accounts.asset),
      getAccountMeta(accounts.collection),
      getAccountMeta(accounts.payer),
      getAccountMeta(accounts.authority),
      getAccountMeta(accounts.systemProgram),
      getAccountMeta(accounts.logWrapper),
    ],
    programAddress,
    data: getUpdateV1InstructionDataEncoder().encode(
      args as UpdateV1InstructionDataArgs
    ),
  } as UpdateV1Instruction<
    typeof MPL_CORE_PROGRAM_PROGRAM_ADDRESS,
    TAccountAsset,
    TAccountCollection,
    TAccountPayer,
    TAccountAuthority,
    TAccountSystemProgram,
    TAccountLogWrapper
  >;

  return instruction;
}

export type ParsedUpdateV1Instruction<
  TProgram extends string = typeof MPL_CORE_PROGRAM_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    /** The address of the asset */
    asset: TAccountMetas[0];
    /** The collection to which the asset belongs */
    collection?: TAccountMetas[1] | undefined;
    /** The account paying for the storage fees */
    payer: TAccountMetas[2];
    /** The update authority or update authority delegate of the asset */
    authority?: TAccountMetas[3] | undefined;
    /** The system program */
    systemProgram: TAccountMetas[4];
    /** The SPL Noop Program */
    logWrapper?: TAccountMetas[5] | undefined;
  };
  data: UpdateV1InstructionData;
};

export function parseUpdateV1Instruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedUpdateV1Instruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 6) {
    // TODO: Coded error.
    throw new Error('Not enough accounts');
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts![accountIndex]!;
    accountIndex += 1;
    return accountMeta;
  };
  const getNextOptionalAccount = () => {
    const accountMeta = getNextAccount();
    return accountMeta.address === MPL_CORE_PROGRAM_PROGRAM_ADDRESS
      ? undefined
      : accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: {
      asset: getNextAccount(),
      collection: getNextOptionalAccount(),
      payer: getNextAccount(),
      authority: getNextOptionalAccount(),
      systemProgram: getNextAccount(),
      logWrapper: getNextOptionalAccount(),
    },
    data: getUpdateV1InstructionDataDecoder().decode(instruction.data),
  };
}