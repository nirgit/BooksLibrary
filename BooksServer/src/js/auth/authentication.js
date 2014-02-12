define.Class("auth.Authentication", function(def) {

    def.methods = {
        __init: function() {
        },

        signinCallback: function(authResult) {
            if (authResult['status']['signed_in']) {
                console.log('Logged in Successfully');
                // Update the app to reflect a signed in user
                // Hide the sign-in button now that the user is authorized, for example:
                document.getElementById('signinButton').setAttribute('style', 'display: none');
                document.getElementById('logoutButton').className = "" ;
                this.getUserProfile() ;
            } else {
                // Update the app to reflect a signed out user
                // Possible error values:
                //   "user_signed_out" - User is signed-out
                //   "access_denied" - User denied access to your app
                //   "immediate_failed" - Could not automatically log in the user
                console.log('Sign-in state: ' + authResult['error']);
            }
        },

        getUserProfile: function() {
            gapi.client.load('plus','v1', function(){
             var request = gapi.client.plus.people.get({
               'userId': 'me'
             });
             request.execute(function(resp) {
               console.log('Retrieved profile for:' + resp.displayName);
               document.getElementById("logoutButton").innerHTML += " " + resp.displayName ;
             });
            });
        },

        disconnectUser: function(access_token) {
            var revokeUrl = 'https://accounts.google.com/o/oauth2/revoke?token=' + access_token;

            // Perform an asynchronous GET request.
            $.ajax({
                type: 'GET',
                url: revokeUrl,
                async: false,
                contentType: "application/json",
                dataType: 'jsonp',
                success: function(nullResponse) {
                  // Do something now that user is disconnected
                  // The response is always undefined.
                    document.getElementById('signinButton').setAttribute('style', 'display: block');
                    document.getElementById('logoutButton').className = "hidden" ;
                    document.getElementById('logoutButton').innerHTML = "Logout" ;
                },
                error: function(e) {
                  // Handle the error
                  console.log(e);
                  // You could point users to manually disconnect if unsuccessful
                  // https://plus.google.com/apps
                }
            });
        }
    }
}) ;
