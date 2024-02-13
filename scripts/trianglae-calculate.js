function calculateTriangleArea() {
    // get base value
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);
    console.log(base);

    // hight value
    const triangleHightInput = document.getElementById('triangle-height');
    const triangleHightText = triangleHightInput.value;
    const height = parseFloat(triangleHightText);
    console.log(height);

    //calculate triangle area
    const area = 0.5 * base * height;
    console.log(area);

    // display triangle area
    const triangleAreaSpan = document.getElementById('trianglae-area');
    triangleAreaSpan.innerText =  area;
}