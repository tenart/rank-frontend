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
    instance = new BaseCaSeApiDraft.PublicationsApi();
  });

  describe('(package)', function() {
    describe('PublicationsApi', function() {
      describe('publicationsCountGet', function() {
        it('should call publicationsCountGet successfully', function(done) {
          // TODO: uncomment, update parameter values for publicationsCountGet call and complete the assertions
          /*
          var opts = {};

          instance.publicationsCountGet(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(BaseCaSeApiDraft.InlineResponse2007);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('publicationsFilterGet', function() {
        it('should call publicationsFilterGet successfully', function(done) {
          // TODO: uncomment, update parameter values for publicationsFilterGet call and complete the assertions
          /*
          var opts = {};

          instance.publicationsFilterGet(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(BaseCaSeApiDraft.InlineResponse2006);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('publicationsGet', function() {
        it('should call publicationsGet successfully', function(done) {
          // TODO: uncomment, update parameter values for publicationsGet call and complete the assertions
          /*
          var opts = {};

          instance.publicationsGet(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(BaseCaSeApiDraft.InlineResponse2006);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('publicationsIdGet', function() {
        it('should call publicationsIdGet successfully', function(done) {
          // TODO: uncomment, update parameter values for publicationsIdGet call and complete the assertions
          /*

          instance.publicationsIdGet(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(BaseCaSeApiDraft.InlineResponse2008);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('publicationsIdInstitutionsGet', function() {
        it('should call publicationsIdInstitutionsGet successfully', function(done) {
          // TODO: uncomment, update parameter values for publicationsIdInstitutionsGet call and complete the assertions
          /*

          instance.publicationsIdInstitutionsGet(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(BaseCaSeApiDraft.InlineResponse2009);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('publicationsIdPeopleGet', function() {
        it('should call publicationsIdPeopleGet successfully', function(done) {
          // TODO: uncomment, update parameter values for publicationsIdPeopleGet call and complete the assertions
          /*

          instance.publicationsIdPeopleGet(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(BaseCaSeApiDraft.InlineResponse2005);

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
