/*
 * BaseCaSE API Draft
 * Preliminary OpenAPI documentation. Subject to change.
 *
 * OpenAPI spec version: 0.1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.27
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';

/**
 * The OneOffilterSource model module.
 * @module model/OneOffilterSource
 * @version 0.1.0
 */
export class OneOffilterSource {
  /**
   * Constructs a new <code>OneOffilterSource</code>.
   * @alias module:model/OneOffilterSource
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OneOffilterSource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OneOffilterSource} obj Optional instance to populate.
   * @return {module:model/OneOffilterSource} The populated <code>OneOffilterSource</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OneOffilterSource();
    }
    return obj;
  }
}
