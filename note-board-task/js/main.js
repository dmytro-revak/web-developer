$('.create-note-button').click(function () {
    var userText  = $('.user-text-area').val();
    $('.notes-wrapper').append( createNote(userText) );
    $('.user-text-area').val('');
});

function createNote(text) {
    var $noteItem = $('<div class="note-item">'),
        $spanForText = $('<span class="text-wrapper">'),
        $closeButton = $('<button class="close-button">');

    $spanForText.text(text);
    $closeButton.html('&#x2715;');
    $closeButton.click(function () {
        debugger
        $(this).parent().remove();
    });

    $noteItem.append($closeButton, $spanForText);

    return $noteItem;
}