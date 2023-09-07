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
 * @interface ConnectionDTO
 */
export interface ConnectionDTO {
  /**
   *
   * @type {string}
   * @memberof ConnectionDTO
   */
  social: ConnectionDTOSocialEnum;
}

export function ConnectionDTOFromJSON(json: any): ConnectionDTO {
  return ConnectionDTOFromJSONTyped(json, false);
}

export function ConnectionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionDTO {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    social: json["social"],
  };
}

export function ConnectionDTOToJSON(value?: ConnectionDTO | null): any {
  if (value === undefined) {
    return null;
  }
  if (value === null) {
    return null;
  }
  return {
    social: value.social === undefined ? undefined : value.social,
  };
}

/**
 * @export
 * @enum {string}
 */
export enum ConnectionDTOSocialEnum {
  GOOGLE = "GOOGLE",
  VK = "VK",
  APPLE = "APPLE",
}
