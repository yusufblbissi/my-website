var services = document.getElementById("services-grids");
const origenal_Content = `<div class="col-md-4 services-grid">
<img src="images/img1.png" alt="" />
<h4>TITLE</h4>
<p>PARAGRAPH</p>
</div>`;
fetch("http://localhost:4000/services")
  .then((response) => response.json())
  .then((data) => {
    data.forEach(element => {
      var content = origenal_Content;
      content =content.replace('TITLE',element.title);
      content =content.replace('PARAGRAPH',element.paragraph);
      var service = document.createElement("div");
      service.innerHTML = content;
      services.appendChild(service);
    });
  });
/*



function getStudent() {
 
}
getStudent();
function postData() {
  fetch("http://localhost:4000/addstudent", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: document.getElementById("inpid").value,
      name: document.getElementById("inpname").value,
    }),
  });
}*/
