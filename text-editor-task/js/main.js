(function initTheEditor() {

    // Variable declaration------------------------------------------------------------------

    // Save needed elements to variables
    var $showTextContainer = document.querySelector('.showing-text-panel'),
        $userWorkingArea = document.getElementById('text-editing-area'),
        $editButton = document.querySelector('.edit-button'),
        $saveButton = document.querySelector('.save-button');


    // Function description-------------------------------------------------------------------

    // Initialised select animation for materialize
    $(document).ready(function() {
        $('select').material_select();
    });

    // If user has pressed 'edit' button followind function gets all text with showing panel and puts it to editing area; If user has pressed 'save' button followind function gets text from editiong panel and puts it to showing panel as HTML markup
    function transferTextBetweenWorkingAndShowingAreas(clickedElement) {
        if (clickedElement.name === 'edit') {
            $userWorkingArea.value = $showTextContainer.innerHTML;
        } else {
            $showTextContainer.innerHTML = $userWorkingArea.value;
        }
    }

    // Application logic-----------------------------------------------------------------------

    // Transfer text from showing area to use working area after click on edit button
    $editButton.onclick = function () {
        transferTextBetweenWorkingAndShowingAreas(this);
    }

    // transfer text from editing area to working area as HTML markup
    $saveButton.onclick = function () {
        transferTextBetweenWorkingAndShowingAreas(this);
    }
})();
