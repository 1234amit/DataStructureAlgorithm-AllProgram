//defination of single linked list
class ListNode{
    constructor(val=0, next=null){
        this.val = val;
        this.next = next;
    }
}

var addTwoNumbers = function(l1,l2){
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;

    while(l1 !== null || l2 !== null || carry > 0){
        let sum = carry;

        if(l1 !== null){
            sum += l1.val;
            l1 = l1.next;
        }

        if(l2 !== null){
            sum += l2.val;
            l2 = l2.next;
        }

        carry = Math.floor(sum/10);
        current.next = new ListNode(sum % 10);
        current = current.next;

    }

    return dummyHead.next;
}



// const l1 = arrayToLinkedList([2, 4, 3]);
// const l2 = arrayToLinkedList([5, 6, 4]);
const result = addTwoNumbers([2, 4, 3], [5, 6, 4]);
console.log(addTwoNumbers(result))