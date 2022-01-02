//Create container
var container=document.createElement('div');
container.setAttribute('class','container');

//Create row1
var row1=document.createElement('div');
row1.setAttribute('class','row');
container.append(row1);

//Create Column
var col1=document.createElement('div');
col1.setAttribute('class','col-md-6');
row1.appendChild(col1)

//Create Box
var box=document.createElement('div');
box.setAttribute('id','Box-part');
col1.appendChild(box)

//Create a Image 
var image=document.createElement('img');
image.setAttribute('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKNQaJB9PZO13Cw7TKSqD1cMRrurppXpZ7Ew&usqp=CAU');
image.setAttribute('id','value')
// box.appendChild(image)



    setTimeout(() => {
        document.getElementById('Box-part').innerHTML='10';
        setTimeout(() => {
            document.getElementById('Box-part').innerHTML='9';
            setTimeout(() => {
                document.getElementById('Box-part').innerHTML='8';
                setTimeout(() => {
                    document.getElementById('Box-part').innerHTML='7';
                    setTimeout(() => {
                        document.getElementById('Box-part').innerHTML='6';
                        setTimeout(() => {
                            document.getElementById('Box-part').innerHTML='5';
                            setTimeout(() => {
                                document.getElementById('Box-part').innerHTML='4';
                                setTimeout(() => {
                                    document.getElementById('Box-part').innerHTML='3';
                                    setTimeout(() => {
                                        document.getElementById('Box-part').innerHTML='2';
                                        setTimeout(() => {
                                            document.getElementById('Box-part').innerHTML='1';
                                            setTimeout(() => {
                                            document.getElementById('Box-part').innerHTML='Happy Independence Day!!!';
                                            

                                            }, 1000);
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);





document.body.append(container);