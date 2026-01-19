import express from 'express';

const app = express();

// set ejs
app.set('view engine', 'ejs');
app.use(express.static('public'));


// middleware for form data
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("Home page");
});

app.get('/about', (req, res) => {
    res.render("about", {
        title: 'About page',
        message: "Welcome to EJS!"
    });
});

// show form
app.get('/form', (req, res) => {
    res.render("form", { message: "" });
});

// handle form submit
app.post('/form', (req, res) => {
    const name = req.body.name;
    res.render("form", { message: `Form submitted by ${name}` });
});

// reandom student data
app.get('/table', (req, res) => {
    res.render('table');
});


app.listen(3000, () => {
    console.log("Server is running now");
});
