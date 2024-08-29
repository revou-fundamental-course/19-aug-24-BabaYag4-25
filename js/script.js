function get_name(){
    let user_name = prompt("Enter your name: ")
    document.getElementById("user_name").innerHTML = user_name;
}

get_name();

function validateForm() {
    const currentTime = new Date().toLocaleDateString('id-ID', { timeZone: 'Asia/Jakarta'});
    const name = document.forms["message-form"]["full-name"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const message = document.forms["message-form"]["messages"].value;

    if (name == "" || birthDate == "" || gender == "" || message == "") {
        alert("Tidak boleh ada yang kosong");
        return false;
    }

    setSenderUI(currentTime, name, birthDate, gender, message);

    return false;
}

function setSenderUI(currentTime, name, birthDate, gender, message) {
    document.getElementById("date").innerHTML = `<strong>Current Date</strong> : ${currentTime}`
    document.getElementById("sender-full-name").innerHTML = `<strong>Nama</strong>: ${name}`
    document.getElementById("sender-birth-date").innerHTML = `<strong>Tanggal lahir</strong>: ${birthDate}`
    document.getElementById("sender-gender").innerHTML = `<strong>Jenis Kelamin</strong>: ${gender}`
    document.getElementById("sender-messages").innerHTML = `<strong>Pesan</strong>: ${message}`
}