/**
 * This code was AUTOGENERATED using the codama library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun codama to update it.
 *
 * @see https://github.com/codama-idl/codama
 */

import {
  combineCodec,
  getArrayDecoder,
  getArrayEncoder,
  getOptionDecoder,
  getOptionEncoder,
  getStructDecoder,
  getStructEncoder,
  getTupleDecoder,
  getTupleEncoder,
  getU64Decoder,
  getU64Encoder,
  type Codec,
  type Decoder,
  type Encoder,
  type Option,
  type OptionOrNullable,
} from '@solana/web3.js';
import {
  getAuthorityDecoder,
  getAuthorityEncoder,
  getExternalCheckResultDecoder,
  getExternalCheckResultEncoder,
  getExternalPluginAdapterTypeDecoder,
  getExternalPluginAdapterTypeEncoder,
  getHookableLifecycleEventDecoder,
  getHookableLifecycleEventEncoder,
  type Authority,
  type AuthorityArgs,
  type ExternalCheckResult,
  type ExternalCheckResultArgs,
  type ExternalPluginAdapterType,
  type ExternalPluginAdapterTypeArgs,
  type HookableLifecycleEvent,
  type HookableLifecycleEventArgs,
} from '.';

export type ExternalRegistryRecord = {
  pluginType: ExternalPluginAdapterType;
  authority: Authority;
  lifecycleChecks: Option<
    Array<readonly [HookableLifecycleEvent, ExternalCheckResult]>
  >;
  offset: bigint;
  dataOffset: Option<bigint>;
  dataLen: Option<bigint>;
};

export type ExternalRegistryRecordArgs = {
  pluginType: ExternalPluginAdapterTypeArgs;
  authority: AuthorityArgs;
  lifecycleChecks: OptionOrNullable<
    Array<readonly [HookableLifecycleEventArgs, ExternalCheckResultArgs]>
  >;
  offset: number | bigint;
  dataOffset: OptionOrNullable<number | bigint>;
  dataLen: OptionOrNullable<number | bigint>;
};

export function getExternalRegistryRecordEncoder(): Encoder<ExternalRegistryRecordArgs> {
  return getStructEncoder([
    ['pluginType', getExternalPluginAdapterTypeEncoder()],
    ['authority', getAuthorityEncoder()],
    [
      'lifecycleChecks',
      getOptionEncoder(
        getArrayEncoder(
          getTupleEncoder([
            getHookableLifecycleEventEncoder(),
            getExternalCheckResultEncoder(),
          ])
        )
      ),
    ],
    ['offset', getU64Encoder()],
    ['dataOffset', getOptionEncoder(getU64Encoder())],
    ['dataLen', getOptionEncoder(getU64Encoder())],
  ]);
}

export function getExternalRegistryRecordDecoder(): Decoder<ExternalRegistryRecord> {
  return getStructDecoder([
    ['pluginType', getExternalPluginAdapterTypeDecoder()],
    ['authority', getAuthorityDecoder()],
    [
      'lifecycleChecks',
      getOptionDecoder(
        getArrayDecoder(
          getTupleDecoder([
            getHookableLifecycleEventDecoder(),
            getExternalCheckResultDecoder(),
          ])
        )
      ),
    ],
    ['offset', getU64Decoder()],
    ['dataOffset', getOptionDecoder(getU64Decoder())],
    ['dataLen', getOptionDecoder(getU64Decoder())],
  ]);
}

export function getExternalRegistryRecordCodec(): Codec<
  ExternalRegistryRecordArgs,
  ExternalRegistryRecord
> {
  return combineCodec(
    getExternalRegistryRecordEncoder(),
    getExternalRegistryRecordDecoder()
  );
}
