const all_services = require("./all_services.json");
const all_rated_services = all_services.filter(service => service.score !== null);
const rated_services = all_services.filter(service => service.score !== null && service.score > 0);
const zero_score_services = all_services.filter(service => service.score === 0);
const unrated_services = all_services.filter(service => service.score === null);

module.exports = {
    all_rated_services: all_rated_services,
    rated_services: rated_services,
    zero_score_services: zero_score_services,
    unrated_services: unrated_services
}
