export function currentUserData(users, email) {
  const user = users.filter((u) => u.email === email);
  console.log(user[0]);
  return user[0];
}

export function userName(data, id) {
  const user = data.users.filter((u) => u.id === id);
  return user[0].name;
}
