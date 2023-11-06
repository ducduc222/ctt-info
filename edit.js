const editButton = document.getElementById("editButton");
const editButtons = document.getElementById("editButtons");
const okButton = document.getElementById("okButton");
const cancelButton = document.getElementById("cancelButton");
const resetButton = document.getElementById("resetButton");
const hoTenInput = document.getElementById("hoTen");
const namVaoTruongInput = document.getElementById("namVaoTruong");
const bacDaoTao = document.getElementById("bacDaoTao");
const chuongTrinh = document.getElementById("chuongTrinh");
const khoaVien = document.getElementById("khoaVien");
const gioiTinh = document.getElementById("gioiTinh");
const lop = document.getElementById("lop");
const khoaHoc = document.getElementById("khoaHoc");
const email = document.getElementById("email");
const boxImage = document.getElementById("boxImage");

const formThongtin = document.getElementsByClassName("thongtinsinhvien-content")[0];
// Lấy dữ liệu từ localStorage nếu có
hoTenInput.value = localStorage.getItem("hoTen") || hoTenInput.value;
namVaoTruongInput.value = localStorage.getItem("namVaoTruong") || namVaoTruongInput.value;
bacDaoTao.value = localStorage.getItem("bacDaoTao") || bacDaoTao.value;
chuongTrinh.value = localStorage.getItem("chuongTrinh") || chuongTrinh.value;
khoaVien.value = localStorage.getItem("khoaVien") || khoaVien.value;
gioiTinh.value = localStorage.getItem("gioiTinh") || gioiTinh.value;
lop.value = localStorage.getItem("lop") || lop.value;
khoaHoc.value = localStorage.getItem("khoaHoc") || khoaHoc.value;
email.value = localStorage.getItem("email") || email.value;

// Xử lý sự kiện khi nhấn nút "Edit"
editButton.addEventListener("click", () => {
    boxImage.style.display = "block";
    hoTenInput.disabled = false;
    namVaoTruongInput.disabled = false;
    bacDaoTao.disabled = false;
    chuongTrinh.disabled = false;
    khoaVien.disabled = false;
    gioiTinh.disabled = false;
    lop.disabled = false;
    khoaHoc.disabled = false;
    email.disabled = false;
    // Hiện các nút Ok, Cancel, Reset
    editButtons.style.display = "block";
    setCssInputEnable();
});

// Xử lý sự kiện khi nhấn nút "Ok"
okButton.addEventListener("click", () => {
    // Lưu dữ liệu vào localStorage
    localStorage.setItem("hoTen", hoTenInput.value);
    localStorage.setItem("namVaoTruong", namVaoTruongInput.value);
    localStorage.setItem("bacDaoTao", bacDaoTao.value);
    localStorage.setItem("chuongTrinh", chuongTrinh.value);
    localStorage.setItem("khoaVien", khoaVien.value);
    localStorage.setItem("gioiTinh", gioiTinh.value);
    localStorage.setItem("lop", lop.value);
    localStorage.setItem("khoaHoc", khoaHoc.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("avatarImageUrl", avatarImage.src);

    // Vô hiệu hóa các input và ẩn các nút
    boxImage.style.display = "none";
    hoTenInput.disabled = true;
    namVaoTruongInput.disabled = true;
    bacDaoTao.disabled = true;
    chuongTrinh.disabled = true;
    khoaVien.disabled = true;
    gioiTinh.disabled = true;
    lop.disabled = true;
    khoaHoc.disabled = true;
    email.disabled = true;
    editButtons.style.display = "none";
    setCssInputDisable();
    printLog("Ok");
});

// Xử lý sự kiện khi nhấn nút "Cancel"
cancelButton.addEventListener("click", () => {
    // Đặt lại giá trị của input và ẩn các nút
    hoTenInput.value = localStorage.getItem("hoTen") || hoTenInput.value;
    namVaoTruongInput.value = localStorage.getItem("namVaoTruong") || namVaoTruongInput.value;
    bacDaoTao.value = localStorage.getItem("bacDaoTao") || bacDaoTao.value;
    chuongTrinh.value = localStorage.getItem("chuongTrinh") || chuongTrinh.value;
    khoaVien.value = localStorage.getItem("khoaVien") || khoaVien.value;
    gioiTinh.value = localStorage.getItem("gioiTinh") || gioiTinh.value;
    lop.value = localStorage.getItem("lop") || lop.value;
    khoaHoc.value = localStorage.getItem("khoaHoc") || khoaHoc.value;
    email.value = localStorage.getItem("email") || email.value;
    avatarImage.src = localStorage.getItem("avatarImageUrl") || "./image/avatar.png";

    hoTenInput.disabled = true;
    boxImage.style.display = "none";
    namVaoTruongInput.disabled = true;
    bacDaoTao.disabled = true;
    chuongTrinh.disabled = true;
    khoaVien.disabled = true;
    gioiTinh.disabled = true;
    lop.disabled = true;
    khoaHoc.disabled = true;
    email.disabled = true;
    editButtons.style.display = "none";
    setCssInputDisable();
    printLog("Cancel");
});

// Xử lý sự kiện khi nhấn nút "Reset"
resetButton.addEventListener("click", () => {
    // Đặt lại giá trị của input
    hoTenInput.value = "NGUYỄN VĂN ĐỨC"
    namVaoTruongInput.value = "2020"
    bacDaoTao.value = "KSCLC-TN-TT-VN-ICT"
    chuongTrinh.value = "Công nghệ thông tin Việt-Nhật 2020"
    khoaVien.value = "Trường Công nghệ Thông tin và Truyền thông"
    gioiTinh.value = "Nam"
    lop.value = "Việt Nhật 05-K64"
    khoaHoc.value = "65"
    email.value = "duc.nv204953@sis.hust.edu.vn"
    avatarImage.src = "./image/avatar.png";
    localStorage.setItem("hoTen", hoTenInput.value);
    localStorage.setItem("namVaoTruong", namVaoTruongInput.value);
    localStorage.setItem("bacDaoTao", bacDaoTao.value);
    localStorage.setItem("chuongTrinh", chuongTrinh.value);
    localStorage.setItem("khoaVien", khoaVien.value);
    localStorage.setItem("gioiTinh", gioiTinh.value);
    localStorage.setItem("lop", lop.value);
    localStorage.setItem("khoaHoc", khoaHoc.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("avatarImageUrl", avatarImage.src);

    // Vô hiệu hóa các input và ẩn các nút
    boxImage.style.display = "none";
    hoTenInput.disabled = true;
    namVaoTruongInput.disabled = true;
    bacDaoTao.disabled = true;
    chuongTrinh.disabled = true;
    khoaVien.disabled = true;
    gioiTinh.disabled = true;
    lop.disabled = true;
    khoaHoc.disabled = true;
    email.disabled = true;
    editButtons.style.display = "none";
    setCssInputDisable();
    printLog("Reset");
});


const setCssInputEnable = () => {
    // Lấy phần tử formThongtin
    const formThongtin = document.querySelector(".thongtinsinhvien-content");

    // Lấy tất cả các phần tử input và select trong formThongtin
    const inputElements = formThongtin.querySelectorAll("input");
    const selectElements = formThongtin.querySelectorAll("select");

    // Đặt các thuộc tính CSS cho các phần tử input
    inputElements.forEach((input) => {
        input.style.border = "1px solid black";
        input.style.backgroundColor = "white";
    });

    // Đặt các thuộc tính CSS cho các phần tử select
    selectElements.forEach((select) => {
        select.style.border = "1px solid black";
        select.style.backgroundColor = "white";
    });
}


const setCssInputDisable = () => {
    // Lấy phần tử formThongtin
    const formThongtin = document.querySelector(".thongtinsinhvien-content");

    // Lấy tất cả các phần tử input và select trong formThongtin
    const inputElements = formThongtin.querySelectorAll("input");
    const selectElements = formThongtin.querySelectorAll("select");

    // Đặt các thuộc tính CSS cho các phần tử input
    inputElements.forEach((input) => {
        input.style.border = "none";
        input.style.backgroundColor = "white";
    });

    // Đặt các thuộc tính CSS cho các phần tử select
    selectElements.forEach((select) => {
        select.style.border = "none";
        select.style.backgroundColor = "white";
    });
}

// update image
const avatarInput = document.getElementById("avatarInput");
const changeAvatarButton = document.getElementById("changeAvatarButton");
const avatarImage = document.querySelector(".avatar img");

// Add an event listener to the "Change Avatar" button to trigger the file input click
changeAvatarButton.addEventListener("click", () => {
    avatarInput.click();
});

// Add an event listener to the file input to handle the image selection
avatarInput.addEventListener("change", (event) => {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = (e) => {
            // Update the image source with the selected image
            avatarImage.src = e.target.result;
            // Save the image URL to localStorage
            //   localStorage.setItem("avatarImageUrl", e.target.result);
        };

        reader.readAsDataURL(file);
    }
});

// Check if an avatar image URL is already in localStorage and set it
const savedAvatarImageUrl = localStorage.getItem("avatarImageUrl");
if (savedAvatarImageUrl) {
    avatarImage.src = savedAvatarImageUrl;
}

const printLog = (event) => {
    const data = {
        "hoTenInput": localStorage.getItem("hoTen") || hoTenInput.value,
        "namVaoTruongInput": localStorage.getItem("namVaoTruong") || namVaoTruongInput.value,
        "bacDaoTao": localStorage.getItem("bacDaoTao") || bacDaoTao.value,
        "chuongTrinh": localStorage.getItem("chuongTrinh") || chuongTrinh.value,
        "khoaVien": localStorage.getItem("khoaVien") || khoaVien.value,
        "gioiTinh": localStorage.getItem("gioiTinh") || gioiTinh.value,
        "lop": localStorage.getItem("lop") || lop.value,
        "khoaHoc": localStorage.getItem("khoaHoc") || khoaHoc.value,
        "email": localStorage.getItem("email") || email.value,
        "avatarImage": avatarImage.src
    }

    console.log(event, data);
}