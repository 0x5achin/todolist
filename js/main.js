function btn() {
    let d = document.getElementById('input').value
    var dx = new Date();
    var X1 = dx.toLocaleTimeString()
    if (d == '') {
        alert('Enter Task :)')
    } else {
        let t = document.createElement('tr')
        let tb = document.getElementById('table')
        t.innerHTML = `<td>  ${d}  </td><td>${X1}</td><td><button onclick="del(this)"  class="add">❌</button></td>`
        tb.append(t)
        d.innerHTML = ''
    }


}

function del(t) {
    var n = t.parentNode.parentNode.rowIndex;
    document.getElementById('table').deleteRow(n);
}

function myFunction() {
    setInterval(function() { alert("Hello"); }, 3000);
}

function Mytime() {
    setInterval(function() {
        var dx = new Date();
        var X = dx.toLocaleTimeString()
        let dt = document.getElementById('time')
        dt.innerHTML = X;
    }, 1000)
}

Mytime()