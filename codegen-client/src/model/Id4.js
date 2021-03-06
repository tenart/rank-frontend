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
 * The Id4 model module.
 * @module model/Id4
 * @version 0.1.0
 */
export class Id4 {
  /**
   * Constructs a new <code>Id4</code>.
   * @alias module:model/Id4
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Id4</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Id4} obj Optional instance to populate.
   * @return {module:model/Id4} The populated <code>Id4</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Id4();
    }
    return obj;
  }
}
// Implement OneOfid4 interface:
