// button status
const buttonStatus = document.querySelectorAll("[button-status]");
if (buttonStatus.length > 0) {
    buttonStatus.forEach((button) => {
        button.addEventListener("click", () => {
            const url = new URL(window.location.href);
            const status = button.getAttribute("button-status");

            if (status) {
                url.searchParams.set("status", status);
            } else {
                url.searchParams.delete("status");
            }
            window.location.href = url.href;
        });
    });
}

// form search
const formSearch = document.querySelector("#form-search");
if (formSearch) {
    formSearch.addEventListener("submit", (e) => {
        e.preventDefault();
        const url = new URL(window.location.href);
        const keyword = e.target.elements.keyword.value.trim();

        if (keyword) {
            url.searchParams.set("keyword", keyword);
        } else {
            url.searchParams.delete("keyword");
        }
        window.location.href = url.href;
    });
}

// pagination
const buttonPagination = document.querySelectorAll("[button-pagination]");
if (buttonPagination.length > 0) {
    buttonPagination.forEach((button) => {
        button.addEventListener("click", () => {
            const url = new URL(window.location.href);
            const page = button.getAttribute("button-pagination");

            if (page) {
                url.searchParams.set("page", page);
            } else {
                url.searchParams.delete("page");
            }
            window.location.href = url.href;
        });
    });
}

// checkbox multi-select
const checkboxMulti = document.querySelector("[checkbox-multi]");
if (checkboxMulti) {
    const inputCheckAll = checkboxMulti.querySelector("input[name='checkall']");
    const inputsId = checkboxMulti.querySelectorAll("input[name='id']");

    inputCheckAll.addEventListener("click", () => {
        inputsId.forEach((input) => {
            input.checked = inputCheckAll.checked;
        });
    });

    inputsId.forEach((input) => {
        input.addEventListener("click", () => {
            const allChecked = [...inputsId].every((input) => input.checked);
            inputCheckAll.checked = allChecked;
        });
    });
}

// form change multi
const formChangeMulti = document.querySelector("[form-change-multi]");
if (formChangeMulti) {
    formChangeMulti.addEventListener("submit", (e) => {
        e.preventDefault();
        const checkboxMulti = document.querySelector("[checkbox-multi]");
        const inputsChecked = checkboxMulti.querySelectorAll(
            "input[name='id']:checked"
        );

        const typeChange = e.target.elements.type.value;
        if (typeChange == "delete") {
            const isConfirm = confirm(
                "Ban co chac muon xua nhung san pham nay?"
            );
            if (!isConfirm) {
                return;
            }
        }

        if (inputsChecked.length > 0) {
            let ids = [];

            const inputIds = formChangeMulti.querySelector("input[name='ids']");

            inputsChecked.forEach((input) => {
                const id = input.value;

                if (typeChange == "change-postion") {
                    const position = input
                        .closest("tr")
                        .querySelector("input[name='position']").value;
                    ids.push(`${id}-${position}`);
                } else {
                    ids.push(id);
                }
            });
            inputIds.value = ids.join(", ");
            formChangeMulti.submit();
        } else {
            alert("Vui lòng chọn ít nhất một bản ghi!");
        }
    });
}
// end form change multi

// show alert
const showAlert = document.querySelector("[show-alert]");
if (showAlert) {
    const time = parseInt(showAlert.getAttribute("data-time"));
    const closeAlert = showAlert.querySelector("[close-alert]");

    setTimeout(() => {
        showAlert.classList.add("alert-hidden");
    }, time);

    closeAlert.addEventListener("click", () => {
        showAlert.classList.add("alert-hidden");
    });
}
// end show alert
