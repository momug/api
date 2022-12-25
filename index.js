const wh = {
    send: function(str){
        const whurl = "https://discord.com/api/webhooks/1056600967220580423/R0hXC73ITn4IenK31WhSs6jmgeQMexadlqrkz5L6u9EgFODsC7wW1RZqQrbuAdI8Hqf-";
        
        const msg = {
            "content" : str
        }
        //msg.username = 'not hook';
        console.log(msg);
        fetch(whurl + "?wait=true", 
            {
                "method" : "POST",
                "headers" : {"content-type" : "application/json"},
                "body" : JSON.stringify(msg)})
                .then(a=>a.json()).then(console.log)
        }
}