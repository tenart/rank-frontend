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
import {InstitutionAttributes} from './InstitutionAttributes';

/**
 * The Institution model module.
 * @module model/Institution
 * @version 0.1.0
 */
export class Institution {
  /**
   * Constructs a new <code>Institution</code>.
   * @alias module:model/Institution
   * @class
   * @param attributes {module:model/InstitutionAttributes} 
   * @param id {Number} 
   * @param name {String} 
   */
  constructor(attributes, id, name) {
    this.attributes = attributes;
    this.id = id;
    this.name = name;
  }

  /**
   * Constructs a <code>Institution</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Institution} obj Optional instance to populate.
   * @return {module:model/Institution} The populated <code>Institution</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Institution();
      if (data.hasOwnProperty('attributes'))
        obj.attributes = InstitutionAttributes.constructFromObject(data['attributes']);
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
    }
    return obj;
  }
}

/**
 * @member {module:model/InstitutionAttributes} attributes
 */
Institution.prototype.attributes = undefined;

/**
 * @member {Number} id
 */
Institution.prototype.id = undefined;

/**
 * @member {String} name
 */
Institution.prototype.name = undefined;

