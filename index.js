function takeANumber(theLine, customerName) {
  let placeInLine = theLine.push(customerName) + 1;
  return `Welcome, ${customerName}. You are number ${placeInLine} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return 'There is nobody waiting to be served!';
  } else {
    let firstInLine = katzDeliLine.shift();
    return `Currently serving ${firstInLine}.`
  }
}

function currentLine(coolCatsInLine) {
  if (coolCatsInLine.length == 0) {
    return 'The line is currently empty.';
  } else {
    
    for (cat of coolCatsInLine) {

    }
    return `The line is currently: `
  }
}
