const ftoc = function(f_temp) {
  let ans = Number((f_temp - 32)/1.8);
  if(Number.isInteger(ans)) return ans;
  return Number(ans.toFixed(1));
}

const ctof = function(c_temp) {
  let ans = Number(c_temp*1.8+32);
  if(Number.isInteger(ans)) return ans;
  return Number(ans.toFixed(1));
}

module.exports = {
  ftoc,
  ctof
}
