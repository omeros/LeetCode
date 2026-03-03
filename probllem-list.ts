// MY-ANSWERS:
//************** 1.Two Sum - O(n)********************************************//
function twoSum(nums: number[], target: number): number[] {
    const setData = new Set();
    setData.add( target - nums[0] )
// set1.add(42);
        for(let i = 1; i < nums.length; i++){
                if(setData.has(nums[i])){

                    //const arrayFromSet = Array.from(setData);
                    const index = nums.indexOf(target - nums[i]); 
                    return [i,index]
                }
                setData.add(target - nums[i] )        
        }
        return [0,0]
};
//**********************************************************//
//********************  121. Best Time to Buy and Sell Stock:- O(n^2) **************************************//
function maxProfit2(prices: number[]): number {
    let max  = prices[1] - prices[0];
    for(let i = 2; i < prices.length; i++){
        let idx = minIdx(prices.toSpliced(0,i))
        //    let ans = prices[i] - prices[idx];
        if(max <  (prices[i] - prices[idx]) ){
            console.log('index:',i)
            max = prices[i] - prices[idx];
        }
    }
    return max;
};


function minIdx(numbers:number[]): number{
    let min = 0;
    for(let i = 1; i < numbers.length; i++){
        if(numbers[i]< numbers[min]){
            min = i;
        }
    }
    return min;
}
//**********************************************************//
//**************  121. Best Time to Buy and Sell Stock: -O(n)********************************************//
function maxProfit(prices: number[]): number {
    if(prices.length==1) return 0
    if(prices.length==2) return prices[0]>prices[1] ? 0 : prices[1] - prices[0] 
    let max  = prices[1] < prices[0] ? 0 : (prices[1] - prices[0]) ;
    let idxMin = prices[1] < prices[0] ?  1 : 0;
    for(let i = 2; i < prices.length; i++){
        if(max <  (prices[i] - prices[idxMin]) ){
            console.log('index:',i)
            max = (prices[i] - prices[idxMin])<0 ? 0 : (prices[i] - prices[idxMin]);
        }
        if(prices[i]<prices[idxMin]){
            idxMin = i
        }
    }
    return max;
};
//**********************************************************//
//******************************* 217. Contains Duplicate ***********************//
function containsDuplicate(nums: number[]): boolean {
    const setData = new Set();
    setData.add(nums[0] )
    for(let i = 1; i < nums.length; i++){
        if(setData.has(nums[i])){
            return true
        }
        setData.add(nums[i])    
    }
    return false
};
//**********************************************************//
//*************************** .238 Product of Array Except Self - medium ************************//
function productExceptSelf(nums: number[]): number[] {
    const copyArray = [...nums]
    copyArray.reverse()
    const temp1 =  []
    temp1.push(1)
    temp1.push(nums[0])

    const temp2 =  []
    temp2.push(1)
    temp2.push(copyArray[0])
        for(let i = 1; i < nums.length; i++){
            temp1.push(temp1[i]*nums[i])
            temp2.push(temp2[i]*copyArray[i])
        }
    temp2.reverse();
    temp1.pop()
    temp2.shift()
    const final = []
    console.log('temp1==>',temp1)
    console.log('temp2===>',temp2); 
        for(let i = 0; i < temp1.length; i++){
            final.push(temp1[i]*temp2[i])
        }
        console.log('final solution==>:',final);
        return final

};
//**********************************************************//
function maxSubArray(nums: number[]): number {
    // let max = nums[0]
    // let temp1 = 0 

    // for(let i = 1; i < nums.length; i++){
        
    // }
    return 0 
};

function maxSubArrayRecursive(nums: number[],i: number, j: number, max: number){
    if(i==j-1){
        return max
    }
    let max1 = arraSum(nums, i,j)
    let max2 = arraSum(nums, i+1,j)
    let max3 = arraSum(nums, i,j+1)
    let max4 = arraSum(nums, i+1,j+1)
    const max5 = (max2<max1) ? max1: max2 
    const max6 = (max4<max3) ? max3: max4 
    const max7 = (max6<max5) ? max5: max6 
    const max8 = (max7<max) ? max: max7
    if(i<j-1){
        const max10 = maxSubArrayRecursive(nums, i+1, j, max8)
        if(j<nums.length - 1){
            const max9 = maxSubArrayRecursive(nums, i, j+1, max8)
            const max11 = maxSubArrayRecursive(nums, i+1, j+1, max8)
            const max12 =(max9 < max10 )  ?    (( max10 <max11)? max11 :  max10)  :  ( max9<max11? max11 :  max9)
            return (max < max12 )  ?  max12  :  max
        }else{
            return (max < max10 )  ?  max10  :  max
        }
    }else if(i==j-1){
            if(j<nums.length - 1){
                    const max9 = maxSubArrayRecursive(nums, i, j+1, max8)
                    return (max < max9 )  ?  max9  :  max
            }else{
                return max
                
            }
            
    }else{
        return max
    }
}
function arraSum(nums: number[], i: number, j: number): number{
    let counter = 0
    for(let index = i; index < j; index++){
        counter = counter + nums[index]
    }
    return counter
}
//****************** GPT Code Version: ************/
function maxSubArrayRecursive2(nums: number[]): number {
    function helper(i: number, j: number, maxSoFar: number): number {
        if (i >= nums.length) return maxSoFar;
        if (j > nums.length) return helper(i + 1, i + 1, maxSoFar);

        const currentSum = arraSum2(nums, i, j);
        const newMax = Math.max(maxSoFar, currentSum);

        // Try extending the current subarray (j + 1)
        const extend = helper(i, j + 1, newMax);
        // Try starting a new subarray (i + 1, i + 2)
        const next = helper(i + 1, i + 2, newMax);

        return Math.max(newMax, extend, next);
    }

    return helper(0, 1, Number.NEGATIVE_INFINITY);
}

function arraSum2(nums: number[], i: number, j: number): number {
    let sum = 0;
    for (let k = i; k < j; k++) sum += nums[k];
    return sum;
}
//*****************************************************************************/
//********************************9. Palindrome Number ***************************************/
function isPalindrome(x: number): boolean {
    if(x<0) return false
    let strx = x + ""
    const isEven = strx.length % 2 === 0; 
    if(strx.length<4){ 
        if(strx.length==1){
            return true
        }else return  isSmallerThenTree(strx)
    }
    let j = strx.length-1
    for(let i = 0; i<(strx.length)/2; i++){
        if(isEven){
              console.log('yes0')
            if(i !== j){
                console.log('yes1')
                if( strx[i] !== strx[j]){
                      console.log('yes3',strx[i], i ,strx[j], j )
                    return false
                } 
                  console.log('yes2')
                j--            }
        }else{
             console.log('no0')
              if(i !== j){
               if( strx[i] !== strx[j]) return false
                j--
            }
        }
       

    }
    return true
};

function isSmallerThenTree(strx){
    if (strx.length ==3){
        if(strx[0]!==strx[2]) {
              
            return false
        }else{
             console.log('isSmallerThenTree - yes')
            return true
        }
    }else if(strx.length ==2){
     if(strx[0]!==strx[1]) {
        return false
     }else{
        return true
     }
    }else if (strx.length ==1) return false
}




//***************** 13. Roman to Integer *********************/

function romanToInt(s: string): number {
    const map = new Map();
    map.set('I', 1);
    map.set('V', 5);
    map.set('X', 10);
    map.set('L', 50);
    map.set('C', 100);
    map.set('D', 500);
    map.set('M', 1000);
    let sum = 0 
    let previous = 0
    let now = 0
    for(let i=0; i<s.length;i++){
        now = map.get(s[i])
        if(i>0){
            previous = map.get(s[i-1])
        }
        if(previous>now){
            sum += now
        }else if(previous<now){
            sum -= previous
            sum += now-previous
        }else{
            sum += now
        }
    }
    return sum
};
//******************************************************** */

//***************************14. Longest Common Prefix******************************************** */
function longestCommonPrefix(strs: string[]): string {
    
    let minLengthObj = getMinLength(strs)
    let minLength = minLengthObj.minLength
    let equleStrs = ''
    for( let j=0; j<minLength; j++){
        for(let i=0; i<strs.length; i++){
            let tempCurrStr = strs[minLengthObj.idx][j]
            if(strs[i][j]!==tempCurrStr){
                return  equleStrs //strs[j-1]
            }        
        }
        equleStrs += strs[minLengthObj.idx][j]  ;
    }
    return equleStrs
    // strs[minLengthObj.idx]
};


function getMinLength(strs: string[]): {minLength: number, idx: number} {
    let minLength = strs[0].length
    const minLengthObj = {
        minLength: minLength, idx: 0
    }
        for(let i=1; i<strs.length; i++){
                if(strs[i].length<minLength){
                    minLengthObj.minLength = strs[i].length
                    minLengthObj.idx = i
                }          
        }
        return minLengthObj

}

//********************************************************* */


//*************************************** 20. Valid Parentheses  ********************************************** */
function isValid(s: string): boolean {
const openToCloseMap = new Map([
    ["(", ")"],
    ["{", "}"],
    ["[", "]"]
]);
const closeToOpenMap = new Map([
    [")", "("],
    ["}", "{"],
    ["]", "["],
]);
const myStack = []
    for(let i =0; i<s.length; i++){
        if(openToCloseMap.has(s[i])){     
            myStack.unshift(s[i])
        }
        if(closeToOpenMap.has(s[i])){
            let top = myStack.shift()
            let topClose = openToCloseMap.get(top)
            // let topClose = closeToOpenMap.get(s[i])
            if (s[i] !== topClose) {
                return false;
            } else {
                continue;
            }
        }
    }
    if(!myStack.length){
        return true
    }else{
        return false
    }
};
//********************************************************* */


//********************** 21. Merge Two Sorted Lists *********************************** */
 // Definition for singly-linked list.
    class ListNode {
        val: number
        next: ListNode | null
        constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
            this.next = (next===undefined ? null : next)
        }
    }

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if(!list1&&!list2) return null
    if(list1&&!list2) return list1
    if(!list1&&list2) return list2
    let headOfSortedList = new ListNode() 
    let sortedList = headOfSortedList
    while(list2!==null && list1!==null){
        let bigger = null
        let smaller = null
        if( ( list1.val<list2.val)&&(list1.next)&&(list2.next)&&(list2.val <= list1.next.val) ){
            console.log('1')
            bigger = list2.val
            smaller = list1.val
            sortedList.val = smaller
            sortedList.next = new ListNode( bigger, new ListNode() )   ;
            sortedList =(sortedList.next).next  //<(())
            list2 = list2.next
            list1 = list1.next
        }else if( (list1.val < list2.val)&&(list1.next)&&(list2.next)&&(list1.next.val<=list2.val) ){
            console.log('2')   //<==
            bigger = list1.next.val
            smaller = list1.val
            console.log('bigger:',bigger,"smaller:",smaller)
            sortedList.val = smaller
            sortedList.next = new ListNode( bigger, new ListNode() )   ;
            sortedList = (sortedList.next).next 
            list1 = (list1.next).next
        }else if( (list2.val <= list1.val)&&(list2.next )&&(list1.next)&&(list1.val < list2.next.val) ){
            console.log('3')
            bigger = list1.val
            smaller = list2.val
            sortedList.val = smaller
            sortedList.next = new ListNode( bigger, new ListNode() )  ;
            sortedList = (sortedList.next).next ;
            list2 = list2.next
            list1 = list1.next
        }else if( (list2.val <= list1.val)&&(list2.next)&&(list1.next)&&( list2.next.val<=list1.val) ){
            console.log('4')
            bigger = list2.next.val
            smaller = list2.val
            console.log('bigger:',bigger,"smaller:",smaller)
            sortedList.val = smaller
            sortedList.next =  new ListNode( bigger, new ListNode() )   ;
            sortedList = (sortedList.next).next ;
            list2 = (list2.next).next
        }else if((list1.val<=list2.val)&&(list1.next )&&(!list2.next)&&(list2.val <= list1.next.val)){
            console.log('5')
            bigger = list2.val
            smaller = list1.val
            console.log('bigger:',bigger,"smaller:",smaller)
            sortedList.val = smaller
            sortedList.next = new ListNode( bigger, new ListNode())//<= 
            sortedList =  (sortedList.next).next
            list1 = list1.next
            list2 = list2.next
        }else if((list1.val<=list2.val)&&(list1.next )&&(!list2.next)&&(list1.next.val<=list2.val)){
            console.log('5-1')
            bigger = (list1.next).val
            smaller = list1.val
            console.log('bigger:',bigger,"smaller:",smaller)
            sortedList.val = smaller
            sortedList.next = new ListNode( bigger, new ListNode())//<= 
            sortedList =  (sortedList.next).next
            list1 = (list1.next).next
        }else if((list2.val <= list1.val)&&(!list1.next )&&(list2.next)&&(list1.val < list2.next.val)){
            console.log('6')
            bigger = list1.val
            smaller = list2.val
            console.log('bigger:',bigger,"smaller:",smaller)
            sortedList.val = smaller
            sortedList.next = new ListNode( bigger, new ListNode())//<= 
            sortedList =  (sortedList.next).next
            list2 = list2.next
            list1 = list1.next
        }else if((list2.val <= list1.val)&&(!list1.next )&&(list2.next)&&(list2.next.val<=list1.val)){
            console.log('6-1 - list1=[5], list2=[1,2,4]')
            bigger = list2.next.val
            smaller = list2.val
            console.log('bigger:',bigger,"smaller:",smaller)
            sortedList.val = smaller
            sortedList.next = new ListNode( bigger, new ListNode())//<= 
            sortedList =  (sortedList.next).next
            list2 = (list2.next).next
        }else if((list2.val <= list1.val)&&(!list2.next)&&(list1.next ) ){
            console.log('6-2')
            bigger = list1.val
            smaller = list2.val
            console.log('bigger:',bigger,"smaller:",smaller)
            sortedList.val = smaller
            sortedList.next = new ListNode( bigger,  new ListNode()) //<=
            sortedList =  (sortedList.next).next
            list1 = list1.next
            list2 = list2.next
        }else   if((list1.val<=list2.val)&&(list1.next )&&(!list2.next)&&(list2.val <= list1.next.val)){
            console.log('6-3')
            bigger = list2.val
            smaller = list1.val
            console.log('bigger:',bigger,"smaller:",smaller)
            sortedList.val = smaller
            sortedList.next = new ListNode( bigger, new ListNode())//<= 
            sortedList =  (sortedList.next).next
            list1 = list1.next
            list2 = list2.next
        }else  if((list1.val<=list2.val)&&(list1.next )&&(!list2.next)&&(list1.next.val<=list2.val)){
            console.log('6-4')
            bigger = list1.next.val
            smaller = list1.val
            console.log('bigger:',bigger,"smaller:",smaller)
            sortedList.val = smaller
            sortedList.next = new ListNode( bigger, new ListNode())//<= 
            sortedList =  (sortedList.next).next
            list1 = (list1.next).next
        }else if((list1.val <= list2.val)&&(list2.next)&&(!list1.next )){//<===============
            console.log('6-5')
            bigger = list2.val
            smaller = list1.val
            sortedList.val = smaller
            sortedList.next = new ListNode( bigger, new ListNode()) //<=
            sortedList =  (sortedList.next).next
            list2 = list2.next
            list1 = list1.next 
        }else if((list2.val <= list1.val)&&(!list2.next)&&(!list1.next )){//<===============
            console.log('7')
            bigger = list1.val
            smaller = list2.val
            console.log('bigger:',bigger,"smaller:",smaller)
            sortedList.val = smaller
            sortedList.next = new ListNode( bigger, null) //<=
            sortedList =  (sortedList.next).next
            list2 = list2.next
            list1 = list1.next
        }else if((list2.val >= list1.val)&&(!list1.next )&&(!list2.next)){
            console.log('8')
            bigger = list2.val
            smaller = list1.val
            sortedList.val = smaller
            sortedList.next = new ListNode( bigger, null)//<= 
            sortedList = sortedList.next
            list2 = list2.next
            list1 = list1.next
        }
    }
    if(list1){
        sortedList.val = list1.val
        sortedList.next = list1.next
    }else  if(list2){
            sortedList.val = list2.val
            sortedList.next = list2.next
    }
    return headOfSortedList
};
//********************************************************* */


//************************ 26. Remove Duplicates from Sorted Array ********************************* */
function removeDuplicates(nums: number[]): number {
    let last = nums.length-1
    let k = 1
    let responsNums = nums
    let isDowmgrade = true
    let isNotTheSame = nums[0]< nums[nums.length-1] ? true : false
    for (let i = 0; i < nums.length-1; i++) {
        if (nums[i]==nums[nums.length-1]){
            break
        }
        while((nums[i]==nums[i+1])&&(2<nums.length)&&isNotTheSame&&(i!==nums.length-1 )){
            console.log("in while,  index - i =>",i)
        bubleValueUp(nums,i)
        } 
        if((nums[i]<nums[i+1])){
            k++
        }else if (nums[i]>nums[i+1]){
            break
        }
    }
    console.log(" k ====>",k)
    console.log("nums====>",nums)
    return k
};

function bubleValueUp(nums,j){
    for (let i = j; i < nums.length-1 ; i++) {
        let temp = nums[i+1]
        nums[i+1] = nums[i]
        nums[i] = temp
    }
}
//********************************************************************************/

//********************** 27. Remove Element **************************************/
function removeElement(nums: number[], val: number): number {
    let k = nums.length
    for (let i = 0; i < nums.length; i++) {
        if(nums[i]==val) k--
    }
    if(k==0) return k
    for (let i = 0; i < nums.length-1; i++) {
        console.log("i:",i,"nums[i]:",nums[i],"val:",val, "nums:",nums, "k:",k)
        while((nums[i]==val)&&(!isNumsWithTheSameValueFromThisIndex(nums,val, i))){
            console.log("in while,  index - i =>",i, "nums[i]:",nums[i])
            console.log("before bubble:",nums,"nums[i]:",nums[i])
            bubleValueUp2(nums,i)
            console.log("after bubble:",nums,"nums[i]:",nums[i])
        } 
    }
        console.log("k ==>:",k)
        return k
};

function bubleValueUp2(nums, j){
    for (let i = j; i < nums.length-1 ; i++) {
        let temp = nums[i+1]
        nums[i+1] = nums[i]
        nums[i] = temp
    }
}
function isNumsWithTheSameValueFromThisIndex(nums,val, j){
    for (let i = j; i < nums.length ; i++) {
        if(nums[i]!==val){
            console.log('isNumsWithTheSameValueFromThisIndex - false, i:',j)
            return false
        }
    }
    console.log('isNumsWithTheSameValueFromThisIndex - true, i:',j)
    return true
}
//*******************************************************************************************/

//****************** 58. Length of Last Word *************************************************** */
function lengthOfLastWord(s: string): number {
    const ans = s.split('').reverse().join('');
    let count:number = 0;
    let isStartWithEmpty:boolean
    (ans[0]==' ') ? isStartWithEmpty=true : isStartWithEmpty=false;
    if(!isStartWithEmpty){
        console.log('!isStartWithEmpty', ans)
        for(let i=0; i<ans.length; i++){
             //  console.log('ans[i]:',ans[i])
            if(ans[i]!==' '){
              //  console.log('ans[i]:',ans[i])
                count++;
            }else if(ans[i]==' '){
                    console.log('ans[i]:',ans[i])
                break
            }
        }
    }else{
        console.log('isStartWithEmpty', ans)
        let i=0;
        while((ans[i]===' ')&&(i<ans.length)){
            console.log('ans[i]:',ans[i],i)
            i++;
        }
        while((ans[i]!==' ')&&(i<ans.length)){
            console.log('ans[i]:',ans[i],i)
            i++;
            count++;
        }
    }
    return count
};

//*******************************************************************************************/

//********************* 66. Plus One *********************************************************/
function plusOne(digits: number[]): number[] {
    console.log('digits:',digits)
    let numStr = digits.join('')
    console.log('numStr:',numStr)
  
    let num = BigInt(numStr)
    num++
    console.log('num++:',num)
    const numberString = String(num)
    console.log('numberString:',numberString)
    const digitCharacters = numberString.split('');
    console.log('digitCharacters:',digitCharacters)
    const digitNumbers = digitCharacters.map(char => Number(char));
    console.log('digitNumbers:',digitNumbers)
    return  digitNumbers
};

//*******************************************************************************************/

//************** 67. Add Binary *************************************************************/

function addBinary(a: string, b: string): string {  
    const decimalNumberA = BigInt("0b" + a); 
    const decimalNumberB = BigInt("0b" + b); 
    console.log('decimalNumberA:',decimalNumberA)
    console.log('decimalNumberB:',decimalNumberB)
    const decimalAnswer = decimalNumberA + decimalNumberB
    return  decimalAnswer.toString(2);  
};
//*******************************************************************************************/

//***************************** 69. Sqrt(x) *******************************************************/
function mySqrt(x: number): number {
    let counter = 0 
    let multiple
    let exMultiple
    for(let i = 0; i<=x; i++){
        multiple = counter * counter
        exMultiple = (counter-1) * (counter-1)
        if(multiple==x) return counter
        if(x<multiple && exMultiple<x) return (counter-1)
            multiple = counter * counter
        if(multiple<x){
            counter++
        }
    }
};

//*******************************************************************************************/
//***************************** my fibonachi recursion - dinamic programing **************************************************************/

function fib(n: number){
    const  myMap = new Map()
    if(n==1 ||n ==2) return 1
    if(myMap.has(n)) return myMap.get(n)
    const cureent = fib(n-1) + fib(n-2)
    myMap.set(n, cureent)   
    return cureent
}
//*******************************************************************************************/
//*********************** 70. Climbing Stairs - dinamic programing ****************************************************/
function climbStairs(n: number): number {
    const  myMap = new Map<number, number>
    const ans = counter(0, n, myMap)
    return ans
};

function counter(count: number, n: number, myMap: any): number{
    if(count === n) return 1
    if(count > n) return 0
    let ans1 :number
    let ans2 :number
    if(myMap.has(count+1)) {
        ans1 = myMap.get(count+1)!
    }else{
        ans1 = counter(count+1,n,myMap)
        myMap.set(count+1, ans1)   
    }
    if(myMap.has(count+2)) {
        ans2 = myMap.get(count+2)! 
    }else{
        ans2 = counter(count+2,  n, myMap)
        myMap.set(count+2, ans2)  
    }
    return  ans1 + ans2
}
//*******************************************************************************************/
//**************************** 83. Remove Duplicates from Sorted List **********************************************/
/**
 * Definition for singly-linked list. **/
//   class ListNode {
//       val: number
//      next: ListNode | null
//       constructor(val?: number, next?: ListNode | null) {
//           this.val = (val===undefined ? 0 : val)
//           this.next = (next===undefined ? null : next)
//      }
//  }
 

function deleteDuplicates(head: ListNode | null): ListNode | null {
    let runningPointer = head
    let aheadPointer = head
    let secondRunningPointer = head
    let lastNumberPointer = head
    let counter = 0
    while(runningPointer){
        console.log('runningPointer.val:',runningPointer.val)
        // longer then 1
        if(runningPointer.next){
           console.log('runningPointer.val-2:',runningPointer.val)
           aheadPointer = runningPointer.next
           lastNumberPointer = runningPointer  
           while((runningPointer.next)&&runningPointer.val == aheadPointer.val){
              console.log('runningPointer.val-3:',runningPointer.val)
              runningPointer = runningPointer.next
                if(runningPointer&&runningPointer.next){
                   console.log('runningPointer.val-4:',runningPointer.val)
                   aheadPointer = runningPointer.next
                }
           }
           if((runningPointer)&&runningPointer.val !== aheadPointer.val){
            lastNumberPointer.next = aheadPointer
           }

        }
        // while(secondRunningPointer.val = runningPointer.val){
        //     runningPointer = runningPointer.next
        // }
        if((runningPointer)&&runningPointer.next){
            runningPointer = runningPointer.next
        }
         console.log('4')  
        console.log('lastNumberPointer.val - 1 -:',lastNumberPointer.val)
        // in case as [1,2,3,3,3]
        if((runningPointer)&&((runningPointer.next==null )||(runningPointer.next==undefined))){
            console.log('lastNumberPointer.val - 2 - :',lastNumberPointer.val)
            if(lastNumberPointer.val ==runningPointer.val){
                lastNumberPointer.next = null
            }
            console.log('5')  
            runningPointer = runningPointer.next
        }
            //runningPointer = null
        
    }
    return head
};

//*******************************************************************************************/
//**************************** 88. Merge Sorted Array **********************************************/
/** Do not return anything, modify nums1 in-place instead. */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    const copy = [...nums1];
    let i = 0;
    let j = 0;
    let nums1Index = m
    if((m>0)&&(n>0)){
        while( (i<nums1Index) && (j<n)){
                    console.log('nums1[i]:',nums1[i])
                    console.log('nums2[j]:',nums2[j])
                    console.log('')
                if(nums1[i]>nums2[j]){
                    nums1.splice(i, 0, nums2[j])
                    nums1Index++;
                    //result.push(nums2[j]);
                    j++;
                    i++
                    console.log('nums1[i] 1 :',nums1[i])
                    console.log('nums2[j] 1 :',nums2[j])
                }else if(nums1[i]<nums2[j]){
                    //result.push(nums1[i]);
                    i++;
                    console.log('nums1[i] 2 :',nums1[i])
                    console.log('nums2[j] 2:',nums2[j])
                } else  if(nums1[i]==nums2[j]){
                    nums1.splice(i, 0, nums2[j])
                    nums1Index++;
                    j++;
                    i++;
            }
                console.log('************* i *************', i )
                console.log('************* j *************', j)
                console.log('nums1 :',nums1)
            
        } 
        let nums3 = nums2.slice(j)
        nums1.splice(nums1Index, nums1.length - i);
        nums1.push(...nums3)
    }else if((m==0)&&(n>0)){
         console.log('nnnnnnnnnnn :',n)
        const nums3 =  nums2.slice(0,n)
           console.log('nums2 :',nums2)
         console.log('nums3 :',nums3)
        nums1.splice(m, nums1.length - m);
        nums1.push(...nums3)
    }else if((m>0)&&(n==0)){
        nums1.splice(m, nums1.length - m);
    }else if((m==0)&&(n==0)){
    }
};

//*******************************************************************************************/
//**************************** 94. Binary Tree Inorder Traversal**********************************************/
/**
 * Definition for a binary tree node. */
    class TreeNode {
        val: number
        left: TreeNode | null
        right: TreeNode | null
        constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
            this.val = (val===undefined ? 0 : val)
            this.left = (left===undefined ? null : left)
            this.right = (right===undefined ? null : right)
        }
    }


function inorderTraversal(root: TreeNode | null): number[] {
    const arr = []
    const ans = innerInorderTraversal(root, arr)
    return ans
};

function innerInorderTraversal(root: TreeNode | null,arr: number[]): number[] {
    if(!root) return arr
    console.log('innerInorderTraversal - arr:',arr,'root.val:',root.val)
    if((!root.left)&&(!root.right)) {
        arr.push(root.val)
        return arr
    }
    let returnArr: number[] = []
    if(root.left&&root.right)  {
      returnArr = innerInorderTraversal(root.left,arr)
      returnArr.push(root.val)
      console.log('root.left - returnArr:',returnArr, 'root.val:',root.val)
    }else if(root.left&&!root.right){
      returnArr = innerInorderTraversal(root.left,arr)
      returnArr.push(root.val)
      return returnArr
    }
    if(root.left&&root.right) {
         console.log('root.left&&root.right - returnArr -  before:',returnArr,'root.val:',root.val)
        returnArr = innerInorderTraversal(root.right,returnArr)
        console.log('root.left&&root.right - returnArr -  after:',returnArr, 'root.val:',root.val)
        return returnArr
    }else if(!root.left&&root.right){
        arr.push(root.val)
        console.log('!root.left&&root.right- returnArr -  before:',arr,'root.val:',root.val)
        returnArr = innerInorderTraversal(root.right,arr)
        console.log('!root.left&&root.right - returnArr -  after:',returnArr, 'root.val:',root.val)
        return returnArr
    }
   
};
//*******************************************************************************************/
//**************************** 100. Same Tree **********************************************/
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if(!p&&!q) return true
    if((p&&!q)||(!p&&q)) return false
    if (p.val!==q.val) {
        console.log('p.val!==q.vall')
         return false
    }
    if(((!p.left)&&(!p.right))&&((!q.left)&&(!q.right))) return true;
    if(p.val!==q.val){
        console.log('p.val!==q.val')
        return false;
     }
    if(!notSameKids(p,q)){
      console.log('notSameKids3')
       return false;
    }
    let result = null ;
    if(p.left&&p.right)  {
        return  isSameTree(p.left,q.left)&&isSameTree(p.right,q.right)
    }else if(p.left&&!p.right){
         return isSameTree(p.left,q.left)
    }else if(!p.left&&p.right){
         return isSameTree(p.right,q.right)
    }
}

function notSameKids(p,q){
     console.log('notSameKids start')
    if( ((p.left)&&(p.right)) && ((!q.left)||(!q.right))  ){
        console.log('notSameKids1')
        return false
    }else  if( ((!p.left)&&(q.left)) || ((p.left)&&(!q.left)) || ((p.right)&&(!q.right)) || ((!p.right)&&(q.right)) ){
        console.log('notSameKids2')
        return false
    }
    return true
}

//*************************************c*****************************************************/
//************************************* 101. Symmetric Tree ****************************************************/
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : c)
 *     }
 * }
 */

function isSymmetric(root: TreeNode | null): boolean {
    const leftTree = root.left
    const rightTree = root.right
    const leftTreeArr = leftInDepth(leftTree)
    const rightTreeArr = rightInDepth(rightTree)
    console.log('left Tree Arr',leftTreeArr,', right Tree Arr' ,rightTreeArr )
    let ans = false;
    if((Array.isArray(leftTreeArr))&&(Array.isArray(rightTreeArr))){
        ans = sameShallow(leftTreeArr,rightTreeArr )
    }else if(leftTreeArr===rightTreeArr){
        ans = true
    }
    return ans
};


function leftInDepth(node: TreeNode){
    if(!node) return
    // if((node.left&&node.right)==null) return node.val
    let arr = [];
    if(node&&node.left){
        arr.push(...leftInDepth(node.left))
    }else{
        arr.push('null')
    }
    arr.push(node.val)
    if(node&&node.right){   
        arr.push(...rightInDepth(node.right))
    }
    // if(!node.right&&!node.left) {
    //     arr.push(node.val)
    // }
    return arr

    // node.left ? leftInDepth(node.left):( node.right ? rightInDepth(node.right): arr[].push(node.val))
    // testing
}
function rightInDepth(node: TreeNode){
    if(!node) return
    let arr = [];
    if(node &&node.right){
        arr.push(...rightInDepth(node.right))
    }
    else{
        arr.push('null')
    }
    arr.push(node.val)
    if(node&&node.left){    
        arr.push(...leftInDepth(node.left))
    }
    // if(!node.right&&!node.left) {
    //     arr.push(node.val)
    // }
    return arr
    // if((node.left&&node.right)==null) return node.val
    // rightInDepth(node.right)
    // rightInDepth(node.left
}

const sameShallow = (a, b) =>
    a.length === b.length && a.every((v, i) => Object.is(v, b[i]));