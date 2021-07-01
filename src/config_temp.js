import web3 from "./web3";

export const address = "0x046134fE4f7CC1055F3f8e59889b5219e1549b19";

export const abi = [
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "certificates_num",
				"type": "uint256"
			}
		],
		"name": "addCertificate",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "institution_name",
				"type": "string"
			}
		],
		"name": "addInstitution",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "studentID",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "first_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "last_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "institution_name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "date",
				"type": "uint256"
			}
		],
		"name": "add_certificate",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "institution_address",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "institution_name",
				"type": "string"
			}
		],
		"name": "add_institution",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "certificateNums",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "certificate_count",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "institution_address",
				"type": "address"
			}
		],
		"name": "check_Institution",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "getCertificateNum",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

export default new web3.eth.Contract(abi, address);
