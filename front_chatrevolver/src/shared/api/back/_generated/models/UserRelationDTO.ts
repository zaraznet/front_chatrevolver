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
/**
 *
 * @export
 * @interface UserRelationDTO
 */
export interface UserRelationDTO {
  /**
   *
   * @type {boolean}
   * @memberof UserRelationDTO
   */
  following: boolean;
  /**
   *
   * @type {boolean}
   * @memberof UserRelationDTO
   */
  followsMe: boolean;
  /**
   *
   * @type {boolean}
   * @memberof UserRelationDTO
   */
  friends: boolean;
}

export function UserRelationDTOFromJSON(json: any): UserRelationDTO {
  return UserRelationDTOFromJSONTyped(json, false);
}

export function UserRelationDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserRelationDTO {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    following: json["following"],
    followsMe: json["followsMe"],
    friends: json["friends"],
  };
}

export function UserRelationDTOToJSON(value?: UserRelationDTO | null): any {
  if (value === undefined) {
    return null;
  }
  if (value === null) {
    return null;
  }
  return {
    following: value.following === undefined ? undefined : value.following,
    followsMe: value.followsMe === undefined ? undefined : value.followsMe,
    friends: value.friends === undefined ? undefined : value.friends,
  };
}
