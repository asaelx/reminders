var reminder_container = $('#reminder');

function getReminder() {
    $.getJSON('assets/json/images.json', function (data) {
        var random_img = data.images[Math.floor(Math.random() * data.images.length)];
        var img = $('<img>', { src: 'assets/img/' + random_img, alt: 'reminder' });
        reminder_container.html(img);
    });
}

getReminder();

$('.reload-btn').click(function(){
    getReminder();
});
