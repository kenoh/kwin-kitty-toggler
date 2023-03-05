function toggleClient(name)
{
    const cur_desktop = workspace.currentDesktop;
    const clients = workspace.clientList();

    let client = null;

    for (var i = 0; i < clients.length; i++) {
        let resource_name = clients[i].resourceName;

        if (resource_name == name && clients[i].desktop == cur_desktop)
        {
            client = clients[i];
            break;
        }
    }

    if (client)
    {
        if (client.minimized)
        {
            // client.setMaximize(true, true);
            // client.keepAbove = false;
            // client.keepBelow = false;
            workspace.activeClient = client;
        }else{
            client.minimized = true;
        }
    } else {
    }
}

function toggleKitty() { toggleClient("kitty"); }
function toggleEmacs() { toggleClient("emacs"); }
registerShortcut("ToggleKittyWindow", "ToggleKittyWindow", "F12", toggleKitty);
registerShortcut("ToggleEmacsWindow", "ToggleEmacsWindow", "Meta+F12", toggleEmacs);
