/**
 * This code was AUTOGENERATED using the codama library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun codama to update it.
 *
 * @see https://github.com/codama-idl/codama
 */

import {
  isProgramError,
  type Address,
  type SOLANA_ERROR__INSTRUCTION_ERROR__CUSTOM,
  type SolanaError,
} from '@solana/web3.js';
import { PHOENIX_V1_PROGRAM_ADDRESS } from '../programs';

/** InvalidMarketParameters: Invalid market parameters error */
export const PHOENIX_V1_ERROR__INVALID_MARKET_PARAMETERS = 0x0; // 0
/** InvalidMarketAuthority: Invalid market authority error */
export const PHOENIX_V1_ERROR__INVALID_MARKET_AUTHORITY = 0x1; // 1
/** FailedToLoadMarketFromAccount: Market deserialization error */
export const PHOENIX_V1_ERROR__FAILED_TO_LOAD_MARKET_FROM_ACCOUNT = 0x2; // 2
/** MarketAlreadyInitialized: Market already initialized error */
export const PHOENIX_V1_ERROR__MARKET_ALREADY_INITIALIZED = 0x3; // 3
/** MarketUninitialized: Market is not initialized error */
export const PHOENIX_V1_ERROR__MARKET_UNINITIALIZED = 0x4; // 4
/** InvalidStateTransition: Invalid state transition error */
export const PHOENIX_V1_ERROR__INVALID_STATE_TRANSITION = 0x5; // 5
/** InvalidMarketSigner: Invalid market signer error */
export const PHOENIX_V1_ERROR__INVALID_MARKET_SIGNER = 0x6; // 6
/** InvalidLotSize: Invalid lot size error */
export const PHOENIX_V1_ERROR__INVALID_LOT_SIZE = 0x7; // 7
/** InvalidTickSize: Invalid tick size error */
export const PHOENIX_V1_ERROR__INVALID_TICK_SIZE = 0x8; // 8
/** InvalidMint: Invalid mint error */
export const PHOENIX_V1_ERROR__INVALID_MINT = 0x9; // 9
/** InvalidBaseVault: Invalid base vault error */
export const PHOENIX_V1_ERROR__INVALID_BASE_VAULT = 0xa; // 10
/** InvalidQuoteVault: Invalid quote vault error */
export const PHOENIX_V1_ERROR__INVALID_QUOTE_VAULT = 0xb; // 11
/** InvalidBaseAccount: Invalid base account error */
export const PHOENIX_V1_ERROR__INVALID_BASE_ACCOUNT = 0xc; // 12
/** InvalidQuoteAccount: Invalid quote account error */
export const PHOENIX_V1_ERROR__INVALID_QUOTE_ACCOUNT = 0xd; // 13
/** TooManyEvents: Too many events error */
export const PHOENIX_V1_ERROR__TOO_MANY_EVENTS = 0xe; // 14
/** NewOrderError: New order error */
export const PHOENIX_V1_ERROR__NEW_ORDER_ERROR = 0xf; // 15
/** ReduceOrderError: Reduce order error */
export const PHOENIX_V1_ERROR__REDUCE_ORDER_ERROR = 0x10; // 16
/** CancelMultipleOrdersError: Cancel multiple orders error */
export const PHOENIX_V1_ERROR__CANCEL_MULTIPLE_ORDERS_ERROR = 0x11; // 17
/** WithdrawFundsError: Withdraw funds error */
export const PHOENIX_V1_ERROR__WITHDRAW_FUNDS_ERROR = 0x12; // 18
/** RemoveEmptyOrdersError: Remove empty orders error */
export const PHOENIX_V1_ERROR__REMOVE_EMPTY_ORDERS_ERROR = 0x13; // 19
/** TraderNotFound: Trader not found error */
export const PHOENIX_V1_ERROR__TRADER_NOT_FOUND = 0x14; // 20
/** InvalidSeatStatus: Invalid seat status */
export const PHOENIX_V1_ERROR__INVALID_SEAT_STATUS = 0x15; // 21
/** EvictionError: Failed to evict trader */
export const PHOENIX_V1_ERROR__EVICTION_ERROR = 0x16; // 22
/** NonEmptyScratchBuffer: Non empty scratch buffer */
export const PHOENIX_V1_ERROR__NON_EMPTY_SCRATCH_BUFFER = 0x17; // 23
/** FailedToSerializeEvent: Failed to serialize event */
export const PHOENIX_V1_ERROR__FAILED_TO_SERIALIZE_EVENT = 0x18; // 24
/** FailedToFlushBuffer: Failed to flush buffer */
export const PHOENIX_V1_ERROR__FAILED_TO_FLUSH_BUFFER = 0x19; // 25

export type PhoenixV1Error =
  | typeof PHOENIX_V1_ERROR__CANCEL_MULTIPLE_ORDERS_ERROR
  | typeof PHOENIX_V1_ERROR__EVICTION_ERROR
  | typeof PHOENIX_V1_ERROR__FAILED_TO_FLUSH_BUFFER
  | typeof PHOENIX_V1_ERROR__FAILED_TO_LOAD_MARKET_FROM_ACCOUNT
  | typeof PHOENIX_V1_ERROR__FAILED_TO_SERIALIZE_EVENT
  | typeof PHOENIX_V1_ERROR__INVALID_BASE_ACCOUNT
  | typeof PHOENIX_V1_ERROR__INVALID_BASE_VAULT
  | typeof PHOENIX_V1_ERROR__INVALID_LOT_SIZE
  | typeof PHOENIX_V1_ERROR__INVALID_MARKET_AUTHORITY
  | typeof PHOENIX_V1_ERROR__INVALID_MARKET_PARAMETERS
  | typeof PHOENIX_V1_ERROR__INVALID_MARKET_SIGNER
  | typeof PHOENIX_V1_ERROR__INVALID_MINT
  | typeof PHOENIX_V1_ERROR__INVALID_QUOTE_ACCOUNT
  | typeof PHOENIX_V1_ERROR__INVALID_QUOTE_VAULT
  | typeof PHOENIX_V1_ERROR__INVALID_SEAT_STATUS
  | typeof PHOENIX_V1_ERROR__INVALID_STATE_TRANSITION
  | typeof PHOENIX_V1_ERROR__INVALID_TICK_SIZE
  | typeof PHOENIX_V1_ERROR__MARKET_ALREADY_INITIALIZED
  | typeof PHOENIX_V1_ERROR__MARKET_UNINITIALIZED
  | typeof PHOENIX_V1_ERROR__NEW_ORDER_ERROR
  | typeof PHOENIX_V1_ERROR__NON_EMPTY_SCRATCH_BUFFER
  | typeof PHOENIX_V1_ERROR__REDUCE_ORDER_ERROR
  | typeof PHOENIX_V1_ERROR__REMOVE_EMPTY_ORDERS_ERROR
  | typeof PHOENIX_V1_ERROR__TOO_MANY_EVENTS
  | typeof PHOENIX_V1_ERROR__TRADER_NOT_FOUND
  | typeof PHOENIX_V1_ERROR__WITHDRAW_FUNDS_ERROR;

let phoenixV1ErrorMessages: Record<PhoenixV1Error, string> | undefined;
if (process.env.NODE_ENV !== 'production') {
  phoenixV1ErrorMessages = {
    [PHOENIX_V1_ERROR__CANCEL_MULTIPLE_ORDERS_ERROR]: `Cancel multiple orders error`,
    [PHOENIX_V1_ERROR__EVICTION_ERROR]: `Failed to evict trader`,
    [PHOENIX_V1_ERROR__FAILED_TO_FLUSH_BUFFER]: `Failed to flush buffer`,
    [PHOENIX_V1_ERROR__FAILED_TO_LOAD_MARKET_FROM_ACCOUNT]: `Market deserialization error`,
    [PHOENIX_V1_ERROR__FAILED_TO_SERIALIZE_EVENT]: `Failed to serialize event`,
    [PHOENIX_V1_ERROR__INVALID_BASE_ACCOUNT]: `Invalid base account error`,
    [PHOENIX_V1_ERROR__INVALID_BASE_VAULT]: `Invalid base vault error`,
    [PHOENIX_V1_ERROR__INVALID_LOT_SIZE]: `Invalid lot size error`,
    [PHOENIX_V1_ERROR__INVALID_MARKET_AUTHORITY]: `Invalid market authority error`,
    [PHOENIX_V1_ERROR__INVALID_MARKET_PARAMETERS]: `Invalid market parameters error`,
    [PHOENIX_V1_ERROR__INVALID_MARKET_SIGNER]: `Invalid market signer error`,
    [PHOENIX_V1_ERROR__INVALID_MINT]: `Invalid mint error`,
    [PHOENIX_V1_ERROR__INVALID_QUOTE_ACCOUNT]: `Invalid quote account error`,
    [PHOENIX_V1_ERROR__INVALID_QUOTE_VAULT]: `Invalid quote vault error`,
    [PHOENIX_V1_ERROR__INVALID_SEAT_STATUS]: `Invalid seat status`,
    [PHOENIX_V1_ERROR__INVALID_STATE_TRANSITION]: `Invalid state transition error`,
    [PHOENIX_V1_ERROR__INVALID_TICK_SIZE]: `Invalid tick size error`,
    [PHOENIX_V1_ERROR__MARKET_ALREADY_INITIALIZED]: `Market already initialized error`,
    [PHOENIX_V1_ERROR__MARKET_UNINITIALIZED]: `Market is not initialized error`,
    [PHOENIX_V1_ERROR__NEW_ORDER_ERROR]: `New order error`,
    [PHOENIX_V1_ERROR__NON_EMPTY_SCRATCH_BUFFER]: `Non empty scratch buffer`,
    [PHOENIX_V1_ERROR__REDUCE_ORDER_ERROR]: `Reduce order error`,
    [PHOENIX_V1_ERROR__REMOVE_EMPTY_ORDERS_ERROR]: `Remove empty orders error`,
    [PHOENIX_V1_ERROR__TOO_MANY_EVENTS]: `Too many events error`,
    [PHOENIX_V1_ERROR__TRADER_NOT_FOUND]: `Trader not found error`,
    [PHOENIX_V1_ERROR__WITHDRAW_FUNDS_ERROR]: `Withdraw funds error`,
  };
}

export function getPhoenixV1ErrorMessage(code: PhoenixV1Error): string {
  if (process.env.NODE_ENV !== 'production') {
    return (phoenixV1ErrorMessages as Record<PhoenixV1Error, string>)[code];
  }

  return 'Error message not available in production bundles.';
}

export function isPhoenixV1Error<TProgramErrorCode extends PhoenixV1Error>(
  error: unknown,
  transactionMessage: {
    instructions: Record<number, { programAddress: Address }>;
  },
  code?: TProgramErrorCode
): error is SolanaError<typeof SOLANA_ERROR__INSTRUCTION_ERROR__CUSTOM> &
  Readonly<{ context: Readonly<{ code: TProgramErrorCode }> }> {
  return isProgramError<TProgramErrorCode>(
    error,
    transactionMessage,
    PHOENIX_V1_PROGRAM_ADDRESS,
    code
  );
}
