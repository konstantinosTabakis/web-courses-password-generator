let length= 10
let config= {
    lowercase:{
        values: 'qwertyuiopasdfghjklzxcvbnm',
        enabled: true
    },
    uppercase:{
        values: 'QWERTYUIOPASDFGHJKLZXCVBNM',
        enabled: true
    },
    numbers:{
        values: '0123456789',
        enabled: true
    },
    special:{
        values: '!@#$%^&*()-=+,./?',
        enabled: false
    },
}

const generatePassword = ()=>{
    let password =''
    let available_chars=''
    
    for(itm of Object.values(config)){
        if(itm.enabled) available_chars+= itm.values
    }
    for(let i=0; i<length;i++){
        password+= available_chars.charAt(Math.floor(Math.random()*available_chars.length))
    }
    document.querySelector('.psw-area').innerHTML= password
}

document.querySelector('.slider-bar').addEventListener('change',(el)=>{
    length=el.target.value
    document.querySelector('.psw-length').innerHTML= el.target.value
})
document.querySelectorAll('input[type=checkbox]').forEach((element)=>{
    element.addEventListener('change',()=>{
        config[element.id].enabled=element.checked
    })
})
document.querySelector('.copy-icon').addEventListener('click',()=>{
    navigator.clipboard.writeText(document.querySelector('.psw-area').innerHTML)
    document.querySelector('.itm-left p').style.opacity=1
    document.querySelector('.itm-left p').style.visibility='visible'
    setTimeout(()=>{
        document.querySelector('.itm-left p').style.opacity=0
        document.querySelector('.itm-left p').style.visibility='hidden'
    },1000)
})
document.querySelector('.btn').addEventListener('click',generatePassword)

generatePassword()

