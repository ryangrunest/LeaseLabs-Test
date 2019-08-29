document.body.onload = function() {
  const images = {
    man: {
      heading: "Man Image",
      description: "Image of a man.",
      path: "images/man.jpg"
    },
    wizard: {
      heading: "Wizard Image",
      description: "Image of a wizard.",
      path: "images/wizard.jpg"
    },
    beast: {
      heading: "Beast Image",
      description: "Image of a beast.",
      path: "images/beast.jpg"
    }
  };

  function addImages(obj) {
    let images = Object.entries(obj);

    for (let i = 0; i < images.length; i++) {
      // console.log(images[i]);

      let name = images[i][0];
      let heading = images[i][1].heading;
      let description = images[i][1].description;
      let path = images[i][1].path;

      let tint = document.createElement("figure");
      tint.style.margin = "10px";
      tint.setAttribute("class", "tint");
      tint.setAttribute("description", description);
      tint.setAttribute("alt", heading);

      let imgElement = document.createElement("img");
      imgElement.setAttribute("width", "275px");
      imgElement.setAttribute("height", "200px");
      imgElement.setAttribute("description", description);
      imgElement.setAttribute("alt", heading);
      imgElement.setAttribute("name", name);
      imgElement.setAttribute("class", "main-image");
      imgElement.style.objectFit = "cover";
      imgElement.style.border = "1px solid #00a8e2";
      imgElement.src = path;

      tint.appendChild(imgElement);
      document.getElementById("image-container").appendChild(tint);
    }
  }
  // addImage(images.man);
  // addImage(images.wizard);
  // addImage(images.beast);
  addImages(images);
};
// document.querySelector(".image-container").innerHTML = ;
