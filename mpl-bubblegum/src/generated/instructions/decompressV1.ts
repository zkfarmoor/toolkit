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
  type ReadonlyUint8Array,
  type TransactionSigner,
  type WritableAccount,
  type WritableSignerAccount,
} from '@solana/web3.js';
import { BUBBLEGUM_PROGRAM_ADDRESS } from '../programs';
import { getAccountMetaFactory, type ResolvedAccount } from '../shared';
import {
  getMetadataArgsDecoder,
  getMetadataArgsEncoder,
  type MetadataArgs,
  type MetadataArgsArgs,
} from '../types';

export const DECOMPRESS_V1_DISCRIMINATOR = new Uint8Array([
  54, 85, 76, 70, 228, 250, 164, 81,
]);

export function getDecompressV1DiscriminatorBytes() {
  return fixEncoderSize(getBytesEncoder(), 8).encode(
    DECOMPRESS_V1_DISCRIMINATOR
  );
}

export type DecompressV1Instruction<
  TProgram extends string = typeof BUBBLEGUM_PROGRAM_ADDRESS,
  TAccountVoucher extends string | IAccountMeta<string> = string,
  TAccountLeafOwner extends string | IAccountMeta<string> = string,
  TAccountTokenAccount extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountMintAuthority extends string | IAccountMeta<string> = string,
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountMasterEdition extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountSysvarRent extends
    | string
    | IAccountMeta<string> = 'SysvarRent111111111111111111111111111111111',
  TAccountTokenMetadataProgram extends
    | string
    | IAccountMeta<string> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountAssociatedTokenProgram extends string | IAccountMeta<string> = string,
  TAccountLogWrapper extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountVoucher extends string
        ? WritableAccount<TAccountVoucher>
        : TAccountVoucher,
      TAccountLeafOwner extends string
        ? WritableSignerAccount<TAccountLeafOwner> &
            IAccountSignerMeta<TAccountLeafOwner>
        : TAccountLeafOwner,
      TAccountTokenAccount extends string
        ? WritableAccount<TAccountTokenAccount>
        : TAccountTokenAccount,
      TAccountMint extends string
        ? WritableAccount<TAccountMint>
        : TAccountMint,
      TAccountMintAuthority extends string
        ? WritableAccount<TAccountMintAuthority>
        : TAccountMintAuthority,
      TAccountMetadata extends string
        ? WritableAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountMasterEdition extends string
        ? WritableAccount<TAccountMasterEdition>
        : TAccountMasterEdition,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      TAccountSysvarRent extends string
        ? ReadonlyAccount<TAccountSysvarRent>
        : TAccountSysvarRent,
      TAccountTokenMetadataProgram extends string
        ? ReadonlyAccount<TAccountTokenMetadataProgram>
        : TAccountTokenMetadataProgram,
      TAccountTokenProgram extends string
        ? ReadonlyAccount<TAccountTokenProgram>
        : TAccountTokenProgram,
      TAccountAssociatedTokenProgram extends string
        ? ReadonlyAccount<TAccountAssociatedTokenProgram>
        : TAccountAssociatedTokenProgram,
      TAccountLogWrapper extends string
        ? ReadonlyAccount<TAccountLogWrapper>
        : TAccountLogWrapper,
      ...TRemainingAccounts,
    ]
  >;

export type DecompressV1InstructionData = {
  discriminator: ReadonlyUint8Array;
  metadata: MetadataArgs;
};

export type DecompressV1InstructionDataArgs = { metadata: MetadataArgsArgs };

export function getDecompressV1InstructionDataEncoder(): Encoder<DecompressV1InstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([
      ['discriminator', fixEncoderSize(getBytesEncoder(), 8)],
      ['metadata', getMetadataArgsEncoder()],
    ]),
    (value) => ({ ...value, discriminator: DECOMPRESS_V1_DISCRIMINATOR })
  );
}

export function getDecompressV1InstructionDataDecoder(): Decoder<DecompressV1InstructionData> {
  return getStructDecoder([
    ['discriminator', fixDecoderSize(getBytesDecoder(), 8)],
    ['metadata', getMetadataArgsDecoder()],
  ]);
}

export function getDecompressV1InstructionDataCodec(): Codec<
  DecompressV1InstructionDataArgs,
  DecompressV1InstructionData
> {
  return combineCodec(
    getDecompressV1InstructionDataEncoder(),
    getDecompressV1InstructionDataDecoder()
  );
}

export type DecompressV1Input<
  TAccountVoucher extends string = string,
  TAccountLeafOwner extends string = string,
  TAccountTokenAccount extends string = string,
  TAccountMint extends string = string,
  TAccountMintAuthority extends string = string,
  TAccountMetadata extends string = string,
  TAccountMasterEdition extends string = string,
  TAccountSystemProgram extends string = string,
  TAccountSysvarRent extends string = string,
  TAccountTokenMetadataProgram extends string = string,
  TAccountTokenProgram extends string = string,
  TAccountAssociatedTokenProgram extends string = string,
  TAccountLogWrapper extends string = string,
> = {
  voucher: Address<TAccountVoucher>;
  leafOwner: TransactionSigner<TAccountLeafOwner>;
  tokenAccount: Address<TAccountTokenAccount>;
  mint: Address<TAccountMint>;
  mintAuthority: Address<TAccountMintAuthority>;
  metadata: Address<TAccountMetadata>;
  masterEdition: Address<TAccountMasterEdition>;
  systemProgram?: Address<TAccountSystemProgram>;
  sysvarRent?: Address<TAccountSysvarRent>;
  tokenMetadataProgram?: Address<TAccountTokenMetadataProgram>;
  tokenProgram?: Address<TAccountTokenProgram>;
  associatedTokenProgram: Address<TAccountAssociatedTokenProgram>;
  logWrapper: Address<TAccountLogWrapper>;
  metadataArg: DecompressV1InstructionDataArgs['metadata'];
};

export function getDecompressV1Instruction<
  TAccountVoucher extends string,
  TAccountLeafOwner extends string,
  TAccountTokenAccount extends string,
  TAccountMint extends string,
  TAccountMintAuthority extends string,
  TAccountMetadata extends string,
  TAccountMasterEdition extends string,
  TAccountSystemProgram extends string,
  TAccountSysvarRent extends string,
  TAccountTokenMetadataProgram extends string,
  TAccountTokenProgram extends string,
  TAccountAssociatedTokenProgram extends string,
  TAccountLogWrapper extends string,
  TProgramAddress extends Address = typeof BUBBLEGUM_PROGRAM_ADDRESS,
>(
  input: DecompressV1Input<
    TAccountVoucher,
    TAccountLeafOwner,
    TAccountTokenAccount,
    TAccountMint,
    TAccountMintAuthority,
    TAccountMetadata,
    TAccountMasterEdition,
    TAccountSystemProgram,
    TAccountSysvarRent,
    TAccountTokenMetadataProgram,
    TAccountTokenProgram,
    TAccountAssociatedTokenProgram,
    TAccountLogWrapper
  >,
  config?: { programAddress?: TProgramAddress }
): DecompressV1Instruction<
  TProgramAddress,
  TAccountVoucher,
  TAccountLeafOwner,
  TAccountTokenAccount,
  TAccountMint,
  TAccountMintAuthority,
  TAccountMetadata,
  TAccountMasterEdition,
  TAccountSystemProgram,
  TAccountSysvarRent,
  TAccountTokenMetadataProgram,
  TAccountTokenProgram,
  TAccountAssociatedTokenProgram,
  TAccountLogWrapper
> {
  // Program address.
  const programAddress = config?.programAddress ?? BUBBLEGUM_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    voucher: { value: input.voucher ?? null, isWritable: true },
    leafOwner: { value: input.leafOwner ?? null, isWritable: true },
    tokenAccount: { value: input.tokenAccount ?? null, isWritable: true },
    mint: { value: input.mint ?? null, isWritable: true },
    mintAuthority: { value: input.mintAuthority ?? null, isWritable: true },
    metadata: { value: input.metadata ?? null, isWritable: true },
    masterEdition: { value: input.masterEdition ?? null, isWritable: true },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
    sysvarRent: { value: input.sysvarRent ?? null, isWritable: false },
    tokenMetadataProgram: {
      value: input.tokenMetadataProgram ?? null,
      isWritable: false,
    },
    tokenProgram: { value: input.tokenProgram ?? null, isWritable: false },
    associatedTokenProgram: {
      value: input.associatedTokenProgram ?? null,
      isWritable: false,
    },
    logWrapper: { value: input.logWrapper ?? null, isWritable: false },
  };
  const accounts = originalAccounts as Record<
    keyof typeof originalAccounts,
    ResolvedAccount
  >;

  // Original args.
  const args = { ...input, metadata: input.metadataArg };

  // Resolve default values.
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value =
      '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>;
  }
  if (!accounts.sysvarRent.value) {
    accounts.sysvarRent.value =
      'SysvarRent111111111111111111111111111111111' as Address<'SysvarRent111111111111111111111111111111111'>;
  }
  if (!accounts.tokenMetadataProgram.value) {
    accounts.tokenMetadataProgram.value =
      'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>;
  }
  if (!accounts.tokenProgram.value) {
    accounts.tokenProgram.value =
      'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Address<'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'>;
  }

  const getAccountMeta = getAccountMetaFactory(programAddress, 'programId');
  const instruction = {
    accounts: [
      getAccountMeta(accounts.voucher),
      getAccountMeta(accounts.leafOwner),
      getAccountMeta(accounts.tokenAccount),
      getAccountMeta(accounts.mint),
      getAccountMeta(accounts.mintAuthority),
      getAccountMeta(accounts.metadata),
      getAccountMeta(accounts.masterEdition),
      getAccountMeta(accounts.systemProgram),
      getAccountMeta(accounts.sysvarRent),
      getAccountMeta(accounts.tokenMetadataProgram),
      getAccountMeta(accounts.tokenProgram),
      getAccountMeta(accounts.associatedTokenProgram),
      getAccountMeta(accounts.logWrapper),
    ],
    programAddress,
    data: getDecompressV1InstructionDataEncoder().encode(
      args as DecompressV1InstructionDataArgs
    ),
  } as DecompressV1Instruction<
    TProgramAddress,
    TAccountVoucher,
    TAccountLeafOwner,
    TAccountTokenAccount,
    TAccountMint,
    TAccountMintAuthority,
    TAccountMetadata,
    TAccountMasterEdition,
    TAccountSystemProgram,
    TAccountSysvarRent,
    TAccountTokenMetadataProgram,
    TAccountTokenProgram,
    TAccountAssociatedTokenProgram,
    TAccountLogWrapper
  >;

  return instruction;
}

export type ParsedDecompressV1Instruction<
  TProgram extends string = typeof BUBBLEGUM_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    voucher: TAccountMetas[0];
    leafOwner: TAccountMetas[1];
    tokenAccount: TAccountMetas[2];
    mint: TAccountMetas[3];
    mintAuthority: TAccountMetas[4];
    metadata: TAccountMetas[5];
    masterEdition: TAccountMetas[6];
    systemProgram: TAccountMetas[7];
    sysvarRent: TAccountMetas[8];
    tokenMetadataProgram: TAccountMetas[9];
    tokenProgram: TAccountMetas[10];
    associatedTokenProgram: TAccountMetas[11];
    logWrapper: TAccountMetas[12];
  };
  data: DecompressV1InstructionData;
};

export function parseDecompressV1Instruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedDecompressV1Instruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 13) {
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
      voucher: getNextAccount(),
      leafOwner: getNextAccount(),
      tokenAccount: getNextAccount(),
      mint: getNextAccount(),
      mintAuthority: getNextAccount(),
      metadata: getNextAccount(),
      masterEdition: getNextAccount(),
      systemProgram: getNextAccount(),
      sysvarRent: getNextAccount(),
      tokenMetadataProgram: getNextAccount(),
      tokenProgram: getNextAccount(),
      associatedTokenProgram: getNextAccount(),
      logWrapper: getNextAccount(),
    },
    data: getDecompressV1InstructionDataDecoder().decode(instruction.data),
  };
}
