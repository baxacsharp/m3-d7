window.onload =()=>{
fetch("https://jsonplaceholder.typicode.com/users").then(response=>response.json())
.then(getDatas).catch(err=>console.log(err))
}
const getDatas=(users)=>{

   console.log(users)
    const row = document.querySelector(".row")

    
    
    users.forEach(user=>{
      row.innerHTML+=getCardInfo(user)
    })

}
const getCardInfo=(user)=>{
    return`
    <div class="col-sm-6">
      <div class="card">
        <div class="card-body bg-secondary">
          <h5 class="card-title" >${user.name}</h5>
          <p class="card-text">${user.email}</p>
          <p class="card-text">${user.phone}</p>
          <a href="#" class="btn btn-primary">Details</a>
        </div>
      </div>
    </div>
 `
}
