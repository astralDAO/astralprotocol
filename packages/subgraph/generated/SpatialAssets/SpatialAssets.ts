// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class RoleAdminChanged extends ethereum.Event {
  get params(): RoleAdminChanged__Params {
    return new RoleAdminChanged__Params(this);
  }
}

export class RoleAdminChanged__Params {
  _event: RoleAdminChanged;

  constructor(event: RoleAdminChanged) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get previousAdminRole(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get newAdminRole(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class RoleGranted extends ethereum.Event {
  get params(): RoleGranted__Params {
    return new RoleGranted__Params(this);
  }
}

export class RoleGranted__Params {
  _event: RoleGranted;

  constructor(event: RoleGranted) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class RoleRevoked extends ethereum.Event {
  get params(): RoleRevoked__Params {
    return new RoleRevoked__Params(this);
  }
}

export class RoleRevoked__Params {
  _event: RoleRevoked;

  constructor(event: RoleRevoked) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class SpatialAssetDeactivated extends ethereum.Event {
  get params(): SpatialAssetDeactivated__Params {
    return new SpatialAssetDeactivated__Params(this);
  }
}

export class SpatialAssetDeactivated__Params {
  _event: SpatialAssetDeactivated;

  constructor(event: SpatialAssetDeactivated) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class SpatialAssetRegistered extends ethereum.Event {
  get params(): SpatialAssetRegistered__Params {
    return new SpatialAssetRegistered__Params(this);
  }
}

export class SpatialAssetRegistered__Params {
  _event: SpatialAssetRegistered;

  constructor(event: SpatialAssetRegistered) {
    this._event = event;
  }

  get to(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get id(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get offChainStorage(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class SpatialAssets extends ethereum.SmartContract {
  static bind(address: Address): SpatialAssets {
    return new SpatialAssets("SpatialAssets", address);
  }

  DATA_SUPPLIER(): Bytes {
    let result = super.call("DATA_SUPPLIER", "DATA_SUPPLIER():(bytes32)", []);

    return result[0].toBytes();
  }

  try_DATA_SUPPLIER(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "DATA_SUPPLIER",
      "DATA_SUPPLIER():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  DEFAULT_ADMIN_ROLE(): Bytes {
    let result = super.call(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_DEFAULT_ADMIN_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getRoleAdmin(role: Bytes): Bytes {
    let result = super.call("getRoleAdmin", "getRoleAdmin(bytes32):(bytes32)", [
      ethereum.Value.fromFixedBytes(role)
    ]);

    return result[0].toBytes();
  }

  try_getRoleAdmin(role: Bytes): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getRoleAdmin",
      "getRoleAdmin(bytes32):(bytes32)",
      [ethereum.Value.fromFixedBytes(role)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getRoleMember(role: Bytes, index: BigInt): Address {
    let result = super.call(
      "getRoleMember",
      "getRoleMember(bytes32,uint256):(address)",
      [
        ethereum.Value.fromFixedBytes(role),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );

    return result[0].toAddress();
  }

  try_getRoleMember(role: Bytes, index: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getRoleMember",
      "getRoleMember(bytes32,uint256):(address)",
      [
        ethereum.Value.fromFixedBytes(role),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getRoleMemberCount(role: Bytes): BigInt {
    let result = super.call(
      "getRoleMemberCount",
      "getRoleMemberCount(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(role)]
    );

    return result[0].toBigInt();
  }

  try_getRoleMemberCount(role: Bytes): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getRoleMemberCount",
      "getRoleMemberCount(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(role)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  hasRole(role: Bytes, account: Address): boolean {
    let result = super.call("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBoolean();
  }

  try_hasRole(role: Bytes, account: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  idToOwner(id: BigInt): Address {
    let result = super.call("idToOwner", "idToOwner(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(id)
    ]);

    return result[0].toAddress();
  }

  try_idToOwner(id: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("idToOwner", "idToOwner(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(id)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  idToExternalStorage(id: BigInt): Bytes {
    let result = super.call(
      "idToExternalStorage",
      "idToExternalStorage(uint256):(bytes32)",
      [ethereum.Value.fromUnsignedBigInt(id)]
    );

    return result[0].toBytes();
  }

  try_idToExternalStorage(id: BigInt): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "idToExternalStorage",
      "idToExternalStorage(uint256):(bytes32)",
      [ethereum.Value.fromUnsignedBigInt(id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  allowedStorages(offChainStorage: Bytes): boolean {
    let result = super.call(
      "allowedStorages",
      "allowedStorages(bytes32):(bool)",
      [ethereum.Value.fromFixedBytes(offChainStorage)]
    );

    return result[0].toBoolean();
  }

  try_allowedStorages(offChainStorage: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "allowedStorages",
      "allowedStorages(bytes32):(bool)",
      [ethereum.Value.fromFixedBytes(offChainStorage)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  uri(): string {
    let result = super.call("uri", "uri():(string)", []);

    return result[0].toString();
  }

  try_uri(): ethereum.CallResult<string> {
    let result = super.tryCall("uri", "uri():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get uri(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class GrantRoleCall extends ethereum.Call {
  get inputs(): GrantRoleCall__Inputs {
    return new GrantRoleCall__Inputs(this);
  }

  get outputs(): GrantRoleCall__Outputs {
    return new GrantRoleCall__Outputs(this);
  }
}

export class GrantRoleCall__Inputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class GrantRoleCall__Outputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }
}

export class RenounceRoleCall extends ethereum.Call {
  get inputs(): RenounceRoleCall__Inputs {
    return new RenounceRoleCall__Inputs(this);
  }

  get outputs(): RenounceRoleCall__Outputs {
    return new RenounceRoleCall__Outputs(this);
  }
}

export class RenounceRoleCall__Inputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RenounceRoleCall__Outputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }
}

export class RevokeRoleCall extends ethereum.Call {
  get inputs(): RevokeRoleCall__Inputs {
    return new RevokeRoleCall__Inputs(this);
  }

  get outputs(): RevokeRoleCall__Outputs {
    return new RevokeRoleCall__Outputs(this);
  }
}

export class RevokeRoleCall__Inputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RevokeRoleCall__Outputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }
}

export class RegisterRoleCall extends ethereum.Call {
  get inputs(): RegisterRoleCall__Inputs {
    return new RegisterRoleCall__Inputs(this);
  }

  get outputs(): RegisterRoleCall__Outputs {
    return new RegisterRoleCall__Outputs(this);
  }
}

export class RegisterRoleCall__Inputs {
  _call: RegisterRoleCall;

  constructor(call: RegisterRoleCall) {
    this._call = call;
  }
}

export class RegisterRoleCall__Outputs {
  _call: RegisterRoleCall;

  constructor(call: RegisterRoleCall) {
    this._call = call;
  }
}

export class EnableStorageCall extends ethereum.Call {
  get inputs(): EnableStorageCall__Inputs {
    return new EnableStorageCall__Inputs(this);
  }

  get outputs(): EnableStorageCall__Outputs {
    return new EnableStorageCall__Outputs(this);
  }
}

export class EnableStorageCall__Inputs {
  _call: EnableStorageCall;

  constructor(call: EnableStorageCall) {
    this._call = call;
  }

  get offChainStorage(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class EnableStorageCall__Outputs {
  _call: EnableStorageCall;

  constructor(call: EnableStorageCall) {
    this._call = call;
  }
}

export class DisableStorageCall extends ethereum.Call {
  get inputs(): DisableStorageCall__Inputs {
    return new DisableStorageCall__Inputs(this);
  }

  get outputs(): DisableStorageCall__Outputs {
    return new DisableStorageCall__Outputs(this);
  }
}

export class DisableStorageCall__Inputs {
  _call: DisableStorageCall;

  constructor(call: DisableStorageCall) {
    this._call = call;
  }

  get offChainStorage(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class DisableStorageCall__Outputs {
  _call: DisableStorageCall;

  constructor(call: DisableStorageCall) {
    this._call = call;
  }
}

export class RegisterSpatialAssetCall extends ethereum.Call {
  get inputs(): RegisterSpatialAssetCall__Inputs {
    return new RegisterSpatialAssetCall__Inputs(this);
  }

  get outputs(): RegisterSpatialAssetCall__Outputs {
    return new RegisterSpatialAssetCall__Outputs(this);
  }
}

export class RegisterSpatialAssetCall__Inputs {
  _call: RegisterSpatialAssetCall;

  constructor(call: RegisterSpatialAssetCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get id(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get offChainStorage(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class RegisterSpatialAssetCall__Outputs {
  _call: RegisterSpatialAssetCall;

  constructor(call: RegisterSpatialAssetCall) {
    this._call = call;
  }
}

export class DeactivateSpatialAssetCall extends ethereum.Call {
  get inputs(): DeactivateSpatialAssetCall__Inputs {
    return new DeactivateSpatialAssetCall__Inputs(this);
  }

  get outputs(): DeactivateSpatialAssetCall__Outputs {
    return new DeactivateSpatialAssetCall__Outputs(this);
  }
}

export class DeactivateSpatialAssetCall__Inputs {
  _call: DeactivateSpatialAssetCall;

  constructor(call: DeactivateSpatialAssetCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get id(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class DeactivateSpatialAssetCall__Outputs {
  _call: DeactivateSpatialAssetCall;

  constructor(call: DeactivateSpatialAssetCall) {
    this._call = call;
  }
}