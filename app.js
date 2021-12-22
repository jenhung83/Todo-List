const express = require("express");
const date = require(__dirname + "/jenDate.js");
const app = express();

app.set("view engine", "ejs");
// app.use("view engine", "ejs"); 打錯 用use會失敗！！！

app.use(express.urlencoded({ extended: true})); //有這個 req.body.newItem才能用
app.use(express.static("public"));

const items = ["Eat", "Sleep", "Eat more"];
const workItems = [];

app.get("/", function(req, res){

    // var day = "";
    // if (today.getDay() === 6 || today.getDay() === 0){
    //     day = "weekend";
    // } else {
    //     // res.sendFile(__dirname + "/index.html");
    //     day = "weekday";
    // }
    
    const day = date.getDate();
    // const day = date.getDay();
    res.render("list.ejs", {listTitle: day, newListItems: items}); // ejs will look inside views folder and render that page
});

app.get("/work", function(req, res){
    res.render("list.ejs", {listTitle: "Work List", newListItems: workItems})
});

app.post("/", function(req, res){
    console.log(req.body);
    const item = req.body.newItem;

    if (req.body.list === "Work List"){
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }
});

app.listen(3000, function(){
    // console.log(NaN || 1-"1" || 1+"1" || 1*"1");
    console.log("sever is runing on port 3000...yoyo")
});