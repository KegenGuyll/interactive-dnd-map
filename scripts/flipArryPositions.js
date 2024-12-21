
function flipArrayPositions(arr) {
  return arr.map(subArr => {
    if (subArr.length >= 2) {
      [subArr[0], subArr[1]] = [subArr[1], subArr[0]];
    }
    return subArr;
  });
}

// Example usage:
const input = [
  [
      0.182648,
      53.111957
  ],
  [
      0.183678,
      53.097529
  ],
  [
      0.171318,
      53.094643
  ],
  [
      0.177498,
      53.08289
  ],
  [
      0.190887,
      53.084746
  ],
  [
      0.192261,
      53.079796
  ],
  [
      0.199814,
      53.076909
  ],
  [
      0.216637,
      53.078765
  ],
  [
      0.220757,
      53.083714
  ],
  [
      0.2211,
      53.100415
  ],
  [
      0.215607,
      53.099384
  ],
  [
      0.21286,
      53.114224
  ],
  [
      0.203934,
      53.11546
  ],
  [
      0.191231,
      53.116284
  ],
  [
      0.182648,
      53.111957
  ]
]
const result = flipArrayPositions(input);
console.log(result); // Output: [[2,1], [5, 4], [8, 7]]