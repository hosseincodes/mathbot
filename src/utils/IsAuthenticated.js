import { jwtDecode } from "jwt-decode";

function IsAuthenticated() {

    var username = ""

    function validToken() {

        let token = localStorage.getItem('token');

        if (token === null || token === "LOGGEDOUT") {
            return false
        } else {
            var decodedToken = jwtDecode(token);
            var currentDate = new Date();
        }

        username = decodedToken.username
  
        // JWT exp is in seconds
        if (decodedToken.exp * 1000 < currentDate.getTime()) {
            return false
        } else {   
            return true
        }
    }

    if (validToken()) {
        return username
    } else {
        return "Not Authenticated"
    }
}

export default IsAuthenticated;