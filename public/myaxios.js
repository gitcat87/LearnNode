document.getElementById('user-form').addEventListener('submit', async(e) => {
    e.preventDefault(); //기본적인 서브밋 기능 삭제
    alert('출력');
    

    const username = document.getElementById('username').value;
    const age = document.getElementById("age").value;
    const married = document.getElementById("married").checked;

    const info = document.getElementById('info');

    // const result = await axios.post('/users/save', { data: "data" });
    axios
      .post("/users/save", { username, age, married })
        .then(result => {
          info.textContent = result.data
        // console.log(result.data);
        // const result = data
      })
        .catch(err => {
            info.textContent = err.data;
        // console.log(`에러가 있었습니다. ${err}`);
      });
    
    // console.log(result);
})