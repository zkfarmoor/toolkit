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
  getU64Decoder,
  getU64Encoder,
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
import { WEN_ROYALTY_DISTRIBUTION_PROGRAM_ADDRESS } from '../programs';
import { getAccountMetaFactory, type ResolvedAccount } from '../shared';

export const UPDATE_DISTRIBUTION_DISCRIMINATOR = new Uint8Array([
  128, 196, 209, 174, 42, 209, 164, 222,
]);

export function getUpdateDistributionDiscriminatorBytes() {
  return fixEncoderSize(getBytesEncoder(), 8).encode(
    UPDATE_DISTRIBUTION_DISCRIMINATOR
  );
}

export type UpdateDistributionInstruction<
  TProgram extends string = typeof WEN_ROYALTY_DISTRIBUTION_PROGRAM_ADDRESS,
  TAccountAuthority extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountPaymentMint extends string | IAccountMeta<string> = string,
  TAccountDistributionAccount extends string | IAccountMeta<string> = string,
  TAccountDistributionTokenAccount extends
    | string
    | IAccountMeta<string> = string,
  TAccountAuthorityTokenAccount extends string | IAccountMeta<string> = string,
  TAccountTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountPaymentTokenProgram extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountAuthority extends string
        ? WritableSignerAccount<TAccountAuthority> &
            IAccountSignerMeta<TAccountAuthority>
        : TAccountAuthority,
      TAccountMint extends string
        ? ReadonlyAccount<TAccountMint>
        : TAccountMint,
      TAccountPaymentMint extends string
        ? ReadonlyAccount<TAccountPaymentMint>
        : TAccountPaymentMint,
      TAccountDistributionAccount extends string
        ? WritableAccount<TAccountDistributionAccount>
        : TAccountDistributionAccount,
      TAccountDistributionTokenAccount extends string
        ? WritableAccount<TAccountDistributionTokenAccount>
        : TAccountDistributionTokenAccount,
      TAccountAuthorityTokenAccount extends string
        ? WritableAccount<TAccountAuthorityTokenAccount>
        : TAccountAuthorityTokenAccount,
      TAccountTokenProgram extends string
        ? ReadonlyAccount<TAccountTokenProgram>
        : TAccountTokenProgram,
      TAccountPaymentTokenProgram extends string
        ? ReadonlyAccount<TAccountPaymentTokenProgram>
        : TAccountPaymentTokenProgram,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      ...TRemainingAccounts,
    ]
  >;

export type UpdateDistributionInstructionData = {
  discriminator: ReadonlyUint8Array;
  amount: bigint;
};

export type UpdateDistributionInstructionDataArgs = { amount: number | bigint };

export function getUpdateDistributionInstructionDataEncoder(): Encoder<UpdateDistributionInstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([
      ['discriminator', fixEncoderSize(getBytesEncoder(), 8)],
      ['amount', getU64Encoder()],
    ]),
    (value) => ({ ...value, discriminator: UPDATE_DISTRIBUTION_DISCRIMINATOR })
  );
}

export function getUpdateDistributionInstructionDataDecoder(): Decoder<UpdateDistributionInstructionData> {
  return getStructDecoder([
    ['discriminator', fixDecoderSize(getBytesDecoder(), 8)],
    ['amount', getU64Decoder()],
  ]);
}

export function getUpdateDistributionInstructionDataCodec(): Codec<
  UpdateDistributionInstructionDataArgs,
  UpdateDistributionInstructionData
> {
  return combineCodec(
    getUpdateDistributionInstructionDataEncoder(),
    getUpdateDistributionInstructionDataDecoder()
  );
}

export type UpdateDistributionInput<
  TAccountAuthority extends string = string,
  TAccountMint extends string = string,
  TAccountPaymentMint extends string = string,
  TAccountDistributionAccount extends string = string,
  TAccountDistributionTokenAccount extends string = string,
  TAccountAuthorityTokenAccount extends string = string,
  TAccountTokenProgram extends string = string,
  TAccountPaymentTokenProgram extends string = string,
  TAccountSystemProgram extends string = string,
> = {
  authority: TransactionSigner<TAccountAuthority>;
  mint: Address<TAccountMint>;
  paymentMint: Address<TAccountPaymentMint>;
  distributionAccount: Address<TAccountDistributionAccount>;
  distributionTokenAccount?: Address<TAccountDistributionTokenAccount>;
  authorityTokenAccount?: Address<TAccountAuthorityTokenAccount>;
  tokenProgram?: Address<TAccountTokenProgram>;
  paymentTokenProgram?: Address<TAccountPaymentTokenProgram>;
  systemProgram?: Address<TAccountSystemProgram>;
  amount: UpdateDistributionInstructionDataArgs['amount'];
};

export function getUpdateDistributionInstruction<
  TAccountAuthority extends string,
  TAccountMint extends string,
  TAccountPaymentMint extends string,
  TAccountDistributionAccount extends string,
  TAccountDistributionTokenAccount extends string,
  TAccountAuthorityTokenAccount extends string,
  TAccountTokenProgram extends string,
  TAccountPaymentTokenProgram extends string,
  TAccountSystemProgram extends string,
  TProgramAddress extends
    Address = typeof WEN_ROYALTY_DISTRIBUTION_PROGRAM_ADDRESS,
>(
  input: UpdateDistributionInput<
    TAccountAuthority,
    TAccountMint,
    TAccountPaymentMint,
    TAccountDistributionAccount,
    TAccountDistributionTokenAccount,
    TAccountAuthorityTokenAccount,
    TAccountTokenProgram,
    TAccountPaymentTokenProgram,
    TAccountSystemProgram
  >,
  config?: { programAddress?: TProgramAddress }
): UpdateDistributionInstruction<
  TProgramAddress,
  TAccountAuthority,
  TAccountMint,
  TAccountPaymentMint,
  TAccountDistributionAccount,
  TAccountDistributionTokenAccount,
  TAccountAuthorityTokenAccount,
  TAccountTokenProgram,
  TAccountPaymentTokenProgram,
  TAccountSystemProgram
> {
  // Program address.
  const programAddress =
    config?.programAddress ?? WEN_ROYALTY_DISTRIBUTION_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    authority: { value: input.authority ?? null, isWritable: true },
    mint: { value: input.mint ?? null, isWritable: false },
    paymentMint: { value: input.paymentMint ?? null, isWritable: false },
    distributionAccount: {
      value: input.distributionAccount ?? null,
      isWritable: true,
    },
    distributionTokenAccount: {
      value: input.distributionTokenAccount ?? null,
      isWritable: true,
    },
    authorityTokenAccount: {
      value: input.authorityTokenAccount ?? null,
      isWritable: true,
    },
    tokenProgram: { value: input.tokenProgram ?? null, isWritable: false },
    paymentTokenProgram: {
      value: input.paymentTokenProgram ?? null,
      isWritable: false,
    },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
  };
  const accounts = originalAccounts as Record<
    keyof typeof originalAccounts,
    ResolvedAccount
  >;

  // Original args.
  const args = { ...input };

  // Resolve default values.
  if (!accounts.tokenProgram.value) {
    accounts.tokenProgram.value =
      'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Address<'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'>;
  }
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value =
      '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>;
  }

  const getAccountMeta = getAccountMetaFactory(programAddress, 'programId');
  const instruction = {
    accounts: [
      getAccountMeta(accounts.authority),
      getAccountMeta(accounts.mint),
      getAccountMeta(accounts.paymentMint),
      getAccountMeta(accounts.distributionAccount),
      getAccountMeta(accounts.distributionTokenAccount),
      getAccountMeta(accounts.authorityTokenAccount),
      getAccountMeta(accounts.tokenProgram),
      getAccountMeta(accounts.paymentTokenProgram),
      getAccountMeta(accounts.systemProgram),
    ],
    programAddress,
    data: getUpdateDistributionInstructionDataEncoder().encode(
      args as UpdateDistributionInstructionDataArgs
    ),
  } as UpdateDistributionInstruction<
    TProgramAddress,
    TAccountAuthority,
    TAccountMint,
    TAccountPaymentMint,
    TAccountDistributionAccount,
    TAccountDistributionTokenAccount,
    TAccountAuthorityTokenAccount,
    TAccountTokenProgram,
    TAccountPaymentTokenProgram,
    TAccountSystemProgram
  >;

  return instruction;
}

export type ParsedUpdateDistributionInstruction<
  TProgram extends string = typeof WEN_ROYALTY_DISTRIBUTION_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    authority: TAccountMetas[0];
    mint: TAccountMetas[1];
    paymentMint: TAccountMetas[2];
    distributionAccount: TAccountMetas[3];
    distributionTokenAccount?: TAccountMetas[4] | undefined;
    authorityTokenAccount?: TAccountMetas[5] | undefined;
    tokenProgram: TAccountMetas[6];
    paymentTokenProgram?: TAccountMetas[7] | undefined;
    systemProgram: TAccountMetas[8];
  };
  data: UpdateDistributionInstructionData;
};

export function parseUpdateDistributionInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedUpdateDistributionInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 9) {
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
    return accountMeta.address === WEN_ROYALTY_DISTRIBUTION_PROGRAM_ADDRESS
      ? undefined
      : accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: {
      authority: getNextAccount(),
      mint: getNextAccount(),
      paymentMint: getNextAccount(),
      distributionAccount: getNextAccount(),
      distributionTokenAccount: getNextOptionalAccount(),
      authorityTokenAccount: getNextOptionalAccount(),
      tokenProgram: getNextAccount(),
      paymentTokenProgram: getNextOptionalAccount(),
      systemProgram: getNextAccount(),
    },
    data: getUpdateDistributionInstructionDataDecoder().decode(
      instruction.data
    ),
  };
}
