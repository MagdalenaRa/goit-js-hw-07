
  const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  
];

  const galleryList = document.querySelector(".gallery");


images.forEach((imageData) => {
  const listItem = document.createElement("li");
  const image = document.createElement("img");
  image.src = imageData.url;
  image.alt = imageData.alt;
  listItem.appendChild(image);
  galleryList.appendChild(listItem);
});


galleryList.style.display = "flex";
galleryList.style.listStyle = "none";
galleryList.style.padding = "0";
galleryList.style.margin = "0";
galleryList.style.gap = "10px";