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
 * @interface SearchPreference
 */
export interface SearchPreference {
  /**
   *
   * @type {boolean}
   * @memberof SearchPreference
   */
  withPhotos: boolean;
  /**
   *
   * @type {boolean}
   * @memberof SearchPreference
   */
  onlyVip: boolean;
  /**
   *
   * @type {boolean}
   * @memberof SearchPreference
   */
  near: boolean;
  /**
   *
   * @type {number}
   * @memberof SearchPreference
   */
  ageTo: number;
  /**
   *
   * @type {number}
   * @memberof SearchPreference
   */
  ageFrom: number;
  /**
   *
   * @type {boolean}
   * @memberof SearchPreference
   */
  highRating: boolean;
  /**
   *
   * @type {string}
   * @memberof SearchPreference
   */
  sex: SearchPreferenceSexEnum;
  /**
   *
   * @type {string}
   * @memberof SearchPreference
   */
  country?: string;
}

export function SearchPreferenceFromJSON(json: any): SearchPreference {
  return SearchPreferenceFromJSONTyped(json, false);
}

export function SearchPreferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchPreference {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    withPhotos: json["withPhotos"],
    onlyVip: json["onlyVip"],
    near: json["near"],
    ageTo: json["ageTo"],
    ageFrom: json["ageFrom"],
    highRating: json["highRating"],
    sex: json["sex"],
    country: !exists(json, "country") ? undefined : json["country"],
  };
}

export function SearchPreferenceToJSON(value?: SearchPreference | null): any {
  if (value === undefined) {
    return null;
  }
  if (value === null) {
    return null;
  }
  return {
    withPhotos: value.withPhotos === undefined ? undefined : value.withPhotos,
    onlyVip: value.onlyVip === undefined ? undefined : value.onlyVip,
    near: value.near === undefined ? undefined : value.near,
    ageTo: value.ageTo === undefined ? undefined : value.ageTo,
    ageFrom: value.ageFrom === undefined ? undefined : value.ageFrom,
    highRating: value.highRating === undefined ? undefined : value.highRating,
    sex: value.sex === undefined ? undefined : value.sex,
    country: value.country === undefined ? undefined : value.country,
  };
}

/**
 * @export
 * @enum {string}
 */
export enum SearchPreferenceSexEnum {
  MALE = "MALE",
  FEMALE = "FEMALE",
  UNDEF = "UNDEF",
}