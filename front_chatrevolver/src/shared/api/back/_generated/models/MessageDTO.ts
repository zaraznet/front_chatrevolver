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
 * @interface MessageDTO
 */
export interface MessageDTO {
  /**
   *
   * @type {number}
   * @memberof MessageDTO
   */
  id: number;
  /**
   *
   * @type {string}
   * @memberof MessageDTO
   */
  content: string;
  /**
   *
   * @type {number}
   * @memberof MessageDTO
   */
  time: number;
  /**
   *
   * @type {boolean}
   * @memberof MessageDTO
   */
  mine: boolean;
  /**
   *
   * @type {number}
   * @memberof MessageDTO
   */
  chatId: number;
  /**
   *
   * @type {boolean}
   * @memberof MessageDTO
   */
  temporary: boolean;
  /**
   *
   * @type {boolean}
   * @memberof MessageDTO
   */
  read: boolean;
}

export function MessageDTOFromJSON(json: any): MessageDTO {
  return MessageDTOFromJSONTyped(json, false);
}

export function MessageDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageDTO {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: json["id"],
    content: json["content"],
    time: json["time"],
    mine: json["mine"],
    chatId: json["chatId"],
    temporary: json["temporary"],
    read: json["read"],
  };
}

export function MessageDTOToJSON(value?: MessageDTO | null): any {
  if (value === undefined) {
    return null;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id === undefined ? undefined : value.id,
    content: value.content === undefined ? undefined : value.content,
    time: value.time === undefined ? undefined : value.time,
    mine: value.mine === undefined ? undefined : value.mine,
    chatId: value.chatId === undefined ? undefined : value.chatId,
    temporary: value.temporary === undefined ? undefined : value.temporary,
    read: value.read === undefined ? undefined : value.read,
  };
}
