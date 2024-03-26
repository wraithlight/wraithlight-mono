import { EXTERNAL_MULTI_ENDPOINTS, EXTERNAL_SINGLE_ENDPOINTS } from "@wraithlight/core.content.constants";
import { ContentAppLocalizationResponseModel, ContentSingleKeyRequestModel, Language } from "@wraithlight/core.content.types";
import { Guid } from "@wraithlight/core.guid";
import { isNil } from "@wraithlight/core.nullable";
import { OperationResult, OperationResultFactory } from "@wraithlight/framework.operation-result";

import { ContentClient } from "../client";

import { ERROR_CODES } from "./content.const";

export class ContentService {

    private readonly _client: ContentClient;

    constructor(
        _contentApiBaseUrl: string,
        _contentApiKey: string
    ) {
        this._client = new ContentClient(
            _contentApiBaseUrl,
            _contentApiKey
        );
    }

    public async getSingleKey(
        key: string,
        language: Language
    ): Promise<OperationResult<ContentSingleKeyRequestModel>> {
        const path = EXTERNAL_SINGLE_ENDPOINTS.api.v1.content.single.byKey
            .forClient(
                language,
                key
            )
        ;
        const result = await this._client.fetchSingle(path);

        if (isNil(result)) {
            return OperationResultFactory.error(ERROR_CODES.SINGLE_FAIL);
        }

        return OperationResultFactory.success(result);
    }

    public async getAppKeys(
        language: Language,
        application: Guid       // TODO: Should be an appname enum
    ): Promise<OperationResult<ContentAppLocalizationResponseModel>> {
        const path = EXTERNAL_MULTI_ENDPOINTS.api.v1.content.multi.byKey
            .forClient(
                language,
                application
            )
        ;
        const result = await this._client.fetchMulti(path);

        if (isNil(result)) {
            return OperationResultFactory.error(ERROR_CODES.MULTI_FAIL);
        }

        return OperationResultFactory.success(result);
    }

}
