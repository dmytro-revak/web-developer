(function initTheEditor() {
    
    // Variable declaration //////////////////////////////////////////////////////////////////////////////////////////

    // Main panels and needed working containers
    var $showingTextPanel = document.querySelector('.showing-text-panel'),
        $showTextContainer = document.querySelector('.showing-text-panel__show-container'),
        $textEditingPanel = document.querySelector('.text-editing-panel'),
        $userWorkingArea = document.getElementById('text-editing-area'),
        $fontEditPanel = document.querySelector('.font-editing-panel'),
        $tableListCreatingPanel = document.querySelector('.table-list-creating-panel');
        
    // Control buttons
    var $editButton = document.querySelector('.edit-button'),
        $styleButton = document.querySelector('.style-button'),
        $saveButton = document.querySelector('.save-button'),
        $addingButton = document.querySelector('.add-button');

    // Selects and inputes. Switch background button
    var $fontSizeInputes = document.querySelectorAll('[name="font-size-value"]'),
        $textAlignInputes = document.querySelectorAll('[name="font-align-value"]'),
        $fontFamilyList = document.querySelector('.font-family-panel__select-list'),
        $fontColorList = document.querySelector('.font-color-panel__select-list'),
        $backgroundPanelBtn = document.querySelector('.background-panel__buttton'),
        $backgroundColorList = document.querySelector('.background-color-panel__select-list'),
        $backgroundImageList = document.querySelector('.background-image-panel__select-list'),
        $boldTextInput = document.querySelector('.bold-text-toogle__input'),
        $italicTextInput = document.querySelector('.italic-text-toogle__input'),
        $underlineTextInput = document.querySelector('.underline-text-toogle__input'),
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

    // Function which toggle bold, italic or underline text (checkbox) paremeter for showing container
    function switchPropertyByCheckbox(element, property, defaultParameter) {
        if (element.checked) {
            changeShowingTextPropertyValue(element, property);
        } else {
            $showTextContainer.style[property] = defaultParameter;
        }   
    }

    // Switches display property for element. Makes it visible or unvisible  
    function swithcElementVisibility(element) {
        if (getComputedStyle(element).display === 'none') {
            element.style.display = 'flex';
        } else {
            element.style.display = 'none';
        }
    }

    // Function which get group of elements and make all of them unvisible except one element
    function showOneOfTheSetElements(setOfElements, elementToShow) {
        for (var item of setOfElements) {
            if (item === elementToShow) {
                elementToShow.style.display = 'block'; 
            } else {
                item.style.display = 'none';
            }
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
    
    // Creates the list with list-input parameters which are entered by user
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

    // Transfer default text from showing container to the working area
    $userWorkingArea.value = $showTextContainer.innerHTML;

    // All main panel within one array
    var switchingPanels = [$showingTextPanel, $textEditingPanel, $tableListCreatingPanel];

    // Make working area visible and other main panel invisible
    $editButton.onclick = function (e) {
        e.stopPropagation();
        showOneOfTheSetElements(switchingPanels, $textEditingPanel);
    }

    // Transfer text from editing area to showing container as HTML markup and make showing panel visible
    $saveButton.onclick = function (e) {
        e.stopPropagation();
        showOneOfTheSetElements(switchingPanels, $showingTextPanel);
        $showTextContainer.innerHTML = $userWorkingArea.value;
    }

    // Show or hide font edit panel after user's click on style button
    $styleButton.onclick  = function (e) {
        e.stopPropagation();
        swithcElementVisibility($fontEditPanel);
    }

    // Show table-list creatin pable and hide other main panels
    $addingButton.onclick = function (e) {
        e.stopPropagation();
        showOneOfTheSetElements(switchingPanels, $tableListCreatingPanel);
    }

    document.body.onclick  = function() {
        showOneOfTheSetElements(switchingPanels);
    }

    // FONT EDITING PANEL LOGIC START -------------------------------------------------------------------------

    // Add changing font-size function for the each fontSize input
    for (var i = 0; i < $fontSizeInputes.length; i++) {
        $fontSizeInputes[i].onchange = function () {
            changeShowingTextPropertyValue(this, 'fontSize');
        }
    }

    // Add changing text-align function for thr each textAlign input
    for (var i = 0; i < $textAlignInputes.length; i++) {
        $textAlignInputes[i].onchange = function () {
            changeShowingTextPropertyValue(this, 'textAlign');
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

    $backgroundPanelBtn.onclick = function () {
        swithcElementVisibility( document.querySelector('.background-panel__color-panel') );
        swithcElementVisibility( document.querySelector('.background-panel__image-panel') );
    }
    
    // Add changing background function for the backgroundColor select and when user select to one of available item set showing block that background-color
    $backgroundColorList.onchange = function () {
        setOnchangeFunctionsForSelect($backgroundColorList, 'backgroundColor');
    }

    // Add changing background function for the backgroundImage select and when user select to one of available item set showing block that background-image
    $backgroundImageList.onchange = function () {
        setOnchangeFunctionsForSelect($backgroundImageList, 'backgroundImage');
    }
    
    // Add changing font-weight for showing panel when user switch the bold-text input 
    $boldTextInput.onchange = function () {
        switchPropertyByCheckbox($boldTextInput, 'fontWeight', 'normal');
    }
    
    // Add changing font-style for showing panel when user switch the style-text input 
    $italicTextInput.onchange = function () {
        switchPropertyByCheckbox($italicTextInput, 'fontStyle', 'normal');
    }

    // Add changing text-decoration (underline) for showing panel when user switch the underline-text input 
    $underlineTextInput.onchange = function () {
        switchPropertyByCheckbox($underlineTextInput, 'textDecoration', 'none');
    }

    // FONT EDITING PANEL LOGIC END -------------------------------------------------------------------------------



    // Make visible table or list adding panel when user checking the appropriate input
    // for(var i = 0; i < $chooseTableListInputes.length; i++) {
    //     $chooseTableListInputes[i].onchange = function () {
    //         showCheckedElementDate($chooseTableListInputes);
    //     }
    // }

    // Create table when user press the buttoun and put it to textarea
    // document.querySelector('.create-table-btn').onclick = function () {
    //     setDateToTextarea( createTable() );
    // }
    
})();