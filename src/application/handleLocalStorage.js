
function AddNameLogIN(name)
{
    localStorage.setItem('names', name);
}

function GetName()
{
    return localStorage.getItem('names');
}

function Remove()
{
    localStorage.removeItem('names');
}

export { AddNameLogIN, GetName,Remove };