
function AddNameLogIN(name)
{
    localStorage.setItem('names', name);
}

function GetName()
{
    return localStorage.getItem('names');
}

export { AddNameLogIN, GetName };