

// Global window object
console.log(window);
// The document object is part of the window object
console.dir(window.document);
// We can access DOM elements directly with properties
console.log(document.body);
console.log(document.links[0]);

// we can set properties of elements 
//document.body.innerHTML='<h1>Hello from Body</h1>';

// The document object has a ton of methods. One is `document.write()`, which will write something to the document
// document.open();
// document.write('Hello from JS');
// document.close();

// We also have methods to select elements more directly

//document.getElementById('main').innerHTML='<h1> Helloo </h1>';

// document.querySelector('#main h1').innerText='how are Yoy DOM??';
//document.querySelector('#main h1').textContent='Say somthing Google';


// <!DOCTYPE html>
/*<html lang="en">
<head>
    <meta charset="UTF-8">
    
    <title>DOM learning</title>
    <style>
        .bg-black{
            background-color: #212121;
            color: #fff;
        }
    </style>
</head>
<body class="bg-black">
    <div >
        <h1  id="title" class="heading">DOM learning<span style="display: none;">test text</span></h1>
        <h2>Lorem ipsum dolor sit.</h2>
        <h2>Lorem ipsum dolor sit.</h2>
        <h2>Lorem ipsum dolor sit.</h2>
        <p>Lorem ipsum dolor sit amet.</p>
        <input type="password" name="" id="">

        <ul>
            <li class="list-item">one</li>
            <li class="list-item">two</li>
            <li class="list-item">three</li>
            <li class="list-item">four</li>
        </ul>
    </div>
</body>
</html>

// --------------------------*---------------------------------------------------

<body style="background-color: #212121; color: #fff;">
    <div class="parent">
        <!-- this is a comment -->
        <div class="day">Monday</div>
        <div class="day">Tuesday</div>
        <div class="day">Wednesday</div>
        <div class="day">Thursday</div>
    </div>
</body>
<script>
    const parent = document.querySelector('.parent')
    // console.log(parent);
    // console.log(parent.children);
    // console.log(parent.children[1].innerHTML);

    // for (let i = 0; i < parent.children.length; i++) {
    //      console.log(parent.children[i].innerHTML);
        
    // }
    parent.children[1].style.color = "orange"
    // console.log(parent.firstElementChild);
    // console.log(parent.lastElementChild);

    const dayOne = document.querySelector('.day')
    // console.log(dayOne);
    // console.log(dayOne.parentElement);
    // console.log(dayOne.nextElementSibling);

    console.log("NODES: ", parent.childNodes);
</script>


// -----------------------*******------------------------------------------------------------


<body style="background-color: #212121; color: #fff;">
    
</body>
<script>
    const div = document.createElement('div')
    console.log(div);
    div.className = "main"
    div.id = Math.round(Math.random() * 10 + 1)
    div.setAttribute("title", "generated title")
    div.style.backgroundColor = "green"
    div.style.padding = "12px"
    // div.innerText = "code"
    const addText = document.createTextNode("code")
    div.appendChild(addText)

    document.body.appendChild(div)
</script>



//-------------------------------------****************----------------------------------------------

<body style="background-color: #212121; color: #fff;">
    <ul class="language">
        <li>Javascript</li>
    </ul>
</body>
<script>
    function addLanguage(langName){
        const li = document.createElement('li');
        li.innerHTML = `${langName}`
        document.querySelector('.language').appendChild(li)
    }
    addLanguage("python")
    addLanguage("typescript")

    function addOptiLanguage(langName){
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(langName))
        document.querySelector('.language').appendChild(li)
    }
    addOptiLanguage('golang')

    //Edit
    const secondLang = document.querySelector("li:nth-child(2)")
    console.log(secondLang);
    //secondLang.innerHTML = "Mojo"
    const newli = document.createElement('li')
    newli.textContent = "Mojo"
    secondLang.replaceWith(newli)

    //edit
    const firstLang = document.querySelector("li:first-child")
    firstLang.outerHTML = '<li>TypeScript</li>'

    //remove
    const lastLang = document.querySelector('li:last-child')
    lastLang.remove()
    */