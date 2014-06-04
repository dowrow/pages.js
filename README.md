pages.js
========

Lightweight library to simplify navegation between screens in single-page apps

How to use
==========

First of all, design your app so that every screen is a ```<section>``` element wrapped into one single ```<main>``` element.

```html
<body>

        <main>
            
            <section id="page1">
            </section>
            
            <section id="page2">
            </section>
            
            <section id="page3">
            </section>
            
        </main>
        
</body>
```

Then include the pages.js library at the end of the ```<body>```.

```html
<body>

        <main>
            
            <section id="page1">
            </section>
            
            <section id="page2">
            </section>
            
            <section id="page3">
            </section>
            
        </main>
        
        <script src="js/pages.js"></script>
        
</body>
```

Now you can navigate from one screen to another by adding links pointing to the _id_ of the desired screen:

```html
<body>

        <main>
            
            <section id="page1">
                <a href="#page2">Go to page 2</a>
            </section>
            
            <section id="page2">
                <a href="#page2">Go to page 3</a>
            </section>
            
            <section id="page3">
                <a href="#page1">Go to page 1</a>
            </section>
            
        </main>
        
        <script src="js/pages.js"></script>
        
</body>
```
