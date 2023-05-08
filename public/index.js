document.getElementById('user-form').addEventListener('submit', async(e) => {
    e.preventDefault();
    alert('출력');
    

    const result = await axios.post('/users/save', { data: "data" });
    console.log(result);
})