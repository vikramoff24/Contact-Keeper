 const express = require('express');
 const app=expres();
 

const PORT =process.env.PORT||5000;

app.listen(PORT,()=>
console.log(`Server started on port ${PORT}`));