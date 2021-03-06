// tslint:disable
/// <reference path="./custom.d.ts" />
/**
 * swagger-blocks with fastjson_api
 * swagger-blocks with fastjson_api
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as globalImportUrl from 'url';
import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface Book
 */
export interface Book {
    /**
     * 
     * @type {number}
     * @memberof Book
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof Book
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof Book
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof Book
     */
    image_url: string;
    /**
     * 
     * @type {string}
     * @memberof Book
     */
    created_at?: string;
    /**
     * 
     * @type {string}
     * @memberof Book
     */
    updated_at?: string;
}
/**
 * 
 * @export
 * @interface BookResponse
 */
export interface BookResponse {
    /**
     * 
     * @type {string}
     * @memberof BookResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof BookResponse
     */
    type: string;
    /**
     * 
     * @type {Book}
     * @memberof BookResponse
     */
    attributes: Book;
}
/**
 * 
 * @export
 * @interface CreateBookRequest
 */
export interface CreateBookRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateBookRequest
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateBookRequest
     */
    description?: string;
    /**
     * 
     * @type {object}
     * @memberof CreateBookRequest
     */
    image?: object;
}
/**
 * 
 * @export
 * @interface ErrorOutput
 */
export interface ErrorOutput {
    /**
     * 
     * @type {Array<string>}
     * @memberof ErrorOutput
     */
    errors: Array<string>;
}
/**
 * 
 * @export
 * @interface InlineResponse200
 */
export interface InlineResponse200 {
    /**
     * 
     * @type {Array<BookResponse>}
     * @memberof InlineResponse200
     */
    data: Array<BookResponse>;
}
/**
 * 
 * @export
 * @interface InlineResponse201
 */
export interface InlineResponse201 {
    /**
     * 
     * @type {BookResponse}
     * @memberof InlineResponse201
     */
    data: BookResponse;
}
/**
 * 
 * @export
 * @interface UpdateBookRequest
 */
export interface UpdateBookRequest {
    /**
     * 
     * @type {string}
     * @memberof UpdateBookRequest
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateBookRequest
     */
    description?: string;
    /**
     * 
     * @type {object}
     * @memberof UpdateBookRequest
     */
    image?: object;
}

/**
 * SampleAppApi - axios parameter creator
 * @export
 */
export const SampleAppApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} [title] 
         * @param {string} [description] 
         * @param {object} [image] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createBook(title?: string, description?: string, image?: object, options: any = {}): RequestArgs {
            const localVarPath = `/api/books`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new FormData();


            if (title !== undefined) { 
                localVarFormParams.append('title', title as any);
            }
    
            if (description !== undefined) { 
                localVarFormParams.append('description', description as any);
            }
    
            if (image !== undefined) { 
                localVarFormParams.append('image', image as any);
            }
    
    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteBook(id: number, options: any = {}): RequestArgs {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deleteBook.');
            }
            const localVarPath = `/api/books/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


                localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBook(id: number, options: any = {}): RequestArgs {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getBook.');
            }
            const localVarPath = `/api/books/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


                localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBooks(options: any = {}): RequestArgs {
            const localVarPath = `/api/books`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


                localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id 
         * @param {string} [title] 
         * @param {string} [description] 
         * @param {object} [image] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateBook(id: number, title?: string, description?: string, image?: object, options: any = {}): RequestArgs {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling updateBook.');
            }
            const localVarPath = `/api/books/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new FormData();


            if (title !== undefined) { 
                localVarFormParams.append('title', title as any);
            }
    
            if (description !== undefined) { 
                localVarFormParams.append('description', description as any);
            }
    
            if (image !== undefined) { 
                localVarFormParams.append('image', image as any);
            }
    
    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SampleAppApi - functional programming interface
 * @export
 */
export const SampleAppApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} [title] 
         * @param {string} [description] 
         * @param {object} [image] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createBook(title?: string, description?: string, image?: object, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse201> {
            const localVarAxiosArgs = SampleAppApiAxiosParamCreator(configuration).createBook(title, description, image, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteBook(id: number, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<object> {
            const localVarAxiosArgs = SampleAppApiAxiosParamCreator(configuration).deleteBook(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBook(id: number, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse201> {
            const localVarAxiosArgs = SampleAppApiAxiosParamCreator(configuration).getBook(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBooks(options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse200> {
            const localVarAxiosArgs = SampleAppApiAxiosParamCreator(configuration).getBooks(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {number} id 
         * @param {string} [title] 
         * @param {string} [description] 
         * @param {object} [image] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateBook(id: number, title?: string, description?: string, image?: object, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse201> {
            const localVarAxiosArgs = SampleAppApiAxiosParamCreator(configuration).updateBook(id, title, description, image, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * SampleAppApi - factory interface
 * @export
 */
export const SampleAppApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {string} [title] 
         * @param {string} [description] 
         * @param {object} [image] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createBook(title?: string, description?: string, image?: object, options?: any) {
            return SampleAppApiFp(configuration).createBook(title, description, image, options)(axios, basePath);
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteBook(id: number, options?: any) {
            return SampleAppApiFp(configuration).deleteBook(id, options)(axios, basePath);
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBook(id: number, options?: any) {
            return SampleAppApiFp(configuration).getBook(id, options)(axios, basePath);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBooks(options?: any) {
            return SampleAppApiFp(configuration).getBooks(options)(axios, basePath);
        },
        /**
         * 
         * @param {number} id 
         * @param {string} [title] 
         * @param {string} [description] 
         * @param {object} [image] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateBook(id: number, title?: string, description?: string, image?: object, options?: any) {
            return SampleAppApiFp(configuration).updateBook(id, title, description, image, options)(axios, basePath);
        },
    };
};

/**
 * SampleAppApi - object-oriented interface
 * @export
 * @class SampleAppApi
 * @extends {BaseAPI}
 */
export class SampleAppApi extends BaseAPI {
    /**
     * 
     * @param {string} [title] 
     * @param {string} [description] 
     * @param {object} [image] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SampleAppApi
     */
    public createBook(title?: string, description?: string, image?: object, options?: any) {
        return SampleAppApiFp(this.configuration).createBook(title, description, image, options)(this.axios, this.basePath);
    }

    /**
     * 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SampleAppApi
     */
    public deleteBook(id: number, options?: any) {
        return SampleAppApiFp(this.configuration).deleteBook(id, options)(this.axios, this.basePath);
    }

    /**
     * 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SampleAppApi
     */
    public getBook(id: number, options?: any) {
        return SampleAppApiFp(this.configuration).getBook(id, options)(this.axios, this.basePath);
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SampleAppApi
     */
    public getBooks(options?: any) {
        return SampleAppApiFp(this.configuration).getBooks(options)(this.axios, this.basePath);
    }

    /**
     * 
     * @param {number} id 
     * @param {string} [title] 
     * @param {string} [description] 
     * @param {object} [image] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SampleAppApi
     */
    public updateBook(id: number, title?: string, description?: string, image?: object, options?: any) {
        return SampleAppApiFp(this.configuration).updateBook(id, title, description, image, options)(this.axios, this.basePath);
    }

}


