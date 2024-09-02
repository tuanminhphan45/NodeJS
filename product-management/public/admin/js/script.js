const buttonsStatus = document.querySelectorAll("[button-status]");
if (buttonsStatus.length > 0) {
    let url = new URL(window.location.href);
    buttonsStatus.forEach((btn) => {
        btn.addEventListener("click", () => {
            const status = btn.getAttribute("button-status");
            if (status) {
                url.searchParams.set("status", status);
            } else {
                url.searchParams.delete("status");
            }
            window.location.href = url.href;
        });
    });
}

const formSearch = document.querySelectorAll("#form-search");
if(formSearch){
    formSearch.addEventListener("submit", (e) =>{
        e.prevenDefault();
        const keyWord = e.target.element.keyWord.value;
        if(keyWord){
            url.searchParams.set("keyword", keyword);
        }else{
            url.searchParams.remove("keyword")
        }

    })
}
