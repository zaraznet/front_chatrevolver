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
 * @interface PostReviewDTO
 */
export interface PostReviewDTO {
  /**
   *
   * @type {number}
   * @memberof PostReviewDTO
   */
  rating: number;
}

export function PostReviewDTOFromJSON(json: any): PostReviewDTO {
  return PostReviewDTOFromJSONTyped(json, false);
}

export function PostReviewDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostReviewDTO {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    rating: json["rating"],
  };
}

export function PostReviewDTOToJSON(value?: PostReviewDTO | null): any {
  if (value === undefined) {
    return null;
  }
  if (value === null) {
    return null;
  }
  return {
    rating: value.rating === undefined ? undefined : value.rating,
  };
}