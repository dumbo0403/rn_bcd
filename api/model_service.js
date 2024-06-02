function base64ToByteArray(base64) {
    // Check if the base64 string length is valid
    if (base64.length % 4 !== 0) {
        throw new Error("Not a valid base64 encoded string length");
    }

    try {
        // Decode the base64 string to a binary string
        const binaryString = atob(base64);
        
        // Create a Uint8Array with the same length as the binary string
        const byteArray = new Uint8Array(binaryString.length);
        
        // Loop through the binary string and populate the byte array
        for (let i = 0; i < binaryString.length; i++) {
            byteArray[i] = binaryString.charCodeAt(i);
        }
        
        return byteArray;
    } catch (error) {
        throw new Error("Failed to decode base64 string: " + error.message);
    }
}

export function send_image({byte_image}, cb){
    byteArray = base64ToByteArray(byte_image)
    return fetch("https://api-inference.huggingface.co/models/ALM-AHME/beit-large-patch16-224-finetuned-BreastCancer-Classification-BreakHis-AH-60-20-20",{
        method:"POST",
        headers:{
            'Authorization':'Bearer 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',
            'Content-Type': 'application/json'
        },
        body: byteArray
    }).then((res)=>{
        return res.json()
    }).then((res)=>{
        malignant = res[0]['score']
        benign = res[1]['score']
        cb({malignant, benign}, null)
    })
    .catch((err)=>{
        cb({}, err)
    })
}

export function send_image_to_model({b64_image, ip}, cb){
    return fetch(ip+"/submit",{
        method:"POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            image:b64_image
        })
    }).then((res)=>{
        return res.json()
    }).then((res)=>{
        cb(res, null)
    })
    .catch((err)=>{
        cb(null, err)
    })
}