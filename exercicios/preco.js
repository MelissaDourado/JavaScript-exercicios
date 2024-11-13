function precoFinal(preco, condicao){
if(condicao==="débito"){
     preco = preco - (preco*(10/100))
console.log (preco)
}
}
precoFinal (100,"débito")



function precoFinal(preco, condicao){
if (condicao === "pix"){
preco = preco - (preco* (15/100))
console.log (preco)
}
}
precoFinal(100, "pix")



function precoFinal (preco, condicao){
 if (condicao === "parcelado"){
    preco = preco + (preco* (10/100))
    console.log (preco)
}
}
precoFinal (100, "parcelado")