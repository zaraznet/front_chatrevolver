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
 * @interface SupportDto
 */
export interface SupportDto {
  /**
   *
   * @type {string}
   * @memberof SupportDto
   */
  email: string;
  /**
   *
   * @type {string}
   * @memberof SupportDto
   */
  type: string;
  /**
   *
   * @type {string}
   * @memberof SupportDto
   */
  text: string;
}

export function SupportDtoFromJSON(json: any): SupportDto {
  return SupportDtoFromJSONTyped(json, false);
}

export function SupportDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): SupportDto {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    email: json["email"],
    type: json["type"],
    text: json["text"],
  };
}

export function SupportDtoToJSON(value?: SupportDto | null): any {
  if (value === undefined) {
    return null;
  }
  if (value === null) {
    return null;
  }
  return {
    email: value.email === undefined ? undefined : value.email,
    type: value.type === undefined ? undefined : value.type,
    text: value.text === undefined ? undefined : value.text,
  };
}
