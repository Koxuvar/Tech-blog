const lsb = document.getElementById('login-submit');
const rsb = document.getElementById('register-submit');
const logForm = document.getElementById('login-form');
const regForm = document.getElementById('register-form');

lsb.addEventListener('click', async (e) =>
{
    const username = document.getElementById('floatingLogInput').value;
    const password = document.getElementById('floatingLogPassword').value;
    
    if(username && password)
    {
        fetch('/api/users/login',
        {
            method:'POST',
            body:JSON.stringify(
                {
                    username:username, password:password
                }),
            headers: { 'Content-Type': 'application/json'}
        })
        .then((response) =>
        {
            if(response.ok)
            {
                return response.json();
            }
            else
            {
                document.getElementById('logwrong-answer').textContent = "Username or password incorrect. Please try again.";
            }
        })
        .then((data) =>
        {
            console.log(data);
            document.location.replace('/');
        });
    }
    else
    {
        document.getElementById('logwrong-answer').textContent = "Please fill out both fields";
    }
});

rsb.addEventListener('click', async (e) =>
{
    console.log('fuuuuuuuuuu')
    const username = document.getElementById('floatingRegInput').value;
    const password = document.getElementById('floatingRegPassword').value;
    
    if(username && password)
    {
        fetch('/api/users/register',
        {
            method:'POST',
            body:JSON.stringify(
                {
                    username:username, password:password
                }),
            headers: { 'Content-Type': 'application/json'}
        })
        .then((response) =>
        {
            if(response.ok)
            {
                return response.json();
            }
            else
            {
                document.getElementById('regwrong-answer').textContent = "Username already exists. Please try again.";
            }
        })
        .then((data) =>
        {
            console.log(data);
            document.location.replace('/');
        });
    }
    else
    {
        document.getElementById('regwrong-answer').textContent = "Please fill out both fields";
    }
});