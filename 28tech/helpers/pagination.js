module.exports = (query, objectPagination, countProdcuts) => {
    if (query.page) {
        objectPagination.currentPage = parseInt(query.page);
    }

    const totalPage = Math.ceil(countProdcuts / objectPagination.limitItems);
    objectPagination.totalPage = totalPage;
    return objectPagination;
};
