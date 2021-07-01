pragma solidity ^0.5.0;

contract Certificate{

    struct Institution {
        string institution_name;
        bool value;
    }
    
    struct Certificate_detail {
        address student_address;
        uint studentID;
        string first_name;
        string last_name;
        string institution_name;
        uint date;
    }
    
    uint public certificate_count;

    mapping(address=>Institution) Institutions;
    mapping(uint=>Certificate_detail) certificates;
    mapping(address=>Certificate_detail) certificatesAD;

    address owner;
    constructor() public {
        owner=msg.sender;
    }
    
    modifier ownerOnly{
        require(owner==msg.sender);
        _;
    }

    event addInstitution(string institution_name);
    event addCertificate(uint certificates_num);

    function add_institution(address institution_address, string memory institution_name) ownerOnly  public{
        Institutions[institution_address]  =  Institution(institution_name,true);
        string memory s = institution_name;
        emit addInstitution(s); //calling event
    }

    function check_Institution(address institution_address) view public returns (bool){
        return Institutions[institution_address].value;
    }
    
    // Fetch CertificateNum by studentID
    mapping(uint => uint) public certificateNums;
    
    function getCertificateNum() public returns (uint){
        uint certificate_num = uint(keccak256(abi.encodePacked(certificates[certificate_count].studentID)));
        certificateNums[certificates[certificate_count].studentID] = certificate_num;
        return certificate_num;
    }

    function add_certificate(address student_address, uint studentID, string memory first_name,string memory last_name,string memory institution_name, uint date) public{
        if(check_Institution(msg.sender)){
            certificate_count ++;
            certificates[certificate_count] = Certificate_detail(student_address,studentID,first_name,last_name,institution_name,date);
            certificatesAD[student_address] = Certificate_detail(student_address,studentID,first_name,last_name,institution_name,date);
            emit addCertificate(getCertificateNum());
        }
    }
    
    function getCertificateCount() view public returns (uint){
        return certificate_count;
    }
    
    function getStudentInfo(uint index) view public returns (address, uint, string memory, string memory, string memory, uint){
        return (certificates[index].student_address, certificates[index].studentID, certificates[index].first_name, certificates[index].last_name, certificates[index].institution_name, certificates[index].date);
    }
    
    function getStudentInfoByAddress(address ad) view public returns (address, uint, string memory, string memory, string memory, uint){
        return (certificatesAD[ad].student_address, certificatesAD[ad].studentID, certificatesAD[ad].first_name, certificatesAD[ad].last_name, certificatesAD[ad].institution_name, certificatesAD[ad].date);
    }
    
    function getStudentAddress(uint index) view public returns (address){
        return certificates[index].student_address;
    }
    
    function getStudentID(uint index) view public returns (uint){
        return certificates[index].studentID;
    }
    
    function getStudentFirstName(uint index) view public returns (string memory){
        return certificates[index].first_name;
    }
    
    function getStudentLastName(uint index) view public returns (string memory){
        return certificates[index].last_name;
    }
    
    function getInstitutionName(uint index) view public returns (string memory){
        return certificates[index].institution_name;
    }
    
    function getDate(uint index) view public returns (uint){
        return certificates[index].date;
    }
    
    function getCertificateNumByID(uint ID) view public returns (uint){
        return certificateNums[ID];
    }
}