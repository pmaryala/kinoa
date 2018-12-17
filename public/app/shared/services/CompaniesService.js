'use strict';

angular.module('KinoaApp')
    .factory('CompaniesService', function ($http, $log, $q, _) {
        var companiesEndpoint = '/companies/';
        var companyToUserEndpoint = '/companytouser/';


        var getAllCompanies = function(params) {
            params = (typeof params === "undefined") ? "{}" : encodeURI(JSON.stringify(params));
            var deferred = $q.defer();
            $log.log(params);
            $http.get(companiesEndpoint + '?'+ params).success(function(data) {
                deferred.resolve(data);
            }).error(function() {
                deferred.reject("An error occurred recovering the companies.");
            });
            return deferred.promise;
        }

        var getCompany = function(companyId, userId) {
            var deferred = $q.defer();
            $http.get(companiesEndpoint + companyId).success(function(data) {
                if (userId) {
                    var params = encodeURI(JSON.stringify({companyId: companyId, userId: userId}));
                    $http.get(companyToUserEndpoint + '?' + params).success(function(companytouser) {
                        data.companytouser = companytouser[0];
                        deferred.resolve(data);
                    });
                } else {
                    deferred.resolve(data);
                }
            }).error(function(data, status, headers, config) {
                if (status === 404) {
                    deferred.reject("The company with the id " + companyId + " does not exist.");
                } else {
                    deferred.reject("An error occurred recovering the company.");
                }
            });
            return deferred.promise;
        }

        var updateCompany = function(company) {
            var deferred = $q.defer();
            $http.put(companiesEndpoint + company.id, company).success(function(data) {
                $log.log(data);
                deferred.resolve(data);
            }).error(function() {
                deferred.reject("An error occurred while trying to update the company.");
            });
            return deferred.promise;
        }

        var createCompany = function(company, user) {
            var deferred = $q.defer();
            $http.post(companiesEndpoint, company).success(function(companyResponse) {

                var companytouser = {
                    companyId: companyResponse.id,
                    userId: user.id,
                    rightsLevel: 2
                }

                $http.post(companyToUserEndpoint, companytouser).success(function(companytouserResponse) {
                    deferred.resolve(companytouserResponse);
                }).error(function() {
                    deferred.reject("An error was produced by wanting to add the company and its association");
                });
            }).error(function() {
                deferred.reject("An error occurred while trying to add the company.");
            });
            return deferred.promise;
        }

        var deleteCompany = function(companyId) {
            $log.log(companyId);
            var deferred = $q.defer();
            $http.delete(companiesEndpoint + companyId).success(function(companyResponse) {
                deferred.resolve(companyResponse);
            }).error(function() {
                deferred.reject("An error occurred while trying to delete the company.");
            });
            return deferred.promise;
        }

        var getCompanyToUser = function(user, company) {
            var deferred = $q.defer();
            $log.log(user, company);
            var params = encodeURI(JSON.stringify({companyId: company.id, userId: user.id}));
            $http.get(companyToUserEndpoint + '?' + params).success(function(data) {
                deferred.resolve(data);
            }).error(function(data, status, headers, config) {
                deferred.reject("An error occurred recovering the company.");
            });
            return deferred.promise;
        }

        var createCompanytouser = function(companytouser) {
            var deferred = $q.defer();
            $http.post(companyToUserEndpoint, companytouser).success(function(companytouserResponse) {
                deferred.resolve(companytouserResponse);
            }).error(function() {
                deferred.reject("An error occurred while trying to add the company to user.");
            });
            return deferred.promise;
        }

        var updateCompanytouser = function(companytouser) {
            var deferred = $q.defer();
            $log.log(companytouser);
            $http.put(companyToUserEndpoint + companytouser.id, companytouser).success(function(data) {
                deferred.resolve(data);
            }).error(function() {
                deferred.reject("An error occurred while trying to update the company to user.");
            });
            return deferred.promise;
        }

        // Public methods
        return {
            getCompany: getCompany,
            getAllCompanies: getAllCompanies,
            updateCompany: updateCompany,
            createCompany: createCompany,
            deleteCompany: deleteCompany,
            getCompanyToUser: getCompanyToUser,
            createCompanytouser: createCompanytouser,
            updateCompanytouser: updateCompanytouser
        }
    });

