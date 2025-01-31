module.exports = (query) => {
    let objectSearch = {
        keyword: "",
        regex: "",
    };

    if (query.keyword) {
        objectSearch.keyword = req.query.keyword;
        const regex = new RegExp(objectSearch.keyword, "i");
        objectSearch.regex = regex;
    }
    return objectSearch;
};
