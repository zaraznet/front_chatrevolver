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
 * @interface AddPushToken
 */
export interface AddPushToken {
  /**
   *
   * @type {string}
   * @memberof AddPushToken
   */
  value: string;
}

export function AddPushTokenFromJSON(json: any): AddPushToken {
  return AddPushTokenFromJSONTyped(json, false);
}

export function AddPushTokenFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddPushToken {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    value: json["value"],
  };
}

export function AddPushTokenToJSON(value?: AddPushToken | null): any {
  if (value === undefined) {
    return null;
  }
  if (value === null) {
    return null;
  }
  return {
    value: value.value === undefined ? undefined : value.value,
  };
}
