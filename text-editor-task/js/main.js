(function initTheEditor() {

    
    // Variable declaration //////////////////////////////////////////////////////////////////////////////////////////

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
        $italicTextInput = document.querySelector('.italic-text-toogle__input'),
        $addingButton = document.querySelector('.add-button'),
        $chooseTableListInputes = document.querySelectorAll('[name="adding-panel-radio"]');


    // Function description ///////////////////////////////////////////////////////////////////////////////////////////

    // Initialised select animation for materialize
    $(document).ready(function() {
        $('select').material_select();
    });

    // Function gets some string date and put it as textarea value for user editing
    function setDateToTextarea(date) {
        $userWorkingArea.value += date;
    }

    // Change appropriate font property for showing container. Take property value from changint element 
    function changeShowingTextPropertyValue(elementWithValue, property) {
        $showTextContainer.style[property] = elementWithValue.value;
    }

    // Function which runs font parameters changing function when user select some value for appropriate select list of parameters
    function setOnchangeFunctionsForSelect(selectList, property) {
        for (var i = 0; i < selectList.length; i++) {
            if (selectList[i].selected) {
                changeShowingTextPropertyValue(selectList[i], property);
            }
        }
    }

    // Switches display property for element. Makes it visible or unvisible  
    function swithcElementVisibility(element) {
        if (getComputedStyle(element).display === 'none') {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    }

    // Function which get group of elements and make all of them unvisible except checked element
    function showCheckedElementDate(setOfElements) {
        for (var i = 0; i < setOfElements.length; i++) {
            if (setOfElements[i].checked) {
                swithcElementVisibility( document.querySelector(setOfElements[i].value) );
                continue;       
            }
        document.querySelector(setOfElements[i].value).style.display = 'none';
        }
    }

    // Finds the element by it's selector and returns the selected element value
    function returnElementValue(elementSelector) {
        return document.querySelector(elementSelector).value;
    }

    // Creates the table with table-input parameters which are entered by user
    function createTable() {
        // Create table element, get style parameters for it and set them for one
        var table  = document.createElement('table'),
            tableBorderWidth = returnElementValue('#table-border-line-widht') + 'px',
            borderStyleSelect = document.querySelector('select.table-line-type__select-list'),
            borderColorSelect = document.querySelector('select.table-line-color__select-list');
            tableBorderStyle = borderStyleSelect.options[borderStyleSelect.selectedIndex].value;
            tableBorderColor = borderColorSelect.options[borderColorSelect.selectedIndex].value;
        table.style.border = tableBorderWidth + ' ' + tableBorderStyle + ' ' + tableBorderColor;

        // Create needed amount of rows
        for(var i = 0; i < returnElementValue('#row-amount'); i++) {
            var tableRow = document.createElement('tr');
            // Create needed amount of columns
            for(var j = 0; j < returnElementValue('#column-amount'); j++) {
                var tableColumn = document.createElement('td');
                // Get columns style parameters and set it for each column
                tableColumn.style.height = returnElementValue('#table-cell-height') + 'px';
                tableColumn.style.width = returnElementValue('#table-cell-width') + 'px';
                tableColumn.style.border = tableBorderWidth + ' ' + tableBorderStyle + ' ' + tableBorderColor;
                // Add each created column to row
                tableRow.appendChild(tableColumn);
            }
            // Add each created row to table
            table.appendChild(tableRow);
        }
        // Return complete table 
        return table.outerHTML;
    }
    
    function createList() {
        var list = document.createElement('ul');
        for (var i = 0; i < returnElementValue('#list-elements-amount'); i++) {
             var listItem = document.createElement('li');
            list.appendChild(listItem);
        }
        list.style.listStyleType = returnElementValue('#list-elements-amount');
        return list.outerHTML;
    }
    

    // Application logic /////////////////////////////////////////////////////////////////////////////////////////

    // Transfer text from showing area to use working area after click on edit button
    $editButton.onclick = function () {
        setDateToTextarea($showTextContainer.innerHTML);
    }

    // Transfer text from editing area to working area as HTML markup
    $saveButton.onclick = function () {
        $showTextContainer.innerHTML = $userWorkingArea.value;  
    }
    

    // FONT EDITING PANEL LOGIC START -------------------------------------------------------------------------


    // Add changing font-size function for the each fontSize input
    for (var i = 0; i < $fontSizeInputes.length; i++) {
        $fontSizeInputes[i].onchange = function () {
            changeShowingTextPropertyValue(this, 'fontSize');
        }
    }

    // Add changing font-family function for the fontFamily select and when user select to one of available item set showing block that font-family
    $fontFamilyList.onchange = function () {
        setOnchangeFunctionsForSelect($fontFamilyList, 'fontFamily');
    }
    
    // Add changing font-color function for the fontColor select and when user select to one of available item set showing block that font-color
    $fontColorList.onchange = function () {
        setOnchangeFunctionsForSelect($fontColorList, 'color');
    }
    
    // Add changing background function for the backgroundColor select and when user select to one of available item set showing block that background-color
    $backgroundColorList.onchange = function () {
        setOnchangeFunctionsForSelect($backgroundColorList, 'background');
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

    // FONT EDITING PANEL LOGIC END -------------------------------------------------------------------------------

    // Toggle visibility for input choose-List-or-Table panel
    $addingButton.onclick = function () {
        swithcElementVisibility( document.querySelector('.adding-panel-control') );
    }

    // Make visible table or list adding panel when user checking the appropriate input
    for(var i = 0; i < $chooseTableListInputes.length; i++) {
        $chooseTableListInputes[i].onchange = function () {
            showCheckedElementDate($chooseTableListInputes);
        }
    }

    // Create table when user press the buttoun and put it to textarea
    document.querySelector('.create-table-btn').onclick = function () {
        setDateToTextarea( createTable() );
    }
    
})();