(function initTheEditor() {

    
    // Variable declaration-------------------------------------------------------------------

    // Save needed elements to variables
    var $showTextContainer = document.querySelector('.showing-text-panel'),
        $userWorkingArea = document.getElementById('text-editing-area'),
        $editButton = document.querySelector('.edit-button'),
        $saveButton = document.querySelector('.save-button'),
        $fontSizeInputes = document.querySelectorAll('[name="font-size-value"]'),
        $fontFamilyList = document.querySelector('.font-family-panel__select-list'),
        $fontColorList = document.querySelector('.font-color-panel__select-list'),
        $backgroundColorList = document.querySelector('.background-color-panel__select-list'),
        $boldTextInput = document.querySelector('.bold-text-toogle__input'),
        $italicTextInput = document.querySelector('.italic-text-toogle__input');


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
    
    // Change appropriate font property for showing container. Take property value from changint element 
    function changeShowingTextPropertyValue(elementWithValue, property) {
        $showTextContainer.style[property] = elementWithValue.value;
    }
    
    
    // Application logic-----------------------------------------------------------------------

    // Transfer text from showing area to use working area after click on edit button
    $editButton.onclick = function () {
        transferTextBetweenWorkingAndShowingAreas(this);
    }

    // Transfer text from editing area to working area as HTML markup
    $saveButton.onclick = function () {
        transferTextBetweenWorkingAndShowingAreas(this);
    }
    
    // Add changing font-size function for the each fontSize input
    for (var i = 0; i < $fontSizeInputes.length; i++) {
        $fontSizeInputes[i].onchange = function () {
            changeShowingTextPropertyValue(this, 'fontSize');
        }
    }
    
    // Add changing font-family function for the fontFamily select and when user select to one of available item set showing block that font-family
    $fontFamilyList.onchange = function () {
        for (var i = 0; i < $fontFamilyList.length; i++) {
            if ($fontFamilyList[i].selected) {
                changeShowingTextPropertyValue($fontFamilyList[i], 'fontFamily');
            }
        }
    }
    
    // Add changing font-color function for the fontColor select and when user select to one of available item set showing block that font-color
    $fontColorList.onchange = function () {
        for (var i = 0; i < $fontColorList.length; i++) {
            if ($fontColorList[i].selected) {
                changeShowingTextPropertyValue($fontColorList[i], 'color');
            }
        }
    }
    
    // Add changing background function for the backgroundColor select and when user select to one of available item set showing block that background-color
    $backgroundColorList.onchange = function () {
        for (var i = 0; i < $backgroundColorList.length; i++) {
            if ($backgroundColorList[i].selected) {
                changeShowingTextPropertyValue($backgroundColorList[i], 'background');
            }
        }
    }
    
    // Add changing font-weight for showing panel when user switch the bold-text input 
    $boldTextInput.onchange = function () {
        if ($boldTextInput.checked) {
            changeShowingTextPropertyValue(this, 'fontWeight');
        } else {
            $showTextContainer.style.fontWeight = 'normal';
        }
    }
    
    // Add changing font-style for showing panel when user switch the style-text input 
    $italicTextInput.onchange = function () {
        if ($italicTextInput.checked) {
            changeShowingTextPropertyValue(this, 'fontStyle');
        } else {
            $showTextContainer.style.fontStyle = 'normal';
        }
    }
    
})();