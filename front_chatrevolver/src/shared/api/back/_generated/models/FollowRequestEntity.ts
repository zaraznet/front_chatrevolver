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
 * @interface FollowRequestEntity
 */
export interface FollowRequestEntity {
  /**
   *
   * @type {number}
   * @memberof FollowRequestEntity
   */
  id: number;
  /**
   *
   * @type {UserEntity}
   * @memberof FollowRequestEntity
   */
  from: UserEntity;
  /**
   *
   * @type {UserEntity}
   * @memberof FollowRequestEntity
   */
  to: UserEntity;
}

export function FollowRequestEntityFromJSON(json: any): FollowRequestEntity {
  return FollowRequestEntityFromJSONTyped(json, false);
}

export function FollowRequestEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): FollowRequestEntity {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: json["id"],
    from: UserEntityFromJSON(json["from"]),
    to: UserEntityFromJSON(json["to"]),
  };
}

export function FollowRequestEntityToJSON(value?: FollowRequestEntity | null): any {
  if (value === undefined) {
    return null;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id === undefined ? undefined : value.id,
    from: UserEntityToJSON(value.from),
    to: UserEntityToJSON(value.to),
  };
}
