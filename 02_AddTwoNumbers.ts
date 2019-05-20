function ListNode(val) {
  this.val = val;
  this.next = null;
}

//定义链表
//链表中有头结点和一些方法

const addTwoNumbers = function(l1, l2) {
  let c = 0;
  // 0->
  let ret = new ListNode(0);
  let curr = ret

  while(l1 || l2) {
    let a = l1 ? l1.val : 0;
    let b = l2 ? l2.val : 0;
    let sum = a + b + c
    c = Math.floor(sum / 10)
    curr.next = new ListNode(sum % 10)
    if(l1) {
      l1 = l1.next
    }
    if(l2) {
      l2 = l2.next
    }
    curr = curr.next
  }
  if(c) {
    curr.next = new ListNode(c)
  }
  return ret.next
}
