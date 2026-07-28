const celulares = [
     {
    id: 1,
    nome: `Iphone 17 pro Max`,
    preco: 8000.00 ,
    categoria:`IOS`,
    imagem: `https://www.google.com/url?sa=t&source=web&rct=j&url=https%3A%2F%2Fwww.bnestore.com.br%2Fapple%2Fapple-iphone-17-pro-max-256gb-cor-laranja-cosmico&ved=0CBYQjRxqFwoTCNiQg8b09ZUDFQAAAAAdAAAAABA4&opi=89978449`
},

{
    id: 2,
    nome: `Iphone 17`,
    preco: 5000.00 ,
    categoria:`IOS` ,
    imagem: `https://www.google.com/aclk?sa=L&ai=DChsSEwjU_pXG9PWVAxX6UEgAHeB-O1wYACICCAEQAxoCY2U&co=1&gclid=CjwKCAjwpqHTBhAcEiwAj2AfugNWhSydMpfpidY0IdaOz78ZubatTT5TJaZlizmVyQjgp6Jda394LxoCTpAQAvD_BwE&cid=CAASuwHkaJrCL3ILEe-cXMls4HkrreroyzJnRq0CBud4vIEgGCARy7JGWCh1cRSqy1h2b7Wdw9NSNk3eEsum1bFBPMKmMq-l9vvWasbcJsBOS1Q7g_rIfOFxk-hKlrLYerF84e2Tdpwt5cJ8A81QTGUs-_vd9QzTDTwcdpl7sVqy-Y9Ei0bPFo3G3MyiE5esB2RASe0fO1hrcoMUFeMLFQxszV2kgNZWlHgXW1DAPXpaQTzz0aN1-TQQYR-kAdpw&cce=2&sig=AOD64_1O328kf0XBLDnqkbYYsvwtVvP6bQ&ctype=5&q=&ved=2ahUKEwi94pDG9PWVAxUmLbkGHWGVH_sQ9aACKAB6BAgGEBo&adurl=`
},
{
    id:3,
    nome: `Iphone 16 pro Max`,
    preco: 5000.00 ,
    categoria: `IOS`,
    imagem: `https://www.google.com/aclk?sa=L&ai=DChsSEwiUsLXi9fWVAxW_VEgAHbxfHCwYACICCAEQARoCY2U&co=1&gclid=CjwKCAjwpqHTBhAcEiwAj2AfukkdRlsBoa_qD60YcACOU4ImqnWTzXbND7iHfN5rF41yoqTPUXFovxoC_ZcQAvD_BwE&cid=CAASuwHkaA8g_inwR9rlhP4UFlH-QWB6BBdBfkqFcgy5jPo04kgTMBjUZXnGMe2y80dYcqMGX0OR7AZmar9ilUAL2BMMPbs_gEIM5FRf_KxnSIcpTJjyQVD3vIRURWIp_02ZN1XGzeaW-WhxwlG74vk5ERsycpzkiCcDRjEbHphlq1ruVR85TISh2kta8bOUxAyU4obxb3cTlea91TWbdez805_Sq7MSTW3KoUR2rmLpxdpek7cs7rjw8wXsf1Yw&cce=2&sig=AOD64_2PT-JozM_vTfmggz4NP8QxVQJiyw&ctype=5&q=&ved=2ahUKEwj1wKzi9fWVAxUNCbkGHfbaFPwQ9aACKAB6BAgGEBE&adurl=`
},

{
    id:4,
    nome: `Iphone 16`,
    preco: 4500.00 ,
    categoria: `IOS` ,
    imagem: `https://www.google.com/aclk?sa=L&ai=DChsSEwiUsLXi9fWVAxW_VEgAHbxfHCwYACICCAEQCxoCY2U&co=1&gclid=CjwKCAjwpqHTBhAcEiwAj2AfuqM31D1YIdJCy2it6KHprEm7AKhGg_HJeD1zXlEOZ8yf0R2ziGErthoCMK4QAvD_BwE&cid=CAASuwHkaA8g_inwR9rlhP4UFlH-QWB6BBdBfkqFcgy5jPo04kgTMBjUZXnGMe2y80dYcqMGX0OR7AZmar9ilUAL2BMMPbs_gEIM5FRf_KxnSIcpTJjyQVD3vIRURWIp_02ZN1XGzeaW-WhxwlG74vk5ERsycpzkiCcDRjEbHphlq1ruVR85TISh2kta8bOUxAyU4obxb3cTlea91TWbdez805_Sq7MSTW3KoUR2rmLpxdpek7cs7rjw8wXsf1Yw&cce=2&sig=AOD64_3e4vq0tsrWD0rXSQ0fBh56_yJ-bA&ctype=5&q=&ved=2ahUKEwj1wKzi9fWVAxUNCbkGHfbaFPwQ9aACKAB6BAgGEEY&adurl=`
},

{
    id:5,
    nome: `S24`,
    preco: 4000.00 ,
    categoria: `Android`,
    imagem: `https://www.google.com/aclk?sa=L&ai=DChsSEwit9omU9vWVAxVuR0gAHYteCiwYACICCAEQAxoCY2U&co=1&gclid=CjwKCAjwpqHTBhAcEiwAj2AfumabTQAFMqpD6gEjbtqkA_BnJj7tmCmTf3h-KeJzt4ZlsW4LaFpYJhoC9UgQAvD_BwE&cid=CAASuwHkaFshQAX_7imXnf3TyvFly-v_KJVk1PxglmlqmnJRY-lk0BESvNkl4stGrPE3ILNn-W2186zlTvGsJrY97juHpn1vBWi6hL12tWRvnwwvxZP71KIFmIWjWfGoRgOPkU4AI_vGRf3y6MNCBOhNbyiF7cY40E691-zUKpDHbLf3qb89LPIwgX4n3mpKHN9H6ec-p3CeNGK7mg9t3Sa1Q_r59GUSBxW4hoIDFtL5nbAatqA6titPx-YDSj6T&cce=2&sig=AOD64_3pGnQ10wHF2DHKyS_mkDsn2DlNTg&ctype=5&q=&ved=2ahUKEwiMioSU9vWVAxWADbkGHYNQGQQQ9aACKAB6BAgFEBw&adurl=`
}
];

console.log(celulares)

console.log(`==============================`)

function filtrarPorCategoria(categoria){
    return celulares.filter(celular => celulares.categoria === Android
    );
}

console.log()