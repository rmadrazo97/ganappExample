// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

async function solution() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  var urlencoded = new URLSearchParams();
  urlencoded.append("username", "admin@dapdevs.com");
  urlencoded.append("password", "dapdevs$2021");

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow"
  };

  let JWT = await fetch(
    "https://927d1d30.us-south.apigw.appdomain.cloud/ganapp/api/login",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      document.getElementById("jwt").innerText = JSON.stringify(result);
      return result.JWT;
    })
    .catch((error) => console.log("error", error));
  // ------

  var requestOptions = {
    method: "GET",
    headers: {
      "X-Authorization": "Bearer " + JWT
    },
    redirect: "follow"
  };

  fetch(
    "https://927d1d30.us-south.apigw.appdomain.cloud/ganapp/api/list/users",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      document.getElementById("userData").innerText = JSON.stringify(result);
    })
    .catch((error) => console.log("error", error));
  // ------
  console.log("token: ", JWT);
}

console.log(solution());
