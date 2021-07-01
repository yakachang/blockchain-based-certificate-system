# Blockchain-based-certificate-system

This project is for certificate verification with Blockchain technology.\
And, it is bootstrapped with React App.\

## Tutorial

### Step 1: Sign in
You can install the *Metamask* extension in chrome browser and sign in *Ethereum* account.

### Step 2: Run the code
In the projec directory, you can use the following commands to run this code:\
To begin with, run `npm install` on the command line to install all the dependencies.\
Then, run `npm start` on the command line to run the app in the development mode.\
You will see it in the browser.

### Step 3: Register (Front-end)
In order to prevent fake certificate, we hope that all certificates are upload to the blockchain by institution who awarded the certificate.\
Hence, institutions must have a account in the Ethereum and sign in such account.\
To register in this system, all they need is to input the institution name. The system will save the institution name and the account that is connecting when the institutions register.

### Step 4: Create certificate (Front-end)
The institutions need to input the personal information of students (student's address, student ID, first name, last name), institution name (who award this certificate), and the date the certificate was awarded. When the institutions click the *Add certificate* button, the institution's account will make a transaction with the smart contract, *Certificate.sol*.

### Step 5: View Certificate
This system will save the information of the lastest certificate temporary. That is after an institution created a certificate, they can see the detail in the function *View Certificate*.

### Step 6: Verify
The value of the transaction hash can be utilized to prove whether this certificate is real or not. When people input the value of the transaction hash value and click the button *Verify*. Then the website will connect to *Etherscan* (https://ropsten.etherscan.io/) automatically and shows the transaction details.

### Step 7: Verify Info
The value of the digital certificate number can be utilized to verify the detail of this certificate. People can input the value of the digital certificate number and click the button *Verify*. Then the website will show the information of the certificate correspond to the digital certificate number automatically.

