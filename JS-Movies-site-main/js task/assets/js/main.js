
var films = [
    {
        img : "https://musicart.xboxlive.com/7/89ae2f00-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080", 
        name : "The Wailing", 
        desc: "Lorem ipsum",
        star: "7.9"
    },
    {
        img : "https://m.media-amazon.com/images/M/MV5BMjIwNTM0Mzc5MV5BMl5BanBnXkFtZTgwMDk5NDU1ODE@._V1_.jpg", 
        name : "Warcraft",
        desc: "Lorem ipsum",
        star: "6.5"
    },
    {
        img : "https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500", 
        name : "The Space Between Us", 
        desc: "Lorem ipsum",
        star: "6.7"
    },
    {
        img : "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/wandavision.mp_240x360_crop_center.progressive.jpg?v=1614371756", 
        name : "Lorem", 
        desc: "Lorem ipsum",
        star: "8.0"
    },
    {
        img : "https://media.comicbook.com/2017/10/iron-man-movie-poster-marvel-cinematic-universe-1038878.jpg", 
        name : "Lorem", 
        desc: "Lorem ipsum",
        star: "8.0"
    },
    {
        img : "https://i.ebayimg.com/images/g/qQgAAOSw-iljX7Te/s-l500.jpg", 
        name : "Lorem", 
        desc: "Lorem ipsum",
        star: "8.0"
    },
    {
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSztWlWx9Cu6OHmJXBGy6kwU3QugErKM09O7g&usqp=CAU", 
        name : "Lorem", 
        desc: "Lorem ipsum",
        star: "8.0"
    },
    {
        img : "https://creativereview.imgix.net/content/uploads/2018/12/Unknown-5.jpeg?auto=compress,format&q=60&w=2024&h=3000", 
        name : "Loem", 
        desc: "Lorem ipsum",
        star: "3.0"
    },
    {
        img : "https://static01.nyt.com/images/2017/09/15/arts/24movie-posters8/24movie-posters8-superJumbo.jpg", 
        name : "sdfGED", 
        desc: "Lorem ipsum", 
        star: "5.4"
    },
    {
        img : "https://m.media-amazon.com/images/I/71vuuyVc6UL._AC_SY450_.jpg", 
        name : "LOEMN ", 
        desc: "Lorem ipsum",
        star: "6.5"
    },
    {
        img : "https://m.media-amazon.com/images/M/MV5BMTk4OTY4MDg4Nl5BMl5BanBnXkFtZTgwMTE1MTU3ODE@._V1_.jpg", 
        name : "The fits", 
        desc: "Lorem ipsum",
        star: "7.0"
    }, 
    {
        img : "https://m.media-amazon.com/images/M/MV5BMDk2NWMxNWQtMWIxMS00NjQ0LThkZGEtNDBlZDc3M2JlNjE0XkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_.jpg", 
        name : "Me Before You",
        desc: "Lorem ipsum",
        star: "8.0"
    }, 
    {
        img : "https://m.media-amazon.com/images/M/MV5BMjIwNTM0Mzc5MV5BMl5BanBnXkFtZTgwMDk5NDU1ODE@._V1_.jpg", 
        name : "Warcraft",
        desc: "Lorem ipsum",
        star: "6.5"
    }

]
for (let i = 0; i < films.length; i++) {
    area.innerHTML +=`<div class="item">
    <div class="bg" style="background-image: url(${films[i].img});">
       
    </div>
    <div class="names">
        <p>${films[i].name}</p> 
        <span>${films[i].desc}</span>
    </div> 
    <div class="star">${films[i].star}</div>
</div>`
}
