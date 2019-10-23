const fs = require("fs");
const file_path = "./data.json";
fs.readFile(file_path,function(err,data){
    if(err){
        return console.error(err);
    }
    const file_data = data.toString();
    const json_data=JSON.parse(file_data);
    json_data.name="wht";
    json_data.love="zyw";
    fs.writeFile(file_path,JSON.stringify(json_data),function(err){
        if(err){
            console.error(err);
        }else {
            console.info("success")
        }
    })
});
