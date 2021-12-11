
let btn = document.querySelector('.btn')

function convert(numb) {
    if (numb > 9) {
        let breakNum = numb.toString()
        let num3 = breakNum.split('')
        let num4 = num3.length - 1

        numb = 0
        for (num4; num4 > -1; --num4) {
            numb += (Number(num3[num4]))
        }
        return convert(numb)
    } else {
        return numb
    }
}

btn.onclick = () => {
    let input = document.querySelector('.input')
    let numb = Number(input.value)
    if (Number.isInteger(numb) && numb >= 0) {
        return document.querySelector('.result').textContent = `Результат: ${convert(numb)}`
    } else {
        return document.querySelector('.result').textContent = `Результат: искомое число должно быть ЦЕЛЫМ и НЕОТРИЦАТЕЛЬНЫМ`
    }
}