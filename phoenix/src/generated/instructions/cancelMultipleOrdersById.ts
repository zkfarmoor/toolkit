/**
 * This code was AUTOGENERATED using the codama library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun codama to update it.
 *
 * @see https://github.com/codama-idl/codama
 */

import {
  combineCodec,
  getStructDecoder,
  getStructEncoder,
  getU8Decoder,
  getU8Encoder,
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
  type TransactionSigner,
  type WritableAccount,
} from '@solana/web3.js';
import { PHOENIX_V1_PROGRAM_ADDRESS } from '../programs';
import { getAccountMetaFactory, type ResolvedAccount } from '../shared';
import {
  getCancelMultipleOrdersByIdParamsDecoder,
  getCancelMultipleOrdersByIdParamsEncoder,
  type CancelMultipleOrdersByIdParams,
  type CancelMultipleOrdersByIdParamsArgs,
} from '../types';

export const CANCEL_MULTIPLE_ORDERS_BY_ID_DISCRIMINATOR = 10;

export function getCancelMultipleOrdersByIdDiscriminatorBytes() {
  return getU8Encoder().encode(CANCEL_MULTIPLE_ORDERS_BY_ID_DISCRIMINATOR);
}

export type CancelMultipleOrdersByIdInstruction<
  TProgram extends string = typeof PHOENIX_V1_PROGRAM_ADDRESS,
  TAccountPhoenixProgram extends string | IAccountMeta<string> = string,
  TAccountLogAuthority extends string | IAccountMeta<string> = string,
  TAccountMarket extends string | IAccountMeta<string> = string,
  TAccountTrader extends string | IAccountMeta<string> = string,
  TAccountBaseAccount extends string | IAccountMeta<string> = string,
  TAccountQuoteAccount extends string | IAccountMeta<string> = string,
  TAccountBaseVault extends string | IAccountMeta<string> = string,
  TAccountQuoteVault extends string | IAccountMeta<string> = string,
  TAccountTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountPhoenixProgram extends string
        ? ReadonlyAccount<TAccountPhoenixProgram>
        : TAccountPhoenixProgram,
      TAccountLogAuthority extends string
        ? ReadonlyAccount<TAccountLogAuthority>
        : TAccountLogAuthority,
      TAccountMarket extends string
        ? WritableAccount<TAccountMarket>
        : TAccountMarket,
      TAccountTrader extends string
        ? ReadonlyAccount<TAccountTrader>
        : TAccountTrader,
      TAccountBaseAccount extends string
        ? WritableAccount<TAccountBaseAccount>
        : TAccountBaseAccount,
      TAccountQuoteAccount extends string
        ? WritableAccount<TAccountQuoteAccount>
        : TAccountQuoteAccount,
      TAccountBaseVault extends string
        ? WritableAccount<TAccountBaseVault>
        : TAccountBaseVault,
      TAccountQuoteVault extends string
        ? WritableAccount<TAccountQuoteVault>
        : TAccountQuoteVault,
      TAccountTokenProgram extends string
        ? ReadonlyAccount<TAccountTokenProgram>
        : TAccountTokenProgram,
      ...TRemainingAccounts,
    ]
  >;

export type CancelMultipleOrdersByIdInstructionData = {
  discriminator: number;
  params: CancelMultipleOrdersByIdParams;
};

export type CancelMultipleOrdersByIdInstructionDataArgs = {
  params: CancelMultipleOrdersByIdParamsArgs;
};

export function getCancelMultipleOrdersByIdInstructionDataEncoder(): Encoder<CancelMultipleOrdersByIdInstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([
      ['discriminator', getU8Encoder()],
      ['params', getCancelMultipleOrdersByIdParamsEncoder()],
    ]),
    (value) => ({
      ...value,
      discriminator: CANCEL_MULTIPLE_ORDERS_BY_ID_DISCRIMINATOR,
    })
  );
}

export function getCancelMultipleOrdersByIdInstructionDataDecoder(): Decoder<CancelMultipleOrdersByIdInstructionData> {
  return getStructDecoder([
    ['discriminator', getU8Decoder()],
    ['params', getCancelMultipleOrdersByIdParamsDecoder()],
  ]);
}

export function getCancelMultipleOrdersByIdInstructionDataCodec(): Codec<
  CancelMultipleOrdersByIdInstructionDataArgs,
  CancelMultipleOrdersByIdInstructionData
> {
  return combineCodec(
    getCancelMultipleOrdersByIdInstructionDataEncoder(),
    getCancelMultipleOrdersByIdInstructionDataDecoder()
  );
}

export type CancelMultipleOrdersByIdInput<
  TAccountPhoenixProgram extends string = string,
  TAccountLogAuthority extends string = string,
  TAccountMarket extends string = string,
  TAccountTrader extends string = string,
  TAccountBaseAccount extends string = string,
  TAccountQuoteAccount extends string = string,
  TAccountBaseVault extends string = string,
  TAccountQuoteVault extends string = string,
  TAccountTokenProgram extends string = string,
> = {
  /** Phoenix program */
  phoenixProgram: Address<TAccountPhoenixProgram>;
  /** Phoenix log authority */
  logAuthority: Address<TAccountLogAuthority>;
  /** This account holds the market state */
  market: Address<TAccountMarket>;
  trader: Address<TAccountTrader> | TransactionSigner<TAccountTrader>;
  /** Trader base token account */
  baseAccount: Address<TAccountBaseAccount>;
  /** Trader quote token account */
  quoteAccount: Address<TAccountQuoteAccount>;
  /** Base vault PDA, seeds are [b'vault', market_address, base_mint_address] */
  baseVault: Address<TAccountBaseVault>;
  /** Quote vault PDA, seeds are [b'vault', market_address, quote_mint_address] */
  quoteVault: Address<TAccountQuoteVault>;
  /** Token program */
  tokenProgram?: Address<TAccountTokenProgram>;
  params: CancelMultipleOrdersByIdInstructionDataArgs['params'];
};

export function getCancelMultipleOrdersByIdInstruction<
  TAccountPhoenixProgram extends string,
  TAccountLogAuthority extends string,
  TAccountMarket extends string,
  TAccountTrader extends string,
  TAccountBaseAccount extends string,
  TAccountQuoteAccount extends string,
  TAccountBaseVault extends string,
  TAccountQuoteVault extends string,
  TAccountTokenProgram extends string,
  TProgramAddress extends Address = typeof PHOENIX_V1_PROGRAM_ADDRESS,
>(
  input: CancelMultipleOrdersByIdInput<
    TAccountPhoenixProgram,
    TAccountLogAuthority,
    TAccountMarket,
    TAccountTrader,
    TAccountBaseAccount,
    TAccountQuoteAccount,
    TAccountBaseVault,
    TAccountQuoteVault,
    TAccountTokenProgram
  >,
  config?: { programAddress?: TProgramAddress }
): CancelMultipleOrdersByIdInstruction<
  TProgramAddress,
  TAccountPhoenixProgram,
  TAccountLogAuthority,
  TAccountMarket,
  (typeof input)['trader'] extends TransactionSigner<TAccountTrader>
    ? ReadonlySignerAccount<TAccountTrader> & IAccountSignerMeta<TAccountTrader>
    : TAccountTrader,
  TAccountBaseAccount,
  TAccountQuoteAccount,
  TAccountBaseVault,
  TAccountQuoteVault,
  TAccountTokenProgram
> {
  // Program address.
  const programAddress = config?.programAddress ?? PHOENIX_V1_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    phoenixProgram: { value: input.phoenixProgram ?? null, isWritable: false },
    logAuthority: { value: input.logAuthority ?? null, isWritable: false },
    market: { value: input.market ?? null, isWritable: true },
    trader: { value: input.trader ?? null, isWritable: false },
    baseAccount: { value: input.baseAccount ?? null, isWritable: true },
    quoteAccount: { value: input.quoteAccount ?? null, isWritable: true },
    baseVault: { value: input.baseVault ?? null, isWritable: true },
    quoteVault: { value: input.quoteVault ?? null, isWritable: true },
    tokenProgram: { value: input.tokenProgram ?? null, isWritable: false },
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

  const getAccountMeta = getAccountMetaFactory(programAddress, 'programId');
  const instruction = {
    accounts: [
      getAccountMeta(accounts.phoenixProgram),
      getAccountMeta(accounts.logAuthority),
      getAccountMeta(accounts.market),
      getAccountMeta(accounts.trader),
      getAccountMeta(accounts.baseAccount),
      getAccountMeta(accounts.quoteAccount),
      getAccountMeta(accounts.baseVault),
      getAccountMeta(accounts.quoteVault),
      getAccountMeta(accounts.tokenProgram),
    ],
    programAddress,
    data: getCancelMultipleOrdersByIdInstructionDataEncoder().encode(
      args as CancelMultipleOrdersByIdInstructionDataArgs
    ),
  } as CancelMultipleOrdersByIdInstruction<
    TProgramAddress,
    TAccountPhoenixProgram,
    TAccountLogAuthority,
    TAccountMarket,
    (typeof input)['trader'] extends TransactionSigner<TAccountTrader>
      ? ReadonlySignerAccount<TAccountTrader> &
          IAccountSignerMeta<TAccountTrader>
      : TAccountTrader,
    TAccountBaseAccount,
    TAccountQuoteAccount,
    TAccountBaseVault,
    TAccountQuoteVault,
    TAccountTokenProgram
  >;

  return instruction;
}

export type ParsedCancelMultipleOrdersByIdInstruction<
  TProgram extends string = typeof PHOENIX_V1_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    /** Phoenix program */
    phoenixProgram: TAccountMetas[0];
    /** Phoenix log authority */
    logAuthority: TAccountMetas[1];
    /** This account holds the market state */
    market: TAccountMetas[2];
    trader: TAccountMetas[3];
    /** Trader base token account */
    baseAccount: TAccountMetas[4];
    /** Trader quote token account */
    quoteAccount: TAccountMetas[5];
    /** Base vault PDA, seeds are [b'vault', market_address, base_mint_address] */
    baseVault: TAccountMetas[6];
    /** Quote vault PDA, seeds are [b'vault', market_address, quote_mint_address] */
    quoteVault: TAccountMetas[7];
    /** Token program */
    tokenProgram: TAccountMetas[8];
  };
  data: CancelMultipleOrdersByIdInstructionData;
};

export function parseCancelMultipleOrdersByIdInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedCancelMultipleOrdersByIdInstruction<TProgram, TAccountMetas> {
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
  return {
    programAddress: instruction.programAddress,
    accounts: {
      phoenixProgram: getNextAccount(),
      logAuthority: getNextAccount(),
      market: getNextAccount(),
      trader: getNextAccount(),
      baseAccount: getNextAccount(),
      quoteAccount: getNextAccount(),
      baseVault: getNextAccount(),
      quoteVault: getNextAccount(),
      tokenProgram: getNextAccount(),
    },
    data: getCancelMultipleOrdersByIdInstructionDataDecoder().decode(
      instruction.data
    ),
  };
}
