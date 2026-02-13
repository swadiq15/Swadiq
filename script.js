// --- STUDENT DATA ---
const studentsData = [
    { "reg_no": "1020", "name": "AFSAL", "result": "PASSED", "class": "GEN", "marks": 140 },
    { "reg_no": "1021", "name": "UVAIS", "result": "PASSED", "class": "GEN", "marks": 135 },
    { "reg_no": "1022", "name": "ANAS", "result": "PASSED", "class": "FIQH", "marks": 155 },
    { "reg_no": "1023", "name": "HABEEB", "result": "PASSED", "class": "AQEEDA", "marks": 178 },
    { "reg_no": "1024", "name": "JAMSHID", "result": "PASSED", "class": "HADEES", "marks": 180 },
    { "reg_no": "1025", "name": "BASITH", "result": "PASSED", "class": "AQEEDA", "marks": 170 },
    { "reg_no": "1026", "name": "SINAN", "result": "PASSED", "class": "AQEEDA", "marks": 163 },
    { "reg_no": "1027", "name": "NASEEF", "result": "FAILED", "class": "GEN", "marks": 130 },
    { "reg_no": "1028", "name": "NASEEM", "result": "PASSED", "class": "GEN", "marks": 136 },
    { "reg_no": "1029", "name": "BASIL", "result": "PASSED", "class": "THAFSEER", "marks": 190 },
    { "reg_no": "1030", "name": "SUFIYAN", "result": "PASSED", "class": "THAFSEER", "marks": 198 },
    { "reg_no": "1031", "name": "IRFAN", "result": "PASSED", "class": "AQEEDA", "marks": 154 },
    { "reg_no": "1032", "name": "MUBASHIR", "result": "PASSED", "class": "THAFSEER", "marks": 184 },
    { "reg_no": "1033", "name": "SADIQUE", "result": "PASSED", "class": "THAFSEER", "marks": 175 },
    { "reg_no": "1034", "name": "NISHAD", "result": "PASSED", "class": "THAFSEER", "marks": 189 },
    { "reg_no": "1035", "name": "MAHBOOB", "result": "PASSED", "class": "THAFSEER", "marks": 182 },
    { "reg_no": "1036", "name": "NAFIH", "result": "PASSED", "class": "LUGA", "marks": 199 },
    { "reg_no": "1037", "name": "ASLAM", "result": "PASSED", "class": "LUGA", "marks": 197 }
];

// --- SEARCH LOGIC ---
function findResult() {
    const searchId = document.getElementById('studentId').value.trim();
    const resultDiv = document.getElementById('resultDisplay');
    const errorMsg = document.getElementById('errorMsg');

    // UI Elements
    const nameDisplay = document.getElementById('studentName');
    const regNoDisplay = document.getElementById('regNo');
    const classDisplay = document.getElementById('studentClass');
    const marksDisplay = document.getElementById('totalMarks');
    const statusDisplay = document.getElementById('status');
    const statusBox = document.getElementById('statusBox');

    // Reset
    resultDiv.classList.add('hidden');
    errorMsg.innerText = '';

    if (!searchId) {
        errorMsg.innerText = "Please enter a Register Number";
        return;
    }

    // Find Student
    const student = studentsData.find(s => s.reg_no === searchId);

    if (student) {
        // Fill Data
        nameDisplay.innerText = student.name;
        regNoDisplay.innerText = student.reg_no;
        classDisplay.innerText = student.class;
        marksDisplay.innerText = student.marks;
        statusDisplay.innerText = student.result;

        // Styling based on Pass/Fail
        if (student.result === "PASSED") {
            statusBox.style.backgroundColor = "#dcfce7";
            statusBox.style.color = "#166534";
        } else {
            statusBox.style.backgroundColor = "#fee2e2";
            statusBox.style.color = "#991b1b";
        }

        // Show Result
        resultDiv.classList.remove('hidden');
    } else {
        errorMsg.innerText = "Register Number not found!";
    }
}