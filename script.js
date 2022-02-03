const btn = document.querySelector('button');
btn.addEventListener('click', function(){
    //document.body.style.backgroundColor = 'blue';
    //document.body.setAttribute('class', 'biru');
    document.body.classList.toggle('biru');
});

const newBtn = document.createElement('button');
const isiNewBtn = document.createTextNode('Acak Warna');
newBtn.appendChild(isiNewBtn);
newBtn.setAttribute('type', 'button');
btn.after(newBtn);

newBtn.addEventListener('click', function(){
    //Math.random() buat generate angka random dari 0-1
    //tapi ada tricknya klo misalkan mau buat dari 1-255
    //trick: Math.random() * 255 + 1;
    //namun masih belum angka bulat, jadi kalau ingin bil bulat ada fungsi lagi
    //utk bil bulat:
    //Math.round() = pembulatan biasa
    //Math.floor() = pembulatan ke bawah
    //Math.ceil() = pembulatan ke atas
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ','+ b + ')';
});

const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');
//method change buat deteksi ada perubahan
//method input buat klo digeser sambil click auto berubah
sMerah.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.background = 'rgb(' + r + ',' + g + ',' + b + ')';
});

sHijau.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.background = 'rgb(' + r + ',' + g + ',' + b + ')';
});

sBiru.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.background = 'rgb(' + r + ',' + g + ',' + b + ')';
});

//bikin koordinat mouse
document.body.addEventListener('mousemove', function(event){
    //utk tau koordinat X pake: object.clientX, dan di functionnya hrs dikasi parameter
    //co
    //console.log(event.clientX);

    //ukuran browser, letaknya di dalam window, utk tau lebar dri document
    //co
    //console.log(window.innerWidth);

    //rumus dptin angka rgb nya dari sumbu X dan Y
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerWidth) * 255);

    document.body.style.background = 'rgb(' + xPos + ',' + yPos + ', 100)';
});