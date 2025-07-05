This script is used to get the payments data from bunq server if you are an owner of the account and hold an API key.
Data is populated in the sqlite database which can then be used for expense analysis.

Requirements to run the script:
  - Deno installed locally
  - rsa key pairs in the files intallation.pub and installation.key
  `openssl genrsa -out installation.key && openssl rsa -in installation.key -outform PEM -pubout -out installation.pub`
  - api key in .env file named API_KEY
