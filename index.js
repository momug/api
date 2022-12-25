const wh = {
    send: function(str){
        const whurl = "https://discord.com/api/webhooks/1056211433723015229/YynBYKXUMrtuBgqqyvbMJbi2l86qftrRYEdlYQEz0RgEjyepYYKgfZs0Tl_ZFaT7Tkmc";
        
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