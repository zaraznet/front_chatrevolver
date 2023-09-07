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
  AppVersion,
  AppVersionFromJSON,
  AppVersionToJSON,
  SupportDto,
  SupportDtoFromJSON,
  SupportDtoToJSON,
} from "../models";

export interface SupportRequest {
  supportDto: SupportDto;
}

/**
 *
 */
export class CommonApi extends runtime.BaseAPI {
  /**
   */
  private async appVersionRaw(): Promise<runtime.ApiResponse<AppVersion>> {
    this.appVersionValidation();
    const context = this.appVersionContext();
    const response = await this.request(context);

    return new runtime.JSONApiResponse(response, (jsonValue) => AppVersionFromJSON(jsonValue));
  }

  /**
   */
  private appVersionValidation() {}

  /**
   */
  private appVersionContext(): runtime.RequestOpts {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    return {
      path: `/api/common/app-version`,
      method: "GET",
      headers: headerParameters,
      query: queryParameters,
    };
  }

  /**
   */
  appVersion = async (): Promise<AppVersion> => {
    const response = await this.appVersionRaw();
    return await response.value();
  };

  useAppVersion(config?: SWRConfiguration<AppVersion, Error>) {
    let valid = true;

    const context = this.appVersionContext();
    return useSWR(JSON.stringify(context), valid ? () => this.appVersion() : null, config);
  }

  /**
   */
  private async supportRaw(requestParameters: SupportRequest): Promise<runtime.ApiResponse<void>> {
    this.supportValidation(requestParameters);
    const context = this.supportContext(requestParameters);
    const response = await this.request(context);

    return new runtime.VoidApiResponse(response);
  }

  /**
   */
  private supportValidation(requestParameters: SupportRequest) {
    if (requestParameters.supportDto === null || requestParameters.supportDto === undefined) {
      throw new runtime.RequiredError(
        "supportDto",
        "Required parameter requestParameters.supportDto was null or undefined when calling support."
      );
    }
  }

  /**
   */
  private supportContext(requestParameters: SupportRequest): runtime.RequestOpts {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    return {
      path: `/api/common/support`,
      method: "POST",
      headers: headerParameters,
      query: queryParameters,
      body: SupportDtoToJSON(requestParameters.supportDto),
    };
  }

  /**
   */
  support = async (supportDto: SupportDto): Promise<void> => {
    await this.supportRaw({ supportDto: supportDto });
  };
}
