const fs = require("fs");

fs.writeFile("hello.txt", "Hello World", "utf-8", (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Created Successfully");
});

