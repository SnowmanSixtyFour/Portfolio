// WIP

// Events

document.addEventListener('keydown', function(event)
{
    if (event.key === 'Enter')
    {
        // Go to Selected Page
        if (option.value === "0")
        {
            currentPage.innerHTML = page0; // Display About Me Text
            currentPage.style.color = "white"; // Set Colour to White
        }
        if (option.value === "2") window.location.href = "./socials";

        // Reset Option
        option.value = "";
    }

    /* Prevent F Keys from Having Function */
    if (event.key === 'F1')
    {
        event.preventDefault();
    }
    if (event.key === 'F2')
    {
        event.preventDefault();
    }
    if (event.key === 'F3')
    {
        event.preventDefault();

        // Leave Website
        window.close();
    }
    if (event.key === 'F7')
    {
        event.preventDefault();
    }
    if (event.key === 'F8')
    {
        event.preventDefault();
    }
    if (event.key === 'F10')
    {
        event.preventDefault();
    }
    if (event.key === 'F12')
    {
        event.preventDefault();
    }
})