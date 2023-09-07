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
 * @interface PasswordRecoveryDTO
 */
export interface PasswordRecoveryDTO {
  /**
   *
   * @type {string}
   * @memberof PasswordRecoveryDTO
   */
  email: string;
}

export function PasswordRecoveryDTOFromJSON(json: any): PasswordRecoveryDTO {
  return PasswordRecoveryDTOFromJSONTyped(json, false);
}

export function PasswordRecoveryDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): PasswordRecoveryDTO {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    email: json["email"],
  };
}

export function PasswordRecoveryDTOToJSON(value?: PasswordRecoveryDTO | null): any {
  if (value === undefined) {
    return null;
  }
  if (value === null) {
    return null;
  }
  return {
    email: value.email === undefined ? undefined : value.email,
  };
}
