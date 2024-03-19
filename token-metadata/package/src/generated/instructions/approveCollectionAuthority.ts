/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Address } from '@solana/addresses';
import {
  Codec,
  Decoder,
  Encoder,
  combineCodec,
  getStructDecoder,
  getStructEncoder,
  getU8Decoder,
  getU8Encoder,
  mapEncoder,
} from '@solana/codecs';
import {
  AccountRole,
  IAccountMeta,
  IInstruction,
  IInstructionWithAccounts,
  IInstructionWithData,
  ReadonlyAccount,
  WritableAccount,
  WritableSignerAccount,
} from '@solana/instructions';
import { IAccountSignerMeta, TransactionSigner } from '@solana/signers';
import { findMetadataPda } from '../pdas';
import {
  ResolvedAccount,
  accountMetaWithDefault,
  expectAddress,
  getAccountMetasWithSigners,
} from '../shared';

export type ApproveCollectionAuthorityInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountCollectionAuthorityRecord extends
    | string
    | IAccountMeta<string> = string,
  TAccountNewCollectionAuthority extends string | IAccountMeta<string> = string,
  TAccountUpdateAuthority extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountRent extends string | IAccountMeta<string> | undefined = undefined,
  TRemainingAccounts extends Array<IAccountMeta<string>> = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountCollectionAuthorityRecord extends string
        ? WritableAccount<TAccountCollectionAuthorityRecord>
        : TAccountCollectionAuthorityRecord,
      TAccountNewCollectionAuthority extends string
        ? ReadonlyAccount<TAccountNewCollectionAuthority>
        : TAccountNewCollectionAuthority,
      TAccountUpdateAuthority extends string
        ? WritableSignerAccount<TAccountUpdateAuthority>
        : TAccountUpdateAuthority,
      TAccountPayer extends string
        ? WritableSignerAccount<TAccountPayer>
        : TAccountPayer,
      TAccountMetadata extends string
        ? ReadonlyAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountMint extends string
        ? ReadonlyAccount<TAccountMint>
        : TAccountMint,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      ...(TAccountRent extends undefined
        ? []
        : [
            TAccountRent extends string
              ? ReadonlyAccount<TAccountRent>
              : TAccountRent,
          ]),
      ...TRemainingAccounts,
    ]
  >;

export type ApproveCollectionAuthorityInstructionWithSigners<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountCollectionAuthorityRecord extends
    | string
    | IAccountMeta<string> = string,
  TAccountNewCollectionAuthority extends string | IAccountMeta<string> = string,
  TAccountUpdateAuthority extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountRent extends string | IAccountMeta<string> | undefined = undefined,
  TRemainingAccounts extends Array<IAccountMeta<string>> = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountCollectionAuthorityRecord extends string
        ? WritableAccount<TAccountCollectionAuthorityRecord>
        : TAccountCollectionAuthorityRecord,
      TAccountNewCollectionAuthority extends string
        ? ReadonlyAccount<TAccountNewCollectionAuthority>
        : TAccountNewCollectionAuthority,
      TAccountUpdateAuthority extends string
        ? WritableSignerAccount<TAccountUpdateAuthority> &
            IAccountSignerMeta<TAccountUpdateAuthority>
        : TAccountUpdateAuthority,
      TAccountPayer extends string
        ? WritableSignerAccount<TAccountPayer> &
            IAccountSignerMeta<TAccountPayer>
        : TAccountPayer,
      TAccountMetadata extends string
        ? ReadonlyAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountMint extends string
        ? ReadonlyAccount<TAccountMint>
        : TAccountMint,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      ...(TAccountRent extends undefined
        ? []
        : [
            TAccountRent extends string
              ? ReadonlyAccount<TAccountRent>
              : TAccountRent,
          ]),
      ...TRemainingAccounts,
    ]
  >;

export type ApproveCollectionAuthorityInstructionData = {
  discriminator: number;
};

export type ApproveCollectionAuthorityInstructionDataArgs = {};

export function getApproveCollectionAuthorityInstructionDataEncoder(): Encoder<ApproveCollectionAuthorityInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder([['discriminator', getU8Encoder()]]),
    (value) => ({ ...value, discriminator: 23 })
  );
}

export function getApproveCollectionAuthorityInstructionDataDecoder(): Decoder<ApproveCollectionAuthorityInstructionData> {
  return getStructDecoder([['discriminator', getU8Decoder()]]);
}

export function getApproveCollectionAuthorityInstructionDataCodec(): Codec<
  ApproveCollectionAuthorityInstructionDataArgs,
  ApproveCollectionAuthorityInstructionData
> {
  return combineCodec(
    getApproveCollectionAuthorityInstructionDataEncoder(),
    getApproveCollectionAuthorityInstructionDataDecoder()
  );
}

export type ApproveCollectionAuthorityAsyncInput<
  TAccountCollectionAuthorityRecord extends string,
  TAccountNewCollectionAuthority extends string,
  TAccountUpdateAuthority extends string,
  TAccountPayer extends string,
  TAccountMetadata extends string,
  TAccountMint extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string,
> = {
  /** Collection Authority Record PDA */
  collectionAuthorityRecord: Address<TAccountCollectionAuthorityRecord>;
  /** A Collection Authority */
  newCollectionAuthority: Address<TAccountNewCollectionAuthority>;
  /** Update Authority of Collection NFT */
  updateAuthority: Address<TAccountUpdateAuthority>;
  /** Payer */
  payer: Address<TAccountPayer>;
  /** Collection Metadata account */
  metadata?: Address<TAccountMetadata>;
  /** Mint of Collection Metadata */
  mint: Address<TAccountMint>;
  /** System program */
  systemProgram?: Address<TAccountSystemProgram>;
  /** Rent info */
  rent?: Address<TAccountRent>;
};

export type ApproveCollectionAuthorityAsyncInputWithSigners<
  TAccountCollectionAuthorityRecord extends string,
  TAccountNewCollectionAuthority extends string,
  TAccountUpdateAuthority extends string,
  TAccountPayer extends string,
  TAccountMetadata extends string,
  TAccountMint extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string,
> = {
  /** Collection Authority Record PDA */
  collectionAuthorityRecord: Address<TAccountCollectionAuthorityRecord>;
  /** A Collection Authority */
  newCollectionAuthority: Address<TAccountNewCollectionAuthority>;
  /** Update Authority of Collection NFT */
  updateAuthority: TransactionSigner<TAccountUpdateAuthority>;
  /** Payer */
  payer: TransactionSigner<TAccountPayer>;
  /** Collection Metadata account */
  metadata?: Address<TAccountMetadata>;
  /** Mint of Collection Metadata */
  mint: Address<TAccountMint>;
  /** System program */
  systemProgram?: Address<TAccountSystemProgram>;
  /** Rent info */
  rent?: Address<TAccountRent>;
};

export async function getApproveCollectionAuthorityInstructionAsync<
  TAccountCollectionAuthorityRecord extends string,
  TAccountNewCollectionAuthority extends string,
  TAccountUpdateAuthority extends string,
  TAccountPayer extends string,
  TAccountMetadata extends string,
  TAccountMint extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
>(
  input: ApproveCollectionAuthorityAsyncInputWithSigners<
    TAccountCollectionAuthorityRecord,
    TAccountNewCollectionAuthority,
    TAccountUpdateAuthority,
    TAccountPayer,
    TAccountMetadata,
    TAccountMint,
    TAccountSystemProgram,
    TAccountRent
  >
): Promise<
  ApproveCollectionAuthorityInstructionWithSigners<
    TProgram,
    TAccountCollectionAuthorityRecord,
    TAccountNewCollectionAuthority,
    TAccountUpdateAuthority,
    TAccountPayer,
    TAccountMetadata,
    TAccountMint,
    TAccountSystemProgram,
    TAccountRent
  >
>;
export async function getApproveCollectionAuthorityInstructionAsync<
  TAccountCollectionAuthorityRecord extends string,
  TAccountNewCollectionAuthority extends string,
  TAccountUpdateAuthority extends string,
  TAccountPayer extends string,
  TAccountMetadata extends string,
  TAccountMint extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
>(
  input: ApproveCollectionAuthorityAsyncInput<
    TAccountCollectionAuthorityRecord,
    TAccountNewCollectionAuthority,
    TAccountUpdateAuthority,
    TAccountPayer,
    TAccountMetadata,
    TAccountMint,
    TAccountSystemProgram,
    TAccountRent
  >
): Promise<
  ApproveCollectionAuthorityInstruction<
    TProgram,
    TAccountCollectionAuthorityRecord,
    TAccountNewCollectionAuthority,
    TAccountUpdateAuthority,
    TAccountPayer,
    TAccountMetadata,
    TAccountMint,
    TAccountSystemProgram,
    TAccountRent
  >
>;
export async function getApproveCollectionAuthorityInstructionAsync<
  TAccountCollectionAuthorityRecord extends string,
  TAccountNewCollectionAuthority extends string,
  TAccountUpdateAuthority extends string,
  TAccountPayer extends string,
  TAccountMetadata extends string,
  TAccountMint extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
>(
  input: ApproveCollectionAuthorityAsyncInput<
    TAccountCollectionAuthorityRecord,
    TAccountNewCollectionAuthority,
    TAccountUpdateAuthority,
    TAccountPayer,
    TAccountMetadata,
    TAccountMint,
    TAccountSystemProgram,
    TAccountRent
  >
): Promise<IInstruction> {
  // Program address.
  const programAddress =
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>;

  // Original accounts.
  type AccountMetas = Parameters<
    typeof getApproveCollectionAuthorityInstructionRaw<
      TProgram,
      TAccountCollectionAuthorityRecord,
      TAccountNewCollectionAuthority,
      TAccountUpdateAuthority,
      TAccountPayer,
      TAccountMetadata,
      TAccountMint,
      TAccountSystemProgram,
      TAccountRent
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    collectionAuthorityRecord: {
      value: input.collectionAuthorityRecord ?? null,
      isWritable: true,
    },
    newCollectionAuthority: {
      value: input.newCollectionAuthority ?? null,
      isWritable: false,
    },
    updateAuthority: { value: input.updateAuthority ?? null, isWritable: true },
    payer: { value: input.payer ?? null, isWritable: true },
    metadata: { value: input.metadata ?? null, isWritable: false },
    mint: { value: input.mint ?? null, isWritable: false },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
    rent: { value: input.rent ?? null, isWritable: false },
  };

  // Resolve default values.
  if (!accounts.metadata.value) {
    accounts.metadata.value = await findMetadataPda({
      mint: expectAddress(accounts.mint.value),
    });
  }
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value =
      '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>;
  }

  // Get account metas and signers.
  const accountMetas = getAccountMetasWithSigners(
    accounts,
    'programId',
    programAddress
  );

  const instruction = getApproveCollectionAuthorityInstructionRaw(
    accountMetas as Record<keyof AccountMetas, IAccountMeta>,
    programAddress
  );

  return instruction;
}

export type ApproveCollectionAuthorityInput<
  TAccountCollectionAuthorityRecord extends string,
  TAccountNewCollectionAuthority extends string,
  TAccountUpdateAuthority extends string,
  TAccountPayer extends string,
  TAccountMetadata extends string,
  TAccountMint extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string,
> = {
  /** Collection Authority Record PDA */
  collectionAuthorityRecord: Address<TAccountCollectionAuthorityRecord>;
  /** A Collection Authority */
  newCollectionAuthority: Address<TAccountNewCollectionAuthority>;
  /** Update Authority of Collection NFT */
  updateAuthority: Address<TAccountUpdateAuthority>;
  /** Payer */
  payer: Address<TAccountPayer>;
  /** Collection Metadata account */
  metadata: Address<TAccountMetadata>;
  /** Mint of Collection Metadata */
  mint: Address<TAccountMint>;
  /** System program */
  systemProgram?: Address<TAccountSystemProgram>;
  /** Rent info */
  rent?: Address<TAccountRent>;
};

export type ApproveCollectionAuthorityInputWithSigners<
  TAccountCollectionAuthorityRecord extends string,
  TAccountNewCollectionAuthority extends string,
  TAccountUpdateAuthority extends string,
  TAccountPayer extends string,
  TAccountMetadata extends string,
  TAccountMint extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string,
> = {
  /** Collection Authority Record PDA */
  collectionAuthorityRecord: Address<TAccountCollectionAuthorityRecord>;
  /** A Collection Authority */
  newCollectionAuthority: Address<TAccountNewCollectionAuthority>;
  /** Update Authority of Collection NFT */
  updateAuthority: TransactionSigner<TAccountUpdateAuthority>;
  /** Payer */
  payer: TransactionSigner<TAccountPayer>;
  /** Collection Metadata account */
  metadata: Address<TAccountMetadata>;
  /** Mint of Collection Metadata */
  mint: Address<TAccountMint>;
  /** System program */
  systemProgram?: Address<TAccountSystemProgram>;
  /** Rent info */
  rent?: Address<TAccountRent>;
};

export function getApproveCollectionAuthorityInstruction<
  TAccountCollectionAuthorityRecord extends string,
  TAccountNewCollectionAuthority extends string,
  TAccountUpdateAuthority extends string,
  TAccountPayer extends string,
  TAccountMetadata extends string,
  TAccountMint extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
>(
  input: ApproveCollectionAuthorityInputWithSigners<
    TAccountCollectionAuthorityRecord,
    TAccountNewCollectionAuthority,
    TAccountUpdateAuthority,
    TAccountPayer,
    TAccountMetadata,
    TAccountMint,
    TAccountSystemProgram,
    TAccountRent
  >
): ApproveCollectionAuthorityInstructionWithSigners<
  TProgram,
  TAccountCollectionAuthorityRecord,
  TAccountNewCollectionAuthority,
  TAccountUpdateAuthority,
  TAccountPayer,
  TAccountMetadata,
  TAccountMint,
  TAccountSystemProgram,
  TAccountRent
>;
export function getApproveCollectionAuthorityInstruction<
  TAccountCollectionAuthorityRecord extends string,
  TAccountNewCollectionAuthority extends string,
  TAccountUpdateAuthority extends string,
  TAccountPayer extends string,
  TAccountMetadata extends string,
  TAccountMint extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
>(
  input: ApproveCollectionAuthorityInput<
    TAccountCollectionAuthorityRecord,
    TAccountNewCollectionAuthority,
    TAccountUpdateAuthority,
    TAccountPayer,
    TAccountMetadata,
    TAccountMint,
    TAccountSystemProgram,
    TAccountRent
  >
): ApproveCollectionAuthorityInstruction<
  TProgram,
  TAccountCollectionAuthorityRecord,
  TAccountNewCollectionAuthority,
  TAccountUpdateAuthority,
  TAccountPayer,
  TAccountMetadata,
  TAccountMint,
  TAccountSystemProgram,
  TAccountRent
>;
export function getApproveCollectionAuthorityInstruction<
  TAccountCollectionAuthorityRecord extends string,
  TAccountNewCollectionAuthority extends string,
  TAccountUpdateAuthority extends string,
  TAccountPayer extends string,
  TAccountMetadata extends string,
  TAccountMint extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
>(
  input: ApproveCollectionAuthorityInput<
    TAccountCollectionAuthorityRecord,
    TAccountNewCollectionAuthority,
    TAccountUpdateAuthority,
    TAccountPayer,
    TAccountMetadata,
    TAccountMint,
    TAccountSystemProgram,
    TAccountRent
  >
): IInstruction {
  // Program address.
  const programAddress =
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>;

  // Original accounts.
  type AccountMetas = Parameters<
    typeof getApproveCollectionAuthorityInstructionRaw<
      TProgram,
      TAccountCollectionAuthorityRecord,
      TAccountNewCollectionAuthority,
      TAccountUpdateAuthority,
      TAccountPayer,
      TAccountMetadata,
      TAccountMint,
      TAccountSystemProgram,
      TAccountRent
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    collectionAuthorityRecord: {
      value: input.collectionAuthorityRecord ?? null,
      isWritable: true,
    },
    newCollectionAuthority: {
      value: input.newCollectionAuthority ?? null,
      isWritable: false,
    },
    updateAuthority: { value: input.updateAuthority ?? null, isWritable: true },
    payer: { value: input.payer ?? null, isWritable: true },
    metadata: { value: input.metadata ?? null, isWritable: false },
    mint: { value: input.mint ?? null, isWritable: false },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
    rent: { value: input.rent ?? null, isWritable: false },
  };

  // Resolve default values.
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value =
      '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>;
  }

  // Get account metas and signers.
  const accountMetas = getAccountMetasWithSigners(
    accounts,
    'programId',
    programAddress
  );

  const instruction = getApproveCollectionAuthorityInstructionRaw(
    accountMetas as Record<keyof AccountMetas, IAccountMeta>,
    programAddress
  );

  return instruction;
}

export function getApproveCollectionAuthorityInstructionRaw<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountCollectionAuthorityRecord extends
    | string
    | IAccountMeta<string> = string,
  TAccountNewCollectionAuthority extends string | IAccountMeta<string> = string,
  TAccountUpdateAuthority extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountRent extends string | IAccountMeta<string> | undefined = undefined,
  TRemainingAccounts extends Array<IAccountMeta<string>> = [],
>(
  accounts: {
    collectionAuthorityRecord: TAccountCollectionAuthorityRecord extends string
      ? Address<TAccountCollectionAuthorityRecord>
      : TAccountCollectionAuthorityRecord;
    newCollectionAuthority: TAccountNewCollectionAuthority extends string
      ? Address<TAccountNewCollectionAuthority>
      : TAccountNewCollectionAuthority;
    updateAuthority: TAccountUpdateAuthority extends string
      ? Address<TAccountUpdateAuthority>
      : TAccountUpdateAuthority;
    payer: TAccountPayer extends string
      ? Address<TAccountPayer>
      : TAccountPayer;
    metadata: TAccountMetadata extends string
      ? Address<TAccountMetadata>
      : TAccountMetadata;
    mint: TAccountMint extends string ? Address<TAccountMint> : TAccountMint;
    systemProgram?: TAccountSystemProgram extends string
      ? Address<TAccountSystemProgram>
      : TAccountSystemProgram;
    rent?: TAccountRent extends string ? Address<TAccountRent> : TAccountRent;
  },
  programAddress: Address<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<TProgram>,
  remainingAccounts?: TRemainingAccounts
) {
  return {
    accounts: [
      accountMetaWithDefault(
        accounts.collectionAuthorityRecord,
        AccountRole.WRITABLE
      ),
      accountMetaWithDefault(
        accounts.newCollectionAuthority,
        AccountRole.READONLY
      ),
      accountMetaWithDefault(
        accounts.updateAuthority,
        AccountRole.WRITABLE_SIGNER
      ),
      accountMetaWithDefault(accounts.payer, AccountRole.WRITABLE_SIGNER),
      accountMetaWithDefault(accounts.metadata, AccountRole.READONLY),
      accountMetaWithDefault(accounts.mint, AccountRole.READONLY),
      accountMetaWithDefault(
        accounts.systemProgram ??
          ('11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>),
        AccountRole.READONLY
      ),
      accountMetaWithDefault(accounts.rent, AccountRole.READONLY),
      ...(remainingAccounts ?? []),
    ].filter(<T,>(x: T | undefined): x is T => x !== undefined),
    data: getApproveCollectionAuthorityInstructionDataEncoder().encode({}),
    programAddress,
  } as ApproveCollectionAuthorityInstruction<
    TProgram,
    TAccountCollectionAuthorityRecord,
    TAccountNewCollectionAuthority,
    TAccountUpdateAuthority,
    TAccountPayer,
    TAccountMetadata,
    TAccountMint,
    TAccountSystemProgram,
    TAccountRent,
    TRemainingAccounts
  >;
}

export type ParsedApproveCollectionAuthorityInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    /** Collection Authority Record PDA */
    collectionAuthorityRecord: TAccountMetas[0];
    /** A Collection Authority */
    newCollectionAuthority: TAccountMetas[1];
    /** Update Authority of Collection NFT */
    updateAuthority: TAccountMetas[2];
    /** Payer */
    payer: TAccountMetas[3];
    /** Collection Metadata account */
    metadata: TAccountMetas[4];
    /** Mint of Collection Metadata */
    mint: TAccountMetas[5];
    /** System program */
    systemProgram: TAccountMetas[6];
    /** Rent info */
    rent?: TAccountMetas[7] | undefined;
  };
  data: ApproveCollectionAuthorityInstructionData;
};

export function parseApproveCollectionAuthorityInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedApproveCollectionAuthorityInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 7) {
    // TODO: Coded error.
    throw new Error('Not enough accounts');
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts![accountIndex]!;
    accountIndex += 1;
    return accountMeta;
  };
  let optionalAccountsRemaining = instruction.accounts.length - 7;
  const getNextOptionalAccount = () => {
    if (optionalAccountsRemaining === 0) return undefined;
    optionalAccountsRemaining -= 1;
    return getNextAccount();
  };
  return {
    programAddress: instruction.programAddress,
    accounts: {
      collectionAuthorityRecord: getNextAccount(),
      newCollectionAuthority: getNextAccount(),
      updateAuthority: getNextAccount(),
      payer: getNextAccount(),
      metadata: getNextAccount(),
      mint: getNextAccount(),
      systemProgram: getNextAccount(),
      rent: getNextOptionalAccount(),
    },
    data: getApproveCollectionAuthorityInstructionDataDecoder().decode(
      instruction.data
    ),
  };
}
