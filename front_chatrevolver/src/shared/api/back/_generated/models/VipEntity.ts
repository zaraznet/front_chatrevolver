/* tslint:disable */
/* eslint-disable */
/**
 * Revolver API
 * Revolver API
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from "../runtime";
import { UserEntity, UserEntityFromJSON, UserEntityFromJSONTyped, UserEntityToJSON } from "./";

/**
 *
 * @export
 * @interface VipEntity
 */
export interface VipEntity {
  /**
   *
   * @type {number}
   * @memberof VipEntity
   */
  userId: number;
  /**
   *
   * @type {UserEntity}
   * @memberof VipEntity
   */
  user: UserEntity;
  /**
   *
   * @type {Date}
   * @memberof VipEntity
   */
  updatedAt: Date;
  /**
   *
   * @type {Date}
   * @memberof VipEntity
   */
  createdAt: Date;
  /**
   *
   * @type {boolean}
   * @memberof VipEntity
   */
  active: boolean;
  /**
   *
   * @type {Date}
   * @memberof VipEntity
   */
  endTime?: Date;
}

export function VipEntityFromJSON(json: any): VipEntity {
  return VipEntityFromJSONTyped(json, false);
}

export function VipEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): VipEntity {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    userId: json["userId"],
    user: UserEntityFromJSON(json["user"]),
    updatedAt: new Date(json["updated_at"]),
    createdAt: new Date(json["created_at"]),
    active: json["active"],
    endTime: !exists(json, "end_time") ? undefined : new Date(json["end_time"]),
  };
}

export function VipEntityToJSON(value?: VipEntity | null): any {
  if (value === undefined) {
    return null;
  }
  if (value === null) {
    return null;
  }
  return {
    userId: value.userId === undefined ? undefined : value.userId,
    user: UserEntityToJSON(value.user),
    updated_at: value.updatedAt.toISOString(),
    created_at: value.createdAt.toISOString(),
    active: value.active === undefined ? undefined : value.active,
    end_time: value.endTime === undefined ? undefined : value.endTime.toISOString(),
  };
}