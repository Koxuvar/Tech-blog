
const logoutfunc = (e) =>
{
    fetch('/api/users/logout',
    {
        method:'POST'
    })
    .then((response) =>
    {
        return response.json();
    })
    .then((data) =>
    {
        console.log(data);
        document.location.reload();
    });
}

document.querySelectorAll('#read-more').forEach(item =>
{
    item.addEventListener('click', (e) =>
    {
        const t = e.target;
        const pid = t.dataset.postid;
            
        fetch(`/api/blog/post/${pid}`)
        .then(response => response.ok ? response.json() : 'Error in getting post')
        .then((data) => document.location.replace(`/post/${data.id}`));
    })
});