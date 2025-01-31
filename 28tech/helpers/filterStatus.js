module.exports = (query) => {
    const filterStatus = [
        {
            name: "All",
            status: "",
            class: "",
        },
        {
            name: "Active",
            status: "active",
            class: "",
        },
        {
            name: "Inactive",
            status: "inactive",
            class: "",
        },
    ];
    if (query.status) {
        const index = filterStatus.findIndex((x) => x.status == query.status);
        filterStatus[index].class = "active";
    } else {
        const index = filterStatus.findIndex((x) => x.status == "");
        filterStatus[index].class = "active";
    }
    return filterStatus;
};
