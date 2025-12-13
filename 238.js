function productExceptSelf(nums) {
    const temp1 =  []
    temp1.push(null)
    temp1.push(nums[0])
    const temp2 = []
    temp2.push(null)
    temp2.push(nums[length-1])
          for(let i = 2; i < nums.length; i++){
            temp1.push(temp1[i-1]*nums[i])
         
          }
      
          for(let j = nums.length-2; j >0; j--){
            let i = nums.length-1-j
              temp2.push(temp2[i+1]*nums[j])
          }
          console.log();
            temp2
          temp1 
};
productExceptSelf([1,2,3,4,5])