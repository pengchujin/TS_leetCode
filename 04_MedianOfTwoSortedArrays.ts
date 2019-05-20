

const findMedianSortedArrays = function(nums1:number[], nums2:number[]):number {
  let n = 0
   let nums = nums1.concat(nums2)
   nums.sort(function(a,b){return a - b})
   console.log(nums)
   nums.push(0)
   nums.unshift(0)
    if(nums.length%2 == 0 ) {
      n = (nums[(nums.length/2-1)] + nums[(nums.length/2)])/2
    } else {
      n = nums[((nums.length-1)/2)] 
    }
    return n
};


console.log(findMedianSortedArrays([3],[-2, -1]))
