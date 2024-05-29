function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um numero!')
    } else {
        let n = Number(num.value)
        i = 1
        tab.innerHTML = ''
        while (i <= 10) {
            let item = document.createElement('option')
            item.text = `${n} X ${i} = ${n*i}`
            item.value = `tab${i}`
            tab.append(item)
            i++
        }
    }


}
    