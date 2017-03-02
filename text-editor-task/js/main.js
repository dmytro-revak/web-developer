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

    // Takes all text with showing panel and puts it to editing area
    function transferTextToEditingArea() {
        $userWorkingArea.value = $showTextContainer.innerHTML;
    }

    // Application logic-----------------------------------------------------------------------

    $editButton.onclick = function () {
        // debugger
        // var a = $userWorkingArea;
        transferTextToEditingArea();
    }
})();
