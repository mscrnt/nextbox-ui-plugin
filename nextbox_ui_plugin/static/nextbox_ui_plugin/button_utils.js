function showHideUndonnectedButtonInitial() {
    showHideUndonnectedButton = document.getElementById("showHideUndonnectedButton");
    if (displayUnconnected == false) {
        showHideUndonnectedButton.value = 'Display Unconnected'
    } else {
        showHideUndonnectedButton.value = 'Hide Unconnected';
    };
};

function showHideUndonnectedButtonOnClick(button) {
    if (button.value == 'Hide Unconnected') {
        button.value = 'Display Unconnected'
    } else {
        button.value = 'Hide Unconnected';
    };
    showHideUndonnected();
};

function layerSelectorOnChange(checkbox){
    showHideDeviceRoles(checkbox.value, checkbox.checked);
    
    var topologyContainer = document.getElementById('nx-ui-topology');

    // Add or remove the custom CSS classes based on the selected layer
    if (checkbox.value === 'value_for_layer_1') {  // replace with the actual value for layer 1
        topologyContainer.classList.add('n-topology', 'layer-background-1');
        topologyContainer.classList.remove('layer-background-2');
    } else if (checkbox.value === 'value_for_layer_2') {  // replace with the actual value for layer 2
        topologyContainer.classList.add('n-topology', 'layer-background-2');
        topologyContainer.classList.remove('layer-background-1');
    }
};


function layerSelectorByTagOnChange(checkbox){
    showHideDevicesByTag(checkbox.value, checkbox.checked)
};

function showHidePassiveDevicesButtonInitial() {
    showHidePassiveDevicesButton = document.getElementById("showHidePassiveDevicesButton");
    if (displayPassiveDevices == false) {
        showHidePassiveDevicesButton.value = 'Display Passive Devices'
    } else {
        showHidePassiveDevicesButton.value = 'Hide Passive Devices';
    };
};

function showHidePassiveDevicesButtonOnClick(button) {
    if (button.value == 'Hide Passive Devices') {
        button.value = 'Display Passive Devices'
        displayLogicalMultiCableLinks = true;
        showHideLogicalMultiCableLinks();
    } else {
        button.value = 'Hide Passive Devices';
        showHideLogicalMultiCableLinks();
    };
    showHidePassiveDevices();
};
