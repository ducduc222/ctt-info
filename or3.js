const addInfoItemBtn = document.getElementById('add-info-item-button');
const addGroupItemBtn = document.getElementById('add-group-item-button');
function addInfoItem(event) {
    var elementClick = event.target;

    var maincontentElement = elementClick.parentNode.parentNode;


    if (maincontentElement.querySelector('.content-info')) {
        console.log("đã có content-info");
    } else {
        var eleNew = document.createElement("div");
        eleNew.className = 'content-info';
        maincontentElement.appendChild(eleNew)
    }
    var contentElement = maincontentElement.querySelector('.content-info')
    addItem(contentElement);
}
function addGroupItem(event) {
    var elementClick = event.target.parentNode.parentNode.parentNode;
    //test
    // Tạo div chính (maincontent-row)
    var mainContentRow = document.createElement("div");
    mainContentRow.className = "maincontent-row";

    // Tạo div title-group
    var titleGroup = document.createElement("div");
    titleGroup.className = "title-group";

    // Tạo div thongtinsv-left và thêm vào title-group
    var thongTinSVLeft = document.createElement("div");
    thongTinSVLeft.className = "thongtinsv-left";
    var spanElement = document.createElement("span");
    var inputElement = document.createElement("input");
    inputElement.type = "text"
    inputElement.value = "Group Item_202024953";
    inputElement.disabled = true;
    inputElement.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    inputElement.style.border = "none";
    spanElement.appendChild(inputElement);
    inputElement.addEventListener("dblclick", function () {
        inputElement.disabled = false;
        inputElement.style.border = "1px solid black";
    });
    inputElement.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            inputElement.style.border = "none";
            inputElement.disabled = true;
        }
    });
    thongTinSVLeft.appendChild(spanElement);

    // Tạo nút add-info-item-button và thêm vào title-group
    var addInfoItemButton = document.createElement("div");
    addInfoItemButton.id = "add-info-item-button";
    addInfoItemButton.textContent = "< Add Info Item >";
    addInfoItemButton.addEventListener("click", addInfoItem)

    // Tạo nút add-group-item-button và thêm vào title-group
    var addGroupItemButton = document.createElement("div");
    addGroupItemButton.id = "add-group-item-button";
    addGroupItemButton.textContent = "< Add Group Item >";
    addGroupItemButton.addEventListener("click", addGroupItem)

    var deleteButton = document.createElement("div");
    deleteButton.id = "delete-group-item-button";
    deleteButton.textContent = "< Delete >";
    deleteButton.addEventListener("click", () => {
        var confirmAlert = confirm("Nguyễn Văn Đức 20204953\nBạn có chắc chắn muốn xóa?");
        if (confirmAlert) {
            mainContentRow.remove();
        }
    })

    titleGroup.appendChild(thongTinSVLeft);
    titleGroup.appendChild(addInfoItemButton);
    titleGroup.appendChild(addGroupItemButton);
    titleGroup.appendChild(deleteButton);

    // Thêm title-group và đường ngăn (hr) vào maincontent-row
    mainContentRow.appendChild(titleGroup);
    mainContentRow.appendChild(document.createElement("hr"));

    elementClick.appendChild(mainContentRow);
}

function addItem(element) {
    var divElement = document.createElement("div");

    // Tạo span
    var spanElement = document.createElement("input");
    spanElement.type = "text"
    spanElement.value = "Name Item";
    spanElement.disabled = true;
    spanElement.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    spanElement.style.border = "none";

    var inputElement = document.createElement("input");
    inputElement.type = "text";
    inputElement.disabled = true;


    var buttonElement = document.createElement("button");
    buttonElement.textContent = "delete";

    divElement.appendChild(spanElement);
    divElement.appendChild(inputElement);
    divElement.appendChild(buttonElement);

    spanElement.addEventListener("dblclick", function () {
        spanElement.disabled = false;
        spanElement.style.border = "1px solid black";
    });
    spanElement.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            spanElement.style.border = "none";
            spanElement.disabled = true;
            spanElement.value = spanElement.value + ":";
        }
    });

    inputElement.addEventListener("dblclick", function () {
        inputElement.disabled = false;
    });
    inputElement.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            inputElement.disabled = true;
        }
    });

    buttonElement.addEventListener("click", function () {
        var confirmAlert = confirm("Nguyễn Văn Đức 20204953\nBạn có chắc chắn muốn xóa?");
        if (confirmAlert) {
            divElement.remove();
        }
    });
    element.appendChild(divElement);
}

addInfoItemBtn.addEventListener("click", addInfoItem)
addGroupItemBtn.addEventListener("click", addGroupItem)

$("body").on("click", "#btnExport", function () {
    
    html2canvas($('.content')[0], {
        onrendered: function (canvas) {
            var data = canvas.toDataURL();
            var docDefinition = {
                content: [{
                    image: data,
                    width: 500
                }]
            };
            var pdfOptions = {
                buttons: {
                    export: false,
                    print: false,
                    open: false,
                }
            };
            pdfMake.createPdf(docDefinition, pdfOptions).download("info-details.pdf");
        }
    });
});
