const all_services = require("./all_services.json");
const rated_services = all_services.filter(service => service.score !== null);
const unrated_services = all_services.filter(service => service.score === null);

module.exports = {
    rated_services: rated_services,
    unrated_services: unrated_services
}
