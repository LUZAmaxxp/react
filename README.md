# React app project 
 this react app that i developped applies all  the technologies and concepts that i learned from different web developpers until now , using middlewares and very modern technologies for security 

## Technologies Used

###JWT : Json Web Token 
JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.  I used Jwt for authentifiying the admin . How ? 
    1- I created a Database in Mongodb that stores the role of the user , their email and  password then i encrypted their Data once stored in the Database while giving them their own token if they are an admin ( the role is determined if the domain of the email contains @e-polytechnique ) .
    2- When a User tries to log into the Admin's Dashboard , the backend decrypt the same user Data from the Database and search for the Token 
    3- If ( Token Exists in the user Info ){
          Logs into the dashboard ;
          Token Expires in 24h;
          }
          else{ 
          denies  Access ;
          }

Surely while reviewing my code you'll see implementations of other concepts and tech i just can't keep writing in the keyboard :)



 
