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
import {SourceAttributes} from './SourceAttributes';

/**
 * The Source model module.
 * @module model/Source
 * @version 0.1.0
 */
export class Source {
  /**
   * Constructs a new <code>Source</code>.
   * @alias module:model/Source
   * @class
   * @param attributes {module:model/SourceAttributes} 
   * @param id {Number} 
   * @param name {String} 
   */
  constructor(attributes, id, name) {
    this.attributes = attributes;
    this.id = id;
    this.name = name;
  }

  /**
   * Constructs a <code>Source</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Source} obj Optional instance to populate.
   * @return {module:model/Source} The populated <code>Source</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Source();
      if (data.hasOwnProperty('attributes'))
        obj.attributes = SourceAttributes.constructFromObject(data['attributes']);
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
    }
    return obj;
  }
}

/**
 * @member {module:model/SourceAttributes} attributes
 */
Source.prototype.attributes = undefined;

/**
 * @member {Number} id
 */
Source.prototype.id = undefined;

/**
 * @member {String} name
 */
Source.prototype.name = undefined;

