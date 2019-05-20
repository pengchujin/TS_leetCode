// my
const twoSum = function(nums: number[], target: number):number[] {
  let target2:number
  for(let target1 = 0; target1<nums.length; target1++) {
    target2 = nums.indexOf(target - nums[target1])
    if(target2 >= 0 && target1!=target2) {
      return [target1, target2]
    }
  }
  }

// fast
const twoSumFast = function(nums: number[], target: number):number[] {
  let targets = {}
  for(let target1 = 0; target1 < nums.length; target1++) {
    if(targets[nums[target1].toString()] !== undefined) {
      return [ targets[nums[target1].toString()], target1]
    }
    targets[target-nums[target1]] = target1
  }
}


console.log(twoSum([1, 3, 2, 5, 6],11), 'slow')
console.log(twoSumFast([1, 3, 2, 5, 6],11), 'faster')
