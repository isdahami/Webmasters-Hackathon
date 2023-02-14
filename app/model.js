export function changePage(pageId) {
    $.get(`pages/{pageId}.html`, function(data) {
        $("#app").html(data);
    })

};
