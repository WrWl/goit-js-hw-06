const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const listEl1 = document.createElement("li");
const imageEl1 = document.createElement("img");
imageEl1.setAttribute("src", images[0]["url"]);
imageEl1.setAttribute("alt", images[0]["alt"]);

const listEl2 = document.createElement("li");
const imageEl2 = document.createElement("img");
imageEl2.setAttribute("src", images[1]["url"]);
imageEl2.setAttribute("alt", images[1]["alt"]);

const listEl3 = document.createElement("li");
const imageEl3 = document.createElement("img");
imageEl3.setAttribute("src", images[2]["url"]);
imageEl3.setAttribute("alt", images[2]["alt"]);

document.querySelector(".gallery").style.display = "inline-flex"

document.querySelector(".gallery").append(listEl1, listEl2, listEl3)
listEl1.append(imageEl1)
listEl2.append(imageEl2)
listEl3.append(imageEl3)


console.log(document.querySelector(".gallery"))