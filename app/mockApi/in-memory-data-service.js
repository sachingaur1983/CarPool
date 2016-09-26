"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var userInfo = [
            { id: 1, firstName: 'shiv', lastName: 'narr', email: 'shiv_narr@yahoo.com', password: '5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8' }
        ];
        return { userInfo: userInfo };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data-service.js.map