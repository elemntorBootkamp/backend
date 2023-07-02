var session = require('express-session');
var Keycloak = require('keycloak-connect');

let _keycloak;

var keycloakConfig = {
    clientId: 'nodejs-microservice',
    bearerOnly: true,
    serverUrl: 'http://localhost:8080',
    realm: 'myrealm',
    credentials: {
        secret: '62c99f7c-da55-48fb-ae4e-a27f132546b7'
    }
};

function initKeycloak() {
    if (_keycloak) {
        console.warn("Trying to init Keycloak again!");
        return _keycloak;
    } 
    else {
        console.log("Initializing Keycloak...");
        var memoryStore = new session.MemoryStore();
        _keycloak = new Keycloak({ store: memoryStore }, keycloakConfig);
        return _keycloak;
    }
}

function getKeycloak() {
    if (!_keycloak){
        console.error('Keycloak has not been initialized. Please called init first.');
    } 
    return _keycloak;
}
var keycloakConfig = {
    clientId: 'nodejs-microservice',
    bearerOnly: true,
    serverUrl: 'http://localhost:8080',
    realm: 'myrealm',
    realmPublicKey: 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA8yONyFpm3ywXPTSrpWaVaDffN/mcKiqhgRb1cECIBBMyPf2z56zNRVdgkDNa29NivDfWR83FK3/srNI1ixPJJw8uDUZTEbxjpqKzRXg/2o9owNTID++rlpKWKiniFTUgeUpdw1Wsaqjm7VbE4LTFKbgvdfWRa0vPw9fU+kqghEX5FcNyKgFZtWM16Kv/e4FLnWwuQ99TLw/B/hBCuBPY8qvNOTeZrQobvsWKcRn/+Rqo2wilMQU59o2Ei0f4hxQdnhHgUlnzhIF9y14pxsQdc5rTVTazN4iZWNjcMIor1pX+BmuCqBOZug/vi6jNHJu0smWu8YBKa2yBPXJC99omHwIDAQAB'
};

module.exports = {
    initKeycloak,
    getKeycloak
};