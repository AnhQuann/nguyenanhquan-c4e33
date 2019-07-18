const context = {
  users: null,
};

// async / await
window.onload = async () => {
  await getUsers();
  renderUsers();
  viewInfoUsers();
}

const getUsers = async () => {
  const response = await fetch('https://reqres.in/api/users');
  const data = await response.json();
  const users = data.data;
  context.users = users;
}

const renderUsers = () => {
  let listUsers = document.getElementById('list_users');
  context.users.forEach((user, index) => {
    let fullName = `${user.first_name} ${user.last_name}`;
    listUsers.innerHTML += `<li id="user-${index}">${fullName}</li>`;
  })
}

const viewInfoUsers = () => {
  context.users.forEach((user, index) => {
    let eachUser = document.getElementById(`user-${index}`);
    let divInfo = document.getElementById('user_info');
    eachUser.addEventListener('click', () => {
      divInfo.innerHTML = '';
      let userInfo = `
        <img src="${user.avatar}"> <br>
        <span><b>First name:</b> ${user.first_name}</span> <br>
        <span><b>Last name:</b> ${user.last_name}</span> <br>
        <span><b>Email:</b> ${user.email}</span>
      `;
      divInfo.innerHTML += userInfo;
    })
  })
}