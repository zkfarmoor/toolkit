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
  ReadonlyAccount,
  ReadonlySignerAccount,
  TransactionSigner,
  WritableAccount,
  combineCodec,
  getStructDecoder,
  getStructEncoder,
  getU8Decoder,
  getU8Encoder,
  transformEncoder,
} from '@solana/web3.js';
import { PHOENIX_V1_PROGRAM_ADDRESS } from '../programs';
import { ResolvedAccount, getAccountMetaFactory } from '../shared';

export type CancelAllOrdersInstruction<
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

export type CancelAllOrdersInstructionData = { discriminator: number };

export type CancelAllOrdersInstructionDataArgs = {};

export function getCancelAllOrdersInstructionDataEncoder(): Encoder<CancelAllOrdersInstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([['discriminator', getU8Encoder()]]),
    (value) => ({ ...value, discriminator: 6 })
  );
}

export function getCancelAllOrdersInstructionDataDecoder(): Decoder<CancelAllOrdersInstructionData> {
  return getStructDecoder([['discriminator', getU8Decoder()]]);
}

export function getCancelAllOrdersInstructionDataCodec(): Codec<
  CancelAllOrdersInstructionDataArgs,
  CancelAllOrdersInstructionData
> {
  return combineCodec(
    getCancelAllOrdersInstructionDataEncoder(),
    getCancelAllOrdersInstructionDataDecoder()
  );
}

export type CancelAllOrdersInput<
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
};

export function getCancelAllOrdersInstruction<
  TAccountPhoenixProgram extends string,
  TAccountLogAuthority extends string,
  TAccountMarket extends string,
  TAccountTrader extends string,
  TAccountBaseAccount extends string,
  TAccountQuoteAccount extends string,
  TAccountBaseVault extends string,
  TAccountQuoteVault extends string,
  TAccountTokenProgram extends string,
>(
  input: CancelAllOrdersInput<
    TAccountPhoenixProgram,
    TAccountLogAuthority,
    TAccountMarket,
    TAccountTrader,
    TAccountBaseAccount,
    TAccountQuoteAccount,
    TAccountBaseVault,
    TAccountQuoteVault,
    TAccountTokenProgram
  >
): CancelAllOrdersInstruction<
  typeof PHOENIX_V1_PROGRAM_ADDRESS,
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
  const programAddress = PHOENIX_V1_PROGRAM_ADDRESS;

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
    data: getCancelAllOrdersInstructionDataEncoder().encode({}),
  } as CancelAllOrdersInstruction<
    typeof PHOENIX_V1_PROGRAM_ADDRESS,
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

export type ParsedCancelAllOrdersInstruction<
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
  data: CancelAllOrdersInstructionData;
};

export function parseCancelAllOrdersInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedCancelAllOrdersInstruction<TProgram, TAccountMetas> {
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
    data: getCancelAllOrdersInstructionDataDecoder().decode(instruction.data),
  };
}