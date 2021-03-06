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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.BaseCaSeApiDraft);
  }
}(this, function(expect, BaseCaSeApiDraft) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new BaseCaSeApiDraft.UserAccountsApi();
  });

  describe('(package)', function() {
    describe('UserAccountsApi', function() {
      describe('accountCreatePost', function() {
        it('should call accountCreatePost successfully', function(done) {
          // TODO: uncomment accountCreatePost call
          /*

          instance.accountCreatePost(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('accountLoginPost', function() {
        it('should call accountLoginPost successfully', function(done) {
          // TODO: uncomment accountLoginPost call
          /*

          instance.accountLoginPost(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('accountLogoutPost', function() {
        it('should call accountLogoutPost successfully', function(done) {
          // TODO: uncomment accountLogoutPost call
          /*

          instance.accountLogoutPost(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('accountUsernameGet', function() {
        it('should call accountUsernameGet successfully', function(done) {
          // TODO: uncomment, update parameter values for accountUsernameGet call
          /*

          instance.accountUsernameGet(username, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
