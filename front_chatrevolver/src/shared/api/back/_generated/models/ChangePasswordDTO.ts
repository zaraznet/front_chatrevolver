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
 * @interface ChangePasswordDTO
 */
export interface ChangePasswordDTO {
  /**
   *
   * @type {string}
   * @memberof ChangePasswordDTO
   */
  oldPassword: string;
  /**
   *
   * @type {string}
   * @memberof ChangePasswordDTO
   */
  newPassword1: string;
  /**
   *
   * @type {string}
   * @memberof ChangePasswordDTO
   */
  newPassword2: string;
}

export function ChangePasswordDTOFromJSON(json: any): ChangePasswordDTO {
  return ChangePasswordDTOFromJSONTyped(json, false);
}

export function ChangePasswordDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChangePasswordDTO {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    oldPassword: json["oldPassword"],
    newPassword1: json["newPassword1"],
    newPassword2: json["newPassword2"],
  };
}

export function ChangePasswordDTOToJSON(value?: ChangePasswordDTO | null): any {
  if (value === undefined) {
    return null;
  }
  if (value === null) {
    return null;
  }
  return {
    oldPassword: value.oldPassword === undefined ? undefined : value.oldPassword,
    newPassword1: value.newPassword1 === undefined ? undefined : value.newPassword1,
    newPassword2: value.newPassword2 === undefined ? undefined : value.newPassword2,
  };
}