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
 * @interface BuyVipDto
 */
export interface BuyVipDto {
  /**
   *
   * @type {number}
   * @memberof BuyVipDto
   */
  productId: number;
}

export function BuyVipDtoFromJSON(json: any): BuyVipDto {
  return BuyVipDtoFromJSONTyped(json, false);
}

export function BuyVipDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuyVipDto {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    productId: json["productId"],
  };
}

export function BuyVipDtoToJSON(value?: BuyVipDto | null): any {
  if (value === undefined) {
    return null;
  }
  if (value === null) {
    return null;
  }
  return {
    productId: value.productId === undefined ? undefined : value.productId,
  };
}
