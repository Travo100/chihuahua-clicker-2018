import axios from "axios";

export default {
  // Gets all books
  getChihuahuas: function() {
    return axios.get("/api/chihuahuas");
  },
  // Saves a Chihuahua to the database
  saveChihuahua: function(chihuahuaData) {
    return axios.post("/api/chihuahuas", chihuahuaData);
  }
};