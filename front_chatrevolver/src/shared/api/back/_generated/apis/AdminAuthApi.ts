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

import * as runtime from "../runtime";
import useSWR, { SWRConfiguration } from "swr";

import {
  AdminLoginDTO,
  AdminLoginDTOFromJSON,
  AdminLoginDTOToJSON,
  TokenHold,
  TokenHoldFromJSON,
  TokenHoldToJSON,
} from "../models";

export interface AdminLoginRequest {
  adminLoginDTO: AdminLoginDTO;
}

/**
 *
 */
export class AdminAuthApi extends runtime.BaseAPI {
  /**
   */
  private async adminLoginRaw(requestParameters: AdminLoginRequest): Promise<runtime.ApiResponse<TokenHold>> {
    this.adminLoginValidation(requestParameters);
    const context = this.adminLoginContext(requestParameters);
    const response = await this.request(context);

    return new runtime.JSONApiResponse(response, (jsonValue) => TokenHoldFromJSON(jsonValue));
  }

  /**
   */
  private adminLoginValidation(requestParameters: AdminLoginRequest) {
    if (requestParameters.adminLoginDTO === null || requestParameters.adminLoginDTO === undefined) {
      throw new runtime.RequiredError(
        "adminLoginDTO",
        "Required parameter requestParameters.adminLoginDTO was null or undefined when calling adminLogin."
      );
    }
  }

  /**
   */
  private adminLoginContext(requestParameters: AdminLoginRequest): runtime.RequestOpts {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    return {
      path: `/api/admin/auth`,
      method: "POST",
      headers: headerParameters,
      query: queryParameters,
      body: AdminLoginDTOToJSON(requestParameters.adminLoginDTO),
    };
  }

  /**
   */
  adminLogin = async (adminLoginDTO: AdminLoginDTO): Promise<TokenHold> => {
    const response = await this.adminLoginRaw({ adminLoginDTO: adminLoginDTO });
    return await response.value();
  };
}