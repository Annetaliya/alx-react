import $ from "jquery";

$(function () {
    const paragraphs = [
        'Holberton Dashboard',
        'Dashboard data for the students',
        'Copyright - Holberton School',

    ];

    paragraphs.forEach((text) => {
        $('body').append(`<p>${text}</p>`)
    });
});

