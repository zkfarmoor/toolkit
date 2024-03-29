/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Address } from '@solana/addresses';
import { getU8Encoder } from '@solana/codecs';
import { Program, ProgramWithErrors } from '@solana/programs';
import {
  MplTokenMetadataProgramError,
  MplTokenMetadataProgramErrorCode,
  getMplTokenMetadataProgramErrorFromCode,
} from '../errors';
import {
  ParsedApproveCollectionAuthorityInstruction,
  ParsedApproveUseAuthorityInstruction,
  ParsedBubblegumSetCollectionSizeInstruction,
  ParsedBurnEditionNftInstruction,
  ParsedBurnNftInstruction,
  ParsedBurnV1Instruction,
  ParsedCloseEscrowAccountInstruction,
  ParsedCollectInstruction,
  ParsedConvertMasterEditionV1ToV2Instruction,
  ParsedCreateEscrowAccountInstruction,
  ParsedCreateMasterEditionV3Instruction,
  ParsedCreateMetadataAccountV3Instruction,
  ParsedCreateV1Instruction,
  ParsedDeprecatedMintNewEditionFromMasterEditionViaPrintingTokenInstruction,
  ParsedFreezeDelegatedAccountInstruction,
  ParsedLockV1Instruction,
  ParsedMigrateInstruction,
  ParsedMintNewEditionFromMasterEditionViaTokenInstruction,
  ParsedMintNewEditionFromMasterEditionViaVaultProxyInstruction,
  ParsedMintV1Instruction,
  ParsedPrintV1Instruction,
  ParsedPuffMetadataInstruction,
  ParsedRemoveCreatorVerificationInstruction,
  ParsedSetAndVerifyCollectionInstruction,
  ParsedSetAndVerifySizedCollectionItemInstruction,
  ParsedSetCollectionSizeInstruction,
  ParsedSetTokenStandardInstruction,
  ParsedSignMetadataInstruction,
  ParsedThawDelegatedAccountInstruction,
  ParsedTransferOutOfEscrowInstruction,
  ParsedTransferV1Instruction,
  ParsedUnlockV1Instruction,
  ParsedUnverifyCollectionInstruction,
  ParsedUnverifyCollectionV1Instruction,
  ParsedUnverifyCreatorV1Instruction,
  ParsedUnverifySizedCollectionItemInstruction,
  ParsedUseV1Instruction,
  ParsedUtilizeInstruction,
  ParsedVerifyCollectionInstruction,
  ParsedVerifyCollectionV1Instruction,
  ParsedVerifyCreatorV1Instruction,
  ParsedVerifySizedCollectionItemInstruction,
} from '../instructions';
import { memcmp } from '../shared';
import { Key, getKeyEncoder } from '../types';

export const MPL_TOKEN_METADATA_PROGRAM_ADDRESS =
  'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>;

export type MplTokenMetadataProgram =
  Program<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'> &
    ProgramWithErrors<
      MplTokenMetadataProgramErrorCode,
      MplTokenMetadataProgramError
    >;

export function getMplTokenMetadataProgram(): MplTokenMetadataProgram {
  return {
    name: 'mplTokenMetadata',
    address: MPL_TOKEN_METADATA_PROGRAM_ADDRESS,
    getErrorFromCode(code: MplTokenMetadataProgramErrorCode, cause?: Error) {
      return getMplTokenMetadataProgramErrorFromCode(code, cause);
    },
  };
}

export enum MplTokenMetadataAccount {
  CollectionAuthorityRecord,
  MetadataDelegateRecord,
  Edition,
  EditionMarker,
  EditionMarkerV2,
  TokenOwnedEscrow,
  MasterEdition,
  Metadata,
  TokenRecord,
  UseAuthorityRecord,
}

export function identifyMplTokenMetadataAccount(
  account: { data: Uint8Array } | Uint8Array
): MplTokenMetadataAccount {
  const data = account instanceof Uint8Array ? account : account.data;
  if (memcmp(data, getKeyEncoder().encode(Key.CollectionAuthorityRecord), 0)) {
    return MplTokenMetadataAccount.CollectionAuthorityRecord;
  }
  if (memcmp(data, getKeyEncoder().encode(Key.EditionV1), 0)) {
    return MplTokenMetadataAccount.Edition;
  }
  if (memcmp(data, getKeyEncoder().encode(Key.EditionMarker), 0)) {
    return MplTokenMetadataAccount.EditionMarker;
  }
  if (memcmp(data, getKeyEncoder().encode(Key.TokenOwnedEscrow), 0)) {
    return MplTokenMetadataAccount.TokenOwnedEscrow;
  }
  if (memcmp(data, getKeyEncoder().encode(Key.MasterEditionV2), 0)) {
    return MplTokenMetadataAccount.MasterEdition;
  }
  if (memcmp(data, getKeyEncoder().encode(Key.MetadataV1), 0)) {
    return MplTokenMetadataAccount.Metadata;
  }
  if (memcmp(data, getKeyEncoder().encode(Key.TokenRecord), 0)) {
    return MplTokenMetadataAccount.TokenRecord;
  }
  if (memcmp(data, getKeyEncoder().encode(Key.UseAuthorityRecord), 0)) {
    return MplTokenMetadataAccount.UseAuthorityRecord;
  }
  throw new Error(
    'The provided account could not be identified as a mplTokenMetadata account.'
  );
}

export enum MplTokenMetadataInstruction {
  DeprecatedMintNewEditionFromMasterEditionViaPrintingToken,
  SignMetadata,
  MintNewEditionFromMasterEditionViaToken,
  ConvertMasterEditionV1ToV2,
  MintNewEditionFromMasterEditionViaVaultProxy,
  PuffMetadata,
  CreateMasterEditionV3,
  VerifyCollection,
  Utilize,
  ApproveUseAuthority,
  UnverifyCollection,
  ApproveCollectionAuthority,
  SetAndVerifyCollection,
  FreezeDelegatedAccount,
  ThawDelegatedAccount,
  RemoveCreatorVerification,
  BurnNft,
  VerifySizedCollectionItem,
  UnverifySizedCollectionItem,
  SetAndVerifySizedCollectionItem,
  CreateMetadataAccountV3,
  SetCollectionSize,
  SetTokenStandard,
  BubblegumSetCollectionSize,
  BurnEditionNft,
  CreateEscrowAccount,
  CloseEscrowAccount,
  TransferOutOfEscrow,
  BurnV1,
  CreateV1,
  MintV1,
  LockV1,
  UnlockV1,
  Migrate,
  TransferV1,
  UseV1,
  VerifyCreatorV1,
  VerifyCollectionV1,
  UnverifyCreatorV1,
  UnverifyCollectionV1,
  Collect,
  PrintV1,
}

export function identifyMplTokenMetadataInstruction(
  instruction: { data: Uint8Array } | Uint8Array
): MplTokenMetadataInstruction {
  const data =
    instruction instanceof Uint8Array ? instruction : instruction.data;
  if (memcmp(data, getU8Encoder().encode(3), 0)) {
    return MplTokenMetadataInstruction.DeprecatedMintNewEditionFromMasterEditionViaPrintingToken;
  }
  if (memcmp(data, getU8Encoder().encode(7), 0)) {
    return MplTokenMetadataInstruction.SignMetadata;
  }
  if (memcmp(data, getU8Encoder().encode(11), 0)) {
    return MplTokenMetadataInstruction.MintNewEditionFromMasterEditionViaToken;
  }
  if (memcmp(data, getU8Encoder().encode(12), 0)) {
    return MplTokenMetadataInstruction.ConvertMasterEditionV1ToV2;
  }
  if (memcmp(data, getU8Encoder().encode(13), 0)) {
    return MplTokenMetadataInstruction.MintNewEditionFromMasterEditionViaVaultProxy;
  }
  if (memcmp(data, getU8Encoder().encode(14), 0)) {
    return MplTokenMetadataInstruction.PuffMetadata;
  }
  if (memcmp(data, getU8Encoder().encode(17), 0)) {
    return MplTokenMetadataInstruction.CreateMasterEditionV3;
  }
  if (memcmp(data, getU8Encoder().encode(18), 0)) {
    return MplTokenMetadataInstruction.VerifyCollection;
  }
  if (memcmp(data, getU8Encoder().encode(19), 0)) {
    return MplTokenMetadataInstruction.Utilize;
  }
  if (memcmp(data, getU8Encoder().encode(20), 0)) {
    return MplTokenMetadataInstruction.ApproveUseAuthority;
  }
  if (memcmp(data, getU8Encoder().encode(22), 0)) {
    return MplTokenMetadataInstruction.UnverifyCollection;
  }
  if (memcmp(data, getU8Encoder().encode(23), 0)) {
    return MplTokenMetadataInstruction.ApproveCollectionAuthority;
  }
  if (memcmp(data, getU8Encoder().encode(25), 0)) {
    return MplTokenMetadataInstruction.SetAndVerifyCollection;
  }
  if (memcmp(data, getU8Encoder().encode(26), 0)) {
    return MplTokenMetadataInstruction.FreezeDelegatedAccount;
  }
  if (memcmp(data, getU8Encoder().encode(27), 0)) {
    return MplTokenMetadataInstruction.ThawDelegatedAccount;
  }
  if (memcmp(data, getU8Encoder().encode(28), 0)) {
    return MplTokenMetadataInstruction.RemoveCreatorVerification;
  }
  if (memcmp(data, getU8Encoder().encode(29), 0)) {
    return MplTokenMetadataInstruction.BurnNft;
  }
  if (memcmp(data, getU8Encoder().encode(30), 0)) {
    return MplTokenMetadataInstruction.VerifySizedCollectionItem;
  }
  if (memcmp(data, getU8Encoder().encode(31), 0)) {
    return MplTokenMetadataInstruction.UnverifySizedCollectionItem;
  }
  if (memcmp(data, getU8Encoder().encode(32), 0)) {
    return MplTokenMetadataInstruction.SetAndVerifySizedCollectionItem;
  }
  if (memcmp(data, getU8Encoder().encode(33), 0)) {
    return MplTokenMetadataInstruction.CreateMetadataAccountV3;
  }
  if (memcmp(data, getU8Encoder().encode(34), 0)) {
    return MplTokenMetadataInstruction.SetCollectionSize;
  }
  if (memcmp(data, getU8Encoder().encode(35), 0)) {
    return MplTokenMetadataInstruction.SetTokenStandard;
  }
  if (memcmp(data, getU8Encoder().encode(36), 0)) {
    return MplTokenMetadataInstruction.BubblegumSetCollectionSize;
  }
  if (memcmp(data, getU8Encoder().encode(37), 0)) {
    return MplTokenMetadataInstruction.BurnEditionNft;
  }
  if (memcmp(data, getU8Encoder().encode(38), 0)) {
    return MplTokenMetadataInstruction.CreateEscrowAccount;
  }
  if (memcmp(data, getU8Encoder().encode(39), 0)) {
    return MplTokenMetadataInstruction.CloseEscrowAccount;
  }
  if (memcmp(data, getU8Encoder().encode(40), 0)) {
    return MplTokenMetadataInstruction.TransferOutOfEscrow;
  }
  if (memcmp(data, getU8Encoder().encode(41), 0)) {
    return MplTokenMetadataInstruction.BurnV1;
  }
  if (memcmp(data, getU8Encoder().encode(42), 0)) {
    return MplTokenMetadataInstruction.CreateV1;
  }
  if (memcmp(data, getU8Encoder().encode(43), 0)) {
    return MplTokenMetadataInstruction.MintV1;
  }
  if (memcmp(data, getU8Encoder().encode(46), 0)) {
    return MplTokenMetadataInstruction.LockV1;
  }
  if (memcmp(data, getU8Encoder().encode(47), 0)) {
    return MplTokenMetadataInstruction.UnlockV1;
  }
  if (memcmp(data, getU8Encoder().encode(48), 0)) {
    return MplTokenMetadataInstruction.Migrate;
  }
  if (memcmp(data, getU8Encoder().encode(49), 0)) {
    return MplTokenMetadataInstruction.TransferV1;
  }
  if (memcmp(data, getU8Encoder().encode(51), 0)) {
    return MplTokenMetadataInstruction.UseV1;
  }
  if (memcmp(data, getU8Encoder().encode(52), 0)) {
    return MplTokenMetadataInstruction.VerifyCreatorV1;
  }
  if (memcmp(data, getU8Encoder().encode(52), 0)) {
    return MplTokenMetadataInstruction.VerifyCollectionV1;
  }
  if (memcmp(data, getU8Encoder().encode(53), 0)) {
    return MplTokenMetadataInstruction.UnverifyCreatorV1;
  }
  if (memcmp(data, getU8Encoder().encode(53), 0)) {
    return MplTokenMetadataInstruction.UnverifyCollectionV1;
  }
  if (memcmp(data, getU8Encoder().encode(54), 0)) {
    return MplTokenMetadataInstruction.Collect;
  }
  if (memcmp(data, getU8Encoder().encode(55), 0)) {
    return MplTokenMetadataInstruction.PrintV1;
  }
  throw new Error(
    'The provided instruction could not be identified as a mplTokenMetadata instruction.'
  );
}

export type ParsedMplTokenMetadataInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
> =
  | ({
      instructionType: MplTokenMetadataInstruction.DeprecatedMintNewEditionFromMasterEditionViaPrintingToken;
    } & ParsedDeprecatedMintNewEditionFromMasterEditionViaPrintingTokenInstruction<TProgram>)
  | ({
      instructionType: MplTokenMetadataInstruction.SignMetadata;
    } & ParsedSignMetadataInstruction<TProgram>)
  | ({
      instructionType: MplTokenMetadataInstruction.MintNewEditionFromMasterEditionViaToken;
    } & ParsedMintNewEditionFromMasterEditionViaTokenInstruction<TProgram>)
  | ({
      instructionType: MplTokenMetadataInstruction.ConvertMasterEditionV1ToV2;
    } & ParsedConvertMasterEditionV1ToV2Instruction<TProgram>)
  | ({
      instructionType: MplTokenMetadataInstruction.MintNewEditionFromMasterEditionViaVaultProxy;
    } & ParsedMintNewEditionFromMasterEditionViaVaultProxyInstruction<TProgram>)
  | ({
      instructionType: MplTokenMetadataInstruction.PuffMetadata;
    } & ParsedPuffMetadataInstruction<TProgram>)
  | ({
      instructionType: MplTokenMetadataInstruction.CreateMasterEditionV3;
    } & ParsedCreateMasterEditionV3Instruction<TProgram>)
  | ({
      instructionType: MplTokenMetadataInstruction.VerifyCollection;
    } & ParsedVerifyCollectionInstruction<TProgram>)
  | ({
      instructionType: MplTokenMetadataInstruction.Utilize;
    } & ParsedUtilizeInstruction<TProgram>)
  | ({
      instructionType: MplTokenMetadataInstruction.ApproveUseAuthority;
    } & ParsedApproveUseAuthorityInstruction<TProgram>)
  | ({
      instructionType: MplTokenMetadataInstruction.UnverifyCollection;
    } & ParsedUnverifyCollectionInstruction<TProgram>)
  | ({
      instructionType: MplTokenMetadataInstruction.ApproveCollectionAuthority;
    } & ParsedApproveCollectionAuthorityInstruction<TProgram>)
  | ({
      instructionType: MplTokenMetadataInstruction.SetAndVerifyCollection;
    } & ParsedSetAndVerifyCollectionInstruction<TProgram>)
  | ({
      instructionType: MplTokenMetadataInstruction.FreezeDelegatedAccount;
    } & ParsedFreezeDelegatedAccountInstruction<TProgram>)
  | ({
      instructionType: MplTokenMetadataInstruction.ThawDelegatedAccount;
    } & ParsedThawDelegatedAccountInstruction<TProgram>)
  | ({
      instructionType: MplTokenMetadataInstruction.RemoveCreatorVerification;
    } & ParsedRemoveCreatorVerificationInstruction<TProgram>)
  | ({
      instructionType: MplTokenMetadataInstruction.BurnNft;
    } & ParsedBurnNftInstruction<TProgram>)
  | ({
      instructionType: MplTokenMetadataInstruction.VerifySizedCollectionItem;
    } & ParsedVerifySizedCollectionItemInstruction<TProgram>)
  | ({
      instructionType: MplTokenMetadataInstruction.UnverifySizedCollectionItem;
    } & ParsedUnverifySizedCollectionItemInstruction<TProgram>)
  | ({
      instructionType: MplTokenMetadataInstruction.SetAndVerifySizedCollectionItem;
    } & ParsedSetAndVerifySizedCollectionItemInstruction<TProgram>)
  | ({
      instructionType: MplTokenMetadataInstruction.CreateMetadataAccountV3;
    } & ParsedCreateMetadataAccountV3Instruction<TProgram>)
  | ({
      instructionType: MplTokenMetadataInstruction.SetCollectionSize;
    } & ParsedSetCollectionSizeInstruction<TProgram>)
  | ({
      instructionType: MplTokenMetadataInstruction.SetTokenStandard;
    } & ParsedSetTokenStandardInstruction<TProgram>)
  | ({
      instructionType: MplTokenMetadataInstruction.BubblegumSetCollectionSize;
    } & ParsedBubblegumSetCollectionSizeInstruction<TProgram>)
  | ({
      instructionType: MplTokenMetadataInstruction.BurnEditionNft;
    } & ParsedBurnEditionNftInstruction<TProgram>)
  | ({
      instructionType: MplTokenMetadataInstruction.CreateEscrowAccount;
    } & ParsedCreateEscrowAccountInstruction<TProgram>)
  | ({
      instructionType: MplTokenMetadataInstruction.CloseEscrowAccount;
    } & ParsedCloseEscrowAccountInstruction<TProgram>)
  | ({
      instructionType: MplTokenMetadataInstruction.TransferOutOfEscrow;
    } & ParsedTransferOutOfEscrowInstruction<TProgram>)
  | ({
      instructionType: MplTokenMetadataInstruction.BurnV1;
    } & ParsedBurnV1Instruction<TProgram>)
  | ({
      instructionType: MplTokenMetadataInstruction.CreateV1;
    } & ParsedCreateV1Instruction<TProgram>)
  | ({
      instructionType: MplTokenMetadataInstruction.MintV1;
    } & ParsedMintV1Instruction<TProgram>)
  | ({
      instructionType: MplTokenMetadataInstruction.LockV1;
    } & ParsedLockV1Instruction<TProgram>)
  | ({
      instructionType: MplTokenMetadataInstruction.UnlockV1;
    } & ParsedUnlockV1Instruction<TProgram>)
  | ({
      instructionType: MplTokenMetadataInstruction.Migrate;
    } & ParsedMigrateInstruction<TProgram>)
  | ({
      instructionType: MplTokenMetadataInstruction.TransferV1;
    } & ParsedTransferV1Instruction<TProgram>)
  | ({
      instructionType: MplTokenMetadataInstruction.UseV1;
    } & ParsedUseV1Instruction<TProgram>)
  | ({
      instructionType: MplTokenMetadataInstruction.VerifyCreatorV1;
    } & ParsedVerifyCreatorV1Instruction<TProgram>)
  | ({
      instructionType: MplTokenMetadataInstruction.VerifyCollectionV1;
    } & ParsedVerifyCollectionV1Instruction<TProgram>)
  | ({
      instructionType: MplTokenMetadataInstruction.UnverifyCreatorV1;
    } & ParsedUnverifyCreatorV1Instruction<TProgram>)
  | ({
      instructionType: MplTokenMetadataInstruction.UnverifyCollectionV1;
    } & ParsedUnverifyCollectionV1Instruction<TProgram>)
  | ({
      instructionType: MplTokenMetadataInstruction.Collect;
    } & ParsedCollectInstruction<TProgram>)
  | ({
      instructionType: MplTokenMetadataInstruction.PrintV1;
    } & ParsedPrintV1Instruction<TProgram>);