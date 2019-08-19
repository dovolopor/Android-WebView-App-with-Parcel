window.onload = init;

function init()
{
    let newParagraph = document.createElement('p');
    newParagraph.innerText = "This paragraph appended via js file"
    document.body.appendChild(newParagraph)
}