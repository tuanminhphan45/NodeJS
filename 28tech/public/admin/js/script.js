// button status
const buttonStatus = document.querySelectorAll("[button-status]");
if (buttonStatus.length > 0) {
    let url = new URL(window.location.href);
    // console.log(url);
    buttonStatus.forEach((button) => {
        button.addEventListener("click", () => {
            const status = button.getAttribute("button-status");
            if (status) {
                url.searchParams.set("status", status);
            } else {
                url.searchParams.delete("status");
            }
            window.location = url.href;
        });
    });
}

// form search
const formSearch = document.querySelector("#form-search");
if (formSearch) {
    formSearch.addEventListener("submit", (e) => {
        console.log(ok);
        e.preventDefault();
        const keyword = e.target.elements.keyword.value;
        if (keyword) {
            url.searchParams.set("keyword", keyword);
        } else {
            url.searchParams.delete("keyword");
        }
        window.location = url.href;
    });
}
